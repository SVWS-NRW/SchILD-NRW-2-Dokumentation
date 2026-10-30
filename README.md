# SchILD-NRW 2 – Dokumentation

VitePress-Dokumentation mit Arbeitsanleitungen, Programmreferenz, Reporting und Tools. SchILD2 greift direkt auf seine Datenbank zu und benötigt keinen SVWS-Server. Die Dokumentation ist nicht an eine bestimmte Programmversion gebunden.

Offizielles Repository: [SVWS-NRW/SchILD-NRW-2-Dokumentation](https://github.com/SVWS-NRW/SchILD-NRW-2-Dokumentation). Zieladresse: [schild2.svws-nrw.de](https://schild2.svws-nrw.de/). Die Veröffentlichung steht noch aus.

## Lokal arbeiten

Node.js 22 entsprechend `.nvmrc` verwenden:

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

Der statische Webauftritt liegt in `.vitepress/dist/`. Bei umfangreichen Druckansichten kann beim Build mehr Node-Arbeitsspeicher nötig sein. Die GitHub-Prüfungen stellen 6 GiB bereit. Bei Bedarf lokal `NODE_OPTIONS=--max-old-space-size=6144` setzen (PowerShell: `$env:NODE_OPTIONS='--max-old-space-size=6144'`).

Die begrenzte Browserprüfung läuft mit `npm run docs:check-browser`; Playwright wird durch `npm ci` in der festgelegten Version installiert. Einmalig `npx playwright install chromium` ausführen. Sie prüft repräsentative Ansichten und Bedienwege. Normale Artikelpflege benötigt weder Python noch Pandoc.

## Aufbau und Pflege

Das Kopfmenü hat fünf Zugänge: **Arbeiten mit SchILD2 · Programmreferenz · Reporting · Tools · Hilfe**. Jedes Tool hat ein eigenes Themenmenü mit Übersicht und Druckvorschau.

- Artikel direkt in ihren Markdown-Dateien bearbeiten. Sichtbare Quellenlinks, fachliche Einzelheiten, Beispiele und benötigte Sprungziele erhalten.
- `.vitepress/navigation.json` enthält Themenmenüs und Hauptnavigation; `.vitepress/program-reference.json` die SchILD2-Programmreferenz.
- Ein Artikel kann aus mehreren Rubriken erreichbar sein. Seitenmenüs erhalten den gewählten Lesekontext über `rubrik`; die Programmreferenz verwendet `referenz`, das A–Z-Verzeichnis `artikel=az`. Die Artikelpfade bleiben unverändert. `.vitepress/section-navigation.mjs` hält Rubrik, Themenzweig und Weiterblättern zusammen; die Referenz darf keine normalen Artikeladressen im Seitenmenü überschreiben.
- Bilder liegen thematisch unter `public/bilder/`; der Katalog unter `/bilder/` erleichtert Wiederverwendung. Seine Daten stehen in `.vitepress/image-catalog.json`.
- `.vitepress/redirects.json` enthält Ersatzadressen für entfernte Leerartikel.
- `.vitepress/pdf-sources.json` ordnet ausgewertete PDF-Quellen ihren Artikeln zu. Zusätzliche Programmpakete oder Handbuchsammlungen werden nicht vorgehalten.
- Autorenregeln und kopierbare Beispiele stehen unter Hilfe. Technische Mitarbeit beschreibt [CONTRIBUTING.md](CONTRIBUTING.md).

## Quellen und Inhaltserhalt

Die einzelnen Archivseiten und separaten Rohquelltext-Dateien wurden auf Wunsch des Herausgebers entfernt. Das vollständige Quelltext-ZIP unter `public/dateien/quellen/wiki-quelltexte.zip` sowie sämtliche ursprünglichen Wiki-Dateien bleiben erhalten. Auch eine fehlende aktuelle Artikelverlinkung rechtfertigt keine Löschung fachlicher Unterlagen, Vorlagen oder Bilder. Quellenangaben verweisen auf die ursprünglichen Wiki-Seiten. Der frühere Archivstand bleibt in der Git-Historie nachvollziehbar.

## Veröffentlichung

Ein Build veröffentlicht nichts automatisch. Standardmäßig gilt `/`; für ein Unterverzeichnis ist `DOCS_BASE` vor Build und Vorschau zu setzen. Menü, Suche, Bilder und Druck am konkreten Hosting prüfen. Änderungen über einen eigenen Branch und einen PR gegen `dev` bereitstellen; der Merge erfolgt durch den Maintainer.

## Abgleich der Programmreferenz mit der Oberfläche

Grundlage sind die 41 Screenshots aus den beiden Pushes `49e6670` und `39c02f2`. Die ersten zehn Referenzbereiche entsprechen der Menüleiste in Screenshot 0002. Danach folgen das Hauptfenster und die dokumentierten Ergänzungen.

| Screenshots | Geprüfter Bereich | Korrektur |
| --- | --- | --- |
| 0001–0003 | Menüleiste und Datei | Gruppenprozesse vor Auswahl; Datei-Befehle ergänzt. |
| 0004–0005 | Schulverwaltung und Statistik | Vermerkarten vor Zeugnisvorlagen; Prüfung und Statistikexporte ergänzt. |
| 0006 | Kataloge | Beschäftigungsarten als nicht dokumentierten Eintrag ergänzt; Kindergärten als schulformabhängige Ergänzung erhalten. |
| 0007 | Gruppenprozesse | Fünf sichtbare Kategorien; Abituraktionen separat erhalten. Teilleistungsbefehle aus dem Artikel ergänzt. |
| 0008 | Auswahl | Filter bearbeiten und Filter auf markierte Schüler ergänzt; Filter löschen als Ergänzung erhalten. |
| 0009 | Druckausgabe | Archivdruck und beide Word-Seriendruckwege ergänzt; Textzeugnisse erzeugen auf die native Word-Zeugniserzeugung korrigiert. |
| 0010–0017 | Datenaustausch | Exporte und Untermenüs entsprechend den Screenshots; Wohnortexport unter Weitere Exporte statt LuPO. |
| 0018–0019 | Extras und Hilfe | Benutzerverwaltung, Rückholen gelöschter Daten, Aufnahmejahr und beschriebene Abschnittsbefehle ergänzt. |
| 0021–0025 | Hauptfenster | Symbolleiste, Schülerauswahl, Schnellfilter, Schülerliste und Statuszeile getrennt. |
| 0026–0030 | Schülerkarteireiter | Reihenfolge korrigiert; Deutschförderung bei Individualdaten II. |
| 0031–0034 | Aktuelles Halbjahr | Unterreiter und Zeugnisbereich hierarchisch ergänzt. |
| 0035–0038 | Laufbahninfo, Förderung, Einwilligungen, KAoA | Einwilligungen und KAoA an richtiger Position. KAoA ohne Anleitung belassen. |
| 0039–0043 | Übersicht, FHR, Abitur, ZP 10 | Übersichtsartikel und beide Unterreiter verknüpft; Abituraktionen zugeordnet. |

### Sichtbare Funktionen ohne passende Anleitung

Diese Einträge werden bewusst ohne Link dargestellt. Gesucht wurde in den vorhandenen redaktionellen Artikeln; bloße Erwähnungen in Versionslisten oder im alten Inhaltsverzeichnis gelten nicht als Anleitung.

- Beschäftigungsarten
- Filterdefinition bearbeiten
- Vorlage im- und exportieren
- Export für Startklar
- Export für Komm mit
- Abitur-Daten exportieren
- ZP10- und ZK-Daten exportieren
- Import ZP 10
- Einstellungen exportieren
- Einstellungen importieren
- Ausweisnummern löschen
- Indizes wiederherstellen
- Löschfristen prüfen
- Zeichentabelle von Windows aufrufen
- Online-Supportprogramm starten
- Arbeits- und Sozialverhalten
- Außerunterrichtliches Engagement
- Bemerkung zur Versetzung
- KAoA

### Erhaltene Ergänzungen

Fachklassen, BK-Abschluss, Dokumentenverwaltung, Kindergärten, Filter löschen, Abituraktionen, Straße und Hausnummer trennen, Benutzer-Plugin und Zusatzprogramme bleiben unter „Weitere Funktionen“ zugänglich. Ihre Existenz ist in den jeweiligen Artikeln belegt; sie werden nicht als Teil der fotografierten Menüleiste ausgegeben.

Alte Artikeladressen und bestehende Überschriftenanker bleiben erhalten. Neue Abschnittsanker erschließen bestehende Erläuterungen. Die gesicherten Wiki-Quelltexte und Originaldateien wurden nicht verändert.

## Redaktion und Veröffentlichung

Der verbindliche Ablauf steht in [WORKFLOW.md](WORKFLOW.md). Neue Arbeitsbranches entstehen vom offiziellen `dev`; geprüfte Änderungen gelangen per PR nach `dev`. Nach der fachlichen Finalisierung führt ein geprüfter PR von `dev` nach `master` zur Veröffentlichung. Für beide PR-Ziele laufen die Pflichtprüfungen `docs-check` und `browser-check`.

`.github/workflows/deploy.yml` baut nach einem Push auf `master` zuerst für die Domainwurzel `/`. Das Artefakt **schild2-domain** enthält diesen fertigen statischen Auftritt für denselben Nginx-Veröffentlichungsweg wie bei SchILD3. Danach wird bei Bedarf ein zweiter Build unter dem GitHub-Pages-Unterpfad erstellt und mit GitHub Pages veröffentlicht. Manuelle Läufe auf Arbeitsbranches prüfen und liefern Artefakte; sie veröffentlichen nichts.

Die Anbindung des eigenen Servers ist laut Betreiber bereits eingerichtet. Der vorhandene Übernahmeweg muss das SchILD2-Artefakt `schild2-domain` verwenden. Zusätzlich durch die Administration zu prüfen: Unter **Settings → Pages → Build and deployment** ist **GitHub Actions** auszuwählen; das Environment `github-pages` muss Veröffentlichungen aus `master` zulassen. DNS, TLS und die Übernahme auf den bestehenden Webserver bleiben beim vorhandenen SchILD3-Verfahren. Der Workflow kann ohne Zugangsdaten weder DNS noch den Nginx-Server ändern. Eine GitHub-Pages-eigene Domain ist nur dann einzutragen, wenn diese Adresse tatsächlich auf GitHub Pages zeigen soll. Das Repository legt deshalb keine abweichende `CNAME`-Datei fest.

Lokal kann der zweite Veröffentlichungspfad mit `DOCS_BASE=/SchILD-NRW-2-Dokumentation/` gebaut und mit `npm run docs:check` geprüft werden. Für die Domainwurzel bleibt `DOCS_BASE` ungesetzt. Beide Varianten liefern dieselben Artikel und Originaldateien; Artikeladressen im Quelltext bleiben unverändert.

## Paketstand und Übernahme

Die bewährte technische Grundlage entspricht SchILD3: Node.js 22, VitePress **1.6.4**, `markdown-it-container` **4.0.0** und der gezielte Vite-Override **6.4.5**. Der Testbrowser ist mit Playwright **1.64.1** festgelegt. `package-lock.json` hält den vollständigen installierten Paketstand fest; `npm ci` reproduziert ihn. Die vorhandene offizielle Lizenz [LICENSE](LICENSE) bleibt erhalten und ist als `CC0-1.0` in den Paketmetadaten angegeben.

Übernommen wurde der GitHub-Stand `Raffenberg/SchILD2_Doku:dev` vom Commit `5c501dd1fbadef6c2a8fb3bdf7ce953b4c3c27b7`, einschließlich der vollständigen bisherigen Git-Historie. Die ursprüngliche offizielle Historie bleibt ebenfalls erhalten. Entfernt wurden die Testdatei `index.html` und die doppelten Prüfworkflows `browser-check.yml` und `docs-check.yml`; die offiziellen Dateien `browser.yml` und `dokumentation.yml` ersetzen sie. Alle Artikel und Originaldateien werden vollständig übernommen. Ein geerbter HTML-Downloadlink wurde in einen normalen Markdown-Link umgewandelt, damit er auch unter dem GitHub-Pages-Unterpfad funktioniert; Beschriftung und Dateiziel bleiben gleich.

Beim Einrichten wurde für `dev` noch kein aktiver Branchschutz gemeldet; ein Repository-Ruleset war ebenfalls nicht vorhanden. Die genauen Vorgaben für `dev` und `master`, einschließlich der beiden erforderlichen Checks, stehen in [WORKFLOW.md](WORKFLOW.md). Diese Administrationseinstellungen müssen mit den entsprechenden Rechten im Repository aktiviert werden.
