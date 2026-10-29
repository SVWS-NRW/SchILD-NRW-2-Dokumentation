---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectString"
---

# SelectString

Gesicherte Wiki-Seite · Namensraum 0 · Version 104 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/selectstring) · [Originaldaten herunterladen](/dateien/quellen/seite-82.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectString(Prompt, Optionsliste: String): String;
|-
|'''Parameter''' || 
    Prompt             - Hinweistext
    Optionsliste       - Mit Komma separierte Liste von Zeichenketten, die in einem
                         Auswahldialog angezeigt werden.
|-
|'''Rückgabewert''' ||
    Gewählte Option.
|- 
|'''Beispiel''' || 
     Procedure ReportBeforePrint;
     var
       lSchulform : String;
     begin
       lSchulform:=SelectString('Bitte Schulform wählen',
      'Gymnasium,Realschule,Hauptschule')
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
