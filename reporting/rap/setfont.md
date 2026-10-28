---
title: "SetFont"
---

# SetFont

<a id="RAP-Funktion_&quot;SetFont&quot;"></a>
<a id="RAP-Funktion_.22SetFont.22"></a>

## Signatur

```pascal
procedure SetFont(aReport: TppReport; const aFontname: String)
```

## Beschreibung

Setzt den Zeichensatz für alle Komponenten des Reports

## Parameter

```text
aReport      - der zu bearbeitende Report
aFontname    - Der Name des neuen Zeichensatzes
```


## Beispiel

```pascal
procedure ReportOnStartFirstPass;
begin
  Setfont(Report,'Tahoma');
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-87) · [SetFont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetFont&oldid=111)
