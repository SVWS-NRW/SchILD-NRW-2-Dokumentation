---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: LehrerDatenLaden"
---

# LehrerDatenLaden

Gesicherte Wiki-Seite · Namensraum 0 · Version 4843 · Stand 2021-09-07.

[Lesbaren Artikel öffnen](/reporting/rap/lehrerdatenladen) · [Originaldaten herunterladen](/dateien/quellen/seite-41.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure LehrerDatenLaden(const Kuerzel: String; var Name, Vorname, Anrede, Titel, Amtsbez: String);
|-
|'''Parameter''' || 
    Name               - Nachname des Lehrers
    Vorname            - ..des Lehrers
    Anrede             - ..des Lehrers
    Titel              - ..des Lehrers
    Amtsbez            - ..des Lehrers
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure Label4711OnGetText(var Text: String);
    var
      lName, lVorname, lAnrede, lTitel, lAmtsbez: String;
    begin
      LehrerdatenLaden(Schueler['Lehrer'],lName, lVorname, lAnrede, lTitel,lAmtsbez);
      Text:=lAnrede;
      if lAmtsBez <> <nowiki>''</nowiki> then Text:=Text + lAmtsBez;
      if lTitel <> <nowiki>''</nowiki> then Text:=Text +  lTitel;
      Text:=Text + lVorname +  lName;
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
