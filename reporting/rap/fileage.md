---
title: "FileAge"
wiki_title: "FileAge"
wiki_page_id: 20
wiki_revision: 40
---

# FileAge

<a id="RAP-Funktion_&quot;FileAge&quot;"></a>
<a id="RAP-Funktion_.22FileAge.22"></a>

## RAP-Funktion "FileAge"

## Beschreibung

   function FileAge(const aFilename: String): DateTime;\
   bestimmt das Dateidatum\

## Parameter

   aFilename          - Dateiname incl. Pfad\

## Rückgabewert

   Dateidatum\

## Beispiel

   If FileAge('C:\Schild-NRW\Schild-Reports\Zeugnisse\Zeugnis_11.rtm') \< StrToDate('01.01.2009') then...;\


---

Quelle: [FileAge – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileAge&oldid=40) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=FileAge&action=history)
