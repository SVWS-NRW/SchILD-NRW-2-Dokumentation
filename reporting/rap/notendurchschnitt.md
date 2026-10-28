---
title: "NotenDurchschnitt"
---

# NotenDurchschnitt

<a id="RAP-Funktion_&quot;NotenDurchschnitt&quot;"></a>
<a id="RAP-Funktion_.22NotenDurchschnitt.22"></a>

## Signatur

```pascal
procedure NotenDurchschnitt(const aSchuelerId, aJahr, aAbschnitt: Integer;
```

## Beschreibung

var Beste, Schlechteste: Integer; var Schnitt: String);

## Parameter

```text
aSchuelerId        - Id-Nummer des Schülers
aJahr              - Schuljahr und
aAbschnitt         - Abschnitt des Schuljahres, für das der Schnitt berechnet wird.
```

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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-54) · [NotenDurchschnitt – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NotenDurchschnitt&oldid=4087)
