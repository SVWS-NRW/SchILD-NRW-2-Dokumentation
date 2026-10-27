---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SelectOption"
---

# SelectOption

Gesicherte Wiki-Seite · Namensraum 0 · Version 2151 · Stand 2014-05-13.

[Lesbaren Artikel öffnen](/reporting/rap/selectoption) · [Originaldaten herunterladen](/dateien/quellen/seite-81.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SelectOption(Prompt, Optionsliste: String; Trennzeichen: Char): Integer;
    ermöglicht die Auswahl eines Elements aus einer Auswahlliste
|-
|'''Parameter''' || 
    Prompt       - Eingabeaufforderung
    Optionsliste - Liste der verfügbaren Optionen
    Trennzeichen - Trennt die Optionen in der Liste voneinander
|-
|'''Rückgabewert''' ||
    Nullbasierter Index der gewählten Option oder -1, falls der Dialog
    nicht über 'Ok' beendet wurde
|- 
|'''Beispiel''' || 
     var
      lOption : Integer;
    begin
      lOption:=SelectOption('Bitte wählen Sie eine Option:',
        'Option 1;Option 2;Option 3',';');
      if lOption <> -1 then
        Label1.Caption:='Gewählt: Option Nr. ' + IntToStr(lOption)
      else
        Label1.Caption:='---';
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
