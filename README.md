# SchILD-NRW 2 – Dokumentation

VitePress-Dokumentation und vollständige Sicherung des aktuellen SchILD2-Wikis für die Zeit nach seiner Abschaltung. Die Themenstruktur übernimmt bewährte SchILD3-Muster und erweitert sie um sämtliche Tools und Zusatzprogramme. SchILD2 arbeitet direkt mit seiner Datenbank; ein SVWS-Server ist dafür nicht erforderlich.

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
- Tools und Zusatzprogramme mit lokal gesicherten Handbüchern und Downloads
- Hilfe, Autorenhinweise und vollständiges Quellenarchiv

Das Kopfmenü bleibt mit sechs Zugängen übersichtlich: **Einstieg · SchILD2 · Zeugnisse · Reporting · Tools · Nachschlagen**. „SchILD2“ bündelt tägliche Arbeit und Administration; „Nachschlagen“ erschließt Programmreferenz, Artikelverzeichnis, Hilfe, Bilder und Quellenarchiv. Die bisherigen Artikeladressen bleiben erhalten.

Enthalten sind lokale Volltextsuche, helle und dunkle Darstellung, mobile Navigation, alphabetisches Artikelverzeichnis, Bilderkatalog, Artikel- und Rubrikdruck sowie die Wiki-Bezugstabelle.

## Herkunft und Umfang

Quelle ist das [SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Hauptseite), gesichert am 27. Oktober 2026. Erfasst sind **alle 1.405 aktuell vorhandenen Seiten aller Namensräume** und **alle 910 hochgeladenen Originaldateien**, einschließlich nicht verwendeter Dateien. **473 Inhaltsseiten** sind als lesbare Markdown-Artikel übertragen; dazu gehören auch die elf LuPO-Seiten außerhalb des Hauptnamensraums. Vorlagen, Dateibeschreibungen, System- und Benutzerseiten sind zusätzlich im lokalen Quellenarchiv erhalten.

**34 weitere Originaldownloads** aus den offiziellen Programmseiten und den Wiki-Verweisen sind lokal gesichert, darunter das vollständige Handbuch SchILD–LuPO–Kurs42, 22. Auflage. Alle 14 PDFs sind lesbar geprüft. Acht bereits extern nicht abrufbare Altverweise sind als offene Quellenlücken dokumentiert; sie werden nicht als gesichert ausgegeben.

`migration/articles.json` ordnet Inhaltsseiten ihren Wiki-Versionen und Markdown-Dateien zu. `migration/wiki-complete/` sichert den Gesamtbestand aller Namensräume; `migration/manuals/` dokumentiert die ergänzenden Programmseiten und Downloads. Prüfsummen belegen die Originaldateien; alle 910 Wiki-Dateien stimmen mit den vom Wiki gelieferten SHA-1-Werten überein. Jeder übernommene Artikel verlinkt seinen lokal gesicherten Quelltext. Die ursprünglichen Überschriftsanker und ältere kodierte Varianten bleiben als Alias-Ziele erhalten. Das Quellenarchiv bietet außerdem einen vollständigen ZIP-Download aller aktuellen Wiki-Quelltexte.

Gesichert ist der aktuelle Inhalt jeder vorhandenen Seite, einschließlich der eigenständigen Versionsgeschichtsartikel. Frühere Bearbeitungsstände einzelner Seiten und bereits gelöschte Inhalte sind nicht Bestandteil dieser aktuellen Bestandsübernahme.

Der Erstimport aktualisiert keine historischen Rechtsstände und behauptet keine erneute fachliche Prüfung sämtlicher Altverfahren. Im Wiki nicht angelegte Artikel werden nicht erfunden; ihre vorhandenen Linktexte bleiben lesbar. Einzelheiten und Prüfergebnisse stehen im [Migrationsbericht](migration/BERICHT.md).

Die Wiki-Schnittstelle liefert keine allgemeine Inhaltslizenz (`migration/siteinfo.json`). Rechte an übernommenen Inhalten und Abbildungen verbleiben bei den jeweiligen Rechteinhabern. Eine öffentliche Bereitstellung erfordert die passenden Rechte- und Betreiberangaben.

## Pflege

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) sowie die Autorenhilfe unter „Hilfe“. Änderungen erfolgen über einen eigenen Branch mit Pull Request gegen `dev`.
