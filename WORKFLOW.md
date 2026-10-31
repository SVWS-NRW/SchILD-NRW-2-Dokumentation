# Verbindlicher Redaktions- und Veröffentlichungsworkflow

Dieser Ablauf gilt für die Mitarbeit an dieser Dokumentation. Das zugehörige offizielle Repository erreichen Sie über das GitHub-Symbol im Kopfmenü. Die technischen Arbeitsschritte stehen in [Mitarbeiten](/hilfe/mitarbeiten), die Schreibregeln unter [Artikel schreiben und bearbeiten](/hilfe/artikel-schreiben).

**Was nach `dev` gemergt wird, muss grundsätzlich veröffentlichungsfähig sein.** Unfertige Arbeiten bleiben auf einem eigenen Arbeitsbranch oder in einem PR-Entwurf. Ein Merge nach `dev` darf keine noch ausstehende fachliche Ergänzung oder Fehlerbehebung voraussetzen.

## Branches und Verantwortlichkeiten

| Branch | Bedeutung | Änderungen |
| --- | --- | --- |
| `master` | Veröffentlichter Stand | Über einen geprüften Veröffentlichungs-PR von `dev`; dringende Korrekturen nach dem unten beschriebenen Sonderablauf. |
| `dev` | Gemeinsamer, veröffentlichungsfähiger Vorbereitungsstand | Über geprüfte PRs aus Arbeitsbranches. |
| Arbeitsbranch | Eine abgegrenzte Aufgabe, beispielsweise `redaktion/zeugnisse` oder `korrektur/schuelerdaten` | Hier werden Artikel und technische Änderungen bearbeitet. |

Verantwortliche sind `Raffenberg` und David Klein (`kleind-svws-nrw`). Sie dürfen eigene PRs nach erfolgreichen Prüfungen ohne zusätzliche Freigabe übernehmen. Beiträge anderer Personen benötigen vor der Übernahme die Freigabe eines der beiden Verantwortlichen. Die Pflicht zu PRs, erfolgreichen Checks und veröffentlichungsfähigen Inhalten gilt für alle.

Personen mit Schreibrecht können Arbeitsbranches im offiziellen Repository anlegen. Andere Personen arbeiten in einem Fork und öffnen ihren PR gegen das offizielle `dev`. Der frühere Migrations-Fork dient nicht als Grundlage neuer Änderungen.

## Eine Aufgabe beginnen

1. Eine konkrete Aufgabe abgrenzen. Unabhängige fachliche und technische Änderungen in getrennten PRs bearbeiten.
2. Den aktuellen Stand von `dev` abrufen und davon einen neuen Arbeitsbranch anlegen. Nicht von einem alten Arbeitsbranch oder vom früheren Migrations-Fork beginnen.
3. Vor dem Branchwechsel vorhandene lokale Änderungen committen oder anderweitig sichern.
4. Auf dem Arbeitsbranch bearbeiten. Bestehende Artikeladressen, Sprungmarken, Quellenverweise und Bildzuordnungen erhalten.

Beispiel im lokalen Repository, wenn das offizielle Repository als `origin` eingerichtet ist:

```sh
git fetch origin
git switch -c redaktion/mein-thema origin/dev
```

Ein Fork verwendet für die offizielle Quelle häufig den Remote-Namen `upstream`; in diesem Fall den aktuellen `upstream/dev` als Grundlage verwenden.

## Bearbeiten und prüfen

Die lokale Vorschau mit `npm run docs:dev` starten und die geänderten Seiten gegenlesen. Vor dem Einreichen ausführen:

```sh
npm test
npm run docs:build
npm run docs:check
```

Bei Änderungen an Menü, Suche, Gestaltung oder Werkzeugen zusätzlich `npm run docs:check-browser` ausführen. Die Installation des Testbrowsers ist in der `README.md` des jeweiligen Repositorys beschrieben. In PowerShell kann `npm.cmd` statt `npm` verwendet werden.

Die npm-Befehle sind der gemeinsame Einstieg für Prüfskripte, kleine Tests und Browserprüfungen des jeweiligen Repositorys. Dateien werden nicht aus dem Skriptordner heraus gestartet.

## Pull Request gegen dev öffnen

1. Die Änderungen auf dem Arbeitsbranch committen und hochladen.
2. Einen PR mit **Ziel `dev`** öffnen. Bei unfertigen Arbeiten den PR als Entwurf kennzeichnen.
3. Im PR kurz Problem, Änderung, fachliche Grundlage und durchgeführte Prüfungen beschreiben. Bei sichtbaren Änderungen geeignete Ansichten ergänzen.
4. Die automatischen Prüfungen abwarten. Nach weiteren Commits zählt das Ergebnis für den neuesten Stand.

Bei jedem PR gegen `dev` oder `master` laufen unabhängig von den betroffenen Dateien:

| Prüfung | Jobname | Inhalt |
| --- | --- | --- |
| Dokumentation prüfen | `docs-check` | Kleine Tests, Website-Build sowie interne Links und Bilder. |
| Bedienung prüfen | `browser-check` | Browserprüfung unter anderem für Navigation, Suche, Tabellen, Darstellung und Druck. |

`branches: [dev, master]` in einem `pull_request`-Auslöser bezeichnet die **Zielbranches**. Die Prüfungen laufen auch bei neuen Commits in einem bereits geöffneten PR. Beide Workflows sind zusätzlich manuell startbar; diese Prüfläufe veröffentlichen nichts und ersetzen nicht die Checks des aktuellen PRs.

## Freigabe und Merge nach dev

Vor jedem Merge müssen folgende Bedingungen erfüllt sein:

- Der PR ist vollständig und veröffentlichungsfähig, kein Entwurf.
- `docs-check` und `browser-check` sind für den aktuellen PR-Stand erfolgreich abgeschlossen. Laufende oder fehlgeschlagene Checks werden nicht übergangen.
- Der Zielbranch ist aktuell berücksichtigt; Konflikte sind gelöst und danach erforderliche Prüfungen erneut erfolgreich.
- Offene Rückfragen und Änderungsanforderungen sind geklärt.
- Bei einem PR einer anderen Person als `Raffenberg` oder `kleind-svws-nrw` liegt die Freigabe eines der beiden Verantwortlichen vor. Bei nachträglichen inhaltlichen Änderungen muss diese erneut bestätigt werden.

Einer der Verantwortlichen übernimmt den PR. Eigene PRs der beiden Verantwortlichen benötigen keine zweite Freigabe. Beiträge anderer Personen werden in GitHub mit **Approve** freigegeben; die bloße Möglichkeit, den Merge-Knopf zu bedienen, ersetzt diese Freigabe nicht.

Für die Übernahme **Create a merge commit** verwenden, damit die Einzelcommits und der PR-Zusammenhang erhalten bleiben. Den erledigten Arbeitsbranch anschließend löschen. Die nächste Aufgabe beginnt wieder auf einem neuen Branch vom aktuellen `dev`.

## Gemeinsam und parallel arbeiten

Jede Aufgabe erhält einen eigenen Branch. Arbeiten mehrere Personen an derselben Seite oder Menüdatei, stimmen sie die Aufteilung vorher ab. Änderungen anderer Personen am gemeinsamen Arbeitsbranch werden nicht durch Force-Push überschrieben.

Wenn `dev` während der Arbeit weiterläuft, den neuen Stand in den eigenen Arbeitsbranch übernehmen und Konflikte dort lösen. Danach die betroffenen Seiten erneut ansehen und die Checks abwarten. `dev` und `master` bleiben bestehen und werden weder zurückgesetzt noch nach jeder Veröffentlichung gelöscht und neu angelegt.

## Einen Stand veröffentlichen

1. Der gesamte aktuelle `dev` muss für die Veröffentlichung geeignet sein. Unfertige Änderungen dürfen nicht darin liegen.
2. Einen Veröffentlichungs-PR mit **Quelle `dev` und Ziel `master`** öffnen. Die enthaltenen Änderungen kurz zusammenfassen.
3. Die Checks `docs-check` und `browser-check` für diesen Veröffentlichungs-PR sowie die Sichtprüfung des vorgesehenen Stands abwarten.
4. Einer der Verantwortlichen führt den PR mit **Create a merge commit** zusammen. Für diese wiederkehrende Verbindung der dauerhaften Branches keinen Squash- oder Rebase-Merge verwenden.
5. Der dadurch entstehende Push nach `master` startet den Veröffentlichungsworkflow automatisch. Auch dessen Build und Deployment müssen erfolgreich abgeschlossen sein; ein gemergter PR allein bestätigt noch keine erfolgreiche Veröffentlichung.
6. Nach dem Deployment Startseite, tiefe Artikellinks, Suche, Bilder und Mobilmenü auf der tatsächlichen Zieladresse stichprobenartig prüfen.

Die GitHub-Pages-Veröffentlichung und das Domain-Artefakt des jeweiligen Repositorys sind zu unterscheiden: Das Artefakt enthält den Build für die Domainwurzel des eigenen Nginx-Servers. Seine Übernahme auf diesen Server erfolgt über den dafür eingerichteten separaten Weg; der Pages-Workflow ändert weder DNS noch den Nginx-Server.

## Dringende Korrektur am veröffentlichten Stand

Eine Korrektur, die nicht auf die nächste gemeinsame Veröffentlichung warten kann, erhält einen Arbeitsbranch vom aktuellen `master`. Dafür einen PR gegen `master` öffnen, die gleichen Prüf- und Freigaberegeln einhalten und nach erfolgreicher Prüfung mergen.

Anschließend die Korrektur über einen PR **von `master` nach `dev`** zurückführen. Auch diesen PR prüfen, Konflikte gezielt lösen und normal mergen. Dadurch bleibt die Korrektur für die weitere Redaktion erhalten. Keine direkten Änderungen auf den dauerhaften Branches vornehmen.

## Manueller Lauf des Veröffentlichungsworkflows

Der Workflow **Dokumentation auf GitHub Pages veröffentlichen** (`.github/workflows/deploy.yml`) behält `workflow_dispatch`. Im regulären Ablauf ist dieser manuelle Start nicht erforderlich: Jeder vorgesehene Veröffentlichungs-PR erzeugt durch den Merge nach `master` bereits den automatischen Lauf.

| Auslöser | Ergebnis |
| --- | --- |
| Push nach `master`, normalerweise durch einen PR-Merge | Build, Link- und Bildprüfung, Artefakte und GitHub-Pages-Deployment. |
| Manueller Lauf mit ausgewähltem Branch `master` | Ebenfalls Build und Veröffentlichung des ausgewählten `master`-Stands. |
| Manueller Lauf auf `dev` oder einem Arbeitsbranch | Build und Artefakte, kein Pages-Deployment. |

Ein manueller Lauf auf `master` ist eine bewusste erneute Veröffentlichung, beispielsweise nach einer behobenen vorübergehenden Infrastrukturstörung. Vorher den ausgewählten Branch und den vorgesehenen Stand prüfen. Der manuelle Lauf dient nicht dazu, PRs, Freigaben oder fehlgeschlagene Checks zu umgehen. Läuft bereits eine Veröffentlichung, keine unnötigen weiteren Läufe starten.

Die Prüf-Workflows mit den Jobs `docs-check` und `browser-check` sind eigenständige Workflows; ihr manueller Start veröffentlicht auch auf `master` nichts.

## Empfohlene Schutzregeln auf GitHub

Die folgenden Einstellungen müssen durch eine Person mit Verwaltungsrechten in GitHub eingerichtet werden. Diese Datei und die Workflow-YAMLs aktivieren keine Repository-Schutzregeln. Vor dem Wechsel auf die neuen Jobnamen bestehende Pflichtchecks überprüfen und nach dem ersten erfolgreichen Lauf aktualisieren, damit nicht weiterhin auf die alten Namen `build` oder `browser` gewartet wird.

Für `dev` und `master` einen gemeinsamen Grundschutz als Branch-Ruleset vorsehen:

| Einstellung | Vorgabe für beide Branches |
| --- | --- |
| Require a pull request before merging | Aktiviert; im Grundschutz keine pauschale Pflichtfreigabe einer weiteren Person. |
| Require status checks to pass | `docs-check` und `browser-check` aus GitHub Actions verpflichtend. |
| Require branches to be up to date before merging | Aktiviert, damit zwischenzeitlich übernommene Änderungen berücksichtigt werden. |
| Require conversation resolution before merging | Aktiviert. |
| Block force pushes | Aktiviert. |
| Restrict deletions | Aktiviert. |
| Require linear history | Deaktiviert, damit normale Merge-Commits möglich bleiben. |
| Ausnahmen vom Grundschutz | Keine regulären Bypass-Rechte für das Redaktionsteam; Checks und PR-Pflicht gelten auch für die Verantwortlichen. |

Die normalen GitHub-Regeln beschränken PR-Quellbranches nicht automatisch auf `dev`. Deshalb ist bei Veröffentlichungs-PRs die Quelle zu prüfen; Arbeitsbranches direkt nach `master` sind nur für den beschriebenen dringenden Korrekturfall vorgesehen.

### Freigabeausnahme für die Verantwortlichen

Die verbindliche redaktionelle Regel lautet: **PRs von `Raffenberg` und `kleind-svws-nrw` benötigen keine zweite Freigabe; alle anderen benötigen die Freigabe eines der beiden Verantwortlichen.** Diese autorabhängige Ausnahme wird durch die beiden Prüf-Workflows nicht automatisch kontrolliert.

Als zusätzliche GitHub-Absicherung kann ein **separates Review-Ruleset** für `dev` und `master` eingerichtet werden:

1. Eine Organisationsteam-Gruppe mit ausschließlich den beiden Verantwortlichen anlegen oder eine passende bestehende Gruppe verwenden. Der Name ist frei wählbar; der Mitgliederkreis muss ausdrücklich kontrolliert werden.
2. In diesem zweiten Ruleset einen PR und eine Freigabe verlangen. Freigaben nach inhaltlichen Änderungen verwerfen lassen.
3. Nur diesem Team einen Bypass **For pull requests only** geben. Keine pauschale Ausnahme für alle Personen mit Schreibrecht.
4. Den Grundschutz mit PR-Pflicht, Checks und Schutz vor Force-Push und Löschen ohne diesen Bypass bestehen lassen.

**Grenze dieser Einstellung:** Der Review-Bypass richtet sich nach der Person, die den PR zusammenführt, nicht nach dessen Autor. Die beiden Verantwortlichen könnten damit technisch auch einen fremden PR ohne Review übernehmen. Nach diesem Workflow dürfen sie das nicht: Fremde PRs brauchen weiterhin die dokumentierte Freigabe. Falls diese Unterscheidung exakt nach PR-Autor automatisch erzwungen werden soll, ist zusätzlich eine eigene Freigabeprüfung als verpflichtender Check erforderlich; sie ist nicht Bestandteil der vorhandenen Prüf-Workflows.

Regeln und Teamzuordnungen werden vor der Aktivierung geprüft. Diese Dokumentation beschreibt die empfohlenen Einstellungen und behauptet nicht, dass sie bereits eingerichtet sind.

## Quellen zu den GitHub-Einstellungen

- [Auslöser und Zielbranchfilter](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)
- [Repository-Rulesets und Bypass nur für Pull Requests](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)
- [Verfügbare Regeln und Pflichtprüfungen](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)
- [Merge-Verfahren und langlebige Branches](https://docs.github.com/en/pull-requests/reference/pull-request-merges)
