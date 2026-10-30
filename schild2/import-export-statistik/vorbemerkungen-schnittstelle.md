---
title: "Textschnittstelle vorbereiten"
---

<a id="vorbemerkungen-schnittstelle"></a>

# Textschnittstelle vorbereiten


Dieses Dokument beschreibt die Text-Importschnittstelle für SchILD-NRW.

Der Import erfolgt aus mehreren Textdateien, deren Struktur nachfolgend erläutert ist. Für alle Textdateien gelten folgende Bedingungen:

Schild-NRW erwartet, dass die Schnittstellendateien genau die hier angegebenen Dateinamen haben. Beispielsweise wird Sbasis.dat an Stelle von SchuelerBasisdaten.dat nicht erkannt.

Jede Zeile muss genau einen Datensatz enthalten.

Als Trennzeichen zwischen einzelnen „Spalten“ (Feldern) wird das Pipe-Symbol „\|“ verwendet. Dies hat den Vorteil, dass z.B. in Bemerkungen auch ein Semikolon möglich ist.

Textfelder werden nicht durch (doppelte) Anführungsstriche begonnen und beendet.

Datumsfelder müssen als TT.MM.JJJJ vorliegen.

Die Spalten (Felder) müssen genau in der vorgegebenen Reihenfolge erscheinen.

Jede Datei enthält eine Header-Zeile mit den Bezeichnungen der einzelnen „Spalten“, diese dient aber nur zur Information und wird ansonsten beim Import nicht verwendet. Die einzelnen Bezeichnungen in der Header-Zeile müssen auch mit „\|“-Zeichen getrennt sein.

Bei leeren Feldern muss dennoch ein Trennzeichen „\|“ ausgegeben werden, d.h. jede Zeile muss exakt die Anzahl der erwarteten Trennzeichen enthalten

Bei den einzelnen Spalten ist angegeben, ob diese leer sein dürfen. Dabei treten folgende Zustände auf:

- Nein: Spalte darf nicht leer sein, d.h. muss einen (gültigen) Wert enthalten. Ein Eintrag wird aus datentechnischen Gründen benötigt.

<!-- -->

- (Ja): Spalte darf aus datentechnischen Gründen leer sein, für die Statistik-Erhebung wird aber u.U. ein entsprechender Eintrag in SchILD-NRW benötigt. Wenn der Eintrag in der Import-Datei leer ist, muss er später in SchILD-NRW nachgepflegt werden.

<!-- -->

- Ja: Spalte darf leer sein

Bei den einzelnen Spalten ist jeweils der erwartete Datentyp angegeben:

- Text(n): Text mit einer maximalen Länge von n Zeichen (Beispiel: Text(20) bedeutet, dass der Spalteninhalt maximal 20 Zeichen umfassen darf)

<!-- -->

- Integer: Ganzzahl

<!-- -->

- Float: Gleitkommazahl (es kann entweder ein Komma oder ein Punkt als dezimales Trennzeichen verwendet werden)

Es ist nicht unbedingt notwendig, dass alle der nachfolgend beschriebenen Dateien in einem Zug importiert werden, d.h. es ist auch möglich, einzelne Dateien nachträglich zu importieren. Voraussetzung dafür ist aber, dass „übergeordnete“ Informationen, auf die in der jeweiligen Importdatei verwiesen wird, bereits in der Datenbank von SchILD-NRW existieren (z.B. durch einen vorangegangenen Import). Wenn z.B. Lernabschnitts- und Leistungsdaten separat importiert werden sollen, müssen die folgenden Daten bereits vorhanden sein:

- Die Basisdaten der Schüler, deren Lernabschnitts- und Leistungsdaten importiert werden sollen

<!-- -->

- Die Lehrkräfte, die als Klassen- oder Fachlehrer eingetragen sind

<!-- -->

- Die Fächer, auf die in den Leistungsdaten verwiesen wird

<!-- -->

- Die Kurse, auf die in den Leistungsdaten verwiesen wird

<!-- -->

- Die Jahrgänge und Klassen, auf die in den Lernabschnittsdaten verwiesen wird

Falls übergeordnete Daten nicht vorhanden sind, wird der entsprechende Datensatz nicht importiert und eine Meldung wird im Importprotokoll ausgegeben.

- Schüler-Basisdaten und Schüler-Zusatzdaten können auch additiv importiert werden, d.h. Daten, die beim Erstimport noch nicht vorhanden waren, können in einem Zweitimport gefüllt werden. Falls bei einem Zweitimport Informationen leer sind, die in SchILD-NRW schon vorhanden sind, so werden diese nicht verändert.

------------------------------------------------------------------------

---

Quelle: [Vorbemerkungen-Schnittstelle – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Vorbemerkungen-Schnittstelle&oldid=1817)
