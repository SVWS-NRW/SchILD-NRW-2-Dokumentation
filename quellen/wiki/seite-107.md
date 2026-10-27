---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: WaehleDatumUndZeit"
---

# WaehleDatumUndZeit

Gesicherte Wiki-Seite · Namensraum 0 · Version 132 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/waehledatumundzeit) · [Originaldaten herunterladen](/dateien/quellen/seite-107.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function WaehleDatumUndZeit(Hinweis: String; Var Datum, Uhrzeit: Datetime): Boolean;
|-
|'''Parameter''' || 
    Hinweis            - Hinweistext
    Datum              - Platzhalter für die zu wählenden Daten
    Uhrzeit            - Platzhalter für die zu wählenden Daten
|-
|'''Rückgabewert''' ||
    TRUE, falls der Dialog mit Ok beendet wurde, sonst FALSE
|- 
|'''Beispiel''' || 
    If WaehleDatum('Bitte Beginn der Veranstaltung
                    eingeben',lDatum,lUhrzeit) then...
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
