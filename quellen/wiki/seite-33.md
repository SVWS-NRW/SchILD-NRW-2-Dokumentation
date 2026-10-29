---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: GetSqlText"
---

# GetSqlText

Gesicherte Wiki-Seite · Namensraum 0 · Version 54 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/getsqltext) · [Originaldaten herunterladen](/dateien/quellen/seite-33.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function GetSqlText(aPipeline: TppDatapipeline): String;
    liefert den Text der SQL-Abfrage, die der als Parameter übergebenen
    Datenquelle zugrunde liegt.
|-
|'''Parameter''' || 
    aPipeline  - Name der Datenpipeline
|-
|'''Rückgabewert''' ||
    SqlText, falls die Pipeline eine DB-Pipeline ist, sonst ein leerer String
|- 
|'''Beispiel''' || 
    ShowMessage('Abfragetext: ' + GetSqlText(Schueler))
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
