---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: GruppenDesBenutzers"
---

# GruppenDesBenutzers

Gesicherte Wiki-Seite · Namensraum 0 · Version 55 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/gruppendesbenutzers) · [Originaldaten herunterladen](/dateien/quellen/seite-34.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function GruppenDesBenutzers(const aLoginName: String): String;
    Ermittelt die Benutzergruppen, denen ein Benutzer angehört
|-
|'''Parameter''' || 
    aLoginName : Loginname des Benutzers
|-
|'''Rückgabewert''' ||
    Gruppen, denen der Benutzer angehört
|- 
|'''Beispiel''' || 
    procedure DetailBeforePrint;
    var
      lGruppen : String;
    begin
      lGruppen:=GruppenDesBenutzers(SchildUmgebung['Login_Name']);
      Detail.Visible:=pos('LEHRER',lGruppen) > 0
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
