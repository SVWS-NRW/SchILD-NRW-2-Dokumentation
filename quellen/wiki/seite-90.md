---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetKursSchuelerFaecherListe"
---

# SetKursSchuelerFaecherListe

Gesicherte Wiki-Seite · Namensraum 0 · Version 114 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/setkursschuelerfaecherliste) · [Originaldaten herunterladen](/dateien/quellen/seite-90.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetKursSchuelerFaecherListe(Const aListe: String);
|-
|'''Parameter''' || 
    Liste    - Kommaseparierte Liste der gewünschten Fächer
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetKursSchuelerFaecherListe('D,M,PH,CH');
     end;
     In einer KursListe können in einem Subreport
     die Leistungsdaten in diesen Fächern ausgegeben werden.
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
