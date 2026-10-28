---
title: "UeberspringeRecord"
---

# UeberspringeRecord

<a id="RAP-Funktion_&quot;UeberspringeRecord&quot;"></a>
<a id="RAP-Funktion_.22UeberspringeRecord.22"></a>

## Signatur

```pascal
procedure UeberspringeRecord(aPipeline: TppDatapipeline);
```

## Beschreibung

überspringt einen Datensatz der Datenquelle

## Parameter

```text
aPipeline  - Name der Datenpipeline
```


## Beispiel

```text
If Copy(Schueler['Name'],1,1) = 'D' then UeberspringeRecord(Schueler);
oder
While Copy(Schueler['Name'],1,1) = 'D' Do
Begin
  UeberspringeRecord(Schueler);
End;

Bitte beachten Sie, dass die Funktion beim letzten Datensatz nicht weiterspringen kann,
dies muss u.U. berücksichtigt werden!
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-104) · [UeberspringeRecord – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UeberspringeRecord&oldid=2723)
