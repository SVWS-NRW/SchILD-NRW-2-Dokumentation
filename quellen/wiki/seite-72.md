---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: SchuljahrToStrEx"
---

# SchuljahrToStrEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 93 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/schuljahrtostrex) · [Originaldaten herunterladen](/dateien/quellen/seite-72.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function SchuljahrToStrEx(aJahr, aAbschnitt: integer; Format: String; AbschnittVorn: Boolean): String;
|-
|'''Parameter''' || 
    aJahr              - Jahr, in dem das Schuljahr anfing
    aAbschnitt         - Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der
                         String ohne Abschnitt erzeugt
    Format             - Formatanweisung. Text mit Platzhaltern für numerische
                         Variablen. An der gewünschten Position ist ein %[w]d
                         einzufügen. Der optionale Parameter w enthält die
                         gewünschte Breite, falls notwendig, wird linksbündig mit
                         Nullen aufgefüllt.
    AbschnittVorn      - Wenn AbschnittVorn wahr ist, werden die Parameter in der
                         Reihenfolge Abschnitt, Jahr, Jahr + 1 aufgefüllt, sonst in
                         der Reihenfolge Jahr, Jahr + 1, Abschnitt
|-
|'''Rückgabewert''' ||
    Schuljahr in der durch Format vorgegebenen Form
|- 
|'''Beispiel''' || 
    SchuljahrStr:=SchuljahrToStrEx(2005,3,'%d. Quartal %d/%2d',True);
    Ergebnis: lSchuljahrStr = '3. Quartal 2005/06'
    SchuljahrStr:=SchuljahrToStrEx(2005,2,'Schuljahr %d/%2d, %d. Halbjahr',False);
    Ergebnis: lSchuljahrStr = 'Schuljahr 2005/06, 2. Halbjahr'
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
