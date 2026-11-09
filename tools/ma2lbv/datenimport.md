---
title: "MA2LBV / MA2: Abrechnungsdaten importieren"
---

# Abrechnungsdaten importieren

MA2 unterstützt den Import aus SchILD-NRW 2 sowie zwei CSV-Schnittstellen für externe Abrechnungsdaten. Wählen Sie das Format passend zur erzeugenden Anwendung; die beiden Schnittstellen dürfen nicht durch beliebiges Umstellen von Spalten vermischt werden.

## CSV-Datei vorbereiten

Die Abrechnungsdatei beginnt mit einer Kopfzeile. Laut Anleitung unterscheidet das Programm darüber die beiden Formate; die Bezeichnungen werden nicht als freie Feldzuordnung beim Import verwendet. Die Spalten werden durch **Kommas** getrennt.

Auch leere Felder müssen ihr Trennzeichen behalten. Jede Datenzeile muss die zum gewählten Format passende Anzahl von Feldern enthalten.

Das erste beschriebene Format enthält Lehrkraft-Stammdaten und Angaben für genau sechs Monate. Zu den Stammdaten gehören Nachname, Vorname, Geburtsdatum und LBV-Personalnummer. Danach folgen für jeden Monat die zugehörigen Stunden und Merkmale. Der Monat wird im Format `MMJJ` angegeben.

## Datei einlesen und kontrollieren

1. Erzeugen Sie die Datei in der Anwendung, die die Mehrarbeitsdaten verwaltet.
2. Wählen Sie in MA2 **Abrechnung → Abrechnungsdatei festlegen** und die betreffende Datei.
3. Lesen Sie die Daten über **Abrechnung** ein.
4. Kontrollieren Sie Lehrkräfte, Zeitraum, Stunden und Merkmale in der angezeigten Übersicht.
5. Verwenden Sie beim **LBV-Export** zunächst die Möglichkeit zur Prüfung, bevor Sie die endgültigen Mitteilungen erzeugen.

Wenn keine passende Abrechnungsdatei vorliegt, können Sie stattdessen die Lehrkraftdaten aus SchILD-NRW 2 importieren und die Mehrarbeitsstunden im Programm ergänzen. Der dafür verwendete SchILD-NRW 2-Benutzer benötigt Leserechte auf die Lehrkraftdaten.

Quelle: [Bedienungsanleitung MA2, Druckstand 18.03.2024](/dateien/pdf/ma2lbv_anleitung.pdf), Kapitel 4, 5.3 und 6.1, Seiten 12–17 und 23–31.

## Dateiformat, Import und Plausibilitätsprüfung

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 26–31](/dateien/pdf/ma2lbv_anleitung.pdf#page=26).

Datenimport

### 6 Anhang

### 6.1 Datenimport

Für die Übermittlung von Änderungsmitteilungen an das LBV stehen zwei CSV-Schnitt-

stellen zur Verfügung und der Datenimport aus SchILD wird unterstützt.

CSV steht für „Comma Separated Values“ (eigentlich Character-separated values, da

das Trennzeichen nicht zwingend ein Komma sein muss) und beschreibt den Aufbau

einer Textdatei zum Austausch einfach strukturierter Daten.

Die Abrechnungsdatei enthält eine Header-Zeile mit den Bezeichnungen der einzelnen

Spalten. Diese Zeile dient lediglich zur Unterscheidung der beiden Importformate und

wird beim Import nicht verwendet. Die Bezeichnungen in der Header-Zeile müssen

durch Kommas getrennt sein.

Bei leeren Feldern muss das Trennzeichen immer ausgegeben werden. Jede Zeile

muss exakt die erwartete Anzahl an Trennzeichen enthalten.

### 1. Format

Header (1-zeilig!):

Langname,Vorname,Geburtsdatum,Personalnummer,Status,Statis-

tik,Schlüssel,

Monat_1,Stunden_1,Merkmal_1,...,Monat_6,Stunden_6,Merkmal_6

Jede Datenzeile enthält neben den Lehrkraftdaten immer Mehrarbeitsangaben für ge-

nau 6 Monate.

Datenimport

# Header-Text Bemerkung 1 Langname Nachname der Lehrkraft 2 Vorname Vorname der Lehrkraft 3 Geburtsdatum Geburtsdatum der Lehrkraft (TT.MM.JJJJ) 4 Personalnummer Personalnummer beim LBV 5 Status für spätere Verwendung - wird zurzeit nicht weiter ausgewertet Bei Teilzeitlehrkräften muss im Feld Statistik ein „T“ enthalten sein. 6 Statistik Bei Vollzeitlehrkräften muss im Feld Statistik ein „V“ enthalten sein. Vergütungsschlüssel (1-4): 1. gehobener Dienst aller Schulformen, soweit sie nicht unter Schlüssel 2 oder 3 fallen 2. gehobener Dienst aller Schulformen, deren Eingangsämter mindestens der BesGr A 12 zugeordnet sind, und des höheren Dienstes an Grund- 7 Schlüssel und Hauptschulen 3. gehobener Dienst aller Schulformen, deren Eingangsämter der BesGr A 13 zugeordnet sind, und des höheren Dienstes an Förder- und Realschulen 4. höherer Dienstes an Gymnasien, berufsbildenden Schulen und Kollegschulen sowie des höheren Dienstes an Fachhochschulen 8 Monat_1 Angabe des 1. Monats; Format MMJJ Anzahl der vergütbaren Mehrarbeitsstunden für den 1. Monat

- Maximal: 288 9 Stunden_1
- eine Dezimalstelle
- Dezimalpunkt verwenden Abrechnungsmerkmal für den 1. Monat (A oder V)
- A: anteilige Besoldung bei teilzeitbeschäftigten Beamtinnen und Beam- 10 Merkmal_1 ten
- V: Anzahl der vergütungsfähigen Unterrichtstunden kleiner als 4 ... ... ... 23 Monat_6 Angabe des 6. Monats 24 Stunden_6 Anzahl der vergütbaren Mehrarbeitsstunden für den 6. Monat 25 Merkmal_6 Abrechnungsmerkmal für den 6. Monat

Beispiel:

Die Vollzeit-Lehrkraft Augusta Byran hat 2016 im August 4 Mehrarbeitsstunden geleis-

tet und im September 2,5 Stunden: Die Abrechnungsdatei enthält insgesamt zwei Zei-

len (eine Headerzeile und eine Datenzeile), die hier aus Gründen der Übersichtlichkeit

in mehrere Zeilen umgebrochen wurden:

Langname,Vorname,Geburtsdatum,Personalnummer,Status,Statis-

tik,Schlüssel,

Monat_1,Stunden_1,Merkmal_1,Monat_2,Stunden_2,Merkmal_2,

Datenimport

Monat_3,Stunden_3,Merkmal_3,Monat_4,Stunden_4,Merkmal_4,

Monat_5,Stunden_5,Merkmal_5,Monat_6,Stunden_6,Merkmal_6

Byran,Augusta,10.09.1981,B 0312222,v,LV,1,816,4,,916,2.5,v,

1016,0,,1116,0,,1216,0,,117,0,

Hinweis:

- Vom Stundenplanprogramm GP-Untis wird diese Importschnittstelle unter-

stützt.

- Export der Mehrarbeit aus Untis:
- In Untis klicken Sie auf Datei ► Import/Export ► Deutschland ► NRW

Mehrarbeit.

- Im anschließenden Exportdialog geben Sie zunächst das Export-Ver-

zeichnis an.

![1. Format – Abbildung aus der Originalanleitung, Seite 28](/bilder/pdf-anleitungen/ma2/seite-28-bild-02.png)

- Hier sollten Sie den Unterordner „\\abrechnung“ des Installationsver-

zeichnisses von MA2 angeben. Tragen Sie den Pfad direkt ein oder

wählen Sie ihn über die Schaltfläche „Durchsuchen“ aus.

- Im Feld „Monat“ geben Sie den ersten Monat an, für den die Daten ex-

portiert werden sollen.

- Nachdem Sie alle Eingaben durchgeführt haben, können Sie mit der

Schaltfläche „Exportieren“ den Exportvorgang starten.

Datenimport

### 2. Alternativformat

Als alternative Importschnittstelle wird das folgende Format unterstützt:

Header (1-zeilig!):

Nachname,Vorname,Geburtsdatum,Personalnummer,Status,Schlüs-

sel,Monat,Stunden,Merkmal

Beispiel:

Nachname,Vorname,Geburtsdatum,Personalnummer,Status,Schlüs-

sel,Monat,Stunden,Merkmal

Byran,Augusta,10.09.1981,B 0312221,V,1,816,3,v

Byran,Augusta,10.09.1981,B 0312221,V,1,916,3,v

Byran,Augusta,10.09.1981,B 0312221,V,1,1016,0,

Byran,Augusta,10.09.1981,B 0312221,V,1,1116,4,

Byran,Augusta,10.09.1981,B 0312221,V,1,1216,2,v

Byran,Augusta,10.09.1981,B 0312221,V,1,117,1,v

Hinweise:

- Status: T,V,L: Teilzeit, Vollzeit, LAA
- Schlüssel: 1..4: siehe LBV-Ausfüllanleitung
- Monat: Format: MMJJ oder MJJ
- Stunden: Format: ##.#
- Merkmal: a,v: siehe LBV-Ausfüllanleitung
- Pro Lehrkraft genau 6 Zeilen
- Die erste Lehrkraft definiert den sechsmonatigen Abrechnungszeitraum (im

Beispiel August 2016 bis Januar 2017)

Datenimport

### 3. SchILD-Import

Einige Daten lassen sich aus SchILD importieren

- Name, Vorname
- Geburtsdatum
- Teilzeit, Vollzeit, Lehramtsanwärter
- LBV-Personalnummer
- LBV-Vergütungsschlüssel

Die Anzahl der vergütbaren Mehrarbeitsstunden kann nicht importiert werden.

Den SchILD-Import erreichen Sie über das Hauptmenü: Datei ► SchILD-Import

![3. SchILD-Import – Abbildung aus der Originalanleitung, Seite 30](/bilder/pdf-anleitungen/ma2/seite-30-bild-01.png)

Hinweise:

Datenimport

- In SchILD kann die LBV-Personalnummer und der LBV-Vergütungsschlüs-

sel ab der Version 2.0.16.3 verwaltet werden:

Schulverwaltung ► Lehrkräfte ► Details ► Schulbezogene Daten

![3. SchILD-Import – Abbildung aus der Originalanleitung, Seite 31](/bilder/pdf-anleitungen/ma2/seite-31-bild-01.png)

- Der LBV-Vergütungsschlüssel ist eine einstellige Zahl zwischen "1" und "4".
