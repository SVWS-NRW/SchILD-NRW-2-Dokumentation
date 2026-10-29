---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FileOpenDlg"
---

# FileOpenDlg

Gesicherte Wiki-Seite · Namensraum 0 · Version 43 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/fileopendlg) · [Originaldaten herunterladen](/dateien/quellen/seite-22.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    XXXfunction FileOpenDlg(const aFilename, aInitialDir,
                               aFilter: String): String;
|-
|'''Parameter''' || 
    aFilename          - Name der zu öffnenden Datei, evtl. mit Platzhaltern
    aInitialDir        - Startverzeichnis, Leerer String öffnet im aktuellen
                         Verzeichnis
    aFilter            - Dateinamenfilter
|-
|'''Rückgabewert''' ||
    Pfad plus Name der zu öffnenden Datei, leerer String, wenn der Dialog ab
|- 
|'''Beispiel''' || 
    Fn:=FileOpenDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
