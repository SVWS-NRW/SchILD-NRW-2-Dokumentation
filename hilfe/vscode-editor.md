# Mit VS Code im Browser bearbeiten

Mit der **VS**-Schaltfläche öffnen Sie die Markdown-Datei eines Artikels direkt in VS Code im Browser. Dort können Sie Texte bearbeiten und Ihren Vorschlag zur Prüfung einreichen. Sie benötigen ein GitHub-Konto; eine Installation ist nicht erforderlich. Die Anleitung zeigt den Ablauf mit Schreibzugriff auf das Dokumentationsrepository. Ohne diesen Zugriff bietet GitHub die Mitarbeit über eine eigene Repository-Kopie, einen sogenannten Fork, an.

Ein eigener **Branch** hält Ihren Vorschlag vom gemeinsamen Arbeitsstand `dev` getrennt. **Commit und Push** speichern ihn auf GitHub. Erst der anschließende **Pull Request** reicht ihn zur Übernahme ein. Die Begriffe und weitere Hilfen finden Sie unter [An der Dokumentation mitarbeiten](/hilfe/mitarbeiten).

Die Bildschirmbeispiele zeigen die SchILD-NRW-2-Dokumentation. Der Ablauf gilt für beide Dokumentationen; die Schaltflächen öffnen jeweils das zugehörige Repository.

## Artikel öffnen und bearbeiten

### 1. VS Code öffnen

Öffnen Sie den gewünschten Artikel in dieser Dokumentation. Klicken Sie neben dem Drucksymbol auf **VS**. Ein neuer Tab öffnet die zugehörige Datei aus dem Branch `dev`. Melden Sie sich bei GitHub an und erlauben Sie den Zugriff des Editors, falls Sie dazu aufgefordert werden.

![Die VS-Schaltfläche neben dem Drucksymbol öffnet VS Code im Browser.](/bilder/hilfe/bearbeiten/vscode-artikel-oeffnen.png)

### 2. Den Artikel bearbeiten

Ändern Sie den Text im geöffneten Editor. Die Datei enthält Markdown: Überschriften beginnen beispielsweise mit `#`. Lassen Sie bestehende Bildpfade und Linkziele erhalten, wenn Sie nur den Text verbessern möchten. Beispiele finden Sie unter [Markdown und Gestaltung](/hilfe/markdown-und-gestaltung).

![Die Markdown-Datei des Artikels ist in VS Code zur Bearbeitung geöffnet.](/bilder/hilfe/bearbeiten/vscode-text-bearbeiten.png)

Der Editor hält noch nicht übertragene Änderungen zunächst im Browser vor. Das ist noch kein Commit auf GitHub. Legen Sie vor **Commit und Push** den eigenen Branch wie folgt an.

## Einen eigenen Arbeitsbranch anlegen

### 3. Die Branch-Auswahl öffnen

Klicken Sie unten links in der Statusleiste auf **dev**. Prüfen Sie damit auch, dass Sie vom vorgesehenen Arbeitsstand ausgehen.

![Die Branch-Schaltfläche dev befindet sich unten links in der Statusleiste.](/bilder/hilfe/bearbeiten/vscode-branch-auswahl.png)

### 4. Einen neuen Branch erstellen

Wählen Sie **Neuen Branch erstellen…**.

![In der Branch-Auswahl ist Neuen Branch erstellen markiert.](/bilder/hilfe/bearbeiten/vscode-neuen-branch-erstellen.png)

### 5. Einen Namen eingeben

Geben Sie einen Namen ein, der Ihren Autorennamen und die Aufgabe enthält, zum Beispiel `musterfrau/filter-erklaeren`. Bestätigen Sie mit der Eingabetaste. Wählen Sie für einen neuen Vorschlag einen neuen Namen.

![Das Eingabefeld für den Namen des neuen Arbeitsbranches.](/bilder/hilfe/bearbeiten/vscode-branch-benennen.png)

### 6. Zum neuen Branch wechseln

Klicken Sie in der Rückfrage auf **Zum Branch wechseln**. Die noch nicht als Commit gespeicherten Änderungen werden in den neuen Branch mitgenommen. Kontrollieren Sie anschließend unten links, dass dort Ihr Branchname statt `dev` steht.

![Die Rückfrage bestätigt die Übernahme der Änderungen und bietet Zum Branch wechseln an.](/bilder/hilfe/bearbeiten/vscode-zum-branch-wechseln.png)

## Änderungen speichern und übertragen

### 7. Die Quellcodeverwaltung öffnen

Klicken Sie links in der senkrechten Symbolleiste auf das Symbol **Quellcodeverwaltung**. Dort sehen Sie die geänderten Dateien. Öffnen Sie diese bei Bedarf, um Ihre Änderungen vor dem Speichern zu kontrollieren.

![Das Symbol Quellcodeverwaltung in der linken Leiste von VS Code.](/bilder/hilfe/bearbeiten/vscode-quellcodeverwaltung-oeffnen.png)

### 8. Die Änderung erläutern

Schreiben Sie in das Nachrichtenfeld kurz, was Sie geändert haben, etwa „Auswahl mit Filter I verständlicher erklären“. Kontrollieren Sie, dass die Dateiliste nur die beabsichtigten Änderungen enthält. Falls der Editor eine Bereitstellung verlangt, nehmen Sie die betreffenden Dateien über das Pluszeichen in den Commit auf.

![In der Quellcodeverwaltung steht eine kurze Erläuterung über der Liste geänderter Dateien.](/bilder/hilfe/bearbeiten/vscode-commit-erlaeutern.png)

### 9. Commit und Push ausführen

Prüfen Sie nochmals den eigenen Branchnamen und klicken Sie auf **Commit und Push**. Damit speichern Sie den beschriebenen Änderungsstand und übertragen ihn zu GitHub. Warten Sie auf den Abschluss. Ihr Vorschlag befindet sich nun in Ihrem Arbeitsbranch; er ist noch nicht in `dev` übernommen.

![Die Schaltfläche Commit und Push überträgt den Änderungsstand zu GitHub.](/bilder/hilfe/bearbeiten/vscode-commit-und-push.png)

## Einen Pull Request gegen dev einreichen

### 10. Das GitHub-Menü öffnen

Klicken Sie unten links auf die blaue Schaltfläche **GitHub**. Ihr Hinweistext lautet **Bearbeitung auf „GitHub“**.

![Die blaue GitHub-Schaltfläche in der Statusleiste öffnet die Repository-Optionen.](/bilder/hilfe/bearbeiten/vscode-github-menue-oeffnen.png)

### 11. Zum Repository wechseln

Wählen Sie **Zu Repository wechseln**, um die GitHub-Seite zu öffnen.

![Das Menü enthält die Auswahl Zu Repository wechseln.](/bilder/hilfe/bearbeiten/vscode-zum-repository-wechseln.png)

### 12. Den Vergleich starten

Klicken Sie beim Hinweis auf den gerade übertragenen Branch auf **Compare & pull request**. Fehlt dieser Hinweis, öffnen Sie im Repository **Pull requests → New pull request** und wählen Ihren Arbeitsbranch als Vergleichsbranch aus.

![GitHub zeigt für den gepushten Branch Compare und pull request an.](/bilder/hilfe/bearbeiten/vscode-vergleich-starten.png)

### 13. dev als Basis auswählen

Kontrollieren Sie die Auswahl oberhalb des Vergleichs: **base: dev** ist das Ziel, **compare: Ihr Arbeitsbranch** ist Ihr Vorschlag. Falls GitHub als Basis `master` vorschlägt, öffnen Sie die Basis-Auswahl und wählen **dev**. Der Screenshot zeigt genau diesen notwendigen Wechsel.

![In der Basis-Auswahl wird dev anstelle von master gewählt.](/bilder/hilfe/bearbeiten/vscode-basis-dev-waehlen.png)

### 14. Den Pull Request einreichen

Geben Sie einen aussagekräftigen Titel und eine kurze Beschreibung ein: Was wurde geändert und warum? Kontrollieren Sie den angezeigten Dateivergleich sowie nochmals **base: dev** und Ihren Branch bei **compare**. Klicken Sie auf **Create pull request**.

![Der fertige Änderungsvorschlag richtet sich gegen dev und wird mit Create pull request eingereicht.](/bilder/hilfe/bearbeiten/vscode-pull-request-einreichen.png)

### 15. Die Prüfung abwarten

Eine Administratorin oder ein Administrator prüft den Pull Request und übernimmt die freigegebenen Änderungen. Beantworten Sie Rückfragen auf der Pull-Request-Seite. Weitere Korrekturen können Sie im selben Arbeitsbranch speichern und übertragen; sie ergänzen den bestehenden Vorschlag. Die spätere Veröffentlichung erfolgt durch die Verantwortlichen.

## Weiterführende Hilfe

- [Mit dem GitHub-Editor bearbeiten](/hilfe/github-editor) erklärt den kürzeren Weg für einzelne Dateien.
- [Artikel schreiben](/hilfe/artikel-schreiben) hilft beim Aufbau verständlicher Anleitungen.
- Die [GitHub-Anleitung zu VS Code im Browser](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) erläutert Branches und Quellcodeverwaltung.
