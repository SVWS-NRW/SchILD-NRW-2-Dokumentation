---
title: "LehrerAuswaehlen"
wiki_title: "LehrerAuswaehlen"
wiki_page_id: 40
wiki_revision: 61
---

# LehrerAuswaehlen

<a id="RAP-Funktion_&quot;LehrerAuswaehlen&quot;"></a>
<a id="RAP-Funktion_.22LehrerAuswaehlen.22"></a>

## RAP-Funktion "LehrerAuswaehlen"

## Beschreibung

```pascal
procedure LehrerAuswaehlen(const Auswahlzeigen: Boolean)
Bisher wurde vor dem Druck eines Berichtes mit der Datenquelle
'Lehrer' grundsätzlich der Lehrerauswahldialog auf gerufen.
Dieser Dialog wird jetzt nur noch aufgerufen, wenn in einem geeigneten
Ereignis (hier bietet sich BeforeOpenDataPipelines an) die Procedur
  LehrerAuswaehlen(True)
aufgerufen wird. Sinnvollerweise sollte die Auswahl nach dem Druck
wieder zurückgesetzt werden.
```

## Parameter

```text
Auswahlzeigen : Boolea
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforeOpenDataPipelines;
begin
  LehrerAuswaehlen(True);
end;

Procedure ReportAfterPrint;
begin
  LehrerAuswaehlen(false);
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-40) · [LehrerAuswaehlen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerAuswaehlen&oldid=61)
