---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: JahrgangsListe"
---

# JahrgangsListe

Gesicherte Wiki-Seite · Namensraum 0 · Version 59 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/jahrgangsliste) · [Originaldaten herunterladen](/dateien/quellen/seite-38.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function JahrgangsListe(Const aEndJg: String; const aDiff: Integer): String;
|-
|'''Parameter''' || 
    aEndJg  - Letzter Jahrgang des Intervalls
    aDiff   - Abstand zum Startjahrgang
|-
|'''Rückgabewert''' ||
    Kommaseparierte Liste der Jahrgänge
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     var
       lJahrgaenge : String;
     begin
       lJahrgaenge:=JahrgangsListe('Q2',3); //Ergebnis: '08,09,EF,Q1'
       SetJgIntervall_ASD(lJahrgaenge);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
