---
title: "IncFontSize"
wiki_title: "IncFontSize"
wiki_page_id: 35
wiki_revision: 56
---

# IncFontSize

<a id="RAP-Funktion_&quot;IncFontSize&quot;"></a>
<a id="RAP-Funktion_.22IncFontSize.22"></a>

## RAP-Funktion "IncFontSize"

## Beschreibung

```pascal
procedure IncFontSize(aReport: TppReport; const aIncrement: Integer);
Vergößert oder verkleinert die Zeichensatz größe
```

## Parameter

```text
aReport        - der Report, dessen Komponenten bearbeitet werden sollen
aIncrement     - Wert, um den der Zeichensatz vergrößert (oder bei negativem
                 Increment) verkleinert werden soll
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
...procedure ReportOnStartFirstPass;
begin
  IncFontSize(Report,1);
end;
```


---

Quelle: [IncFontSize – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IncFontSize&oldid=56) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=IncFontSize&action=history)
