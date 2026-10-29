---
title: "LongDayNames"
---

# LongDayNames

<a id="RAP-Funktion_&quot;LongDayNames&quot;"></a>
<a id="RAP-Funktion_.22LongDayNames.22"></a>

<a id="signatur"></a>

## Beschreibung

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

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-49) · [LongDayNames – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LongDayNames&oldid=70)
