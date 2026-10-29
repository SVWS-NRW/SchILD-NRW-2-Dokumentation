---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: AnzahlElemente"
---

# AnzahlElemente

Gesicherte Wiki-Seite · Namensraum 0 · Version 162 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/anzahlelemente) · [Originaldaten herunterladen](/dateien/quellen/seite-118.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function AnzahlElemente( const text, trennzeichen: string ): integer;
    Liefert die Anzahl der durch das Trennzeichen getrennten Einzelelemente in "text"
|-
|'''Parameter''' || 
    text: der zu analysierende Text
    trennzeichen: Das Trennzeichen
|-
|'''Rückgabewert''' ||
    Integerwert der Elementanzahl.
|- 
|'''Beispiel''' || 
    txt := '1,2,3,4':
    if AnzahlElemente( txt, ',' ) > 2 then
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
