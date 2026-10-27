---
title: "JahrgangsListe"
wiki_title: "JahrgangsListe"
wiki_page_id: 38
wiki_revision: 59
---

# JahrgangsListe

<a id="RAP-Funktion_&quot;JahrgangsListe&quot;"></a>
<a id="RAP-Funktion_.22JahrgangsListe.22"></a>

## RAP-Funktion "JahrgangsListe"

## Beschreibung

```pascal
function JahrgangsListe(Const aEndJg: String; const aDiff: Integer): String;
```

## Parameter

```text
aEndJg  - Letzter Jahrgang des Intervalls
aDiff   - Abstand zum Startjahrgang
```

## Rückgabewert

```text
Kommaseparierte Liste der Jahrgänge
```

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


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-38) · [JahrgangsListe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=JahrgangsListe&oldid=59)
