---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetzeSortierungEx"
---

# SetzeSortierungEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 122 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setzesortierungex) · [Originaldaten herunterladen](/dateien/quellen/seite-98.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetzeSortierungEx(Pipeline: TppDbPipeline; const Sortierfelder: String);
|-
|'''Parameter''' || 
    Pipeline           - Datenquelle, deren Abfrage neu sortiert werden soll
    Sortierfelder      - Mit Komma separierte Liste Sortierfeldern. Im Unterschied zu
                        „SetzeSortierung“ können hier auch spezielle Felder, wie z.B.
                         MONTH(Geburtsatum) etc verwendet werden.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
      (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)
      OriginalSortierung:=SortierungVon(Report.Datapipeline);
      SetzeSortierungEx(Report.Datapipeline,'Klasse,MONTH(Geburtsdatum)');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
