---
title: "Setzefilter"
---

# Setzefilter

<a id="RAP-Funktion_&quot;Setzefilter&quot;"></a>
<a id="RAP-Funktion_.22Setzefilter.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetzeFilter(Pipeline: TppDbPipeline; const Filter: String)
```


schränkt die Datensätze durch die übergebene Filterbedingung ein.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Pipeline` | Datenquelle, die gefiltert werden soll |
| `Filter` | der neue Filter. Ist der Filterstring leer, wird die Filterung entfernt. |


## Beispiel

Mehrere zulässige Werte werden als OR-Bedingung durch Semikolon getrennt:

```pascal
Setzefilter(Klassenlehrer_mit_Faechern,'Fachkrz=M;D');
```

Für „ungleich Leerstring“ können im Filter die doppelten Anführungszeichen verwendet werden:

```pascal
SetzeFilter(Klassen, 'KlassenlehrerKrz <>""');
```

Filter wie `Klasse=05*` oder `Klasse=*A` verwenden `*` als Platzhalter. Mehrere Aufrufe können verschiedene Datenquellen filtern. Ein leerer Filterstring entfernt die Filterung.

:::warning Vorschau und Druck
Laut Wiki-Quelle wirkt die Filterung in manchen Fällen erst im Druckbetrieb und nicht in der Vorschau des Designers. Prüfen Sie deshalb auch die tatsächliche Druckausgabe.
:::

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Setzefilter – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Setzefilter&oldid=2115)
