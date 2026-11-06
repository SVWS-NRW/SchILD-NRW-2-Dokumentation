---
title: "QuotedStr"
---

# QuotedStr

## Beschreibung

schließt den String Value in Delphi-Hochkommata ein

```pascal
function QuotedStr(const Value: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Value` | String, der eingeschlossen werden soll |

## Rückgabewert

In Hochkommata eingeschlossener String

## Beispiel

```pascal
Setzefilter(Klassenlehrer_mit_Noten,'Fachkrz=' + QuotedStr('M'));
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [QuotedStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=QuotedStr&oldid=80)
