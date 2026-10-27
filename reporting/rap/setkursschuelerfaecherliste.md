---
title: "SetKursSchuelerFaecherListe"
wiki_title: "SetKursSchuelerFaecherListe"
wiki_page_id: 90
wiki_revision: 114
---

# SetKursSchuelerFaecherListe

<a id="RAP-Funktion_&quot;SetKursSchuelerFaecherListe&quot;"></a>
<a id="RAP-Funktion_.22SetKursSchuelerFaecherListe.22"></a>

## RAP-Funktion "SetKursSchuelerFaecherListe"

## Beschreibung

```pascal
procedure SetKursSchuelerFaecherListe(Const aListe: String);
```

## Parameter

```text
Liste    - Kommaseparierte Liste der gewünschten Fächer
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetKursSchuelerFaecherListe('D,M,PH,CH');
 end;
 In einer KursListe können in einem Subreport
 die Leistungsdaten in diesen Fächern ausgegeben werden.
```


---

Quelle: [SetKursSchuelerFaecherListe – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetKursSchuelerFaecherListe&oldid=114) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetKursSchuelerFaecherListe&action=history)
