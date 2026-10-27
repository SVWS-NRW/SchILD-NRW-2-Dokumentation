---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: CreateNotenHeaderUS"
---

# CreateNotenHeaderUS

Gesicherte Wiki-Seite · Namensraum 0 · Version 35 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/createnotenheaderus) · [Originaldaten herunterladen](/dateien/quellen/seite-16.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    '''procedure CreateNotenHeaderUS(aFaecherListe: String);'''
    (*US steht für unsortiert, d.h. der erzeugte Header entspricht der im
    Parameter übergebenen Fächerfolge*). Diese Prozedur ist nur nötig und sinnvoll,
    wenn eine tabellarische Übersicht über alle gewählten Schüler 
    und deren Leistungsdaten gewünscht wird, da ein Aufruf dieser Prozedur dazu führt,
    dass die Leistungsdaten aller in der Auswahl befindlichen Schüler gelesen werden,
    damit eine interne Tabelle mit diesen Fächern angelegt werden kann.
    In allen anderen Fällen ist dieser Aufruf unnötig! Nach der Darstellung der Tabelle muss
    unbedingt die Prozedur 'ResetFaechervorbelegung' aufgerufen werden!
|-
|'''Parameter''' || 
    aFaecherListe      - Kommaseparierte Liste der Fachkürzel, für die
                         eine Übersicht erzeugt werden soll.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    CreateNotenHeaderUS('D,E,M,F,L');
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
