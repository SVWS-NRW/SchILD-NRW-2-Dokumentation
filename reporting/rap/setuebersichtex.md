---
title: "SetUebersichtEx"
---

# SetUebersichtEx

<a id="RAP-Funktion_&quot;SetUebersichtEx&quot;"></a>
<a id="RAP-Funktion_.22SetUebersichtEx.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetUebersichtEx(IsUebersicht: Boolean;  const aJahrgangsliste: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `IsUebersicht` | Boolescher Wert, bei 'True' werden die Leistungsdaten eines Schülers im über aJahrgangsliste definierten Zeitintervall in eine Tabellenstruktur eingefügt. Da dieser Vorgang recht zeitaufwendig ist, kann und sollte er durch diese Funktion nur bei Bedarf  zugeschaltet werden |
| `aJahrgangsliste` | Kommaseparierte Liste der zu berücksichtigen (ASD-)Jahrgänge |


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersichtEx(True, 'Q1,Q2');
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetUebersichtEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersichtEx&oldid=117)
