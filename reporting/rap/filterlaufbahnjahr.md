---
title: "FilterLaufbahnJahr"
wiki_title: "FilterLaufbahnJahr"
wiki_page_id: 27
wiki_revision: 48
---

# FilterLaufbahnJahr

<a id="RAP-Funktion_&quot;FilterLaufbahnJahr&quot;"></a>
<a id="RAP-Funktion_.22FilterLaufbahnJahr.22"></a>

## RAP-Funktion "FilterLaufbahnJahr"

## Beschreibung

```pascal
procedure FilterLaufbahnJahr(const VonJahr, BisJahr: Integer);
filtert die Laufbahndaten der Schüler für das angegebene Intervall;
vonJahr = 0 filtert vom Anfing bis BisJahr
bisJahr = 0 filtert von vonJahr bis zum Ende
VonJahr = 0 und BisJahr = 0 setzt die Abfrage zurück
```

## Parameter

```text
VonJahr            - Beginn des Zeitraumes
BisJahr            - Ende des Zeitraumes
```

## Rückgabewert

```text
...
```

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


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-27) · [FilterLaufbahnJahr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnJahr&oldid=48)
