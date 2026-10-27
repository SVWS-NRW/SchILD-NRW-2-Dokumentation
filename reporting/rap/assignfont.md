---
title: "AssignFont"
wiki_title: "AssignFont"
wiki_page_id: 12
wiki_revision: 23
---

# AssignFont

<a id="RAP-Funktion_&quot;AssignFont&quot;"></a>
<a id="RAP-Funktion_.22AssignFont.22"></a>

## RAP-Funktion "AssignFont"

## Beschreibung

```pascal
procedure AssignFont(aText: TppCustomRichText; aFont: TFont);
ändert den Zeichensatz eines Richtextes. Die Größe bleibt unverändert
```

## Parameter

```text
aText              - der zu verändernde Richtext
aFont              - der neue Zeichensatz
```

## Rückgabewert

```text
Der veränderte Richtext
```

## Beispiel

```text
AssignFont(Richtext1,Label1.Font);
(*Dem Richtext wird der Zeichensatz eines Labels zugewiesen*)
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-12) · [AssignFont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AssignFont&oldid=23)
