"""Reproducible public MediaWiki snapshot. Run from repository root."""
import concurrent.futures as cf
import hashlib, json, time, urllib.parse as U, urllib.request as R
from pathlib import Path

BASE = 'https://wiki.svws.nrw.de/mediawiki/'
ROOT = Path(__file__).resolve().parent
SNAP = ROOT / 'migration' / 'snapshot'
SNAP.mkdir(parents=True, exist_ok=True)

def get(url):
    for attempt in range(5):
        try:
            req = R.Request(url, headers={'User-Agent':'SchILD2-Dokumentation-Migration/1.0 (public documentation archive)'})
            with R.urlopen(req, timeout=90) as r: return r.read()
        except Exception:
            if attempt == 4: raise
            time.sleep(2 ** attempt)

def api(**kw):
    return json.loads(get(BASE + 'api.php?' + U.urlencode(dict(format='json', **kw))))

def main():
    pages=[]; cont={}
    while True:
        d=api(action='query',list='allpages',aplimit='max',**cont)
        pages.extend(d['query']['allpages'])
        cont=d.get('continue')
        if not cont: break
    (SNAP/'inventory.json').write_text(json.dumps(pages,ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'Inventory: {len(pages)} pages',flush=True)
    def fetch(p):
        dest=SNAP/f"{p['pageid']}.json"
        if not dest.exists():
            d=api(action='parse',pageid=p['pageid'],prop='text|wikitext|links|images|categories|sections|revid|displaytitle')
            if 'error' in d: raise RuntimeError(d)
            dest.write_text(json.dumps(d['parse'],ensure_ascii=False),encoding='utf-8')
        return p['title']
    with cf.ThreadPoolExecutor(max_workers=4) as pool:
        for i,title in enumerate(pool.map(fetch,pages),1):
            if i%25==0: print(f'{i}/{len(pages)} {title}',flush=True)
    manifest={p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in SNAP.glob('*.json')}
    (SNAP.parent/'snapshot-sha256.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
    print('Snapshot complete',flush=True)

if __name__=='__main__': main()
