---
title: "SetAdressArt"
---

# SetAdressArt

<a id="RAP-Funktion_&quot;SetAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SetAdressArt.22"></a>

## Signatur

```pascal
procedure SetAdressArt(aZiel, aAdressArt: String);
```

## Parameter

```text
aZiel              - ALLEADRESSEN' setzt den Filter für die Datenquelle
                    „AllgAdresseUndSchueler“, 'KLASSENADRESSEN' auf die Datenquelle
                    „AllgAdresseZurLKlasse“
aAdressArt         - Gewünschte Adressart, entweder über SelectAdressArt auswählen
                     oder als Stringliteral (z.B. „Betrieb“) eingeben
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAdressArt('ALLEADRESSEN','Betrieb');
 end
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-85) · [SetAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAdressArt&oldid=109)
