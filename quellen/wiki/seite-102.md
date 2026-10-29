---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SummeFehlstunden"
---

# SummeFehlstunden

Gesicherte Wiki-Seite · Namensraum 0 · Version 126 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/summefehlstunden) · [Originaldaten herunterladen](/dateien/quellen/seite-102.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SummeFehlstunden(aSchuelerId: integer; var FehlStd, uFehlStd: Integer);
|-
|'''Parameter''' || 
    aSchuelerId  - Id des gewünschten Schülers
|-
|'''Rückgabewert''' ||
    FehlStd            - Fehlstunden des Schülers im aktuellen Schuljahr, d.h. es wird
                         über die letzten zwei Abschnitte bzw. die letzten vier
                         Quartale summiert.
    uFehlStd           - Unentschuldigte Fehlstunden des Schülers
|- 
|'''Beispiel''' || 
    Var
      lFehl, lUFehl
     begin
       SummeFehlstunden(Schueler['ID'],lFehl,lUFehl);
       Label1.Caption:='FehlStunden: ' + IntoStr(lFehl);
       Label2.Caption:='davon unentschuldigt: ' + IntToStr(lUFehl
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
