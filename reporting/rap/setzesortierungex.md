---
title: "SetzeSortierungEx"
---

# SetzeSortierungEx

<a id="RAP-Funktion_&quot;SetzeSortierungEx&quot;"></a>
<a id="RAP-Funktion_.22SetzeSortierungEx.22"></a>

<a id="signatur"></a>

## Beschreibung

Ändert die Sortierung einer Datenquelle. Im Unterschied zu `SetzeSortierung` können auch die im Artikel beschriebenen speziellen Feldausdrücke verwendet werden.

```pascal
procedure SetzeSortierungEx(Pipeline: TppDbPipeline; const Sortierfelder: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Pipeline` | Datenquelle, deren Abfrage neu sortiert werden soll |
| `Sortierfelder` | Mit Komma separierte Liste Sortierfeldern. Im Unterschied zu „SetzeSortierung“ können hier auch spezielle Felder, wie zum Beispiel MONTH(Geburtsatum) etc verwendet werden. |

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

Quelle: [SetzeSortierungEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeSortierungEx&oldid=122)
