---
title: "MA2LBV / MA2: Abrechnungsdaten importieren"
---

# Abrechnungsdaten importieren

MA2 unterstützt den Import aus SchILD sowie zwei CSV-Schnittstellen für externe Abrechnungsdaten. Wählen Sie das Format passend zur erzeugenden Anwendung; die beiden Schnittstellen dürfen nicht durch beliebiges Umstellen von Spalten vermischt werden.

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

Wenn keine passende Abrechnungsdatei vorliegt, können Sie stattdessen die Lehrkraftdaten aus SchILD importieren und die Mehrarbeitsstunden im Programm ergänzen. Der dafür verwendete SchILD-Benutzer benötigt Leserechte auf die Lehrkraftdaten.

Quelle: [Bedienungsanleitung MA2, Druckstand 18.03.2024](https://www.svws.nrw.de/system/files/media/document/file/ma2lbv_anleitung.pdf), Kapitel 4, 5.3 und 6.1, Seiten 12–17 und 23–31.
