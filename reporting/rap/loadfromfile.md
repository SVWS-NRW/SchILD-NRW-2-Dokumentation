---
title: "LoadFromFile"
---

# LoadFromFile

<a id="RAP-Funktion_&quot;LoadFromFile&quot;"></a>
<a id="RAP-Funktion_.22LoadFromFile.22"></a>

<a id="signatur"></a>

## Beschreibung

Liest den Inhalt einer Textdatei ein und gibt ihn als Text zurück. Übergeben Sie dazu den vollständigen Pfad und Dateinamen.

```pascal
function LoadFromFile(aFilename: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFilename` | Pfad + Dateiname der zu ladenden Textdatei |

## Rückgabewert

Inhalt der Textdatei

## Beispiel

```pascal
lFilename:=FileOpenDlg('*.rtf','c:\Texte','Richtexte|*.rtf|Alle Dateien|*.*');
RichText1.RichText:=LoadFromFile(lFilename')
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LoadFromFile – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadFromFile&oldid=65)
