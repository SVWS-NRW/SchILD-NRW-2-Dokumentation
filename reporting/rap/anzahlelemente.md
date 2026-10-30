---
title: "AnzahlElemente"
---

# AnzahlElemente

<a id="RAP-Funktion_&quot;AnzahlElemente&quot;"></a>
<a id="RAP-Funktion_.22AnzahlElemente.22"></a>

<a id="signatur"></a>

## Beschreibung

Liefert die Anzahl der durch das Trennzeichen getrennten Einzelelemente in "text"

```pascal
function AnzahlElemente( const text, trennzeichen: string ): integer;
```

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

Quelle: [AnzahlElemente – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AnzahlElemente&oldid=162)
