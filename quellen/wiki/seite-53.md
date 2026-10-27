---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: MitLernabschnitten"
---

# MitLernabschnitten

Gesicherte Wiki-Seite · Namensraum 0 · Version 5723 · Stand 2024-02-20.

[Lesbaren Artikel öffnen](/reporting/rap/mitlernabschnitten) · [Originaldaten herunterladen](/dateien/quellen/seite-53.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure MitLernabschnitten(const Value: Boolean);
    Erzwingt die Aktualisierung der Datenquelle Lernabschnitte beim Wechsel
    eines Schülerdatensatzes.
|-
|'''Parameter''' || 
    Value - Boolescher Wert
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
    begin
      MitLernabschnitten(True);
    end;

    procedure ReportAfterPrint;
    begin
      MitLernabschnitten(false);
    end
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
