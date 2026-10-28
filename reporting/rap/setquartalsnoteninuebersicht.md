---
title: "SetQuartalsnotenInUebersicht"
---

# SetQuartalsnotenInUebersicht

<a id="RAP-Funktion_&quot;SetQuartalsnotenInUebersicht&quot;"></a>
<a id="RAP-Funktion_.22SetQuartalsnotenInUebersicht.22"></a>

## Signatur

```pascal
procedure SetQuartalsnotenInUebersicht( MitQuartalnoten: Boolean);
```

## Beschreibung

Steuert, ob in Leistungsübersichten auch Quartalsnoten erscheinen sollen

## Beispiel

```pascal
procedure ReportBeforePrint;
 begin
  {Darstellung von Quartalsnoten einschalten}
  SetQuartalsnotenInUebersicht( true );
 End;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-120) · [SetQuartalsnotenInUebersicht – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetQuartalsnotenInUebersicht&oldid=166)
