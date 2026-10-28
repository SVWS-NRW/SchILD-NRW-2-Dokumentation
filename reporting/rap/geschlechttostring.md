---
title: "GeschlechtToString"
---

# GeschlechtToString

<a id="RAP-Funktion_&quot;GeschlechtToString&quot;"></a>
<a id="RAP-Funktion_.22GeschlechtToString.22"></a>

## Signatur

```pascal
function GeschlechtToString(aGeschlecht: integer; aMaennl_Form, aWeibl_Form: String): String;
```

## Parameter

```text
aGeschlecht        - Geschlecht, m=3, w=4
aMaennl_Form       - männliche Form
aWeibl_Form        - weibliche Form
```

## Rückgabewert

Vorgabe, je nach Geschlecht

## Beispiel

```pascal
lAnrede:=GeschlechtToString(Schueler['Geschlecht'],'Schüler','Schülerin')
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-31) · [GeschlechtToString – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GeschlechtToString&oldid=5650)
