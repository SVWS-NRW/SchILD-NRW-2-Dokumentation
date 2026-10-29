---
title: "Anzeige und Fächerauswahl in KM2 anpassen"
---

<a id="km2-parameter-allgemein"></a>

# Anzeige und Fächerauswahl in KM2 anpassen

![Km2_parameter_allgemein](/bilder/tools/km2/km2-parameter-allgemein.png)

<a id="Fächerliste_festlegen"></a>
<a id="F.C3.A4cherliste_festlegen"></a>

## Fächerliste festlegen

**siehe auch Videoanleitung: [Fächerauswahl mit KM2](http://www.schulorga.de/videoanleitungen/km2/fachauswahl.swf).**\
**(1)**: KM2 stellt die Leistungsdaten einer Klasse (Jahrgangsstufe, …) in einer Tabelle dar. Vertikal werden die Schüler gelistet und horizontal die Fächer bzw. Ersatzfächer.\
Welche Fächer gelistet werden, können Sie im Bereich **Fächer / Ersatzfächer** definieren. Pro Fach eine Zeile.\
**Ersatzfächer festlegen**\
Mitunter ist es nicht gewünscht, dass die in einer Klasse erteilten Unterrichtsfächer alle nebeneinander Spalte für Spalte aufgetragen werden, sondern die Fächer sollten vielmehr je nach Gruppenzugehörigkeit in einer gemeinsamen Gruppe zusammengefasst werden.\
Ein Beispiel aus einer Gesamtschule:\
Der WP-Unterricht an einer Schule wird differenziert in den Fächern WP1-NW (Wahlpflichtfach-Naturwissenschaft), WP1-F6 (Wahlpflichtfach-Französisch), WP1-DG (Wahlpflichtfach-Darstellen&Gestalten), usw. unterrichtet.\
Damit alle WP-Fächer in nur eine Spalte angezeigt werden, deklarieren Sie z.B. das Ersatzfach „**\#WP**" und tragen in der Spalte daneben alle zugehörigen Fächer ein.\

![KM2_parameter_allgemein_ersatzfaecher](/bilder/tools/km2/km2-parameter-allgemein-ersatzfaecher.png)

Zusätzlich werden im obigen Beispiel die Unterrichtsfächer KR, ER und PP in einer Spalte mit dem Ersatzfach **\#RE** zusammengefasst.

**Hinweis**:

- Ersatzfächer müssen zwingend mit einem "#" beginnen.
- Statt alle Fächer einzeln aufzulisten, lässt sich das Ersatzfach **\#WP** auch durch den Eintrag **WP1\*** als Ersatzfach vereinbaren ("\*" als *wildcard*).
- KM2 fügt automatisch in der Beschreibungsspalte

<!-- -->

- entweder die SchILD-Langbezeichnung des Faches hinzu oder
- das Wort "Ersatzfach" oder
- das Wort "nicht definiert", wenn das eingegebene Unterrichtsfach nicht in der SchILD-Fachliste enthalten ist und es sich offensichtlich nicht um ein Ersatzfach handelt (kein vorgestelltes "#").

**(2)**: **Eingabehilfen:**

- Neben der Liste mit den Fächern / Ersatzfächern stehen Ihnen vier "Schnellwahl-Button" zur Verfügung, um

<!-- -->

- Fächer aus der Liste der SchILD-Unterrichtsfächer zu übernehmen\

(oder durch einen Doppelklick auf die Fachspalte)

- Fächer aus der Liste der SchILD-Unterrichtsfächer für Ersatzfächer zu übernehmen\

(oder durch einen Doppelklick auf die Fachspalte für Ersatzfächer)

- in der Tabelle der Fächer / Ersatzfächer eine neue leere Zeile aufzunehmen\

(oder mit der Taste \<**Einfg**\>)

- in der Tabelle der Fächer / Ersatzfächer das markierte Fach zu löschen\

(oder mit der Taste \<**Ent**\>)

- Bei der Eingabe eines einzelnen Faches lässt sich mit Hilfe von \<Alt\>+\<↓\> ein einzelnes SchILD-Fach auswählen.
- Die Fachreihenfolge verändert man durch ein einfaches Drag&Drop in der ersten Spalte

<a id="Kompetenzmodus"></a>

## Kompetenzmodus

**(3)**: Sollten in Ihrer Schule Kompetenzen vergeben bzw. bewertet werden, so tragen Sie in der Gruppe „Kompetenzen" die notwendigen Parameter ein. Hierzu gehören:

- ob der Kompetenzmodus überhaupt aktiviert werden soll und
- die Angabe der Datei, die die Kompetenzdefinitionen enthält.

Näheres zum Thema „Kompetenzen" finden Sie im Kapitel „Verwaltung von Kompetenzen".

<a id="ASV-Modus"></a>

## ASV-Modus

**(4)**: KM2 hat eine eigene Verwaltung der Bemerkungen zum Arbeits- und Sozialverhalten. Sollten in Ihrer Schule Bemerkungen zum Arbeits- und Sozialverhalten vergeben werden, so tragen Sie in der Gruppe „ASV" die notwendigen Parameter ein. Hierzu gehören:

- ob der ASV-Modus überhaupt aktiviert werden soll,
- die Angabe der Datei, die die spezifischen Definitionen zum Arbeits- und Sozialverhalten enthält und
- das Fach, dem die fachbezogenen Bemerkungen zum Arbeits- und Sozialverhalten zugeordnet sind.

Näheres zum Thema „ASV-Modus" finden Sie im Kapitel „Verwaltung von Bemerkungen zum Arbeits- und Sozialverhalten".

<a id="Schülerlupe"></a>
<a id="Sch.C3.BClerlupe"></a>

## Schülerlupe

**(5)**: Neben der tabellarischen Leistungsdatenansicht der gesamten Lerngruppe bietet KM2 auch eine sogenannte Schülerlupe. Hier wird der einzelne Schüler mit all seinen aktuellen und bereits erteilten Leistungsdaten in den Mittelpunkt gestellt.\
Hier bei der Wahl der Parameter können Sie festlegen, welche Lernabschnitte zur Anzeige gebracht werden sollen.

<a id="Sonstige_Einstellungen"></a>

## Sonstige Einstellungen

![KM2_parameter_allgemein_sonst](/bilder/tools/km2/km2-parameter-allgemein-sonst.png)

**(6)**:

- **Noten in Farbe**: Minderleistungen und gute Leistungen können farblich markiert werden
- **Fehlstunden:** Möglichkeit der Anzeige der Summe der Fehlstunden
- **Notendurchschnitt:** Möglichkeit der Anzeige des Notendurchschnitts
- **Grundschulempfehlung:** Möglichkeit der Anzeige der Übergangsempfehlung für die Jahrgangsstufe 5
- **Automatische Profilauswahl**: Alle allgemeinen Einstellungen lassen sich in sogenannten Profildateien speichern bzw. aus diesen Profildateien wieder auslesen.\
  Wenn Sie die für den 5. Jahrgang zutreffenden Einstellungen in die Profildatei „JG_05.KMP" gespeichert haben und die für den 6. Jahrgang in die Profildatei „JG_06.KMP", so wird beim Aufruf der Klasse 06d automatisch die Profildatei „JG_06.KMP" und beim Aufruf der Klasse 05a automatisch die Profildatei „JG_05.KMP" hinzugeladen, aber nur dann, wenn Sie die **Automatische Profilauswahl** aktiviert haben.\
  Die Profildateien werden im KM2-Unterordner „\Ini" abgelegt.
- **Automatische Fachauswahl**: Sie können neben der individuellen Fachauswahl und der Möglichkeit, Ersatzfächer zu definieren (siehe oben), sich auch dafür entscheiden, dass alle von einer Klasse in einem Lernabschnitt belegten Fächer angezeigt werden. Die Sortierung ergibt sich aus der Sortierung der SchILD-Unterrichtsfächer.
- **Protokollieren**: Wenn Sie diese Option aktiviert haben, werden alle Änderungen an den Leistungsdaten in einer Protokolldatei gespeichert. Pro Klasse wird eine Protokolldatei angelegt. Diese Protokolldateien werden im KM2-Unterordner „\Prot" abgelegt. Bezeichnung der Protokolldateien: KKK_Prot.Txt (z.B. 05a_Prot.Txt).
- **In DB speichern**: Wenn Sie diese Option aktiviert haben, werden alle Änderungen an den Leistungsdaten direkt in die SchILD-Datenbank gespeichert.
- **2-Spalten-Anzeige**: Pro angezeigtes Fach werden zwei Spalten erstellt. In der rechten Spalte steht die Note, in der linken Spalte werden der Fachlehrer, Kursinformationen, mögliche Zuweisungen usw. aufgelistet.\
  Wenn Sie die 2-Spalten-Anzeige deaktivieren, verbleibt nur noch die Notenspalte.\
  Alle fachrelevanten Informationen werden unabhängig von der Anzahl der Spalten immer oberhalb der Leistungstabelle angezeigt bzw. erscheinen in einem kleinen Informationsfenster, sobald Sie mit der Maus auf einen bestimmten Eintrag zeigen.
- **Prognose / Abschluss**: Besonders für Gesamtschulen dürfte es interessant sein, den erreichten bzw. prognostizierten Schulabschluss mitanzuzeigen.
- **SchILD-Farben benutzen**: Die in SchILD zugewiesenen Farben für Fachgruppen werden auch in KM2 verwendet werden.
- **Versetzungstabelle**: Bei der Umschaltung auf ein anderes Schuljahr kann jetzt voreingestellt werden, ob die Versetzungstabelle eingehalten wird oder jedes Mal der Klassenauswahldialog erscheint.\

**Beispiel**:\

Angezeigtes Schuljahr 2013 / Angezeigte Klasse 10a. Laut Versetzungstabelle der Schule (SchILD-Klassenversetzungstabelle) ist die Vorgängerklasse 09a. Wird nun das Schuljahr in KM2 auf 2012 gewechselt, wird automatisch die Klasse 09a in der Übersicht angezeigt, sofern bei den Parametern -\> Sonstige Einstellungen -\> Versetzungstabelle aktiviert ist.

- **Zeichengröße**: Legen Sie fest, mit welcher Schriftgröße die Leistungsdaten angezeigt werden. Die Anzeige der Informationen in der Schülerlupe wird von diesem Wert ebenfalls beeinflusst: Er vergrößert sich um das 1,5-fache gegenüber diesem hier ausgewählten Wert.

<a id="Profildateien"></a>

## Profildateien

**(7)**: Alle auf dieser Registerseite vorgenommenen Festlegungen können in eine (Profil-)Datei gespeichert werden bzw. aus einer Profildatei wieder eingelesen werden. Profildateien werden im KM2-Unterordner „\Ini" abgelegt. Eine besondere Bedeutung haben Profildateien, deren Dateinamen mit **JG\_** beginnen, gefolgt von einer Jahrgangsangabe (z.B. JG_09.KMP). Sollten Sie bei den **Sonstigen Einstellungen** das Auswahlfeld **Automatische Profilauswahl** aktiviert haben, so werden bei der Leistungsdatenanzeige einer Klasse des 9. Jahrgangs automatisch die Parameter aus der Profildatei JG_09.KMP geladen.

<a id="Dialog_beenden"></a>

## Dialog beenden

**(8)**: Klicken Sie auf "Speichern", um alle Parameter zu speichern und die Änderungen wirksam werden zu lassen, bzw. auf "Abbrechen", um alle möglichen Veränderungen an den Parametern zu verwerfen und um zur Leistungsanzeige zurückzukehren.

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-574) · [KM2 - Parameter - Allgemein – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=KM2+-+Parameter+-+Allgemein&oldid=2984)
