---
title: "Excel-Notendateien"
---

# Excel-Notendateien

**Informationen zum Excel-Notenimport und -export:**

Zur Noteneingabe können jetzt auch Excel-Dateien verwendet werden. Hierzu steht ein neuer Menüpunkt "Datenaustausch\>\>Excel-Notendateien" mit den Untereinträgen "Export" und "Import" zur Verfügung. Folgende Punkte sind zu beachten:

<a id="excel-export"></a>

- Der Export bezieht sich immer auf die aktuell ausgewählte Schülermenge.
- Es werden (anders als beim Export für das ext. Notenmodul) keine "lehrerbezogenen" Dateien erzeugt.
- Die Dateien haben folgenden Spalten-Aufbau:

\| Name \| Vorname \| Geburtsdatum \| Klasse \| Fach-Kürzel \| Kursart \| Note \| Punkte \| Zeugnisbemerkung

<a id="excel-import"></a>

- Wichtig: Die ersten sechs Spalten (Name bis Kursart) werden vom Export gefüllt und dürfen bei der Bearbeitung der Datei (Noteneingabe) nicht verändert werden, da ansonsten keine Zuordnung beim Import möglich ist!
- Nachträgliche Änderungen in SchILD (Fach, Kursart) können dazu führen, dass der betreffende Datensatz beim Import nicht gefunden oder falsch zugeordnet wird!
- Die Reihenfolge der Spalten darf nicht geändert werden!
- Die Daten werden in der Reihenfolge "Klasse, Name, Fach" ausgegeben, diese Reihenfolge sollte möglichst nicht verändert werden, da ansonsten der Import länger dauert.
- Es können Noten oder Punkte (in die jeweilige Spalte) eingetragen werden, wenn beides eingetragen ist, hat die Note Vorrang.
- Es dürfen nur "erlaubte" Einträge (Noten 1 bis 6, optional mit "+" oder "-", Punkte 15 bis 0, zusätzlich E1 (mit besonderem Erfolg teilgenommen), E2 (mit Erfolg teilgenommen) und E3 (teilgenommen)) verwendet werden, alle anderen Einträge werden beim Import ignoriert!
- Zeilen, die keine Noten- (oder Punkte-)Eingabe enthalten, werden beim Import ignoriert.
- In der Bemerkungsspalte können Freitexte eingegeben werden, diese werden als Zeugnisbemerkungen importiert. Falls zu mehreren Fächern eines Schülers Bemerkungen vorhanden sind, werden diese akkumuliert.
- Beim Import wird die erste Zeile (Header) nicht berücksichtigt. Falls also eine Datei nach dem Export. "aufgespalten" wird (um sie an mehrere Lehrer zu verteilen), muss dafür gesorgt werden, dass jede Datei eine Headerzeile hat.

**Download einer Beispieldatei:**

[Media:Notenbeispiel.xlsx](/dateien/wiki/notenbeispiel-e5e8e2ce.xlsx)

------------------------------------------------------------------------

---

Quelle: [Excel-Notendateien – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Excel-Notendateien&oldid=2774)
