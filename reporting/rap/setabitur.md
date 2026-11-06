---
title: "SetAbitur"
---

# SetAbitur

## Beschreibung

Schaltet die für Abiturreports benötigten Datenquellen ein oder aus. Bei eingeschalteter Funktion werden sie beim Wechsel des Schülerdatensatzes aktualisiert.

```pascal
procedure SetAbitur(IsAbitur: Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `IsAbitur` | Boolescher Wert, bei 'True' werden die für das Abitur relevanten Datenquellen (Abifaecher, FHRFaecher, Sprachenfolge etc. aktiviert und beim Schülerwechsel aktualisiert. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAbitur(True);
 end;

Procedure ReportAfterPrint;
begin
  SetAbitur(False);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [SetAbitur – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAbitur&oldid=108)
