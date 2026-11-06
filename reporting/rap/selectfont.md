---
title: "Selectfont"
---

# Selectfont

## Beschreibung

Dialog, um aus der Liste der im System registrierten Zeichensätze einen
bestimmten Zeichensatz auszuwählen

```pascal
function Selectfont(const Default: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Default` | Standardwert für den Zeichensatz |

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [Selectfont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Selectfont&oldid=98)
