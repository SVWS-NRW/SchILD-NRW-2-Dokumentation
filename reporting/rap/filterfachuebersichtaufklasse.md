---
title: "FilterFachUebersichtAufKlasse"
---

# FilterFachUebersichtAufKlasse

<a id="RAP-Funktion_&quot;FilterFachUebersichtAufKlasse&quot;"></a>
<a id="RAP-Funktion_.22FilterFachUebersichtAufKlasse.22"></a>

## Beschreibung

```pascal
 
    Procedure FilterFachUebersichtAufKlasse( const klasse: string );
Mit dieser Prozedur kann bei einem Gruppenwechsel (wobei die Gruppierung auf
"Klasse" sein muss) eine Fachübersicht neu initialisiert werden. Der Aufruf erfolgt
typischerweise im Ereignis "BeforeGroupBreak", als Aufruf-Parameter wird die Klasse übergeben. Dadurch ist es möglich, Fachübersichten für
mehrere Klassen (oder die ganze Schule) in einem Durchlauf auszugeben, wobei nur
die jeweils von der betreffenden Klasse belegten Fächer in der Übersicht erscheinen.
```

## Parameter

```text
String - Klasse, für die die Übersicht erzeugt werden soll
```

## Rückgabewert

Erzeugt einen neuen FachUebersichtsHeader, sobald die Gruppe wechselt.

## Beispiel

```text
FilterFachUebersichtAufKlasse(Schueler['Klasse']);
```

:::warning
Der Aufruf sollte nur in Verbindung mit der Datenquelle "Fachuebersicht" erfolgen. Ein Aufruf von "FaecherVorbelegen" ist nicht notwendig (wird intern von " FilterFachUebersichtAufKlasse" gemacht) und wäre auch kontraproduktiv (erhöhter Zeitaufwand wegen doppeltem Aufruf).
:::


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-957) · [FilterFachUebersichtAufKlasse – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterFachUebersichtAufKlasse&oldid=4282)
