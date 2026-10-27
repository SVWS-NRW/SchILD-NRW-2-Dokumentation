---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ReplaceTextEx"
---

# ReplaceTextEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 4732 · Stand 2021-02-08.

[Lesbaren Artikel öffnen](/reporting/rap/replacetextex) · [Originaldaten herunterladen](/dateien/quellen/seite-64.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function ReplaceTextEx(aSourceText, aSearchText,
                           aReplaceText: String): *   String;
    Im Unterschied zu ReplaceText berücksichtigt ReplaceTextEx Groß- und Kleinschreibung.
|-
|'''Parameter''' || 
    aSourceText        - Text, der den zu ersetzenden String (selbst
                         definierter Platzhalter) enthält
    aSearchText        - String, der ersetzt werden soll
    aReplaceText       -
|-
|'''Rückgabewert''' ||
    Veränderter Quelltext
|- 
|'''Beispiel''' || 
    Memo1.Text:=ReplaceTextEx(Memo1.Text,'$VORNAME$',Schueler['Vorname']);
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
