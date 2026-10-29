---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetJgIntervall ASD"
---

# SetJgIntervall ASD

Gesicherte Wiki-Seite · Namensraum 0 · Version 113 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setjgintervall-asd) · [Originaldaten herunterladen](/dateien/quellen/seite-89.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SetJgIntervall_ASD(Const aJahrgangsliste: String): Boolean;
|-
|'''Parameter''' || 
    aJahrgangsliste    - Liste der Jahrgänge, für die eine Übersicht erzeugt
                         werden soll
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       If SetJgIntervall_ASD('EF,Q1,Q2') then
         ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
