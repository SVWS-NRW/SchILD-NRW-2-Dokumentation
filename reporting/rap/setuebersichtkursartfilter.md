---
title: "SetUebersichtKursartFilter"
---

# SetUebersichtKursartFilter

<a id="RAP-Funktion_&quot;SetUebersichtKursartFilter&quot;"></a>
<a id="RAP-Funktion_.22SetUebersichtKursartFilter.22"></a>

## Beschreibung

Mit dieser Funktion können jetzt alle "Leistungsdatenquellen"
(nicht nur in den Übersichten) auf Kursarten gefiltert werden.
Dabei ist folgendes zu beachten:
-Es müssen die "schülerbezogenen" Kursarten verwendet werden
(also zum Beispiel SetUebersichtKursartFilter( 'LK1,LK2'), wenn man nur Leistungskurse haben will
(SetUebersichtKursartFilter( 'LK') funktioniert nicht)
-Wenn ein "-" der Liste vorangestellt wird, funktioniert der Filter ausschließend
(das heißt SetUebersichtKursartFilter( '-WPII,AGGT') berücksichtigt nur Leistungsdaten,
die nicht die Kursart WPII oder AGGT haben)

```pascal
procedure SetUebersichtKursartFilter(Const aKursartListe: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aListe` | Kommaseparierte Liste der gewünschten Kursarten |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersichtKursartFilter('AGGT,ZUV');
 end;
 Damit werden in der Leistungsübersicht nur Fächer mit den Kursarten
 AGGT und ZUV nach Kursbezeichnung unterschieden.
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetUebersichtKursartFilter – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersichtKursartFilter&oldid=180)
