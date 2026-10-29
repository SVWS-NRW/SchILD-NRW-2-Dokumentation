---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ResetFaechervorbelegung"
---

# ResetFaechervorbelegung

Gesicherte Wiki-Seite · Namensraum 0 · Version 88 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/resetfaechervorbelegung) · [Originaldaten herunterladen](/dateien/quellen/seite-67.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure ResetFaechervorbelegung;
    Setzt interne Abfragen zurück, muss immer nach Verwendung von Faechervorbelegen oder
    CreateNotenHeader aufgerufen werden.
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       Faechervorbelegen;
     end;

     Procedure ReportAfterPrint;
     begin
       ResetFaechervorbelegung;
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
