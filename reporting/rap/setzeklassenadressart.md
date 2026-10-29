---
title: "SetzeKlassenAdressArt"
---

# SetzeKlassenAdressArt

<a id="RAP-Funktion_&quot;SetzeKlassenAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SetzeKlassenAdressArt.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
Procedure SetzeKlassenAdressArt(const AdressArt: String);
```


Diese Prozedur kann benutzt werden, wenn die Datenquelle
AllgAdresseZurKlasse verwendet werden soll. Voreingestellt
ist die Adressart 'Betrieb'. Diese Datenquelle ist eine Detaildatenquelle
zur Hauptdatenquelle 'Klassen'.

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

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-96) · [SetzeKlassenAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeKlassenAdressArt&oldid=120)
