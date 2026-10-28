# SchILD2: Umsetzung der SchILD3-Arbeitsliste

Grundlage: die vom Benutzer bereitgestellte vollständige PR-Liste vom 27.10.2026. Sie dient als Vergleich der Endergebnisse; historische Zwischenlösungen und Synchronisations-PRs werden nicht erneut eingebaut. Die Ausführung legt auf ausdrücklichen Benutzerwunsch keinen bestimmten SchILD2-Programmstand fest.

## Übertragungsentscheidungen für alle 70 PRs

„Übertragen/geprüft“ bedeutet technische Umsetzung oder Quellen-/Inhaltsabgleich im SchILD2-Bestand. Es behauptet keinen Laufzeittest in SchILD2 und keine ungeprüfte fachliche Übernahme aus SchILD3.

| Vorlage | Ergebnis in SchILD2 |
| --- | --- |
| [#1](https://github.com/Raffenberg/SchILD3_Doku/pull/1) | Vollständiger eigener Wiki-Bestand; zentrale Themenmenüs mit zusätzlicher Tools-Rubrik. |
| [#2](https://github.com/Raffenberg/SchILD3_Doku/pull/2) | Anleitungen, RAP, Code und Feldtabellen anhand gesicherter SchILD2-Quellen geprüft. |
| [#3](https://github.com/Raffenberg/SchILD3_Doku/pull/3) | Alle 1.405 Originalquellen und 910 Originaldateien erhalten; lokale Links geprüft. |
| [#4](https://github.com/Raffenberg/SchILD3_Doku/pull/4) | Artikel in Themenzweigen; Direktaufruf und aufklappender Tool-Kontext geprüft. |
| [#5](https://github.com/Raffenberg/SchILD3_Doku/pull/5) | Eigene Referenz entlang der SchILD2-Menüs; vorhandene Artikel wiederverwendet. |
| [#6](https://github.com/Raffenberg/SchILD3_Doku/pull/6) | Wiki-Hauptseite, Tutorial-/YouTube-Zugänge und Gesamtzuordnung erhalten. |
| [#7](https://github.com/Raffenberg/SchILD3_Doku/pull/7) | 884 Bilder in lesbare Themenpfade verschoben, bytegleich geprüft und Katalog aktualisiert. |
| [#8](https://github.com/Raffenberg/SchILD3_Doku/pull/8) | Originalmedien bleiben regulär in Git; keine automatischen Rücksetz-/Downloadprozesse. |
| [#9](https://github.com/Raffenberg/SchILD3_Doku/pull/9) | Ohne eigenen Merge; durch #6 abgedeckt. |
| [#10](https://github.com/Raffenberg/SchILD3_Doku/pull/10) | Restliche Layouttabellen aufgelöst; beschädigte RAP-Darstellung aus Originalcode wiederhergestellt. |
| [#11](https://github.com/Raffenberg/SchILD3_Doku/pull/11) | 122 RAP-Funktionsartikel vereinheitlicht; neun zuvor unlesbare Codeartikel wiederhergestellt. Ungesicherte Signaturen nicht ergänzt. |
| [#12](https://github.com/Raffenberg/SchILD3_Doku/pull/12) | Ein maßgeblicher alphabetischer RAP-Einstieg; Bereichsübersicht erläutert nur noch den Zugang. |
| [#13](https://github.com/Raffenberg/SchILD3_Doku/pull/13) | Synchronisation ohne eigene Funktion. |
| [#14](https://github.com/Raffenberg/SchILD3_Doku/pull/14) | Deutsche Suche, sechs kurze Menüpunkte, responsive Inhalte und begrenzte Browserprüfung. |
| [#15](https://github.com/Raffenberg/SchILD3_Doku/pull/15) | Synchronisation von #14. |
| [#16](https://github.com/Raffenberg/SchILD3_Doku/pull/16) | Keine Dateiänderung. |
| [#17](https://github.com/Raffenberg/SchILD3_Doku/pull/17) | Breite Feldtabellen in benannten, fokussierbaren Scrollbereichen; schmale Ansichten geprüft. |
| [#18](https://github.com/Raffenberg/SchILD3_Doku/pull/18) | Öffentliche Autorenhilfe definiert Anleitung, Referenz, RAP und Übersicht. |
| [#19](https://github.com/Raffenberg/SchILD3_Doku/pull/19) | Synchronisation von #17. |
| [#20](https://github.com/Raffenberg/SchILD3_Doku/pull/20) | Startseite auf dieselben sechs Zugänge wie das Kopfmenü abgestimmt. |
| [#21](https://github.com/Raffenberg/SchILD3_Doku/pull/21) | Alle sechs Startseitenkacheln haben einen aufgabenbezogenen Begleittext. |
| [#22](https://github.com/Raffenberg/SchILD3_Doku/pull/22) | Synchronisation von #18/#20/#21. |
| [#23](https://github.com/Raffenberg/SchILD3_Doku/pull/23) | Keine temporäre Link-Sonderlösung eingeführt; tatsächliche Browserfehler kontrolliert. |
| [#24](https://github.com/Raffenberg/SchILD3_Doku/pull/24) | Reportverwaltung aufgabenbezogen erschlossen. Keine SchILD3-spezifischen Löschungen übernommen. |
| [#25](https://github.com/Raffenberg/SchILD3_Doku/pull/25) | Bestehende Artikeladressen erhalten; RAP-Doppelverzeichnis inhaltlich entlastet. |
| [#26](https://github.com/Raffenberg/SchILD3_Doku/pull/26) | Reporting-Übersichten erklären Auswahl, Ausgabe, Erstellung und Programmierung. |
| [#27](https://github.com/Raffenberg/SchILD3_Doku/pull/27) | Gesamten aktiven Bestand auf Übernahmereste geprüft; 462 Artikel von Frontmatter-/Formatresten bereinigt. Verdichtete Menüdaten bleiben wegen ihrer Größe nötig. |
| [#28](https://github.com/Raffenberg/SchILD3_Doku/pull/28) | ENM und externe Noteneingabe ausdrücklich behalten. EP-Felder nicht nach SchILD3 umdefiniert. |
| [#29](https://github.com/Raffenberg/SchILD3_Doku/pull/29) | Schulischen FHR-Teil abgegrenzt; Prüfungsentscheidung und Programmablauf bei ZP10 getrennt. BK-Abläufe beibehalten und strukturiert. |
| [#30](https://github.com/Raffenberg/SchILD3_Doku/pull/30) | Keine SchILD3-Bestätigung als SchILD2-Test übernommen. ZP10 verlinkt die einschlägige APO-S I; Sprachprüfungen werden nicht gleichgesetzt. |
| [#31](https://github.com/Raffenberg/SchILD3_Doku/pull/31) | SchILD2-Feldbeschreibungen, Katalog-/Individualzuordnungen und ältere Verfahren erhalten; keine unbelegten Funktionskorrekturen. |
| [#32](https://github.com/Raffenberg/SchILD3_Doku/pull/32) | Bestehende gleichrangige Menüs beibehalten; Hilfe-Zugänge geordnet, Tool-Kontext und mobile Bedienung geprüft. |
| [#33](https://github.com/Raffenberg/SchILD3_Doku/pull/33) | Gruppenauswahl, Zielabschnitt und Löschwirkung vor der Aktion erklärt; Datenbankfunktionen bleiben in SchILD2. |
| [#34](https://github.com/Raffenberg/SchILD3_Doku/pull/34) | Alle Menüziele gegen vorhandene Artikel geprüft; Themen-, Referenz- und A–Z-Kontext getrennt getestet. |
| [#35](https://github.com/Raffenberg/SchILD3_Doku/pull/35) | Einmaliger Inhaltsabgleich und Originaldatei-Vergleich durchgeführt, keine dauerhafte Artikel-Prüfsummenpflicht. |
| [#36](https://github.com/Raffenberg/SchILD3_Doku/pull/36) | Auf ausdrücklichen Benutzerwunsch kein bestimmter Programmstand festgelegt. A–Z vorhanden; keine SchILD3-Screenshots eingeführt. |
| [#37](https://github.com/Raffenberg/SchILD3_Doku/pull/37) | Vorhandene SchILD2-Bilder thematisch einsortiert und alle Verweise nachgeführt. |
| [#38](https://github.com/Raffenberg/SchILD3_Doku/pull/38) | Referenz verwendet Artikel links und Abschnittsgliederung rechts; keine historischen Generatoren eingeführt. |
| [#39](https://github.com/Raffenberg/SchILD3_Doku/pull/39) | Schnittstellenbeschreibung aktiviert das vorhandene breite Referenzlayout; sechs fachliche Spalten bleiben erhalten. |
| [#40](https://github.com/Raffenberg/SchILD3_Doku/pull/40) | Videoplayer nur in automatisierten Prüfungen durch statische Antworten isoliert; Website-Videoquellen unverändert. |
| [#41](https://github.com/Raffenberg/SchILD3_Doku/pull/41) | A–Z behält Hilfe-Kontext nach Direktaufruf und Neuladen; Weiterblättern bleibt alphabetisch. |
| [#42](https://github.com/Raffenberg/SchILD3_Doku/pull/42) | Referenz-Pager folgt eigenem Menü; Abschnittsziele werden nicht zu separaten Schritten. |
| [#43](https://github.com/Raffenberg/SchILD3_Doku/pull/43) | SchILD3-Exportfelder, Reportparameter und Mailbestätigungen nicht ungeprüft kopiert; Quellcode- und Quellenprüfung dokumentiert. |
| [#44](https://github.com/Raffenberg/SchILD3_Doku/pull/44) | Sprachlicher Durchgang ohne Codeänderung; ausgewählte lange Abläufe in Schritte oder Wirkungstabellen umgearbeitet. |
| [#45](https://github.com/Raffenberg/SchILD3_Doku/pull/45) | Dauerhafte README und CONTRIBUTING sowie dieser vollständige Übertragungsnachweis. |
| [#46](https://github.com/Raffenberg/SchILD3_Doku/pull/46) | Zentrale deutschsprachige Hinweis-/Beispielcontainer mit kleinen Icons beibehalten. |
| [#47](https://github.com/Raffenberg/SchILD3_Doku/pull/47) | Historische Gesamtartikel bleiben wegen vollständiger Wiki-Übernahme erhalten; im Quellen-/Wiki-Kontext eingeordnet. |
| [#48](https://github.com/Raffenberg/SchILD3_Doku/pull/48) | Installationsübersicht verbindet Programm/Datenbank, Report-Explorer und Zeugnisformulare ohne Serverpflicht. |
| [#49](https://github.com/Raffenberg/SchILD3_Doku/pull/49) | Referenzmenü beginnt mit Übersicht und Druckansicht; SchILD2-Menüs/Karteireiter benannt. |
| [#50](https://github.com/Raffenberg/SchILD3_Doku/pull/50) | Eigenes npm-Audit ausgeführt; keine gemeldeten Schwachstellen, kein unnötiges Paketupdate. |
| [#51](https://github.com/Raffenberg/SchILD3_Doku/pull/51) | Nach geprüftem lokalem Backup und ausdrücklicher Freigabe: migration/, Importprogramme und eingefrorene Tests entfernt; normale Pflege ohne Python/Pandoc. |
| [#52](https://github.com/Raffenberg/SchILD3_Doku/pull/52) | Kein gesonderter screenshots/-Rohbestand vorhanden; veröffentlichte Bilder vollständig erhalten. |
| [#53](https://github.com/Raffenberg/SchILD3_Doku/pull/53) | Technische Wiki-Frontmatter entfernt, Leerzeilen außerhalb von Code begrenzt. Unverwendete Originalbilder bleiben wegen der vollständigen Archivsicherung erhalten. |
| [#54](https://github.com/Raffenberg/SchILD3_Doku/pull/54) | Alle elf HTML-Tabellen aufgelöst; Feldtabellen sechs Spalten, leere Zusatzspalte entfernt, zusammengeführte Inhalte erhalten. |
| [#55](https://github.com/Raffenberg/SchILD3_Doku/pull/55) | SchILD2-Bestand enthält keine entsprechende ZeugnisMitRand-Optionstabelle. SchILD3-Optionen nicht erfunden oder ungeprüft eingeführt. |
| [#56](https://github.com/Raffenberg/SchILD3_Doku/pull/56) | Vorhandene öffentliche Autorenhilfe erhalten und technische Mitarbeit separat vereinfacht. |
| [#57](https://github.com/Raffenberg/SchILD3_Doku/pull/57) | Bilderkatalog bleibt im Hilfe-Kontext; Direktaufruf geprüft. |
| [#58](https://github.com/Raffenberg/SchILD3_Doku/pull/58) | Bilder bereits als Markdown vorhanden; 96 bestehende kurze Bildunterschriften formatiert. Originaldateien über Katalog und Archiv erreichbar. |
| [#59](https://github.com/Raffenberg/SchILD3_Doku/pull/59) | Historische Sprungziele bewusst erhalten: Adressen wurden bereits verwendet, externe Verwendungen sind nicht sicher auszuschließen. |
| [#60](https://github.com/Raffenberg/SchILD3_Doku/pull/60) | Ältere SchILD2-Verfahren bleiben zugänglich; keine automatische Auslagerung nach SchILD3-Maßstab. |
| [#61](https://github.com/Raffenberg/SchILD3_Doku/pull/61) | Restliche statische Formatierung und HTML-Tabellen bereinigt; notwendige Videos, Sprungziele und Zeilenumbrüche bleiben. |
| [#62](https://github.com/Raffenberg/SchILD3_Doku/pull/62) | Vollständige Wiki-Zuordnung und ergänzende PDF-Anleitungen mit internen Artikelzielen erschlossen. |
| [#63](https://github.com/Raffenberg/SchILD3_Doku/pull/63) | Titel und Menü heißen Dokumentation und Wiki im Vergleich; Adresse erhalten. |
| [#64](https://github.com/Raffenberg/SchILD3_Doku/pull/64) | Lesbare Artikelnamen statt 473 identischer Artikel-Linktexte, technische Pfade im Tooltip. |
| [#65](https://github.com/Raffenberg/SchILD3_Doku/pull/65) | Historischer Lockfile-Abgleich; eigenes Audit stattdessen ausgeführt. |
| [#66](https://github.com/Raffenberg/SchILD3_Doku/pull/66) | Überflüssige Frontmatter und doppelte Konfiguration entfernt; sichtbare Quellenlinks behalten; Audit, Build und Dev-Start geprüft. |
| [#67](https://github.com/Raffenberg/SchILD3_Doku/pull/67) | Zentrales Drucklayout mit Wiederherstellung von Details/Bildern beibehalten; echte Druckproben geprüft. |
| [#68](https://github.com/Raffenberg/SchILD3_Doku/pull/68) | Rubrikdruck entsteht weiterhin aus Originalartikeln und enthält jeden Artikel nur einmal. |
| [#69](https://github.com/Raffenberg/SchILD3_Doku/pull/69) | Druckansicht direkt nach Übersicht; Menüaufruf startet keinen Druckdialog. |
| [#70](https://github.com/Raffenberg/SchILD3_Doku/pull/70) | Einheitlicher manueller Druckstart und Artikelsymbol in den Leserubriken; Quellenarchiv bleibt Archiv und keine 1.405-Seiten-Druckrubrik. |

## Inhaltserhalt

Vor der Entfernung der Importwerkzeuge wurden sämtliche 1.405 veröffentlichten Originalquellen byteweise mit dem Importbestand verglichen und alle 910 Originaldateien anhand ihrer SHA-256-Werte geprüft. Die 884 Bilddateien wurden ausschließlich umbenannt/verschoben; ihre Bytes blieben unverändert. Nicht verwendete Originale bleiben Bestandteil des vollständigen Archivs. Die Wiki-Quelltexte und die ursprünglichen Revisionslinks bleiben sichtbar zugänglich.

Ein vollständiges lokales ZIP der Migrationsnachweise und Importprogramme wurde vor der Entfernung erstellt und auf Lesbarkeit geprüft. Es liegt im ignorierten Ordner `tmp/`; die Git-Historie enthält zusätzlich den bisherigen Stand. Die aktive Website erhält kein neu veröffentlichtes Paket interner Arbeitsnachweise.

Der einmalige Wort-/Inhaltsabgleich ergab außerhalb bewusst redigierter Arbeitsabläufe und wiederhergestellter RAP-Seiten nur erläuterte Umformulierungen, korrigierte Tippfehler und Tabellenbeschriftungen. Die bisherigen Anker bleiben wegen möglicher bestehender Verlinkungen erhalten. Es gibt keine eingefrorene historische Artikelkontrolle bei normalen Änderungen.

## Fachlicher Prüfrahmen

- ENM, externe Notenmodule, direkte Datenbankverwaltung und ältere SchILD2-Verfahren bleiben erhalten.
- FHR bezeichnet in den betreffenden Oberstufenabläufen den schulischen Teil. Die Abgrenzung zum berufspraktischen Teil ist am offiziellen Merkblatt belegt.
- ZP10 und BK-Abschlüsse unterscheiden Einlesen, Prüfungsentscheidung, Berechnung und Rückübertragung. Schulform-/kohortenabhängige Rechtsfolgen werden nicht aus SchILD3 kopiert.
- Es wurden keine SchILD3-Exportfelder, EP-Jahr-Regeln oder Reportoptionen ergänzt, die im SchILD2-Bestand nicht belegt sind.
- Ohne installierte SchILD2-/Reportdesigner-Testumgebung sind praktische Funktionsbestätigungen nicht möglich. Das betrifft insbesondere die Wirkung einzelner Importoptionen, Kohortenberechnungen und alte Reportbeispiele. Das Beispiel AufzaehlungRTF enthält schon in der Originalquelle einen unvollständigen Ereignisblock und eine auffällige Freigabezeile; dies ist am Beispiel ausdrücklich kenntlich.

## Prüfung des Ergebnisses

Die kleinen automatischen Tests prüfen Menüziele und Kontext, die sechs fachlichen Tabellenspalten, erhaltene Pascal-Leerstrings, stabile Weiterleitungen sowie eindeutige Buchanker im Rubrikdruck. Die Browserprüfung bleibt auf repräsentative Seiten und Bedienwege begrenzt. Sie prüft schmale/breite Ansichten, Hell/Dunkel, Suche, Bilderkatalog, Referenz, A–Z, mobile Navigation und Rubrikdruck. Videoplayer werden ausschließlich im Test isoliert.

Hosting und Domain-Anbindung gehören zur späteren Veröffentlichung. Dieser PR veröffentlicht nichts und wird nicht automatisch zusammengeführt.
