---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FilterSchuelerAdressArt"
---

# FilterSchuelerAdressArt

Gesicherte Wiki-Seite · Namensraum 0 · Version 50 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/filterschueleradressart) · [Originaldaten herunterladen](/dateien/quellen/seite-29.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure FilterSchuelerAdressArt(aAdressArt: String);
|-
|'''Parameter''' || 
    aAdressArt - Adressart, auf die gefiltert werden soll
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     var
       lAdressArt : String;
     begin
       lAdressArt:=SelectAdressArt;
       FilterSchuelerAdressArt(lAdressArt);
     end;
     (*Zu jedem Schüler werden die durch „lAdressArt“ gefilterten Einträge aus den „Allgemeinen
      Adressen“ angezeigt. Auf das Ergebnis kann über die Datenquelle „SchuelerAdressen“
      zugegriffen werden*)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
