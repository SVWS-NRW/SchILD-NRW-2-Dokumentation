---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: IstInDerGruppe"
---

# IstInDerGruppe

Gesicherte Wiki-Seite · Namensraum 0 · Version 57 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/istindergruppe) · [Originaldaten herunterladen](/dateien/quellen/seite-36.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function IstInDerGruppe(const aLoginName, aGruppenName: String): Boolean;
    Diese Funktion ermittelt, ob ein bestimmter Benutzer einer Gruppe angehört
|-
|'''Parameter''' || 
    aLoginname    - der Schild-Loginname des Benutzers
    aGruppenname  - die zu überprüfende Gruppe
|-
|'''Rückgabewert''' ||
    TRUE, wenn der Benutzer der Gruppe angehört, FALSE sonst
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
    begin
      Detail.Visible:=IstInDerGruppe('LEHRER',SchildUmgebung['Login_Name'])
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
