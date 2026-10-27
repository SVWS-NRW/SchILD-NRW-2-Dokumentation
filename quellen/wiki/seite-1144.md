---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: AufFaecherFiltern"
---

# AufFaecherFiltern

Gesicherte Wiki-Seite · Namensraum 0 · Version 4247 · Stand 2019-11-13.

[Lesbaren Artikel öffnen](/reporting/rap/auffaecherfiltern) · [Originaldaten herunterladen](/dateien/quellen/seite-1144.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure AufFaecherFiltern( const fachliste: string);

Ermöglicht eine Filterung in der Datenquelle „SchuelerJahresuebersicht“ auf bestimmte Fächer. Der Aufruf erfolgt typischerweise im Ereignis „ReportBeforPrint“

Es ist aber geplante, die Filterung auch auf andere Datenquellen zu erweitern
|-
|'''Parameter''' || 
    Fachliste: Durch Komma oder Semikolon getrennte Liste der schulinternen Fachkürzel

Hinweis: Komma oder Semikolon dürfen nicht vermischt werden, d.h. es dürfen nur Kommas oder nur Semikolons verwendet werden.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    AufFaecherFiltern('D,E,M');
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
