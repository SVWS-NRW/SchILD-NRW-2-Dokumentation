---
title: "SetJgIntervall ASD"
---

# SetJgIntervall ASD

<a id="RAP-Funktion_&quot;SetJgIntervall_ASD&quot;"></a>
<a id="RAP-Funktion_.22SetJgIntervall_ASD.22"></a>

<a id="signatur"></a>

## Beschreibung

Legt fest, für welche Jahrgänge eine Leistungsübersicht erzeugt werden soll. Die Jahrgänge werden als Liste übergeben.

```pascal
function SetJgIntervall_ASD(Const aJahrgangsliste: String): Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aJahrgangsliste` | Liste der Jahrgänge, für die eine Übersicht erzeugt werden soll |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   If SetJgIntervall_ASD('EF,Q1,Q2') then
     ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetJgIntervall ASD – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetJgIntervall+ASD&oldid=113)
