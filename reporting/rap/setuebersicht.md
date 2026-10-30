---
title: "SetUebersicht"
---

# SetUebersicht

<a id="RAP-Funktion_&quot;SetUebersicht&quot;"></a>
<a id="RAP-Funktion_.22SetUebersicht.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetUebersicht(IsUebersicht: Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `IsUebersicht` | Boolescher Wert, bei 'True' werden die Leistungsdaten eines Schülers im über SetJgIntervall definierten Zeitintervall in eine Tabellenstruktur eingefügt. Da dieser Vorgang recht zeitaufwendig ist, kann und sollte er durch diese Funktion nur bei Bedarf  zugeschaltet werden |


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetJgIntervall(12,13);
   SetUebersicht(True);
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetUebersicht – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersicht&oldid=116)
