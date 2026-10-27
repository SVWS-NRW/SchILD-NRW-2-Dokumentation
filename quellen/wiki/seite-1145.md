---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Datenliste"
---

# Datenliste

Gesicherte Wiki-Seite · Namensraum 0 · Version 4250 · Stand 2019-11-13.

[Lesbaren Artikel öffnen](/reporting/rap/datenliste) · [Originaldaten herunterladen](/dateien/quellen/seite-1145.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    DatenListe(aDatapipeline: TppDBPipeline; aFeld, aSep: string; duplikate: boolean ): string;
Diese liefert eine Liste (getrennt durch ein wählbares Trennzeichen ) für ein Feld in einer Datenquelle, mit der Option, ob doppelt auftretende Werte ausgegeben werden sollen oder nicht.
|-
|'''Parameter''' || 
    Datenquelle, Datenfeld,Trennzeichen,true/false
|-
|'''Rückgabewert''' ||
    Datenliste z.B. 05a, 06a, 07a, 08a aus dem Beispiel
|- 
|'''Beispiel''' || 
    lblBesuchteKlassen.Caption := DatenListe( SchuelerLaufbahn, 'Klasse', ', ', false );
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
