---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ReplaceStandardVar"
---

# ReplaceStandardVar

Gesicherte Wiki-Seite · Namensraum 0 · Version 83 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/replacestandardvar) · [Originaldaten herunterladen](/dateien/quellen/seite-62.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function ReplaceStandardVar(aText, aStandardVar: String): String;
|-
|'''Parameter''' || 
    aText              - Text, in dem die oder der Standard-Platzhalter ersetzt
                         werden sollen.
    aStandardVar       - Standardvariable, die ersetzt werden soll
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure DetailBeforePrint;
     begin
       ...
       RichText1.Richtext:=ReplaceStandardVar(RichText1.Richtext,'$_NAME$');
       ...
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
