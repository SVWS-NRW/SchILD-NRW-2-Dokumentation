---
title: "PickDatum"
wiki_title: "PickDatum"
wiki_page_id: 58
wiki_revision: 79
---

# PickDatum

<a id="RAP-Funktion_&quot;PickDatum&quot;"></a>
<a id="RAP-Funktion_.22PickDatum.22"></a>

## RAP-Funktion "PickDatum"

## Beschreibung

```pascal
function PickDatum(aCaption, aDate: String): String;
```

## Parameter

```text
aCaption           - Überschrift des Dialoges
aDate              - Datumsvorgabe
```

## Rückgabewert

```text
Datum als Zeichenkette, z.B. '31.12.2010'
```

## Beispiel

```text
Var
KDate : String;
Begin
 Pickdatum('Datum Konferenz',KDate);
End;
```


---

Quelle: [PickDatum – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PickDatum&oldid=79) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=PickDatum&action=history)
