---
title: "DatensatzZeigerBewegen"
---

# DatensatzZeigerBewegen

<a id="RAP-Funktion_&quot;DatensatzZeigerBewegen&quot;"></a>
<a id="RAP-Funktion_.22DatensatzZeigerBewegen.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure DatensatzZeigerBewegen (aPipeline: TppDatapipeline; aSchritte: integer)
```


Bewegt den Datensatzzeiger der als Parameter angegebenen Datenquelle

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aPipeline` | Die betreffende Datenquelle |
| `aSchritte` | Bewegungsschritte (-1000: Erster Datensatz, 1000: Letzter Datensatz, -1: vorheriger Datensatz, 1: Nächster Datensatz) |


## Beispiel

```pascal
DatensatzZeigerBewegen( Lernabschnitte, -1 );
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [DatensatzZeigerBewegen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=DatensatzZeigerBewegen&oldid=5690)
