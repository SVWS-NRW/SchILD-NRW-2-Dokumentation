---
title: "FilterErzieherfunktion"
---

# FilterErzieherfunktion

<a id="RAP-Funktion_&quot;FilterErzieherfunktion&quot;"></a>
<a id="RAP-Funktion_.22FilterErzieherfunktion.22"></a>

## Signatur

```pascal
procedure FilterErzieherfunktion(const aFunktion: String);
```

## Parameter

```text
aFunktion          - Schulinterne Funktion, auf die gefiltert werden soll. Aus
                     den Erziehern werden die Einträge mit der gewählten
                     Funktion ausgewählt.
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lFunktion : String;
begin
  lFunktion:=SelectErzFunktion;
  FilterErzieherfunktion(lFunktion);
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-26) · [FilterErzieherfunktion – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterErzieherfunktion&oldid=47)
