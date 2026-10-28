---
title: "Textbreite"
---

# Textbreite

<a id="RAP-Funktion_&quot;Textbreite&quot;"></a>
<a id="RAP-Funktion_.22Textbreite.22"></a>

## Beschreibung

```text
 
  Textbreite( Report, Label1.Text, Label1.Font );  
Diese Funktion kann die Breite (in "Reporteinheiten") z.B. eines Labels zur Laufzeit berechnen. Die Funktion kann z.B. benutzt werden, um in Zeugnissen bei den Fächern die Position von "Hochzahlen"  (für Fußnoten) zu ermittlen, damit diese bündig an die Fachbezeichnung anschließen.
```

## Parameter

```text
Report, Label-Text, Label-Font
```

## Rückgabewert

Breite des Elements in "Reporteinheiten".

## Beispiel

```pascal
wt := Textbreite( Report, lblFach.Text, lblFach.Font );
lblStern.Left := lblFach.Left + wt;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-958) · [Textbreite – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Textbreite&oldid=3668)
