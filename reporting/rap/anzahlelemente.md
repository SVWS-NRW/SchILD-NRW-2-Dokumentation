---
title: "AnzahlElemente"
---

# AnzahlElemente

<a id="RAP-Funktion_&quot;AnzahlElemente&quot;"></a>
<a id="RAP-Funktion_.22AnzahlElemente.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function AnzahlElemente( const text, trennzeichen: string ): integer;
```


Liefert die Anzahl der durch das Trennzeichen getrennten Einzelelemente in "text"

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `text` | der zu analysierende Text |
| `trennzeichen` | Das Trennzeichen |


## Rückgabewert

Integerwert der Elementanzahl.

## Beispiel

```pascal
txt := '1,2,3,4':
if AnzahlElemente( txt, ',' ) > 2 then
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-118) · [AnzahlElemente – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AnzahlElemente&oldid=162)
