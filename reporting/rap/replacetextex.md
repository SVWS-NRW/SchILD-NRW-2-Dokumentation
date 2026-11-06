---
title: "ReplaceTextEx"
---

# ReplaceTextEx

## Beschreibung

Im Unterschied zu ReplaceText berücksichtigt ReplaceTextEx Groß- und Kleinschreibung.

```pascal
function ReplaceTextEx(aSourceText, aSearchText,
                       aReplaceText: String): *   String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aSourceText` | Text, der den zu ersetzenden String (selbst definierter Platzhalter) enthält |
| `aSearchText` | String, der ersetzt werden soll |
| `aReplaceText` |  |

## Rückgabewert

Veränderter Quelltext

## Beispiel

```pascal
Memo1.Text:=ReplaceTextEx(Memo1.Text,'$VORNAME$',Schueler['Vorname']);
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [ReplaceTextEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceTextEx&oldid=4732)
