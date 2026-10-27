---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: ReadDateTime"
---

# ReadDateTime

Gesicherte Wiki-Seite · Namensraum 0 · Version 81 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/readdatetime) · [Originaldaten herunterladen](/dateien/quellen/seite-60.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function ReadDateTime(aPrompt: String; var D,T1,T2: TDateTime; IsIntervall: Boolean): Boolean;
|-
|'''Parameter''' || 
    aPrompt            - Hinweistext im Dialogtitel
    D                  - Datum)
    T1                 - Uhrzeit (Beginn)
    T2                 - Uhrzeit(Ende
    IsIntervall        - Falls True, wird die Uhrzeit (Ende) eingeblendet
                         und kann verändert werden
|-
|'''Rückgabewert''' ||
    True: Dialog durch „Ok“ beendet, False sonst
|- 
|'''Beispiel''' || 
    Procedure Label1OnGetText(var Text: String);
     var
       D,T1,T2 : Datetime;
     begin
       If ReadDateTime('Sprechtag', D, T1, T2, True) then
         Text:='Elternsprechtag am ' + DateToStr(D)
         + ' von ' + TimeToStr(T1) + ' Uhr'
         + ' bis ' + TimeToStr(T2) + ' Uhr'
       else
         Text:='---';
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
