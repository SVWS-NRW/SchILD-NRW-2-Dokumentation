---
title: "AnzahlElemente"
wiki_title: "AnzahlElemente"
wiki_page_id: 118
wiki_revision: 162
---

# AnzahlElemente

<a id="RAP-Funktion_&quot;AnzahlElemente&quot;"></a>
<a id="RAP-Funktion_.22AnzahlElemente.22"></a>

## RAP-Funktion "AnzahlElemente"

## Beschreibung

```pascal
function AnzahlElemente( const text, trennzeichen: string ): integer;
Liefert die Anzahl der durch das Trennzeichen getrennten Einzelelemente in "text"
```

## Parameter

```text
text: der zu analysierende Text
trennzeichen: Das Trennzeichen
```

## Rückgabewert

```text
Integerwert der Elementanzahl.
```

## Beispiel

```pascal
txt := '1,2,3,4':
if AnzahlElemente( txt, ',' ) > 2 then
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-118) · [AnzahlElemente – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AnzahlElemente&oldid=162)
