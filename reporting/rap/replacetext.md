---
title: "ReplaceText"
wiki_title: "ReplaceText"
wiki_page_id: 63
wiki_revision: 5651
---

# ReplaceText

<a id="RAP-Funktion_&quot;ReplaceText&quot;"></a>
<a id="RAP-Funktion_.22ReplaceText.22"></a>

## RAP-Funktion "ReplaceText"

## Beschreibung

```pascal
function ReplaceText(aSourceText, aSearchText,
                     aReplaceText: String): String;
```

## Parameter

```text
aSourceText        - Text, der den zu ersetzenden String (selbst
                     definierter Platzhalter) enthält
aSearchText        - String, der ersetzt werden soll
aReplaceText       - String, der eingefügt werden soll
```

## Rückgabewert

```text
Veränderter Quelltext
```

## Beispiel

```pascal
Memo1.Text:=ReplaceText(Memo1.Text,'$VORNAME$',Schueler['Vorname']);
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-63) · [ReplaceText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceText&oldid=5651)
