---
title: "StringInput"
wiki_title: "StringInput"
wiki_page_id: 101
wiki_revision: 125
---

# StringInput

<a id="RAP-Funktion_&quot;StringInput&quot;"></a>
<a id="RAP-Funktion_.22StringInput.22"></a>

## RAP-Funktion "StringInput"

## Beschreibung

```pascal
function StringInput(aPrompt, Default: String): string;
```

## Parameter

```text
aPrompt  - Hinweistext
Default  - Textvorgabe, kann leer sein
```

## Rückgabewert

```text
Eingegebener Text
```

## Beispiel

```pascal
Label1.Caption:=StringInput('Bitte geben Sie das KFZ-Kennzeichen ein','NRW-4711');
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-101) · [StringInput – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=StringInput&oldid=125)
