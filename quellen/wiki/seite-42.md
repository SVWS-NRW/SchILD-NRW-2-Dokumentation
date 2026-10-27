---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LehrerKursartStatistikLaden"
---

# LehrerKursartStatistikLaden

Gesicherte Wiki-Seite · Namensraum 0 · Version 63 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/lehrerkursartstatistikladen) · [Originaldaten herunterladen](/dateien/quellen/seite-42.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Procedure LehrerKursartStatistikLaden;
    Durch den Aufruf dieser Prozedur wird die Datenquelle
    'LehrerUnterrichtsStatistik' mit Daten gefüllt.
    Diese Datenquelle sollte nur als Datenquelle für eine Kreuztabelle
    eingesetzt werden, die dann statistische Aussagen über den Unterricht
    des Lehrers (Anzahl der Schüler mit Kursart xyz...) liefert. Auch diese
    Datenquelle ist Detaildatenquelle der Datenquelle 'Lehrer'.
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure DetailBeforeGenerate;
     begin
       LehrerUnterrichtLaden;
       LehrerKursartStatistikLaden;
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
