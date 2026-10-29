---
title: "SelectStringEx"
---

# SelectStringEx

<a id="RAP-Funktion_&quot;SelectStringEx&quot;"></a>
<a id="RAP-Funktion_.22SelectStringEx.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectStringEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Prompt` | Hinweistext |
| `Optionsliste` | Mit Trennzeichen separierte Liste von Daten, die in einem Auswahldialog angezeigt werden. |
| `Trennzeichen` | Beliebig wählbar, darf nur nicht in den zu trennenden Datensätzen vorkommen |


## Rückgabewert

Gewählte Option.

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lSchulform : String;
 begin
   lSchulform:=SelectStringEx('Bitte Schulform wählen',
  'Gymnasium|Realschule|Hauptschule','|');
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-83) · [SelectStringEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectStringEx&oldid=5386)
