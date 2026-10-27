---
title: "SetzeKlassenAdressArt"
wiki_title: "SetzeKlassenAdressArt"
wiki_page_id: 96
wiki_revision: 120
---

# SetzeKlassenAdressArt

<a id="RAP-Funktion_&quot;SetzeKlassenAdressArt&quot;"></a>
<a id="RAP-Funktion_.22SetzeKlassenAdressArt.22"></a>

## RAP-Funktion "SetzeKlassenAdressArt"

## Beschreibung

```pascal
Procedure SetzeKlassenAdressArt(const AdressArt: String);
Diese Prozedur kann benutzt werden, wenn die Datenquelle
AllgAdresseZurKlasse verwendet werden soll. Voreingestellt
ist die Adressart 'Betrieb'. Diese Datenquelle ist eine Detaildatenquelle
zur Hauptdatenquelle 'Klassen'.
```

## Parameter

```text
AdressArt    - zu berücksichtigende Adressenkategorie
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforeOpenDatapipelines;
 begin
   SetzeKlassenAdressArt('Kammern');
 end;
```


---

Quelle: [SetzeKlassenAdressArt – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeKlassenAdressArt&oldid=120) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetzeKlassenAdressArt&action=history)
