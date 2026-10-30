---
title: "LoadVermerke"
---

# LoadVermerke

<a id="RAP-Funktion_&quot;LoadVermerke&quot;"></a>
<a id="RAP-Funktion_.22LoadVermerke.22"></a>

<a id="signatur"></a>

## Beschreibung

Liest die Vermerke der angegebenen Vermerkart aus und verbindet sie zu einem Text. Das Trennzeichen zwischen den einzelnen Vermerken können Sie vorgeben.

```pascal
function LoadVermerke(aVermerkart, aDelimiter: String): String
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aVermerkart` | Gewünschte Vermerkart, wie im Katalog „Vermerkarten definiert. |
| `aDelimiter` | Trenner für die Vermerke. Hier ist eine beliebige Zeichenkette zulässig. Besondere Bedeutung haben '\t ' beziehungsweise '\T' (fügt einen Tabulatorschritt ein) und '\n' beziehungsweise '\N' (fügt einen Zeilenvorschub ein). |

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LoadVermerke – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadVermerke&oldid=67)
