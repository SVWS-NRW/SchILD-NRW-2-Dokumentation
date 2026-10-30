---
title: "IncFontSize"
---

# IncFontSize

<a id="RAP-Funktion_&quot;IncFontSize&quot;"></a>
<a id="RAP-Funktion_.22IncFontSize.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
procedure IncFontSize(aReport: TppReport; const aIncrement: Integer);
```


Vergößert oder verkleinert die Zeichensatz größe

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aReport` | der Report, dessen Komponenten bearbeitet werden sollen |
| `aIncrement` | Wert, um den der Zeichensatz vergrößert (oder bei negativem Increment) verkleinert werden soll |


## Beispiel

```pascal
...procedure ReportOnStartFirstPass;
begin
  IncFontSize(Report,1);
end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [IncFontSize – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IncFontSize&oldid=56)
