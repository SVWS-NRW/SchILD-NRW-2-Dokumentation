---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetAbitur"
---

# SetAbitur

Gesicherte Wiki-Seite · Namensraum 0 · Version 108 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setabitur) · [Originaldaten herunterladen](/dateien/quellen/seite-84.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetAbitur(IsAbitur: Boolean);
|-
|'''Parameter''' || 
    IsAbitur           - Boolescher Wert, bei 'True' werden die für das Abitur
                         relevanten Datenquellen (Abifaecher, FHRFaecher, Sprachenfolge
                         etc. aktiviert und beim Schülerwechsel aktualisiert.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetAbitur(True);
     end;

    Procedure ReportAfterPrint;
    begin
      SetAbitur(False);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
