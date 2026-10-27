---
title: "FileOpenDlg"
wiki_title: "FileOpenDlg"
wiki_page_id: 22
wiki_revision: 43
---

# FileOpenDlg

<a id="RAP-Funktion_&quot;FileOpenDlg&quot;"></a>
<a id="RAP-Funktion_.22FileOpenDlg.22"></a>

## RAP-Funktion "FileOpenDlg"

## Beschreibung

```pascal
XXXfunction FileOpenDlg(const aFilename, aInitialDir,
                           aFilter: String): String;
```

## Parameter

```text
aFilename          - Name der zu öffnenden Datei, evtl. mit Platzhaltern
aInitialDir        - Startverzeichnis, Leerer String öffnet im aktuellen
                     Verzeichnis
aFilter            - Dateinamenfilter
```

## Rückgabewert

```text
Pfad plus Name der zu öffnenden Datei, leerer String, wenn der Dialog ab
```

## Beispiel

```pascal
Fn:=FileOpenDlg('*.txt','c:\Text','Textdateien|*.txt|Alle Dateien|*.*');
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-22) · [FileOpenDlg – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileOpenDlg&oldid=43)
