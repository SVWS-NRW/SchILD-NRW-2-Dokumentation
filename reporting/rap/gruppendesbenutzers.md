---
title: "GruppenDesBenutzers"
---

# GruppenDesBenutzers

<a id="RAP-Funktion_&quot;GruppenDesBenutzers&quot;"></a>
<a id="RAP-Funktion_.22GruppenDesBenutzers.22"></a>

## Signatur

```pascal
function GruppenDesBenutzers(const aLoginName: String): String;
```

## Beschreibung

Ermittelt die Benutzergruppen, denen ein Benutzer angehört

## Parameter

```text
aLoginName : Loginname des Benutzers
```

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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-34) · [GruppenDesBenutzers – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GruppenDesBenutzers&oldid=55)
