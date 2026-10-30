---
title: "SummeFehlstunden"
---

# SummeFehlstunden

<a id="RAP-Funktion_&quot;SummeFehlstunden&quot;"></a>
<a id="RAP-Funktion_.22SummeFehlstunden.22"></a>

<a id="signatur"></a>

## Beschreibung

Ermittelt die gesamten und unentschuldigten Fehlstunden einer Person für das aktuelle Schuljahr. Die beiden Werte werden über die dafür vorgesehenen Ausgabeparameter bereitgestellt.

```pascal
procedure SummeFehlstunden(aSchuelerId: integer; var FehlStd, uFehlStd: Integer);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aSchuelerId` | Id des gewünschten Schülers |

## Rückgabewert

FehlStd            - Fehlstunden des Schülers im aktuellen Schuljahr, das heißt es wird
                     über die letzten zwei Abschnitte beziehungsweise die letzten vier
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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SummeFehlstunden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SummeFehlstunden&oldid=126)
