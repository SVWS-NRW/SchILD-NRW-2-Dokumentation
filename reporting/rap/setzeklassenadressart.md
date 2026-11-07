---
title: "SetzeKlassenAdressArt"
---

# SetzeKlassenAdressArt

## Beschreibung

Diese Prozedur kann benutzt werden, wenn die Datenquelle
AllgAdresseZurKlasse verwendet werden soll. Voreingestellt
ist die Adressart 'Betrieb'. Diese Datenquelle ist eine Detaildatenquelle
zur Hauptdatenquelle 'Klassen'.

```pascal
Procedure SetzeKlassenAdressArt(const AdressArt: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `AdressArt` | zu berücksichtigende Adressenkategorie |

## Beispiel

```pascal
Procedure ReportBeforeOpenDatapipelines;
 begin
   SetzeKlassenAdressArt('Kammern');
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [SetzeKlassenAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeKlassenAdressArt&oldid=120)
