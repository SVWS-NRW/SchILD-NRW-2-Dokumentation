---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LernfelderZuFachklasse"
---

# LernfelderZuFachklasse

Gesicherte Wiki-Seite · Namensraum 0 · Version 172 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/lernfelderzufachklasse) · [Originaldaten herunterladen](/dateien/quellen/seite-123.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function LernfelderZuFachklasse( fachklasse_id: integer): string;
    Gibt die Lernfelder einer Fachklasse aus
|-
|'''Parameter''' || 
    fachklasse_id: Die Fachklasse_ID des Schülers (aus Stammdaten oder
                   Lernabschnittsdaten)
|-
|'''Rückgabewert''' ||
    Lernfelder im Richtext.
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
     begin
      RichText_LF.RichText := LernfelderZuFachklasse( Schueler[ 'Fachklasse_ID'] );
    End;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
