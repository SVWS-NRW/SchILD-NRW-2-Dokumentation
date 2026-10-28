---
title: "NurFaecherMitNoten"
---

# NurFaecherMitNoten

<a id="RAP-Funktion_&quot;NurFaecherMitNoten&quot;"></a>
<a id="RAP-Funktion_.22NurFaecherMitNoten.22"></a>

## Signatur

```pascal
procedure NurFaecherMitNoten(const Value: Boolean);
```

## Parameter

```text
Value    - True, wenn nur Leistungsdaten mit eingetragenen Noten geholt werden sollen
```


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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-57) · [NurFaecherMitNoten – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurFaecherMitNoten&oldid=78)
