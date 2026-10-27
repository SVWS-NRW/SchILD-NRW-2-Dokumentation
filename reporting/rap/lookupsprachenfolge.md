---
title: "LookupSprachenfolge"
wiki_title: "LookupSprachenfolge"
wiki_page_id: 50
wiki_revision: 71
---

# LookupSprachenfolge

<a id="RAP-Funktion_&quot;LookupSprachenfolge&quot;"></a>
<a id="RAP-Funktion_.22LookupSprachenfolge.22"></a>

## RAP-Funktion "LookupSprachenfolge"

## Beschreibung

```pascal
Function LookupSprachenfolge(aStatistikKrz: String):Boolean;
```

## Parameter

```text
aStatistikKrz - Statistikkürzel des gesuchten Faches
```

## Rückgabewert

```text
Wahr, wenn das Fach existiert, sonst Falsch
```

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

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-50) · [LookupSprachenfolge – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LookupSprachenfolge&oldid=71)
