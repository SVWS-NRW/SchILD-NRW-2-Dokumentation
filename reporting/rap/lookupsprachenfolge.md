---
title: "LookupSprachenfolge"
---

# LookupSprachenfolge

<a id="RAP-Funktion_&quot;LookupSprachenfolge&quot;"></a>
<a id="RAP-Funktion_.22LookupSprachenfolge.22"></a>

<a id="signatur"></a>

## Beschreibung

Prüft, ob das über sein Statistikkürzel angegebene Fach in der Sprachenfolge vorhanden ist.

```pascal
Function LookupSprachenfolge(aStatistikKrz: String):Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aStatistikKrz` | Statistikkürzel des gesuchten Faches |

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LookupSprachenfolge – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LookupSprachenfolge&oldid=71)
