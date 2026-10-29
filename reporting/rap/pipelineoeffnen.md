---
title: "PipelineOeffnen"
---

# PipelineOeffnen

<a id="RAP-Funktion_&quot;PipelineOeffnen&quot;"></a>
<a id="RAP-Funktion_.22PipelineOeffnen.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure PipelineOeffnen(aPipeline: TppDBpipeline);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `DBpipeline` | Die zu öffnende Datenquelle als Zeichenkette. |


## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
   PipelineOeffnen( Erzieher );
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-115) · [PipelineOeffnen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PipelineOeffnen&oldid=155)
