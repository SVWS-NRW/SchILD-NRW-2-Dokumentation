import json, urllib.parse as U
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
def read(p):return json.loads((ROOT/p).read_text(encoding='utf8'))
summary=read('migration/complete-summary.json')
errors=read('migration/manuals/errors.json')
articles=read('migration/articles.json')
anchors=sum(len(read(f'migration/snapshot/{a["pageid"]}.json')['sections']) for a in articles)
text=read('migration/text-audit.json')
words=sum(a['source_words'] for a in text);missing=sum(a['missing_words'] for a in text)
links='# Offene Altdateien und ihre Wiki-Fundstellen\n\nStand: 27. Oktober 2026. Archivtreffer werden vor der Übernahme auf Inhalt und Version gesichtet.\n\n| Datei | Wiki-Fundstellen | Abrufbefund |\n| --- | --- | --- |\n'
for e in sorted(errors,key=lambda e:('schulverwaltungsprogramme' in e['source'],e['source'])):
    name=U.unquote(U.urlsplit(e['source']).path.rsplit('/',1)[-1])
    refs=[]
    for ref in e['references']:
        url='https://wiki.svws.nrw.de/mediawiki/index.php?'+U.urlencode({'title':ref['source']})
        refs.append(f'[{ref["source"]}]({url})')
    status='HTTP 404 – Datei nicht gefunden' if '404' in e['error'] else 'Zeitüberschreitung beim Abruf aus dieser Arbeitsumgebung'
    links+=f'| `{name}` | '+', '.join(refs)+f' | {status} |\n'
links+='\nDie vier ASDPC-Adressen sind durch die Zeitüberschreitung nicht als weltweit abgeschaltet nachgewiesen. Die übrigen vier ursprünglichen Adressen liefern HTTP 404. Die Wiki-Artikel selbst und sämtliche 910 Wiki-Dateien sind gesichert. Ein weiterer alter Link auf Udlfile_open32_reg.zip wurde erfolgreich auf die bytegeprüfte Originaldatei im Wiki zurückgeführt.\n'
(ROOT/'migration/OFFENE-DOWNLOADS.md').write_text(links,encoding='utf8')
report=f'''# Vollständige Bestandsübernahme des SchILD2-Wikis

Stand: 27. Oktober 2026. Diese Erweiterung ersetzt die Begrenzung des Erstimports auf den Hauptnamensraum. Basis ist der zusammengeführte PR #1 in `dev` von `Raffenberg/SchILD2_Doku`.

## Umfang

| Bestand | Gesichert |
| --- | ---: |
| Aktuelle Wiki-Seiten aller Namensräume | {summary['wiki_pages']} |
| Lesbar übertragene Inhaltsseiten | {summary['articles']} |
| Originaldateien aus dem Wiki | {summary['wiki_files']} |
| Zusätzliche externe Originaldownloads | {summary['manual_downloads']} |
| Originale Überschriftsanker der Inhaltsseiten | {anchors} |
| Lesbar geprüfte PDF-Dateien | 14 mit zusammen 430 Seiten |
| Verglichene Quellwörter | {words}, davon {missing} fehlend |

Alle 18 im Wiki registrierten Namensräume wurden abgefragt, einschließlich leerer Namensräume. Die 1.405 vorhandenen Seiten verteilen sich auf Artikel (456), LuPO (11), Wiki-Projektseiten (3), Hilfe (1), Kategorien (2), Dateibeschreibungen (910), Vorlagen (16), MediaWiki-Seiten (4) und Benutzerseiten (2).

Alle 473 Inhaltsseiten stehen als normale Markdown-Artikel zur Verfügung. Die übrigen Wiki-Seiten sind im vollständigen lokalen Quellenarchiv lesbar und als Originaldaten abrufbar. Alle 910 hochgeladenen Wiki-Dateien wurden heruntergeladen – auch bislang unbenutzte Bilder und Anhänge. Ihre SHA-1-Prüfsummen stimmen mit den vom Wiki gelieferten Werten überein; zusätzliche SHA-256-Werte sind dokumentiert. Acht alte Metadatensätze meldeten fälschlich eine Größe von null Bytes; deren tatsächliche Dateien konnten dennoch vollständig und prüfsummengleich gesichert werden.

## Navigation und Tools

Das Kopfmenü hat sechs Zugänge: **Einstieg · SchILD2 · Zeugnisse · Reporting · Tools · Nachschlagen**. Die tägliche Arbeit und die Administration sind unter „SchILD2“ erreichbar. Programmreferenz, Artikelverzeichnis, Hilfe, Bilderkatalog und Quellenarchiv sind unter „Nachschlagen“ gebündelt. Keine bisher veröffentlichte Artikeladresse wurde für die Umordnung geändert.

Die Tools-Rubrik enthält Kurs42, LuPO, ASDPC, Notenmodul für Grundschulen, ENM-Notenmanager, externes Notenmodul für weiterführende Schulen, KM2, PM2, S1Plan, MA2LBV, Migrationstool, Anonymisierungstool, Import aus Textdateien und Schuljahr erhöhen. Weitere ältere Zusatzprogramme bleiben ebenfalls enthalten.

Die offiziellen Beschreibungen und Downloadverweise wurden von den vier Programmseiten zu Tools/Modulen, Kurs42, LuPO und ASDPC gesichert. Das gemeinsame Handbuch SchILD–LuPO–Kurs42, 22. Auflage, liegt als unveränderte vollständige PDF mit 184 Seiten lokal vor. Auch erreichbare Installationspakete, portable Versionen und Begleitdateien sind lokal archiviert. Sie wurden nicht ausgeführt.

## Unabhängigkeit vom abgeschalteten Wiki

Inhaltsverweise auf vorhandene Wiki-Seiten führen auf lokale Artikel oder lokale Archivseiten. Alle Artikel besitzen einen lokalen Quellennachweis. Dateibeschreibungen verknüpfen die gesicherten Originaldateien. Ein ZIP-Download enthält den vollständigen aktuellen Wiki-Quelltextbestand; Bilder und Binärdateien stehen zusätzlich einzeln im Dateiarchiv bereit. Die ursprünglichen URLs bleiben als Herkunftsnachweis nachvollziehbar.

Gesichert ist die aktuelle Fassung jeder vorhandenen Seite, einschließlich eigenständiger Versionsgeschichtsartikel. Frühere Bearbeitungsstände einzelner Seiten sowie bereits gelöschte Seiten oder Dateien sind keine Bestandteile dieser aktuellen Bestandsübernahme. Nicht vorhandene Wiki-Artikel werden weiterhin nicht erfunden.

## Acht externe Quellenlücken

**Keine der 910 unmittelbar im Wiki gespeicherten Dateien fehlt.** Acht externe Altdateien konnten dagegen nicht abgerufen werden: Vier ursprüngliche SVWS-Adressen liefern HTTP 404, vier ASDPC-Adressen laufen aus dieser Arbeitsumgebung in eine Zeitüberschreitung. Diese Befunde werden nicht gleichgesetzt. Die verweisenden Artikel sind erhalten; ihre betroffenen Links führen auf eine lokale Erläuterung mit der Originaladresse.

Die vollständige Zuordnung der Dateinamen zu den aufrufenden Wiki-Artikeln steht in [OFFENE-DOWNLOADS.md](OFFENE-DOWNLOADS.md). Treffer aus einem Benutzerarchiv sollen zunächst auf Inhalt und Version gesichtet und erst danach übernommen werden. Die Abschaltung des Wikis führt dadurch zu keinem zusätzlichen Verlust der bereits vorhandenen Wiki-Dateien; die acht externen Quellenlücken bleiben ausdrücklich offen.

## Prüfung und Nachweise

- Migrationsprüfung und vollständige Bestandsprüfung: sämtliche Inhaltsseiten, 1.405 lokale Originalquellen, 910 Wiki-Dateien, ergänzende Downloads und alle benötigten Tool-Zugänge.
- Textvergleich: Der bereinigte Originaltext sämtlicher Inhaltsseiten wird gegen den übertragenen Text verglichen; Wiki-Bedienelemente und ersetzte Boxentitel sind ausgenommen.
- PDF-Prüfung: Alle 14 PDFs lassen sich öffnen; das gemeinsame Handbuch wurde zusätzlich anhand gerenderter Seiten visuell geprüft. Originaldateien wurden nicht verändert.
- Bau, interne Links und Sprungmarken sowie Browserbedienung werden lokal und in GitHub Actions geprüft. Die erweiterten Browserprüfungen umfassen 56 Ansichten bei 390/1440 Pixeln in Hell/Dunkel sowie Suche, Bilderkatalog, Referenzkontext, Mobilmenü, lokale LuPO-Handbücher und Rubrikdruck.

Belege: `wiki-complete/inventory.json`, `wiki-complete/pages/`, `wiki-complete/files.json`, `wiki-complete/assets.json`, `manuals/sources.json`, `manuals/assets.json`, `manuals/errors.json`, `manuals/resolutions.json`, `articles.json`, `text-audit.json`, `pdf-check.json`, `link-check.txt` und `browser-check.json`.

Die ursprünglichen Verfasser-, Versions- und Rechteangaben der Texte und Dateien bleiben erhalten. Eine neue Nutzungslizenz wird durch die technische Übertragung nicht erteilt. Eine Veröffentlichung und ein Merge werden nicht automatisch vorgenommen.
'''
(ROOT/'migration/BERICHT.md').write_text(report,encoding='utf8')
print(f'Report: {summary["wiki_pages"]} pages, {summary["wiki_files"]} files, {len(errors)} external gaps')
