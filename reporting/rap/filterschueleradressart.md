---
title: "FilterSchuelerAdressArt"
wiki_title: "FilterSchuelerAdressArt"
wiki_page_id: 29
wiki_revision: 50
---

# FilterSchuelerAdressArt

<a id="RAP-Funktion_&quot;FilterSchuelerAdressArt&quot;"></a>
<a id="RAP-Funktion_.22FilterSchuelerAdressArt.22"></a>

## RAP-Funktion "FilterSchuelerAdressArt"

## Beschreibung

```pascal
procedure FilterSchuelerAdressArt(aAdressArt: String);
```

## Parameter

```text
aAdressArt - Adressart, auf die gefiltert werden soll
```

## Rückgabewert

```text
...
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

Quelle: [FilterSchuelerAdressArt – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterSchuelerAdressArt&oldid=50) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterSchuelerAdressArt&action=history)
