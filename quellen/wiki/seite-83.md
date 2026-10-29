---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectStringEx"
---

# SelectStringEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 5386 · Stand 2022-02-16.

[Lesbaren Artikel öffnen](/reporting/rap/selectstringex) · [Originaldaten herunterladen](/dateien/quellen/seite-83.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectStringEx(Prompt, Optionsliste: String; Trennzeichen: Char): String;
|-
|'''Parameter''' || 
    Prompt             - Hinweistext
    Optionsliste       - Mit Trennzeichen separierte Liste von Daten, die in einem
                         Auswahldialog angezeigt werden.
    Trennzeichen       - Beliebig wählbar, darf nur nicht in den zu trennenden
                         Datensätzen vorkommen
|-
|'''Rückgabewert''' ||
    Gewählte Option.
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     var
       lSchulform : String;
     begin
       lSchulform:=SelectStringEx('Bitte Schulform wählen',
      'Gymnasium|Realschule|Hauptschule','|');
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
