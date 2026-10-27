---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FilterLaufbahnJahr"
---

# FilterLaufbahnJahr

Gesicherte Wiki-Seite · Namensraum 0 · Version 48 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/filterlaufbahnjahr) · [Originaldaten herunterladen](/dateien/quellen/seite-27.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure FilterLaufbahnJahr(const VonJahr, BisJahr: Integer);
    filtert die Laufbahndaten der Schüler für das angegebene Intervall;
    vonJahr = 0 filtert vom Anfing bis BisJahr
    bisJahr = 0 filtert von vonJahr bis zum Ende
    VonJahr = 0 und BisJahr = 0 setzt die Abfrage zurück
|-
|'''Parameter''' || 
    VonJahr            - Beginn des Zeitraumes
    BisJahr            - Ende des Zeitraumes
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
    begin
      SetUebersicht(True);
      FilterLaufbahnJahr(2000,2009);
    end;

    procedure ReportAfterPrint;
    begin
      SetUebersicht(false);
      FilterLaufbahnJahr(0,0);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
