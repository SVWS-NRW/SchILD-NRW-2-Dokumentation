---
title: "ResetAdressArt"
---

# ResetAdressArt

## Beschreibung

Hebt einen zuvor gesetzten Adressartfilter für die angegebene Zieldatenquelle wieder auf.

```pascal
procedure ResetAdressArt(aZiel: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aZiel` | `ALLEADRESSEN` setzt den Filter der Datenquelle „AllgAdresseUndSchueler“ zurück; `KLASSENADRESSEN` setzt den Filter der Datenquelle „AllgAdresseZurLKlasse“ zurück. |

## Beispiel

```pascal
Procedure ReportAfterPrint;
 begin
   ResetAdressArt('ALLEADRESSEN');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [ResetAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ResetAdressArt&oldid=86)
