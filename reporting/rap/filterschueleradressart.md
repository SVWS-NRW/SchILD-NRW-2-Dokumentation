---
title: "FilterSchuelerAdressArt"
---

# FilterSchuelerAdressArt

<a id="RAP-Funktion_&quot;FilterSchuelerAdressArt&quot;"></a>
<a id="RAP-Funktion_.22FilterSchuelerAdressArt.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure FilterSchuelerAdressArt(aAdressArt: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aAdressArt` | Adressart, auf die gefiltert werden soll |


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


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-29) · [FilterSchuelerAdressArt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterSchuelerAdressArt&oldid=50)
