---
title: "Mit KM2 in der Konferenz arbeiten"
---

<a id="modulbenutzung"></a>

# Mit KM2 in der Konferenz arbeiten

Diese Anleitung erklärt die Arbeit im Konferenzmodul KM2 nach der Einrichtung. Sie beschreibt die Anzeige der Leistungsdaten und die Bedienung während einer Konferenz.

![KM2_Bildschirmaufbau_01](/bilder/tools/weitere/km2-bildschirmaufbau-01.png)

*Bildschirmaufbau*

<a id="Bildschirmdarstellung"></a>

## Bildschirmdarstellung

Der Bildschirmaufbau gliedert sich in vier Bereiche:

- Den meisten Platz nehmen die Leistungsdaten ein. Vertikal sind die Schülernamen Zeile für Zeile aufgetragen und horizontal die zuvor ausgewählten Unterrichtsfächer. Gelbe Markierungen markieren die Daten eines Schüler beziehungsweise eines Faches.
- Am oberen Fensterrand befindet sich das Hauptmenü, mit dessen Hilfe alle Programmfunktionen aufgerufen werden können.
- An das Menü schließen sich eine Symbolleiste an, mit deren Hilfe die wichtigsten Programmfunktionen aktiviert werden können, und ein Informationsbereich: Schuljahr, Lernabschnitt, Informationen zum markierten Fach
- Am unteren Bildschirmrand befindet sich eine Statuszeile

Die Elemente im Einzelnen:

- **(1)**: Die Namen des gerade markierten Schülers, des Faches, des Kurses und des Fachlehrers sind hervorgehoben.
- **(2)**: Spaltenbeschriftungen:

<!-- -->

- Unterrichtsfächer
- Ersatzfächer beginnen mit einem "#"

Hinweis: Kursbezeichnungen werden gekürzt, wenn die Kursbezeichnung die Bezeichnung des Faches (zzgl. eines Bindestriches) enthalten sollte. Bespiel: Unterrichtsfach: "WP1". Der Kurs "WP1-NW" wird als "NW" dargestellt und der Kurs "WP1-L6" als "L6".

- Zusatzinformationen (zum Beispiel)

<!-- -->

- Gesamtfehlstunden (FS-G) und davon unentschuldigt (FS-ue)
- Durchschnittsnote (DS.)
- Grundschulempfehlung (GS.)

<!-- -->

- siehe [Anzeige und Fächerauswahl](/hilfe/zusatzprogramme/km2-parameter-allgemein)

<!-- -->

- **(3)**: gewählte Klasse und Klassenlehrer
- **(4)**: gewähltes Schuljahr und Lernabschnitt

Hinweis: Das aktuelle SchILD-NRW Schuljahr und der aktuelle Lernabschnitt sind gelb hinterlegt. Nur in diesem Abschnitt können Leistungsdaten bearbeitet werden (Ausnahme: Der Benutzer mit dem Loginnamen "Admin" kann alle Leistungsdaten ändern.)

- **(5)**: Schnellwahlleiste zum Aufruf der wichtigsten Programmfunktionen.
- **(6)**: Hauptmenü, mit dessen Hilfe alle Programmfunktionen aufgerufen werden können.
- **(7)**: Gelbe Markierungen markieren die Daten eines Schülers beziehungsweise eines Faches.
- **(8)**: Statuszeile (von links nach rechts):

<!-- -->

- gewählte Klasse
- aktuelles Datum / Uhrzeit
- angemeldeter Programmbenutzer
- Status der Datenbank: geöffnet / geschlossen
- gewähltes Schuljahr / Lernabschnitt
- Name der automatischen geladenen Profildatei (beziehungsweise "Profildatei: Nicht gefunden", wenn die entsprechende Profildatei vom Programm nicht gefunden wurde)
- Dateiname der SchILD-Datenbank (beziehungsweise der entsprechenden UDL-Datei) - siehe [Datenbank und Administration](/hilfe/zusatzprogramme/km2-parameter-administration).

<a id="Datenbearbeitung"></a>

## Datenbearbeitung

Die Bearbeitungsmöglichkeiten beschränken sich auf Leistungsdaten (die *normalen Noten*) und die unterschiedlichen Bemerkungen, die jedem Schüler zugeordnet werden können (siehe → [**KM<sup>2</sup>** - Parameter - Allgemein](/hilfe/zusatzprogramme/km2-parameter-allgemein)). Die Eingabemöglichkeit lässt sich bei der Parameterverwaltung ein- und ausschalten.

<a id="Leistungsdaten"></a>

### Leistungsdaten

- Leistungsdaten tippen Sie einfach in der jeweiligen Fachspalte ein.
- Wenn Sie als Admin angemeldet sind, so können Sie alle Leistungsdaten verändern, nicht nur die des aktuellen Abschnitts.
- Alle normalen Benutzer (das sind Koordinatoren der SchILD-Klassengruppen) können die Noten des aktuellen SchILD-Abschnitts ihrer Klassen editieren und alle anderen Leistungsdaten einsehen. Diese Einsichtmöglichkeit beschränkt sich auf die Klassen, die ihnen als Koordinator in SchILD zugeordnet worden sind (siehe [KM2-Benutzerrechte](/administration/benutzer-einstellungen/benutzerverwaltung)).

**Hinweise:**:

- Wenn Sie in einer Fachspalte die Taste \[Einfg\] drücken, erscheint eine Notenauswahlliste. KM2 berücksichtigt die globale SchILD-Einstellung "Erweiterte Noten in Sek. I zulassen".

![KM2_NotenAuswahl](/bilder/tools/weitere/km2-notenauswahl.png)

*Notenauswahlliste*

- Wenn Sie in einer Fachspalte die Taste \[Entf\] drücken, wird der Noteneintrag gelöscht.

<a id="Bemerkungsdaten"></a>

### Bemerkungsdaten

![KM2_BemerkungsFelder](/bilder/tools/weitere/km2-bemerkungsfelder.png)

*Bemerkungsarten*

Es werden - wie auch in SchILD-NRW - vier verschiedene Bemerkungsarten unterschieden:

1.  **Fachbemerkungen**: Texte, die einem einzelnen Unterrichtsfach zugeordnet sind.
2.  **Zeugnisbemerkungen**: Text, der einem Schüler in einem bestimmten Lernabschnitt als allgemeine Zeugnisbemerkung zugeordnet wird.
3.  Bemerkungen zum Arbeits- und Sozialverhalten (**AuS-Bemerkung**): Text, der einem Schüler in einem bestimmten Lernabschnitt als Bemerkung im Bereich Arbeits- und Sozialverhalten zugeordnet wird.
4.  Bemerkungen zum außerunterrichtlichen Engagement (**AuE-Bemerkung**): Text, der einem Schüler in einem bestimmten Lernabschnitt als Bemerkung im Bereich Außerunterrichtliches Engagement zugeordnet wird.

Wenn Sie eine der Bemerkungen 2 - 4 bearbeiten wollen, so rufen Sie den entsprechenden Menüpunkt (oder die zugeordnete Tastenkombination) auf und editieren den Bemerkungstext im Textfenster.

![KM2_ZeugnisBemerkungen](/bilder/tools/weitere/km2-zeugnisbemerkungen.png)

*Texteditor für Zeugnisbemerkung*

Liegen Bemerkungen aus den Bereichen 2 - 4 vor, so wird das neben dem Schülernamen markiert, dass

- **\<Z\>**: eine Zeugnisbemerkung,
- **\<E\>**: eine Bemerkung zum außerunterrichtlichen Engagement,
- **\<A\>**: eine Bemerkung zum Arbeits- und Sozialverhalten

eingegeben wurde.

![KM2_BemerkungsMarkierung](/bilder/tools/weitere/km2-bemerkungsmarkierung.png)

*Schüler mit Bemerkung*

<a id="Protokolldaten"></a>

### Protokolldaten

Die Änderungen an den Leistungsdaten - sowohl Noten als auch Bemerkungstexte werden protokolliert. Um eine mögliche Weiterverwendung zu vereinfachen, so sind die Protokolldaten in einem HTML-Dokument abgespeichert. Es werden zwei Arten von Protokolldateien unterschieden und vom Programm automatisch gepflegt:

- In der Datei **Prot.html** im Ordner \Prot werden alle Änderungen protokolliert.
- In der Datei **KKK_Prot.html** (wobei KKK die jeweils aktive Klasse identifiziert, zum Beispiel 06a_Prot.html) werden alle Änderungen einer bestimmten Klasse dokumentiert.\

<!-- -->

-

  ![allgemeine Protokolldatei](/bilder/tools/weitere/km2-protokolldaten-allgemein.png)





  allgemeine Protokolldatei



-

  ![Klassenspezifische Protokolldatei](/bilder/tools/weitere/km2-protokolldaten-klasse.png)





  Klassenspezifische Protokolldatei

---

Quelle: [Modulbenutzung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Modulbenutzung&oldid=2986)
