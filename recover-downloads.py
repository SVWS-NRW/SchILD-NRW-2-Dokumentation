"""Try surviving official addresses for obsolete external document links."""
import concurrent.futures as cf, hashlib, json, urllib.parse as U, urllib.request as R
from pathlib import Path
ROOT=Path(__file__).resolve().parent
def fetch(item):
    old,candidate=item
    try:
        with R.urlopen(candidate,timeout=15) as response:data=response.read()
        if candidate.lower().endswith('.pdf') and not data.startswith(b'%PDF'):return None
        if not data:return None
        return old,candidate,data
    except Exception:return None
def main():
    errors=json.loads((ROOT/'migration/manuals/errors.json').read_text(encoding='utf8'))
    candidates=[]
    for e in errors:
        url=e['source'];name=U.urlsplit(url).path.rsplit('/',1)[-1]
        if 'Udlfile' in name:continue
        if 'schulverwaltungsprogramme' in url:
            candidates.extend((url,x) for x in [url,url.replace('https:','http:')]);continue
        for prefix in ['https://www.svws.nrw.de/system/files/media/document/file/','https://www.svws.nrw.de/sites/default/files/media/document/file/']:
            candidates.extend((url,prefix+n) for n in [name,name.lower(),name.lower().replace('_','-')])
    out=ROOT/'migration/recovered';out.mkdir(exist_ok=True)
    recovered=[]
    with cf.ThreadPoolExecutor(max_workers=8) as pool:
        for result in pool.map(fetch,candidates):
            if not result:continue
            old,url,data=result
            if any(x['original']==old for x in recovered):continue
            name=U.unquote(U.urlsplit(url).path.rsplit('/',1)[-1]);dest=out/name;dest.write_bytes(data)
            recovered.append({'original':old,'retrieved_from':url,'file':name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
            print('Recovered '+old,flush=True)
    (out/'results.json').write_text(json.dumps(recovered,indent=2)+'\n',encoding='utf8')
    print(f'{len(recovered)} additional original downloads recovered',flush=True)
if __name__=='__main__':main()
