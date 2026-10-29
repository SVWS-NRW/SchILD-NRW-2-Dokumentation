---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FileAge"
---

# FileAge

Gesicherte Wiki-Seite · Namensraum 0 · Version 40 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/fileage) · [Originaldaten herunterladen](/dateien/quellen/seite-20.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function FileAge(const aFilename: String): DateTime;
    bestimmt das Dateidatum
|-
|'''Parameter''' || 
    aFilename          - Dateiname incl. Pfad
|-
|'''Rückgabewert''' ||
    Dateidatum
|- 
|'''Beispiel''' || 
    If FileAge('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') < StrToDate('01.01.2009') then...;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
