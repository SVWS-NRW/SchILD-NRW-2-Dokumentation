---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: AssignFont"
---

# AssignFont

Gesicherte Wiki-Seite · Namensraum 0 · Version 23 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/assignfont) · [Originaldaten herunterladen](/dateien/quellen/seite-12.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure AssignFont(aText: TppCustomRichText; aFont: TFont);
    ändert den Zeichensatz eines Richtextes. Die Größe bleibt unverändert
|-
|'''Parameter''' || 
    aText              - der zu verändernde Richtext
    aFont              - der neue Zeichensatz
|-
|'''Rückgabewert''' ||
 Der veränderte Richtext
|- 
|'''Beispiel''' || 
    AssignFont(Richtext1,Label1.Font);
    (*Dem Richtext wird der Zeichensatz eines Labels zugewiesen*)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
