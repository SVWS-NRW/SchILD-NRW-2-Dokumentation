---
title: "Access-Datenbank reparieren und komprimieren"
---

<a id="datenbank-reparieren-und-komprimieren"></a>

# Access-Datenbank reparieren und komprimieren

Diese Funktion überprüft und komprimiert eine Access-Datenbank. „Komprimieren“ bedeutet hier, nicht mehr belegten Speicherplatz innerhalb der Datenbankdatei freizugeben. Die Funktion ist von einer Datensicherung zu unterscheiden.

Der Menüpunkt "Datei \> Datenbank komprimieren und reparieren"

![2016-12-01 153211](/bilder/administration/datenbanken/2016-12-01-153211.jpg)

steht nur bei Access-Datenbanken zur Verfügung. Es wird dann intern das Tool "Schild-Repair.exe" aufgerufen, dass sich auch im Installationsordner befindet wenn die Schild-NRW-Toolsammlung installiert wurde.

Das Reparaturprogramm überprüft dann auf ungültige Verweise und Eintragungen, die unter Umständen eine Indexverletzung herbeiführen würden.

Außerdem wird eine Komprimierung der Datenbank durchgeführt, was bei Access zur einer erheblichen Verkleinerung der Speichergröße führen kann.

Das kann unter Umständen auch den gruppenweisen Druckvorgang von Formularen im Netzwerk beschleunigen.

------------------------------------------------------------------------

---

Quelle: [Datenbank reparieren und komprimieren – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Datenbank+reparieren+und+komprimieren&oldid=4064)
