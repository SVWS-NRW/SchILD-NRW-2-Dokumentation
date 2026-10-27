---
title: "GruppenDesBenutzers"
wiki_title: "GruppenDesBenutzers"
wiki_page_id: 34
wiki_revision: 55
---

# GruppenDesBenutzers

<a id="RAP-Funktion_&quot;GruppenDesBenutzers&quot;"></a>
<a id="RAP-Funktion_.22GruppenDesBenutzers.22"></a>

## RAP-Funktion "GruppenDesBenutzers"

## Beschreibung

```pascal
function GruppenDesBenutzers(const aLoginName: String): String;
Ermittelt die Benutzergruppen, denen ein Benutzer angehört
```

## Parameter

```text
aLoginName : Loginname des Benutzers
```

## Rückgabewert

```text
Gruppen, denen der Benutzer angehört
```

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

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-34) · [GruppenDesBenutzers – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GruppenDesBenutzers&oldid=55)
