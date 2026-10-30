---
title: "FileSaveDlg"
---

# FileSaveDlg

<a id="RAP-Funktion_&quot;FileSaveDlg&quot;"></a>
<a id="RAP-Funktion_.22FileSaveDlg.22"></a>

<a id="signatur"></a>

## Beschreibung

Öffnet einen Dialog zur Auswahl eines Speicherorts und Dateinamens. Bei einem Abbruch wird eine leere Zeichenkette zurückgegeben.

```pascal
function FileSaveDlg(const aFilename, aInitialDir,
                     aFilter: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFilename` | Name der zu speichernden Datei, gegebenenfalls mit Platzhaltern |
| `aInitialDir` | Startverzeichnis, Leerer String öffnet im aktuellen Verzeichnis |
| `aFilter` | Dateinamenfilter |

## Rückgabewert

Pfad plus Name der zu speichernden Datei, leerer String, wenn der Dialog
abgebrochen wird

## Beispiel

```pascal
Fn:=FileSaveDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [FileSaveDlg – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileSaveDlg&oldid=44)
