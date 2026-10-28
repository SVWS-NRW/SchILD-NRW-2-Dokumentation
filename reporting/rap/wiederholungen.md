---
title: "Wiederholungen"
---

# Wiederholungen

<a id="RAP-Funktion_&quot;Wiederholungen&quot;"></a>
<a id="RAP-Funktion_.22Wiederholungen.22"></a>

## Signatur

```pascal
function Wiederholungen(const aSchuelerId: Integer): String;
```

## Parameter

```text
aSchuelerId   - Id-Nummer des aktuellen Schuelers
```

## Rückgabewert

String mit den wiederholten Schuljahren und Jahrgängen.
Achtung: Diese Funktion ist überflüssig geworden und sollte nicht mehr
         verwendet werden

## Beispiel

```pascal
Procedure Label4711OnGetText(var Text: String);
 begin
   Text:=Wiederholungen(Schueler['Id']);
 end;
(*Ergebnis im akt Schuljahr 2005/06.2, wenn der Schüler im Schj. 2002/03 die 8 und
 im Schj 2005/06 die 10 wiederholt:
 '2002/03: 8.1; 2002/03: 8.2; 2005/06: 10.1; 2005/06: 10.2'
```

---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-108) · [Wiederholungen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Wiederholungen&oldid=5721)
