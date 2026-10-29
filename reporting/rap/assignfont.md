---
title: "AssignFont"
---

# AssignFont

<a id="RAP-Funktion_&quot;AssignFont&quot;"></a>
<a id="RAP-Funktion_.22AssignFont.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure AssignFont(aText: TppCustomRichText; aFont: TFont);
```


ändert den Zeichensatz eines Richtextes. Die Größe bleibt unverändert

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aText` | der zu verändernde Richtext |
| `aFont` | der neue Zeichensatz |


## Rückgabewert

Der veränderte Richtext

## Beispiel

```pascal
AssignFont(Richtext1,Label1.Font);
(*Dem Richtext wird der Zeichensatz eines Labels zugewiesen*)
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-12) · [AssignFont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AssignFont&oldid=23)
