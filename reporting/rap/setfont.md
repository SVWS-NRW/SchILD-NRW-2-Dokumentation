---
title: "SetFont"
wiki_title: "SetFont"
wiki_page_id: 87
wiki_revision: 111
---

# SetFont

<a id="RAP-Funktion_&quot;SetFont&quot;"></a>
<a id="RAP-Funktion_.22SetFont.22"></a>

## RAP-Funktion "SetFont"

## Beschreibung

```pascal
procedure SetFont(aReport: TppReport; const aFontname: String)
Setzt den Zeichensatz für alle Komponenten des Reports
```

## Parameter

```text
aReport      - der zu bearbeitende Report
aFontname    - Der Name des neuen Zeichensatzes
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
procedure ReportOnStartFirstPass;
begin
  Setfont(Report,'Tahoma');
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-87) · [SetFont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetFont&oldid=111)
