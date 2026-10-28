---
title: "MitLernabschnitten"
---

# MitLernabschnitten

<a id="RAP-Funktion_&quot;MitLernabschnitten&quot;"></a>
<a id="RAP-Funktion_.22MitLernabschnitten.22"></a>

## Signatur

```pascal
procedure MitLernabschnitten(const Value: Boolean);
```

## Beschreibung

Erzwingt die Aktualisierung der Datenquelle Lernabschnitte beim Wechsel
eines Schülerdatensatzes.

## Parameter

```text
Value - Boolescher Wert
```


## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  MitLernabschnitten(True);
end;

procedure ReportAfterPrint;
begin
  MitLernabschnitten(false);
end
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-53) · [MitLernabschnitten – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=MitLernabschnitten&oldid=5723)
