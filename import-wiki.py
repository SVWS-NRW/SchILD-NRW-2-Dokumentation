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
    # The public importer always covers every namespace and every uploaded file.
    import runpy
    runpy.run_path(str(ROOT / "archive-complete.py"), run_name="__main__")

if __name__=='__main__': main()
