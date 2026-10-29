---
title: "SetFont"
---

# SetFont

<a id="RAP-Funktion_&quot;SetFont&quot;"></a>
<a id="RAP-Funktion_.22SetFont.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetFont(aReport: TppReport; const aFontname: String)
```


Setzt den Zeichensatz für alle Komponenten des Reports

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

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-87) · [SetFont – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetFont&oldid=111)
