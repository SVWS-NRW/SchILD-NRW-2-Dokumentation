---
title: "SetzeSortierungEx"
wiki_title: "SetzeSortierungEx"
wiki_page_id: 98
wiki_revision: 122
---

# SetzeSortierungEx

<a id="RAP-Funktion_&quot;SetzeSortierungEx&quot;"></a>
<a id="RAP-Funktion_.22SetzeSortierungEx.22"></a>

## RAP-Funktion "SetzeSortierungEx"

## Beschreibung

```pascal
procedure SetzeSortierungEx(Pipeline: TppDbPipeline; const Sortierfelder: String);
```

## Parameter

```text
Pipeline           - Datenquelle, deren Abfrage neu sortiert werden soll
Sortierfelder      - Mit Komma separierte Liste Sortierfeldern. Im Unterschied zu
                    „SetzeSortierung“ können hier auch spezielle Felder, wie z.B.
                     MONTH(Geburtsatum) etc verwendet werden.
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
  (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)
  OriginalSortierung:=SortierungVon(Report.Datapipeline);
  SetzeSortierungEx(Report.Datapipeline,'Klasse,MONTH(Geburtsdatum)');
 end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-98) · [SetzeSortierungEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeSortierungEx&oldid=122)
