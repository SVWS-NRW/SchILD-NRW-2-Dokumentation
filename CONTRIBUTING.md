# An der Dokumentation mitarbeiten

Sie können Fehler berichtigen und Anleitungen ergänzen, ohne etwas auf Ihrem Computer zu installieren. Öffnen Sie den gewünschten Artikel und wählen Sie neben dem Drucksymbol den **Stift** für den GitHub-Dateieditor oder **VS** für VS Code im Browser. Beide öffnen die Quelldatei auf `dev`. Melden Sie sich mit Ihrem GitHub-Konto an.

## Den passenden Bearbeitungsweg wählen

- [Mit dem GitHub-Editor bearbeiten](/hilfe/github-editor): für eine einzelne Datei und kleine Textkorrekturen.
- [Mit VS Code im Browser bearbeiten](/hilfe/vscode-editor): für längere Änderungen und die Arbeit an mehreren Dateien.
- [Artikel schreiben](/hilfe/artikel-schreiben): verständliche Texte aufbauen und fachliche Inhalte erhalten.
- [Markdown und Gestaltung](/hilfe/markdown-und-gestaltung): Überschriften, Listen, Links und Bilder einfügen.

Ein **Branch** ist ein eigener Arbeitsstand. Speichern Sie Ihre Änderungen in einem neuen Branch mit Ihrem Autorennamen, etwa `musterfrau/filter-erklaeren`. Ein **Commit** hält die Änderung mit einer kurzen Erläuterung fest; **Push** überträgt sie zu GitHub. Mit einem **Pull Request** reichen Sie diesen Arbeitsstand zur Prüfung gegen `dev` ein. Eine Administratorin oder ein Administrator prüft den Vorschlag und übernimmt ihn nach Freigabe. Schreiben Sie deshalb nicht direkt in `dev` oder `master`.

Unter [Alle Artikel A–Z](/hilfe/alle-artikel) finden Sie auch Seiten, deren genaue Menüposition Sie nicht kennen. Öffnen Sie zuerst den Artikel und verwenden Sie dann dessen Stift- oder VS-Schaltfläche. Die alphabetische Liste wird automatisch aus den Artikeln erstellt.

Die folgenden Abschnitte richten sich an Personen, die lokal an Texten, Menüführung oder Gestaltung arbeiten. Bearbeitet werden Markdown-Dateien direkt; ein Wiki-Konverter ist nicht erforderlich.

## Änderungen prüfen

1. Eigenen Branch vom aktuellen `dev` anlegen.
2. `npm ci` bei geändertem Paketbestand ausführen.
3. `npm test`, `npm run docs:build` und `npm run docs:check` ausführen.
4. Bei Darstellungs- oder Navigationsänderungen zusätzlich `npm run docs:check-browser` ausführen. Ergebnisse liegen ignoriert in `test-results/`.
5. PR gegen `dev` mit Problem, Änderung und Prüfung anlegen. Die Übernahme richtet sich nach [dem Repository-Workflow](https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation/blob/dev/WORKFLOW.md); auf `dev` und `master` wird ausschließlich über geprüfte PRs gearbeitet.

`QA_BROWSER` kann auf einen vorhandenen Chromium-Browser zeigen; `PLAYWRIGHT_MODULE` auf eine vorhandene Playwright-Installation. Die CI verwendet Chrome des GitHub-Runners. `npm audit` bei Paketänderungen auswerten und kompatible Aktualisierungen prüfen.

## Stabile Inhalte

Artikeladressen und verwendete Abschnittsziele erhalten. Bei Zusammenführungen Ersatzadressen in `.vitepress/redirects.json` pflegen. Quellen am Artikel sichtbar verlinken. Die einzelnen Archivseiten sind entfernt. Das vollständige Quelltext-ZIP und sämtliche ursprünglichen Wiki-Dateien bleiben erhalten, auch wenn sie derzeit nicht in einem Artikel verlinkt sind.

Neue Bilder thematisch unter `public/bilder/` ablegen und in `.vitepress/image-catalog.json` eintragen. Keine Arbeitskopien oder unbestellten Programmpakete veröffentlichen. Bilder ohne aktuelle Verwendung können zum vollständigen Wiki-Archiv gehören und sind deshalb nicht automatisch entbehrlich.

SchILD2 greift direkt auf seine Datenbank zu. ENM, Datenbankfunktionen und ältere Verfahren nicht allein deshalb entfernen, weil SchILD3 sie anders organisiert. Fachliche Änderungen an der SchILD2-Quelle und der betreffenden Schulform prüfen. Laufzeittests nur behaupten, wenn tatsächlich mit passenden Beispieldaten geprüft wurde.

## Druck und Betrieb

Druckansichten entstehen aus Originalartikeln und Menüdaten. Ein Menüaufruf öffnet nur die Ansicht; gedruckt wird über den Button. Druckgestaltung und Zustandswiederherstellung bleiben zentral im Theme. Keine getrennt gepflegten Artikelkopien erzeugen.

Für Unterpfade `DOCS_BASE` setzen und eigene Vue-Komponenten mit `withBase()` verlinken. Kein `localhost` in veröffentlichte Artikel oder Menüdaten schreiben. Normale Pflege benötigt keine Python- oder Pandoc-Installation.

## Offizielles Repository

Für neue Aufgaben `origin/dev` aus `SVWS-NRW/SchILD-NRW-2-Dokumentation` verwenden. Der frühere Migrationsstand unter `Raffenberg/SchILD2_Doku` wird nicht weiter bearbeitet. Node.js 22 entsprechend `.nvmrc` und `npm ci` verwenden. Veröffentlicht wird über einen geprüften PR von `dev` nach `master`; Details stehen im [Repository-Workflow](https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation/blob/dev/WORKFLOW.md).
