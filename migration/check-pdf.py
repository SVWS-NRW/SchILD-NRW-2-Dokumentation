import json
from pathlib import Path
from pypdf import PdfReader
import pypdfium2 as pdfium
ROOT=Path(__file__).resolve().parent.parent
assets=json.loads((ROOT/'migration/assets.json').read_text(encoding='utf8'))
results=[]
for asset in assets:
    if not asset['path'].lower().endswith('.pdf'):continue
    p=ROOT/'public'/asset['path'].lstrip('/')
    reader=PdfReader(p)
    results.append({'path':asset['path'],'pages':len(reader.pages),'bytes':p.stat().st_size})
    if 'handbuch-schild-lupo-kurs42-22-auflage' in p.name:
        doc=pdfium.PdfDocument(p)
        out=ROOT/'tmp/pdfs';out.mkdir(parents=True,exist_ok=True)
        for i in [0,41]:doc[i].render(scale=1).to_pil().save(out/f'handbuch-seite-{i+1}.png')
(ROOT/'migration/pdf-check.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(f'{len(results)} PDFs readable; {sum(x["pages"] for x in results)} pages')
