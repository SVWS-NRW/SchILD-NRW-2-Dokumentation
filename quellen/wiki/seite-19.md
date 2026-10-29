---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Faechervorbelegen"
---

# Faechervorbelegen

Gesicherte Wiki-Seite · Namensraum 0 · Version 39 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/faechervorbelegen) · [Originaldaten herunterladen](/dateien/quellen/seite-19.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    '''procedure Faechervorbelegen;'''

    Erzeugt einen Header, der alle bei den gewählten Schülern im gewählten Lernabschnitt
    gefundenen Fächer enthält. Diese Prozedur ist nur nötig und sinnvoll, wenn eine tabellarische
    Übersicht über alle gewählten Schüler und deren Leistungsdaten gewünscht wird, da ein Aufruf
    dieser Prozedur dazu führt, dass die Leistungsdaten aller in der Auswahl befindlichen
    Schüler gelesen werden, damit eine interne Tabelle mit diesen Fächern angelegt werden kann.
    In allen anderen Fällen ist dieser Aufruf unnötig! Nach der Darstellung der Tabelle muss
    unbedingt die Prozedur 'ResetFaechervorbelegung' aufgerufen werden!
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    ...
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
