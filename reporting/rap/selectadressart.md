---
title: "SelectAdressArt"
---

# SelectAdressArt

## Beschreibung

Diese Funktion bietet alle im Feld „AdressArt“ des Kataloges „Adressarten“ gefundenen
Einträge zur Auswahl an.

```pascal
function SelectAdressArt: String;
```

## Rückgabewert

Adressart.

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lAdressArt : String;
 begin
   lAdressArt:=SelectAdressArt;
   FilterAdressArt(lAdressArt);
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [SelectAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressArt&oldid=95)
