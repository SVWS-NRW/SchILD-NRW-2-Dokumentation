---
title: "NurFaecherMitNoten"
---

# NurFaecherMitNoten

## Beschreibung

Steuert, ob nur Leistungsdaten mit einer eingetragenen Note geladen werden.

```pascal
procedure NurFaecherMitNoten(const Value: Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Value` | True, wenn nur Leistungsdaten mit eingetragenen Noten geholt werden sollen |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   NurFaecherMitNoten(True)
 end;
 z.B. in einem Zeugnis: Fächer ohne Noten erscheinen nicht
 auf dem Zeugnis. Damit Übersichten etc. funktionieren,
 sollte diese Option in ReportAfterPrint wieder zurückgesetzt werden
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [NurFaecherMitNoten – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurFaecherMitNoten&oldid=78)
