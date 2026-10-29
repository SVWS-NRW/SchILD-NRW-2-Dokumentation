---
title: "FileAge"
---

# FileAge

<a id="RAP-Funktion_&quot;FileAge&quot;"></a>
<a id="RAP-Funktion_.22FileAge.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function FileAge(const aFilename: String): DateTime;
```


bestimmt das Dateidatum

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

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-20) · [FileAge – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileAge&oldid=40)
