# An der Dokumentation mitarbeiten

Vielen Dank für Hinweise und Ergänzungen. Sie können Artikel direkt im Browser bearbeiten oder einen Fehler über **Issues** im Repository melden.

## Artikel bearbeiten

1. Öffnen Sie den Artikel in der Dokumentation. Neben dem Drucksymbol öffnet der **Stift** den GitHub-Dateieditor. **VS** öffnet VS Code im Browser und eignet sich auch für Änderungen an mehreren Dateien. Melden Sie sich bei GitHub an.
2. Legen Sie für Ihre Änderung einen eigenen Arbeitsbranch auf Basis von `dev` an. Verwenden Sie einen Namen mit Ihrem GitHub-Namen, etwa `musterfrau/filter-erklaeren`. Ohne Schreibrechte arbeiten Sie in einer eigenen Kopie des Repositorys auf GitHub, einem Fork.
3. Speichern Sie die Änderung als Commit auf Ihrem Arbeitsbranch und laden Sie ihn zu GitHub hoch. Öffnen Sie einen Pull Request gegen `dev` des offiziellen Repositorys. Beschreiben Sie kurz, was Sie geändert und geprüft haben.
4. Warten Sie die automatischen Prüfungen und die Rückmeldung der Redaktion ab. Die Übernahme erfolgt nach der Freigabe.

Die bebilderten Anleitungen zeigen die einzelnen Schritte im [GitHub-Dateieditor](https://svws-nrw.github.io/SchILD-NRW-2-Dokumentation/hilfe/github-editor.html) und in [VS Code im Browser](https://svws-nrw.github.io/SchILD-NRW-2-Dokumentation/hilfe/vscode-editor.html). Die Regeln zur Freigabe stehen im [Redaktionsworkflow](https://svws-nrw.github.io/SchILD-NRW-2-Dokumentation/hilfe/redaktionsworkflow.html).

## Artikel schreiben und prüfen

- Benennen Sie die Aufgabe, nennen Sie die Voraussetzungen und beschreiben Sie die Schritte in der Reihenfolge, in der sie ausgeführt werden. Verwenden Sie die Bezeichnungen aus der Programmoberfläche.
- Prüfen Sie fachliche Änderungen anhand der Quellen und für die betroffene Schulform. Erhalten Sie bestehende Artikeladressen, Sprungmarken, Quellen und Originaldateien. Verwenden Sie für Bildschirmfotos Beispieldaten.
- Prüfen Sie Links, Bilder und Darstellung in der Vorschau. Ordnen Sie neue Artikel dem passenden Seitenmenü zu.

Die Hilfe enthält Beispiele zum [Schreiben von Artikeln](https://svws-nrw.github.io/SchILD-NRW-2-Dokumentation/hilfe/artikel-schreiben.html) und zur [Gestaltung mit Markdown](https://svws-nrw.github.io/SchILD-NRW-2-Dokumentation/hilfe/markdown-und-gestaltung.html).

## Lokal arbeiten

Mit Git und Node.js 22 können Sie die Dokumentation aus einem lokalen Klon bearbeiten. Legen Sie Ihren Arbeitsbranch vom aktuellen `dev` an und starten Sie die Vorschau:

```sh
npm ci
npm run docs:dev
```

Öffnen Sie die im Terminal angezeigte Adresse. Vor dem Einreichen können Sie mit `npm test`, `npm run docs:build` und `npm run docs:check` lokal prüfen.
