---
title: "Datenliste"
wiki_title: "Datenliste"
wiki_page_id: 1145
wiki_revision: 4250
---

# Datenliste

<a id="RAP-Funktion_&quot;Datenliste&quot;"></a>
<a id="RAP-Funktion_.22Datenliste.22"></a>

## RAP-Funktion "Datenliste"

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

```text
Datenliste z.B. 05a, 06a, 07a, 08a aus dem Beispiel
```

## Beispiel

```pascal
lblBesuchteKlassen.Caption := DatenListe( SchuelerLaufbahn, 'Klasse', ', ', false );
```


---

Quelle: [Datenliste – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Datenliste&oldid=4250) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Datenliste&action=history)
