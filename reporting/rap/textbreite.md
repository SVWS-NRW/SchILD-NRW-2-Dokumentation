---
title: "Textbreite"
wiki_title: "Textbreite"
wiki_page_id: 958
wiki_revision: 3668
---

# Textbreite

<a id="RAP-Funktion_&quot;Textbreite&quot;"></a>
<a id="RAP-Funktion_.22Textbreite.22"></a>

## RAP-Funktion "Textbreite"

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

```text
Breite des Elements in "Reporteinheiten".
```

## Beispiel

```pascal
wt := Textbreite( Report, lblFach.Text, lblFach.Font );
lblStern.Left := lblFach.Left + wt;
```


---

Quelle: [Textbreite – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Textbreite&oldid=3668) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Textbreite&action=history)
