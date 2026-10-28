---
title: "LoadFromFile"
---

# LoadFromFile

<a id="RAP-Funktion_&quot;LoadFromFile&quot;"></a>
<a id="RAP-Funktion_.22LoadFromFile.22"></a>

## Signatur

```pascal
function LoadFromFile(aFilename: String): String;
```

## Parameter

```text
aFilename   Pfad + Dateiname der zu ladenden Textdatei
```

## Rückgabewert

Inhalt der Textdatei

## Beispiel

```pascal
lFilename:=FileOpenDlg('*.rtf','c:\Texte','Richtexte|*.rtf|Alle Dateien|*.*');
RichText1.RichText:=LoadFromFile(lFilename')
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-44) · [LoadFromFile – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LoadFromFile&oldid=65)
