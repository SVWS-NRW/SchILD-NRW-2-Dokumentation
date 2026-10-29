---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: WaehleDatumStr"
---

# WaehleDatumStr

Gesicherte Wiki-Seite · Namensraum 0 · Version 131 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/waehledatumstr) · [Originaldaten herunterladen](/dateien/quellen/seite-106.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function WaehleDatumStr(const Hinweis: String; const LangFormat: Boolean): String;
|-
|'''Parameter''' || 
    Hinweis            - Hinweistext
    LangFormat         - True: Formatierung des Ergebnisses wie
                        „Langes Datumsformat“ in den Ländereinstellungen von
                         Windows, sonst Kurzformat
|-
|'''Rückgabewert''' ||
    Zeichenkette mit formatiertem Datum
|- 
|'''Beispiel''' || 
    lDatum:=WaehleDatumStr('Geburtsdatum:',True);
    liefert (z.B.) 'Sonntag, 26. Mai 1996'
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
