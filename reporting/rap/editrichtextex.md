---
title: "EditRichTextEx"
---

# EditRichTextEx

<a id="RAP-Funktion_&quot;EditRichTextEx&quot;"></a>
<a id="RAP-Funktion_.22EditRichTextEx.22"></a>

## Signatur

```pascal
function EditRichTextEx(const Default: String; const aCaption: String): String;
```

## Parameter

```text
Default            - Zu bearbeitender Richtext, kann auch leer sein
aCaption           - Überschrift, wird im Titelbalken des Editorfensters angezeigt
```

## Rückgabewert

Veränderter Richtext

## Beispiel

```pascal
RichText1.RichText:=EditRichTextEx('','Zeugnisbemerkung');
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-18) · [EditRichTextEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=EditRichTextEx&oldid=37)
