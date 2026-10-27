---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: FormatRTF"
---

# FormatRTF

Gesicherte Wiki-Seite · Namensraum 0 · Version 51 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/formatrtf) · [Originaldaten herunterladen](/dateien/quellen/seite-30.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure FormatRTF(aRichtext: TppcustomRichtext; aFontname: String; Groesse: Integer;Fett: Boolean; Kursiv: Boolean; Unterstrichen: Boolean; Gestrichen: Boolean; Farbe: TColor);
|-
|'''Parameter''' || 
    aRichtext          - Richtextelement, dessen Text neu formatiert werden soll
    aFontname          - Name des Zeichensatzes
    Groesse            - Schriftgröße (in Punkten)
    Fett               - Boolescher Wert, falls true, wird das Attribut gesetzt.
    Kursiv             - Boolescher Wert, falls true, wird das Attribut gesetzt.
    Unterstrichen      - Boolescher Wert, falls true, wird das Attribut gesetzt.
    Gestrichen         - Boolescher Wert, falls true, wird das Attribut gesetzt.
    Farbe              - Schriftfarbe (z.B. clRed, clBlue...)
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    begin
       FormatRTF(Richtext1,'Tahoma',11,true,true,false,false,clRed);
     end;
     (*Formatiert den Text in Tahoma, Größe 11, Fett, Kursiv, Schriftfarbe Rot*)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
