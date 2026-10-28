---
title: "SetAbitur"
---

# SetAbitur

<a id="RAP-Funktion_&quot;SetAbitur&quot;"></a>
<a id="RAP-Funktion_.22SetAbitur.22"></a>

## Signatur

```pascal
procedure SetAbitur(IsAbitur: Boolean);
```

## Parameter

```text
IsAbitur           - Boolescher Wert, bei 'True' werden die für das Abitur
                     relevanten Datenquellen (Abifaecher, FHRFaecher, Sprachenfolge
                     etc. aktiviert und beim Schülerwechsel aktualisiert.
```


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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-84) · [SetAbitur – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAbitur&oldid=108)
