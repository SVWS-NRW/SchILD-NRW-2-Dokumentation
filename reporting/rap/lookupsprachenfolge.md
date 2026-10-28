---
title: "LookupSprachenfolge"
---

# LookupSprachenfolge

<a id="RAP-Funktion_&quot;LookupSprachenfolge&quot;"></a>
<a id="RAP-Funktion_.22LookupSprachenfolge.22"></a>

## Signatur

```pascal
Function LookupSprachenfolge(aStatistikKrz: String):Boolean;
```

## Parameter

```text
aStatistikKrz - Statistikkürzel des gesuchten Faches
```

## Rückgabewert

Wahr, wenn das Fach existiert, sonst Falsch

## Beispiel

```pascal
Hinweis: Damit diese Funktion genutzt werden kann, muss vor dem Druck (sinnvollerweise
im Ereignis ReportBeforePrint) die Funktion SetAbitur mit dem Parameter „True“ und nach
dem Druck (in ReportAfterPrint) mit dem Parameter „False“ aufgerufen werden.
Procedure DetailBeforePrint;
begin
  Checkbox1.Checked:=LookupSprachenfolge('L7')
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-50) · [LookupSprachenfolge – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LookupSprachenfolge&oldid=71)
