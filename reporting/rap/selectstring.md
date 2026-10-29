---
title: "SelectString"
---

# SelectString

<a id="RAP-Funktion_&quot;SelectString&quot;"></a>
<a id="RAP-Funktion_.22SelectString.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectString(Prompt, Optionsliste: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Prompt` | Hinweistext |
| `Optionsliste` | Mit Komma separierte Liste von Zeichenketten, die in einem Auswahldialog angezeigt werden. |


## Rückgabewert

Gewählte Option.

## Beispiel

```pascal
Procedure ReportBeforePrint;
var
  lSchulform : String;
begin
  lSchulform:=SelectString('Bitte Schulform wählen',
 'Gymnasium,Realschule,Hauptschule')
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-82) · [SelectString – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectString&oldid=104)
