---
title: "SortierungVon"
---

# SortierungVon

<a id="RAP-Funktion_&quot;SortierungVon&quot;"></a>
<a id="RAP-Funktion_.22SortierungVon.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SortierungVon(Pipeline: TppDbPipeline): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Pipeline` | Datenquelle; Sortierung, die angewendet werden soll |


## Rückgabewert

Liste der Sortierfelder

## Beispiel

```pascal
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
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SortierungVon – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SortierungVon&oldid=3507)
