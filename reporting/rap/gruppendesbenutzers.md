---
title: "GruppenDesBenutzers"
---

# GruppenDesBenutzers

## Beschreibung

Ermittelt die Benutzergruppen, denen ein Benutzer angehört

```pascal
function GruppenDesBenutzers(const aLoginName: String): String;
```

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

Quelle: [GruppenDesBenutzers – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GruppenDesBenutzers&oldid=55)
