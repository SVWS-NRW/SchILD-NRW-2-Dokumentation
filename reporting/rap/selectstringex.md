---
title: "SelectStringEx"
wiki_title: "SelectStringEx"
wiki_page_id: 83
wiki_revision: 5386
---

# SelectStringEx

<a id="RAP-Funktion_&quot;SelectStringEx&quot;"></a>
<a id="RAP-Funktion_.22SelectStringEx.22"></a>

## RAP-Funktion "SelectStringEx"

## Beschreibung

```pascal
function SelectStringEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;
```

## Parameter

```text
Prompt             - Hinweistext
Optionsliste       - Mit Trennzeichen separierte Liste von Daten, die in einem
                     Auswahldialog angezeigt werden.
Trennzeichen       - Beliebig wählbar, darf nur nicht in den zu trennenden
                     Datensätzen vorkommen
```

## Rückgabewert

```text
Gewählte Option.
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lSchulform : String;
 begin
   lSchulform:=SelectStringEx('Bitte Schulform wählen',
  'Gymnasium|Realschule|Hauptschule','|');
```


---

Quelle: [SelectStringEx – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectStringEx&oldid=5386) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectStringEx&action=history)
