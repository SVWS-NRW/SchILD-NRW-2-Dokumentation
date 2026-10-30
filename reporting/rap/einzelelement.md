---
title: "EinzelElement"
---

# EinzelElement

<a id="RAP-Funktion_&quot;EinzelElement&quot;"></a>
<a id="RAP-Funktion_.22EinzelElement.22"></a>

## Beschreibung

Liefert das Einzelelement an Position "position" aus dem durch das Trennzeichen
   getrennten Text "text"

```pascal
function EinzelElement( const text, trennzeichen: string; const position: integer ):
string
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `text` | der zu analysierende Text |
| `trennzeichen` | Das Trennzeichen |
| `position` | Die Position des Einzelelementes im Text (beginnend bei 1) |

## Beispiel

```pascal
txt := '1,2,3,4':
if einzelelement( txt, ',', 2 ) = '2' then
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [EinzelElement – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=EinzelElement&oldid=164)
