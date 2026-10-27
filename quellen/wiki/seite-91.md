---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetTextAttributes"
---

# SetTextAttributes

Gesicherte Wiki-Seite · Namensraum 0 · Version 115 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/settextattributes) · [Originaldaten herunterladen](/dateien/quellen/seite-91.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetTextAttributes(aText: TppCustomRichText);
|-
|'''Parameter''' || 
    aText  - Richtextelement
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Richtext1.Font.Name:=='Tahoma';
    Richtext1.Font.Size:=16;
    Richtext1.Font.Bold:=True;
    Richtext1.Font.Italic:=True;
    SetTextattributes(Richtext1);
    Formatiert den gesamten Text des Richtextelementes in dem gewünschten Zeichensatz.
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
