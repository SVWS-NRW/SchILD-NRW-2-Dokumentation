---
title: "EditRichTextEx"
wiki_title: "EditRichTextEx"
wiki_page_id: 18
wiki_revision: 37
---

# EditRichTextEx

<a id="RAP-Funktion_&quot;EditRichTextEx&quot;"></a>
<a id="RAP-Funktion_.22EditRichTextEx.22"></a>

## RAP-Funktion "EditRichTextEx"

## Beschreibung

```pascal
function EditRichTextEx(const Default: String; const aCaption: String): String;
```

## Parameter

```text
Default            - Zu bearbeitender Richtext, kann auch leer sein
aCaption           - Überschrift, wird im Titelbalken des Editorfensters angezeigt
```

## Rückgabewert

```text
Veränderter Richtext
```

## Beispiel

```pascal
RichText1.RichText:=EditRichTextEx('','Zeugnisbemerkung');
```


---

Quelle: [EditRichTextEx – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=EditRichTextEx&oldid=37) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=EditRichTextEx&action=history)
