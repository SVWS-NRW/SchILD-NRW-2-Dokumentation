---
title: "FileExists"
---

# FileExists

## Beschreibung

Prüft, ob die angegebene Datei vorhanden ist.

```pascal
function FileExists(const aFilename: String): Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFilename` | Dateiname incl. Pfad |

## Rückgabewert

True, falls die Datei existiert, sonst False

## Beispiel

```pascal
If FileExists('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') then...;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [FileExists – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileExists&oldid=41)
