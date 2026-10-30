---
title: "ReplaceText"
---

# ReplaceText

<a id="RAP-Funktion_&quot;ReplaceText&quot;"></a>
<a id="RAP-Funktion_.22ReplaceText.22"></a>

<a id="signatur"></a>

## Beschreibung

Ersetzt eine vorgegebene Textstelle durch einen anderen Text und liefert den veränderten Text zurück.

```pascal
function ReplaceText(aSourceText, aSearchText,
                     aReplaceText: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aSourceText` | Text, der den zu ersetzenden String (selbst definierter Platzhalter) enthält |
| `aSearchText` | String, der ersetzt werden soll |
| `aReplaceText` | String, der eingefügt werden soll |

## Rückgabewert

Veränderter Quelltext

## Beispiel

```pascal
Memo1.Text:=ReplaceText(Memo1.Text,'$VORNAME$',Schueler['Vorname']);
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ReplaceText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceText&oldid=5651)
