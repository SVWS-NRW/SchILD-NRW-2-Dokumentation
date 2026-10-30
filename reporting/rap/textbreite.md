---
title: "Textbreite"
---

# Textbreite

<a id="RAP-Funktion_&quot;Textbreite&quot;"></a>
<a id="RAP-Funktion_.22Textbreite.22"></a>

## Beschreibung

Diese Funktion kann die Breite (in "Reporteinheiten") zum Beispiel eines Labels zur Laufzeit berechnen. Die Funktion kann zum Beispiel benutzt werden, um in Zeugnissen bei den Fächern die Position von "Hochzahlen"  (für Fußnoten) zu ermitteln, damit diese bündig an die Fachbezeichnung anschließen.

```pascal
Textbreite( Report, Label1.Text, Label1.Font );
```

## Parameter

Report, Label-Text, Label-Font

## Rückgabewert

Breite des Elements in "Reporteinheiten".

## Beispiel

```pascal
wt := Textbreite( Report, lblFach.Text, lblFach.Font );
lblStern.Left := lblFach.Left + wt;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Textbreite – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Textbreite&oldid=3668)
