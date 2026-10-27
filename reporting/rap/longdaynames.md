---
title: "LongDayNames"
wiki_title: "LongDayNames"
wiki_page_id: 49
wiki_revision: 70
---

# LongDayNames

<a id="RAP-Funktion_&quot;LongDayNames&quot;"></a>
<a id="RAP-Funktion_.22LongDayNames.22"></a>

## RAP-Funktion "LongDayNames"

## Beschreibung

```pascal
function LongDayNames(aTag: Integer): String;
```

## Parameter

```text
aTag  - Nr. des Wochentages (1=Sonntag,..., 7=Samstag)
```

## Rückgabewert

```text
Langname des Wochentages
```

## Beispiel

```pascal
Label27.Caption:=LongDayNames(1); //(*Sonntag*)
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-49) · [LongDayNames – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LongDayNames&oldid=70)
