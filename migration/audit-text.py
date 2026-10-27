"""Compare words in the rendered wiki body against converted Markdown."""
import collections, concurrent.futures, html, json, re, subprocess, os, shutil
from pathlib import Path
from lxml import html as H
ROOT=Path(__file__).resolve().parent.parent
PANDOC=Path(os.environ.get('PANDOC') or shutil.which('pandoc') or ROOT.parent/'tools/pandoc-3.12.1/pandoc.exe')
def words(text): return collections.Counter(re.findall(r'[^\W\d_]{3,}',html.unescape(text).casefold()))
def audit(article):
    snapshot=json.loads((ROOT/f'migration/snapshot/{article["pageid"]}.json').read_text(encoding='utf8'))
    doc=H.fromstring(snapshot['text']['*'])
    for e in doc.xpath('//script|//style|//span[contains(@class,"mw-editsection")]|//*[@id="toc"]'):e.drop_tree()
    for e in doc.xpath('//p'):
        if re.fullmatch(r'\s*(?:Zurück.*|zurück.*|Zum Seitenanfang|zum Seitenanfang)\s*',e.text_content()) and len(e.xpath('.//a'))==1:e.drop_tree()
    source=words(' '.join(doc.itertext()))
    md=(ROOT/article['path']).read_text(encoding='utf8').split('---',2)[-1]
    rendered=subprocess.run([str(PANDOC),'-f','gfm','-t','html'],input=md,encoding='utf8',capture_output=True,check=True).stdout
    rendered=' '.join(H.fromstring('<div>'+rendered+'</div>').itertext())
    missing=source-words(rendered)
    # Replaced box labels and video embeds are present through native components.
    for token in ['hinweis','wichtig','achtung','beispiel','tipp']:missing.pop(token,None)
    return {'title':article['title'],'path':article['path'],'source_words':source.total(),'missing_words':missing.total(),'missing':dict(missing)}
if __name__=='__main__':
    articles=json.loads((ROOT/'migration/articles.json').read_text(encoding='utf8'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(audit,articles))
    (ROOT/'migration/text-audit.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf8')
    for r in results:
        if r['missing_words']>max(8,r['source_words']*.05):print(json.dumps(r,ensure_ascii=True))
