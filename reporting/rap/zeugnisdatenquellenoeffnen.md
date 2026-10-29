---
title: "ZeugnisDatenquellenOeffnen"
---

# ZeugnisDatenquellenOeffnen

<a id="RAP-Funktion_&quot;ZeugnisDatenquellenOeffnen&quot;"></a>
<a id="RAP-Funktion_.22ZeugnisDatenquellenOeffnen.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure ZeugnisDatenquellenOeffnen;
```


Öffnet alle in Zeugnissen benötigten Datenquellen. In Zeugnissen, in denen die
einzelnen Fächerbereiche (z.B. Deutsch, Mathematik, Fremdsprachen usw.) über
dynamisch nachladbare Subreports realisiert sind, scheitert die automatische
Erkennung, welche Datenquellen zu öffnen sind, da die betreffenden Subreports erst
geladen werden, nachdem die Analyse erfolgt ist. Der einmalige Aufruf dieser
Prozedur erspart dann den mehrfachen Aufruf von „PipelineOeffnen“ für jede
einzelne Datenquelle.

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
  ZeugnisDatenquellenOeffnen;
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-124) · [ZeugnisDatenquellenOeffnen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ZeugnisDatenquellenOeffnen&oldid=175)
