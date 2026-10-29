---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: StatistikKuerzelAusFachKuerzel"
---

# StatistikKuerzelAusFachKuerzel

Gesicherte Wiki-Seite · Namensraum 0 · Version 265 · Stand 2013-11-12.

[Lesbaren Artikel öffnen](/reporting/rap/statistikkuerzelausfachkuerzel) · [Originaldaten herunterladen](/dateien/quellen/seite-136.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
 Function StatistikKuerzelAusFachKuerzel ( const fach_krz: string): string;
 Ermittelt das Statistik-Kürzel eines Faches aus dem internen Fachkürzel. Damit kann
 z.B. ermittelt werden, um was für ein Fach es sich im Einzelfall handelt (unabhängig
 von der jeweils internen Bezeichnung). Dadurch können Reports, die bestimmte
 Fächer auswerten, unabhängig von der internen Bezeichnung gemacht werden.
|-
|'''Parameter''' || 
    fach_krz: Das interne Fachkürzel
|-
|'''Rückgabewert''' ||
    Statistikkürzel als String
|- 
|'''Beispiel''' || 
 If StatistikKuerzelAusFachKuerzel(SchuelerLeistungen[’FachKrz’]) =’D’
 then ShowMessage( ’Das Fach ist DEUTSCH’ );
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
