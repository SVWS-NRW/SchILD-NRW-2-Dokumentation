---
title: "SelectAdressArt"
---

# SelectAdressArt

<a id="RAP-Funktion_&quot;SelectAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SelectAdressArt.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectAdressArt: String;
```


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


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-74) · [SelectAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectAdressArt&oldid=95)
