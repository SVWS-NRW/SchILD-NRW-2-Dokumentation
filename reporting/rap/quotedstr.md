---
title: "QuotedStr"
---

# QuotedStr

<a id="RAP-Funktion_&quot;QuotedStr&quot;"></a>
<a id="RAP-Funktion_.22QuotedStr.22"></a>

<a id="signatur"></a>

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

---

Quelle: [QuotedStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=QuotedStr&oldid=80)
