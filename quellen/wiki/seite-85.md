---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetAdressArt"
---

# SetAdressArt

Gesicherte Wiki-Seite · Namensraum 0 · Version 109 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setadressart) · [Originaldaten herunterladen](/dateien/quellen/seite-85.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetAdressArt(aZiel, aAdressArt: String);
|-
|'''Parameter''' || 
    aZiel              - ALLEADRESSEN' setzt den Filter für die Datenquelle
                        „AllgAdresseUndSchueler“, 'KLASSENADRESSEN' auf die Datenquelle
                        „AllgAdresseZurLKlasse“
    aAdressArt         - Gewünschte Adressart, entweder über SelectAdressArt auswählen
                         oder als Stringliteral (z.B. „Betrieb“) eingeben
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetAdressArt('ALLEADRESSEN','Betrieb');
     end
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
