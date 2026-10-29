---
title: "StringInput"
---

# StringInput

<a id="RAP-Funktion_&quot;StringInput&quot;"></a>
<a id="RAP-Funktion_.22StringInput.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function StringInput(aPrompt, Default: String): string;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aPrompt` | Hinweistext |
| `Default` | Textvorgabe, kann leer sein |


## Rückgabewert

Eingegebener Text

## Beispiel

```pascal
Label1.Caption:=StringInput('Bitte geben Sie das KFZ-Kennzeichen ein','NRW-4711');
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-101) · [StringInput – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=StringInput&oldid=125)
