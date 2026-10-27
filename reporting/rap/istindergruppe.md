---
title: "IstInDerGruppe"
wiki_title: "IstInDerGruppe"
wiki_page_id: 36
wiki_revision: 57
---

# IstInDerGruppe

<a id="RAP-Funktion_&quot;IstInDerGruppe&quot;"></a>
<a id="RAP-Funktion_.22IstInDerGruppe.22"></a>

## RAP-Funktion "IstInDerGruppe"

## Beschreibung

```pascal
function IstInDerGruppe(const aLoginName, aGruppenName: String): Boolean;
Diese Funktion ermittelt, ob ein bestimmter Benutzer einer Gruppe angehört
```

## Parameter

```text
aLoginname    - der Schild-Loginname des Benutzers
aGruppenname  - die zu überprüfende Gruppe
```

## Rückgabewert

```text
TRUE, wenn der Benutzer der Gruppe angehört, FALSE sonst
```

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Detail.Visible:=IstInDerGruppe('LEHRER',SchildUmgebung['Login_Name'])
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-36) · [IstInDerGruppe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IstInDerGruppe&oldid=57)
