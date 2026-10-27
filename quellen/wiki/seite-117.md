---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: PluginVersion"
---

# PluginVersion

Gesicherte Wiki-Seite · Namensraum 0 · Version 160 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/pluginversion) · [Originaldaten herunterladen](/dateien/quellen/seite-117.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function PluginVersion: string;
    Liefert die Version der Reporting.dll
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
     var
      vers: string;
     begin
      vers := PluginVersion;
      if vers >= ‘2’ then
      begin
      end;
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
