---
title: "GeschlechtToString"
---

# GeschlechtToString

<a id="RAP-Funktion_&quot;GeschlechtToString&quot;"></a>
<a id="RAP-Funktion_.22GeschlechtToString.22"></a>

<a id="signatur"></a>

## Beschreibung

Wählt abhängig von der übergebenen Geschlechtsangabe die männliche oder weibliche Textform aus.

```pascal
function GeschlechtToString(aGeschlecht: integer; aMaennl_Form, aWeibl_Form: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aGeschlecht` | Geschlecht, m=3, w=4 |
| `aMaennl_Form` | männliche Form |
| `aWeibl_Form` | weibliche Form |

## Rückgabewert

Vorgabe, je nach Geschlecht

## Beispiel

```pascal
lAnrede:=GeschlechtToString(Schueler['Geschlecht'],'Schüler','Schülerin')
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [GeschlechtToString – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GeschlechtToString&oldid=5650)
