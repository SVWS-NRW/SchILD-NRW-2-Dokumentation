---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Selectfont"
---

# Selectfont

Gesicherte Wiki-Seite · Namensraum 0 · Version 98 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/selectfont) · [Originaldaten herunterladen](/dateien/quellen/seite-77.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function Selectfont(const Default: String): String;
    Dialog, um aus der Liste der im System registrierten Zeichensätze einen
    bestimmten Zeichensatz auszuwählen
|-
|'''Parameter''' || 
    Default    - Standardwert für den Zeichensatz
|-
|'''Rückgabewert''' ||
    Gewählter Zeichensatz
|- 
|'''Beispiel''' || 
    procedure ReportOnStartFirstPass;
    var
      NewFont : String;
    begin
      NewFont:=Selectfont('Tahoma');
      Setfont(Report,NewFont);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
