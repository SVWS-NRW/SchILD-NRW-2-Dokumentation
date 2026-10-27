---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FileSaveDlg"
---

# FileSaveDlg

Gesicherte Wiki-Seite · Namensraum 0 · Version 44 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/filesavedlg) · [Originaldaten herunterladen](/dateien/quellen/seite-23.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function FileSaveDlg(const aFilename, aInitialDir,
                         aFilter: String): String;
|-
|'''Parameter''' || 
    aFilename          - Name der zu speichernden Datei, evtl. mit Platzhaltern
    aInitialDir        - Startverzeichnis, Leerer String öffnet im aktuellen
                         Verzeichnis
    aFilter            - Dateinamenfilter
|-
|'''Rückgabewert''' ||
    Pfad plus Name der zu speichernden Datei, leerer String, wenn der Dialog
    abgebrochen wird
|- 
|'''Beispiel''' || 
    Fn:=FileSaveDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
