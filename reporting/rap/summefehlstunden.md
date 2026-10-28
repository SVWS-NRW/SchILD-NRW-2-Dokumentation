---
title: "SummeFehlstunden"
---

# SummeFehlstunden

<a id="RAP-Funktion_&quot;SummeFehlstunden&quot;"></a>
<a id="RAP-Funktion_.22SummeFehlstunden.22"></a>

## Signatur

```pascal
procedure SummeFehlstunden(aSchuelerId: integer; var FehlStd, uFehlStd: Integer);
```

## Parameter

```text
aSchuelerId  - Id des gewünschten Schülers
```

## Rückgabewert

FehlStd            - Fehlstunden des Schülers im aktuellen Schuljahr, d.h. es wird
                     über die letzten zwei Abschnitte bzw. die letzten vier
                     Quartale summiert.
uFehlStd           - Unentschuldigte Fehlstunden des Schülers

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

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-102) · [SummeFehlstunden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SummeFehlstunden&oldid=126)
