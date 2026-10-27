---
title: "SetUebersichtEx"
wiki_title: "SetUebersichtEx"
wiki_page_id: 93
wiki_revision: 117
---

# SetUebersichtEx

<a id="RAP-Funktion_&quot;SetUebersichtEx&quot;"></a>
<a id="RAP-Funktion_.22SetUebersichtEx.22"></a>

## RAP-Funktion "SetUebersichtEx"

## Beschreibung

```pascal
procedure SetUebersichtEx(IsUebersicht: Boolean;  const aJahrgangsliste: String);
```

## Parameter

```text
IsUebersicht       - Boolescher Wert, bei 'True' werden die Leistungsdaten eines
                     Schülers im über aJahrgangsliste definierten Zeitintervall in
                     eine Tabellenstruktur eingefügt. Da dieser Vorgang recht
                     zeitaufwendig ist, kann und sollte er durch diese Funktion nur
                     bei Bedarf  zugeschaltet werden
aJahrgangsliste    - Kommaseparierte Liste der zu berücksichtigen (ASD-)Jahrgänge
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersichtEx(True, 'Q1,Q2');
 end;
```


---

Quelle: [SetUebersichtEx – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersichtEx&oldid=117) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersichtEx&action=history)
