---
title: "IstInDerGruppe"
---

# IstInDerGruppe

<a id="RAP-Funktion_&quot;IstInDerGruppe&quot;"></a>
<a id="RAP-Funktion_.22IstInDerGruppe.22"></a>

## Signatur

```pascal
function IstInDerGruppe(const aLoginName, aGruppenName: String): Boolean;
```

## Beschreibung

Diese Funktion ermittelt, ob ein bestimmter Benutzer einer Gruppe angehört

## Parameter

```text
aLoginname    - der Schild-Loginname des Benutzers
aGruppenname  - die zu überprüfende Gruppe
```

## Rückgabewert

TRUE, wenn der Benutzer der Gruppe angehört, FALSE sonst

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Detail.Visible:=IstInDerGruppe('LEHRER',SchildUmgebung['Login_Name'])
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-36) · [IstInDerGruppe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IstInDerGruppe&oldid=57)
