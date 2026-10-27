---
title: "DatensatzZeigerBewegen"
wiki_title: "DatensatzZeigerBewegen"
wiki_page_id: 1381
wiki_revision: 5690
---

# DatensatzZeigerBewegen

<a id="RAP-Funktion_&quot;DatensatzZeigerBewegen&quot;"></a>
<a id="RAP-Funktion_.22DatensatzZeigerBewegen.22"></a>

## RAP-Funktion "DatensatzZeigerBewegen"

## Beschreibung

```pascal
procedure DatensatzZeigerBewegen (aPipeline: TppDatapipeline; aSchritte: integer)
Bewegt den Datensatzzeiger der als Parameter angegebenen Datenquelle
```

## Parameter

```text
aPipeline: Die betreffende Datenquelle
aSchritte: Bewegungsschritte (-1000: Erster Datensatz, 1000: Letzter Datensatz,
           -1: vorheriger Datensatz, 1: Nächster Datensatz)
```

## Rückgabewert

```text
...
```

## Beispiel

```text
DatensatzZeigerBewegen( Lernabschnitte, -1 );
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1381) · [DatensatzZeigerBewegen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=DatensatzZeigerBewegen&oldid=5690)
