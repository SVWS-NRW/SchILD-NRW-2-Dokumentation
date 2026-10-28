---
title: "SetJgIntervall ASD"
---

# SetJgIntervall ASD

<a id="RAP-Funktion_&quot;SetJgIntervall_ASD&quot;"></a>
<a id="RAP-Funktion_.22SetJgIntervall_ASD.22"></a>

## Signatur

```pascal
function SetJgIntervall_ASD(Const aJahrgangsliste: String): Boolean;
```

## Parameter

```text
aJahrgangsliste    - Liste der Jahrgänge, für die eine Übersicht erzeugt
                     werden soll
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   If SetJgIntervall_ASD('EF,Q1,Q2') then
     ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
 end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-89) · [SetJgIntervall ASD – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetJgIntervall+ASD&oldid=113)
