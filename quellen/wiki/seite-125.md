---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: DateinameFuerDVAuswaehlen"
---

# DateinameFuerDVAuswaehlen

Gesicherte Wiki-Seite · Namensraum 0 · Version 6027 · Stand 2025-06-09.

[Lesbaren Artikel öffnen](/reporting/rap/dateinamefuerdvauswaehlen) · [Originaldaten herunterladen](/dateien/quellen/seite-125.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
 procedure DateinameFuerDVAuswaehlen;
 Der Aufruf dieser Prozedur (typischerweise im Ereignis ReportBeforePrint) bewirkt,
 dass vor der Ausgabe eines Reportes als PDF-Datei in der Dokumentenverwaltung
 ein individueller Dateiname eingegeben werden kann. Dieser Name wird dann bei
 der Ermittlung des „schülerspezifischen“ Dateinamens anstelle des Namens der
 Reportvorlage verwendet. Dies ist besonders bei Serienbriefvorlagen hilfreich, bei
 denen der Briefinhalt zur Laufzeit aus einer RTF-Datei geladen wird.
|-
|'''Parameter''' || 
    ...
|-
|'''Rückgabewert''' ||
 Die Reportvorlage heißt „RTFBrief.rtm“, der nachgeladene RTF-Brieftext heißt "Hausaufgaben.rtf". Normalerweise würde dann die in der
 Dokumentenverwaltung des Schülers abgelegte Datei z.B. den Namen
 „Hausaufgaben_2013_05_24.pdf“ erhalten, d.h. aus dem Dateinamen geht die Bedeutung
 des Schreibens bereits hervor. Durch Aufruf von „DateinameFuerDVAuswaehlen“ kann
 aber ein Dialog aufgerufen werden, in dem ein individueller Name definiert werden
 kann (z.B. „Hausaufgaben - Zweite Information“), woraus sich dann der Dateinamen
 „Hausaufgaben - Zweite Information_2013_05_24.pdf“ ergibt.
|- 
|'''Beispiel''' || 
 procedure GlobalOnCreate;
  begin
   DateinameFuerDVAuswaehlen;
  end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
