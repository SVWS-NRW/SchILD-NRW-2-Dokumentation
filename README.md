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
- Tools und Zusatzprogramme mit direkt lesbaren Einrichtungs- und Arbeitsanleitungen
- Hilfe, Autorenhinweise und vollständiges Quellenarchiv

Das Kopfmenü bleibt mit sechs Zugängen übersichtlich: **Einstieg · SchILD2 · Zeugnisse · Reporting · Tools · Nachschlagen**. „SchILD2“ bündelt tägliche Arbeit und Administration; „Nachschlagen“ erschließt Programmreferenz, Artikelverzeichnis, Hilfe, Bilder und Quellenarchiv. Die bisherigen Artikeladressen bleiben erhalten.

Enthalten sind lokale Volltextsuche, helle und dunkle Darstellung, mobile Navigation, alphabetisches Artikelverzeichnis, Bilderkatalog, Artikel- und Rubrikdruck sowie die Wiki-Bezugstabelle. Die Tool-Untermenüs verwenden kurze Bezeichnungen und folgen dem jeweiligen Einrichtungs- und Arbeitsablauf. LuPO übernimmt die Reihenfolge und Verschachtelung seines ursprünglichen Handbuchs.

## Herkunft und Umfang

Quelle ist das [SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Hauptseite), gesichert am 27. Oktober 2026. Erfasst sind **alle 1.405 aktuell vorhandenen Seiten aller Namensräume** und **alle 910 hochgeladenen Originaldateien**, einschließlich nicht verwendeter Dateien. Von den 473 gesicherten Inhaltsseiten bleiben nach der Bereinigung zwölf Leer- und Weiterleitungsseiten als Originalquellen im Archiv; die übrigen 461 Wiki-Artikel werden redaktionell gepflegt. Hinzu kommen 15 aus PDF-Anleitungen erarbeitete Artikel. Auch die elf LuPO-Seiten außerhalb des Hauptnamensraums wurden vollständig erschlossen.

**Neun PDF-Anleitungen** wurden ausgewertet und für **15 neue Anleitungen sowie Ergänzungen an drei bestehenden Wiki-Artikeln** verwendet. Die zusätzlichen 34 Downloads, darunter die ausgewerteten PDF-Dateien und unnötig heruntergeladene Programmpakete, wurden aus dem aktuellen Git-Stand entfernt. Die Quellenbelege stehen direkt in den Artikeln und in `migration/manuals/evaluated-pdfs.json`.

Zwölf leere Platzhalter beziehungsweise reine Weiterleitungsartikel sind aus der normalen Dokumentation entfernt. Ihre ursprünglichen Wiki-Quellen bleiben im Archiv erhalten; bestehende Lesezeichen führen unmittelbar zum passenden Ersatzinhalt. Die zu acht entfallenen Altdateien gehörenden Links, Downloadankündigungen und Hinweise sind aus den Fachartikeln entfernt.

`migration/articles.json` ordnet Inhaltsseiten ihren Wiki-Versionen und Markdown-Dateien zu. `migration/wiki-complete/` sichert den Gesamtbestand aller Namensräume; `migration/retired-articles.json` dokumentiert entfernte Leerartikel mit Ersatzinhalt und Begründung. Prüfsummen belegen die Originaldateien; alle 910 Wiki-Dateien stimmen mit den vom Wiki gelieferten SHA-1-Werten überein. Übernommene Wiki-Artikel verlinken ihren lokal gesicherten Quelltext. Das Quellenarchiv bietet außerdem einen ZIP-Download aller aktuellen Wiki-Quelltexte.

Gesichert ist der aktuelle Inhalt jeder vorhandenen Seite, einschließlich der eigenständigen Versionsgeschichtsartikel. Frühere Bearbeitungsstände einzelner Seiten und bereits gelöschte Inhalte sind nicht Bestandteil dieser aktuellen Bestandsübernahme.

Der Erstimport aktualisiert keine historischen Rechtsstände und behauptet keine erneute fachliche Prüfung sämtlicher Altverfahren. Im Wiki nicht angelegte Artikel werden nicht erfunden; ihre vorhandenen Linktexte bleiben lesbar. Einzelheiten und Prüfergebnisse stehen im [Migrationsbericht](migration/BERICHT.md).

Die Wiki-Schnittstelle liefert keine allgemeine Inhaltslizenz (`migration/siteinfo.json`). Rechte an übernommenen Inhalten und Abbildungen verbleiben bei den jeweiligen Rechteinhabern. Eine öffentliche Bereitstellung erfordert die passenden Rechte- und Betreiberangaben.

## Pflege

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) sowie die Autorenhilfe unter „Hilfe“. Änderungen erfolgen über einen eigenen Branch mit Pull Request gegen `dev`.
