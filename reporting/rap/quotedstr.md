---
title: "QuotedStr"
---

# QuotedStr

<a id="RAP-Funktion_&quot;QuotedStr&quot;"></a>
<a id="RAP-Funktion_.22QuotedStr.22"></a>

## Signatur

```pascal
function QuotedStr(const Value: String): String;
```

## Beschreibung

schließt den String Value in Delphi-Hochkommata ein

## Parameter

```text
Value   - String, der eingeschlossen werden soll
```

## Rückgabewert

In Hochkommata eingeschlossener String

## Beispiel

```text
Setzefilter(Klassenlehrer_mit_Noten,'Fachkrz=' + QuotedStr('M'));
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-59) · [QuotedStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=QuotedStr&oldid=80)
