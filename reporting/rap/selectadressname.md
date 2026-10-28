---
title: "SelectAdressName"
---

# SelectAdressName

<a id="RAP-Funktion_&quot;SelectAdressName&quot;"></a>
<a id="RAP-Funktion_.22SelectAdressName.22"></a>

## Signatur

```pascal
function SelectAdressName: String;
```

## Beschreibung

Diese Funktion bietet alle im Feld „Name“ der „Allgemeinen Adressen“ gefundenen
Einträge zur Auswahl an.

## Rückgabewert

Adressbestandteil „Name“

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

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-75) · [SelectAdressName – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressName&oldid=96)
