---
title: "FileOpenDlg"
---

# FileOpenDlg

<a id="RAP-Funktion_&quot;FileOpenDlg&quot;"></a>
<a id="RAP-Funktion_.22FileOpenDlg.22"></a>

## Beschreibung

```pascal
function FileOpenDlg(const aFilename, aInitialDir,
                           aFilter: String): String;
```


## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFilename` | Name der zu öffnenden Datei, evtl. mit Platzhaltern |
| `aInitialDir` | Startverzeichnis, Leerer String öffnet im aktuellen Verzeichnis |
| `aFilter` | Dateinamenfilter |


## Rückgabewert

Pfad plus Name der zu öffnenden Datei, leerer String, wenn der Dialog ab

## Beispiel

```pascal
Fn:=FileOpenDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-22) · [FileOpenDlg – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileOpenDlg&oldid=43)
