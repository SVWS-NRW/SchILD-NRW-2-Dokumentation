---
title: "SchuljahrToStr"
---

# SchuljahrToStr

<a id="RAP-Funktion_&quot;SchuljahrToStr&quot;"></a>
<a id="RAP-Funktion_.22SchuljahrToStr.22"></a>

## Signatur

```pascal
function SchuljahrToStr(aJahr, aAbschnitt: integer): String;
```

## Parameter

```text
aJahr              - Jahr, in dem das Schuljahr anfing
aAbschnitt         - Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der
                     String ohne Abschnitt erzeugt
```

## Rückgabewert

Schuljahr in der Form 'JJJJ/JJ.A'

## Beispiel

```pascal
SchuljahrStr:=SchuljahrToStr(Schueler['AktSchuljahr'],Schueler['AktAbschnitt'])
Ergebnis (z.B.): lSchuljahrStr = '2005/06.2'
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-71) · [SchuljahrToStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchuljahrToStr&oldid=92)
