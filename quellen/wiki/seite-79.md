---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectFromListEx"
---

# SelectFromListEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 100 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/selectfromlistex) · [Originaldaten herunterladen](/dateien/quellen/seite-79.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectFromListEx(Caption, Optionlist, Default: String; Trennzeichen: Char): String;
    ermöglicht die Auswahl eines Elemente aus einer Dropdown-Liste, deren
    Elemente durch ein beliebiges Zeichen getrennt sind.
|-
|'''Parameter''' || 
    Caption      - Titel des Dialoges
    Optionslist  - Liste der verfügbaren Optionen
    Default      - voreingestellter Rückgabewert
    Trennzeichen - Trennzeichen der Optionsliste
|-
|'''Rückgabewert''' ||
    Die gewählte Option
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
    var
      lSchulform : String;
    begin
      lSchulform:=SelectFromlistEx('Bitte Schulform wählen',
      'Gymnasium|Realschule|Hauptschule','Realschule,'|');
      ...
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
