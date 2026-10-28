---
title: "FileAge"
---

# FileAge

<a id="RAP-Funktion_&quot;FileAge&quot;"></a>
<a id="RAP-Funktion_.22FileAge.22"></a>

## Signatur

```pascal
function FileAge(const aFilename: String): DateTime;
```

## Beschreibung

bestimmt das Dateidatum

## Parameter

```text
aFilename          - Dateiname incl. Pfad
```

## Rückgabewert

Dateidatum

## Beispiel

```pascal
If FileAge('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') < StrToDate('01.01.2009') then...;
```

---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-20) · [FileAge – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileAge&oldid=40)
