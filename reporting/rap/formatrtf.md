---
title: "FormatRTF"
---

# FormatRTF

<a id="RAP-Funktion_&quot;FormatRTF&quot;"></a>
<a id="RAP-Funktion_.22FormatRTF.22"></a>

## Signatur

```pascal
procedure FormatRTF(aRichtext: TppcustomRichtext; aFontname: String; Groesse: Integer;Fett: Boolean; Kursiv: Boolean; Unterstrichen: Boolean; Gestrichen: Boolean; Farbe: TColor);
```

## Parameter

```text
aRichtext          - Richtextelement, dessen Text neu formatiert werden soll
aFontname          - Name des Zeichensatzes
Groesse            - Schriftgröße (in Punkten)
Fett               - Boolescher Wert, falls true, wird das Attribut gesetzt.
Kursiv             - Boolescher Wert, falls true, wird das Attribut gesetzt.
Unterstrichen      - Boolescher Wert, falls true, wird das Attribut gesetzt.
Gestrichen         - Boolescher Wert, falls true, wird das Attribut gesetzt.
Farbe              - Schriftfarbe (z.B. clRed, clBlue...)
```


## Beispiel

```text
begin
   FormatRTF(Richtext1,'Tahoma',11,true,true,false,false,clRed);
 end;
 (*Formatiert den Text in Tahoma, Größe 11, Fett, Kursiv, Schriftfarbe Rot*)
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-30) · [FormatRTF – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FormatRTF&oldid=51)
