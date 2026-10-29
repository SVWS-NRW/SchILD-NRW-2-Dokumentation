---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetzeKlassenAdressArt"
---

# SetzeKlassenAdressArt

Gesicherte Wiki-Seite · Namensraum 0 · Version 120 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setzeklassenadressart) · [Originaldaten herunterladen](/dateien/quellen/seite-96.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Procedure SetzeKlassenAdressArt(const AdressArt: String);
    Diese Prozedur kann benutzt werden, wenn die Datenquelle
    AllgAdresseZurKlasse verwendet werden soll. Voreingestellt
    ist die Adressart 'Betrieb'. Diese Datenquelle ist eine Detaildatenquelle
    zur Hauptdatenquelle 'Klassen'.
|-
|'''Parameter''' || 
    AdressArt    - zu berücksichtigende Adressenkategorie
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforeOpenDatapipelines;
     begin
       SetzeKlassenAdressArt('Kammern');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
