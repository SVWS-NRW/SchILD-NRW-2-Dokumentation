---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FilterErzieherfunktion"
---

# FilterErzieherfunktion

Gesicherte Wiki-Seite · Namensraum 0 · Version 47 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/filtererzieherfunktion) · [Originaldaten herunterladen](/dateien/quellen/seite-26.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure FilterErzieherfunktion(const aFunktion: String);
|-
|'''Parameter''' || 
    aFunktion          - Schulinterne Funktion, auf die gefiltert werden soll. Aus
                         den Erziehern werden die Einträge mit der gewählten
                         Funktion ausgewählt.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
    var
      lFunktion : String;
    begin
      lFunktion:=SelectErzFunktion;
      FilterErzieherfunktion(lFunktion);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
