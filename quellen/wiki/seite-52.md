---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: MehrfachauswahlEx"
---

# MehrfachauswahlEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 5725 · Stand 2024-02-25.

[Lesbaren Artikel öffnen](/reporting/rap/mehrfachauswahlex) · [Originaldaten herunterladen](/dateien/quellen/seite-52.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function MehrfachauswahlEx(Prompt: String, Optionsliste: String; Trennzeichen: Char): String;
    ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste
|-
|'''Parameter''' || 
    Prompt       - Eingabeaufforderung
    Optionsliste - Liste der verfügbaren Optionen
    Trennzeichen - Trennt die Optionen in der Liste voneinander
|-
|'''Rückgabewert''' ||
    Ein String mit den durch Bindestriche begrenzeten Indizes der gewählten Optionen;
    Wenn keine Auswahl getroffen wurde, besteht der String nur aus einem Bindestrich.
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
    var
      lResult : String;
    begin
      lResult:=MehrfachAuswahlEx(Bitte wählen Sie eine oder mehrere Optionen:',
        'Option 1;Option 2;Option 3',';');
      if pos('-1-',lResult) > 0 then...
      if pos('-2-',lResult) > 0 then...
    end
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
