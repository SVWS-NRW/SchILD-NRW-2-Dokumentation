---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: EditRichTextEx"
---

# EditRichTextEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 37 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/editrichtextex) · [Originaldaten herunterladen](/dateien/quellen/seite-18.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function EditRichTextEx(const Default: String; const aCaption: String): String;
|-
|'''Parameter''' || 
    Default            - Zu bearbeitender Richtext, kann auch leer sein
    aCaption           - Überschrift, wird im Titelbalken des Editorfensters angezeigt
|-
|'''Rückgabewert''' ||
    Veränderter Richtext
|- 
|'''Beispiel''' || 
    RichText1.RichText:=EditRichTextEx('','Zeugnisbemerkung');
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
