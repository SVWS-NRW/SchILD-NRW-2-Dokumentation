---
title: "FileSaveDlg"
wiki_title: "FileSaveDlg"
wiki_page_id: 23
wiki_revision: 44
---

# FileSaveDlg

<a id="RAP-Funktion_&quot;FileSaveDlg&quot;"></a>
<a id="RAP-Funktion_.22FileSaveDlg.22"></a>

## RAP-Funktion "FileSaveDlg"

## Beschreibung

```pascal
function FileSaveDlg(const aFilename, aInitialDir,
                     aFilter: String): String;
```

## Parameter

```text
aFilename          - Name der zu speichernden Datei, evtl. mit Platzhaltern
aInitialDir        - Startverzeichnis, Leerer String öffnet im aktuellen
                     Verzeichnis
aFilter            - Dateinamenfilter
```

## Rückgabewert

```text
Pfad plus Name der zu speichernden Datei, leerer String, wenn der Dialog
abgebrochen wird
```

## Beispiel

```pascal
Fn:=FileSaveDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-23) · [FileSaveDlg – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileSaveDlg&oldid=44)
