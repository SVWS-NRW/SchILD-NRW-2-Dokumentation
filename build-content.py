"""Convert the frozen SchILD2 MediaWiki snapshot into maintained Markdown."""
import os
import concurrent.futures as cf
import collections, copy, hashlib, html, json, re, shutil, subprocess, unicodedata
import urllib.parse as U
from pathlib import Path
from lxml import html as H, etree
import importlib.util
spec=importlib.util.spec_from_file_location('snapshot_import',Path(__file__).with_name('import-wiki.py'))
net=importlib.util.module_from_spec(spec); spec.loader.exec_module(net)
ROOT=Path(__file__).resolve().parent
REF=ROOT.parent/'schild3-reference'
PANDOC=Path(os.environ.get('PANDOC') or shutil.which('pandoc') or ROOT.parent/'tools/pandoc-3.12.1/pandoc.exe')
SNAP=ROOT/'migration/snapshot'
DATA=[json.loads(p.read_text(encoding='utf8')) for p in SNAP.glob('*.json') if p.stem.isdigit()]
DATA.sort(key=lambda d:d['pageid'])
bytitle={d['title']:d for d in DATA}
def norm(s): return s.replace('_',' ').strip().casefold()
lookup={norm(d['title']):d for d in DATA}
ALL_PAGES=json.loads((ROOT/'migration/wiki-complete/inventory.json').read_text(encoding='utf8')) if (ROOT/'migration/wiki-complete/inventory.json').exists() else []
ARCHIVE_ROUTES={norm(p['title']):f'/quellen/wiki/seite-{p["pageid"]}' for p in ALL_PAGES}
ALIASES={'DSGVO-Einwilligungen':'Einwilligungen','Individualdaten II':'Individual-Daten II','Floskeln bearbeiten':'"Floskeln" bearbeiten','Schnittstelle-Schild-NRW':'Schnittstelle Schild-NRW','JaNa-Export':'JaNa-Export (Jahrgang und Nationalität)','Aus Archiv drucken':'Report aus Archiv drucken','Tools':'Zusatzprogramme / Tools'}
for old,new in ALIASES.items():lookup[norm(old)]=bytitle[new]
def slug(s):
    for a,b in [('ä','ae'),('ö','oe'),('ü','ue'),('ß','ss')]: s=s.lower().replace(a,b)
    return re.sub(r'[^a-z0-9]+','-',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode()).strip('-') or 'artikel'
def write(p,s):
    p=ROOT/p; p.parent.mkdir(parents=True,exist_ok=True); p.write_text(s,encoding='utf8')
def js(p,v): write(p,json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def source_url(title): return net.BASE+'index.php?'+U.urlencode({'title':title})

# Task portals follow SchILD3. The seed articles and menu membership are SchILD2's.
TOPICS={
 'einstieg/grundlagen':('Grundlagen und Orientierung',['Hauptseite','Schild-NRW-Index','Hauptfenster','Iconleiste','Karteikasten','Container','Inhaltsverzeichnis']),
 'einstieg/erste-schritte':('Erste Schritte',['Neuaufnahmen in Schild-NRW 001','Einführung in die Gruppenprozesse 001','Schule bearbeiten','Schild-NRW-Tutorials']),
 'schild2/schueler':('Schülerdaten und Laufbahn',['Individual-Daten I','Individual-Daten II','Erz.-Berechtigte','Schulbesuch','Weitere Adressen','Laufbahninfo','Einwilligungen','Grundschuldaten eingeben','Fördermaßnahmen','Eintragung der Schüler im offenen Ganztag','Schüler im offenen Ganztag und in der Übermittagsbetreuung','Eingabe von Flüchtlingskindern','Herkunftssprachlicher Unterricht BASS 13-61 Nr. 2','Deutschförderung nach BASS 13-63 Nr. 3 (Stand 29.08.2024)','Sprachprüfung (Feststellungsprüfung) anstelle von Pflichtfremdsprachen oder Wahlpflichtfremdsprachen BASS 13-61 Nr. 1']),
 'schild2/auswahl':('Auswählen und filtern',['Auswahl','Benutzung von Filter I 001','Individuelle Schülergruppen bearbeiten und nutzen','Sortierung ändern']),
 'schild2/lehrkraefte':('Lehrkräfte',['Lehrkräfte']),
 'schild2/unterricht-kataloge':('Unterricht und Kataloge',['Schulverwaltung','Kataloge','Leistungsdaten Klassenunterricht','Leistungsdaten Kursunterricht','Teilleistungen Einrichten und Verwalten','Teilleistungen einrichten und verwalten','Nicht mögliche Fachkombinationen','Eingabe der GeR-Niveaus']),
 'schild2/gruppenprozesse':('Gruppenprozesse',['Gruppenprozesse','Allgemeines','Fächer','Teilleistungen','Betrieb/Adresse zuweisen']),
 'schild2/versetzung':('Versetzung und Abschnittswechsel',['Lernabschnitte, Versetzung','Versetzung ins neue Schuljahr / Abschnittswechsel durchführen','Hochschreibungsalgorithmus','Versetzungstabelle bei jahrgangsübergreifenden Klassen','Umgang mit Bildungsgangswechlsern am BK','Umstellung der Gymnasien von G8 auf G9']),
 'schild2/import-export-statistik':('Import, Export und Statistik',['Datenaustausch','Statistik / amtliche Schuldaten','Schnittstelle Schild-NRW','Schnittstellenbeschreibung','Vorbemerkungen-Schnittstelle','Statistik mit ASDPC','JaNa-Export (Jahrgang und Nationalität)','Export für BAN-Portal','Datenexport nach Excel oder OpenOffice-Calc']),
 'zeugnisse/vorbereitung':('Noten und Zeugnisvorbereitung',['Noten, Zeugnisvorbereitung','Zeugnisvorbereitungen und Druck','Akt. Halbjahr','Benutzung des externen Notenmoduls','Externes Notenmodul','Excel-Notendateien','Import der Zeugnisformulare in Schild-NRW','Angaben für Ankreuzzeugnisse/-kompetenzen','Fachbezogene Bemerkungen']),
 'zeugnisse/grundschule':('Grundschulzeugnisse',['Grundschulzeugnisse Textzeugnis','Grundschulzeugnisse Ankreuzzeugnis','Grundschulzeugnisse Lernstandsberichte','Textzeugnisse drucken','Textzeugnisse erzeugen','Textzeugnisse zuordnen','Übersicht Primarstufe']),
 'zeugnisse/sekundarstufen':('Sekundarstufen und Abitur',['Abitur','Abiturdurchlauf','Gruppenprozesse Abitur','Gruppenaktionen Abitur','Übersicht S I','Übersicht S II','Gesamtübersicht','FHR','ZP10/ZK10','Sprachenfolge bei Seiteneinsteigern des Gymnasiums in Zeugnis korrekt ausgeben','Bescheinigungen des Bilingualen Bildungsgangs','Serienbrief Nichtversetzte']),
 'zeugnisse/berufskolleg':('Berufskolleg',['BKAbschluss','BK-Abschluss','Anlage D01','Eintragung Herkunft am BK/WBK']),
 'reporting/verwaltung':('Reports verwalten und drucken',['Druckausgabe','Reportexplorer aufrufen','Standard-Formulare drucken','Report aus Archiv drucken','Word-Seriendruck','Mailversand aus der Reporting']),
 'reporting/erstellung':('Reports erstellen',['Reporting','Reportbaukasten','Erstellen einfacher Reports','Einrichtung des Report-Explorers','Ausgewählte Beispiele aus der BASIC-Sammlung','Eigene Datenquellen für Schild-Reports','DQ01-Demo.spd']),
 'reporting/rap':('RAP-Funktionen',['RAP-Funktionen']),
 'administration/installation':('Installation und Datenbankverbindung',['Schild-NRW Installation','Access-Datenbanken und Windows-Server 2012','UDL-Dateien unter 64-BIT','Einrichtung des ENM-Moduls unter Ubuntu 18.04']),
 'administration/datenbanken':('Datenbanken und Sicherung',['Datei','Datensicherung','Datenbank kopieren','Datenbank reparieren und komprimieren','Schild-NRW-Daten in eine andere Datenbank übertragen (migrieren)','Transaktionsprotokoll verwenden','Aufräumen','SQL-Befehle eingeben']),
 'administration/benutzer-einstellungen':('Benutzer und Einstellungen',['Extras','Programm-Einstellungen','Benutzer','Benutzerverwaltung','Benutzerverwaltung Useradmn.exe','Benutzerverwaltung PlugIn-DLL','Datenschutzhinweis','Dokumentenverwaltung','Dokumentenverwaltung aufräumen','Dokumentenverzeichnisse aktualisieren','Shortcuts in Schild-NRW']),
 'hilfe/zusatzprogramme':('Zusatzprogramme und Handbücher',['Zusatzprogramme / Tools','Externe Blockungs-Tools','Lupo:LuPO','LuPO Einleitung','SchILDweb','SchildChat.exe','Kursplanung KPlan.exe','Kursverwaltung KPlan.exe','Konferenzmodul KM2.exe','Modulbenutzung','Prognos','SEM:Schnelleingabemodul']),
 'hilfe/probleme':('Hilfe und Problemlösungen',['Hilfe','Fehler beim Export der Statistikdateien - Klasse nicht registriert']),
 'hilfe/wiki-archiv':('Wiki und Versionsgeschichte',['Versionsgeschichte Schild-NRW','Youtube','Testseite','Erklärung zur Barrierefreiheit']),
}
TOOL_DEFS={
 'kurs42':('Kurs42',['Kurs42','K422CNF','Kurs42 To CNF','Klausurplanung CNF','Multi Klausurplanung CNF','News:Kurs42']),
 'lupo':('LuPO',['Lupo:','LuPO ']),
 'asdpc':('ASDPC',['Statistik mit ASDPC']),
 'notenmodul-grundschule':('Notenmodul für Grundschulen',[]),
 'enm-notenmanager':('ENM-Notenmanager',[]),
 'externes-notenmodul':('Externes Notenmodul für weiterführende Schulen',['Externes Notenmodul','Benutzung des externen Notenmoduls','Einrichtung des ENM-Moduls']),
 'km2':('KM2 – Konferenzmodul',['KM2','Konferenzmodul KM2','Modulbenutzung']),
 'pm2':('PM2 – Prognosemodul',['Prognos']),
 's1plan':('S1Plan',['S1PLAN:']),
 'ma2lbv':('MA2LBV',[]),
 'migrationstool':('Migrationstool',['Schild-NRW-Daten in eine andere Datenbank übertragen']),
 'anonymisierungstool':('Anonymisierungstool',[]),
 'import-textdateien':('Import aus Textdateien',['Import aus Textdateien']),
 'schuljahr-erhoehen':('Schuljahr erhöhen',[]),
 'weitere':('Weitere Zusatzprogramme',['Zusatzprogramme / Tools','Externe Blockungs-Tools','SchILDweb','SchildChat','Kursplanung KPlan','Kursverwaltung KPlan','SEM:']),
}
for key,(name,_) in TOOL_DEFS.items():TOPICS['tools/'+key]=(name,[])
assigned={}
# Menu ownership uses only the direct links in the corresponding source article.
for topic,(_,seeds) in TOPICS.items():
    for seed in seeds:
        if seed in bytitle: assigned[seed]=topic
for topic,(_,seeds) in TOPICS.items():
    for seed in seeds:
        if seed not in bytitle: continue
        # Avoid cross-topic tutorial and umbrella links assigning unrelated articles.
        if seed not in ['Auswahl','Schulverwaltung','Kataloge','Allgemeines','Fächer','Teilleistungen','Lernabschnitte, Versetzung','Noten, Zeugnisvorbereitung','Gruppenaktionen Abitur','Gruppenprozesse Abitur','RAP-Funktionen','Druckausgabe','Datenaustausch','Aufräumen']: continue
        doc=H.fromstring(bytitle[seed]['text']['*'])
        for a in doc.xpath('//a[@href]'):
            if re.search(r'(?i)zurück|seitenanfang',a.text_content()): continue
            t=U.parse_qs(U.urlsplit(a.get('href')).query).get('title',[''])[0].replace('_',' ')
            if t in bytitle and t not in assigned: assigned[t]=topic
for d in DATA:
    t=d['title']
    if re.match(r'^(?:BK-Abschluss:|[A-E]\d\d )',t): assigned[t]='zeugnisse/berufskolleg'
    elif re.match(r'^(?:Lupo:|LuPO |Kurs42[: ]|News:Kurs42|S1PLAN:|K422CNF:|Klausurplanung CNF:|Multi Klausurplanung CNF:|Prognos:|KM2)',t): assigned[t]='hilfe/zusatzprogramme'
    elif t.startswith('Statistik mit ASDPC'): assigned[t]='schild2/import-export-statistik'
    elif t not in assigned and re.fullmatch(r'[A-Za-z0-9]+',t) and re.search(r'[a-z][A-Z]',t): assigned[t]='reporting/rap'
    elif t not in assigned: assigned[t]='schild2/gruppenprozesse'
for t in ['Haltestelle','JG-Tabelle-GY','JG-Tabelle-GE','JG-Tabelle-GS','JG-Tabelle-BK','Erzieher mit Funktionen']:
    assigned[t]='schild2/unterricht-kataloge'
for t in ['Wiedervorlage','Eintrag in Wiedervorlage machen']:
    assigned[t]='schild2/schueler'
assigned['Dateimaske bearbeiten']='administration/benutzer-einstellungen'
assigned['Hauptseite']='hilfe/wiki-archiv'
for d in DATA:
    t=d['title']
    if t.startswith(('Schild-NRW Wiki:','Hilfe:','Kategorie:')):assigned[t]='hilfe/wiki-archiv'
    for key,(_,prefixes) in TOOL_DEFS.items():
        if any(t.startswith(prefix) for prefix in prefixes):assigned[t]='tools/'+key;break
PREVIOUS={p['title']:'/'+p['path'][:-3] for p in json.loads((ROOT/'migration/articles.json').read_text(encoding='utf8'))} if (ROOT/'migration/articles.json').exists() else {}
routes={}; used=set()
for d in DATA:
    route=PREVIOUS.get(d['title'],'').lstrip('/') or assigned[d['title']]+'/'+slug(d['title'])
    if route in used: route+='-'+str(d['pageid'])
    used.add(route); routes[d['title']]='/'+route

def original_asset(url):
    url=U.urljoin(net.BASE,url)
    p=U.urlsplit(url)
    if p.netloc=='wiki.svws.nrw.de' and '/images/thumb/' in p.path:
        url=U.urlunsplit((p.scheme,p.netloc,p.path.replace('/images/thumb/','/images/').rsplit('/',1)[0],'',''))
    return url

def asset_path(url):
    name=U.unquote(U.urlsplit(url).path.rsplit('/',1)[-1]); ext=Path(name).suffix.lower()
    folder='bilder' if ext in ['.jpg','.jpeg','.png','.gif','.svg','.bmp','.webp'] else 'dateien'
    return '/'+folder+'/wiki/'+slug(Path(name).stem)+'-'+hashlib.sha256(url.encode()).hexdigest()[:8]+ext

def collect_assets():
    urls=set()
    previous_file=ROOT/'migration/assets.json'
    previous={a['source']:a for a in json.loads(previous_file.read_text(encoding='utf8'))} if previous_file.exists() else {}
    for d in DATA:
        doc=H.fromstring(d['text']['*'])
        for e in doc.xpath('//img[@src]'):
            urls.add(original_asset(e.get('src')))
        for a in doc.xpath('//a[@href]'):
            url=U.urljoin(net.BASE,a.get('href'))
            if '/mediawiki/images/' in url and U.urlsplit(url).netloc=='wiki.svws.nrw.de': urls.add(original_asset(url))
    archived=[]
    for manifest in ['migration/wiki-complete/assets.json','migration/manuals/assets.json']:
        if (ROOT/manifest).exists():archived.extend(json.loads((ROOT/manifest).read_text(encoding='utf8')))
    for a in archived:previous[a['source']]=a
    def fetch(url):
        relative=previous.get(url,{}).get('path') or asset_path(url)
        p=ROOT/'public'/relative.lstrip('/')
        if not p.exists():
            old=ROOT/'public'/previous.get(url,{}).get('path','').lstrip('/')
            if old.is_file():
                p.parent.mkdir(parents=True,exist_ok=True);shutil.move(old,p)
            else:
                raw=net.get(url); p.parent.mkdir(parents=True,exist_ok=True); p.write_bytes(raw)
        return {'source':url,'path':relative,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size}
    results=[]; failures=[]
    with cf.ThreadPoolExecutor(max_workers=5) as pool:
        futures={pool.submit(fetch,u):u for u in sorted(urls)}
        for i,f in enumerate(cf.as_completed(futures),1):
            try: results.append(f.result())
            except Exception as e: failures.append({'url':futures[f],'error':str(e)})
            if i%100==0: print(f'Assets {i}/{len(urls)}',flush=True)
    merged={a['source']:a for a in archived}
    merged.update({a['source']:a for a in results})
    results=list(merged.values())
    js('migration/assets.json',sorted(results,key=lambda a:a['path']))
    js('migration/asset-errors.json',failures)
    mapping={a['source']:a['path'] for a in results}
    resolutions=ROOT/'migration/manuals/resolutions.json'
    if resolutions.exists():
        for a in json.loads(resolutions.read_text(encoding='utf8')):mapping[a['original']]=a['path']
    return mapping

UNRESOLVED=[]; CATALOG={}; PROOFS=[]
def convert(d,assets):
    title=d['title']; doc=H.fromstring(d['text']['*'])
    anchors=[]
    for e in doc.xpath('//script|//style|//meta|//span[contains(@class,"mw-editsection")]|//*[@id="toc"]|//*[contains(@class,"printfooter")]|//div[contains(@class,"mw-references-wrap")]'):
        e.drop_tree()
    # Keep every original heading anchor as a stable explicit HTML alias.
    for e in doc.xpath('//span[contains(@class,"mw-headline")]'):
        ident=e.get('id')
        parent=e.getparent()
        if ident and re.match('h[1-6]$',parent.tag):
            a=H.Element('p'); a.text=f'MIGRATIONANCHOR{len(anchors)}END'; anchors.append(ident); parent.addprevious(a)
        e.attrib.pop('id',None); e.drop_tag()
    headings=doc.xpath('//h1|//h2|//h3|//h4|//h5|//h6')
    if headings:
        minimum=min(int(e.tag[1]) for e in headings)
        for e in headings:e.tag='h'+str(min(6,2+int(e.tag[1])-minimum))
    # Remove navigation-only return paragraphs; article prose remains intact.
    for e in doc.xpath('//p'):
        if re.fullmatch(r'\s*(?:Zurück.*|zurück.*|Zum Seitenanfang|zum Seitenanfang)\s*',e.text_content()) and len(e.xpath('.//a'))==1: e.drop_tree()
    # Embedded videos become explicit links, avoiding third-party requests on reading.
    for e in doc.xpath('//iframe'):
        url=U.urljoin('https://wiki.svws.nrw.de',e.get('src',''))
        a=H.Element('a',href=url); a.text='Video ansehen'; e.getparent().replace(e,a)
    for img in doc.xpath('//img'):
        url=original_asset(img.get('src','')); local=assets.get(url)
        if local:
            img.set('src',local)
            alt=img.get('alt') or Path(U.unquote(U.urlsplit(url).path)).stem
            if alt.lower() in ['center','left','right','zentriert','rechts','links']:
                alt=Path(U.unquote(U.urlsplit(url).path)).stem.replace('_',' ')
            img.set('alt',alt)
            cat=CATALOG.setdefault(local,{'path':local,'title':Path(local).stem,'original':U.unquote(url.rsplit('/',1)[-1]),'folder':'wiki','captions':[],'articles':[]})
            if alt not in cat['captions']:cat['captions'].append(alt)
            entry={'title':title,'link':routes[title]}
            if entry not in cat['articles']:cat['articles'].append(entry)
        else: img.set('src',url)
        for attr in ['srcset','width','height','decoding','loading','class','style','typeof']:img.attrib.pop(attr,None)
    # Unwrap thumbnail links; local images already open at full resolution.
    for a in doc.xpath('//a[contains(@class,"mw-file-description")]'):
        if a.xpath('.//img'):a.drop_tag()
    for a in doc.xpath('//a[@href]'):
        raw=a.get('href'); full=U.urljoin(net.BASE,raw); p=U.urlsplit(full)
        if original_asset(full) in assets: a.set('href',assets[original_asset(full)]); continue
        if raw.startswith('#'):continue
        if p.netloc=='wiki.svws.nrw.de' and p.path.endswith('/index.php'):
            q=U.parse_qs(p.query); target=q.get('title',[''])[0]
            found=lookup.get(norm(target))
            if found and (not any(k in q for k in ['action','veaction','oldid','diff']) or 'redlink' in q):
                a.set('href',routes[found['title']]+('#'+p.fragment if p.fragment else ''))
            elif norm(target) in ARCHIVE_ROUTES:
                a.set('href',ARCHIVE_ROUTES[norm(target)])
            else:
                a.set('href',full)
                if target and not found and not target.startswith(('Datei:','Spezial:','Kategorie:','Benutzer:','Diskussion:')):
                    UNRESOLVED.append({'article':title,'target':target,'url':full,'redlink':'new' in a.get('class','').split()})
                    if 'new' in a.get('class','').split():a.drop_tag()
        elif raw.startswith(('/','//')):a.set('href',full)
    # Source templates identify admonitions by icon names or coloured template cells.
    boxes=[]
    icon_kinds={'hinweis':'info','wichtig':'warning','achtung':'danger','beispiel':'example','tipp':'tip'}
    for box in reversed(doc.xpath('//div[@style]')):
        children=box.xpath('./div')
        if len(children)<2:continue
        label=children[0].text_content().strip().lower().rstrip('!')
        if label not in icon_kinds:continue
        content=copy.deepcopy(children[-1])
        placeholder=H.Element('p');placeholder.text=f'MIGRATIONBOX{len(boxes)}END'
        boxes.append((icon_kinds[label],content))
        box.getparent().replace(box,placeholder)
    for table in list(doc.xpath('//table')):
        imgs=table.xpath('.//img'); kind=None
        for im in imgs:
            name=im.get('alt','').lower()
            for token,k in icon_kinds.items():
                if token in name:kind=k
        if kind and len(table.xpath('./tbody/tr|./tr'))<=2:
            cells=table.xpath('./tbody/tr/td|./tr/td')
            content=cells[-1] if cells else table
            for im in list(content.xpath('.//img')):
                if any(k in im.get('alt','').lower() for k in icon_kinds):im.drop_tree()
            placeholder=H.Element('p'); placeholder.text=f'MIGRATIONBOX{len(boxes)}END'
            boxes.append((kind,copy.deepcopy(content)))
            table.getparent().replace(table,placeholder)
    # RAP descriptions are labelled sections rather than very wide two-column tables.
    rap_markdown=None
    if assigned[title]=='reporting/rap' and title!='RAP-Funktionen':
        wt=d['wikitext']['*']
        rows_source=re.findall(r"\|'''([^']+)'''\s*\|\|([\s\S]*?)(?=\n\|[-}]|\n\|'''|\Z)",wt)
        if rows_source and all('[[' not in re.sub(r"'''Zurück[\s\S]*",'',body) and '{|' not in body and '<' not in body for _,body in rows_source):
            parts=[]
            for label,body in rows_source:
                body=re.sub(r"'''Zurück[\s\S]*",'',body).replace('{{SEITENNAME}}',title).replace('{{!}}','|').strip('\r\n')
                lines=body.splitlines(); nonempty=[len(line)-len(line.lstrip()) for line in lines if line.strip()]
                indent=min(nonempty) if nonempty else 0
                body='\n'.join(line[indent:] for line in lines).strip('\n')
                language='pascal' if re.search(r'(?i)function|procedure|:=',body) else 'text'
                parts.append(f'## {label}\n\n```{language}\n{body}\n```')
            rap_markdown='\n\n'.join(parts)
        for table in list(doc.xpath('//table')):
            rows=table.xpath('./tr|./tbody/tr')
            labels=[row.xpath('./td|./th')[0].text_content().strip().casefold() for row in rows if row.xpath('./td|./th')]
            if not any('beschreibung' in label for label in labels):continue
            wrap=H.Element('div')
            for row in rows:
                cells=row.xpath('./td|./th')
                if len(cells)<2:continue
                heading=etree.SubElement(wrap,'h2');heading.text=cells[0].text_content().strip()
                body=copy.deepcopy(cells[1]);body.tag='div';wrap.append(body)
            if rap_markdown:
                placeholder=H.Element('p');placeholder.text='MIGRATIONRAPTABLEEND';table.getparent().replace(table,placeholder)
            else:table.getparent().replace(table,wrap)
    for e in doc.iter():
        for attr in list(e.attrib):
            if attr not in ['href','src','alt','id','colspan','rowspan','start']: del e.attrib[attr]
    def pandoc(node):
        raw=H.tostring(node,encoding='unicode')
        result=subprocess.run([str(PANDOC),'-f','html','-t','gfm+raw_html','--wrap=none','--markdown-headings=atx'],input=raw,encoding='utf8',capture_output=True,check=True).stdout
        # HTML span/div wrappers are converted to Markdown after their anchors are retained.
        result=re.sub(r'</?(?:div|span|figure|figcaption|mark|small|big|center|font)\b[^>]*>','',result)
        result=re.sub(r'<a\s+id="([^"]+)"\s*></a>',r'<a id="\1"></a>',result)
        result=re.sub(r'\n{3,}','\n\n',result).strip()
        return result
    md=pandoc(doc)
    for i in reversed(range(len(boxes))):
        kind,node=boxes[i]
        body=pandoc(node)
        # Escape the marker only after substitution, including nested punctuation.
        md=md.replace(f'MIGRATIONBOX{i}END',f':::{kind}\n{body}\n:::')
    for i,ident in enumerate(anchors):
        aliases=[ident]
        legacy=U.quote(ident,safe='-_.:').replace('%','.')
        if legacy!=ident:aliases.append(legacy)
        known={('Schild-NRW Installation','Registrierung_der_ASDStatitsik.dll'):'Registrierung_der_Statitsik.dlls',('Reporting','Reporting-Tutorials'):'Reporting_Tutorials'}
        if (title,ident) in known:aliases.append(known[title,ident])
        md=md.replace(f'MIGRATIONANCHOR{i}END','\n'.join(f'<a id="{html.escape(alias,quote=True)}"></a>' for alias in aliases))
    md=re.sub(r'<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*/?>',lambda m:'!['+m[2].replace('[','\\[').replace(']','\\]')+']('+m[1]+')',md)
    md=re.sub(r'^\s*\\\s*$', '', md, flags=re.M)
    md=re.sub(r'\n{3,}', '\n\n', md)
    # Keep original Pascal apostrophes, including empty strings, while retaining
    # every paragraph and admonition outside the function table.
    if rap_markdown:md=md.replace('MIGRATIONRAPTABLEEND',rap_markdown)
    # Raw HTML tables are retained where merged cells require them; Vue must treat
    # wiki prose and RAP syntax as literal content.
    md=re.sub(r'<table(\s|>)',r'<table v-pre\1',md)
    md=re.sub(r'\{\{', '&#123;&#123;', md)
    # Empty MediaWiki anchors can be emitted as spans by Pandoc.
    md=re.sub(r'<span id="([^"]+)"></span>',r'<a id="\1"></a>',md)
    rev=d['revid']; url=source_url(title)
    fm='---\n'+f'title: {json.dumps(title,ensure_ascii=False)}\nwiki_title: {json.dumps(title,ensure_ascii=False)}\nwiki_page_id: {d["pageid"]}\nwiki_revision: {rev}\n'
    if title in ['Testseite','Erklärung zur Barrierefreiheit']:fm+='search: false\n'
    fm+='---\n\n'
    content=fm+'# '+html.escape(title)+'\n\n'+md+'\n\n---\n\n'
    content+=f'Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-{d["pageid"]}) · [{html.escape(title)} – ursprüngliches Wiki]({url}&oldid={rev})\n'
    write(routes[title].lstrip('/')+'.md',content)
    PROOFS.append({'title':title,'pageid':d['pageid'],'revision':rev,'source':url,'path':routes[title].lstrip('/')+'.md','topic':assigned[title],'source_sha256':hashlib.sha256(d['wikitext']['*'].encode()).hexdigest(),'markdown_sha256':hashlib.sha256(content.encode()).hexdigest(),'source_characters':len(doc.text_content()),'markdown_characters':len(md)})

def scaffolding():
    for name in ['markdown.mjs','hint-boxes.mjs','site-data.mjs','sidebar.mjs','article-index.mjs','reference-navigation.mjs','section-print.mjs','section-print-loader.mjs']:
        dest=ROOT/'.vitepress'/name; dest.parent.mkdir(exist_ok=True); shutil.copy2(REF/'.vitepress'/name,dest)
        if name=='sidebar.mjs':
            text=dest.read_text(encoding='utf8').replace('.map(([, text, link]) => ({ text, link }))','.map(([, text, link]) => ({ text, link }))\n        .filter(item => !/^\\/(?:dateien|bilder\\/wiki)\\//.test(item.link))')
            dest.write_text(text,encoding='utf8')
    shutil.copytree(REF/'.vitepress/theme',ROOT/'.vitepress/theme',dirs_exist_ok=True)
    for name in ['artikel.data.mjs','alle-artikel.md','artikel-schreiben.md','markdown-und-gestaltung.md','bedienung.md']:
        text=(REF/'hilfe'/name).read_text(encoding='utf8').replace('schild3/','schild2/').replace('SchILD-NRW 3','SchILD-NRW 2').replace('SchILD3_Doku','SchILD2_Doku')
        text=text.replace('/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png','/bilder/wiki/schild-nrw-hauptfenster-e39ee227.jpg').replace('Reportexplorer mit dem Zeugnisordner GymOb und markierter Zeugniseinstellungen.ini','Hauptfenster von SchILD-NRW 2')
        text=text.replace('/dateien/serienbriefe/schulform-jahrgang-nichtversetzte-matrix.xlsx','/dateien/wiki/schulform-jahrgang-nichtversetzte-matrix-90b9c252.xlsx')
        if name!='bedienung.md':write('hilfe/'+name,text)
    shutil.copy2(REF/'.gitignore',ROOT/'.gitignore')
    for p in (ROOT/'.vitepress/theme').glob('*'):
        if p.is_file():p.write_text(p.read_text(encoding='utf8').replace('SchILD-NRW 3','SchILD-NRW 2'),encoding='utf8')
    shutil.copytree(REF/'scripts',ROOT/'scripts',dirs_exist_ok=True)
    config=(REF/'.vitepress/config.mts').read_text(encoding='utf8').replace('SchILD-NRW 3.6.0','SchILD-NRW 2').replace('SchILD-NRW 3','SchILD-NRW 2').replace('SchILD3_Doku','SchILD2_Doku').replace("'ods', 'xlsx'", "'ods', 'xlsx', 'dat'").replace("'README.md',", "'README.md', 'migration/**',")
    # Relative base permits the same static artifact under a repository path or a domain.
    config=config.replace("lang: 'de-DE',","lang: 'de-DE',\n  base: process.env.DOCS_BASE || '/',")
    write('.vitepress/config.mts',config)
    pkg=json.loads((REF/'package.json').read_text(encoding='utf8'))
    pkg['name']='schild2-doku';pkg['description']='Dokumentation zu SchILD-NRW 2'
    for key in ['repository','bugs','homepage']:pkg[key]=json.loads(json.dumps(pkg[key]).replace('SchILD3_Doku','SchILD2_Doku'))
    pkg.pop('license',None)
    pkg['scripts']['migration:check']='node scripts/check-migration.mjs'
    pkg['scripts']['test']='node --test tests/*.test.mjs'
    js('package.json',pkg)
    # Preserve dependency versions and integrity checks from the verified template.
    lock=json.loads((REF/'package-lock.json').read_text(encoding='utf8'))
    lock['name']='schild2-doku';lock['packages']['']['name']='schild2-doku';lock['packages'][''].pop('license',None)
    js('package-lock.json',lock)

SECTIONS={'einstieg':('Einstieg','Grundlagen kennenlernen und die ersten Schritte mit SchILD-NRW 2 gehen.'),'schild2':('Arbeiten mit SchILD','Schülerdaten, Lehrkräfte, Unterricht, Gruppenprozesse und Schuljahreswechsel.'),'zeugnisse':('Zeugnisse','Noten vorbereiten, Abschlüsse berechnen und Zeugnisse erstellen.'),'reporting':('Reporting','Reports verwalten, erstellen und mit RAP erweitern.'),'tools':('Tools und Zusatzprogramme','Handbücher und Anleitungen zu Kurs42, LuPO, ASDPC, Notenmodulen und weiteren Werkzeugen.'),'programmreferenz':('Programmreferenz','Funktionen anhand der tatsächlichen Menüs von SchILD2 nachschlagen.'),'administration':('Administration','Installation, direkter Datenbankzugriff, Sicherung und Benutzerrechte.'),'hilfe':('Hilfe','Problemlösungen, Quellenarchiv und Unterstützung für die Dokumentation.')}

def portals():
    nav={'nav':[],'sidebar':{}}
    for section,(label,desc) in SECTIONS.items():
        nav['nav'].append({'text':label,'link':f'/{section}/'})
        items=[{'text':'Übersicht','link':f'/{section}/'},{'text':'Druckansicht','link':f'/druck/{section}.html'}]
        intro=f'# {label}\n\n{desc}\n\n'
        if section=='administration':intro+='SchILD-NRW 2 greift direkt auf die eingerichtete Datenbank zu. Ein SVWS-Server ist dafür nicht erforderlich. Die Wiki-Anleitungen behandeln sowohl Access-Dateien als auch Verbindungen zu SQL-Datenbanken.\n\n'
        if section=='hilfe':intro+='Ältere Verfahren und Zusatzprogramme sind weiterhin enthalten. Hinweise auf frühere Windows-Versionen, Schuljahre oder Rechtsstände gehören zum jeweiligen Quellenstand und sind vor der Anwendung zu prüfen.\n\n'
        for topic,(name,seeds) in TOPICS.items():
            if not topic.startswith(section+'/'):continue
            articles=[d for d in DATA if assigned[d['title']]==topic]
            # Lead with the source introduction, then use alphabetical navigation.
            articles.sort(key=lambda d:(d['title'] not in seeds, seeds.index(d['title']) if d['title'] in seeds else 0,d['title'].casefold()))
            entries=[{'text':d['title'],'link':routes[d['title']]} for d in articles]
            items.append({'text':name,'link':'/'+topic,'items':entries})
            intro+=f'## [{name}](/{topic})\n\n'
            intro+='\n'.join(f'- [{d["title"]}]({routes[d["title"]]})' for d in articles[:5])+'\n\n'
            text=f'# {name}\n\n'
            if topic=='hilfe/wiki-archiv':text+='Hier bleiben die frühere Wiki-Startseite, die Versionsgeschichte und weitere Quellen zur Einordnung erhalten. Die Barrierefreiheitserklärung beschreibt die ursprüngliche Wiki-Website.\n\n'
            text+='\n'.join(f'- [{d["title"]}]({routes[d["title"]]})' for d in articles)+'\n'
            write(topic+'.md',text)
        if section=='hilfe':
            for name,path in [('Alle Artikel','alle-artikel'),('Wiki-Bezugstabelle','artikel-wiki-zuordnung'),('Bilderkatalog','/bilder/'),('Bedienung','bedienung'),('Artikel schreiben','artikel-schreiben'),('Markdown und Gestaltung','markdown-und-gestaltung'),('Über diese Dokumentation','ueber-diese-dokumentation')]:
                link=path if path.startswith('/') else '/hilfe/'+path
                items.append({'text':name,'link':link});intro+=f'- [{name}]({link})\n'
        nav['sidebar']['/'+section+'/']=[{'text':label,'items':items}]
        write(section+'/index.md',intro)
    # Real SchILD2 menu tree from the original contents page, keeping menu order.
    reference={'tabs':[]}; stack=[]; n=0
    for line in bytitle['Inhaltsverzeichnis']['wikitext']['*'].splitlines():
        if re.match(r'^\*[^*]',line) and '[[Schild-NRW-Index]]' not in line:break
        m=re.match(r'^(\*+)\s*\[\[([^\]]+)\]\]',line)
        if not m:continue
        depth=len(m[1]); parts=m[2].split('|'); target=parts[0].split('#')[0]
        if depth==1:
            if target!='Schild-NRW-Index':break
            continue
        if target not in routes:continue
        n+=1; node={'id':f'menue-{n}','text':parts[-1],'link':routes[target],'source_title':target,'items':[]}
        if '#' in parts[0]:node['link']+='#'+parts[0].split('#',1)[1].replace(' ','_')
        while stack and stack[-1][0]>=depth:stack.pop()
        if stack:stack[-1][1]['items'].append(node)
        else:reference['tabs'].append(node)
        stack.append((depth,node))
    # Expand the actual group-process pages and student tabs in the reference.
    def expand(node):
        for child in node['items']:expand(child)
        title=node.get('source_title')
        if title not in ['Hauptfenster','Allgemeines','Fächer','Teilleistungen','Noten, Zeugnisvorbereitung','Lernabschnitte, Versetzung','Gruppenaktionen Abitur','Extras']:return
        exists={c['source_title'] for c in node['items']}
        doc=H.fromstring(bytitle[title]['text']['*'])
        for a in doc.xpath('//a[@href]'):
            if re.search(r'(?i)zurück|seitenanfang',a.text_content()):continue
            target=U.parse_qs(U.urlsplit(a.get('href')).query).get('title',[''])[0].replace('_',' ')
            if target not in routes or target==title or target in exists:continue
            if assigned[target].split('/')[0] not in ['schild2','zeugnisse','administration']:continue
            exists.add(target)
            node['items'].append({'id':f'menue-{node["id"]}-{len(exists)}','text':target,'link':routes[target],'source_title':target,'items':[]})
    for node in reference['tabs']:expand(node)
    js('.vitepress/program-reference.json',reference)
    refitems=nav['sidebar']['/programmreferenz/'][0]['items']
    refitems.extend({'text':n['text'],'link':n['link'],'items':n['items']} for n in reference['tabs'])
    nav['sidebar']['/programmreferenz/'].append({'text':'Themenbereiche','items':[{'text':label,'link':f'/{sec}/'} for sec,(label,_) in SECTIONS.items() if sec!='programmreferenz']})
    write('programmreferenz/index.md','# Programmreferenz\n\nDie Reihenfolge folgt den Menüs von SchILD-NRW 2. Über das Menü gelangen Sie direkt zu den beschriebenen Funktionen.\n\n'+'\n'.join(f'- [{n["text"]}]({n["link"]}?referenz={n["id"]})' for n in reference['tabs'])+'\n')
    nav['nav']=[{'text':'Einstieg','link':'/einstieg/'},{'text':'SchILD2','activeMatch':'^/(schild2|administration)/','items':[{'text':'Arbeiten mit SchILD','link':'/schild2/'},{'text':'Installation und Administration','link':'/administration/'}]},{'text':'Zeugnisse','link':'/zeugnisse/'},{'text':'Reporting','link':'/reporting/'},{'text':'Tools','link':'/tools/'},{'text':'Nachschlagen','activeMatch':'^/(programmreferenz|hilfe|bilder|quellen)/','items':[{'text':'Programmreferenz','link':'/programmreferenz/'},{'text':'Alle Artikel','link':'/hilfe/alle-artikel'},{'text':'Hilfe und Autorenhinweise','link':'/hilfe/'},{'text':'Bilderkatalog','link':'/bilder/'},{'text':'Vollständiges Quellen- und Dateiarchiv','link':'/quellen/'}]}]
    js('.vitepress/navigation.json',nav)
    for sec,(label,_) in SECTIONS.items():
        write('druck/'+sec+'.md',f'---\ntitle: "Druckansicht: {label}"\naside: false\nsearch: false\n---\n\n<script setup>\nimport {{ data }} from \'./{sec}.data.mjs\'\n</script>\n\n# {label}\n\n<SectionPrintBook :articles="data.articles" :title="data.title" />\n')
        # The loader uses the same navigation to assemble complete section documents.
        write('druck/'+sec+'.data.mjs',f"import {{ createSectionPrintLoader }} from '../.vitepress/section-print-loader.mjs'\nexport default createSectionPrintLoader('/{sec}/')\n")
    home='---\nlayout: home\nhero:\n  name: SchILD-NRW 2\n  tagline: Dokumentation für die tägliche Arbeit, Zeugnisse und Reporting.\nfeatures:\n'
    for sec,(label,desc) in SECTIONS.items():home+=f'  - title: {label}\n    details: {desc}\n    link: /{sec}/\n'
    write('index.md',home+'---\n')
    write('bilder/index.md','---\ntitle: Bilderkatalog\naside: false\n---\n\n# Bilderkatalog\n\nScreenshots und Dateien aus dem SchILD2-Wiki suchen und für Artikel wiederverwenden.\n\n<ImageCatalog />\n')

def finish():
    js('migration/articles.json',PROOFS)
    js('migration/external-wiki-links.json',UNRESOLVED)
    js('.vitepress/image-catalog.json',list(CATALOG.values()))
    write('hilfe/bedienung.md','# SchILD-NRW 2 im Alltag bedienen\n\n## Orientierung\n\n- [Hauptfenster]('+routes['Hauptfenster']+')\n- [Iconleiste]('+routes['Iconleiste']+')\n- [Tastenkürzel]('+routes['Shortcuts in Schild-NRW']+')\n\n## Datensätze finden und bearbeiten\n\n- [Auswahl und Filter](/schild2/auswahl)\n- [Wiedervorlage]('+routes['Wiedervorlage']+')\n- [Programmeinstellungen]('+routes['Programm-Einstellungen']+')\n\n## Dokumentation nutzen\n\nDie Themenrubriken bündeln zusammengehörige Aufgaben. In der Programmreferenz folgen Sie den Menüs von SchILD2. Die Suche findet Begriffe über alle Artikel hinweg. Unter „Alle Artikel“ können Sie die Titel alphabetisch durchsehen. Das Drucksymbol öffnet die Druckansicht eines Artikels; die Druckansicht einer Rubrik fasst deren Artikel zusammen.\n')
    write('hilfe/artikel-wiki-zuordnung.md',f'# Artikel und Wiki-Quellen\n\nAlle {len(PROOFS)} Inhaltsseiten sind einer lokalen Markdown-Datei und einer gesicherten Wiki-Version zugeordnet.\n\n| Wiki-Artikel | Dokumentation | Quelltext |\n| --- | --- | --- |\n'+'\n'.join(f'| {p["title"].replace("|","&#124;")} | [Artikel](/{p["path"][:-3]}) | [Version {p["revision"]}](/quellen/wiki/seite-{p["pageid"]}) |' for p in PROOFS)+'\n')
    write('hilfe/ueber-diese-dokumentation.md','# Über diese Dokumentation\n\nDiese Dokumentation überträgt das SchILD-NRW-2-Wiki in die bewährte Themenstruktur der SchILD3-Dokumentation. Die Inhalte stammen aus dem öffentlichen Wiki; die jeweilige Quelle und Bearbeitungsgeschichte stehen unter jedem übernommenen Artikel.\n\nSchILD2 arbeitet unmittelbar mit einer Datenbank. Für den Betrieb ist kein SVWS-Server erforderlich. Menünamen und Verfahren richten sich nach SchILD2.\n\n## Quellenstand\n\nDer Export wurde am 27. Oktober 2026 erstellt. Er enthält alle 456 zum Abrufzeitpunkt vorhandenen Seiten im Hauptnamensraum, einschließlich Weiterleitungen und älterer Verfahren. Externe Handbücher und nicht vorhandene Wiki-Seiten bleiben als externe Links erkennbar. Die Übertragung aktualisiert keine historischen Rechtsstände oder Programmbeschreibungen.\n\n## Rechte und Verantwortlichkeit\n\nDie Inhalte und Abbildungen stammen von den jeweiligen Wiki-Autoren. Die ursprünglichen Quellen und Versionsgeschichten bleiben verlinkt. Es wird hier keine zusätzliche Nutzungslizenz für fremde Inhalte vergeben. Vor einer öffentlichen Bereitstellung sind die Nutzungsrechte sowie die erforderlichen Angaben zu Verantwortlichkeit und Datenschutz zu klären.\n')

if __name__=='__main__':
    previous=ROOT/'migration/articles.json'
    if previous.exists():
        for p in json.loads(previous.read_text(encoding='utf8')):
            old=(ROOT/p['path']).resolve()
            if p['title'] in routes and '/'+p['path'][:-3]!=routes[p['title']] and old.is_relative_to(ROOT) and old.is_file():old.unlink()
    scaffolding()
    assets=collect_assets()
    print(f'{len(assets)} local assets',flush=True)
    for i,d in enumerate(DATA,1):
        convert(d,assets)
        if i%50==0:print(f'Converted {i}/{len(DATA)}',flush=True)
    portals();finish()
    print('Content and navigation complete',flush=True)
