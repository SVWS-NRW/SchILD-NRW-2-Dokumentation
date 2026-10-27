---
title: "CreateNotenHeader"
wiki_title: "CreateNotenHeader"
wiki_page_id: 15
wiki_revision: 183
---

# CreateNotenHeader

<a id="RAP-Funktion_&quot;CreateNotenHeader&quot;"></a>
<a id="RAP-Funktion_.22CreateNotenHeader.22"></a>

## RAP-Funktion "CreateNotenHeader"

## Beschreibung

```pascal
'''procedure CreateNotenHeader(aFaecherListe: String);'''
(*Im tatsächlich erzeugten Header stehen die Fächer
in der unter „Unterrichtsfächer“ festgelegten Sortierreihenfolge*). 
Diese Prozedur ist nur nötig und sinnvoll, wenn eine tabellarische
Übersicht über alle gewählten Schüler und deren Leistungsdaten gewünscht wird,
da ein Aufruf dieser Prozedur dazu führt, dass die Leistungsdaten 
aller in der Auswahl befindlichen Schüler gelesen werden, 
damit eine interne Tabelle mit diesen Fächern angelegt werden kann.
In allen anderen Fällen ist dieser Aufruf unnötig! Nach der Darstellung der Tabelle muss
unbedingt die Prozedur 'ResetFaechervorbelegung' aufgerufen werden!
```

## Parameter

```text
aFaecherListe      - Kommaseparierte Liste der Fachkürzel, für die
                     eine Übersicht erzeugt werden soll.
```

## Rückgabewert

```text
...
```

## Beispiel

```text
'''CreateNotenHeader('D,E,M,F,L');'''
Bei den "Konferen-Übersichten (d.h. Vorlagen, die die Datenquellen FachUebersichtHeader 
und FachUebersicht verwenden) stehen im Befehl "CreateNotenHeader" weitere Optionen zum 
Filtern auf Fächer zur Verfügung:
-Es können "Platzhalter * oder % (gleichbedeutend) verwendet werden
Beispiel:
'''CreateNotenHeader( 'D,M,E*' );'''
würde nur die Fächer D,M und solche, die mit E anfangen, berücksichtigen (also z.B. E5, EK)
-Der Platzhalter # kann speziell für Fremdsprachen mit Jahrgangsangabe verwendet werden
Beispiel
'''CreateNotenHeader( 'D,M,E#' );'''
würde nur die Fächer D,M und alle Englisch-Fächer berücksichtigen (aber nicht EK)
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-15) · [CreateNotenHeader – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=CreateNotenHeader&oldid=183)
