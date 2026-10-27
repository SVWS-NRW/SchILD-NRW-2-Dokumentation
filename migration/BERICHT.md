# Migration des SchILD2-Wikis

Stand: 27. Oktober 2026. Ausgangspunkt: `Raffenberg/SchILD2_Doku`, ursprünglicher Commit `d2c487e15fbea58f410901c736eebb7348238597`. Layout und Bedienkonzepte wurden aus `Raffenberg/SchILD3_Doku`, Branch `dev`, Commit `5cbc40be85c9398602ec07dc872171f2a2fc57e4` übernommen. Die Artikeltexte stammen aus dem SchILD2-Wiki.

## Abgekürzte, überprüfbare Schrittfolge

1. **Endfassung als Vorlage:** Die bereits erprobten Rubriken, Hinweisboxen, aktive Navigation, Suche, Autorenhilfe, Bilderkatalog und Druckfunktionen aus SchILD3 wurden unmittelbar verwendet.
2. **Quellen sichern:** Alle 456 vorhandenen Seiten im Hauptnamensraum wurden mit Wikitext, gerendertem Inhalt, Versionsnummern, Link- und Abschnittsangaben gespeichert. Prüfsummen sichern die Originale.
3. **SchILD2 zuordnen:** Die Inhalte wurden in 22 Themenbereiche der sieben Rubriken eingeordnet. Die Programmreferenz folgt dem SchILD2-Inhaltsverzeichnis und den dort beschriebenen Menüs. Administration erklärt den direkten Datenbankzugriff ohne SVWS-Server; Access sowie SQL-Datenbanken bleiben berücksichtigt.
4. **Direkt bereinigen:** 757 verwendete Bilder und Anhänge wurden lokal gespeichert. Lesbare Dateinamen, native Hinweisboxen, übersichtliche RAP-Abschnitte, einheitliche Überschriftsebenen und Quellenangaben wurden im Erstimport erzeugt. Bearbeitungsschaltflächen, Wiki-Spaltenlayouts und reine Rücksprungabsätze wurden entfernt. Videos sind über ausdrücklich anklickbare Links erreichbar.
5. **Ergebnis prüfen:** Vollständigkeit, Dateien, Textbestand, historische Sprungmarken, HTML-Verknüpfungen und Browserbedienung wurden geprüft.

## Bestands- und Prüfergebnisse

| Prüfung | Ergebnis |
| --- | --- |
| Wiki-Seiten im erfassten Hauptnamensraum | 456, sämtlich einer Markdown-Datei und einem Themenmenü zugeordnet |
| Quellenüberschriften | 1.154 ursprüngliche Sprungmarken erhalten; zusätzliche ältere kodierte Alias-Varianten |
| Bilder und Anhänge | 757 Dateien, 37.940.740 Bytes, Herkunft und SHA-256 dokumentiert |
| Hinweisboxen | 140: 44 Hinweise, 42 Beispiele, 35 wichtige Hinweise, 18 Achtung-Hinweise, 1 Tipp |
| Bereich RAP | 123 Seiten einschließlich Funktionsübersicht |
| Textvergleich | 130.237 Quellwörter; keine fehlenden Wörter nach Bereinigung der Wiki-Bedienelemente und Ersetzung der Boxentitel |
| VitePress-Bau | erfolgreich |
| Fertige HTML-Seiten | 501 einschließlich Übersichten und Druckansichten |
| Interne Links, Bilder und Sprungmarken | 0 Fehler |
| Browseransichten | 32 bei 390/1440 Pixeln in Hell/Dunkel; kein Seitenüberlauf |
| Bedienprüfungen | Suche, Bilderkatalog, Referenzkontext nach Neuladen, Mobilmenü, unveränderte leere Pascal-Zeichenketten und Rubrikdruck erfolgreich |

Der Wortvergleich ist eine zusätzliche Kontrolle des Textbestands, keine fachliche Neubewertung. Originalquellen und Bilder sind unverändert gesichert. Die Prüfsummen der erzeugten Markdown-Dateien in `articles.json` dokumentieren den Erstimport; spätere redaktionelle Bearbeitungen sind ausdrücklich möglich.

## Bewusst erhaltene Unterschiede und Quellengrenzen

- SchILD2-Menüs und direkte Datenbankanbindung bleiben maßgeblich. SQL-Datenbankserver oder Netzwerkfreigaben sind von einem SVWS-Server zu unterscheiden.
- Frühere Verfahren, alte Schuljahre, Windows-Versionen und Rechtsstände wurden erhalten. Historische Aussagen werden durch den Import nicht zu aktuell geprüften Empfehlungen.
- Im Quellwiki gibt es Verweise auf **89 unterschiedliche nicht angelegte Seiten**. Ihre Linkbeschriftungen bleiben im Artikeltext stehen; Verknüpfungen zur Wiki-Bearbeitungsmaske wurden entfernt. Details enthält `external-wiki-links.json`.
- Eigenständige Handbuchseiten außerhalb des Hauptnamensraums bleiben extern verlinkt. Der Import behauptet keinen vollständigen Umzug sämtlicher separater Programme oder Diskussionen des Wikis.
- Die ursprüngliche Barrierefreiheitserklärung beschreibt das Wiki und ist im Quellenbereich gekennzeichnet. Sie ist keine Erklärung für die neue Website.
- Die Wiki-Schnittstelle liefert keine allgemeine Inhaltslizenz. Quellen und Bearbeitungsgeschichten werden benannt; vor öffentlicher Bereitstellung sind Nutzungsrechte und Betreiberangaben festzulegen.

## Prüfdateien und Wiederholung

`snapshot-sha256.json`, `articles.json`, `assets.json` und `siteinfo.json` belegen Herkunft und Bestand. `text-audit.json`, `link-check.txt` und `browser-check.json` dokumentieren die lokalen Prüfungen. GitHub Actions wiederholt Migrationsprüfung, Bau, Linkkontrolle und Browserbedienung für Pull Requests.

```sh
npm ci
npm test
npm run docs:build
npm run docs:check
npm run docs:check-browser
```

Die letzte Prüfung benötigt zusätzlich Playwright und Chromium, siehe `CONTRIBUTING.md`. Für einen erneuten Vergleich des Originaltextes benötigt `migration/audit-text.py` außerdem Python, lxml und Pandoc.

Eine Veröffentlichung oder ein Merge wird durch den Import nicht automatisch vorgenommen.
