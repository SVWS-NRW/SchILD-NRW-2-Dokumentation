---
title: "RtfToPlaintext"
---

# RtfToPlaintext

<a id="RAP-Funktion_&quot;RtfToPlaintext&quot;"></a>
<a id="RAP-Funktion_.22RtfToPlaintext.22"></a>

## Signatur

```pascal
function RtfToPlaintext(aRtfText: String): String;
```

## Parameter

```text
aRtfText  - Richtext, aus dem alle Formatanweisungen entfernt werden
            sollen
```

## Rückgabewert

Reiner Text ohne Formatierung

## Beispiel

```pascal
Memo1.Text:=RtfToPlaintext(SchuelerLernabschnitte['ZeugnisBem'])
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-70) · [RtfToPlaintext – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=RtfToPlaintext&oldid=91)
