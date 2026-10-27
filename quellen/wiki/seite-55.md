---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: NurErzieherMitAnschreiben"
---

# NurErzieherMitAnschreiben

Gesicherte Wiki-Seite · Namensraum 0 · Version 76 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/nurerziehermitanschreiben) · [Originaldaten herunterladen](/dateien/quellen/seite-55.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    procedure NurErzieherMitAnschreiben(Filtern: Boolean);
|-
|'''Parameter''' || 
    Filtern  - TRUE, falls nur Erzieher berücksichtigt werden sollen, bei
               denen das Flag „Erhält Anschreiben“ gesetzt ist.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    Procedure ReportBeforePrint;
     begin
       NurErzieherMitAnschreiben(True);
     end;

    Procedure ReportAfterPrint;
    begin
      NurErzieherMitAnschreiben(False);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
