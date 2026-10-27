---
title: "Filter II"
wiki_title: "Filter II"
wiki_page_id: 279
wiki_revision: 1192
---

# Filter II

![FilterII01](/bilder/wiki/filterii01-8abb4560.jpg)

Um Schülermengen zu erhalten, die sich nicht über die Auswahlmöglichkeiten des Attribut-Filters und des Filters I selektieren lassen, benötigt man den Filter II.

Dieses trifft vorwiegend bei ODER-Verknüpfungen zu.

Auch hier ist es möglich, einmal erstellte Filter zu speichern, zu laden, erneut zu bearbeiten oder zu löschen (siehe [Attributsfilter](/schild2/auswahl/attributsfilter)).

**Hinweis:**

Die in diesem Abschnitt festgelegten Filterbedingungen selektieren Schülerinnen und Schüler immer aus allen Karteikästen. Da sich im Schulalltag die Auswahl in der Regel auf die Schülerdaten im aktuellen Datenfenster bezieht, ist die Bedingung Status gleich Aktiv in die Filterbedingung zusätzlich aufzunehmen sowie anschließend über UND mit weiteren Bedingungen zu verknüpfen.

Nach Aufruf des Filter II erhalten Sie die Maske "Allgemeine Filterbedingungen definieren". Die Vorgabe beim Aufruf dieser Maske enthält die Bedingung Schüler nicht gelöscht.

**Und/Oder**

Wahl der entsprechenden weiteren Filterverknüpfungen. Die Standardvorgabe ist UND.

Für komplexere Filterverknüpfungen können Klammern gesetzt werden.

Mit 'Pfeil hoch' wird eine Klammer hinzugefügt, mit 'Pfeil runter' eine Klammer entfernt.

**Gruppe**

Aus der Liste kann eine Datensatzgruppe ausgewählt werden, über die der Filter erstellt werden soll.

Mögliche Auswahl: Schüler - Erzieher - telef. Kontakte - Weitere Adressen

**Feldname**

In der Liste werden aus der gewählten Gruppe die entsprechenden Datenfelder angeboten.

**Operator**

Die Liste enthält abhängig von dem vorher ausgewählten Datenfeld mögliche Vergleichsoperatoren.

**Feldwert**

Je nach vorheriger Auswahl wird hier ein Feld für eine Textangabe oder eine vorgegebene Liste eingeblendet, aus der ein Wert übernommen werden kann.

**In Filterbedingungen übernehmen**

![FilterII02](/bilder/wiki/filterii02-3ab603e9.jpg)

Die in der oberen Zeile erstellte Filterbedingung wird als Klartext-Befehl und auch als SQL-Befehl in die entsprechenden Fenster übertragen.

**Einzelne Filterbedingung zurücksetzen**

Die in der Zeile für die einzelne Filterbedingung erfolgte Auswahl bzw. erfolgten Eintragungen werden gelöscht.

**gesamte Abfrage negieren**

Man erhält aufgrund der eingestellten Filterbedingung das Komplement der gefilterten Schülermenge.

**SQL-Befehle löschen**

Es werden die erstellten Filterbedingungen gelöscht und der Filter wird auf die Vorgabe Schüler nicht gelöscht zurückgesetzt.

**Aktuelle Auswahl übernehmen**

Ist schon im Datenfenster eine aktuelle Schülermenge aufgrund eines Filters gebildet worden (geladener Attributsfilter oder Allgemeiner Filter, Auswahlknopf ist rot), so kann diese Bedingung als SQL-Befehl eingeblendet und in der Zeile einzelne Filterbedingung erweitert werden.

**Testen**

Da über den Filter II auch komplexere Bedingungen eingegeben werden können, wird hier geprüft, ob die gesetzte Filterbedingung von der Syntax her keine Fehler enthält. Bei einer nicht korrekt gebildeten Bedingung erscheint eine Fehlermeldung.

Ein Informationshinweis gibt darüber Auskunft, wie viele Schüler die eingestellte(n) Filterbedingung(en) erfüllen. Werden keine Schüler für diese Filtereinstellung gefunden, so kann man wählen, ob man zur aktiven Schülermenge zurückkehren will oder ob man eine weitere Filterbedingung erstellen möchte.

**Übernehmen**

Die gefilterte Schülermenge steht nach erfolgreichem Test im Datenfenster für eine weitere Bearbeitung zur Verfügung. (z.B. Ausdruck von Listen, gruppenweise Zuordnung bestimmter Felder etc.)

**Speichern**

Auch der Filter II kann vergleichbar den anderen Filterstufen zur späteren Wiederanwendung gespeichert werden (siehe [Attributsfilter](/schild2/auswahl/attributsfilter)).

**Öffnen**

Es öffnet sich ein Fenster mit der Liste der bisher gespeicherten Filterbedingungen.

Der entsprechende Filter wird markiert und durch Übernehmen erscheint der Filter im Klartext und als SQL-Befehl im Fenster "Allgemeine Filterbedingung definieren" und kann mit weiteren einzelnen Filterbedingungen verknüpft bzw. erweitert werden.

**In Datei speichern**

Sollen Filterbedingungen zwischen mehreren Systemen (Dependance, anderen Rechnern) ausgetauscht werden, so kann über diesen Schaltknopf der entsprechende SQL-Befehl gespeichert werden.

Es öffnet sich ein Fenster mit dem Textfeld Dateiname. Nach erfolgtem Eintrag kann die Filterbedingung auf dem Datenträger gespeichert werden.

**Aus Datei laden**

Eine auf dem Datenträger gespeicherte Filterbedingung mit der Endung .sql kann in das Fenster "Allgemeine Filterbedingung definieren" geladen werden und steht zur Ausführung oder Erweiterung bereit.

**Abbruch**

Die Maske kann ohne Veränderungen verlassen werden.

------------------------------------------------------------------------

---

Quelle: [Filter II – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Filter+II&oldid=1192) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Filter+II&action=history)
