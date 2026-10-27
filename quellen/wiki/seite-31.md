---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: GeschlechtToString"
---

# GeschlechtToString

Gesicherte Wiki-Seite · Namensraum 0 · Version 5650 · Stand 2023-01-18.

[Lesbaren Artikel öffnen](/reporting/rap/geschlechttostring) · [Originaldaten herunterladen](/dateien/quellen/seite-31.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function GeschlechtToString(aGeschlecht: integer; aMaennl_Form, aWeibl_Form: String): String;
|-
|'''Parameter''' || 
    aGeschlecht        - Geschlecht, m=3, w=4
    aMaennl_Form       - männliche Form
    aWeibl_Form        - weibliche Form
|-
|'''Rückgabewert''' ||
    Vorgabe, je nach Geschlecht
|- 
|'''Beispiel''' || 
    lAnrede:=GeschlechtToString(Schueler['Geschlecht'],'Schüler','Schülerin')
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
