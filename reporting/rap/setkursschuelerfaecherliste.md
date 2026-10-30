---
title: "SetKursSchuelerFaecherListe"
---

# SetKursSchuelerFaecherListe

<a id="RAP-Funktion_&quot;SetKursSchuelerFaecherListe&quot;"></a>
<a id="RAP-Funktion_.22SetKursSchuelerFaecherListe.22"></a>

<a id="signatur"></a>

## Beschreibung

Übergibt eine durch Kommas getrennte Liste der gewünschten Fächer für die Kurs-Schüler-Fächerliste.

```pascal
procedure SetKursSchuelerFaecherListe(Const aListe: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Liste` | Kommaseparierte Liste der gewünschten Fächer |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetKursSchuelerFaecherListe('D,M,PH,CH');
 end;
 In einer KursListe können in einem Subreport
 die Leistungsdaten in diesen Fächern ausgegeben werden.
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetKursSchuelerFaecherListe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetKursSchuelerFaecherListe&oldid=114)
