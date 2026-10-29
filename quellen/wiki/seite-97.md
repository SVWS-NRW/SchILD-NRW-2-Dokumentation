---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetzeSortierung"
---

# SetzeSortierung

Gesicherte Wiki-Seite · Namensraum 0 · Version 121 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setzesortierung) · [Originaldaten herunterladen](/dateien/quellen/seite-97.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetzeSortierung(Pipeline: TppDbPipeline; const Sortierfelder: String);
|-
|'''Parameter''' || 
    Pipeline           - Datenquelle, deren Abfrage neu sortiert werden soll
    Sortierfelder      - Mit Komma separierte Liste Sortierfeldern. Es können  keine
                         Lookup- oder berechnete Felder verwendet werden, Informationen
                         über die Felder erhält man im Dialog „Info über Datenquellen“
                         im Reportdesigner.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)
       OriginalSortierung:=SortierungVon(Report.Datapipeline);
       SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');
     end
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
