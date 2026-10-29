---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: NurFaecherMitAufsZeugnisFlag"
---

# NurFaecherMitAufsZeugnisFlag

Gesicherte Wiki-Seite · Namensraum 0 · Version 77 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/nurfaechermitaufszeugnisflag) · [Originaldaten herunterladen](/dateien/quellen/seite-56.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    Procedure NurFaecherMitAufsZeugnisFlag(aValue : Boolean);
    Durch die Verwendung dieser Prozedur kann erreicht werden, dass
    bei den Schülerleistungsdaten auch Fächer mit ausgegeben werden,
    bei denen das Flag "Auf Zeugnis" nicht gesetzt ist. Voreinstellung
    für diesen Wert ist TRUE, d.h. es werden nur Fächer ausgegeben, bei
    denen dieses Flag gesetzt ist.
|-
|'''Parameter''' || 
    aValue             - Boolscher Wert: FALSE schaltet die Überprüfung ab,
                         TRUE schaltet sie wieder ein.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
    procedure ReportBeforePrint;
    begin
      NurFaecherMitAufsZeugnisFlag(False)
    end;

    procedure ReportAfterPrint;
    begin
      NurFaecherMitAufsZeugnisFlag(True)
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
