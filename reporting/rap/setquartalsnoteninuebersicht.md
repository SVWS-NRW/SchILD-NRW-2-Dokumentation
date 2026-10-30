---
title: "SetQuartalsnotenInUebersicht"
---

# SetQuartalsnotenInUebersicht

<a id="RAP-Funktion_&quot;SetQuartalsnotenInUebersicht&quot;"></a>
<a id="RAP-Funktion_.22SetQuartalsnotenInUebersicht.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure SetQuartalsnotenInUebersicht( MitQuartalnoten: Boolean);
```


Steuert, ob in Leistungsübersichten auch Quartalsnoten erscheinen sollen

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
  {Darstellung von Quartalsnoten einschalten}
  SetQuartalsnotenInUebersicht( true );
 End;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SetQuartalsnotenInUebersicht – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetQuartalsnotenInUebersicht&oldid=166)
