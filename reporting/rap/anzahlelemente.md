---
title: "AnzahlElemente"
---

# AnzahlElemente

<a id="RAP-Funktion_&quot;AnzahlElemente&quot;"></a>
<a id="RAP-Funktion_.22AnzahlElemente.22"></a>

## Signatur

```pascal
function AnzahlElemente( const text, trennzeichen: string ): integer;
```

## Beschreibung

Liefert die Anzahl der durch das Trennzeichen getrennten Einzelelemente in "text"

## Parameter

```text
text: der zu analysierende Text
trennzeichen: Das Trennzeichen
```

## Rückgabewert

Integerwert der Elementanzahl.

## Beispiel

```pascal
txt := '1,2,3,4':
if AnzahlElemente( txt, ',' ) > 2 then
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-118) · [AnzahlElemente – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AnzahlElemente&oldid=162)
