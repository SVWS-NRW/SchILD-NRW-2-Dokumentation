---
title: "FileExists"
wiki_title: "FileExists"
wiki_page_id: 21
wiki_revision: 41
---

# FileExists

<a id="RAP-Funktion_&quot;FileExists&quot;"></a>
<a id="RAP-Funktion_.22FileExists.22"></a>

## RAP-Funktion "FileExists"

## Beschreibung

```pascal
function FileExists(const aFilename: String): Boolean;
prüft, ob eine Datei existiert
```

## Parameter

```text
aFilename          - Dateiname incl. Pfad
```

## Rückgabewert

```text
True, falls die Datei existiert, sonst False
```

## Beispiel

```text
If FileExists('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') then...;
```


---

Quelle: [FileExists – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileExists&oldid=41) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileExists&action=history)
