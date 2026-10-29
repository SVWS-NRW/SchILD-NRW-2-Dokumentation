---
title: "SelectFromList"
---

# SelectFromList

<a id="RAP-Funktion_&quot;SelectFromList&quot;"></a>
<a id="RAP-Funktion_.22SelectFromList.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectFromList(Caption, Optionlist, Default: String): String;
```


ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste

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

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-78) · [SelectFromList – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectFromList&oldid=6033)
