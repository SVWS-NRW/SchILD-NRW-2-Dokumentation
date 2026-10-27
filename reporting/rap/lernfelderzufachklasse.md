---
title: "LernfelderZuFachklasse"
wiki_title: "LernfelderZuFachklasse"
wiki_page_id: 123
wiki_revision: 172
---

# LernfelderZuFachklasse

<a id="RAP-Funktion_&quot;LernfelderZuFachklasse&quot;"></a>
<a id="RAP-Funktion_.22LernfelderZuFachklasse.22"></a>

## RAP-Funktion "LernfelderZuFachklasse"

## Beschreibung

```pascal
function LernfelderZuFachklasse( fachklasse_id: integer): string;
Gibt die Lernfelder einer Fachklasse aus
```

## Parameter

```text
fachklasse_id: Die Fachklasse_ID des Schülers (aus Stammdaten oder
               Lernabschnittsdaten)
```

## Rückgabewert

```text
Lernfelder im Richtext.
```

## Beispiel

```pascal
procedure DetailBeforePrint;
 begin
  RichText_LF.RichText := LernfelderZuFachklasse( Schueler[ 'Fachklasse_ID'] );
End;
```


---

Quelle: [LernfelderZuFachklasse – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LernfelderZuFachklasse&oldid=172) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=LernfelderZuFachklasse&action=history)
