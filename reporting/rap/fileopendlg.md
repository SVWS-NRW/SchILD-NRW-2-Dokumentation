---
title: "FileOpenDlg"
---

# FileOpenDlg

<a id="RAP-Funktion_&quot;FileOpenDlg&quot;"></a>
<a id="RAP-Funktion_.22FileOpenDlg.22"></a>

## Beschreibung

Öffnet einen Dialog zur Auswahl einer zu öffnenden Datei. Das Ergebnis enthält deren Pfad und Dateinamen; ein Abbruch liefert eine leere Zeichenkette.

```pascal
function FileOpenDlg(const aFilename, aInitialDir,
                           aFilter: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFilename` | Name der zu öffnenden Datei, gegebenenfalls mit Platzhaltern |
| `aInitialDir` | Startverzeichnis, Leerer String öffnet im aktuellen Verzeichnis |
| `aFilter` | Dateinamenfilter |

## Rückgabewert

Pfad plus Name der zu öffnenden Datei, leere Zeichenkette, wenn der Dialog abgebrochen wird.

## Beispiel

```pascal
Fn:=FileOpenDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [FileOpenDlg – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileOpenDlg&oldid=43)
