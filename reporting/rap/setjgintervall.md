---
title: "SetJgIntervall"
---

# SetJgIntervall

<a id="RAP-Funktion_&quot;SetJgIntervall&quot;"></a>
<a id="RAP-Funktion_.22SetJgIntervall.22"></a>

<a id="signatur"></a>

## Beschreibung

ist veraltet. Statt dessen sollte SetJgIntervall_ASD benutzt werden.

```pascal
function SetJgIntervall(aStartJg, aEndJg: Integer): Boolean; Diese Funktion
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aStartJg` | Beginn des Jahrgangsintervalles, für das Übersichten erzeugt werden solle |
| `aEndJg` | Ende des Jahrgangsintervalles, für das Übersichten erzeugt werden sollen |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   If SetJgIntervall(12,13) then
     ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetJgIntervall – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetJgIntervall&oldid=112)
