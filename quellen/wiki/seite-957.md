---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FilterFachUebersichtAufKlasse"
---

# FilterFachUebersichtAufKlasse

Gesicherte Wiki-Seite · Namensraum 0 · Version 4282 · Stand 2020-01-26.

[Lesbaren Artikel öffnen](/reporting/rap/filterfachuebersichtaufklasse) · [Originaldaten herunterladen](/dateien/quellen/seite-957.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Procedure FilterFachUebersichtAufKlasse( const klasse: string );
Mit dieser Prozedur kann bei einem Gruppenwechsel (wobei die Gruppierung auf
"Klasse" sein muss) eine Fachübersicht neu initialisiert werden. Der Aufruf erfolgt
typischerweise im Ereignis "BeforeGroupBreak", als Aufruf-Parameter wird die Klasse übergeben. Dadurch ist es möglich, Fachübersichten für
mehrere Klassen (oder die ganze Schule) in einem Durchlauf auszugeben, wobei nur
die jeweils von der betreffenden Klasse belegten Fächer in der Übersicht erscheinen.

|-
|'''Parameter''' || 
    String - Klasse, für die die Übersicht erzeugt werden soll
|-
|'''Rückgabewert''' ||
    Erzeugt einen neuen FachUebersichtsHeader, sobald die Gruppe wechselt.
|- 
|'''Beispiel''' || 
    FilterFachUebersichtAufKlasse(Schueler['Klasse']);
|}

{{Wichtig|Der Aufruf sollte nur in Verbindung mit der Datenquelle "Fachuebersicht" erfolgen.
Ein Aufruf von "FaecherVorbelegen" ist nicht notwendig (wird intern von "
FilterFachUebersichtAufKlasse" gemacht) und wäre auch kontraproduktiv (erhöhter
Zeitaufwand wegen doppeltem Aufruf).}}


'''Zurück zu [[RAP-Funktionen]]'''
```
