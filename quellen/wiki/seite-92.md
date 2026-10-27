---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetUebersicht"
---

# SetUebersicht

Gesicherte Wiki-Seite · Namensraum 0 · Version 116 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setuebersicht) · [Originaldaten herunterladen](/dateien/quellen/seite-92.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetUebersicht(IsUebersicht: Boolean);
|-
|'''Parameter''' || 
    IsUebersicht       - Boolescher Wert, bei 'True' werden die Leistungsdaten eines
                         Schülers im über SetJgIntervall definierten Zeitintervall in
                         eine Tabellenstruktur eingefügt. Da dieser Vorgang recht
                         zeitaufwendig ist, kann und sollte er durch diese Funktion nur
                         bei Bedarf  zugeschaltet werden
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetJgIntervall(12,13);
       SetUebersicht(True);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
