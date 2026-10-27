---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: IncFontSize"
---

# IncFontSize

Gesicherte Wiki-Seite · Namensraum 0 · Version 56 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/incfontsize) · [Originaldaten herunterladen](/dateien/quellen/seite-35.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure IncFontSize(aReport: TppReport; const aIncrement: Integer);
    Vergößert oder verkleinert die Zeichensatz größe
|-
|'''Parameter''' || 
    aReport        - der Report, dessen Komponenten bearbeitet werden sollen
    aIncrement     - Wert, um den der Zeichensatz vergrößert (oder bei negativem
                     Increment) verkleinert werden soll
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    ...procedure ReportOnStartFirstPass;
    begin
      IncFontSize(Report,1);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
