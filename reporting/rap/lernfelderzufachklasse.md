---
title: "LernfelderZuFachklasse"
---

# LernfelderZuFachklasse

<a id="RAP-Funktion_&quot;LernfelderZuFachklasse&quot;"></a>
<a id="RAP-Funktion_.22LernfelderZuFachklasse.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function LernfelderZuFachklasse( fachklasse_id: integer): string;
```


Gibt die Lernfelder einer Fachklasse aus

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `fachklasse_id` | Die Fachklasse_ID des Schülers (aus Stammdaten oder Lernabschnittsdaten) |


## Rückgabewert

Lernfelder im Richtext.

## Beispiel

```pascal
procedure DetailBeforePrint;
 begin
  RichText_LF.RichText := LernfelderZuFachklasse( Schueler[ 'Fachklasse_ID'] );
End;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LernfelderZuFachklasse – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LernfelderZuFachklasse&oldid=172)
