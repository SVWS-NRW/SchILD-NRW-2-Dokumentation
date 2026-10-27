---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: IstLeer"
---

# IstLeer

Gesicherte Wiki-Seite · Namensraum 0 · Version 58 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/istleer) · [Originaldaten herunterladen](/dateien/quellen/seite-37.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function IstLeer(aDataPipeline: TppDataPipeline; const aFieldname: String): Boolean;
|-
|'''Parameter''' || 
    aDataPipeline      - Zu prüfende Datenquelle
    aFieldname         - Name des zu überprüfenden Felde
|-
|'''Rückgabewert''' ||
    True, falls das Datenfeld leer ist
|- 
|'''Beispiel''' || 
    Procedure DBText1OnGetText(var Text: String);
    begin
      If IstLeer(Schueler,'Geburtsdatum') then
        Text:='Geburtsdatum fehlt';
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
