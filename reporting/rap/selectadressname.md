---
title: "SelectAdressName"
---

# SelectAdressName

## Beschreibung

Diese Funktion bietet alle im Feld „Name“ der „Allgemeinen Adressen“ gefundenen
Einträge zur Auswahl an.

```pascal
function SelectAdressName: String;
```

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [SelectAdressName – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressName&oldid=96)
