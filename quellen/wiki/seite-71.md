---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SchuljahrToStr"
---

# SchuljahrToStr

Gesicherte Wiki-Seite · Namensraum 0 · Version 92 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/schuljahrtostr) · [Originaldaten herunterladen](/dateien/quellen/seite-71.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SchuljahrToStr(aJahr, aAbschnitt: integer): String;
|-
|'''Parameter''' || 
    aJahr              - Jahr, in dem das Schuljahr anfing
    aAbschnitt         - Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der
                         String ohne Abschnitt erzeugt
|-
|'''Rückgabewert''' ||
    Schuljahr in der Form 'JJJJ/JJ.A'
|- 
|'''Beispiel''' || 
    SchuljahrStr:=SchuljahrToStr(Schueler['AktSchuljahr'],Schueler['AktAbschnitt'])
    Ergebnis (z.B.): lSchuljahrStr = '2005/06.2'
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
