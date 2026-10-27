"""One-time editorial cleanup requested after the complete wiki transfer."""
import copy, hashlib, json, re, shutil, urllib.parse as U
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
def load(p):return json.loads((ROOT/p).read_text(encoding='utf8'))
def write(p,s):
    f=ROOT/p;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(s.rstrip()+'\n',encoding='utf8')
def js(p,v):write(p,json.dumps(v,ensure_ascii=False,indent=2))
articles=load('migration/articles.json');bytitle={a['title']:a for a in articles}
changed=[]
def change(p,fn,reason):
    old=(ROOT/p).read_text(encoding='utf8');new=fn(old)
    if new!=old:
        write(p,new);changed.append({'path':p,'reason':reason,'before_sha256':hashlib.sha256(old.encode()).hexdigest(),'after_sha256':hashlib.sha256(new.encode()).hexdigest()})
def supplement(p,body):
    def apply(s):
        if body.splitlines()[0] in s:return s
        idx=s.rfind('\n---\n\nQuelle:')
        return s[:idx]+'\n\n'+body.strip()+'\n'+s[idx:] if idx>=0 else s+'\n\n'+body
    change(p,apply,'Ergänzung aus ausgewerteter PDF-Anleitung')

def main():
    if (ROOT/'migration/editorial-changes.json').exists():
        raise SystemExit('Die einmalige redaktionelle Bereinigung wurde bereits ausgeführt.')
    # Remove obsolete references together with the sentences or parentheses
    # that existed solely to introduce those downloads.
    reason='Entfallener Altdatei-Verweis auf ausdrücklichen Benutzerwunsch'
    change(bytitle['Neuaufnahmen in Schild-NRW 001']['path'],lambda s:re.sub(r'Die Beschreibung des Ablaufes .*?aufzunehmen\.\\?', 'Diese Anleitung beschreibt die Neuaufnahme von Schülerinnen und Schülern in SchILD-NRW.',s),reason)
    change(bytitle['Eingabe der GeR-Niveaus']['path'],lambda s:re.sub(r'^Sie finden hier eine .*?\n','',s,flags=re.M),reason)
    change(bytitle['Konfessionen']['path'],lambda s:re.sub(r'^Eine Anleitung zur Änderung im Katalog.*?\n','',s,flags=re.M),reason)
    change(bytitle['Statistik / amtliche Schuldaten']['path'],lambda s:re.sub(r'^<http[^\n]*KA11[^\n]*\n','',s,flags=re.M),reason)
    change(bytitle['Statistik mit ASDPC Vorbereitung']['path'],lambda s:re.sub(r'^1\.  Die aktuelle \[ToDo-Liste\].*?\n','',s,flags=re.M).replace('2.  Die aktuellen [Eintragungshilfen','1.  Die aktuellen [Eintragungshilfen').replace('3.  Die aktuellen [Schlüsseltabellen','2.  Die aktuellen [Schlüsseltabellen'),reason)
    for title in ['Statistik mit ASDPC-Technik','Statistik mit ASDPC-Aufbau']:
        change(bytitle[title]['path'],lambda s:s.replace('Speichern Sie hierzu die [asdupd.zip](/quellen/fehlende-downloads#asdupd-zip)','Speichern Sie die heruntergeladene ZIP-Datei').replace(' Lesen Sie hierzu die gesonderte Anleitung [ASDPC in einer Netzwerkumgebung nutzen](/quellen/fehlende-downloads#anleitung-asdpc-in-einer-netzwerkumgebung-nutzen-pdf).','').replace('Unter dem folgenden Link finden Sie eine ausführliche Anleitung, wie die Dateien zu kopieren sind und wie das Update auszuführen ist: [Anleitung](/quellen/fehlende-downloads#asdpc-updatehinweis-pdf).',''),reason)

    supplement(bytitle['KM2 001']['path'],'''## Ersteinrichtung

Nach dem ersten Start richten Sie die Verbindung zur SchILD-Datenbank ein. Die Installationshinweise nennen den administrativen Zugang **KM2Admin** mit dem Auslieferungskennwort `schild`.

1. Melden Sie sich für die Einrichtung mit dem administrativen Zugang an.
2. Konfigurieren Sie den SchILD-Zugriff und testen Sie die Verbindung.
3. Legen Sie Fachauswahl und die übrigen Einstellungen fest. Diese werden benutzerspezifisch gespeichert.
4. Öffnen Sie anschließend die Leistungsdaten und kontrollieren Sie Schuljahr und Lernabschnitt.

Für den Einsatz unter SchILDzentral wird die Programmdatei aus der SchILDzentral-Anwendung gestartet; sie ist dort nicht als unabhängig gestartetes Programm zu behandeln.

Quelle der Ergänzung: [KM2-Installations- und Versionshinweise](https://www.svws.nrw.de/system/files/media/document/file/km2_versionsgeschichte.pdf), Seite 1, Stand Version 1.9.6.3.''')
    supplement(bytitle['S1PLAN:Einrichtung von Kursen']['path'],'''## Zuweisungen und Export kontrollieren

Führen Sie vor der Schülerzuweisung den SchILD-Abgleich durch. Für eine Kursart, in der jede Person genau einen Kurs belegt, kann die **Einzelzuweisung** verwendet werden; bei aktivierter **Schnellzuweisung** genügt ein Klick in die Zuordnungsmatrix. Speichern Sie die Zuweisungen vor dem Export.

Bei Arbeitsgemeinschaften oder Projekten mit Erst-, Zweit- und Drittwunsch muss das Kursprofil die **Wunschspalten** enthalten. Eine Optimierung kann Personen auf einen anderen der erfassten Wünsche verschieben. Kontrollieren und speichern Sie deshalb das Ergebnis und das zugehörige Protokoll.

:::danger Export nach SchILD
Der vollständige Export kann die bisherigen SchILD-Kurse des gewählten Jahrgangs löschen, deren Kursarten zum verwendeten S1Plan-Kursprofil gehören. Kontrollieren Sie Kursprofil, Jahrgang und Bestätigungsdialog. Die im Handbuch beschriebenen Doppelpfeile erlauben daneben eine Übertragung ohne vorherige Löschung der vorhandenen SchILD-Kurse.
:::

Im Exportfenster stehen links die Kurse und Zuordnungen aus S1Plan, rechts die vorhandenen beziehungsweise vorgesehenen Daten in SchILD. Grüne Markierungen zeigen die erfolgte Übertragung an.

Quelle der Ergänzung: [S1Plan-Bedienungsanleitung, Druckstand 11.12.2018](https://www.svws.nrw.de/system/files/media/document/file/s1plan_anleitung.pdf), Kapitel 4, Seiten 13–26.''')
    supplement(bytitle['S1PLAN:Übernahme von Kursen aus Schild']['path'],'''## Vorhandene Kurse übernehmen

Legen Sie zuerst das zum Import passende Kursprofil an und führen Sie den Datenbankabgleich durch. Nach Auswahl der in SchILD vorhandenen Kurse kann deren Stand einschließlich vorhandener Schülerzuordnungen nach S1Plan übernommen werden.

:::warning
Der Import ersetzt die bereits in S1Plan bestehenden Kurse der betroffenen Kursart. Prüfen Sie den Bestätigungsdialog, bevor Sie eine schon bearbeitete Kursverteilung überschreiben.
:::

Quelle der Ergänzung: [S1Plan-Bedienungsanleitung, Druckstand 11.12.2018](https://www.svws.nrw.de/system/files/media/document/file/s1plan_anleitung.pdf), Kapitel 5, Seiten 27–31.''')

    retire_spec={
        'Haltestelle':('/schild2/unterricht-kataloge/haltestellen','Leerer Artikel; der ausgearbeitete Katalogartikel heißt Haltestellen.'),
        'Kurs42:Inhaltsverzeichnis':('/tools/kurs42','Enthielt nur zwei nicht vorhandene Wiki-Ziele; durch den ausgearbeiteten Tool-Einstieg ersetzt.'),
        'KM2 002':('/hilfe/zusatzprogramme/km2-001#ersteinrichtung','Nur Überschrift und Weiter-Link; Ersteinrichtung ist im Installationsartikel ergänzt.'),
        'KM2 003':('/hilfe/zusatzprogramme/modulbenutzung','Nur Überschrift und Platzhalter; ausgearbeitete Bedienungsanleitung vorhanden.'),
        'Textzeugnisse erzeugen':('/tools/notenmodul-grundschule/rueckgabe-und-druck','Leerer Artikel; Ausgabe und Rückgabe sind nun beschrieben.'),
        'Lupo:LuPO':('/tools/lupo','Nicht ausgearbeiteter Einleitungsplatzhalter.'),
        'LuPO Einleitung':('/tools/lupo/lupo-einleitung','Reine Weiterleitungsseite ohne eigenen Inhalt.'),
        'Kursverwaltung KPlan.exe':('/hilfe/zusatzprogramme/kursplanung-kplan-exe','Leerer Artikel; ausgearbeitete Kursplanung vorhanden.'),
        'Teilleistungen Einrichten und Verwalten':('/schild2/unterricht-kataloge/teilleistungen-einrichten-und-verwalten','Reine, zuvor auf sich selbst zeigende Weiterleitung.'),
        'Grundschulzeugnisse Ankreuzzeugnis':('/tools/notenmodul-grundschule/leistungsdaten','Enthielt ausschließlich eine Ankündigung; Anleitung ist nun ausgearbeitet.'),
        'Grundschulzeugnisse Lernstandsberichte':('/zeugnisse/grundschule','Enthielt ausschließlich eine Ankündigung ohne Fachinhalt.'),
        'Statistik mit ASDPC Uebersicht':('/schild2/import-export-statistik/statistik-mit-asdpc-uebersicht','Reine Weiterleitung auf die vorhandene Übersicht.'),
    }
    retired=[];replacements={}
    for title,(target,why) in retire_spec.items():
        a=bytitle[title];f=(ROOT/a['path']).resolve()
        if not f.is_relative_to(ROOT):raise ValueError(f)
        retired.append(dict(a,replacement=target,reason=why))
        replacements['/'+a['path'][:-3]]=target
        if f.exists():f.unlink()
    replacements['/tools/handbuecher']='/tools/anleitungen'
    def route(link):
        if not isinstance(link,str) or not link.startswith('/'):return link
        p=U.urlsplit(link);key=p.path.removesuffix('.html')
        if key not in replacements:return link
        target=replacements[key]
        return target+('?' + p.query if p.query else '')+('#'+p.fragment if p.fragment and '#' not in target else '')
    dirs=['einstieg','schild2','zeugnisse','reporting','administration','hilfe','tools','programmreferenz','bilder','quellen']
    for folder in dirs:
        for p in (ROOT/folder).rglob('*.md'):
            s=p.read_text(encoding='utf8')
            # Only local hrefs are changed; original wikitext inside source code
            # blocks and the immutable original JSON files remain untouched.
            s=re.sub(r'(?P<prefix>\]\(|href=")(?P<link>/[^\s)"<>]+)',lambda m:m['prefix']+route(m['link']),s)
            write(p.relative_to(ROOT),s)
    js('migration/retired-articles.json',retired)

    nav=load('.vitepress/navigation.json')
    def fix(node):
        if 'link' in node:node['link']=route(node['link'])
        if 'items' in node:
            seen=set();items=[]
            for child in node['items']:
                if child.get('link') in ['/tools/handbuecher','/quellen/fehlende-downloads']:continue
                fix(child)
                if child.get('link') in seen:continue
                seen.add(child.get('link'));items.append(child)
            node['items']=items
    for groups in nav['sidebar'].values():
        for group in groups:fix(group)
    reference=load('.vitepress/program-reference.json')
    for node in reference['tabs']:fix(node)
    js('.vitepress/program-reference.json',reference)

    def item(text,link,children=None):
        x={'text':text,'link':link}
        if children:x['items']=children
        return x
    def article(title,text,children=None):return item(text,route('/'+bytitle[title]['path'][:-3]),children)
    menus={
      'kurs42':[
        article('Kurs42:Installationshinweise','Installation'),
        item('Zusammenspiel mit SchILD und LuPO','/tools/kurs42/datenfluss'),
        item('Neue Blockung erstellen','/tools/kurs42/neue-blockung'),
        item('Klausuren planen','/tools/kurs42/klausurplanung'),
        item('Halbjahreswechsel und Fachwahlabgleich','/tools/kurs42/halbjahreswechsel'),
        article('K422CNF:Übersicht','Externe Blockungsverfahren',[
          article('Kurs42 To CNF:Hauptseite','Blockung mit CNF'),
          article('Klausurplanung CNF:Hauptseite','Klausurplanung mit CNF'),
          article('Multi Klausurplanung CNF:Hauptseite','Mehrere Klausurplanungen')]),
        article('News:Kurs42 unter Schild-Zentral','Einsatz unter SchILDzentral'),
        article('Kurs42:Versionsgeschichte','Versionsgeschichte')],
      'lupo':[
        article('Lupo:Einleitung','Einleitung'),article('Lupo:Installation','Installation'),
        article('Lupo:Vorbereitungen in Schild-NRW','Vorbereitungen in SchILD'),
        article('Lupo:Erste Schritte in Lupo','Erste Schritte',[
          article('Lupo:Schülerdateien erzeugen','Schülerdateien erzeugen')]),
        article('Lupo:Der Beratungsprozess','Beratungsprozess'),
        article('Lupo:Auswertung der Fachwahlen','Fachwahlen auswerten'),
        article('Lupo:Übergabe der Fachwahlen an Kurs42','Fachwahlen an Kurs42 übergeben'),
        article('Lupo:Weitere Laufbahnprüfungen','Weitere Laufbahnprüfungen'),
        article('Lupo:Versionsgeschichte','Versionsgeschichte'),article('Lupo:Handbuch','Inhaltsverzeichnis')],
      'asdpc':[
        article('Statistik mit ASDPC Übersicht','Überblick'),article('Statistik mit ASDPC','Gesamtablauf'),
        article('Statistik mit ASDPC-Technik','Installation und Technik'),
        article('Statistik mit ASDPC-Aufbau','Programmaufbau'),
        article('Statistik mit ASDPC Vorbereitung','Vorbereitung'),
        article('Statistik mit ASDPC-Schluesselmanagement','Schlüsselmanagement'),
        article('Statistik mit ASDPC Haupterhebung','Haupterhebung'),
        article('Statistik mit ASDPC Fehlersuche','Fehlersuche')],
      'notenmodul-grundschule':[item('Vorbereitung und Export','/tools/notenmodul-grundschule/vorbereitung'),item('Leistungsdaten eingeben','/tools/notenmodul-grundschule/leistungsdaten'),item('Rückgabe, Import und Druck','/tools/notenmodul-grundschule/rueckgabe-und-druck')],
      'enm-notenmanager':[item('Ersteinrichtung und Anzeige','/tools/enm-notenmanager/ersteinrichtung'),item('Noten, Teilleistungen und Bemerkungen','/tools/enm-notenmanager/leistungsdaten'),item('Zentrale Prüfungen und Rückgabe','/tools/enm-notenmanager/pruefungen-und-rueckgabe'),item('Datenimport und Druck','/tools/enm-notenmanager/import-und-druck')],
      'externes-notenmodul':[article('Externes Notenmodul','Vorbereitung und Datenaustausch'),article('Benutzung des externen Notenmoduls','Noten eingeben und zurückgeben'),article('Einrichtung des ENM-Moduls unter Ubuntu 18.04','Einrichtung unter Ubuntu 18.04')],
      'km2':[article('Konferenzmodul KM2.exe','Überblick'),article('KM2 001','Installation und Ersteinrichtung'),article('KM2 - Parameter - Administration','Datenbank und Administration'),article('KM2 - Parameter - Allgemein','Allgemeine Einstellungen'),article('Modulbenutzung','Konferenz und Dateneingabe'),article('KM2-Programmupdate','Programmupdate')],
      'pm2':[article('Prognos','Überblick'),article('Prognos:Einleitung','Einleitung'),article('Prognos:Installation','Installation'),article('Prognos:Programmstart','Programmstart'),article('Prognos:Hauptfenster','Hauptfenster',[
        article('Prognos:Analyseverfahren: Einzelfall','Einzelanalyse'),article('Prognos:Analyseverfahren: Klasse','Klassenanalyse'),article('Prognos:Analyseverfahren: Datei','Dateianalyse')]),item('Analysen und Ergebnisse','/tools/pm2/analysen-und-ergebnisse')],
      's1plan':[article('S1PLAN:Übersicht','Überblick'),article('S1PLAN:Installation','Installation'),article('S1PLAN:Erster Programmstart','Erster Programmstart'),article('S1PLAN:Einrichtung von Kursen','Kurse einrichten und zuweisen'),article('S1PLAN:Übernahme von Kursen aus Schild','Kurse aus SchILD übernehmen'),article('S1PLAN:Anhang','Anhang')],
      'ma2lbv':[item('Einrichtung und Datenbankzugriff','/tools/ma2lbv/einrichtung'),item('Daten importieren','/tools/ma2lbv/datenimport'),item('Abrechnung und Ausgabe','/tools/ma2lbv/abrechnung')],
      'migrationstool':[article('Schild-NRW-Daten in eine andere Datenbank übertragen (migrieren)','Datenbank übertragen')],
      'import-textdateien':[article('Import aus Textdateien','Datenimport vorbereiten und ausführen')],
    }
    descriptions={
      'kurs42':'Kurs42 organisiert Kurswahlen, Kurszuordnungen und Blockungen der gymnasialen Oberstufe. Die folgenden Anleitungen führen von der Einrichtung über die Blockung bis zum Halbjahreswechsel.',
      'lupo':'LuPO begleitet die Laufbahnberatung und die Prüfung der Fachwahlen in der Oberstufe. Die Kapitel folgen dem Ablauf des ursprünglichen Handbuchs.',
      'asdpc':'ASDPC unterstützt die Aufbereitung und Bearbeitung der amtlichen Schulstatistik. Beginnen Sie mit dem Überblick und arbeiten Sie anschließend die Vorbereitung, Erhebung und Fehlerprüfung durch.',
      'notenmodul-grundschule':'Mit dem Grundschul-Notenmodul bearbeiten Lehrkräfte Noten, Zeugnistexte und Ankreuzkompetenzen in den von SchILD ausgegebenen Notendateien. Die Vorbereitung und Rückübernahme übernimmt die SchILD-Administration.',
      'enm-notenmanager':'Der ENM-Notenmanager dient der externen Bearbeitung von Notendateien. Die Anleitung beschreibt Ersteinrichtung, Leistungsdaten einschließlich Teilleistungen, Prüfungsdaten sowie Import und Ausdruck.',
      'externes-notenmodul':'Das ältere externe Notenmodul verarbeitet die von SchILD ausgegebenen Notendateien. Es bietet gegenüber dem ENM-Notenmanager einen geringeren Funktionsumfang; die folgenden Wiki-Anleitungen bleiben für bestehende Arbeitsabläufe erhalten.',
      'km2':'Das Konferenzmodul zeigt Leistungsdaten und unterstützt die Bearbeitung während der Zeugniskonferenz. Nach Installation und Datenbankeinrichtung folgen die persönlichen Anzeigeeinstellungen und die eigentliche Konferenzarbeit.',
      'pm2':'Das Prognosemodul untersucht einzelne Notenbilder, Klassen aus SchILD oder Leistungsdaten aus Dateien. Die Wiki-Anleitungen werden durch einen Ablauf zur Auswahl der Analyse und zur Ergebnisausgabe ergänzt.',
      's1plan':'S1Plan organisiert Kurse der Sekundarstufe I. Es kann neue Kurszuordnungen vorbereiten oder vorhandene SchILD-Kurse übernehmen und bearbeiten.',
      'ma2lbv':'Das früher MA2LBV genannte Programm heißt seit Version 3.2 MA2. Es unterstützt die Erfassung und den Import von Mehrarbeitsdaten sowie die Erstellung von Änderungsmitteilungen an das LBV.',
      'migrationstool':'Das Migrationstool überträgt SchILD-Daten in eine andere Datenbank. Die vorhandene Anleitung erläutert den Ablauf und die Besonderheiten der Übertragung.',
      'anonymisierungstool':'Das Anonymisierungstool anonymisiert personenbezogene Angaben in einer bestehenden SchILD-Access-Datenbank. Die offizielle Beschreibung bezeichnet das Programm als selbsterklärend; eine gesonderte PDF-Anleitung liegt in der ausgewerteten Quelle nicht vor.',
      'schuljahr-erhoehen':'Mit diesem Hilfsprogramm können Fachberatungen Schulungsdatenbanken um ein Schuljahr erhöhen. Es ist für diesen Schulungseinsatz beschrieben; eine zusätzliche PDF-Anleitung war auf der ausgewerteten offiziellen Seite nicht verlinkt.',
      'import-textdateien':'Der Import aus Textdateien unterstützt die Übernahme von Daten, die nicht im Format der Standardschnittstelle vorliegen. Die Vorbereitung und Durchführung sind im vorhandenen Wiki-Artikel beschrieben.'
    }
    source_page='https://www.svws.nrw.de/schild-nrw-2/tools-module'
    for group in nav['sidebar']['/tools/'][0]['items']:
        key=group.get('link','').removeprefix('/tools/')
        if key in menus:group['items']=menus[key]
        if key in descriptions:
            body='# '+group['text']+'\n\n'+descriptions[key]+'\n\n'
            def list_items(items,depth=0):
                return ''.join('  '*depth+f'- [{x["text"]}]({x["link"]})\n'+list_items(x.get('items',[]),depth+1) for x in items)
            if group.get('items'):body+='## Anleitungen\n\n'+list_items(group['items'])+'\n'
            if key=='km2':body+='## Programmstand beachten\n\nDie Versionshinweise zu 1.9.6.0 nennen die Integration des neueren PM2-Einzelanalyse-Dialogs und Änderungen der Menüoberfläche. Ältere Wiki-Abbildungen können deshalb von der eingesetzten Version abweichen. Grundlage: [KM2-Versionshinweise](https://www.svws.nrw.de/system/files/media/document/file/km2_versionsgeschichte.pdf), Seiten 1–2.\n\n'
            body+='Programmbezug und verfügbare Ausgaben: [offizielle Programmseite]('+({'kurs42':'https://www.svws.nrw.de/schild-nrw-2/kurs42','lupo':'https://www.svws.nrw.de/schild-nrw-2/lupo','asdpc':'https://www.svws.nrw.de/statistik/asdpc'}.get(key,source_page))+').\n'
            write('tools/'+key+'.md',body)
    # Preserve the original handbook's nesting without having the same page
    # appear as an extra pager step in another position.
    group=nav['sidebar']['/tools/'][0]
    group['items']=[x for x in group['items'] if x.get('link') not in ['/tools/anleitungen','/quellen/fehlende-downloads']]
    group['items'].append(item('Alle Anleitungen','/tools/anleitungen'))
    js('.vitepress/navigation.json',nav)
    all_guides='# Anleitungen zu den Tools\n\nDie aus den PDF-Anleitungen aufbereiteten Inhalte stehen als normale Artikel in den jeweiligen Tool-Rubriken.\n\n'
    for g in group['items']:
        if g.get('items'):all_guides+=f'## [{g["text"]}]({g["link"]})\n\n'+''.join(f'- [{x["text"]}]({x["link"]})\n' for x in g['items'])+'\n'
    write('tools/anleitungen.md',all_guides)
    # Delete only the explicitly enumerated additional downloads. All original
    # wiki uploads remain untouched. Keep PDFs in ignored tmp for review only.
    downloads=load('migration/manuals/assets.json');evaluated=[]
    pdf_routes={
      'notenmodul_grundschule_anleitung.pdf':['tools/notenmodul-grundschule/vorbereitung.md','tools/notenmodul-grundschule/leistungsdaten.md','tools/notenmodul-grundschule/rueckgabe-und-druck.md'],
      'enm_bedienungsanleitung_2.pdf':[f'tools/enm-notenmanager/{s}.md' for s in ['ersteinrichtung','leistungsdaten','pruefungen-und-rueckgabe','import-und-druck']],
      'handbuch-schild-lupo-kurs42-22.auflage.pdf':[f'tools/kurs42/{s}.md' for s in ['datenfluss','neue-blockung','klausurplanung','halbjahreswechsel']],
      'ma2lbv_anleitung.pdf':[f'tools/ma2lbv/{s}.md' for s in ['einrichtung','abrechnung','datenimport']],
      'ma2pdf_versionsgeschichte.pdf':['tools/ma2lbv/einrichtung.md','tools/ma2lbv/abrechnung.md'],
      'pm2_bedienungsanleitung_1.pdf':['tools/pm2/analysen-und-ergebnisse.md'],
      'pm2_versionsgeschichte.pdf':['tools/pm2/analysen-und-ergebnisse.md'],
      's1plan_anleitung.pdf':[bytitle['S1PLAN:Einrichtung von Kursen']['path'],bytitle['S1PLAN:Übernahme von Kursen aus Schild']['path']],
      'km2_versionsgeschichte.pdf':['tools/km2.md',bytitle['KM2 001']['path']],
    }
    for a in downloads:
        file=(ROOT/'public'/a['path'].lstrip('/')).resolve()
        if not file.is_relative_to((ROOT/'public/dateien/handbuecher').resolve()):raise ValueError(file)
        if file.exists() and hashlib.sha256(file.read_bytes()).hexdigest()!=a['sha256']:raise ValueError('Changed download: '+str(file))
        if a['path'].endswith('.pdf'):
            target=ROOT/'tmp/pdf-source'/file.name;target.parent.mkdir(parents=True,exist_ok=True)
            if file.exists():shutil.copy2(file,target)
            evaluated.append({'source':a['source'],'sha256':a['sha256'],'articles':pdf_routes[a['name']],'disposition':'PDF ausgewertet; Binärdatei aus dem aktuellen Git-Stand entfernt'})
        if file.exists():file.unlink()
    removed_paths={a['path']:a['source'] for a in downloads}
    # Existing wiki articles keep links to genuinely necessary external
    # programs. The site itself no longer distributes their binaries.
    for folder in dirs:
        for p in (ROOT/folder).rglob('*.md'):
            if 'quellen/wiki' in p.as_posix():continue
            s=p.read_text(encoding='utf8')
            for old,url in removed_paths.items():s=s.replace(old,url)
            s=s.replace('Alle Handbücher und Downloads','Alle Anleitungen')
            write(p.relative_to(ROOT),s)
    assets=[a for a in load('migration/assets.json') if a['path'] not in removed_paths]
    js('migration/assets.json',assets);js('migration/manuals/assets.json',[])
    js('migration/manuals/evaluated-pdfs.json',evaluated)
    js('migration/manuals/errors.json',[])
    js('migration/editorial-changes.json',{'authorization':'Benutzerauftrag: überflüssige Downloads, veraltete Verweise und Leerartikel entfernen; PDFs in Artikel überführen; Tool-Menüs kürzen und ordnen.','changed_articles':changed,'removed_downloads':downloads,'retired_count':len(retired)})
    for name in ['tools/handbuecher.md','quellen/fehlende-downloads.md','migration/OFFENE-DOWNLOADS.md']:
        f=(ROOT/name).resolve()
        if not f.is_relative_to(ROOT):raise ValueError(f)
        if f.exists():f.unlink()
    # A concise archive overview replaces the no-longer-applicable download
    # and gap counts. The exact wiki snapshot remains unchanged.
    change('quellen/index.md',lambda s:re.sub(r'^\*\*.*Wiki-Seiten.*$', '**1.405 Wiki-Seiten · 910 Wiki-Dateien**',s,flags=re.M).replace('- [Handbücher und weitere Downloads](/tools/anleitungen)','- [Anleitungen zu den Tools](/tools/anleitungen)'),reason)
    summary=load('migration/complete-summary.json');summary['manual_downloads']=0;summary['manual_errors']=[];summary['retired_articles']=len(retired);summary['evaluated_pdfs']=len(evaluated)
    js('migration/complete-summary.json',summary)
    # Avoid publishing obsolete gap/download notices in the general help text.
    write('hilfe/ueber-diese-dokumentation.md','# Über diese Dokumentation\n\nDiese Dokumentation überträgt das SchILD2-Wiki in eine nach Aufgaben und Programmen gegliederte Website. Die Originalquellen und sämtliche 910 Wiki-Dateien bleiben im [Quellenarchiv](/quellen/) nachvollziehbar.\n\nLeere Platzhalter und reine Weiterleitungsartikel werden nicht als eigenständige Fachartikel angeboten. Die aus PDF-Anleitungen gewonnenen Inhalte stehen direkt unter [Tools und Zusatzprogramme](/tools/). Zusätzliche Programmpakete oder PDF-Sammlungen werden hier nicht vorgehalten.\n\nHistorische Verfahren bleiben als solche erkennbar. SchILD2 greift direkt auf seine Datenbank zu und benötigt keinen SVWS-Server. Verfasser- und Quellenangaben der übernommenen Inhalte bleiben erhalten.\n')
    print(f'{len(retired)} empty/redirect articles removed; {len(downloads)} additional downloads removed; {len(evaluated)} PDFs evaluated.')
if __name__=='__main__':main()
