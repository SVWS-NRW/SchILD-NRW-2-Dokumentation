---
title: "FileExists"
---

# FileExists

<a id="RAP-Funktion_&quot;FileExists&quot;"></a>
<a id="RAP-Funktion_.22FileExists.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function FileExists(const aFilename: String): Boolean;
```


prüft, ob eine Datei existiert

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

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-21) · [FileExists – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileExists&oldid=41)
