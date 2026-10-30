---
title: "SetAdressArt"
---

# SetAdressArt

<a id="RAP-Funktion_&quot;SetAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SetAdressArt.22"></a>

<a id="signatur"></a>

## Beschreibung

Setzt einen Filter nach Adressart für die angegebene Zieldatenquelle. Die Parameter bestimmen Ziel und gewünschte Adressart.

```pascal
procedure SetAdressArt(aZiel, aAdressArt: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aZiel` | ALLEADRESSEN' setzt den Filter für die Datenquelle „AllgAdresseUndSchueler“, 'KLASSENADRESSEN' auf die Datenquelle „AllgAdresseZurLKlasse“ |
| `aAdressArt` | Gewünschte Adressart, entweder über SelectAdressArt auswählen oder als Stringliteral (zum Beispiel „Betrieb“) eingeben |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAdressArt('ALLEADRESSEN','Betrieb');
 end
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAdressArt&oldid=109)
