---
title: "EditRichTextEx"
---

# EditRichTextEx

<a id="RAP-Funktion_&quot;EditRichTextEx&quot;"></a>
<a id="RAP-Funktion_.22EditRichTextEx.22"></a>

<a id="signatur"></a>

## Beschreibung

Öffnet einen Editor für formatierten Text. Zusätzlich zum Ausgangstext können Sie die Überschrift des Editorfensters vorgeben.

```pascal
function EditRichTextEx(const Default: String; const aCaption: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Default` | Zu bearbeitender Richtext, kann auch leer sein |
| `aCaption` | Überschrift, wird im Titelbalken des Editorfensters angezeigt |

## Rückgabewert

Veränderter Richtext

## Beispiel

```pascal
RichText1.RichText:=EditRichTextEx('','Zeugnisbemerkung');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [EditRichTextEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=EditRichTextEx&oldid=37)
