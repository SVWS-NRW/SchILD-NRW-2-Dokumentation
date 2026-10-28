---
title: "LoadVermerke"
---

# LoadVermerke

<a id="RAP-Funktion_&quot;LoadVermerke&quot;"></a>
<a id="RAP-Funktion_.22LoadVermerke.22"></a>

## Signatur

```pascal
function LoadVermerke(aVermerkart, aDelimiter: String): String
```

## Parameter

```text
aVermerkart        - Gewünschte Vermerkart, wie im Katalog „Vermerkarten
                     definiert.
aDelimiter         - Trenner für die Vermerke. Hier ist eine beliebige
                     Zeichenkette zulässig. Besondere Bedeutung haben '\t '
                     bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n'
                     bzw. '\N' (fügt einen Zeilenvorschub ein).
```

## Rückgabewert

Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.

## Beispiel

```pascal
 Procedure DetailBeforePrint;
 begin
   Memo1.Text:=LoadVermerke('Betreuung','\n');
 end;
(*Ergebnis: Alle Betreuungs-Vermerke werden untereinander in einem Memofeld
 dargestellt.*)
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-46) · [LoadVermerke – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadVermerke&oldid=67)
