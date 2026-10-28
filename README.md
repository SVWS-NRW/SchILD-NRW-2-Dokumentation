# SchILD-NRW 2 – Dokumentation

VitePress-Dokumentation mit Arbeitsanleitungen, Programmreferenz, Reporting und Tools. SchILD2 greift direkt auf seine Datenbank zu und benötigt keinen SVWS-Server. Die Dokumentation ist nicht an eine bestimmte Programmversion gebunden.

## Lokal arbeiten

Node.js 22 oder neuer verwenden:

```sh
npm ci
npm run docs:dev
```

Die angezeigte Adresse öffnet die Vorschau. Unter Windows kann `npm.cmd` verwendet werden.

```sh
npm test
npm run docs:build
npm run docs:check
npm run docs:preview
```

Der statische Webauftritt liegt in `.vitepress/dist/`. Für das vollständige Quellenarchiv kann beim Build mehr Node-Arbeitsspeicher nötig sein. Die GitHub-Prüfungen stellen 6 GiB bereit. Bei Bedarf lokal `NODE_OPTIONS=--max-old-space-size=6144` setzen (PowerShell: `$env:NODE_OPTIONS='--max-old-space-size=6144'`).

Die begrenzte Browserprüfung läuft mit `npm run docs:check-browser`; dafür wird Playwright und ein Chromium-Browser benötigt. Sie prüft repräsentative Ansichten und Bedienwege. Normale Artikelpflege benötigt weder Python noch Pandoc.

## Aufbau und Pflege

Das Kopfmenü hat sechs Zugänge: **Einstieg · SchILD2 · Zeugnisse · Reporting · Tools · Nachschlagen**. SchILD2 bündelt Arbeiten und Administration; Nachschlagen erschließt Programmreferenz, Hilfe, Artikelindex, Bilder und Quellenarchiv.

- Artikel direkt in ihren Markdown-Dateien bearbeiten. Sichtbare Quellenlinks, fachliche Einzelheiten, Beispiele und benötigte Sprungziele erhalten.
- `.vitepress/navigation.json` enthält Themenmenüs und Hauptnavigation; `.vitepress/program-reference.json` die SchILD2-Programmreferenz.
- Ein Artikel kann aus mehreren Rubriken erreichbar sein. Seitenmenüs erhalten den gewählten Lesekontext über `rubrik`; die Programmreferenz verwendet `referenz`, das A–Z-Verzeichnis `artikel=az`. Die Artikelpfade bleiben unverändert. `.vitepress/section-navigation.mjs` hält Rubrik, Themenzweig und Weiterblättern zusammen; die Referenz darf keine normalen Artikeladressen im Seitenmenü überschreiben.
- Bilder liegen thematisch unter `public/bilder/`; der Katalog unter `/bilder/` erleichtert Wiederverwendung. Seine Daten stehen in `.vitepress/image-catalog.json`.
- `.vitepress/redirects.json` enthält Ersatzadressen für entfernte Leerartikel.
- `.vitepress/pdf-sources.json` ordnet ausgewertete PDF-Quellen ihren Artikeln zu. Zusätzliche Programmpakete oder Handbuchsammlungen werden nicht vorgehalten.
- Autorenregeln und kopierbare Beispiele stehen unter Hilfe. Technische Mitarbeit beschreibt [CONTRIBUTING.md](CONTRIBUTING.md).

## Quellen und Inhaltserhalt

Das Quellenarchiv erhält alle **1.405 gesicherten Wiki-Seiten und 910 hochgeladenen Originaldateien**, einschließlich der nicht mehr in Fachartikeln verwendeten Dateien. Die Quelltexte stehen unter `/quellen/` und als ZIP unter `public/dateien/quellen/wiki-quelltexte.zip`; frühere Bearbeitungsstände und gelöschte Wiki-Seiten sind nicht Teil dieser Bestandssicherung.

Die normale Dokumentation enthält 461 übernommene Wiki-Artikel sowie 15 ergänzende PDF-Anleitungen. Zwölf frühere Leer- oder Weiterleitungsartikel führen zu Ersatzinhalten. Neun PDF-Quellen sind in Artikeln ausgewertet. Alle Originalquellen bleiben unabhängig von der weiteren Redaktion erhalten.

Historische Konverter und eingefrorene Artikelprüfungen wurden nach geprüfter lokaler Sicherung und ausdrücklicher Freigabe entfernt. Die Git-Historie bewahrt den bisherigen Importstand. Normale Pflege ist nicht an alte Textprüfsummen gebunden. Den Abgleich mit der SchILD3-Arbeitsliste dokumentiert [UMSETZUNG.md](UMSETZUNG.md).

## Veröffentlichung

Ein Build veröffentlicht nichts automatisch. Standardmäßig gilt `/`; für ein Unterverzeichnis ist `DOCS_BASE` vor Build und Vorschau zu setzen. Menü, Suche, Bilder und Druck am konkreten Hosting prüfen. Änderungen über einen eigenen Branch und einen PR gegen `dev` bereitstellen; der Merge erfolgt durch den Maintainer.
