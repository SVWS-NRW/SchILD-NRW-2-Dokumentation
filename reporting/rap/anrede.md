---
title: "Anrede"
---

# Anrede

<a id="RAP-Funktion_&quot;Anrede&quot;"></a>
<a id="RAP-Funktion_.22Anrede.22"></a>

<a id="signatur"></a>

## Beschreibung

Erzeugt aus den Namen, Titeln und Anreden die gemeinsame Anrede für die Erziehungsberechtigten.

```pascal
function Anrede(aAnrede1,aTitel1,aName1,aAnrede2,aTitel2,aName2: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aAnrede1` | Anrede der ersten Person |
| `aTitel1` | Titel der ersten Person |
| `aName1` | Name der ersten Person |
| `aAnrede2` | Anrede der zweiten Person |
| `aTitel2` | Titel der zweiten Person |
| `aName2` | Name der zweiten Person |

## Rückgabewert

Korrekte Anrede

## Beispiel

```pascal
lAnrede:=Anrede('Herr','','Meier','Frau','Dr.','Müller-Lüdenscheid')
```

Ergebnis: Sehr geehrter Herr Meier, sehr geehrte Frau Dr. Müller-Lüdenscheid

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Anrede – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Anrede&oldid=5722)
