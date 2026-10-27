---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: RtfToPlaintext"
---

# RtfToPlaintext

Gesicherte Wiki-Seite · Namensraum 0 · Version 91 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/rtftoplaintext) · [Originaldaten herunterladen](/dateien/quellen/seite-70.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function RtfToPlaintext(aRtfText: String): String;
|-
|'''Parameter''' || 
    aRtfText  - Richtext, aus dem alle Formatanweisungen entfernt werden
                sollen
|-
|'''Rückgabewert''' ||
    Reiner Text ohne Formatierung
|- 
|'''Beispiel''' || 
    Memo1.Text:=RtfToPlaintext(SchuelerLernabschnitte['ZeugnisBem'])
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
