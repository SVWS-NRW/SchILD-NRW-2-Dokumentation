"""Fetch only the evaluated PDF sources into ignored temporary review storage."""
import hashlib, json, urllib.parse as U, urllib.request as R
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent

def main():
    sources=json.loads((ROOT/'migration/manuals/evaluated-pdfs.json').read_text(encoding='utf8'))
    out=ROOT/'tmp/pdf-source';out.mkdir(parents=True,exist_ok=True)
    for source in sources:
        url=source['source']
        if not U.urlsplit(url).path.lower().endswith('.pdf'):
            raise ValueError('Only PDF sources are allowed')
        name=U.unquote(U.urlsplit(url).path.rsplit('/',1)[-1]);dest=out/name
        if not dest.exists():
            with R.urlopen(url,timeout=60) as response:data=response.read()
            if not data.startswith(b'%PDF-'):raise ValueError('Response is not a PDF: '+url)
            dest.write_bytes(data)
        if hashlib.sha256(dest.read_bytes()).hexdigest()!=source['sha256']:
            raise ValueError('Source version differs from the evaluated document: '+url)
        print(name,flush=True)
    print('PDF sources are available in tmp/pdf-source. No published download files were created.')

if __name__=='__main__':main()
