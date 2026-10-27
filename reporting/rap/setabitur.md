---
title: "SetAbitur"
wiki_title: "SetAbitur"
wiki_page_id: 84
wiki_revision: 108
---

# SetAbitur

<a id="RAP-Funktion_&quot;SetAbitur&quot;"></a>
<a id="RAP-Funktion_.22SetAbitur.22"></a>

## RAP-Funktion "SetAbitur"

## Beschreibung

```pascal
procedure SetAbitur(IsAbitur: Boolean);
```

## Parameter

```text
IsAbitur           - Boolescher Wert, bei 'True' werden die für das Abitur
                     relevanten Datenquellen (Abifaecher, FHRFaecher, Sprachenfolge
                     etc. aktiviert und beim Schülerwechsel aktualisiert.
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAbitur(True);
 end;

Procedure ReportAfterPrint;
begin
  SetAbitur(False);
end;
```


---

Quelle: [SetAbitur – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAbitur&oldid=108) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAbitur&action=history)
