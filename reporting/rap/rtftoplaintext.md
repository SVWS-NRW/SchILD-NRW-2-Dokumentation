---
title: "RtfToPlaintext"
wiki_title: "RtfToPlaintext"
wiki_page_id: 70
wiki_revision: 91
---

# RtfToPlaintext

<a id="RAP-Funktion_&quot;RtfToPlaintext&quot;"></a>
<a id="RAP-Funktion_.22RtfToPlaintext.22"></a>

## RAP-Funktion "RtfToPlaintext"

## Beschreibung

```pascal
function RtfToPlaintext(aRtfText: String): String;
```

## Parameter

```text
aRtfText  - Richtext, aus dem alle Formatanweisungen entfernt werden
            sollen
```

## Rückgabewert

```text
Reiner Text ohne Formatierung
```

## Beispiel

```pascal
Memo1.Text:=RtfToPlaintext(SchuelerLernabschnitte['ZeugnisBem'])
```


---

Quelle: [RtfToPlaintext – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=RtfToPlaintext&oldid=91) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=RtfToPlaintext&action=history)
