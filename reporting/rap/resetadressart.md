---
title: "ResetAdressArt"
---

# ResetAdressArt

<a id="RAP-Funktion_&quot;ResetAdressArt&quot;"></a>
<a id="RAP-Funktion_.22ResetAdressArt.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure ResetAdressArt(aZiel: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aZiel` | ALLEADRESSEN' setzt den Filter für die Datenquelle „AllgAdresseUndSchueler“ zurück, 'KLASSENADRESSEN' den Filter |
| `auf` | die Datenquelle „AllgAdresseZurLKlasse“ zurück |


## Beispiel

```pascal
Procedure ReportAfterPrint;
 begin
   ResetAdressArt('ALLEADRESSEN');
 end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ResetAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ResetAdressArt&oldid=86)
