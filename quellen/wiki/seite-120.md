---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SetQuartalsnotenInUebersicht"
---

# SetQuartalsnotenInUebersicht

Gesicherte Wiki-Seite · Namensraum 0 · Version 166 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/setquartalsnoteninuebersicht) · [Originaldaten herunterladen](/dateien/quellen/seite-120.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure SetQuartalsnotenInUebersicht( MitQuartalnoten: Boolean);
    Steuert, ob in Leistungsübersichten auch Quartalsnoten erscheinen sollen
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
     begin
      {Darstellung von Quartalsnoten einschalten}
      SetQuartalsnotenInUebersicht( true );
     End;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
