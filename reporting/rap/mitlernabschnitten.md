---
title: "MitLernabschnitten"
---

# MitLernabschnitten

<a id="RAP-Funktion_&quot;MitLernabschnitten&quot;"></a>
<a id="RAP-Funktion_.22MitLernabschnitten.22"></a>

<a id="signatur"></a>

## Beschreibung

Erzwingt die Aktualisierung der Datenquelle Lernabschnitte beim Wechsel
eines Schülerdatensatzes.

```pascal
procedure MitLernabschnitten(const Value: Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Value` | Boolescher Wert |

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [MitLernabschnitten – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=MitLernabschnitten&oldid=5723)
