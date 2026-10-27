---
title: "FilterErzieherfunktion"
wiki_title: "FilterErzieherfunktion"
wiki_page_id: 26
wiki_revision: 47
---

# FilterErzieherfunktion

<a id="RAP-Funktion_&quot;FilterErzieherfunktion&quot;"></a>
<a id="RAP-Funktion_.22FilterErzieherfunktion.22"></a>

## RAP-Funktion "FilterErzieherfunktion"

## Beschreibung

```pascal
procedure FilterErzieherfunktion(const aFunktion: String);
```

## Parameter

```text
aFunktion          - Schulinterne Funktion, auf die gefiltert werden soll. Aus
                     den Erziehern werden die Einträge mit der gewählten
                     Funktion ausgewählt.
```

## Rückgabewert

```text
...
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

Quelle: [FilterErzieherfunktion – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterErzieherfunktion&oldid=47) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterErzieherfunktion&action=history)
