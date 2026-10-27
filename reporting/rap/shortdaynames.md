---
title: "ShortDayNames"
wiki_title: "ShortDayNames"
wiki_page_id: 99
wiki_revision: 123
---

# ShortDayNames

<a id="RAP-Funktion_&quot;ShortDayNames&quot;"></a>
<a id="RAP-Funktion_.22ShortDayNames.22"></a>

## RAP-Funktion "ShortDayNames"

## Beschreibung

```pascal
function ShortDayNames(aTag: Integer): String;
```

## Parameter

```text
aTag   - Nr. des Wochentages (1=Sonntag,..., 7=Samstag)
```

## Rückgabewert

```text
Kurzname des Wochentages
```

## Beispiel

```pascal
Label27.Caption:=ShortDayNames(1); (*Son*)
```


---

Quelle: [ShortDayNames – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ShortDayNames&oldid=123) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=ShortDayNames&action=history)
