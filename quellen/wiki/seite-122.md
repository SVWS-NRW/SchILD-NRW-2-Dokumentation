---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Praktikumstage"
---

# Praktikumstage

Gesicherte Wiki-Seite · Namensraum 0 · Version 170 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/praktikumstage) · [Originaldaten herunterladen](/dateien/quellen/seite-122.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function PraktikumsTage( const nur_betriebspraktikum: boolean): integer;
    Liefert die Anzahl der Praktikumstage eines Schülers (optional nur solche mit
    Kennung „Betriebspraktikum“). Voraussetzung ist, dass das Praktikum bei dem
    jeweiligen Betrieb als solches gekennzeichnet ist (mit Anfangs- und Enddatum)
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
    Anzahl der Tage.
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
     Begin
     {Alle Praktikumstage ausgeben}
     LblPraktikumstage.Text := IntToStr( Praktikumstage( false ) );
    End;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
