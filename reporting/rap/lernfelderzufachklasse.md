---
title: "LernfelderZuFachklasse"
---

# LernfelderZuFachklasse

<a id="RAP-Funktion_&quot;LernfelderZuFachklasse&quot;"></a>
<a id="RAP-Funktion_.22LernfelderZuFachklasse.22"></a>

## Signatur

```pascal
function LernfelderZuFachklasse( fachklasse_id: integer): string;
```

## Beschreibung

Gibt die Lernfelder einer Fachklasse aus

## Parameter

```text
fachklasse_id: Die Fachklasse_ID des Schülers (aus Stammdaten oder
               Lernabschnittsdaten)
```

## Rückgabewert

Lernfelder im Richtext.

## Beispiel

```pascal
procedure DetailBeforePrint;
 begin
  RichText_LF.RichText := LernfelderZuFachklasse( Schueler[ 'Fachklasse_ID'] );
End;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-123) · [LernfelderZuFachklasse – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LernfelderZuFachklasse&oldid=172)
