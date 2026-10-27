---
title: "SetzeSortierung"
wiki_title: "SetzeSortierung"
wiki_page_id: 97
wiki_revision: 121
---

# SetzeSortierung

<a id="RAP-Funktion_&quot;SetzeSortierung&quot;"></a>
<a id="RAP-Funktion_.22SetzeSortierung.22"></a>

## RAP-Funktion "SetzeSortierung"

## Beschreibung

```pascal
procedure SetzeSortierung(Pipeline: TppDbPipeline; const Sortierfelder: String);
```

## Parameter

```text
Pipeline           - Datenquelle, deren Abfrage neu sortiert werden soll
Sortierfelder      - Mit Komma separierte Liste Sortierfeldern. Es können  keine
                     Lookup- oder berechnete Felder verwendet werden, Informationen
                     über die Felder erhält man im Dialog „Info über Datenquellen“
                     im Reportdesigner.
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
   SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');
 end
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-97) · [SetzeSortierung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeSortierung&oldid=121)
