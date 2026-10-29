---
title: "LehrerDatenLaden"
---

# LehrerDatenLaden

<a id="RAP-Funktion_&quot;LehrerDatenLaden&quot;"></a>
<a id="RAP-Funktion_.22LehrerDatenLaden.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure LehrerDatenLaden(const Kuerzel: String; var Name, Vorname, Anrede, Titel, Amtsbez: String);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Name` | Nachname des Lehrers |
| `Vorname` | ..des Lehrers |
| `Anrede` | ..des Lehrers |
| `Titel` | ..des Lehrers |
| `Amtsbez` | ..des Lehrers |


## Beispiel

```pascal
procedure Label4711OnGetText(var Text: String);
var
  lName, lVorname, lAnrede, lTitel, lAmtsbez: String;
begin
  LehrerdatenLaden(Schueler['Lehrer'],lName, lVorname, lAnrede, lTitel,lAmtsbez);
  Text:=lAnrede;
  if lAmtsBez <> '' then Text:=Text + lAmtsBez;
  if lTitel <> '' then Text:=Text +  lTitel;
  Text:=Text + lVorname +  lName;
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-41) · [LehrerDatenLaden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerDatenLaden&oldid=4843)
