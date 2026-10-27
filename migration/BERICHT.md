# Redaktionelle Bereinigung der Tools-Dokumentation

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
| [enm_bedienungsanleitung_2.pdf](https://www.svws.nrw.de/system/files/media/document/file/enm_bedienungsanleitung_2.pdf) | [tools/enm-notenmanager/ersteinrichtung.md](../tools/enm-notenmanager/ersteinrichtung.md); [tools/enm-notenmanager/leistungsdaten.md](../tools/enm-notenmanager/leistungsdaten.md); [tools/enm-notenmanager/pruefungen-und-rueckgabe.md](../tools/enm-notenmanager/pruefungen-und-rueckgabe.md); [tools/enm-notenmanager/import-und-druck.md](../tools/enm-notenmanager/import-und-druck.md) |
| [handbuch-schild-lupo-kurs42-22.auflage.pdf](https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf) | [tools/kurs42/datenfluss.md](../tools/kurs42/datenfluss.md); [tools/kurs42/neue-blockung.md](../tools/kurs42/neue-blockung.md); [tools/kurs42/klausurplanung.md](../tools/kurs42/klausurplanung.md); [tools/kurs42/halbjahreswechsel.md](../tools/kurs42/halbjahreswechsel.md) |
| [km2_versionsgeschichte.pdf](https://www.svws.nrw.de/system/files/media/document/file/km2_versionsgeschichte.pdf) | [tools/km2.md](../tools/km2.md); [hilfe/zusatzprogramme/km2-001.md](../hilfe/zusatzprogramme/km2-001.md) |
| [ma2lbv_anleitung.pdf](https://www.svws.nrw.de/system/files/media/document/file/ma2lbv_anleitung.pdf) | [tools/ma2lbv/einrichtung.md](../tools/ma2lbv/einrichtung.md); [tools/ma2lbv/abrechnung.md](../tools/ma2lbv/abrechnung.md); [tools/ma2lbv/datenimport.md](../tools/ma2lbv/datenimport.md) |
| [ma2pdf_versionsgeschichte.pdf](https://www.svws.nrw.de/system/files/media/document/file/ma2pdf_versionsgeschichte.pdf) | [tools/ma2lbv/einrichtung.md](../tools/ma2lbv/einrichtung.md); [tools/ma2lbv/abrechnung.md](../tools/ma2lbv/abrechnung.md) |
| [notenmodul_grundschule_anleitung.pdf](https://www.svws.nrw.de/system/files/media/document/file/notenmodul_grundschule_anleitung.pdf) | [tools/notenmodul-grundschule/vorbereitung.md](../tools/notenmodul-grundschule/vorbereitung.md); [tools/notenmodul-grundschule/leistungsdaten.md](../tools/notenmodul-grundschule/leistungsdaten.md); [tools/notenmodul-grundschule/rueckgabe-und-druck.md](../tools/notenmodul-grundschule/rueckgabe-und-druck.md) |
| [pm2_bedienungsanleitung_1.pdf](https://www.svws.nrw.de/system/files/media/document/file/pm2_bedienungsanleitung_1.pdf) | [tools/pm2/analysen-und-ergebnisse.md](../tools/pm2/analysen-und-ergebnisse.md) |
| [pm2_versionsgeschichte.pdf](https://www.svws.nrw.de/system/files/media/document/file/pm2_versionsgeschichte.pdf) | [tools/pm2/analysen-und-ergebnisse.md](../tools/pm2/analysen-und-ergebnisse.md) |
| [s1plan_anleitung.pdf](https://www.svws.nrw.de/system/files/media/document/file/s1plan_anleitung.pdf) | [hilfe/zusatzprogramme/s1plan-einrichtung-von-kursen.md](../hilfe/zusatzprogramme/s1plan-einrichtung-von-kursen.md); [hilfe/zusatzprogramme/s1plan-uebernahme-von-kursen-aus-schild.md](../hilfe/zusatzprogramme/s1plan-uebernahme-von-kursen-aus-schild.md) |

## Entfernte Leer- und Weiterleitungsartikel

| Wiki-Artikel | Ersatzinhalt | Begründung |
| --- | --- | --- |
| Haltestelle | `/schild2/unterricht-kataloge/haltestellen` | Leerer Artikel; der ausgearbeitete Katalogartikel heißt Haltestellen. |
| Kurs42:Inhaltsverzeichnis | `/tools/kurs42` | Enthielt nur zwei nicht vorhandene Wiki-Ziele; durch den ausgearbeiteten Tool-Einstieg ersetzt. |
| KM2 002 | `/hilfe/zusatzprogramme/km2-001#ersteinrichtung` | Nur Überschrift und Weiter-Link; Ersteinrichtung ist im Installationsartikel ergänzt. |
| KM2 003 | `/hilfe/zusatzprogramme/modulbenutzung` | Nur Überschrift und Platzhalter; ausgearbeitete Bedienungsanleitung vorhanden. |
| Textzeugnisse erzeugen | `/tools/notenmodul-grundschule/rueckgabe-und-druck` | Leerer Artikel; Ausgabe und Rückgabe sind nun beschrieben. |
| Lupo:LuPO | `/tools/lupo` | Nicht ausgearbeiteter Einleitungsplatzhalter. |
| LuPO Einleitung | `/tools/lupo/lupo-einleitung` | Reine Weiterleitungsseite ohne eigenen Inhalt. |
| Kursverwaltung KPlan.exe | `/hilfe/zusatzprogramme/kursplanung-kplan-exe` | Leerer Artikel; ausgearbeitete Kursplanung vorhanden. |
| Teilleistungen Einrichten und Verwalten | `/schild2/unterricht-kataloge/teilleistungen-einrichten-und-verwalten` | Reine, zuvor auf sich selbst zeigende Weiterleitung. |
| Grundschulzeugnisse Ankreuzzeugnis | `/tools/notenmodul-grundschule/leistungsdaten` | Enthielt ausschließlich eine Ankündigung; Anleitung ist nun ausgearbeitet. |
| Grundschulzeugnisse Lernstandsberichte | `/zeugnisse/grundschule` | Enthielt ausschließlich eine Ankündigung ohne Fachinhalt. |
| Statistik mit ASDPC Uebersicht | `/schild2/import-export-statistik/statistik-mit-asdpc-uebersicht` | Reine Weiterleitung auf die vorhandene Übersicht. |

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

Abschlussprüfung: vollständiger Seitenaufbau erfolgreich; 1.968 Seiten ohne fehlerhafte interne Links oder Bilder; sechs Bestand-/Menütests erfolgreich; 64 Browseransichten bei 390/1440 Pixeln in heller und dunkler Darstellung sowie Suche, Mobilmenü, Weiterleitungen und Rubrikdruck erfolgreich geprüft.
