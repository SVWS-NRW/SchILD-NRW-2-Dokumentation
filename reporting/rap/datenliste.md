---
title: "Datenliste"
---

# Datenliste

<a id="RAP-Funktion_&quot;Datenliste&quot;"></a>
<a id="RAP-Funktion_.22Datenliste.22"></a>

## Beschreibung

```text
 
    DatenListe(aDatapipeline: TppDBPipeline; aFeld, aSep: string; duplikate: boolean ): string;
Diese liefert eine Liste (getrennt durch ein wählbares Trennzeichen ) für ein Feld in einer Datenquelle, mit der Option, ob doppelt auftretende Werte ausgegeben werden sollen oder nicht.
```

## Parameter

```text
Datenquelle, Datenfeld,Trennzeichen,true/false
```

## Rückgabewert

Datenliste z.B. 05a, 06a, 07a, 08a aus dem Beispiel

## Beispiel

```pascal
lblBesuchteKlassen.Caption := DatenListe( SchuelerLaufbahn, 'Klasse', ', ', false );
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1145) · [Datenliste – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Datenliste&oldid=4250)
