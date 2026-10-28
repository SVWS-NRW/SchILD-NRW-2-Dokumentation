---
title: "IncFontSize"
---

# IncFontSize

<a id="RAP-Funktion_&quot;IncFontSize&quot;"></a>
<a id="RAP-Funktion_.22IncFontSize.22"></a>

## Signatur

```pascal
procedure IncFontSize(aReport: TppReport; const aIncrement: Integer);
```

## Beschreibung

Vergößert oder verkleinert die Zeichensatz größe

## Parameter

```text
aReport        - der Report, dessen Komponenten bearbeitet werden sollen
aIncrement     - Wert, um den der Zeichensatz vergrößert (oder bei negativem
                 Increment) verkleinert werden soll
```


## Beispiel

```pascal
...procedure ReportOnStartFirstPass;
begin
  IncFontSize(Report,1);
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-35) · [IncFontSize – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IncFontSize&oldid=56)
