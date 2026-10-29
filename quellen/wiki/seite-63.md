---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ReplaceText"
---

# ReplaceText

Gesicherte Wiki-Seite · Namensraum 0 · Version 5651 · Stand 2023-01-18.

[Lesbaren Artikel öffnen](/reporting/rap/replacetext) · [Originaldaten herunterladen](/dateien/quellen/seite-63.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function ReplaceText(aSourceText, aSearchText,
                         aReplaceText: String): String;
|-
|'''Parameter''' || 
    aSourceText        - Text, der den zu ersetzenden String (selbst
                         definierter Platzhalter) enthält
    aSearchText        - String, der ersetzt werden soll
    aReplaceText       - String, der eingefügt werden soll
|-
|'''Rückgabewert''' ||
    Veränderter Quelltext
|- 
|'''Beispiel''' || 
    Memo1.Text:=ReplaceText(Memo1.Text,'$VORNAME$',Schueler['Vorname']);
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
