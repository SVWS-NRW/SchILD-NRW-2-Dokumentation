---
title: "SetzeSortierungEx"
---

# SetzeSortierungEx

<a id="RAP-Funktion_&quot;SetzeSortierungEx&quot;"></a>
<a id="RAP-Funktion_.22SetzeSortierungEx.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetzeSortierungEx(Pipeline: TppDbPipeline; const Sortierfelder: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Pipeline` | Datenquelle, deren Abfrage neu sortiert werden soll |
| `Sortierfelder` | Mit Komma separierte Liste Sortierfeldern. Im Unterschied zu „SetzeSortierung“ können hier auch spezielle Felder, wie z.B. MONTH(Geburtsatum) etc verwendet werden. |


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
  (*Originalsortierung ist eine String-Variable, die global vereinbart werden muss*)
  OriginalSortierung:=SortierungVon(Report.Datapipeline);
  SetzeSortierungEx(Report.Datapipeline,'Klasse,MONTH(Geburtsdatum)');
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-98) · [SetzeSortierungEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeSortierungEx&oldid=122)
