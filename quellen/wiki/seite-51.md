---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Mehrfachauswahl"
---

# Mehrfachauswahl

Gesicherte Wiki-Seite · Namensraum 0 · Version 1842 · Stand 2014-03-24.

[Lesbaren Artikel öffnen](/reporting/rap/mehrfachauswahl) · [Originaldaten herunterladen](/dateien/quellen/seite-51.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function Mehrfachauswahl(Prompt, Optionsliste: String; Trennzeichen: Char): TStringList;
    ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste
|-
|'''Parameter''' || 
    Prompt       - Eingabeaufforderung
    Optionsliste - Liste der verfügbaren Optionen
    Trennzeichen - Trennt die Optionen in der Liste voneinander
|-
|'''Rückgabewert''' ||
    Eine Stringliste mit den gewählten Optionen
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
    begin
      Memo1.Lines:=MehrfachAuswahl('Bitte wählen Sie eine oder mehrere Optionen:',
        'Option 1;Option 2;Option 3',';');
    end
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
