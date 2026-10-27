---
title: "SortierungVon"
wiki_title: "SortierungVon"
wiki_page_id: 100
wiki_revision: 3507
---

# SortierungVon

<a id="RAP-Funktion_&quot;SortierungVon&quot;"></a>
<a id="RAP-Funktion_.22SortierungVon.22"></a>

## RAP-Funktion "SortierungVon"

## Beschreibung

```pascal
function SortierungVon(Pipeline: TppDbPipeline): String;
```

## Parameter

```text
Pipeline - Datenquelle; Sortierung, die angewendet werden soll
```

## Rückgabewert

```text
Liste der Sortierfelder
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   //Originalsortierung ist eine String-Variable, die global vereinbart werden muss
   OriginalSortierung:=SortierungVon(Report.Datapipeline);
   SetzeSortierung(Report.Datapipeline,'Klasse,Geburtsdatum');
 end;

 Procedure ReportAfterPrint;
 begin
   SetzeSortierung(Report.Datapipeline,OriginalSortierung);
 end;
```


---

Quelle: [SortierungVon – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SortierungVon&oldid=3507) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SortierungVon&action=history)
