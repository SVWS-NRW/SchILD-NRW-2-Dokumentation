---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: EinzelElement"
---

# EinzelElement

Gesicherte Wiki-Seite · Namensraum 0 · Version 164 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/einzelelement) · [Originaldaten herunterladen](/dateien/quellen/seite-119.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function EinzelElement( const text, trennzeichen: string; const position: integer ):
string
   Liefert das Einzelelement an Position "position" aus dem durch das Trennzeichen
   getrennten Text "text"
|-
|'''Parameter''' || 
    text: der zu analysierende Text
    trennzeichen: Das Trennzeichen
    position: Die Position des Einzelelementes im Text (beginnend bei 1)
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    txt := '1,2,3,4':
    if einzelelement( txt, ',', 2 ) = '2' then
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
