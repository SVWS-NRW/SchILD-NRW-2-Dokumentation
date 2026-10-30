---
title: "AlleFaecherLaden"
---

# AlleFaecherLaden

<a id="RAP-Funktion_&quot;AlleFaecherLaden&quot;"></a>
<a id="RAP-Funktion_.22AlleFaecherLaden.22"></a>

<a id="signatur"></a>

## Beschreibung

Stellt die Grundeinstellung "Auch Leistungsdaten ohne Noten laden"
für einen Report um.

```pascal
procedure AlleFaecherLaden(const Value: Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Value` | Boolescher Wert |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  AlleFaecherLaden(True);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [AlleFaecherLaden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AlleFaecherLaden&oldid=2671)
