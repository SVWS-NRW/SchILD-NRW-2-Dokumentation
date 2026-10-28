---
title: "Anrede"
---

# Anrede

<a id="RAP-Funktion_&quot;Anrede&quot;"></a>
<a id="RAP-Funktion_.22Anrede.22"></a>

## Signatur

```pascal
function Anrede(aAnrede1,aTitel1,aName1,aAnrede2,aTitel2,aName2: String): String;
```

## Beschreibung

Berechnet aus den übergebenen Werten die korrekte (Erzieher-)Anrede

## Parameter

```text
aAnrede1           - Anrede der ersten Person
aTitel1            - Titel der ersten Person
aName1             - Name der ersten Person
aAnrede2           - Anrede der zweiten Person
aTitel2            - Titel der zweiten Person
aName2             - Name der zweiten Person
```

## Rückgabewert

Korrekte Anrede

## Beispiel

```pascal
lAnrede:=Anrede('Herr','','Meier','Frau','Dr.','Müller-Lüdenscheid')
Ergebnis: Sehr geehrter Herr Meier, sehr geehrte Frau Dr. Müller-Lüdenscheid
```

---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-11) · [Anrede – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Anrede&oldid=5722)
