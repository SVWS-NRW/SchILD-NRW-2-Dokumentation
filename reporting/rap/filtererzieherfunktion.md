---
title: "FilterErzieherfunktion"
---

# FilterErzieherfunktion

<a id="RAP-Funktion_&quot;FilterErzieherfunktion&quot;"></a>
<a id="RAP-Funktion_.22FilterErzieherfunktion.22"></a>

<a id="signatur"></a>

## Beschreibung

Wählt aus den Erziehungsberechtigten die Einträge mit der angegebenen schulinternen Funktion aus.

```pascal
procedure FilterErzieherfunktion(const aFunktion: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFunktion` | Schulinterne Funktion, auf die gefiltert werden soll. Aus den Erziehern werden die Einträge mit der gewählten Funktion ausgewählt. |

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [FilterErzieherfunktion – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterErzieherfunktion&oldid=47)
