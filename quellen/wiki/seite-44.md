---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LoadFromFile"
---

# LoadFromFile

Gesicherte Wiki-Seite · Namensraum 0 · Version 65 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/loadfromfile) · [Originaldaten herunterladen](/dateien/quellen/seite-44.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function LoadFromFile(aFilename: String): String;
|-
|'''Parameter''' || 
    aFilename   Pfad + Dateiname der zu ladenden Textdatei
|-
|'''Rückgabewert''' ||
    Inhalt der Textdatei
|- 
|'''Beispiel''' || 
    lFilename:=FileOpenDlg('*.rtf','c:\Texte','Richtexte|*.rtf|Alle Dateien|*.*');
    RichText1.RichText:=LoadFromFile(lFilename')
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
