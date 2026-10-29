---
title: "UeberspringeRecord"
---

# UeberspringeRecord

<a id="RAP-Funktion_&quot;UeberspringeRecord&quot;"></a>
<a id="RAP-Funktion_.22UeberspringeRecord.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure UeberspringeRecord(aPipeline: TppDatapipeline);
```


überspringt einen Datensatz der Datenquelle

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

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-104) · [UeberspringeRecord – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UeberspringeRecord&oldid=2723)
