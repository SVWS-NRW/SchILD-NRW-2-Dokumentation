---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LoadVermerkeVonBis"
---

# LoadVermerkeVonBis

Gesicherte Wiki-Seite · Namensraum 0 · Version 69 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/loadvermerkevonbis) · [Originaldaten herunterladen](/dateien/quellen/seite-48.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function LoadVermerkeVonBis(Const aVermerkart, aDelimiter, aStart, aEnde: String; mitDatum: Boolean): String;
|-
|'''Parameter''' || 
    aVermerkart        - Gewünschte Vermerkart, wie im Katalog „Vermerkarten
                         definiert.
    aDelimiter         - Trenner für die Vermerke. Hier ist eine beliebige
                         Zeichenkette zulässig. Besondere Bedeutung haben '\t '
                         bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n'
                         bzw. '\N' (fügt einen Zeilenvorschub ein).
    aStart               Beginn des Suchzeitraumes
    aEnde                Ende des Suchzeitraumes
    mitDatum             Falls true, wird jedem Vermerk das Vermerkdatum vorangestellt
|-
|'''Rückgabewert''' ||
    Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.
|- 
|'''Beispiel''' || 
    Procedure DetailBeforePrint;
    begin
      Memo1.Text:=LoadVermerkeVonBis('Betreuung','\n','01.08.2011','31.01.2012',True);
    end;
   (*Ergebnis: Alle Betreuungs-Vermerke, die im ersten Halbjahr 2011/12
     eingetragen wurden, werden untereinander in einem Memofeld
     dargestellt.*)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
