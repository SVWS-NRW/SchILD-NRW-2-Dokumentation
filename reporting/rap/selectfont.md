---
title: "Selectfont"
wiki_title: "Selectfont"
wiki_page_id: 77
wiki_revision: 98
---

# Selectfont

<a id="RAP-Funktion_&quot;Selectfont&quot;"></a>
<a id="RAP-Funktion_.22Selectfont.22"></a>

## RAP-Funktion "Selectfont"

## Beschreibung

```pascal
function Selectfont(const Default: String): String;
Dialog, um aus der Liste der im System registrierten Zeichensätze einen
bestimmten Zeichensatz auszuwählen
```

## Parameter

```text
Default    - Standardwert für den Zeichensatz
```

## Rückgabewert

```text
Gewählter Zeichensatz
```

## Beispiel

```pascal
procedure ReportOnStartFirstPass;
var
  NewFont : String;
begin
  NewFont:=Selectfont('Tahoma');
  Setfont(Report,NewFont);
end;
```


---

Quelle: [Selectfont – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Selectfont&oldid=98) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Selectfont&action=history)
