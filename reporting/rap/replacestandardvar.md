---
title: "ReplaceStandardVar"
wiki_title: "ReplaceStandardVar"
wiki_page_id: 62
wiki_revision: 83
---

# ReplaceStandardVar

<a id="RAP-Funktion_&quot;ReplaceStandardVar&quot;"></a>
<a id="RAP-Funktion_.22ReplaceStandardVar.22"></a>

## RAP-Funktion "ReplaceStandardVar"

## Beschreibung

```pascal
function ReplaceStandardVar(aText, aStandardVar: String): String;
```

## Parameter

```text
aText              - Text, in dem die oder der Standard-Platzhalter ersetzt
                     werden sollen.
aStandardVar       - Standardvariable, die ersetzt werden soll
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure DetailBeforePrint;
 begin
   ...
   RichText1.Richtext:=ReplaceStandardVar(RichText1.Richtext,'$_NAME$');
   ...
 end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-62) · [ReplaceStandardVar – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceStandardVar&oldid=83)
