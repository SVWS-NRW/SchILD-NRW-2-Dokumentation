---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LoadVermerke"
---

# LoadVermerke

Gesicherte Wiki-Seite · Namensraum 0 · Version 67 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/loadvermerke) · [Originaldaten herunterladen](/dateien/quellen/seite-46.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function LoadVermerke(aVermerkart, aDelimiter: String): String
|-
|'''Parameter''' || 
    aVermerkart        - Gewünschte Vermerkart, wie im Katalog „Vermerkarten
                         definiert.
    aDelimiter         - Trenner für die Vermerke. Hier ist eine beliebige
                         Zeichenkette zulässig. Besondere Bedeutung haben '\t '
                         bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n'
                         bzw. '\N' (fügt einen Zeilenvorschub ein).
|-
|'''Rückgabewert''' ||
    Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.
|- 
|'''Beispiel''' || 
    Procedure DetailBeforePrint;
    begin
      Memo1.Text:=LoadVermerke('Betreuung','\n');
    end;
   (*Ergebnis: Alle Betreuungs-Vermerke werden untereinander in einem Memofeld
    dargestellt.*)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
