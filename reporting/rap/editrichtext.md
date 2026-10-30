---
title: "EditRichText"
---

# EditRichText

<a id="RAP-Funktion_&quot;EditRichText&quot;"></a>
<a id="RAP-Funktion_.22EditRichText.22"></a>

<a id="signatur"></a>

## Beschreibung

Öffnet einen Editor für formatierten Text und liefert den bearbeiteten Text zurück. Der Ausgangstext wird über den Parameter `Default` übergeben.

```pascal
function EditRichText(Const Default: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Default` | Zu bearbeitender Richtext, kann auch leer sein |

## Rückgabewert

Veränderter Richtext

## Beispiel

```pascal
RichText1.RichText:=EditRichText('Hier den Text eingeben!');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [EditRichText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=EditRichText&oldid=36)
