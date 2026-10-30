---
title: "ZensurToStr"
---

# ZensurToStr

<a id="RAP-Funktion_&quot;ZensurToStr&quot;"></a>
<a id="RAP-Funktion_.22ZensurToStr.22"></a>

<a id="signatur"></a>

## Beschreibung

Wandelt eine numerische Zensur in die zugehörige Klartextdarstellung um.

```pascal
function ZensurToStr(aZensur: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aZensur` | Numerische Zensur |

## Rückgabewert

Zensur im Klartext

## Beispiel

```pascal
Label1.Caption:=ZensurToStr('3');
(*ergibt 'befriedigend'*)
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ZensurToStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ZensurToStr&oldid=135)
