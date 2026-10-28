---
title: "Selectfont"
---

# Selectfont

<a id="RAP-Funktion_&quot;Selectfont&quot;"></a>
<a id="RAP-Funktion_.22Selectfont.22"></a>

## Signatur

```pascal
function Selectfont(const Default: String): String;
```

## Beschreibung

Dialog, um aus der Liste der im System registrierten Zeichensätze einen
bestimmten Zeichensatz auszuwählen

## Parameter

```text
Default    - Standardwert für den Zeichensatz
```

## Rückgabewert

Gewählter Zeichensatz

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

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-77) · [Selectfont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Selectfont&oldid=98)
