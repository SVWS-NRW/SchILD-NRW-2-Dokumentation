---
title: "WaehleDatumUndZeit"
wiki_title: "WaehleDatumUndZeit"
wiki_page_id: 107
wiki_revision: 132
---

# WaehleDatumUndZeit

<a id="RAP-Funktion_&quot;WaehleDatumUndZeit&quot;"></a>
<a id="RAP-Funktion_.22WaehleDatumUndZeit.22"></a>

## RAP-Funktion "WaehleDatumUndZeit"

## Beschreibung

```pascal
function WaehleDatumUndZeit(Hinweis: String; Var Datum, Uhrzeit: Datetime): Boolean;
```

## Parameter

```text
Hinweis            - Hinweistext
Datum              - Platzhalter für die zu wählenden Daten
Uhrzeit            - Platzhalter für die zu wählenden Daten
```

## Rückgabewert

```text
TRUE, falls der Dialog mit Ok beendet wurde, sonst FALSE
```

## Beispiel

```text
If WaehleDatum('Bitte Beginn der Veranstaltung
                eingeben',lDatum,lUhrzeit) then...
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-107) · [WaehleDatumUndZeit – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=WaehleDatumUndZeit&oldid=132)
