---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Textbreite"
---

# Textbreite

Gesicherte Wiki-Seite · Namensraum 0 · Version 3668 · Stand 2015-11-11.

[Lesbaren Artikel öffnen](/reporting/rap/textbreite) · [Originaldaten herunterladen](/dateien/quellen/seite-958.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
  Textbreite( Report, Label1.Text, Label1.Font );  
Diese Funktion kann die Breite (in "Reporteinheiten") z.B. eines Labels zur Laufzeit berechnen. Die Funktion kann z.B. benutzt werden, um in Zeugnissen bei den Fächern die Position von "Hochzahlen"  (für Fußnoten) zu ermittlen, damit diese bündig an die Fachbezeichnung anschließen.
|-
|'''Parameter''' || 
    Report, Label-Text, Label-Font
|-
|'''Rückgabewert''' ||
    Breite des Elements in "Reporteinheiten".
|- 
|'''Beispiel''' || 
    wt := Textbreite( Report, lblFach.Text, lblFach.Font );
    lblStern.Left := lblFach.Left + wt;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
