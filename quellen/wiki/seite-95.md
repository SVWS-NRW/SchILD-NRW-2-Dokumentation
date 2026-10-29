---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Setzefilter"
---

# Setzefilter

Gesicherte Wiki-Seite · Namensraum 0 · Version 2115 · Stand 2014-04-18.

[Lesbaren Artikel öffnen](/reporting/rap/setzefilter) · [Originaldaten herunterladen](/dateien/quellen/seite-95.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetzeFilter(Pipeline: TppDbPipeline; const Filter: String)
    schränkt die Datensätze durch die übergebene Filterbedingung ein.
|-
|'''Parameter''' || 
    Pipeline       - Datenquelle, die gefiltert werden soll
    Filter         - der neue Filter. Ist der Filterstring leer, wird die Filterung entfernt.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
 Man kann die Filterbedingungen in den Reports wie folgt definieren:
 '''Setzefilter(Klassenlehrer_mit_Faechern,'Fachkrz=M;D' );'''
 d.h. wenn mehrere Optionen in Frage kommen (OR-Bedingung), brauchen die nur
 durch Semikolon getrennt angegeben zu werden.
 '''SetzeFilter(Klassen, 'KlassenlehrerKrz <>""');'''
 d.h. bei Abfragen "ungleich Leerstring" können die "doppelten Hochkommas"
 (über der 2 auf der Tastatur) verwendet werden.
 Filterbedingungen der Art 'Klasse=05*' oder 'Klasse=*A' bewirken eine Filterung mit 
 allen für den *  vorkommenden Zeichen. (Wildcard)
 Im übrigen können auch mehrere Aufrufe von SetzeFilter (z.B. für
 verschiedene Datenquellen) genutzt werden.
 '''Noch ein Hinweis''': Manchmal funktioniert die Filterung in der Vorschau des
 Designers nicht, im "Druckbetrieb" wird dann aber korrekt gefiltert.
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
