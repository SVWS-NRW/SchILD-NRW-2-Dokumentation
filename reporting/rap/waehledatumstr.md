---
title: "WaehleDatumStr"
---

# WaehleDatumStr

<a id="RAP-Funktion_&quot;WaehleDatumStr&quot;"></a>
<a id="RAP-Funktion_.22WaehleDatumStr.22"></a>

<a id="signatur"></a>

## Beschreibung

Öffnet eine Datumsauswahl und gibt das gewählte Datum als formatierten Text zurück. Das gewünschte Datumsformat wird über den Parameter festgelegt.

```pascal
function WaehleDatumStr(const Hinweis: String; const LangFormat: Boolean): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Hinweis` | Hinweistext |
| `LangFormat` | True: Formatierung des Ergebnisses wie „Langes Datumsformat“ in den Ländereinstellungen von Windows, sonst Kurzformat |

## Rückgabewert

Zeichenkette mit formatiertem Datum

## Beispiel

```pascal
lDatum:=WaehleDatumStr('Geburtsdatum:',True);
liefert (z.B.) 'Sonntag, 26. Mai 1996'
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [WaehleDatumStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=WaehleDatumStr&oldid=131)
