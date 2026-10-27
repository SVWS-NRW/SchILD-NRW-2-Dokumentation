---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: UebersichtsfachModus"
---

# UebersichtsfachModus

Gesicherte Wiki-Seite · Namensraum 0 · Version 127 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/uebersichtsfachmodus) · [Originaldaten herunterladen](/dateien/quellen/seite-103.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Procedure UebersichtsfachModus(Const Modus : String);
    Durch den Parameter dieser Prozedur wird die Einsortierung
    der Leistungsdaten in die Leistungsübersichten gesteuert.
    Möglich sind die drei Modi
      - NurFach : Alle Leistungsdaten mit dem gleichen Fach landen in einer Spalte
      - KursArt : Fächer mit gleichem Fachkürzel, aber unterschiedlichen
                  Kursarten werden in verschiedene Spalten einsortiert
      - KursBezeichnung: Fächer mit gleichem Fachkürzel, aber unterschiedlichen
                  Kursbezeichnungen werden in verschiedene Spalten einsortiert
     Der Aufruf von 'UebersichtsfachModus('NurFach')' entspricht dem
     Aufruf der Funktion 'KursbezIgnorieren(True)'.
|-
|'''Parameter''' || 
    Modus : String, zulässig sind 'NurFach', 'KursArt' oder 'KursBezeichnung'
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       SetUebersicht(True);
       UebersichtsfachModus('KursArt');
     end;

     Procedure ReportAfterPrint;
     begin
       SetUebersicht(false);
       UebersichtsfachModus('KursBezeichnung');
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
