---
title: "Analyseverfahren in PM2 auswählen"
---

<a id="prognos-hauptfenster"></a>

# Analyseverfahren in PM2 auswählen

Im Hauptfenster von PM2 wählen Sie aus, welche Daten untersucht werden sollen: einen Einzelfall, eine Klasse oder eine Notendatei. Die folgenden Abschnitte erklären die unterschiedlichen Zugänge.

<a id="Programmstart"></a>

## Programmstart

Nach dem Programmstart wird als erstes der Analysemodus ausgewählt. Dabei stehen folgende Modi zur Verfügung:

![PM2_Auswahl_01](/bilder/tools/pm2/pm2-auswahl-01.png)

1.  [Analyse eines einzelnen Notenbildes](/hilfe/zusatzprogramme/prognos-analyseverfahren-einzelfall)
2.  [Leistungsdaten einer SCHILD-Klasse einlesen](/hilfe/zusatzprogramme/prognos-analyseverfahren-klasse)
3.  [Leistungsdaten einer PM2-Notendatei einlesen](/hilfe/zusatzprogramme/prognos-analyseverfahren-datei)

Wird die Option "Abbrechen" gewählt, so kann in dem Programm weiter gearbeitet werden. Eine Weiterarbeit kann dann aber wiederum nur durch eine Auswahl der o.g. Punkte, dann aber im Menüband des Programms, erfolgen.

<a id="Menü"></a>
<a id="Men.C3.BC"></a>

## Menü

Im Menüband finden sich folgende Einträge:

- Datei
- Prognose
- SchILD
- Zusätze
- Hilfe

<a id="Datei"></a>

### Datei

Unter diesem Punkt finden sich zwei Symbole:

Zu Beenden des Programms:

![PM2_beenden](/bilder/tools/pm2/pm2-beenden.png)

Zum Speichern der aktuellen Daten:

![PM2_Speichern_unter_01](/bilder/tools/pm2/pm2-speichern-unter-01.png)

Ein Klick auf das Symbol öffnet ein Explorer-Fenster, hier kann dann die Datei gespeichert werden. Standardmäßig wird die Datei unverschlüsselt gespeichert. Der kleine Pfeil nach unten (im Bild rechts) ermöglicht eine weitere Auswahl:

![PM_2_Speichern_verschlüsselt](/bilder/tools/pm2/pm-2-speichern-verschlusselt.png)

- unverschlüsselt speichern
- verschlüsselt speichern
- JSON-Export

Wird die Verschlüsselung gewählt, so öffnet sich das Passwort-Fenster:

![PM2_Speichern_unter_02](/bilder/tools/pm2/pm2-speichern-unter-02.png)

Beim JSON-Export wird die Datei unter dem Namen Test1.json in der Zwischenablage gespeichert:

![PM2_Speichern_unter_03](/bilder/tools/pm2/pm2-speichern-unter-03.png)

<a id="Prognose"></a>

### Prognose

Im Bereich Prognose erscheinen im Symbolband drei beziehungsweise vier Bereiche:

- Analyse
- Lernabschnitt (je nach Analyseverfahren)
- Optionen
- Anzeige

<a id="Analyse"></a>

#### Analyse

![PM2_Analyse](/bilder/tools/pm2/pm2-analyse.png)

Hierüber können die schon beim Programmstart angezeigten Möglichkeiten der Analyse erneut ausgewählt beziehungsweise geändert werden:

<a id="Lernabschnitt"></a>

#### Lernabschnitt

![PM2_Lernabschnitt](/bilder/tools/pm2/pm2-lernabschnitt.png)

Dieser Bereich wird eingeblendet, wenn als Analyseverfahren "Klasse" ausgewählt worden ist. Es besteht die Möglichkeit, das Schuljahr und den Lernabschnitt zu ändern. Nach einer Änderung hier werden die Daten unmittelbar eingelesen. Mittels "Einlesen" können die ausgewählten Daten aus der verknüpften SchILD-Datenbank erneut eingelesen (ermöglicht paralleles Arbeiten zwischen SchILD und Prognos. Denkbar zum Beispiel wenn LB-Noten für die HA10-Berechnung nachgetragen werden sollen, und Prognos diese direkt wieder einlesen kann für eine erneute Berechnung).

<a id="Optionen"></a>

#### Optionen

![PM2_Optionen](/bilder/tools/pm2/pm2-optionen.png)

- Berechnen

\- Löst die Abschlussberechnung bei den ausgewählten Datensätzen aus.

- Export

\- Ermöglicht den Export der ausgewählten Daten in verschiedenen Formaten.

- Ergebnisse

\- Öffnet einen Text-Editor-Fenster mit den Ergebnissen der Abschlussberechnung.

- Drucken

\- Öffnet den Druck-Dialog.

- Formulardruck

\- Öffnet den Report-Explorer und ermöglicht damit den Druck der Daten mittels entsprechender Reports.

- Übersicht

\- Öffnet ein Übersichtsfenster zur Darstellung der Ergebnisse als tabellarische Summe und als Diagramm. Aus diesem Fenster ist weiterhin ein Export dieser Daten möglich sowie deren Druck.

- Speichern

\- Mittels Speichern werden die eingetragenen Abschlüsse in der SchILD-Datenbank gespeichert. Dies ist nur im aktuellen Abschnitt der Datenbank möglich!

<a id="Anzeige"></a>

#### Anzeige

![PM2_Anzeige](/bilder/tools/pm2/pm2-anzeige.png)

Diese Auswahlmöglichkeiten verändern das Fenster beziehungsweise öffnen ein weiteres.

- Prognosefenster

\- Es öffnet sich das Prognosefenster, dieses ist verschiebbar und zeigt immer den ausgewählten Schüler an.

- Prognoseergebnis

\- Im rechten Teil erscheint ein Bereich mit der Anzeige des Ergebnisses der Abschlussberechnung (identisch mit dem Ergebnis im Text-Editor, s.o.).

- Farbmodus

\- Aktivieren oder Deaktivieren des Farbmodus, der unter Zusätze näher definiert werden kann.

- Suchen

\- Einblenden eines Suchfensters am unteren Fensterrand.

- Autofilter

\- Einblenden der Autofilter für die einzelnen Spalten.

- leere Spalten

\- Durch das Ausblenden leerer Spalten wird die Anzeige komprimiert (sinnvoll zum Beispiel bei der Anzeige des Prognoseergebnisses).

<a id="SchILD"></a>

### SchILD

Bild

<a id="SchILD-Zugriff"></a>

#### SchILD-Zugriff

Beim Klick auf "SchILD-Zugriff" erscheint das aus dem Menüpunkt [Programmstart](/hilfe/zusatzprogramme/prognos-programmstart) bekannte Fenster.

<a id="Benutzer_anmelden"></a>

#### Benutzer anmelden

Ebenso erscheint beim Klick auf "Benutzer anmelden" ein bekanntes Fenster, nämlich das unter [Programmstart](/hilfe/zusatzprogramme/prognos-programmstart) zuletzt beschrieben Fenster für die Zugangskontrolle des Programms.

<a id="Zusätze"></a>
<a id="Zus.C3.A4tze"></a>

### Zusätze

Bild

Dieser Menüpunkt enthält nur den Eintrag Einstellungen.

Bild

<a id="Allgemein"></a>

#### Allgemein

<a id="Allgemeine_Einstellungen"></a>

##### Allgemeine Einstellungen

Bei den allgemeinen Einstellungen sind einige voreingestellt:

- Löschen bestätigen

\- Das Löschen von Eingaben muss bestätigt werden.

- Versetzungstabelle

\- Beim Schuljahreswechsel wird die Versetzungstabelle in SchILD berücksichtigt.

- Nachprüfungen automatisch

\- Mögliche Nachprüfungen werden automatisch berechnet.

- Gruppenprozesse bestätigen

\- Die Ausführung von Gruppenprozessen muss bestätigt werden.

- Prognose: Name, Datum ausgeben

\- Name und Datum der Prognose wird mit ausgegeben

Es ist sinnvoll, diese Einstellungen unverändert zu lassen.

Weitere Einstellungen können getätigt werden:

- Prognose ausführlich
- Nachprüfungen ausführlich
- Sonderregelungen

Keine dieser Optionen ist notwendig, die Option Sonderregelungen bezieht sich auf die Sonderregelungen des Schuljahres 2019/20.

Beim Feld "Zusätzliche Fremdsprachenfächer" können Fremdsprachen eingetragen werden, die als normales Unterrichtsfach unterrichtet werden. Diese werden bei der Abschlussprüfung HA beziehungsweise HA10 nicht berücksichtigt.

<a id="Startmodus"></a>

##### Startmodus

Standard ist Auswahl, dass bedeutet, beim Programmstart wird mittels Dialogfenster gefragt, welches Prognoseverfahren verwendet werden soll. Wird nur eins regelmäßig angewendet, so kann dieses hier als Standard eingestellt werden.

<a id="Reihenfolge"></a>

##### Reihenfolge

Als Standard ist die Reihenfolge HA bis MSAQ eingestellt, diese Reihenfolge kann aber auch umgekehrt werden.

<a id="Bedienungsanleitung"></a>

##### Bedienungsanleitung

---

Quelle: [Prognos:Hauptfenster – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Prognos%3AHauptfenster&oldid=5111)
