---
title: "SelectAdressArt"
---

# SelectAdressArt

<a id="RAP-Funktion_&quot;SelectAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SelectAdressArt.22"></a>

## Signatur

```pascal
function SelectAdressArt: String;
```

## Beschreibung

Diese Funktion bietet alle im Feld „AdressArt“ des Kataloges „Adressarten“ gefundenen
Einträge zur Auswahl an.

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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-74) · [SelectAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressArt&oldid=95)
