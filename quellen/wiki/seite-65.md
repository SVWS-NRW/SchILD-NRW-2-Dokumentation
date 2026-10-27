---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ResetAdressArt"
---

# ResetAdressArt

Gesicherte Wiki-Seite · Namensraum 0 · Version 86 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/resetadressart) · [Originaldaten herunterladen](/dateien/quellen/seite-65.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure ResetAdressArt(aZiel: String);
|-
|'''Parameter''' || 
    aZiel   - ALLEADRESSEN' setzt den Filter für die Datenquelle
             „AllgAdresseUndSchueler“ zurück, 'KLASSENADRESSEN' den Filter
              auf  die Datenquelle „AllgAdresseZurLKlasse“ zurück
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportAfterPrint;
     begin
       ResetAdressArt('ALLEADRESSEN');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
