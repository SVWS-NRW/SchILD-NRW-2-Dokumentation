# SchILD-NRW 2 – Dokumentation

Praxisanleitungen und Nachschlagewerk für die tägliche Arbeit mit SchILD-NRW 3: Schülerdaten, Unterricht, Zeugnisse, Abschlüsse, Reporting und Administration.

- Offizielles Repository: https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation

- Veröffentlichte SchILD-NRW 2 Dokumentation: https://schild2.svws-nrw.de

- Veröffentlichte SchILD-NRW 2 Dokumentation auf GitHub Pages: https://svws-nrw.github.io/SchILD-NRW-2-Dokumentation

Die Dokumentation beschreibt den Zielstand **SchILD-NRW 2.0.36**. Die jeweils verfügbaren Installationspakete und passenden Serverversionen stehen in den offiziellen Releasehinweisen.

## Lokal ansehen

Benötigt wird Node.js 22. Im Repository:

```sh
npm ci
npm run docs:dev
```

Die im Terminal angezeigte lokale Adresse im Browser öffnen. Bilder und Downloads sind im Repository enthalten; sie werden nicht beim Start nachgeladen.

## Artikel bearbeiten

Die Artikel direkt in den Markdown-Dateien bearbeiten. Änderungen erfolgen auf einem eigenen Branch mit Pull Request gegen `dev`. Den Merge übernimmt der Verantwortliche.

Unter **Hilfe** stehen [Artikel schreiben und bearbeiten](hilfe/artikel-schreiben.md) mit den gemeinsamen Schreibregeln und [Markdown und Gestaltung](hilfe/markdown-und-gestaltung.md) mit kopierbaren Beispielen. Die [Anleitung zur technischen Mitarbeit](CONTRIBUTING.md) erklärt Branches, lokale Vorschau, Menüzuordnung und Einreichen einer Änderung.

## Prüfen

Vor einem Pull Request:

```sh
npm test
npm run docs:build
npm run docs:check
```

Der Build erstellt die Website und prüft Seitenverweise. `docs:check` kontrolliert anschließend interne Links einschließlich Sprungmarken sowie die referenzierten Bilder im fertigen Ergebnis. Externe Websites werden dabei nicht abgefragt. Die kleinen Tests prüfen zentrale Darstellungsfunktionen und die Linkprüfung.

Bei Änderungen an Menü, Suche oder Darstellung zusätzlich die gezielte Browserprüfung ausführen:

```sh
npm install --no-save --package-lock=false playwright@1.56.1
npx playwright install chromium
npm run docs:check-browser
```

Sie prüft Themenmenü, Programmreferenz, Weiterblättern und breite Tabellen auf Desktop und Smartphone sowie Suche und Artikelindex. Es gibt keinen vollständigen Artikelscan und keinen dauernden Vergleich mit alten Wiki-Fassungen.

Auf GitHub läuft **Dokumentation prüfen** bei jedem Pull Request nach `dev`. **Bedienung prüfen** läuft bei Änderungen an Theme, Werkzeugen, Tests, Abhängigkeiten und den ausgewählten Darstellungsseiten. Bei Bedarf kann der Browserlauf auch manuell gestartet werden. Fehleraufnahmen liegen als GitHub-Artefakt vor; lokale Ausgaben unter `test-results/` gehören nicht in Git.

## Technischer Paketstand

VitePress 1.6.4 und `markdown-it-container` 4.0.0 bleiben die stabilen Grundlagen. Die Vite-Abhängigkeit von VitePress ist über `overrides` in `package.json` auf **Vite 6.4.5** festgelegt. Diese gezielte Abweichung von der VitePress-Standardabhängigkeit behebt die gemeldeten Vite-/esbuild-Lücken und verwendet den vom vorhandenen Vue-Plugin unterstützten Vite-6-Zweig. Die mitgelieferten Build- und Browserprüfungen decken die verwendeten Funktionen ab.

Bei einem späteren stabilen VitePress-Update prüfen, ob die Festlegung entfallen kann. Nach Paketänderungen `npm ci` ausführen. Entwicklungs- und Vorschau-Server bleiben lokal.

## Veröffentlichen

```sh
npm run docs:build
npm run docs:preview
```

Veröffentlicht wird ausschließlich der Inhalt von `.vitepress/dist` über statisches HTTPS-Hosting. Entwicklungs- und Vorschau-Server werden nicht öffentlich betrieben. Die Zieladresse ist `https://schild3.svws-nrw.de/`. Standardbuild und lokale Vorschau verwenden die Domainwurzel `/`; dies ist in `.vitepress/site-base.mjs` festgelegt. Ein anderer Unterpfad kann über `DOCS_BASE` angegeben werden.

Ein Merge nach `master` startet `.github/workflows/deploy.yml`: Build, Link- und Bildprüfung sowie Veröffentlichung auf GitHub Pages. Manuelle Läufe auf anderen Branches prüfen nur den Build. Das Workflow-Artefakt `schild3-domain` enthält die fertige Website für die Domainwurzel des Nginx-Servers. Für die GitHub-Pages-Vorschau wird bei Bedarf zusätzlich mit dem von GitHub vorgegebenen Unterpfad gebaut. Die Anbindung der Zieladresse auf dem bestehenden Nginx-Server erfolgt getrennt; der Workflow ändert weder DNS noch diesen Server.

Die veröffentlichende Stelle legt Hosting und Zieladresse fest und ergänzt die benötigten Anbieter-/Datenschutzangaben und Nutzungsrechte. Externe Videoeinbettungen berücksichtigen. Die im Repository hinterlegte Lizenz steht in [LICENSE](LICENSE). Vorhandene Quellenverweise bleiben erhalten.

Nach dem Upload Startseite, tiefe Artikellinks, Suche, Bilder und Mobilmenü auf der tatsächlichen Zieladresse prüfen.

