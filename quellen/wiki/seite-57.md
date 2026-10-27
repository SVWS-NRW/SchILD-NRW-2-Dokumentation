---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: NurFaecherMitNoten"
---

# NurFaecherMitNoten

Gesicherte Wiki-Seite · Namensraum 0 · Version 78 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/nurfaechermitnoten) · [Originaldaten herunterladen](/dateien/quellen/seite-57.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure NurFaecherMitNoten(const Value: Boolean);
|-
|'''Parameter''' || 
    Value    - True, wenn nur Leistungsdaten mit eingetragenen Noten geholt werden sollen
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       NurFaecherMitNoten(True)
     end;
     z.B. in einem Zeugnis: Fächer ohne Noten erscheinen nicht
     auf dem Zeugnis. Damit Übersichten etc. funktionieren,
     sollte diese Option in ReportAfterPrint wieder zurückgesetzt werden
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
