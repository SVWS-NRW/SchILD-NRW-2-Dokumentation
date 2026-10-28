---
title: "KursBezIgnorieren"
---

# KursBezIgnorieren

<a id="RAP-Funktion_&quot;KursBezIgnorieren&quot;"></a>
<a id="RAP-Funktion_.22KursBezIgnorieren.22"></a>

## Signatur

```pascal
Procedure KursBezIgnorieren(Const Ignore : Boolean);
```

## Beschreibung

Durch den Aufruf dieser Prozedur wird bei der Einsortierung
der Leistungsdaten in die Leistungsübersichten die Kursbezeichnung
ignoriert. Diese Prozedur ist nur im Zusammenhang mit SetUebersicht
notwendig und sinnvoll. Standardmäßig wird die Kursbezeichnung berücksichtigt.

## Parameter

```text
ignore : wahr-> Kursarten ignorieren
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersicht(True);
   KursBezIgnorieren(True);
 end;

 Procedure ReportAfterPrint;
 begin
   SetUebersicht(false);
   KursBezIgnorieren(False);
 end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-39) · [KursBezIgnorieren – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=KursBezIgnorieren&oldid=60)
