# SchILD-NRW 2 – Dokumentation

VitePress-Dokumentation aus dem SchILD2-Wiki in der bewährten Themenstruktur der SchILD3-Dokumentation. Die Programmreferenz bildet die Menüs von SchILD2 ab. SchILD2 arbeitet direkt mit seiner Datenbank; ein SVWS-Server ist dafür nicht erforderlich.

## Lokal verwenden

Node.js 22 oder neuer installieren und im Repository ausführen:

```sh
npm ci
npm run docs:dev
```

Die angezeigte lokale Adresse öffnet die Vorschau. Unter Windows funktioniert auch `npm.cmd`.

```sh
npm test
npm run docs:build
npm run docs:check
npm run docs:preview
```

Der fertige statische Webauftritt liegt in `.vitepress/dist/`. `node_modules/` wird weder veröffentlicht noch eingecheckt. Eine Veröffentlichung wird durch diesen Erstimport nicht automatisch ausgelöst. Das Projekt ist zunächst für die Bereitstellung am Wurzelpfad einer Website konfiguriert; für andere Zielpfade ist `DOCS_BASE` einstellbar und die Navigation am konkreten Hosting zu prüfen.

## Inhalte und Bedienung

- Einstieg und erste Schritte
- Arbeiten mit SchILD: Schülerdaten, Lehrkräfte, Kataloge, Gruppenprozesse und Abschnittswechsel
- Zeugnisse und Abschlüsse
- Reporting und RAP-Funktionen
- Programmreferenz nach SchILD2-Menüs
- Installation, Datenbanken, Sicherung und Benutzerrechte
- Hilfe, Zusatzprogramme und Autorenhilfe

Enthalten sind lokale Volltextsuche, helle und dunkle Darstellung, mobile Navigation, alphabetisches Artikelverzeichnis, Bilderkatalog, Artikel- und Rubrikdruck sowie die Wiki-Bezugstabelle.

## Herkunft und Umfang

Quelle ist das [SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Hauptseite), abgerufen am 27. Oktober 2026. Der Erstimport umfasst alle **456 Seiten im Hauptnamensraum** und **757 verwendete Bilder und Anhänge**. Eigenständige Inhalte außerhalb dieses Namensraums, etwa weitere LuPO-Handbuchseiten, bleiben über ihre ursprünglichen Wiki-Links erreichbar.

`migration/articles.json` ordnet jede Seite ihrer Wiki-Version und Markdown-Datei zu. `migration/snapshot/` und `snapshot-sha256.json` sichern den ursprünglichen Inhalt; `assets.json` enthält Herkunft und Prüfsummen der heruntergeladenen Dateien. Jeder Artikel verlinkt seine Wiki-Version und Bearbeitungsgeschichte. Die ursprünglichen Überschriftsanker und ältere kodierte Varianten werden als Alias-Ziele erhalten.

Der Erstimport aktualisiert keine historischen Rechtsstände und behauptet keine erneute fachliche Prüfung sämtlicher Altverfahren. Im Wiki nicht angelegte Artikel werden nicht erfunden; ihre vorhandenen Linktexte bleiben lesbar. Einzelheiten und Prüfergebnisse stehen im [Migrationsbericht](migration/BERICHT.md).

Die Wiki-Schnittstelle liefert keine allgemeine Inhaltslizenz (`migration/siteinfo.json`). Rechte an übernommenen Inhalten und Abbildungen verbleiben bei den jeweiligen Rechteinhabern. Eine öffentliche Bereitstellung erfordert die passenden Rechte- und Betreiberangaben.

## Pflege

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) sowie die Autorenhilfe unter „Hilfe“. Änderungen erfolgen über einen eigenen Branch mit Pull Request gegen `dev`.
