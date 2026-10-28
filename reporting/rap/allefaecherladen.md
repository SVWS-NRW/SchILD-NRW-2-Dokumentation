---
title: "AlleFaecherLaden"
---

# AlleFaecherLaden

<a id="RAP-Funktion_&quot;AlleFaecherLaden&quot;"></a>
<a id="RAP-Funktion_.22AlleFaecherLaden.22"></a>

## Signatur

```pascal
procedure AlleFaecherLaden(const Value: Boolean);
```

## Beschreibung

Stellt die Grundeinstellung "Auch Leistungsdaten ohne Noten laden"
für einen Report um.

## Parameter

```text
Value - Boolescher Wert
```


## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  AlleFaecherLaden(True);
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-694) · [AlleFaecherLaden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AlleFaecherLaden&oldid=2671)
