---
title: "NotenDurchschnitt"
wiki_title: "NotenDurchschnitt"
wiki_page_id: 54
wiki_revision: 4087
---

# NotenDurchschnitt

<a id="RAP-Funktion_&quot;NotenDurchschnitt&quot;"></a>
<a id="RAP-Funktion_.22NotenDurchschnitt.22"></a>

## RAP-Funktion "NotenDurchschnitt"

## Beschreibung

```pascal
procedure NotenDurchschnitt(const aSchuelerId, aJahr, aAbschnitt: Integer;
                     var Beste, Schlechteste: Integer; var Schnitt: String);
```

## Parameter

```text
aSchuelerId        - Id-Nummer des Schülers
aJahr              - Schuljahr und
aAbschnitt         - Abschnitt des Schuljahres, für das der Schnitt berechnet wird.
```

## Rückgabewert

```text
Beste              - Beste Note des Abschnitte
Schlechteste       - Schlechteste Note des Abschnittes
Schnitt            - Formatierte Schnitt (zwei Nachkommastellen)
```

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

Quelle: [NotenDurchschnitt – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NotenDurchschnitt&oldid=4087) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=NotenDurchschnitt&action=history)
