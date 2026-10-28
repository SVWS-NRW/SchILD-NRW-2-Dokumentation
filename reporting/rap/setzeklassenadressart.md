---
title: "SetzeKlassenAdressArt"
---

# SetzeKlassenAdressArt

<a id="RAP-Funktion_&quot;SetzeKlassenAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SetzeKlassenAdressArt.22"></a>

## Signatur

```pascal
Procedure SetzeKlassenAdressArt(const AdressArt: String);
```

## Beschreibung

Diese Prozedur kann benutzt werden, wenn die Datenquelle
AllgAdresseZurKlasse verwendet werden soll. Voreingestellt
ist die Adressart 'Betrieb'. Diese Datenquelle ist eine Detaildatenquelle
zur Hauptdatenquelle 'Klassen'.

## Parameter

```text
AdressArt    - zu berücksichtigende Adressenkategorie
```


## Beispiel

```pascal
Procedure ReportBeforeOpenDatapipelines;
 begin
   SetzeKlassenAdressArt('Kammern');
 end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-96) · [SetzeKlassenAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeKlassenAdressArt&oldid=120)
