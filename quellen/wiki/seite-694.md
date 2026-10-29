---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: AlleFaecherLaden"
---

# AlleFaecherLaden

Gesicherte Wiki-Seite · Namensraum 0 · Version 2671 · Stand 2014-11-24.

[Lesbaren Artikel öffnen](/reporting/rap/allefaecherladen) · [Originaldaten herunterladen](/dateien/quellen/seite-694.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure AlleFaecherLaden(const Value: Boolean);
    Stellt die Grundeinstellung "Auch Leistungsdaten ohne Noten laden"
    für einen Report um.
|-
|'''Parameter''' || 
    Value - Boolescher Wert
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
    begin
      AlleFaecherLaden(True);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
