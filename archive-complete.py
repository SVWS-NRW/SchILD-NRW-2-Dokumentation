"""Archive every current wiki page in every namespace and every uploaded file."""
import concurrent.futures as cf
import hashlib, importlib.util, json, time, urllib.parse as U
from pathlib import Path
from lxml import html as H
ROOT=Path(__file__).resolve().parent
spec=importlib.util.spec_from_file_location('net',ROOT/'import-wiki.py')
net=importlib.util.module_from_spec(spec);spec.loader.exec_module(net)
OUT=ROOT/'migration/wiki-complete';OUT.mkdir(parents=True,exist_ok=True)
def save(path,data):
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
def list_all(**kw):
    result=[];cont={}
    while True:
        d=net.api(action='query',**kw,**cont)
        result.extend(d['query'][kw['list']]);cont=d.get('continue')
        if not cont:return result
def main():
    site=net.api(action='query',meta='siteinfo',siprop='general|namespaces|rightsinfo')['query']
    save(OUT/'siteinfo.json',site)
    inventory=[]
    for ns in site['namespaces'].values():
        if ns['id']<0:continue
        pages=list_all(list='allpages',apnamespace=ns['id'],aplimit='max')
        print(f'Namespace {ns["id"]} {ns["*"]}: {len(pages)}',flush=True)
        inventory.extend(pages)
    save(OUT/'inventory.json',inventory)
    # Batch latest original content for every page, including templates, file
    # descriptions, user/discussion pages and MediaWiki interface messages.
    missing=[p for p in inventory if not (OUT/f'pages/{p["pageid"]}.json').exists()]
    for start in range(0,len(missing),50):
        batch=missing[start:start+50]
        data=net.api(action='query',pageids='|'.join(str(p['pageid']) for p in batch),prop='revisions|info',rvprop='ids|timestamp|content|sha1|contentmodel|comment|user',rvslots='main')
        for p in data['query']['pages'].values():save(OUT/f'pages/{p["pageid"]}.json',p)
        if start%200==0:print(f'Raw pages {start}/{len(missing)}',flush=True)
    docs=[p for p in inventory if p['ns'] in [0,4,12,14,200]]
    def parse(p):
        dest=ROOT/f'migration/snapshot/{p["pageid"]}.json'
        if not dest.exists():
            d=net.api(action='parse',pageid=p['pageid'],prop='text|wikitext|links|images|categories|sections|revid|displaytitle')
            if 'error' in d:raise RuntimeError(d)
            dest.write_text(json.dumps(d['parse'],ensure_ascii=False),encoding='utf8')
    with cf.ThreadPoolExecutor(max_workers=4) as pool:list(pool.map(parse,docs))
    save(ROOT/'migration/snapshot/inventory.json',docs)
    save(ROOT/'migration/snapshot-sha256.json',{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in (ROOT/'migration/snapshot').glob('*.json')})
    files=list_all(list='allimages',ailimit='max',aiprop='url|sha1|size|mime|timestamp|mediatype')
    save(OUT/'files.json',files)
    print(f'{len(inventory)} total pages, {len(docs)} documentation pages, {len(files)} uploaded files',flush=True)
    # Preserve the original readable path convention of the first import.
    spec=importlib.util.spec_from_file_location('build',ROOT/'build-content.py');build=importlib.util.module_from_spec(spec);spec.loader.exec_module(build)
    known={a['source']:a for a in json.loads((ROOT/'migration/assets.json').read_text(encoding='utf8'))}
    results=[];failures=[]
    def download(f):
        url=f['url'].replace('http://','https://',1)
        relative=known[url]['path'] if url in known else build.asset_path(url)
        dest=ROOT/'public'/relative.lstrip('/')
        if not dest.exists():dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(net.get(url))
        raw=dest.read_bytes()
        if hashlib.sha1(raw).hexdigest()!=f['sha1']:raise ValueError(f'File SHA-1 mismatch: {f["name"]}')
        return dict(f,source=url,path=relative,sha256=hashlib.sha256(raw).hexdigest(),bytes=len(raw))
    with cf.ThreadPoolExecutor(max_workers=5) as pool:
        tasks={pool.submit(download,f):f for f in files}
        for i,fut in enumerate(cf.as_completed(tasks),1):
            try:results.append(fut.result())
            except Exception as e:failures.append({'file':tasks[fut],'error':str(e)})
            if i%100==0:print(f'Files {i}/{len(files)}',flush=True)
    save(OUT/'assets.json',sorted(results,key=lambda a:a['path']))
    save(OUT/'errors.json',failures)
    save(OUT/'sha256.json',{str(p.relative_to(OUT)).replace('\\','/'):hashlib.sha256(p.read_bytes()).hexdigest() for p in OUT.rglob('*.json') if p.name!='sha256.json'})
    if failures:raise RuntimeError(f'{len(failures)} files need attention')
    print('Complete current wiki archive saved',flush=True)
if __name__=='__main__':main()
