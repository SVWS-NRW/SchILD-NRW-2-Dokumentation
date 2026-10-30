---
title: "CreateNotenHeaderUS"
---

# CreateNotenHeaderUS

<a id="RAP-Funktion_&quot;CreateNotenHeaderUS&quot;"></a>
<a id="RAP-Funktion_.22CreateNotenHeaderUS.22"></a>

## Beschreibung

```pascal
procedure CreateNotenHeaderUS(aFaecherListe: String);
```

US steht für unsortiert, d.h. der erzeugte Header entspricht der im
Parameter übergebenen Fächerfolge. Diese Prozedur ist nur nötig und sinnvoll,
wenn eine tabellarische Übersicht über alle gewählten Schüler 
und deren Leistungsdaten gewünscht wird, da ein Aufruf dieser Prozedur dazu führt,
dass die Leistungsdaten aller in der Auswahl befindlichen Schüler gelesen werden,
damit eine interne Tabelle mit diesen Fächern angelegt werden kann.
In allen anderen Fällen ist dieser Aufruf unnötig! Nach der Darstellung der Tabelle muss
unbedingt die Prozedur 'ResetFaechervorbelegung' aufgerufen werden!


## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aFaecherListe` | Kommaseparierte Liste der Fachkürzel, für die eine Übersicht erzeugt werden soll. |


## Beispiel

```pascal
CreateNotenHeaderUS('D,E,M,F,L');
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [CreateNotenHeaderUS – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=CreateNotenHeaderUS&oldid=35)
