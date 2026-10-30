---
title: "JahrgangsListe"
---

# JahrgangsListe

<a id="RAP-Funktion_&quot;JahrgangsListe&quot;"></a>
<a id="RAP-Funktion_.22JahrgangsListe.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function JahrgangsListe(Const aEndJg: String; const aDiff: Integer): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aEndJg` | Letzter Jahrgang des Intervalls |
| `aDiff` | Abstand zum Startjahrgang |


## Rückgabewert

Kommaseparierte Liste der Jahrgänge

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lJahrgaenge : String;
 begin
   lJahrgaenge:=JahrgangsListe('Q2',3); //Ergebnis: '08,09,EF,Q1'
   SetJgIntervall_ASD(lJahrgaenge);
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [JahrgangsListe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=JahrgangsListe&oldid=59)
