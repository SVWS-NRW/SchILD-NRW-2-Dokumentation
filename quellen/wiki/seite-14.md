---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Bestaetigung"
---

# Bestaetigung

Gesicherte Wiki-Seite · Namensraum 0 · Version 28 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/bestaetigung) · [Originaldaten herunterladen](/dateien/quellen/seite-14.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function Bestaetigung(const aFrage: String): Boolean;
|-
|'''Parameter''' || 
    aFrage             - String mir einer Frage, die sich durch Ja oder nein
                         beantworten lässt
|-
|'''Rückgabewert''' ||
    TRUE, falls 'OK' angeklickt wird, FALSE sonst
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     var
       lFilename : String;
    begin
      If Bestaetigung('Soll der Text geladen werden?') then begin
        lFilename:=FileOpenDlg('*.txt','c:\Texte','Textdateien|*.txt|Alle Dateien|*.*');
        If lFilename <> '' then Memo1.Text:=LoadFromFile(lFilename)
      end;
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
