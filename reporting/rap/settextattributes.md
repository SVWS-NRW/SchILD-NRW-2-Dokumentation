---
title: "SetTextAttributes"
---

# SetTextAttributes

<a id="RAP-Funktion_&quot;SetTextAttributes&quot;"></a>
<a id="RAP-Funktion_.22SetTextAttributes.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetTextAttributes(aText: TppCustomRichText);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aText` | Richtextelement |


## Beispiel

```pascal
Richtext1.Font.Name:=='Tahoma';
Richtext1.Font.Size:=16;
Richtext1.Font.Bold:=True;
Richtext1.Font.Italic:=True;
SetTextattributes(Richtext1);
Formatiert den gesamten Text des Richtextelementes in dem gewünschten Zeichensatz.
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetTextAttributes – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetTextAttributes&oldid=115)
