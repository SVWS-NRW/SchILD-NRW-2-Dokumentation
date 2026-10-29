---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Modulbenutzung"
---

# Modulbenutzung

Gesicherte Wiki-Seite · Namensraum 0 · Version 2986 · Stand 2015-04-16.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/modulbenutzung) · [Originaldaten herunterladen](/dateien/quellen/seite-575.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
[[Datei:KM2_Bildschirmaufbau_01.png|mini|500px|Bildschirmaufbau]]
==Bildschirmdarstellung==
Der Bildschirmaufbau gliedert sich in vier Bereiche:
* Den meisten Platz nehmen die Leistungsdaten ein. Vertikal sind die Schülernamen Zeile für Zeile aufgetragen und horizontal die zuvor ausgewählten Unterrichtsfächer. Gelbe Markierungen markieren die Daten eines Schüler bzw. eines Faches.
* Am oberen Fensterrand befindet sich das Hauptmenü, mit dessen Hilfe alle Programmfunktionen aufgerufen werden können.
* An das Menü schließen sich eine Symbolleiste an, mit deren Hilfe die wichtigsten Programmfunktionen aktiviert werden können, und ein Informationsbereich: Schuljahr, Lernabschnitt, Informationen zum markierten Fach
* Am unteren Bildschirmrand befindet sich eine Statuszeile

Die Elemente im Einzelnen:

* '''<span style="background-color:lightblue">(1)</span>''': Die Namen des gerade markierten Schülers, des Faches, des Kurses und des Fachlehrers sind hervorgehoben.
* '''<span style="background-color:lightblue">(2)</span>''': Spaltenbeschriftungen:
::* Unterrichtsfächer 
::* Ersatzfächer beginnen mit einem "#"
::  Hinweis: Kursbezeichnungen werden gekürzt, wenn die Kursbezeichnung die Bezeichnung des Faches (zzgl. eines Bindestriches) enthalten sollte. Bespiel: Unterrichtsfach: "WP1". Der Kurs "WP1-NW" wird als "NW" dargestellt und der Kurs "WP1-L6" als "L6".
::* Zusatzinformationen (z.B.)
:::* Gesamtfehlstunden (FS-G) und davon unentschuldigt (FS-ue)
:::* Durchschnittsnote (DS.)
:::* Grundschulempfehlung (GS.)
::* siehe [[KM2 - Parameter - Allgemein]]
* '''<span style="background-color:lightblue">(3)</span>''': gewählte Klasse und Klassenlehrer
* '''<span style="background-color:lightblue">(4)</span>''': gewähltes Schuljahr und Lernabschnitt
:: Hinweis: Das aktuelle SchILD-NRW Schuljahr und der aktuelle Lernabschnitt sind gelb hinterlegt. Nur in diesem Abschnitt können Leistungsdaten bearbeitet werden (Ausnahme: Der Benutzer mit dem Loginnamen "Admin" kann alle Leistungsdaten ändern.)
* '''<span style="background-color:lightblue">(5)</span>''': Schnellwahlleiste zum Aufruf der wichtigsten Programmfunktionen.
* '''<span style="background-color:lightblue">(6)</span>''': Hauptmenü, mit dessen Hilfe alle Programmfunktionen aufgerufen werden können.
* '''<span style="background-color:lightblue">(7)</span>''': Gelbe Markierungen markieren die Daten eines Schülers bzw. eines Faches.
* '''<span style="background-color:lightblue">(8)</span>''': Statuszeile (von links nach rechts):
:* gewählte Klasse
:* aktuelles Datum / Uhrzeit
:* angemeldeter Programmbenutzer
:* Status der Datenbank: geöffnet / geschlossen
:* gewähltes Schuljahr / Lernabschnitt
:* Name der automatischen geladenen Profildatei (bzw. "Profildatei: Nicht gefunden", wenn die entsprechende Profildatei vom Programm nicht gefunden wurde)
:* Dateiname der SchILD-Datenbank (bzw. der entsprechenden UDL-Datei) - siehe [[KM2 - Parameter - Administration]].

== Datenbearbeitung ==
Die Bearbeitungsmöglichkeiten beschränken sich auf Leistungsdaten (die ''normalen Noten'') und die unterschiedlichen Bemerkungen, die jedem Schüler zugeordnet werden können (siehe → [[KM2 - Parameter - Allgemein|'''KM<sup>2</sup>''' - Parameter - Allgemein]]).
Die Eingabemöglichkeit lässt sich bei der Parameterverwaltung ein- und ausschalten.
=== Leistungsdaten ===
* Leistungsdaten tippen Sie einfach in der jeweiligen Fachspalte ein.
* Wenn Sie als Admin angemeldet sind, so können Sie alle Leistungsdaten verändern, nicht nur die des aktuellen Abschnitts. 
* Alle normalen Benutzer (das sind Koordinatoren der SchILD-Klassengruppen) können die Noten des aktuellen SchILD-Abschnitts ihrer Klassen editieren und alle anderen Leistungsdaten einsehen. Diese Einsichtmöglichkeit beschränkt sich auf die Klassen, die ihnen als Koordinator in SchILD zugeordnet worden sind (siehe [[Benutzerverwaltung]]).

'''Hinweise:''':
* Wenn Sie in einer Fachspalte die Taste [Einfg] drücken, erscheint eine Notenauswahlliste. KM2 berücksichtigt die globale SchILD-Einstellung "Erweiterte Noten in Sek. I zulassen".
[[Datei:KM2_NotenAuswahl.png|mini|200px|Notenauswahlliste]]
* Wenn Sie in einer Fachspalte die Taste [Entf] drücken, wird der Noteneintrag gelöscht.

=== Bemerkungsdaten ===
[[Datei:KM2_BemerkungsFelder.png|mini|200px|Bemerkungsarten]]
Es werden - wie auch in SchILD-NRW - vier verschiedene Bemerkungsarten unterschieden:
# '''Fachbemerkungen''': Texte, die einem einzelnen Unterrichtsfach zugeordnet sind.
# '''Zeugnisbemerkungen''': Text, der einem Schüler in einem bestimmten Lernabschnitt als allgemeine Zeugnisbemerkung zugeordnet wird.
# Bemerkungen zum Arbeits- und Sozialverhalten ('''AuS-Bemerkung'''): Text, der einem Schüler in einem bestimmten Lernabschnitt als Bemerkung im Bereich Arbeits- und Sozialverhalten zugeordnet wird.
# Bemerkungen zum außerunterrichtlichen Engagement ('''AuE-Bemerkung'''): Text, der einem Schüler in einem bestimmten Lernabschnitt als Bemerkung im Bereich Außerunterrichtliches Engagement zugeordnet wird.

Wenn Sie eine der Bemerkungen 2 - 4 bearbeiten wollen, so rufen Sie den entsprechenden Menüpunkt (oder die zugeordnete Tastenkombination) auf und editieren den Bemerkungstext im Textfenster.
[[Datei:KM2_ZeugnisBemerkungen.png|mini|200px|Texteditor für Zeugnisbemerkung]]
Liegen Bemerkungen aus den Bereichen 2 - 4 vor, so wird das neben dem Schülernamen markiert, dass
* '''<Z>''': eine Zeugnisbemerkung,
* '''<E>''': eine Bemerkung zum außerunterrichtlichen Engagement,
* '''<A>''': eine Bemerkung zum Arbeits- und Sozialverhalten

eingegeben wurde.

[[Datei:KM2_BemerkungsMarkierung.png|mini|200px|Schüler mit Bemerkung]]

=== Protokolldaten ===
Die Änderungen an den Leistungsdaten - sowohl Noten als auch Bemerkungstexte werden protokolliert. Um eine mögliche Weiterverwendung zu vereinfachen, so sind die Protokolldaten in einem HTML-Dokument abgespeichert.
Es werden zwei Arten von Protokolldateien unterschieden und vom Programm automatisch gepflegt:
* In der Datei '''Prot.html''' im Ordner \Prot werden alle Änderungen protokolliert.
* In der Datei '''KKK_Prot.html''' (wobei KKK die jeweils aktive Klasse identifiziert, z.B. 06a_Prot.html) werden alle Änderungen einer bestimmten Klasse dokumentiert.<br>

<gallery>
KM2_Protokolldaten_allgemein.png|allgemeine Protokolldatei
KM2_Protokolldaten_Klasse.png|Klassenspezifische Protokolldatei
</gallery>
 
[[Kategorie:Konferenzmodul KM2]]
```
