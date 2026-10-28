---
title: "ResetFaechervorbelegung"
---

# ResetFaechervorbelegung

<a id="RAP-Funktion_&quot;ResetFaechervorbelegung&quot;"></a>
<a id="RAP-Funktion_.22ResetFaechervorbelegung.22"></a>

## Signatur

```pascal
procedure ResetFaechervorbelegung;
```

## Beschreibung

Setzt interne Abfragen zurück, muss immer nach Verwendung von Faechervorbelegen oder
CreateNotenHeader aufgerufen werden.

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

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-67) · [ResetFaechervorbelegung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ResetFaechervorbelegung&oldid=88)
