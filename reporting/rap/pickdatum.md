---
title: "PickDatum"
---

# PickDatum

<a id="RAP-Funktion_&quot;PickDatum&quot;"></a>
<a id="RAP-Funktion_.22PickDatum.22"></a>

<a id="signatur"></a>

## Beschreibung

Zeigt einen Dialog zur Datumsauswahl an. Das gewählte Datum wird als Text zurückgegeben.

```pascal
function PickDatum(aCaption, aDate: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aCaption` | Überschrift des Dialoges |
| `aDate` | Datumsvorgabe |

## Rückgabewert

Datum als Zeichenkette, zum Beispiel '31.12.2010'

## Beispiel

```pascal
Var
KDate : String;
Begin
 Pickdatum('Datum Konferenz',KDate);
End;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [PickDatum – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PickDatum&oldid=79)
