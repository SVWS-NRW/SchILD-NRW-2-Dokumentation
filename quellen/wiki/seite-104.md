---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: UeberspringeRecord"
---

# UeberspringeRecord

Gesicherte Wiki-Seite · Namensraum 0 · Version 2723 · Stand 2015-01-09.

[Lesbaren Artikel öffnen](/reporting/rap/ueberspringerecord) · [Originaldaten herunterladen](/dateien/quellen/seite-104.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure UeberspringeRecord(aPipeline: TppDatapipeline);
    überspringt einen Datensatz der Datenquelle
|-
|'''Parameter''' || 
    aPipeline  - Name der Datenpipeline
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    If Copy(Schueler['Name'],1,1) = 'D' then UeberspringeRecord(Schueler);
    oder
    While Copy(Schueler['Name'],1,1) = 'D' Do
    Begin
      UeberspringeRecord(Schueler);
    End;

    Bitte beachten Sie, dass die Funktion beim letzten Datensatz nicht weiterspringen kann,
    dies muss u.U. berücksichtigt werden!

|}



'''Zurück zu [[RAP-Funktionen]]'''
```
