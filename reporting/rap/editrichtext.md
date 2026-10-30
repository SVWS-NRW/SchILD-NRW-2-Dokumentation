---
title: "EditRichText"
---

# EditRichText

<a id="RAP-Funktion_&quot;EditRichText&quot;"></a>
<a id="RAP-Funktion_.22EditRichText.22"></a>

<a id="signatur"></a>

## Beschreibung

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
