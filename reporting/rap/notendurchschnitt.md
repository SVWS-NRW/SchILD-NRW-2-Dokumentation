---
title: "NotenDurchschnitt"
---

# NotenDurchschnitt

<a id="RAP-Funktion_&quot;NotenDurchschnitt&quot;"></a>
<a id="RAP-Funktion_.22NotenDurchschnitt.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure NotenDurchschnitt(const aSchuelerId, aJahr, aAbschnitt: Integer;
```


var Beste, Schlechteste: Integer; var Schnitt: String);

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aSchuelerId` | Id-Nummer des Schülers |
| `aJahr` | Schuljahr und |
| `aAbschnitt` | Abschnitt des Schuljahres, für das der Schnitt berechnet wird. |


## Rückgabewert

Beste              - Beste Note des Abschnitte
Schlechteste       - Schlechteste Note des Abschnittes
Schnitt            - Formatierte Schnitt (zwei Nachkommastellen)

## Beispiel

```pascal
procedure DetailBeforePrint;
var
  lBeste, lSchlechteste : integer;
  lSchnitt : String;
begin
  NotenDurchschnitt(Schueler['ID'],Schueler['AktSchuljahr'],Schueler['AktAbschnitt'],
  Label1.Caption:=IntToStr(lBeste);
  Label2.Caption:=IntToStr(lSchlechteste);
  Label3.Caption:=lSchnitt;
end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-54) · [NotenDurchschnitt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NotenDurchschnitt&oldid=4087)
