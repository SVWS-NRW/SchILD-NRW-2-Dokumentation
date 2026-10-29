---
title: "UebersichtsfachModus"
---

# UebersichtsfachModus

<a id="RAP-Funktion_&quot;UebersichtsfachModus&quot;"></a>
<a id="RAP-Funktion_.22UebersichtsfachModus.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
Procedure UebersichtsfachModus(Const Modus : String);
```


Durch den Parameter dieser Prozedur wird die Einsortierung
der Leistungsdaten in die Leistungsübersichten gesteuert.
Möglich sind die drei Modi
  - NurFach : Alle Leistungsdaten mit dem gleichen Fach landen in einer Spalte
  - KursArt : Fächer mit gleichem Fachkürzel, aber unterschiedlichen
              Kursarten werden in verschiedene Spalten einsortiert
  - KursBezeichnung: Fächer mit gleichem Fachkürzel, aber unterschiedlichen
              Kursbezeichnungen werden in verschiedene Spalten einsortiert
 Der Aufruf von 'UebersichtsfachModus('NurFach')' entspricht dem
 Aufruf der Funktion 'KursbezIgnorieren(True)'.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Modus` | String, zulässig sind 'NurFach', 'KursArt' oder 'KursBezeichnung' |


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersicht(True);
   UebersichtsfachModus('KursArt');
 end;

 Procedure ReportAfterPrint;
 begin
   SetUebersicht(false);
   UebersichtsfachModus('KursBezeichnung');
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-103) · [UebersichtsfachModus – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UebersichtsfachModus&oldid=127)
