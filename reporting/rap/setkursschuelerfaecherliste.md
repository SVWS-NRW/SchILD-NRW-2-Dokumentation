---
title: "SetKursSchuelerFaecherListe"
---

# SetKursSchuelerFaecherListe

<a id="RAP-Funktion_&quot;SetKursSchuelerFaecherListe&quot;"></a>
<a id="RAP-Funktion_.22SetKursSchuelerFaecherListe.22"></a>

## Signatur

```pascal
procedure SetKursSchuelerFaecherListe(Const aListe: String);
```

## Parameter

```text
Liste    - Kommaseparierte Liste der gewünschten Fächer
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetKursSchuelerFaecherListe('D,M,PH,CH');
 end;
 In einer KursListe können in einem Subreport
 die Leistungsdaten in diesen Fächern ausgegeben werden.
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-90) · [SetKursSchuelerFaecherListe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetKursSchuelerFaecherListe&oldid=114)
