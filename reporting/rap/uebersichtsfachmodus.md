---
title: "UebersichtsfachModus"
---

# UebersichtsfachModus

<a id="RAP-Funktion_&quot;UebersichtsfachModus&quot;"></a>
<a id="RAP-Funktion_.22UebersichtsfachModus.22"></a>

## Signatur

```pascal
Procedure UebersichtsfachModus(Const Modus : String);
```

## Beschreibung

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

```text
Modus : String, zulässig sind 'NurFach', 'KursArt' oder 'KursBezeichnung'
```


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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-103) · [UebersichtsfachModus – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UebersichtsfachModus&oldid=127)
