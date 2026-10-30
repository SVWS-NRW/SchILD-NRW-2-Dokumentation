---
title: "SelectAdressName"
---

# SelectAdressName

<a id="RAP-Funktion_&quot;SelectAdressName&quot;"></a>
<a id="RAP-Funktion_.22SelectAdressName.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectAdressName: String;
```


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


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SelectAdressName – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressName&oldid=96)
