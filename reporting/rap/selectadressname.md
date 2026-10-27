---
title: "SelectAdressName"
wiki_title: "SelectAdressName"
wiki_page_id: 75
wiki_revision: 96
---

# SelectAdressName

<a id="RAP-Funktion_&quot;SelectAdressName&quot;"></a>
<a id="RAP-Funktion_.22SelectAdressName.22"></a>

## RAP-Funktion "SelectAdressName"

## Beschreibung

```pascal
function SelectAdressName: String;
Diese Funktion bietet alle im Feld „Name“ der „Allgemeinen Adressen“ gefundenen
Einträge zur Auswahl an.
```

## Parameter

```text
...
```

## Rückgabewert

```text
Adressbestandteil „Name“
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
  lAdresse : String;
 begin
  lAdresse:=SelectAdressName;
  FilterAdresse(lAdresse);
 end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-75) · [SelectAdressName – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressName&oldid=96)
