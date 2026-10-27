---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Anrede"
---

# Anrede

Gesicherte Wiki-Seite · Namensraum 0 · Version 5722 · Stand 2024-02-18.

[Lesbaren Artikel öffnen](/reporting/rap/anrede) · [Originaldaten herunterladen](/dateien/quellen/seite-11.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function Anrede(aAnrede1,aTitel1,aName1,aAnrede2,aTitel2,aName2: String): String;
    Berechnet aus den übergebenen Werten die korrekte (Erzieher-)Anrede
|-
|'''Parameter''' || 
    aAnrede1           - Anrede der ersten Person
    aTitel1            - Titel der ersten Person
    aName1             - Name der ersten Person
    aAnrede2           - Anrede der zweiten Person
    aTitel2            - Titel der zweiten Person
    aName2             - Name der zweiten Person
|-
|'''Rückgabewert''' ||
 Korrekte Anrede
|- 
|'''Beispiel''' || 
    lAnrede:=Anrede('Herr','','Meier','Frau','Dr.','Müller-Lüdenscheid')
    Ergebnis: Sehr geehrter Herr Meier, sehr geehrte Frau Dr. Müller-Lüdenscheid

|}


'''Zurück zu [[RAP-Funktionen]]'''
```
