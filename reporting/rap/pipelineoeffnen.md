---
title: "PipelineOeffnen"
---

# PipelineOeffnen

## Beschreibung

Öffnet die angegebene Datenquelle für den Report. Der Name der Datenquelle wird als Text übergeben.

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

Quelle: [PipelineOeffnen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PipelineOeffnen&oldid=155)
