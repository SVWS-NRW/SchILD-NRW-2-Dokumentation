# Technische Mitarbeit

Für Artikel gelten [Artikel schreiben](hilfe/artikel-schreiben.md) und [Markdown und Gestaltung](hilfe/markdown-und-gestaltung.md). Bearbeiten Sie Markdown direkt; es gibt keinen vorgeschalteten Wiki-Konverter und keine festgeschriebenen Textprüfsummen.

## Änderungen prüfen

1. Eigenen Branch vom aktuellen `dev` anlegen.
2. `npm ci` bei geändertem Paketbestand ausführen.
3. `npm test`, `npm run docs:build` und `npm run docs:check` ausführen.
4. Bei Darstellungs- oder Navigationsänderungen zusätzlich `npm run docs:check-browser` ausführen. Ergebnisse liegen ignoriert in `test-results/`.
5. PR gegen `dev` mit Problem, Änderung und Prüfung anlegen. Nicht selbst zusammenführen.

`QA_BROWSER` kann auf einen vorhandenen Chromium-Browser zeigen; `PLAYWRIGHT_MODULE` auf eine vorhandene Playwright-Installation. Die CI verwendet Chrome des GitHub-Runners. `npm audit` bei Paketänderungen auswerten und kompatible Aktualisierungen prüfen.

## Stabile Inhalte

Artikeladressen und verwendete Abschnittsziele erhalten. Bei Zusammenführungen Ersatzadressen in `.vitepress/redirects.json` pflegen. Quellen am Artikel sichtbar verlinken. Die Originale unter `public/dateien/quellen/` und die ursprünglichen Wiki-Dateien bleiben als Archiv erhalten.

Neue Bilder thematisch unter `public/bilder/` ablegen und in `.vitepress/image-catalog.json` eintragen. Keine Arbeitskopien oder unbestellten Programmpakete veröffentlichen. Bilder ohne aktuelle Verwendung können zum vollständigen Wiki-Archiv gehören und sind deshalb nicht automatisch entbehrlich.

SchILD2 greift direkt auf seine Datenbank zu. ENM, Datenbankfunktionen und ältere Verfahren nicht allein deshalb entfernen, weil SchILD3 sie anders organisiert. Fachliche Änderungen an der SchILD2-Quelle und der betreffenden Schulform prüfen. Laufzeittests nur behaupten, wenn tatsächlich mit passenden Beispieldaten geprüft wurde.

## Druck und Betrieb

Druckansichten entstehen aus Originalartikeln und Menüdaten. Ein Menüaufruf öffnet nur die Ansicht; gedruckt wird über den Button. Druckgestaltung und Zustandswiederherstellung bleiben zentral im Theme. Keine getrennt gepflegten Artikelkopien erzeugen.

Für Unterpfade `DOCS_BASE` setzen und eigene Vue-Komponenten mit `withBase()` verlinken. Kein `localhost` in veröffentlichte Artikel oder Menüdaten schreiben. Normale Pflege benötigt keine Python- oder Pandoc-Installation.
