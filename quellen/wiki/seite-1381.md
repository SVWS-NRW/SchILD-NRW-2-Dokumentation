---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: DatensatzZeigerBewegen"
---

# DatensatzZeigerBewegen

Gesicherte Wiki-Seite · Namensraum 0 · Version 5690 · Stand 2023-05-30.

[Lesbaren Artikel öffnen](/reporting/rap/datensatzzeigerbewegen) · [Originaldaten herunterladen](/dateien/quellen/seite-1381.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure DatensatzZeigerBewegen (aPipeline: TppDatapipeline; aSchritte: integer)
    Bewegt den Datensatzzeiger der als Parameter angegebenen Datenquelle
|-
|'''Parameter''' || 
    aPipeline: Die betreffende Datenquelle
    aSchritte: Bewegungsschritte (-1000: Erster Datensatz, 1000: Letzter Datensatz,
               -1: vorheriger Datensatz, 1: Nächster Datensatz)
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    DatensatzZeigerBewegen( Lernabschnitte, -1 );
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
