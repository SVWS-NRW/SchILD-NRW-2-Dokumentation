---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetUebersichtKursartFilter"
---

# SetUebersichtKursartFilter

Gesicherte Wiki-Seite · Namensraum 0 · Version 180 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/setuebersichtkursartfilter) · [Originaldaten herunterladen](/dateien/quellen/seite-94.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
 '''procedure SetUebersichtKursartFilter(Const aKursartListe: String);'''
 Mit dieser Funktion können jetzt alle "Leistungsdatenquellen" 
 (nicht nur in den Übersichten) auf Kursarten gefiltert werden.
 Dabei ist folgendes zu beachten:
 -Es müssen die "schülerbezogenen" Kursarten verwendet werden 
 (also z.B. SetUebersichtKursartFilter( 'LK1,LK2'), wenn man nur Leistungskurse haben will 
 (SetUebersichtKursartFilter( 'LK') funktioniert nicht)
 -Wenn ein "-" der Liste vorangestellt wird, funktioniert der Filter ausschließend 
 (d.h. SetUebersichtKursartFilter( '-WPII,AGGT') berücksichtigt nur Leistungsdaten, 
 die nicht die Kursart WPII oder AGGT haben)

|-
|'''Parameter''' || 
    aListe    - Kommaseparierte Liste der gewünschten Kursarten
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetUebersichtKursartFilter('AGGT,ZUV');
     end;
     Damit werden in der Leistungsübersicht nur Fächer mit den Kursarten
     AGGT und ZUV nach Kursbezeichnung unterschieden.
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
