# An der Dokumentation mitarbeiten

Sie können Fehler berichtigen und Anleitungen ergänzen, ohne etwas auf Ihrem Computer zu installieren. Öffnen Sie den gewünschten Artikel und wählen Sie neben dem Drucksymbol den **Stift** für den GitHub-Dateieditor oder **VS** für VS Code im Browser. Beide öffnen die Quelldatei auf `dev`. Melden Sie sich mit Ihrem GitHub-Konto an.

## Den passenden Bearbeitungsweg wählen

- [Mit dem GitHub-Editor bearbeiten](/hilfe/github-editor): für eine einzelne Datei und kleine Textkorrekturen.
- [Mit VS Code im Browser bearbeiten](/hilfe/vscode-editor): für längere Änderungen und die Arbeit an mehreren Dateien.
- [Redaktionsworkflow](/hilfe/redaktionsworkflow): verbindliche Regeln für Arbeitsbranches, Prüfung, Freigabe und Veröffentlichung.
- [Artikel schreiben](/hilfe/artikel-schreiben): verständliche Texte aufbauen und fachliche Inhalte erhalten.
- [Markdown und Gestaltung](/hilfe/markdown-und-gestaltung): Überschriften, Listen, Links und Bilder einfügen.

Ein **Branch** ist ein eigener Arbeitsstand. Speichern Sie Ihre Änderungen in einem neuen Branch mit Ihrem Autorennamen, etwa `musterfrau/filter-erklaeren`. Ein **Commit** hält die Änderung mit einer kurzen Erläuterung fest; **Push** überträgt sie zu GitHub. Mit einem **Pull Request** reichen Sie diesen Arbeitsstand zur Prüfung gegen `dev` ein. Eine Administratorin oder ein Administrator prüft den Vorschlag und übernimmt ihn nach Freigabe. Schreiben Sie deshalb nicht direkt in `dev` oder `master`.

Unter [Alle Artikel A–Z](/hilfe/alle-artikel) finden Sie auch Seiten, deren genaue Menüposition Sie nicht kennen. Öffnen Sie zuerst den Artikel und verwenden Sie dann dessen Stift- oder VS-Schaltfläche. Die alphabetische Liste wird automatisch aus den Artikeln erstellt.

Die folgenden Abschnitte richten sich an Personen, die lokal an Texten, Menüführung oder Gestaltung arbeiten. Bearbeitet werden Markdown-Dateien direkt; ein Wiki-Konverter ist nicht erforderlich.

## Lokal beginnen

Benötigt werden Git und Node.js 22. Öffnen Sie über das GitHub-Symbol im Kopfmenü das Repository dieser Dokumentation. Kopieren Sie dort unter **Code** die HTTPS-Adresse und klonen Sie den Branch `dev` auf Ihren Computer. Öffnen Sie anschließend den Ordner des lokalen Klons im Terminal.

Legen Sie vom aktuellen `dev` einen Arbeitsbranch an und starten Sie die Vorschau:

```sh
git fetch origin
git switch -c redaktion/mein-thema origin/dev
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
- Die manuelle [Vergleichstabelle zwischen Dokumentation und Wiki](/hilfe/artikel-wiki-zuordnung) bei neuen, entfernten oder umbenannten Artikeln nachführen und ihren Aktualitätsstand anpassen.
- Der Artikelindex und die lokale Suche erfassen veröffentlichte Markdown-Seiten automatisch. Eine neue Seite muss zusätzlich im passenden Themenmenü oder in einer Übersicht erreichbar sein.
- Vollständige Quelltextarchive und ursprüngliche Wiki-Dateien erhalten. Ein fehlender aktueller Artikelverweis ist kein Grund, eine Datei zu entfernen.
- Fachliche Änderungen anhand der Quelle und der betreffenden Schulform prüfen. Die Architektur und ältere Verfahren des dokumentierten Programms berücksichtigen; Unterschiede zu anderen Programmen sind kein Löschgrund. Laufzeittests nur behaupten, wenn sie tatsächlich mit passenden Beispieldaten durchgeführt wurden.

## Änderung prüfen

```sh
npm test
npm run docs:build
npm run docs:check
```

Den Artikel außerdem in der lokalen Vorschau gegenlesen und Bilder, Verweise und Darstellung ansehen. Bei Änderungen an Menü, Suche oder Gestaltung zusätzlich `npm run docs:check-browser` ausführen. Die benötigte Playwright-Installation ist in der `README.md` des jeweiligen Repositorys beschrieben. Die npm-Befehle starten die zugehörigen Prüfskripte; auf GitHub laufen die Dokumentations- und Browserprüfungen bei jedem PR gegen `dev` und `master`. Ergebnisse liegen lokal unter `test-results/`.

`QA_BROWSER` kann auf einen vorhandenen Chromium-Browser zeigen, `PLAYWRIGHT_MODULE` auf eine vorhandene Playwright-Installation. Bei Paketänderungen `npm ci` ausführen, `npm audit` auswerten und kompatible Aktualisierungen prüfen.

## Änderung einreichen

1. Die geänderten und neu hinzugefügten Dateien auf dem eigenen Branch committen.
2. Den Branch nach GitHub pushen und einen Pull Request gegen `dev` öffnen.
3. Im Pull Request kurz erklären, was geändert wurde, worauf fachliche Änderungen beruhen und was geprüft wurde.
4. Die automatischen Prüfungen abwarten und gegebenenfalls Fehler beheben.
5. Die [Freigabe- und Merge-Regeln](/hilfe/redaktionsworkflow#freigabe-und-merge-nach-dev) einhalten. Nur veröffentlichungsfähige Änderungen nach `dev` übernehmen.

`dev` und `master` werden nicht direkt beschrieben. Den Merge übernimmt der Verantwortliche. Fehler oder fachliche Ergänzungsvorschläge können auch über **Issues** im Repository dieser Dokumentation gemeldet werden. Sie erreichen es über das GitHub-Symbol im Kopfmenü.

## Druck und Betrieb

Druckansichten entstehen aus Originalartikeln und Menüdaten. Ein Menüaufruf öffnet nur die Ansicht; gedruckt wird über die Druckschaltfläche. Druckgestaltung und Zustandswiederherstellung bleiben zentral im Theme. Keine getrennt gepflegten Artikelkopien erzeugen.

Für Unterpfade `DOCS_BASE` setzen und eigene Vue-Komponenten mit `withBase()` verlinken. Kein `localhost` in veröffentlichte Artikel oder Menüdaten schreiben. Normale Pflege benötigt keine Python- oder Pandoc-Installation.

Neue Aufgaben beginnen im offiziellen Repository vom aktuellen `origin/dev`. Frühere Migrationsrepositories dienen nicht als Grundlage neuer Änderungen. Veröffentlicht wird über einen geprüften PR von `dev` nach `master`; die vollständigen Regeln stehen im [Redaktionsworkflow](/hilfe/redaktionsworkflow).
