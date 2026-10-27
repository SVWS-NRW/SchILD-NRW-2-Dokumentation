---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Prognos:Hauptfenster"
---

# Prognos:Hauptfenster

Gesicherte Wiki-Seite · Namensraum 0 · Version 5111 · Stand 2021-11-27.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/prognos-hauptfenster) · [Originaldaten herunterladen](/dateien/quellen/seite-1249.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
== Programmstart ==

Nach dem Programmstart wird als erstes der Analysemodus ausgewählt. Dabei stehen folgende Modi zur Verfügung:

[[File:PM2 Auswahl 01.png|border=20|links|]]
<br clear=all>

# [[Prognos:Analyseverfahren: Einzelfall|Analyse eines einzelnen Notenbildes]]
# [[Prognos:Analyseverfahren: Klasse|Leistungsdaten einer SCHILD-Klasse einlesen]]
# [[Prognos:Analyseverfahren: Datei|Leistungsdaten einer PM2-Notendatei einlesen]]


Wird die Option "Abbrechen" gewählt, so kann in dem Programm weiter gearbeitet werden. Eine Weiterarbeit kann dann aber wiederum nur durch eine Auswahl der o.g. Punkte, dann aber im Menüband des Programms, erfolgen.

== Menü ==

Im Menüband finden sich folgende Einträge:

* Datei
* Prognose
* SchILD
* Zusätze
* Hilfe

=== Datei ===

Unter diesem Punkt finden sich zwei Symbole:

Zu Beenden des Programms:

[[File:PM2 beenden.png|border=20|links|]]
<br clear=all>


Zum Speichern der aktuellen Daten:

[[File:PM2 Speichern unter 01.png|border=20|links|]]
<br clear=all>


Ein Klick auf das Symbol öffnet ein Explorer-Fenster, hier kann dann die Datei gespeichert werden. Standardmäßig wird die Datei unverschlüsselt gespeichert.
Der kleine Pfeil nach unten (im Bild rechts) ermöglicht eine weitere Auswahl:

[[File:PM 2 Speichern verschlüsselt.png|border=20|links|]]
<br clear=all>

* unverschlüsselt speichern
* verschlüsselt speichern
* JSON-Export

Wird die Verschlüsselung gewählt, so öffnet sich das Passwort-Fenster:

[[File:PM2 Speichern unter 02.png|border=20|links|]]
<br clear=all>

Beim JSON-Export wird die Datei unter dem Namen Test1.json in der Zwischenablage gespeichert:

[[File:PM2 Speichern unter 03.png|border=20|links|]]
<br clear=all>

=== Prognose ===

Im Bereich Prognose erscheinen im Symbolband drei bzw. vier Bereiche:

* Analyse
* Lernabschnitt (je nach Analyseverfahren)
* Optionen
* Anzeige

==== Analyse ====

[[File:PM2 Analyse.png|border=20|links|]]
<br clear=all>

Hierüber können die schon beim Programmstart angezeigten Möglichkeiten der Analyse erneut ausgewählt bzw. geändert werden:


==== Lernabschnitt ====

[[File:PM2 Lernabschnitt.png|border=20|links|]]
<br clear=all>

Dieser Bereich wird eingeblendet, wenn als Analyseverfahren "Klasse" ausgewählt worden ist. Es besteht die Möglichkeit, das Schuljahr und den Lernabschnitt zu ändern. Nach einer Änderung hier werden die Daten unmittelbar eingelesen. Mittels "Einlesen" können die selektierten Daten aus der verknüpften SchILD-Datenbank erneut eingelesen (ermöglicht paralleles Arbeiten zwischen SchILD und Prognos. Denkbar z.B. wenn LB-Noten für die HA10-Berechnung nachgetragen werden sollen, und Prognos diese direkt wieder einlesen kann für eine erneute Berechnung).

==== Optionen ====

[[File:PM2 Optionen.png|border=20|links|]]
<br clear=all>

* Berechnen
:- Löst die Abschlussberechnung bei den selektierten Datensätzen aus.
* Export
:- Ermöglicht den Export der selektierten Daten in verschiedenen Formaten.
* Ergebnisse
:- Öffnet einen Text-Editor-Fenster mit den Ergebnissen der Abschlussberechnung.
* Drucken
:- Öffnet den Druck-Dialog.
* Formulardruck
:- Öffnet den Report-Explorer und ermöglicht damit den Druck der Daten mittels entsprechender Reports.
* Übersicht
:- Öffnet ein Übersichtsfenster zur Darstellung der Ergebnisse als tabellarische Summe und als Diagramm. Aus diesem Fenster ist weiterhin ein Export dieser Daten möglich sowie deren Druck.
* Speichern
:- Mittels Speichern werden die eingetragenen Abschlüsse in der SchILD-Datenbank gespeichert. Dies ist nur im aktuellen Abschnitt der Datenbank möglich!

==== Anzeige ====

[[File:PM2 Anzeige.png|border=20|links|]]
<br clear=all>

Diese Auswahlmöglichkeiten verändern das Fenster bzw. öffnen ein weiteres.

* Prognosefenster
:- Es öffnet sich das Prognosefenster, dieses ist verschiebbar und zeigt immer den ausgewählten Schüler an.
* Prognoseergebnis
:- Im rechten Teil erscheint ein Bereich mit der Anzeige des Ergebnisses der Abschlussberechnung (identisch mit dem Ergebnis im Text-Editor, s.o.).
* Farbmodus
:- Aktivieren oder Deaktivieren des Farbmodus, der unter Zusätze näher definiert werden kann.
* Suchen
:- Einblenden eines Suchfensters am unteren Fensterrand.
* Autofilter
:- Einblenden der Autofilter für die einzelnen Spalten.
* leere Spalten
:- Durch das Ausblenden leerer Spalten wird die Anzeige komprimiert (sinnvoll z.B. bei der Anzeige des Prognoseergebnisses).

=== SchILD ===

Bild

==== SchILD-Zugriff ====

Beim Klick auf "SchILD-Zugriff" erscheint das aus dem Menüpunkt [[Prognos:Programmstart|Programmstart]] bekannte Fenster. 

==== Benutzer anmelden ====

Ebenso erscheint beim Klick auf "Benutzer anmelden" ein bekanntes Fenster, nämlich das unter [[Prognos:Programmstart|Programmstart]] zuletzt beschrieben Fenster für die Zugangskontrolle des Programms.

=== Zusätze ===

Bild

Dieser Menüpunkt enthält nur den Eintrag Einstellungen.

Bild

==== Allgemein ====

===== Allgemeine Einstellungen =====

Bei den allgemeinen Einstellungen sind einige voreingestellt:

* Löschen bestätigen
:- Das Löschen von Eingaben muss bestätigt werden.
* Versetzungstabelle
:- Beim Schuljahreswechsel wird die Versetzungstabelle in SchILD berücksichtigt.
* Nachprüfungen automatisch
:- Mögliche Nachprüfungen werden automatisch berechnet.
* Gruppenprozesse bestätigen
:- Die Ausführung von Gruppenprozessen muss bestätigt werden.
* Prognose: Name, Datum ausgeben
:- Name und Datum der Prognose wird mit ausgegeben

Es ist sinnvoll, diese Einstellungen unverändert zu lassen.

Weitere Einstellungen können getätigt werden:

* Prognose ausführlich
* Nachprüfungen ausführlich
* Sonderregelungen

Keine dieser Optionen ist notwendig, die Option Sonderregelungen bezieht sich auf die Sonderregelungen des Schuljahres 2019/20.

Beim Feld "Zusätzliche Fremdsprachenfächer" können Fremdsprachen eingetragen werden, die als normales Unterrichtsfach unterrichtet werden. Diese werden bei der Abschlussprüfung HA bzw. HA10 nicht berücksichtigt.

===== Startmodus =====

Standard ist Auswahl, dass bedeutet, beim Programmstart wird mittels Dialogfenster gefragt, welches Prognoseverfahren verwendet werden soll. Wird nur eins regelmäßig angewendet, so kann dieses hier als Standard eingestellt werden.

===== Reihenfolge =====

Als Standard ist die Reihenfolge HA bis MSAQ eingestellt, diese Reihenfolge kann aber auch umgekehrt werden.

===== Bedienungsanleitung =====
```
