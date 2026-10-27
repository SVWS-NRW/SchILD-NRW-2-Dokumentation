---
title: "FilterLaufbahnStufen"
wiki_title: "FilterLaufbahnStufen"
wiki_page_id: 121
wiki_revision: 168
---

# FilterLaufbahnStufen

<a id="RAP-Funktion_&quot;FilterLaufbahnStufen&quot;"></a>
<a id="RAP-Funktion_.22FilterLaufbahnStufen.22"></a>

## RAP-Funktion "FilterLaufbahnStufen"

## Beschreibung

```pascal
procedure FilterLaufbahnStufen(const Stufenliste: String);
Filtert für Leistungsübersichten auf bestimmte Jahrgangsstufen. Damit ist es möglich,
z.B. Formulare für die gymn. Oberstufe schulformunabhängig zu entwickeln
```

## Parameter

```text
Parameter:
Stufenliste: Die zu betrachtenden Jahrgangsstufen, getrennt durch Komma
```

## Rückgabewert

```text
...
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

Quelle: [FilterLaufbahnStufen – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnStufen&oldid=168) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=FilterLaufbahnStufen&action=history)
