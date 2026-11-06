---
title: "UeberspringeRecord"
---

# UeberspringeRecord

## Beschreibung

überspringt einen Datensatz der Datenquelle

```pascal
procedure UeberspringeRecord(aPipeline: TppDatapipeline);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aPipeline` | Name der Datenpipeline |

## Beispiel

```pascal
If Copy(Schueler['Name'],1,1) = 'D' then UeberspringeRecord(Schueler);
oder
While Copy(Schueler['Name'],1,1) = 'D' Do
Begin
  UeberspringeRecord(Schueler);
End;

Bitte beachten Sie, dass die Funktion beim letzten Datensatz nicht weiterspringen kann,
dies muss u.U. berücksichtigt werden!
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [UeberspringeRecord – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UeberspringeRecord&oldid=2723)
