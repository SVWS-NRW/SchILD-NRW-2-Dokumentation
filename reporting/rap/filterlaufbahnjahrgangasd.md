---
title: "FilterLaufbahnJahrgangASD"
wiki_title: "FilterLaufbahnJahrgangASD"
wiki_page_id: 28
wiki_revision: 49
---

# FilterLaufbahnJahrgangASD

<a id="RAP-Funktion_&quot;FilterLaufbahnJahrgangASD&quot;"></a>
<a id="RAP-Funktion_.22FilterLaufbahnJahrgangASD.22"></a>

## RAP-Funktion "FilterLaufbahnJahrgangASD"

## Beschreibung

```pascal
procedure FilterLaufbahnJahrgandASD(const Jahrgangsliste: String);
filtert die Laufbahndaten der Schüler für die angegebenen Jahrgänge;
Jahrgangsliste = '' setzt die Abfrage zurück
```

## Parameter

```text
Jahrgangsliste  - kommaseparierte Liste der Jahrgänge
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
  FilterLaufbahnJahrgangASD('EF,Q1,Q2');
end;

procedure ReportAfterPrint;
begin
  SetUebersicht(false);
  FilterLaufbahnJahrgangASD('');
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-28) · [FilterLaufbahnJahrgangASD – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnJahrgangASD&oldid=49)
