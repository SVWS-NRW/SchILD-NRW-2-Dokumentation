---
title: "LoadVermerkeVonBis"
wiki_title: "LoadVermerkeVonBis"
wiki_page_id: 48
wiki_revision: 69
---

# LoadVermerkeVonBis

<a id="RAP-Funktion_&quot;LoadVermerkeVonBis&quot;"></a>
<a id="RAP-Funktion_.22LoadVermerkeVonBis.22"></a>

## RAP-Funktion "LoadVermerkeVonBis"

## Beschreibung

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

```text
Alle Vermerke der gewählten Art, durch den Delimiter voneinander getrennt.
```

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

Quelle: [LoadVermerkeVonBis – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadVermerkeVonBis&oldid=69) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadVermerkeVonBis&action=history)
