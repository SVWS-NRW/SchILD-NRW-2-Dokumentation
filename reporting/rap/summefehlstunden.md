---
title: "SummeFehlstunden"
wiki_title: "SummeFehlstunden"
wiki_page_id: 102
wiki_revision: 126
---

# SummeFehlstunden

<a id="RAP-Funktion_&quot;SummeFehlstunden&quot;"></a>
<a id="RAP-Funktion_.22SummeFehlstunden.22"></a>

## RAP-Funktion "SummeFehlstunden"

## Beschreibung

```pascal
procedure SummeFehlstunden(aSchuelerId: integer; var FehlStd, uFehlStd: Integer);
```

## Parameter

```text
aSchuelerId  - Id des gewünschten Schülers
```

## Rückgabewert

```text
FehlStd            - Fehlstunden des Schülers im aktuellen Schuljahr, d.h. es wird
                     über die letzten zwei Abschnitte bzw. die letzten vier
                     Quartale summiert.
uFehlStd           - Unentschuldigte Fehlstunden des Schülers
```

## Beispiel

```pascal
Var
  lFehl, lUFehl
 begin
   SummeFehlstunden(Schueler['ID'],lFehl,lUFehl);
   Label1.Caption:='FehlStunden: ' + IntoStr(lFehl);
   Label2.Caption:='davon unentschuldigt: ' + IntToStr(lUFehl
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-102) · [SummeFehlstunden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SummeFehlstunden&oldid=126)
