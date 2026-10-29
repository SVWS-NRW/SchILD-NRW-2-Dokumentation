---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FileExists"
---

# FileExists

Gesicherte Wiki-Seite · Namensraum 0 · Version 41 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/fileexists) · [Originaldaten herunterladen](/dateien/quellen/seite-21.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function FileExists(const aFilename: String): Boolean;
    prüft, ob eine Datei existiert
|-
|'''Parameter''' || 
    aFilename          - Dateiname incl. Pfad
|-
|'''Rückgabewert''' ||
    True, falls die Datei existiert, sonst False
|- 
|'''Beispiel''' || 
    If FileExists('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') then...;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
