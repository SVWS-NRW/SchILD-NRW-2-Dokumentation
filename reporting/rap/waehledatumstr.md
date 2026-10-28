---
title: "WaehleDatumStr"
---

# WaehleDatumStr

<a id="RAP-Funktion_&quot;WaehleDatumStr&quot;"></a>
<a id="RAP-Funktion_.22WaehleDatumStr.22"></a>

## Signatur

```pascal
function WaehleDatumStr(const Hinweis: String; const LangFormat: Boolean): String;
```

## Parameter

```text
Hinweis            - Hinweistext
LangFormat         - True: Formatierung des Ergebnisses wie
                    „Langes Datumsformat“ in den Ländereinstellungen von
                     Windows, sonst Kurzformat
```

## Rückgabewert

Zeichenkette mit formatiertem Datum

## Beispiel

```pascal
lDatum:=WaehleDatumStr('Geburtsdatum:',True);
liefert (z.B.) 'Sonntag, 26. Mai 1996'
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-106) · [WaehleDatumStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=WaehleDatumStr&oldid=131)
