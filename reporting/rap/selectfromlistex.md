---
title: "SelectFromListEx"
---

# SelectFromListEx

<a id="RAP-Funktion_&quot;SelectFromListEx&quot;"></a>
<a id="RAP-Funktion_.22SelectFromListEx.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectFromListEx(Caption, Optionlist, Default: String; Trennzeichen: Char): String;
```


ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste, deren
Elemente durch ein beliebiges Zeichen getrennt sind.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Caption` | Titel des Dialoges |
| `Optionslist` | Liste der verfügbaren Optionen |
| `Default` | voreingestellter Rückgabewert |
| `Trennzeichen` | Trennzeichen der Optionsliste |


## Rückgabewert

Die gewählte Option

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


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SelectFromListEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectFromListEx&oldid=100)
