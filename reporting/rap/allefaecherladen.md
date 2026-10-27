---
title: "AlleFaecherLaden"
wiki_title: "AlleFaecherLaden"
wiki_page_id: 694
wiki_revision: 2671
---

# AlleFaecherLaden

<a id="RAP-Funktion_&quot;AlleFaecherLaden&quot;"></a>
<a id="RAP-Funktion_.22AlleFaecherLaden.22"></a>

## RAP-Funktion "AlleFaecherLaden"

## Beschreibung

```pascal
procedure AlleFaecherLaden(const Value: Boolean);
Stellt die Grundeinstellung "Auch Leistungsdaten ohne Noten laden"
für einen Report um.
```

## Parameter

```text
Value - Boolescher Wert
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  AlleFaecherLaden(True);
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-694) · [AlleFaecherLaden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AlleFaecherLaden&oldid=2671)
