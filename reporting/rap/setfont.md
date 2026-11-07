---
title: "SetFont"
---

# SetFont

## Beschreibung

Setzt den Zeichensatz für alle Komponenten des Reports

```pascal
procedure SetFont(aReport: TppReport; const aFontname: String)
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aReport` | der zu bearbeitende Report |
| `aFontname` | Der Name des neuen Zeichensatzes |

## Beispiel

```pascal
procedure ReportOnStartFirstPass;
begin
  Setfont(Report,'Tahoma');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [SetFont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetFont&oldid=111)
