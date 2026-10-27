import json
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
def read(p):return json.loads((ROOT/p).read_text(encoding='utf8'))
retired=read('migration/retired-articles.json')
pdfs=read('migration/manuals/evaluated-pdfs.json')
changes=read('migration/editorial-changes.json')
report='''# Redaktionelle Bereinigung der Tools-Dokumentation

Stand: 27. Oktober 2026. Grundlage ist der zusammengeführte PR #2 in `dev` von `Raffenberg/SchILD2_Doku`.

## Ergebnis

- Die zu acht entfallenen Altdateien gehörenden Links, Downloadankündigungen und überflüssigen Klammern wurden aus den Fachartikeln entfernt. Die gesonderte Liste offener Downloads und die entsprechende Website-Seite sind entfallen.
- 34 zusätzlich heruntergeladene Dateien sind aus dem aktuellen Git-Stand entfernt. Dazu gehören Programmpakete, Hilfsprogramme und die nach ihrer Auswertung nicht mehr benötigten PDF-Kopien. Die Git-Historie wurde nicht umgeschrieben.
- Neun PDF-Quellen wurden ausgewertet. Daraus entstanden 15 neue Fachartikel und Ergänzungen zu drei vorhandenen Wiki-Artikeln. Quellen, Ausgaben und Seitenbereiche sind in den Artikeln angegeben. Die Zuordnung ist zusätzlich in `manuals/evaluated-pdfs.json` mit den Prüfsummen der ausgewerteten Quellen dokumentiert.
- Zwölf leere Platzhalter beziehungsweise reine Weiterleitungsartikel sind aus dem aktiven Bestand entfernt. Alte Lesezeichen werden auf statischem Hosting direkt zum passenden Ersatzinhalt geführt; die Leerartikel erscheinen nicht in Suche oder Menüs.
- Tool-Untermenüs verwenden kurze Bezeichnungen. Die Reihenfolge folgt den beschriebenen Voraussetzungen und Arbeitsschritten. LuPO übernimmt die Reihenfolge des ursprünglichen Handbuchs einschließlich der unter „Erste Schritte“ eingeordneten Schülerdateien.

Die vollständigen Originalquellen aller 1.405 Wiki-Seiten und die 910 ursprünglichen Wiki-Dateien sind unverändert erhalten. Grafische Fachartikel, die eine aussagekräftige Abbildung enthalten, wurden nicht als leer entfernt. Der aktive Fachbestand umfasst 461 übernommene Wiki-Artikel und 15 aus den PDF-Quellen erarbeitete Artikel, zusätzlich zu den Themenübersichten und Hilfeseiten.

## Ausgewertete PDF-Quellen

| Quelle | Daraus entstandene beziehungsweise ergänzte Artikel |
| --- | --- |
'''
for pdf in pdfs:
    report+='| ['+pdf['source'].rsplit('/',1)[-1]+']('+pdf['source']+') | '+'; '.join('['+p+'](../'+p+')' for p in pdf['articles'])+' |\n'
report+='\n## Entfernte Leer- und Weiterleitungsartikel\n\n| Wiki-Artikel | Ersatzinhalt | Begründung |\n| --- | --- | --- |\n'
for a in retired:
    report+=f'| {a["title"]} | `{a["replacement"]}` | {a["reason"]} |\n'
report+='''
## Menüabläufe

- **Kurs42:** Installation, Zusammenspiel mit SchILD und LuPO, neue Blockung, Klausurplanung, Halbjahreswechsel, externe Blockungsverfahren, SchILDzentral und Versionsgeschichte.
- **LuPO:** Einleitung, Installation, Vorbereitungen in SchILD, erste Schritte mit Schülerdateien, Beratung, Auswertung, Übergabe an Kurs42 und weitere Laufbahnprüfungen; ergänzende Verzeichnisse folgen am Ende.
- **ASDPC:** Überblick, Gesamtablauf, Installation/Technik, Programmaufbau, Vorbereitung, Schlüsselmanagement, Haupterhebung und Fehlersuche.
- **Grundschul-Notenmodul:** Vorbereitung und Export, Dateneingabe, Rückgabe/Import und Druck.
- **ENM-Notenmanager:** Ersteinrichtung, Leistungsdaten, zentrale Prüfungen/Rückgabe sowie Import und Druck.
- **KM2:** Überblick, Installation/Einrichtung, Datenbank/Administration, persönliche Einstellungen, Konferenzarbeit und Update.
- **PM2:** Überblick und Einleitung, Installation, Programmstart, Hauptfenster mit den Analyseverfahren sowie Ergebnisausgabe.
- **S1Plan:** Überblick, Installation, erster Start, Kurse einrichten/zuweisen, vorhandene Kurse übernehmen und Anhang.
- **MA2LBV/MA2:** Einrichtung, Datenimport, Abrechnung und Ausgabe.

## Prüfung und Pflege

Die Bestandsprüfung kontrolliert weiterhin sämtliche Originalquellen und Wiki-Dateien. Für entfernte Leerartikel prüft sie dokumentierte Gründe und vorhandene Ersatzinhalte. Zusätzliche Tests kontrollieren Menüreihenfolge, kurze Namen, eindeutige Einträge, die PDF-zu-Artikel-Zuordnung und das Fehlen der entfernten Downloads. Linkkontrolle und Browserprüfung berücksichtigen die statischen Weiterleitungen und verschachtelte Tool-Menüs.

Die historischen Erstimport-Skripte dürfen die redaktionell gepflegten Inhalte nicht wieder überschreiben. Der PDF-Helfer lädt ausschließlich belegte PDF-Quellen in den ignorierten temporären Sichtungsordner. Es werden keine zusätzlichen Programme oder PDF-Sammlungen im veröffentlichten Dateibestand erzeugt.

Weitere redaktionelle Änderungen erfolgen direkt an den Artikeln und an `.vitepress/navigation.json`. Die Originalquellen im Archiv werden dabei nicht verändert.
'''
(ROOT/'migration/BERICHT.md').write_text(report,encoding='utf8')
summary=read('migration/complete-summary.json')
summary.update(active_wiki_articles=473-len(retired),additional_manual_articles=15,evaluated_pdfs=len(pdfs),manual_downloads=0,manual_errors=[])
(ROOT/'migration/complete-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print('Editorial report updated')
