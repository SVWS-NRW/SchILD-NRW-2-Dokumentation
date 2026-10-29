---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SortierungVon"
---

# SortierungVon

Gesicherte Wiki-Seite · Namensraum 0 · Version 3507 · Stand 2015-09-04.

[Lesbaren Artikel öffnen](/reporting/rap/sortierungvon) · [Originaldaten herunterladen](/dateien/quellen/seite-100.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SortierungVon(Pipeline: TppDbPipeline): String;
|-
|'''Parameter''' || 
    Pipeline - Datenquelle; Sortierung, die angewendet werden soll
|-
|'''Rückgabewert''' ||
    Liste der Sortierfelder
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       //Originalsortierung ist eine String-Variable, die global vereinbart werden muss
       OriginalSortierung:=SortierungVon(Report.Datapipeline);
       SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');
     end;

     Procedure ReportAfterPrint;
     begin
       SetzeSortierung(Report.Datapipeline,OriginalSortierung);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
