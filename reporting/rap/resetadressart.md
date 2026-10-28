---
title: "ResetAdressArt"
---

# ResetAdressArt

<a id="RAP-Funktion_&quot;ResetAdressArt&quot;"></a>
<a id="RAP-Funktion_.22ResetAdressArt.22"></a>

## Signatur

```pascal
procedure ResetAdressArt(aZiel: String);
```

## Parameter

```text
aZiel   - ALLEADRESSEN' setzt den Filter für die Datenquelle
         „AllgAdresseUndSchueler“ zurück, 'KLASSENADRESSEN' den Filter
          auf  die Datenquelle „AllgAdresseZurLKlasse“ zurück
```


## Beispiel

```pascal
Procedure ReportAfterPrint;
 begin
   ResetAdressArt('ALLEADRESSEN');
 end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-65) · [ResetAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ResetAdressArt&oldid=86)
