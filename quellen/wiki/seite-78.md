---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectFromList"
---

# SelectFromList

Gesicherte Wiki-Seite · Namensraum 0 · Version 6033 · Stand 2025-07-14.

[Lesbaren Artikel öffnen](/reporting/rap/selectfromlist) · [Originaldaten herunterladen](/dateien/quellen/seite-78.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectFromList(Caption, Optionlist, Default: String): String;
    ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste
|-
|'''Parameter''' || 
    Caption      - Titel des Dialoges
    Optionslist  - Liste der verfügbaren Optionen
    Default      - voreingestellter Rückgabewert
|-
|'''Rückgabewert''' ||
    Die gewählte Option
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
    var
      lSchulform : String;
    begin
      lSchulform:=SelectFromlist('Bitte Schulform wählen',
      'Gymnasium,Realschule,Hauptschule','Realschule');
      ...
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
