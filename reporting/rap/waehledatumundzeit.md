---
title: "WaehleDatumUndZeit"
---

# WaehleDatumUndZeit

<a id="RAP-Funktion_&quot;WaehleDatumUndZeit&quot;"></a>
<a id="RAP-Funktion_.22WaehleDatumUndZeit.22"></a>

<a id="signatur"></a>

## Beschreibung

Öffnet einen Dialog zur Auswahl von Datum und Uhrzeit. Der Rückgabewert zeigt an, ob der Dialog bestätigt wurde.

```pascal
function WaehleDatumUndZeit(Hinweis: String; Var Datum, Uhrzeit: Datetime): Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Hinweis` | Hinweistext |
| `Datum` | Platzhalter für die zu wählenden Daten |
| `Uhrzeit` | Platzhalter für die zu wählenden Daten |

## Rückgabewert

TRUE, falls der Dialog mit Ok beendet wurde, sonst FALSE

## Beispiel

```pascal
If WaehleDatum('Bitte Beginn der Veranstaltung
                eingeben',lDatum,lUhrzeit) then...
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [WaehleDatumUndZeit – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=WaehleDatumUndZeit&oldid=132)
