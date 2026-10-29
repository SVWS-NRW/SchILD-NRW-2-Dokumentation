---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LehrerAuswaehlen"
---

# LehrerAuswaehlen

Gesicherte Wiki-Seite · Namensraum 0 · Version 61 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/lehrerauswaehlen) · [Originaldaten herunterladen](/dateien/quellen/seite-40.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure LehrerAuswaehlen(const Auswahlzeigen: Boolean)
    Bisher wurde vor dem Druck eines Berichtes mit der Datenquelle
    'Lehrer' grundsätzlich der Lehrerauswahldialog auf gerufen.
    Dieser Dialog wird jetzt nur noch aufgerufen, wenn in einem geeigneten
    Ereignis (hier bietet sich BeforeOpenDataPipelines an) die Procedur
      LehrerAuswaehlen(True)
    aufgerufen wird. Sinnvollerweise sollte die Auswahl nach dem Druck
    wieder zurückgesetzt werden.
|-
|'''Parameter''' || 
    Auswahlzeigen : Boolea
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
     Procedure ReportBeforeOpenDataPipelines;
     begin
       LehrerAuswaehlen(True);
     end;

     Procedure ReportAfterPrint;
     begin
       LehrerAuswaehlen(false);
     end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
