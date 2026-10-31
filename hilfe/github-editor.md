# Mit dem GitHub-Editor bearbeiten

Der **Stift** neben dem Drucksymbol öffnet den GitHub-Dateieditor für den angezeigten Artikel. Dieser Weg eignet sich für kleine Textänderungen an einer Datei. Sie benötigen ein GitHub-Konto und müssen kein Programm installieren. Die Bilder zeigen den Ablauf mit Schreibzugriff auf das Dokumentationsrepository. Ohne diesen Zugriff kann GitHub stattdessen zunächst einen Fork, also eine eigene Repository-Kopie, anbieten.

Speichern Sie Ihren Vorschlag in einem eigenen **Branch** und reichen Sie ihn als **Pull Request gegen `dev`** ein. Dadurch können die Verantwortlichen die Änderung vor der Übernahme prüfen. Weitere Erläuterungen stehen unter [An der Dokumentation mitarbeiten](/hilfe/mitarbeiten).

Die Bildschirmbeispiele zeigen die SchILD-NRW-2-Dokumentation. Der Ablauf gilt für beide Dokumentationen; die Schaltflächen öffnen jeweils das zugehörige Repository.

## Artikel öffnen und bearbeiten

### 1. Den GitHub-Editor öffnen

Öffnen Sie den gewünschten Artikel in dieser Dokumentation und klicken Sie auf den **Stift** neben dem Drucksymbol. Ein neuer Tab öffnet die zugehörige Markdown-Datei im Branch `dev`. Melden Sie sich bei GitHub an, falls Sie dazu aufgefordert werden.

![Die Stift-Schaltfläche öffnet den GitHub-Dateieditor für den Artikel.](/bilder/hilfe/bearbeiten/github-artikel-oeffnen.png)

### 2. Den Text bearbeiten

Korrigieren oder ergänzen Sie den Text. Unter **Preview** können Sie die Markdown-Darstellung kontrollieren. Erhalten Sie bestehende Bildpfade und Linkziele, wenn Sie nur Text ändern möchten. Die Seite [Markdown und Gestaltung](/hilfe/markdown-und-gestaltung) erläutert die Schreibweise von Überschriften, Links und Bildern.

![Die Datei des Artikels ist im GitHub-Editor geöffnet.](/bilder/hilfe/bearbeiten/github-text-bearbeiten.png)

## Einen Änderungsvorschlag speichern

### 3. Commit changes öffnen

Klicken Sie auf **Commit changes…**. Damit öffnen Sie den Dialog für die Erläuterung und das Speicherziel; der Vorschlag ist damit noch nicht eingereicht.

![Die grüne Schaltfläche Commit changes öffnet den Speicherdialog.](/bilder/hilfe/bearbeiten/github-commit-dialog-oeffnen.png)

### 4. Die Änderung beschreiben

Tragen Sie unter **Commit message** eine kurze Zusammenfassung ein, zum Beispiel „Hinweise zur Schülerauswahl ergänzen“. Ergänzen Sie unter **Extended description** die Gründe und gegebenenfalls offene Fragen.

![Der Speicherdialog enthält Commit message und Extended description.](/bilder/hilfe/bearbeiten/github-aenderung-beschreiben.png)

### 5. Einen eigenen Branch wählen und benennen

Aktivieren Sie **Create a new branch for this commit and start a pull request**. Tragen Sie einen neuen Branchnamen mit Ihrem Autorennamen und der Aufgabe ein, zum Beispiel `musterfrau/schuelerauswahl`. Lassen Sie **Commit directly to the dev branch** abgewählt. Klicken Sie auf **Propose changes**.

![Die Auswahl für einen neuen Branch ist aktiviert und der Branchname eingetragen.](/bilder/hilfe/bearbeiten/github-neuen-branch-vorschlagen.png)

## Den Pull Request gegen dev einreichen

### 6. Ziel und Änderungen kontrollieren

Auf **Open a pull request** muss **base: dev** als Ziel stehen. Bei **compare** muss Ihr gerade angelegter Branch ausgewählt sein. Ändern Sie die Basis auf `dev`, falls GitHub `master` vorschlägt. Kontrollieren Sie Titel, Beschreibung und den Dateivergleich weiter unten auf der Seite.

### 7. Den Pull Request absenden

Klicken Sie auf **Create pull request**. Damit reichen Sie die Änderung zur Prüfung ein.

![Der Pull Request vergleicht den eigenen Branch mit dev und wird mit Create pull request eingereicht.](/bilder/hilfe/bearbeiten/github-pull-request-einreichen.png)

Eine Administratorin oder ein Administrator prüft den Vorschlag und übernimmt ihn nach Freigabe. Beantworten Sie mögliche Rückfragen auf der Pull-Request-Seite. Mit dem Absenden haben Sie die Prüfung angestoßen; die Veröffentlichung folgt durch die Verantwortlichen.

## Weiterführende Hilfe

- [Mit VS Code im Browser bearbeiten](/hilfe/vscode-editor) eignet sich für umfangreichere Änderungen und mehrere Dateien.
- [Artikel schreiben](/hilfe/artikel-schreiben) beschreibt den Aufbau verständlicher Anleitungen.
- Die [GitHub-Anleitung zum Bearbeiten von Dateien](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) erläutert den Dateieditor und das Einreichen von Änderungen.
