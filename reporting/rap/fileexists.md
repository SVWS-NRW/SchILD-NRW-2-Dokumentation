---
title: "FileExists"
---

# FileExists

<a id="RAP-Funktion_&quot;FileExists&quot;"></a>
<a id="RAP-Funktion_.22FileExists.22"></a>

## Signatur

```pascal
function FileExists(const aFilename: String): Boolean;
```

## Beschreibung

prüft, ob eine Datei existiert

## Parameter

```text
aFilename          - Dateiname incl. Pfad
```

## Rückgabewert

True, falls die Datei existiert, sonst False

## Beispiel

```text
If FileExists('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') then...;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-21) · [FileExists – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileExists&oldid=41)
