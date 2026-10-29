---
title: "ShortDayNames"
---

# ShortDayNames

<a id="RAP-Funktion_&quot;ShortDayNames&quot;"></a>
<a id="RAP-Funktion_.22ShortDayNames.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function ShortDayNames(aTag: Integer): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aTag` | Nr. des Wochentages (1=Sonntag,..., 7=Samstag) |


## Rückgabewert

Kurzname des Wochentages

## Beispiel

```pascal
Label27.Caption:=ShortDayNames(1); (*Son*)
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-99) · [ShortDayNames – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ShortDayNames&oldid=123)
