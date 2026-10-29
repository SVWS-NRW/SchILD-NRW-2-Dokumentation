---
title: "FilterLaufbahnJahr"
---

# FilterLaufbahnJahr

<a id="RAP-Funktion_&quot;FilterLaufbahnJahr&quot;"></a>
<a id="RAP-Funktion_.22FilterLaufbahnJahr.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure FilterLaufbahnJahr(const VonJahr, BisJahr: Integer);
```


filtert die Laufbahndaten der Schüler für das angegebene Intervall;
vonJahr = 0 filtert vom Anfing bis BisJahr
bisJahr = 0 filtert von vonJahr bis zum Ende
VonJahr = 0 und BisJahr = 0 setzt die Abfrage zurück

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

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-27) · [FilterLaufbahnJahr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnJahr&oldid=48)
