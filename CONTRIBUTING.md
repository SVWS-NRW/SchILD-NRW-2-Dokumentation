# An der SchILD2-Dokumentation mitarbeiten

Arbeiten Sie in einem eigenen Branch und stellen Sie Änderungen als Pull Request gegen `dev` bereit. Bestehende Artikeladressen, Bildnachweise und historische Sprungmarken bleiben erhalten.

## Vorschau und Prüfung

Benötigt wird Node.js 22 oder neuer.

```sh
npm ci
npm run docs:dev
npm test
npm run docs:build
npm run docs:check
```

Unter Windows können Sie `npm.cmd` verwenden. Für die Browserprüfung zusätzlich `npm install --no-save --package-lock=false playwright@1.56.1` und `npx playwright install chromium` ausführen; anschließend `npm run docs:check-browser`.

## Artikel und Menüs

Artikel werden als Markdown in den Themenordnern gepflegt. Die [Autorenhilfe](hilfe/artikel-schreiben.md) und [Gestaltungsbeispiele](hilfe/markdown-und-gestaltung.md) beschreiben die Konventionen. Bilder liegen in `public/bilder/`, Downloads in `public/dateien/`.

- `.vitepress/navigation.json`: Themenrubriken und Artikelreihenfolge.
- `.vitepress/program-reference.json`: tatsächliche Menüstruktur von SchILD2.
- `.vitepress/sidebar.mjs`: aktive Themen und aufklappbare Untermenüs.
- `.vitepress/markdown.mjs` und `hint-boxes.mjs`: Hinweisboxen und Markdown-Darstellung.
- `.vitepress/theme/`: Layout, Druck und Bilderkatalog.

„Alle Artikel“ und die Suche werden aus den veröffentlichten Markdown-Dateien erzeugt. Neue Bilder müssen zusätzlich im Bilderkatalog `.vitepress/image-catalog.json` mit Beschriftung und Artikelverwendung aufgenommen werden.

## Quellenbestand

`migration/snapshot/` enthält die Originale der Inhaltsseiten. `migration/wiki-complete/` enthält zusätzlich sämtliche aktuellen Seiten aller Wiki-Namensräume und das vollständige Dateiinventar. Bearbeiten Sie die Artikel in den Themenordnern; schreiben Sie die Quellensicherung nicht um. Die Prüfungen kontrollieren Seitenzuordnung, lokale Originalquellen, Sprungmarken, alle 910 Wiki-Dateien, dokumentierte Ersatzinhalte für entfernte Leerartikel und die PDF-Auswertungen. Sie verlangen keine unveränderten Artikeltexte nach einer redaktionellen Überarbeitung.

Die obere Navigation hat sechs Zugänge. „SchILD2“ fasst Arbeit und Administration zusammen, „Nachschlagen“ Programmreferenz und Hilfe. Neue Tools werden in `tools/` und im Seitenmenü von `.vitepress/navigation.json` ergänzt. Bereits veröffentlichte Artikel bleiben unter ihren ursprünglichen Adressen erreichbar, auch wenn das Tool-Menü sie nun an anderer Stelle erschließt.

Die Importscripte dokumentieren den abgeschlossenen Erstimport. `build-content.py` und `extend-site.py` dürfen die inzwischen redaktionell gepflegten Artikel und Menüs nicht wieder überschreiben und verweigern deshalb nach der Bereinigung einen erneuten Lauf. Die normale Pflege erfolgt direkt in Markdown und in `.vitepress/navigation.json`. Für eine Untersuchung des alten Imports ist eine gesonderte Arbeitskopie notwendig.

`import-wiki.py` und `archive-complete.py` sichern den Wiki-Bestand. `archive-manuals.py` lädt ausschließlich die belegten PDF-Quellen zur Sichtung in den ignorierten Ordner `tmp/pdf-source`; es lädt keine Programmpakete in den veröffentlichten Dateibestand. `migration/manuals/evaluated-pdfs.json` ordnet jede ausgewertete Quelle den daraus entstandenen Artikeln zu.

Entfallene Altdateiverweise werden nicht erneut als Downloadlisten eingeführt. Bei neuen PDF-Quellen werden die relevanten Inhalte fachlich geprüft, in bestehende oder neue Artikel eingearbeitet und mit Quelle, Ausgabe und Seitenangaben belegt. Die PDF-Datei selbst wird anschließend nicht in Git aufgenommen. Leere Platzhalter können mit dokumentiertem Ersatz aus dem aktiven Artikelbestand entfernt werden.

Fachliche Anpassungen dürfen keine SchILD3-Menüs oder einen SVWS-Server als Voraussetzung für SchILD2 einführen. Historische Programmfunktionen bleiben enthalten; Aussagen zu früheren Rechtsständen müssen ihren zeitlichen Bezug behalten.
