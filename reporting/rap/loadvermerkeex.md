---
title: "LoadVermerkeEx"
---

# LoadVermerkeEx

<a id="RAP-Funktion_&quot;LoadVermerkeEx&quot;"></a>
<a id="RAP-Funktion_.22LoadVermerkeEx.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function LoadVermerkeEx(const aVermerkart, aDelimiter: String; const MitDatum: Boolean): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aVermerkart` | Gewünschte Vermerkart, wie im Katalog „Vermerkarten definiert. |
| `aDelimiter` | Trenner für die Vermerke. Hier ist eine beliebige Zeichenkette zulässig. Besondere Bedeutung haben '\t ' bzw. '\T' (fügt einen Tabulatorschritt ein) und '\n' bzw. '\N' (fügt einen Zeilenvorschub ein). |
| `MitDatum` | Boolescher Wert. Falls TRUE, wird den Ergebiszeilen das Eintragsdatum vorangestellt |


## Rückgabewert

Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.

## Beispiel

```pascal
 Procedure DetailBeforePrint;
 begin
   Memo1.Text:=LoadVermerkeEx('Betreuung','\n',True);
 end;
(*Ergebnis: Die Zeilen haben die Form '31.02.2123: XYZ aufgenommen'*)
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LoadVermerkeEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadVermerkeEx&oldid=68)
