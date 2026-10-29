---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SchulText"
---

# SchulText

Gesicherte Wiki-Seite · Namensraum 0 · Version 94 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/schultext) · [Originaldaten herunterladen](/dateien/quellen/seite-73.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SchulText(const Kuerzel: String): String;
|-
|'''Parameter''' || 
    Kuerzel - Kurzzeichen des Textes
|-
|'''Rückgabewert''' ||
    der dem Kürzel zugeordnete Text
|- 
|'''Beispiel''' || 
    procedure Label4711OnGetText(var Text: String);
    begin
      Text:='Schulleiter: ' + SchulText('Direktor');
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
