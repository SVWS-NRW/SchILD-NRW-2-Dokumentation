---
title: "FilterLaufbahnJahr"
---

# FilterLaufbahnJahr

<a id="RAP-Funktion_&quot;FilterLaufbahnJahr&quot;"></a>
<a id="RAP-Funktion_.22FilterLaufbahnJahr.22"></a>

<a id="signatur"></a>

## Beschreibung

Filtert die Laufbahndaten auf einen Zeitraum zwischen dem angegebenen Anfangs- und Endjahr.

```pascal
procedure FilterLaufbahnJahr(const VonJahr, BisJahr: Integer);
```

- `VonJahr = 0`: vom Anfang bis zum angegebenen Endjahr filtern.
- `BisJahr = 0`: vom angegebenen Anfangsjahr bis zum Ende filtern.
- Beide Werte sind `0`: den Filter zurücksetzen.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `VonJahr` | Beginn des Zeitraumes |
| `BisJahr` | Ende des Zeitraumes |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  SetUebersicht(True);
  FilterLaufbahnJahr(2000,2009);
end;

procedure ReportAfterPrint;
begin
  SetUebersicht(false);
  FilterLaufbahnJahr(0,0);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [FilterLaufbahnJahr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnJahr&oldid=48)
