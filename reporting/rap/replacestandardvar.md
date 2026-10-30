---
title: "ReplaceStandardVar"
---

# ReplaceStandardVar

<a id="RAP-Funktion_&quot;ReplaceStandardVar&quot;"></a>
<a id="RAP-Funktion_.22ReplaceStandardVar.22"></a>

<a id="signatur"></a>

## Beschreibung

Ersetzt einen angegebenen Standardplatzhalter in einem Text. Die Parameter bestimmen den Text und die zu ersetzende Standardvariable.

```pascal
function ReplaceStandardVar(aText, aStandardVar: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aText` | Text, in dem die oder der Standard-Platzhalter ersetzt werden sollen. |
| `aStandardVar` | Standardvariable, die ersetzt werden soll |

## Beispiel

```pascal
Procedure DetailBeforePrint;
 begin
   ...
   RichText1.Richtext:=ReplaceStandardVar(RichText1.Richtext,'$_NAME$');
   ...
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ReplaceStandardVar – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceStandardVar&oldid=83)
