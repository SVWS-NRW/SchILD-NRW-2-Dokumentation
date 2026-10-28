---
title: "SetUebersicht"
---

# SetUebersicht

<a id="RAP-Funktion_&quot;SetUebersicht&quot;"></a>
<a id="RAP-Funktion_.22SetUebersicht.22"></a>

## Signatur

```pascal
procedure SetUebersicht(IsUebersicht: Boolean);
```

## Parameter

```text
IsUebersicht       - Boolescher Wert, bei 'True' werden die Leistungsdaten eines
                     Schülers im über SetJgIntervall definierten Zeitintervall in
                     eine Tabellenstruktur eingefügt. Da dieser Vorgang recht
                     zeitaufwendig ist, kann und sollte er durch diese Funktion nur
                     bei Bedarf  zugeschaltet werden
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetJgIntervall(12,13);
   SetUebersicht(True);
 end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-92) · [SetUebersicht – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersicht&oldid=116)
