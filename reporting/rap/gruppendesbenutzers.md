---
title: "GruppenDesBenutzers"
---

# GruppenDesBenutzers

<a id="RAP-Funktion_&quot;GruppenDesBenutzers&quot;"></a>
<a id="RAP-Funktion_.22GruppenDesBenutzers.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function GruppenDesBenutzers(const aLoginName: String): String;
```


Ermittelt die Benutzergruppen, denen ein Benutzer angehört

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aLoginName` | Loginname des Benutzers |


## Rückgabewert

Gruppen, denen der Benutzer angehört

## Beispiel

```pascal
procedure DetailBeforePrint;
var
  lGruppen : String;
begin
  lGruppen:=GruppenDesBenutzers(SchildUmgebung['Login_Name']);
  Detail.Visible:=pos('LEHRER',lGruppen) > 0
end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-34) · [GruppenDesBenutzers – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GruppenDesBenutzers&oldid=55)
