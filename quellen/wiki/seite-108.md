---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Wiederholungen"
---

# Wiederholungen

Gesicherte Wiki-Seite · Namensraum 0 · Version 5721 · Stand 2024-02-18.

[Lesbaren Artikel öffnen](/reporting/rap/wiederholungen) · [Originaldaten herunterladen](/dateien/quellen/seite-108.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function Wiederholungen(const aSchuelerId: Integer): String;
|-
|'''Parameter''' || 
    aSchuelerId   - Id-Nummer des aktuellen Schuelers
|-
|'''Rückgabewert''' ||
    String mit den wiederholten Schuljahren und Jahrgängen.
    Achtung: Diese Funktion ist überflüssig geworden und sollte nicht mehr
             verwendet werden
|- 
|'''Beispiel''' || 
    Procedure Label4711OnGetText(var Text: String);
     begin
       Text:=Wiederholungen(Schueler['Id']);
     end;
    (*Ergebnis im akt Schuljahr 2005/06.2, wenn der Schüler im Schj. 2002/03 die 8 und
     im Schj 2005/06 die 10 wiederholt:
     '2002/03: 8.1; 2002/03: 8.2; 2005/06: 10.1; 2005/06: 10.2'


'''Zurück zu [[RAP-Funktionen]]'''
```
