---
title: "SetAdressArt"
wiki_title: "SetAdressArt"
wiki_page_id: 85
wiki_revision: 109
---

# SetAdressArt

<a id="RAP-Funktion_&quot;SetAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SetAdressArt.22"></a>

## RAP-Funktion "SetAdressArt"

## Beschreibung

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

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetAdressArt('ALLEADRESSEN','Betrieb');
 end
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-85) · [SetAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetAdressArt&oldid=109)
