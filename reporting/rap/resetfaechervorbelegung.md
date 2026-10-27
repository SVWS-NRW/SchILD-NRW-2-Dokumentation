---
title: "ResetFaechervorbelegung"
wiki_title: "ResetFaechervorbelegung"
wiki_page_id: 67
wiki_revision: 88
---

# ResetFaechervorbelegung

<a id="RAP-Funktion_&quot;ResetFaechervorbelegung&quot;"></a>
<a id="RAP-Funktion_.22ResetFaechervorbelegung.22"></a>

## RAP-Funktion "ResetFaechervorbelegung"

## Beschreibung

```pascal
procedure ResetFaechervorbelegung;
Setzt interne Abfragen zurück, muss immer nach Verwendung von Faechervorbelegen oder
CreateNotenHeader aufgerufen werden.
```

## Parameter

```text
...
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   Faechervorbelegen;
 end;

 Procedure ReportAfterPrint;
 begin
   ResetFaechervorbelegung;
 end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-67) · [ResetFaechervorbelegung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ResetFaechervorbelegung&oldid=88)
