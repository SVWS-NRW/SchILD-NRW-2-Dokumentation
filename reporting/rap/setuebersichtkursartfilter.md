---
title: "SetUebersichtKursartFilter"
wiki_title: "SetUebersichtKursartFilter"
wiki_page_id: 94
wiki_revision: 180
---

# SetUebersichtKursartFilter

<a id="RAP-Funktion_&quot;SetUebersichtKursartFilter&quot;"></a>
<a id="RAP-Funktion_.22SetUebersichtKursartFilter.22"></a>

## RAP-Funktion "SetUebersichtKursartFilter"

## Beschreibung

```pascal
'''procedure SetUebersichtKursartFilter(Const aKursartListe: String);'''
Mit dieser Funktion können jetzt alle "Leistungsdatenquellen" 
(nicht nur in den Übersichten) auf Kursarten gefiltert werden.
Dabei ist folgendes zu beachten:
-Es müssen die "schülerbezogenen" Kursarten verwendet werden 
(also z.B. SetUebersichtKursartFilter( 'LK1,LK2'), wenn man nur Leistungskurse haben will 
(SetUebersichtKursartFilter( 'LK') funktioniert nicht)
-Wenn ein "-" der Liste vorangestellt wird, funktioniert der Filter ausschließend 
(d.h. SetUebersichtKursartFilter( '-WPII,AGGT') berücksichtigt nur Leistungsdaten, 
die nicht die Kursart WPII oder AGGT haben)
```

## Parameter

```text
aListe    - Kommaseparierte Liste der gewünschten Kursarten
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersichtKursartFilter('AGGT,ZUV');
 end;
 Damit werden in der Leistungsübersicht nur Fächer mit den Kursarten
 AGGT und ZUV nach Kursbezeichnung unterschieden.
```


---

Quelle: [SetUebersichtKursartFilter – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersichtKursartFilter&oldid=180) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetUebersichtKursartFilter&action=history)
