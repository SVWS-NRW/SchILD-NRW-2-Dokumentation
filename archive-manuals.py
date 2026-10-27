"""Freeze official tool pages and all directly linked manuals/downloads."""
import concurrent.futures as cf
import hashlib, importlib.util, json, re, urllib.parse as U
from pathlib import Path
from lxml import html as H
ROOT=Path(__file__).resolve().parent
spec=importlib.util.spec_from_file_location('net',ROOT/'import-wiki.py');net=importlib.util.module_from_spec(spec);spec.loader.exec_module(net)
OUT=ROOT/'migration/manuals';OUT.mkdir(parents=True,exist_ok=True)
PAGES=['https://www.svws.nrw.de/schild-nrw-2/tools-module','https://www.svws.nrw.de/schild-nrw-2/kurs42','https://www.svws.nrw.de/schild-nrw-2/lupo','https://www.svws.nrw.de/statistik/asdpc']
HANDBOOK='https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf'
EXT=re.compile(r'\.(pdf|docx?|xlsx?|ods|odt|zip|7z|rtf|exe|dat|spd|txt|csv|chm)(?:$|[?#])',re.I)
def save(p,d):p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
def normalize(url):
    p=U.urlsplit(url);return U.urlunsplit((p.scheme,p.netloc,U.quote(p.path,safe='/%:@-._~!$&\'()*+,;='),p.query,''))
def main():
    sources=[];links={HANDBOOK:[{'source':'user','label':'Handbuch SchILD–LuPO–Kurs42, 22. Auflage'}]};errors=[]
    for i,url in enumerate(PAGES):
        raw=net.get(url);file=OUT/f'page-{i}.html';file.write_bytes(raw)
        doc=H.fromstring(raw);main=doc.xpath('//main')[0]
        sources.append({'url':url,'file':str(file.relative_to(ROOT)).replace('\\','/'),'title':main.xpath('string(.//h1)').strip(),'sha256':hashlib.sha256(raw).hexdigest()})
        for a in main.xpath('.//a[@href]'):
            href=U.urljoin(url,a.get('href'));href=normalize(href)
            if EXT.search(U.urlsplit(href).path):links.setdefault(href,[]).append({'source':url,'label':a.text_content().strip()})
    for p in (ROOT/'migration/snapshot').glob('*.json'):
        if not p.stem.isdigit():continue
        d=json.loads(p.read_text(encoding='utf8'));doc=H.fromstring(d['text']['*'])
        for a in doc.xpath('//a[@href]'):
            href=normalize(U.urljoin(net.BASE,a.get('href')))
            if U.urlsplit(href).netloc!='wiki.svws.nrw.de' and EXT.search(U.urlsplit(href).path):links.setdefault(href,[]).append({'source':d['title'],'label':a.text_content().strip()})
    save(OUT/'sources.json',sources);save(OUT/'links.json',links)
    resolutions=OUT/'resolutions.json'
    if resolutions.exists():
        for resolved in json.loads(resolutions.read_text(encoding='utf8')):
            local=ROOT/'public'/resolved['path'].lstrip('/')
            if local.is_file() and hashlib.sha256(local.read_bytes()).hexdigest()==resolved['sha256']:
                links.pop(resolved['original'],None)
    def fetch(item):
        url,refs=item
        name=U.unquote(U.urlsplit(url).path.rsplit('/',1)[-1]);ext=Path(name).suffix.lower()
        import unicodedata
        slug=re.sub('[^a-z0-9]+','-',unicodedata.normalize('NFKD',Path(name).stem.lower()).encode('ascii','ignore').decode()).strip('-')
        relative='/dateien/handbuecher/'+slug+'-'+hashlib.sha256(url.encode()).hexdigest()[:8]+ext
        dest=ROOT/'public'/relative.lstrip('/')
        if not dest.exists():dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(net.get(url))
        data=dest.read_bytes()
        if ext=='.pdf' and not data.startswith(b'%PDF-'):raise ValueError('Kein PDF: '+url)
        if not data:raise ValueError('Leere Datei')
        return {'source':url,'path':relative,'name':name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'references':refs}
    assets=[]
    with cf.ThreadPoolExecutor(max_workers=4) as pool:
        tasks={pool.submit(fetch,x):x for x in links.items()}
        for i,f in enumerate(cf.as_completed(tasks),1):
            try:assets.append(f.result())
            except Exception as e:errors.append({'source':tasks[f][0],'references':tasks[f][1],'error':str(e)})
            if i%10==0:print(f'Downloads {i}/{len(links)}',flush=True)
    save(OUT/'assets.json',sorted(assets,key=lambda a:a['path']));save(OUT/'errors.json',errors)
    print(f'{len(assets)} saved; {len(errors)} unresolved sources',flush=True)
if __name__=='__main__':main()
