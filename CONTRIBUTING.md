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

`migration/snapshot/` enthält den unveränderten Ausgangsbestand. Bearbeiten Sie die Artikel in den Themenordnern; schreiben Sie die Quellensicherung nicht um. Die Migrationsprüfung kontrolliert die Zuordnung aller Originalseiten, Quellversionen, Sprungmarken und die Originaldateien. Sie verlangt keine unveränderten Artikeltexte nach einer redaktionellen Überarbeitung.

Die Importscripte dienen der Reproduktion des Erstimports. Ein erneuter Lauf von `build-content.py` überschreibt die erzeugten Artikel und Menüs. Führen Sie ihn ausschließlich in einer separaten Arbeitskopie aus. Er benötigt Python mit `lxml` und Pandoc. Setzen Sie bei Bedarf `PANDOC` auf die ausführbare Datei. Die Originalquellen bleiben mit `import-wiki.py` erneut abrufbar; ein neuer Export ersetzt nicht automatisch den geprüften Quellenstand.

Fachliche Anpassungen dürfen keine SchILD3-Menüs oder einen SVWS-Server als Voraussetzung für SchILD2 einführen. Historische Programmfunktionen bleiben enthalten; Aussagen zu früheren Rechtsständen müssen ihren zeitlichen Bezug behalten.
