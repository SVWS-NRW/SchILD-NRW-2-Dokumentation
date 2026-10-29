---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: KursBezIgnorieren"
---

# KursBezIgnorieren

Gesicherte Wiki-Seite · Namensraum 0 · Version 60 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/kursbezignorieren) · [Originaldaten herunterladen](/dateien/quellen/seite-39.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Procedure KursBezIgnorieren(Const Ignore : Boolean);
    Durch den Aufruf dieser Prozedur wird bei der Einsortierung
    der Leistungsdaten in die Leistungsübersichten die Kursbezeichnung
    ignoriert. Diese Prozedur ist nur im Zusammenhang mit SetUebersicht
    notwendig und sinnvoll. Standardmäßig wird die Kursbezeichnung berücksichtigt.
|-
|'''Parameter''' || 
    ignore : wahr-> Kursarten ignorieren
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetUebersicht(True);
       KursBezIgnorieren(True);
     end;

     Procedure ReportAfterPrint;
     begin
       SetUebersicht(false);
       KursBezIgnorieren(False);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
