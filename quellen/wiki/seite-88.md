---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetJgIntervall"
---

# SetJgIntervall

Gesicherte Wiki-Seite · Namensraum 0 · Version 112 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setjgintervall) · [Originaldaten herunterladen](/dateien/quellen/seite-88.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SetJgIntervall(aStartJg, aEndJg: Integer): Boolean; Diese Funktion
    ist veraltet. Statt dessen sollte SetJgIntervall_ASD benutzt werden.
|-
|'''Parameter''' || 
    aStartJg           - Beginn des Jahrgangsintervalles, für das Übersichten erzeugt
                         werden solle
    aEndJg             - Ende des Jahrgangsintervalles, für das Übersichten erzeugt
                         werden sollen
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       If SetJgIntervall(12,13) then
         ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
