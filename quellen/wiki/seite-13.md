---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: AufzaehlungRTF"
---

# AufzaehlungRTF

Gesicherte Wiki-Seite · Namensraum 0 · Version 2077 · Stand 2014-04-08.

[Lesbaren Artikel öffnen](/reporting/rap/aufzaehlungrtf) · [Originaldaten herunterladen](/dateien/quellen/seite-13.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function AufzaehlungRTF(aRichtext: String; const Label: String;aListe: TStrings): String;
    fügt eine Aufzählung (ungeordnete Liste) in einen RTF-Text ein.
|-
|'''Parameter''' || 
    aRichtext   - Der Richtext, in den die Aufzählung eingefügt werden soll
    aLabel      - Positionsmarke, an der die Aufzählung eingefügt werden soll, eingeschlossen
                  von <ul>..</ul> für eine ungeordnete Liste bzw. <ol>..</ol>
                  für eine geordnete (nummerierte) Liste.
    aListe      - Stringliste, die die einzufügenden Zeilen enthält
|-
|'''Rückgabewert''' ||
    Der veränderte Richtext
|- 
|'''Beispiel''' || 
    Die Liste muss global deklariert werden:
    var
       lListe : TStringList;

    Muss in diesem Ereignis erzeugt werden:
    procedure ReportBeforePrint;
     Begin
      lListe:=TStringList.Create;

     Wird hier befüllt:
     procedure DetailBeforePrint;
     begin
       lListe.Clear;
       lListe.Add('Zeile 1');
       lListe.Add('Zeile 2');
       Richtext1.Richtext:=AufzaehlungRTF(Richtext1.Richtext,'$LISTE$',lListe);
       lListe:=TStringList.Free;
     end;
     <nowiki>// Im Richtext muss dann <ul>$LISTE$</ul> oder <ol>$LISTE$</ol> eingefügt werden.</nowiki>
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
