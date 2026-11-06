---
title: "IstInDerGruppe"
---

# IstInDerGruppe

## Beschreibung

Diese Funktion ermittelt, ob ein bestimmter Benutzer einer Gruppe angehört

```pascal
function IstInDerGruppe(const aLoginName, aGruppenName: String): Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aLoginname` | der SchILD-NRW 2-Loginname des Benutzers |
| `aGruppenname` | die zu überprüfende Gruppe |

## Rückgabewert

TRUE, wenn der Benutzer der Gruppe angehört, FALSE sonst

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Detail.Visible:=IstInDerGruppe('LEHRER',SchildUmgebung['Login_Name'])
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [IstInDerGruppe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IstInDerGruppe&oldid=57)
