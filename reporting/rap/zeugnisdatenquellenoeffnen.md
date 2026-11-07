---
title: "ZeugnisDatenquellenOeffnen"
---

# ZeugnisDatenquellenOeffnen

## Beschreibung

Öffnet alle in Zeugnissen benötigten Datenquellen. In Zeugnissen, in denen die
einzelnen Fächerbereiche (zum Beispiel Deutsch, Mathematik, Fremdsprachen usw.) über
dynamisch nachladbare Subreports realisiert sind, scheitert die automatische
Erkennung, welche Datenquellen zu öffnen sind, da die betreffenden Subreports erst
geladen werden, nachdem die Analyse erfolgt ist. Der einmalige Aufruf dieser
Prozedur erspart dann den mehrfachen Aufruf von „PipelineOeffnen“ für jede
einzelne Datenquelle.

```pascal
procedure ZeugnisDatenquellenOeffnen;
```

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
  ZeugnisDatenquellenOeffnen;
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [ZeugnisDatenquellenOeffnen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ZeugnisDatenquellenOeffnen&oldid=175)
