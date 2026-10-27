"""Publish complete source archive and tool handbooks after content conversion."""
import hashlib, html, importlib.util, json, re, shutil, subprocess, urllib.parse as U, zipfile
from pathlib import Path
from lxml import html as H
ROOT=Path(__file__).resolve().parent
spec=importlib.util.spec_from_file_location('build',ROOT/'build-content.py');b=importlib.util.module_from_spec(spec);spec.loader.exec_module(b)
def load(p):return json.loads((ROOT/p).read_text(encoding='utf8'))
def write(p,s):b.write(p,s)
def js(p,x):b.js(p,x)
def main():
    if (ROOT/'migration/editorial-changes.json').exists():
        raise SystemExit('Erstimport abgeschlossen: Die gepflegten Tool-Artikel und Menüs werden nicht neu generiert.')
    inventory=load('migration/wiki-complete/inventory.json');articles=load('migration/articles.json')
    docs={p['pageid']:'/'+p['path'][:-3] for p in articles}
    wiki=load('migration/wiki-complete/assets.json');manuals=load('migration/manuals/assets.json')
    assets=load('migration/assets.json');asset_urls={a['source'].replace('http:','https:',1):a['path'] for a in assets}
    ns=load('migration/wiki-complete/siteinfo.json')['namespaces']
    file_lookup={b.norm(a['title']):a for a in wiki}
    def link(url):
        full=U.urljoin('https://www.svws.nrw.de/',url)
        key=full.replace('http:','https:',1).split('#')[0]
        if key in asset_urls:return asset_urls[key]
        p=U.urlsplit(full)
        if p.netloc=='wiki.svws.nrw.de':
            title=U.parse_qs(p.query).get('title',[''])[0]
            found=b.lookup.get(b.norm(title))
            if found:return b.routes[found['title']]+('#'+p.fragment if p.fragment else '')
            target=b.ARCHIVE_ROUTES.get(b.norm(title))
            if target:return target
        return full
    # Every namespace remains accessible, including support pages which are not
    # ordinary user documentation. They retain their exact current wikitext.
    grouped={}
    for p in inventory:
        grouped.setdefault(p['ns'],[]).append(p)
        raw=load(f'migration/wiki-complete/pages/{p["pageid"]}.json')
        rev=raw['revisions'][0];text=rev['slots']['main'].get('*','')
        dest=f'public/dateien/quellen/seite-{p["pageid"]}.json'
        target=ROOT/dest;target.parent.mkdir(parents=True,exist_ok=True)
        shutil.copy2(ROOT/f'migration/wiki-complete/pages/{p["pageid"]}.json',target)
        content='---\nsearch: false\nsidebar: false\noutline: false\ntitle: '+json.dumps('Wiki-Quelle: '+p['title'],ensure_ascii=False)+'\n---\n\n# '+html.escape(p['title'])+'\n\n'
        content+=f'Gesicherte Wiki-Seite · Namensraum {p["ns"]} · Version {rev["revid"]} · Stand {rev["timestamp"][:10]}.\n\n'
        if p['pageid'] in docs:content+=f'[Lesbaren Artikel öffnen]({docs[p["pageid"]]}) · '
        content+=f'[Originaldaten herunterladen](/dateien/quellen/seite-{p["pageid"]}.json) · [Zum Quellenarchiv](/quellen/)\n\n'
        if b.norm(p['title']) in file_lookup:
            a=file_lookup[b.norm(p['title'])];content+=f'[Gesicherte Originaldatei öffnen]({a["path"]})\n\n'
            if a['mime'].startswith('image/'):content+=f'![{html.escape(a["name"])}]({a["path"]})\n\n'
        fence='`'*max(3,1+max((len(x) for x in re.findall(r'`+',text)),default=0))
        content+='## Originalquelltext\n\n'+fence+'text\n'+text+'\n'+fence+'\n'
        write(f'quellen/wiki/seite-{p["pageid"]}.md',content)
    index='# Vollständiges Quellen- und Dateiarchiv\n\nHier bleiben sämtliche aktuellen Wiki-Seiten aller Namensräume und sämtliche hochgeladenen Originaldateien erhalten. Die lesbaren Fachartikel stehen in den Themenrubriken; Vorlagen, Dateibeschreibungen und andere Wiki-Seiten sind zusätzlich im Original gesichert.\n\n'
    index+=f'**{len(inventory)} Wiki-Seiten · {len(wiki)} Wiki-Dateien · {len(manuals)} zusätzliche Downloads**\n\n'
    index+='- [Alle Originaldateien](/quellen/dateien)\n- [Handbücher und weitere Downloads](/tools/handbuecher)\n- [Gesamten aktuellen Wiki-Quelltext herunterladen (ZIP)](/dateien/quellen/wiki-quelltexte.zip)\n\n## Namensräume\n\n'
    for ident,pages in grouped.items():
        label=ns[str(ident)]['*'] or 'Artikel'
        index+=f'- [{label}: {len(pages)} Seiten](/quellen/namensraum-{ident})\n'
        text=f'---\nsearch: false\n---\n\n# Quellen: {label}\n\n[Zur Archivübersicht](/quellen/)\n\n'
        for p in pages:text+=f'- [{html.escape(p["title"])}](/quellen/wiki/seite-{p["pageid"]})'+(f' · [Artikel]({docs[p["pageid"]]})' if p['pageid'] in docs else '')+'\n'
        write(f'quellen/namensraum-{ident}.md',text)
    index+='\nDie Sicherung enthält den aktuellen Inhalt jeder vorhandenen Seite. Frühere Bearbeitungsstände und gelöschte Seiten sind davon zu unterscheiden. Herkunft, Originalversionen und Prüfsummen stehen im Migrationsnachweis.\n'
    write('quellen/index.md',index)
    files='# Alle Originaldateien des Wikis\n\nAuch Dateien ohne aktuelle Verwendung in einem Artikel sind vollständig gesichert.\n\n| Datei | Größe | Originalbeschreibung |\n| --- | ---: | --- |\n'
    ids={b.norm(p['title']):p['pageid'] for p in inventory}
    for a in wiki:files+=f'| [{a["name"].replace("|","&#124;")}]({a["path"]}) | {a["bytes"]:,} Bytes | [Dateiseite](/quellen/wiki/seite-{ids[b.norm(a["title"])]}) |\n'
    write('quellen/dateien.md',files)
    z=ROOT/'public/dateien/quellen/wiki-quelltexte.zip'
    with zipfile.ZipFile(z,'w',zipfile.ZIP_DEFLATED) as archive:
        for p in (ROOT/'migration/wiki-complete').rglob('*.json'):archive.write(p,str(p.relative_to(ROOT/'migration/wiki-complete')))
    # Original official descriptions are kept with their source and local links.
    blocks={};page_blocks={}
    for source in load('migration/manuals/sources.json'):
        doc=H.fromstring((ROOT/source['file']).read_bytes());main=doc.xpath('//main')[0]
        for a in main.xpath('.//a[@href]'):a.set('href',link(a.get('href')))
        page_blocks[source['url']]=main
        for section in main.xpath('.//div[contains(@class,"paragraph text")]'):
            heading=section.xpath('.//h2')
            if heading:blocks[heading[0].text_content().strip().split('\n')[0].strip()]=(source,section)
    aliases={'notenmodul-grundschule':'Notenmodul für Grundschulen','enm-notenmanager':'ENM-Notenmanager für weiterführende Schulen','externes-notenmodul':'Externes Notenmodul für weiterführender Schulen (veraltet)','km2':'KM2','pm2':'PM2','s1plan':'S1Plan','ma2lbv':'MA2LBV','migrationstool':'Migrationstool','anonymisierungstool':'Anonymisierungstool','schuljahr-erhoehen':'Schuljahr Erhöhen','import-textdateien':'Import aus Textdateien'}
    page_alias={'kurs42':'https://www.svws.nrw.de/schild-nrw-2/kurs42','lupo':'https://www.svws.nrw.de/schild-nrw-2/lupo','asdpc':'https://www.svws.nrw.de/statistik/asdpc'}
    nav=load('.vitepress/navigation.json')
    for key,(title,_) in b.TOOL_DEFS.items():
        path='tools/'+key+'.md';existing=(ROOT/path).read_text(encoding='utf8')
        sections=[]
        if key in aliases and aliases[key] in blocks:
            source,block=blocks[aliases[key]];sections=[(source['url'],block)]
        elif key in page_alias:
            url=page_alias[key];main=page_blocks[url]
            sections=[(url,section) for section in main.xpath('.//div[contains(@class,"paragraph text")]')]
        content=f'# {title}\n\n'
        for url,block in sections:
            raw=H.tostring(block,encoding='unicode')
            md=subprocess.run([str(b.PANDOC),'-f','html','-t','gfm+raw_html','--wrap=none'],input=raw,encoding='utf8',capture_output=True,check=True).stdout
            md=re.sub(r'</?(div|span)\b[^>]*>','',md)
            content+=md.strip()+'\n\n'
        if sections:content+='Die Programmbeschreibung und Downloads wurden von der [offiziellen Programmseite]('+sections[0][0]+') gesichert.\n\n'
        links=[line for line in re.findall(r'^- \[.*$',existing,re.M) if any(']('+route+')' in line for route in docs.values())]
        if links:content+='## Anleitungen und Wiki-Artikel\n\n'+'\n'.join(links)+'\n\n'
        if key in ['kurs42','lupo']:
            book=next(a for a in manuals if 'handbuch-schild-lupo-kurs42-22.auflage.pdf' in a['source'])
            content+='## Gemeinsames Handbuch\n\n[Handbuch SchILD–LuPO–Kurs42, 22. Auflage – vollständige PDF]('+book['path']+')\n\n'
        if key=='weitere':content+='Weitere im ursprünglichen Wiki beschriebene Zusatzprogramme sind in den folgenden Artikeln erhalten.\n'
        write(path,content)
    downloads='# Handbücher und weitere Downloads\n\nDie folgenden Originaldateien werden lokal vorgehalten. Sie benötigen die ursprünglichen Wiki- oder Downloadseiten nicht zum Öffnen. Versions- und Rechteangaben in den Dateien bleiben erhalten.\n\n'
    for a in manuals:downloads+=f'- [{a["name"]}]({a["path"]}) · {a["bytes"]:,} Bytes\n'
    errors=load('migration/manuals/errors.json')
    gaps='# Noch nicht gesicherte externe Altdateien\n\nDiese Verweise stammen aus dem ursprünglichen Wiki. Die Dateien konnten beim Abruf nicht gesichert werden; die nachfolgenden Einträge sind daher keine verfügbaren Downloads. Alle unmittelbar im Wiki gespeicherten Originaldateien sind unabhängig davon vollständig erhalten.\n\n'
    for e in errors:
        name=U.unquote(U.urlsplit(e['source']).path.rsplit('/',1)[-1]);ident=b.slug(name)
        reason='Die ursprüngliche Adresse liefert HTTP 404 (Datei nicht gefunden).' if '404' in e['error'] else 'Der Abruf von dieser Arbeitsumgebung läuft in eine Zeitüberschreitung; die Erreichbarkeit von anderen Netzen ist damit nicht geklärt.'
        gaps+=f'<a id="{ident}"></a>\n\n## {html.escape(name)}\n\n{reason}\n\n[Ursprüngliche Adresse]({e["source"]})\n\n'
        for ref in e['references']:
            if ref['source'] in b.routes:gaps+=f'- Verwendet in [{ref["source"]}]({b.routes[ref["source"]]})\n'
        for article in articles:
            file=ROOT/article['path'];text=file.read_text(encoding='utf8')
            replacement='/quellen/fehlende-downloads#'+ident
            if e['source'] in text:file.write_text(text.replace(']('+e['source']+')',']('+replacement+')'),encoding='utf8')
    write('quellen/fehlende-downloads.md',gaps)
    if errors:
        downloads+='\n## Bereits an der Quelle nicht erreichbar\n\n'
        for e in errors:
            name=U.unquote(U.urlsplit(e['source']).path.rsplit('/',1)[-1])
            downloads+=f'- [{html.escape(name)}](/quellen/fehlende-downloads#{b.slug(name)}): noch nicht gesichert.\n'
    write('tools/handbuecher.md',downloads)
    overview='# Tools und Zusatzprogramme\n\nWählen Sie das gewünschte Programm. Die Unterseiten verbinden die vollständigen Wiki-Anleitungen mit lokal gesicherten Handbüchern und Downloads.\n\n'
    overview+='\n'.join(f'- [{title}](/tools/{key})' for key,(title,_) in b.TOOL_DEFS.items())+'\n\n- [Alle Handbücher und Downloads](/tools/handbuecher)\n'
    write('tools/index.md',overview)
    nav['sidebar']['/tools/'][0]['items'].append({'text':'Alle Handbücher und Downloads','link':'/tools/handbuecher'})
    nav['sidebar']['/hilfe/'][0]['items'].append({'text':'Vollständiges Quellenarchiv','link':'/quellen/'})
    nav['sidebar']['/quellen/']=[{'text':'Quellenarchiv','items':[{'text':'Übersicht','link':'/quellen/'},{'text':'Alle Originaldateien','link':'/quellen/dateien'},{'text':'Noch nicht gesicherte Altdateien','link':'/quellen/fehlende-downloads'}]+[{'text':ns[str(k)]['*'] or 'Artikel','link':f'/quellen/namensraum-{k}'} for k in grouped]}]
    tool_routes=[re.escape('/'+a['path'][:-3]) for a in articles if a['topic'].startswith('tools/')]
    tool_pattern='(?:/tools/|/hilfe/zusatzprogramme/|(?:'+'|'.join(tool_routes)+r')(?:\.html)?(?:$|[?#]))'
    for item in nav['nav']:
        if item['text']=='Tools':item['activeMatch']='^'+tool_pattern
        elif item['text']=='SchILD2':item['activeMatch']='^(?!'+tool_pattern+r')/(schild2|administration)/'
        elif item['text']=='Nachschlagen':item['activeMatch']='^(?!'+tool_pattern+r')/(programmreferenz|hilfe|bilder|quellen)/'
    js('.vitepress/navigation.json',nav)
    # Index ordinary tools articles together with the other user documentation.
    p=ROOT/'hilfe/artikel.data.mjs';s=p.read_text(encoding='utf8').replace("'index.md',", "'index.md', 'tools/**/*.md',");p.write_text(s,encoding='utf8')
    # Every non-standard download suffix must be interpreted as a file.
    p=ROOT/'.vitepress/config.mts';s=p.read_text(encoding='utf8').replace("'ods', 'xlsx', 'dat'", "'ods', 'xlsx', 'dat', 'chm', 'spd', 'exe', 'doc', 'txt', 'mdb'");p.write_text(s,encoding='utf8')
    # Add unused uploaded pictures to the catalogue as well, with provenance.
    catalog=load('.vitepress/image-catalog.json');known={x['path'] for x in catalog}
    for a in wiki:
        if a['mime'].startswith('image/') and a['path'] not in known:catalog.append({'path':a['path'],'title':Path(a['name']).stem,'original':a['name'],'folder':'wiki-archiv','captions':[],'articles':[]})
    js('.vitepress/image-catalog.json',catalog)
    # Replace the obsolete partial-import statement, retaining the separate
    # historical report in Git history.
    write('hilfe/ueber-diese-dokumentation.md',f'# Über diese Dokumentation\n\nDie Dokumentation sichert das SchILD2-Wiki für die Zeit nach seiner Abschaltung. {len(articles)} Inhaltsseiten sind als lesbare Artikel übertragen. Alle {len(inventory)} aktuellen Seiten sämtlicher Namensräume sowie alle {len(wiki)} Wiki-Dateien bleiben im [Quellenarchiv](/quellen/) erhalten.\n\n[Tools und Zusatzprogramme](/tools/) erschließen die einzelnen Programme und die lokal gesicherten Handbücher. Historische Verfahren und Quellenstände bleiben erkennbar; der Import ersetzt keine fachliche Aktualisierung.\n\nSchILD2 greift direkt auf seine Datenbank zu und benötigt keinen SVWS-Server.\n\n## Herkunft und Rechte\n\nDie Autoren- und Versionsangaben der Originalquellen und Dateien sind erhalten. Die technische Übertragung vergibt keine zusätzliche Nutzungslizenz. Die ursprüngliche Wiki-Barrierefreiheitserklärung und die dortigen Betreiberangaben sind als historische Quellen archiviert.\n')
    summary={'wiki_pages':len(inventory),'articles':len(articles),'wiki_files':len(wiki),'manual_downloads':len(manuals),'manual_errors':errors,'namespace_counts':{str(k):len(v) for k,v in grouped.items()},'source_zip_sha256':hashlib.sha256(z.read_bytes()).hexdigest()}
    js('migration/complete-summary.json',summary)
    print(json.dumps(summary,ensure_ascii=False),flush=True)
if __name__=='__main__':main()
