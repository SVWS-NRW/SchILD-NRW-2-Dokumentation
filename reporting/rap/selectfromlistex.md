---
title: "SelectFromListEx"
wiki_title: "SelectFromListEx"
wiki_page_id: 79
wiki_revision: 100
---

# SelectFromListEx

<a id="RAP-Funktion_&quot;SelectFromListEx&quot;"></a>
<a id="RAP-Funktion_.22SelectFromListEx.22"></a>

## RAP-Funktion "SelectFromListEx"

## Beschreibung

```pascal
function SelectFromListEx(Caption, Optionlist, Default: String; Trennzeichen: Char): String;
ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste, deren
Elemente durch ein beliebiges Zeichen getrennt sind.
```

## Parameter

```text
Caption      - Titel des Dialoges
Optionslist  - Liste der verfügbaren Optionen
Default      - voreingestellter Rückgabewert
Trennzeichen - Trennzeichen der Optionsliste
```

## Rückgabewert

```text
Die gewählte Option
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lSchulform : String;
begin
  lSchulform:=SelectFromlistEx('Bitte Schulform wählen',
  'Gymnasium|Realschule|Hauptschule','Realschule,'|');
  ...
end;
```


---

Quelle: [SelectFromListEx – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectFromListEx&oldid=100) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectFromListEx&action=history)
