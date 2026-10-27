---
title: "Anrede"
wiki_title: "Anrede"
wiki_page_id: 11
wiki_revision: 5722
---

# Anrede

<a id="RAP-Funktion_&quot;Anrede&quot;"></a>
<a id="RAP-Funktion_.22Anrede.22"></a>

## RAP-Funktion "Anrede"

## Beschreibung

```pascal
function Anrede(aAnrede1,aTitel1,aName1,aAnrede2,aTitel2,aName2: String): String;
Berechnet aus den übergebenen Werten die korrekte (Erzieher-)Anrede
```

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

```text
Korrekte Anrede
```

## Beispiel

```pascal
lAnrede:=Anrede('Herr','','Meier','Frau','Dr.','Müller-Lüdenscheid')
Ergebnis: Sehr geehrter Herr Meier, sehr geehrte Frau Dr. Müller-Lüdenscheid
```

---

Quelle: [Anrede – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Anrede&oldid=5722) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Anrede&action=history)
