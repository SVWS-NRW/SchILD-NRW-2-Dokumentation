---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectAdressName"
---

# SelectAdressName

Gesicherte Wiki-Seite · Namensraum 0 · Version 96 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/selectadressname) · [Originaldaten herunterladen](/dateien/quellen/seite-75.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectAdressName: String;
    Diese Funktion bietet alle im Feld „Name“ der „Allgemeinen Adressen“ gefundenen
    Einträge zur Auswahl an.
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    Adressbestandteil „Name“
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     var
      lAdresse : String;
     begin
      lAdresse:=SelectAdressName;
      FilterAdresse(lAdresse);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
