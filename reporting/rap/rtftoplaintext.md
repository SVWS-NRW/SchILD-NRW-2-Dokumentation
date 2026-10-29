---
title: "RtfToPlaintext"
---

# RtfToPlaintext

<a id="RAP-Funktion_&quot;RtfToPlaintext&quot;"></a>
<a id="RAP-Funktion_.22RtfToPlaintext.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function RtfToPlaintext(aRtfText: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aRtfText` | Richtext, aus dem alle Formatanweisungen entfernt werden sollen |


## Rückgabewert

Reiner Text ohne Formatierung

## Beispiel

```pascal
Memo1.Text:=RtfToPlaintext(SchuelerLernabschnitte['ZeugnisBem'])
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-70) · [RtfToPlaintext – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=RtfToPlaintext&oldid=91)
