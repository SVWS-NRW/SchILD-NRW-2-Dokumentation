---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetFont"
---

# SetFont

Gesicherte Wiki-Seite · Namensraum 0 · Version 111 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setfont) · [Originaldaten herunterladen](/dateien/quellen/seite-87.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetFont(aReport: TppReport; const aFontname: String)
    Setzt den Zeichensatz für alle Komponenten des Reports
|-
|'''Parameter''' || 
    aReport      - der zu bearbeitende Report
    aFontname    - Der Name des neuen Zeichensatzes
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportOnStartFirstPass;
    begin
      Setfont(Report,'Tahoma');
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
