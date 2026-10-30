---
title: "FileAge"
---

# FileAge

<a id="RAP-Funktion_&quot;FileAge&quot;"></a>
<a id="RAP-Funktion_.22FileAge.22"></a>

<a id="signatur"></a>

## Beschreibung

Ermittelt das Datum der angegebenen Datei.

```pascal
function FileAge(const aFilename: String): DateTime;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFilename` | Dateiname incl. Pfad |

## Rückgabewert

Dateidatum

## Beispiel

```pascal
If FileAge('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') < StrToDate('01.01.2009') then...;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [FileAge – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileAge&oldid=40)
