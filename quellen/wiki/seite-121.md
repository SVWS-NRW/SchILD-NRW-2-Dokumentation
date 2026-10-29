---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FilterLaufbahnStufen"
---

# FilterLaufbahnStufen

Gesicherte Wiki-Seite · Namensraum 0 · Version 168 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/filterlaufbahnstufen) · [Originaldaten herunterladen](/dateien/quellen/seite-121.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure FilterLaufbahnStufen(const Stufenliste: String);
    Filtert für Leistungsübersichten auf bestimmte Jahrgangsstufen. Damit ist es möglich,
    z.B. Formulare für die gymn. Oberstufe schulformunabhängig zu entwickeln
|-
|'''Parameter''' || 
    Parameter:
    Stufenliste: Die zu betrachtenden Jahrgangsstufen, getrennt durch Komma
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
    var
     vers: string;
    begin
    {Filter auf Q1 und Q2 bzw. 12 und 13 bzw. 5 und 6 (bei WBK)}
     FilterLaufbahnStufen('SII-2,SII-3');
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
