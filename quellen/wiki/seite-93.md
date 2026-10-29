---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetUebersichtEx"
---

# SetUebersichtEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 117 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setuebersichtex) · [Originaldaten herunterladen](/dateien/quellen/seite-93.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetUebersichtEx(IsUebersicht: Boolean;  const aJahrgangsliste: String);
|-
|'''Parameter''' || 
    IsUebersicht       - Boolescher Wert, bei 'True' werden die Leistungsdaten eines
                         Schülers im über aJahrgangsliste definierten Zeitintervall in
                         eine Tabellenstruktur eingefügt. Da dieser Vorgang recht
                         zeitaufwendig ist, kann und sollte er durch diese Funktion nur
                         bei Bedarf  zugeschaltet werden
    aJahrgangsliste    - Kommaseparierte Liste der zu berücksichtigen (ASD-)Jahrgänge
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetUebersichtEx(True, 'Q1,Q2');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
