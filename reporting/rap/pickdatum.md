---
title: "PickDatum"
---

# PickDatum

<a id="RAP-Funktion_&quot;PickDatum&quot;"></a>
<a id="RAP-Funktion_.22PickDatum.22"></a>

## Signatur

```pascal
function PickDatum(aCaption, aDate: String): String;
```

## Parameter

```text
aCaption           - Überschrift des Dialoges
aDate              - Datumsvorgabe
```

## Rückgabewert

Datum als Zeichenkette, z.B. '31.12.2010'

## Beispiel

```text
Var
KDate : String;
Begin
 Pickdatum('Datum Konferenz',KDate);
End;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-58) · [PickDatum – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PickDatum&oldid=79)
