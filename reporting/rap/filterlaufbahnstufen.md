---
title: "FilterLaufbahnStufen"
---

# FilterLaufbahnStufen

<a id="RAP-Funktion_&quot;FilterLaufbahnStufen&quot;"></a>
<a id="RAP-Funktion_.22FilterLaufbahnStufen.22"></a>

## Signatur

```pascal
procedure FilterLaufbahnStufen(const Stufenliste: String);
```

## Beschreibung

Filtert für Leistungsübersichten auf bestimmte Jahrgangsstufen. Damit ist es möglich,
z.B. Formulare für die gymn. Oberstufe schulformunabhängig zu entwickeln

## Parameter

```text
Parameter:
Stufenliste: Die zu betrachtenden Jahrgangsstufen, getrennt durch Komma
```


## Beispiel

```pascal
procedure ReportBeforePrint;
var
 vers: string;
begin
{Filter auf Q1 und Q2 bzw. 12 und 13 bzw. 5 und 6 (bei WBK)}
 FilterLaufbahnStufen('SII-2,SII-3');
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-121) · [FilterLaufbahnStufen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnStufen&oldid=168)
