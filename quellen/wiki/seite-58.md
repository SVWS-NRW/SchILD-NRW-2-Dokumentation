---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: PickDatum"
---

# PickDatum

Gesicherte Wiki-Seite · Namensraum 0 · Version 79 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/pickdatum) · [Originaldaten herunterladen](/dateien/quellen/seite-58.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function PickDatum(aCaption, aDate: String): String;
|-
|'''Parameter''' || 
    aCaption           - Überschrift des Dialoges
    aDate              - Datumsvorgabe
|-
|'''Rückgabewert''' ||
    Datum als Zeichenkette, z.B. '31.12.2010'
|- 
|'''Beispiel''' || 
    Var
    KDate : String;
    Begin
     Pickdatum('Datum Konferenz',KDate);
    End;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
