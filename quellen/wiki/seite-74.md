---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectAdressArt"
---

# SelectAdressArt

Gesicherte Wiki-Seite · Namensraum 0 · Version 95 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/selectadressart) · [Originaldaten herunterladen](/dateien/quellen/seite-74.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectAdressArt: String;
    Diese Funktion bietet alle im Feld „AdressArt“ des Kataloges „Adressarten“ gefundenen
    Einträge zur Auswahl an.
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    Adressart.
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     var
       lAdressArt : String;
     begin
       lAdressArt:=SelectAdressArt;
       FilterAdressArt(lAdressArt);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
