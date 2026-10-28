---
title: "LoadVermerkeVonBis"
---

# LoadVermerkeVonBis

<a id="RAP-Funktion_&quot;LoadVermerkeVonBis&quot;"></a>
<a id="RAP-Funktion_.22LoadVermerkeVonBis.22"></a>

## Signatur

```pascal
function LoadVermerkeVonBis(Const aVermerkart, aDelimiter, aStart, aEnde: String; mitDatum: Boolean): String;
```

## Parameter

```text
aVermerkart        - Gewünschte Vermerkart, wie im Katalog „Vermerkarten
                     definiert.
aDelimiter         - Trenner für die Vermerke. Hier ist eine beliebige
                     Zeichenkette zulässig. Besondere Bedeutung haben '\t '
                     bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n'
                     bzw. '\N' (fügt einen Zeilenvorschub ein).
aStart               Beginn des Suchzeitraumes
aEnde                Ende des Suchzeitraumes
mitDatum             Falls true, wird jedem Vermerk das Vermerkdatum vorangestellt
```

## Rückgabewert

Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.

## Beispiel

```pascal
 Procedure DetailBeforePrint;
 begin
   Memo1.Text:=LoadVermerkeVonBis('Betreuung','\n','01.08.2011','31.01.2012',True);
 end;
(*Ergebnis: Alle Betreuungs-Vermerke, die im ersten Halbjahr 2011/12
  eingetragen wurden, werden untereinander in einem Memofeld
  dargestellt.*)
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-48) · [LoadVermerkeVonBis – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadVermerkeVonBis&oldid=69)
