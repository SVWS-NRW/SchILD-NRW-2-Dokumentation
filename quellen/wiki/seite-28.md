---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FilterLaufbahnJahrgangASD"
---

# FilterLaufbahnJahrgangASD

Gesicherte Wiki-Seite · Namensraum 0 · Version 49 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/filterlaufbahnjahrgangasd) · [Originaldaten herunterladen](/dateien/quellen/seite-28.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure FilterLaufbahnJahrgandASD(const Jahrgangsliste: String);
    filtert die Laufbahndaten der Schüler für die angegebenen Jahrgänge;
    Jahrgangsliste = '' setzt die Abfrage zurück
|-
|'''Parameter''' || 
    Jahrgangsliste  - kommaseparierte Liste der Jahrgänge
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
    begin
      SetUebersicht(True);
      FilterLaufbahnJahrgangASD('EF,Q1,Q2');
    end;

    procedure ReportAfterPrint;
    begin
      SetUebersicht(false);
      FilterLaufbahnJahrgangASD('');
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
