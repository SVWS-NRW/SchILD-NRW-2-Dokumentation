---
title: "Setzefilter"
wiki_title: "Setzefilter"
wiki_page_id: 95
wiki_revision: 2115
---

# Setzefilter

<a id="RAP-Funktion_&quot;Setzefilter&quot;"></a>
<a id="RAP-Funktion_.22Setzefilter.22"></a>

## RAP-Funktion "Setzefilter"

## Beschreibung

   procedure SetzeFilter(Pipeline: TppDbPipeline; const Filter: String)\
   schränkt die Datensätze durch die übergebene Filterbedingung ein.\

## Parameter

   Pipeline       - Datenquelle, die gefiltert werden soll\
   Filter         - der neue Filter. Ist der Filterstring leer, wird die Filterung entfernt.\

## Rückgabewert

   ...\

## Beispiel

Man kann die Filterbedingungen in den Reports wie folgt definieren:\
**Setzefilter(Klassenlehrer_mit_Faechern,'Fachkrz=M;D' );**\
d.h. wenn mehrere Optionen in Frage kommen (OR-Bedingung), brauchen die nur\
durch Semikolon getrennt angegeben zu werden.\
**SetzeFilter(Klassen, 'KlassenlehrerKrz \<\>""');**\
d.h. bei Abfragen "ungleich Leerstring" können die "doppelten Hochkommas"\
(über der 2 auf der Tastatur) verwendet werden.\
Filterbedingungen der Art 'Klasse=05\*' oder 'Klasse=\*A' bewirken eine Filterung mit \
allen für den \*  vorkommenden Zeichen. (Wildcard)\
Im übrigen können auch mehrere Aufrufe von SetzeFilter (z.B. für\
verschiedene Datenquellen) genutzt werden.\
**Noch ein Hinweis**: Manchmal funktioniert die Filterung in der Vorschau des\
Designers nicht, im "Druckbetrieb" wird dann aber korrekt gefiltert.\


---

Quelle: [Setzefilter – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Setzefilter&oldid=2115) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Setzefilter&action=history)
