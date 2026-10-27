---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ZeugnisDatenquellenOeffnen"
---

# ZeugnisDatenquellenOeffnen

Gesicherte Wiki-Seite · Namensraum 0 · Version 175 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/zeugnisdatenquellenoeffnen) · [Originaldaten herunterladen](/dateien/quellen/seite-124.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
 procedure ZeugnisDatenquellenOeffnen;
 Öffnet alle in Zeugnissen benötigten Datenquellen. In Zeugnissen, in denen die
 einzelnen Fächerbereiche (z.B. Deutsch, Mathematik, Fremdsprachen usw.) über
 dynamisch nachladbare Subreports realisiert sind, scheitert die automatische
 Erkennung, welche Datenquellen zu öffnen sind, da die betreffenden Subreports erst
 geladen werden, nachdem die Analyse erfolgt ist. Der einmalige Aufruf dieser
 Prozedur erspart dann den mehrfachen Aufruf von „PipelineOeffnen“ für jede
 einzelne Datenquelle.
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
 procedure ReportBeforePrint;
  begin
   ZeugnisDatenquellenOeffnen;
  end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
