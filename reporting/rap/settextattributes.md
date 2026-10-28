---
title: "SetTextAttributes"
---

# SetTextAttributes

<a id="RAP-Funktion_&quot;SetTextAttributes&quot;"></a>
<a id="RAP-Funktion_.22SetTextAttributes.22"></a>

## Signatur

```pascal
procedure SetTextAttributes(aText: TppCustomRichText);
```

## Parameter

```text
aText  - Richtextelement
```


## Beispiel

```pascal
Richtext1.Font.Name:=='Tahoma';
Richtext1.Font.Size:=16;
Richtext1.Font.Bold:=True;
Richtext1.Font.Italic:=True;
SetTextattributes(Richtext1);
Formatiert den gesamten Text des Richtextelementes in dem gewünschten Zeichensatz.
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-91) · [SetTextAttributes – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetTextAttributes&oldid=115)
