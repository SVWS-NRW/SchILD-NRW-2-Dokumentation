# An der Dokumentation mitarbeiten

Die öffentlichen Hinweise unter **Hilfe** sind die gemeinsame Grundlage für die Redaktion:

- [Artikel schreiben und bearbeiten](hilfe/artikel-schreiben.md)
- [Markdown und Gestaltung](hilfe/markdown-und-gestaltung.md)

Diese Datei beschreibt die technische Mitarbeit im Repository. Die Schreibregeln und Formatbeispiele werden ausschließlich auf den beiden Hilfeseiten gepflegt.

## Lokal beginnen

Benötigt werden Git und Node.js 22. Für einen neuen lokalen Klon:

```sh
git clone --branch dev https://github.com/SVWS-NRW/SchILD-NRW-3-Dokumentation.git
cd SchILD-NRW-3-Dokumentation
git switch -c redaktion/mein-thema
npm ci
npm run docs:dev
```

`redaktion/mein-thema` ist ein Beispiel; wählen Sie einen eigenen passenden Branchnamen. Beginnen Sie auch in einem vorhandenen Klon mit einem aktuellen Stand von `dev` und arbeiten Sie auf einem eigenen Branch. Vorhandene lokale Änderungen vorher sichern.

Öffnen Sie die im Terminal angezeigte Adresse. Die Vorschau bleibt verfügbar, solange der Prozess läuft; mit Strg+C beenden Sie ihn. In Windows PowerShell kann statt `npm` auch `npm.cmd` verwendet werden.

## Dateien und Zuordnungen bearbeiten

- Artikel direkt in den Markdown-Dateien der Themenordner bearbeiten. Wiki-Quellenlinks, bestehende Artikeladressen und verwendete Überschrift-Sprungmarken erhalten. Alte Wiki-Kennungen, Revisionsnummern oder zusätzliche leere Sprungmarken werden nicht neu angelegt.
- Bilder unter `public/bilder/`, andere Downloads unter `public/dateien/` ablegen. In Artikellinks das Präfix `public` weglassen.
- Verwendete Bilder im Katalog `.vitepress/image-catalog.json` nachführen: Dateipfad, Beschreibung, Bildunterschriften und verlinkte Artikel berücksichtigen. Auch bei der Wiederverwendung eines Bildes den zusätzlichen Artikel eintragen.
- Hauptmenü und normale Seitenmenüs in `.vitepress/navigation.json` pflegen. Bei Themenübersichten können Untermenüs zusätzlich aus den dortigen Artikellisten entstehen; dies übernimmt `.vitepress/sidebar.mjs`.
- Die Hierarchie der Programmreferenz steht in `.vitepress/program-reference.json`. Bestehende Referenz-IDs und Linkziele erhalten.
- Die manuelle [Vergleichstabelle zwischen Dokumentation und Wiki](hilfe/artikel-wiki-zuordnung.md) bei neuen, entfernten oder umbenannten Artikeln nachführen und ihren Aktualitätsstand anpassen.
- Der Artikelindex und die lokale Suche erfassen veröffentlichte Markdown-Seiten automatisch. Eine neue Seite muss zusätzlich im passenden Themenmenü oder in einer Übersicht erreichbar sein.

## Änderung prüfen

```sh
npm test
npm run docs:build
npm run docs:check
```

Den Artikel außerdem in der lokalen Vorschau gegenlesen und Bilder, Verweise und Darstellung ansehen. Bei Änderungen an Menü, Suche oder Gestaltung zusätzlich `npm run docs:check-browser` ausführen. Die benötigte Playwright-Installation ist in der [README](README.md) beschrieben.

## Änderung einreichen

1. Die geänderten und neu hinzugefügten Dateien auf dem eigenen Branch committen.
2. Den Branch nach GitHub pushen und einen Pull Request gegen `dev` öffnen.
3. Im Pull Request kurz erklären, was geändert wurde, worauf fachliche Änderungen beruhen und was geprüft wurde.
4. Die automatischen Prüfungen abwarten und gegebenenfalls Fehler beheben.

`dev` und `master` werden nicht direkt beschrieben. Den Merge übernimmt der Verantwortliche. Fehler oder fachliche Ergänzungsvorschläge können auch über die [Issues des Repositorys](https://github.com/SVWS-NRW/SchILD-NRW-3-Dokumentation/issues) gemeldet werden.
