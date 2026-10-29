---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LoadVermerkeEx"
---

# LoadVermerkeEx

Gesicherte Wiki-Seite · Namensraum 0 · Version 68 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/loadvermerkeex) · [Originaldaten herunterladen](/dateien/quellen/seite-47.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function LoadVermerkeEx(const aVermerkart, aDelimiter: String; const MitDatum: Boolean): String;
|-
|'''Parameter''' || 
    aVermerkart        - Gewünschte Vermerkart, wie im Katalog „Vermerkarten
                         definiert.
    aDelimiter         - Trenner für die Vermerke. Hier ist eine beliebige
                         Zeichenkette zulässig. Besondere Bedeutung haben '\t '
                         bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n'
                         bzw. '\N' (fügt einen Zeilenvorschub ein).
    MitDatum           - Boolescher Wert. Falls TRUE, wird den Ergebiszeilen
                         das Eintragsdatum vorangestellt
|-
|'''Rückgabewert''' ||
    Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.
|- 
|'''Beispiel''' || 
    Procedure DetailBeforePrint;
    begin
      Memo1.Text:=LoadVermerkeEx('Betreuung','\n',True);
    end;
   (*Ergebnis: Die Zeilen haben die Form '31.02.2123: XYZ aufgenommen'*)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
