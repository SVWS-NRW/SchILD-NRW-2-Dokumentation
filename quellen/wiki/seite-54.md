---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: NotenDurchschnitt"
---

# NotenDurchschnitt

Gesicherte Wiki-Seite · Namensraum 0 · Version 4087 · Stand 2017-01-25.

[Lesbaren Artikel öffnen](/reporting/rap/notendurchschnitt) · [Originaldaten herunterladen](/dateien/quellen/seite-54.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure NotenDurchschnitt(const aSchuelerId, aJahr, aAbschnitt: Integer;
                         var Beste, Schlechteste: Integer; var Schnitt: String);
|-
|'''Parameter''' || 
    aSchuelerId        - Id-Nummer des Schülers
    aJahr              - Schuljahr und
    aAbschnitt         - Abschnitt des Schuljahres, für das der Schnitt berechnet wird.
|-
|'''Rückgabewert''' ||
    Beste              - Beste Note des Abschnitte
    Schlechteste       - Schlechteste Note des Abschnittes
    Schnitt            - Formatierte Schnitt (zwei Nachkommastellen)
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
    var
      lBeste, lSchlechteste : integer;
      lSchnitt : String;
    begin
      NotenDurchschnitt(Schueler['ID'],Schueler['AktSchuljahr'],Schueler['AktAbschnitt'],
      Label1.Caption:=IntToStr(lBeste);
      Label2.Caption:=IntToStr(lSchlechteste);
      Label3.Caption:=lSchnitt;
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
