---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LookupSprachenfolge"
---

# LookupSprachenfolge

Gesicherte Wiki-Seite · Namensraum 0 · Version 71 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/lookupsprachenfolge) · [Originaldaten herunterladen](/dateien/quellen/seite-50.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Function LookupSprachenfolge(aStatistikKrz: String):Boolean;
|-
|'''Parameter''' || 
    aStatistikKrz - Statistikkürzel des gesuchten Faches
|-
|'''Rückgabewert''' ||
    Wahr, wenn das Fach existiert, sonst Falsch
|- 
|'''Beispiel''' || 
    Hinweis: Damit diese Funktion genutzt werden kann, muss vor dem Druck (sinnvollerweise
    im Ereignis ReportBeforePrint) die Funktion SetAbitur mit dem Parameter „True“ und nach
    dem Druck (in ReportAfterPrint) mit dem Parameter „False“ aufgerufen werden.
    Procedure DetailBeforePrint;
    begin
      Checkbox1.Checked:=LookupSprachenfolge('L7')
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
