---
title: "SelectFromList"
---

# SelectFromList

## Beschreibung

ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste

```pascal
function SelectFromList(Caption, Optionlist, Default: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Caption` | Titel des Dialoges |
| `Optionslist` | Liste der verfügbaren Optionen |
| `Default` | voreingestellter Rückgabewert |

## Rückgabewert

Die gewählte Option

## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lSchulform : String;
begin
  lSchulform:=SelectFromlist('Bitte Schulform wählen',
  'Gymnasium,Realschule,Hauptschule','Realschule');
  ...
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [SelectFromList – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectFromList&oldid=6033)
