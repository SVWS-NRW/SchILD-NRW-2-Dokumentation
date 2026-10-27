---
title: "SelectString"
wiki_title: "SelectString"
wiki_page_id: 82
wiki_revision: 104
---

# SelectString

<a id="RAP-Funktion_&quot;SelectString&quot;"></a>
<a id="RAP-Funktion_.22SelectString.22"></a>

## RAP-Funktion "SelectString"

## Beschreibung

```pascal
function SelectString(Prompt, Optionsliste: String): String;
```

## Parameter

```text
Prompt             - Hinweistext
Optionsliste       - Mit Komma separierte Liste von Zeichenketten, die in einem
                     Auswahldialog angezeigt werden.
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
  lSchulform:=SelectString('Bitte Schulform wählen',
 'Gymnasium,Realschule,Hauptschule')
```


---

Quelle: [SelectString – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectString&oldid=104) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectString&action=history)
