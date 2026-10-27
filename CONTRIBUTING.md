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

`migration/snapshot/` enthält die Originale der lesbaren Inhaltsseiten. `migration/wiki-complete/` enthält zusätzlich sämtliche aktuellen Seiten aller Wiki-Namensräume und das vollständige Dateiinventar. Bearbeiten Sie die Artikel in den Themenordnern; schreiben Sie die Quellensicherung nicht um. Die Prüfungen kontrollieren Seitenzuordnung, lokale Originalquellen, Sprungmarken, alle 910 Wiki-Dateien, ergänzende Downloads und die Vollständigkeit der Tools. Sie verlangen keine unveränderten Artikeltexte nach einer redaktionellen Überarbeitung.

Die obere Navigation hat sechs Zugänge. „SchILD2“ fasst Arbeit und Administration zusammen, „Nachschlagen“ Programmreferenz und Hilfe. Neue Tools werden in `tools/` und im Seitenmenü von `.vitepress/navigation.json` ergänzt. Bereits veröffentlichte Artikel bleiben unter ihren ursprünglichen Adressen erreichbar, auch wenn das Tool-Menü sie nun an anderer Stelle erschließt.

Die Importscripte dienen der Reproduktion des Erstimports. Ein erneuter Lauf von `build-content.py` überschreibt die erzeugten Artikel und Menüs. Führen Sie ihn ausschließlich in einer separaten Arbeitskopie aus. Er benötigt Python mit `lxml` und Pandoc. Setzen Sie bei Bedarf `PANDOC` auf die ausführbare Datei. Die Originalquellen bleiben mit `import-wiki.py` erneut abrufbar; ein neuer Export ersetzt nicht automatisch den geprüften Quellenstand.

Der vollständige Import verwendet nacheinander `archive-complete.py`, `archive-manuals.py`, `build-content.py` und `extend-site.py`. `import-wiki.py` ruft inzwischen ebenfalls den vollständigen Wiki-Export auf; die alte Begrenzung auf den Hauptnamensraum wird nicht wiederverwendet. Für den Darstellungsimport benötigt `build-content.py` die SchILD3-Vorlage im benachbarten Ordner `schild3-reference`. `extend-site.py` erzeugt anschließend die vollständigen Tools- und Archivzugänge. `migration/audit-text.py`, `migration/check-pdf.py` und `migration/write-report.py` ergänzen Textvergleich, PDF-Prüfung und Bestandsbericht.

Offene externe Altdateien stehen mit ihren Wiki-Fundstellen in `migration/OFFENE-DOWNLOADS.md`. Archivtreffer zuerst sichten und die tatsächliche Datei mit dem beschriebenen Inhalt und der Version abgleichen. Eine ähnlich benannte oder neuere Anleitung darf nicht ohne Kennzeichnung als wiedergefundenes Original ausgegeben werden.

Fachliche Anpassungen dürfen keine SchILD3-Menüs oder einen SVWS-Server als Voraussetzung für SchILD2 einführen. Historische Programmfunktionen bleiben enthalten; Aussagen zu früheren Rechtsständen müssen ihren zeitlichen Bezug behalten.
