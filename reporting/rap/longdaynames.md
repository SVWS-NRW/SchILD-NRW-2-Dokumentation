---
title: "LongDayNames"
---

# LongDayNames

## Beschreibung

Gibt den ausgeschriebenen Namen eines Wochentags zurück. Die übergebene Zahl bestimmt den Wochentag.

```pascal
function LongDayNames(aTag: Integer): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aTag` | Nr. des Wochentages (1=Sonntag,..., 7=Samstag) |

## Rückgabewert

Langname des Wochentages

## Beispiel

```pascal
Label27.Caption:=LongDayNames(1); //(*Sonntag*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [LongDayNames – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LongDayNames&oldid=70)
