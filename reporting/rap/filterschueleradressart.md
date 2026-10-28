---
title: "FilterSchuelerAdressArt"
---

# FilterSchuelerAdressArt

<a id="RAP-Funktion_&quot;FilterSchuelerAdressArt&quot;"></a>
<a id="RAP-Funktion_.22FilterSchuelerAdressArt.22"></a>

## Signatur

```pascal
procedure FilterSchuelerAdressArt(aAdressArt: String);
```

## Parameter

```text
aAdressArt - Adressart, auf die gefiltert werden soll
```


## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lAdressArt : String;
 begin
   lAdressArt:=SelectAdressArt;
   FilterSchuelerAdressArt(lAdressArt);
 end;
 (*Zu jedem Schüler werden die durch „lAdressArt“ gefilterten Einträge aus den „Allgemeinen
  Adressen“ angezeigt. Auf das Ergebnis kann über die Datenquelle „SchuelerAdressen“
  zugegriffen werden*)
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-29) · [FilterSchuelerAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterSchuelerAdressArt&oldid=50)
