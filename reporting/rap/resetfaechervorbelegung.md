---
title: "ResetFaechervorbelegung"
---

# ResetFaechervorbelegung

<a id="RAP-Funktion_&quot;ResetFaechervorbelegung&quot;"></a>
<a id="RAP-Funktion_.22ResetFaechervorbelegung.22"></a>

<a id="signatur"></a>

## Beschreibung

Setzt interne Abfragen zurück, muss immer nach Verwendung von Faechervorbelegen oder
CreateNotenHeader aufgerufen werden.

```pascal
procedure ResetFaechervorbelegung;
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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ResetFaechervorbelegung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ResetFaechervorbelegung&oldid=88)
