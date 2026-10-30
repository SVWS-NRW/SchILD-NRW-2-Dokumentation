---
title: "SchuljahrToStrEx"
---

# SchuljahrToStrEx

<a id="RAP-Funktion_&quot;SchuljahrToStrEx&quot;"></a>
<a id="RAP-Funktion_.22SchuljahrToStrEx.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SchuljahrToStrEx(aJahr, aAbschnitt: integer; Format: String; AbschnittVorn: Boolean): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aJahr` | Jahr, in dem das Schuljahr anfing |
| `aAbschnitt` | Schuljahresabschnitt. Falls aAbschnitt = 0 ist, wird der String ohne Abschnitt erzeugt |
| `Format` | Formatanweisung. Text mit Platzhaltern für numerische Variablen. An der gewünschten Position ist ein %[w]d einzufügen. Der optionale Parameter w enthält die gewünschte Breite, falls notwendig, wird linksbündig mit Nullen aufgefüllt. |
| `AbschnittVorn` | Wenn AbschnittVorn wahr ist, werden die Parameter in der Reihenfolge Abschnitt, Jahr, Jahr + 1 aufgefüllt, sonst in der Reihenfolge Jahr, Jahr + 1, Abschnitt |


## Rückgabewert

Schuljahr in der durch Format vorgegebenen Form

## Beispiel

```pascal
SchuljahrStr:=SchuljahrToStrEx(2005,3,'%d. Quartal %d/%2d',True);
Ergebnis: lSchuljahrStr = '3. Quartal 2005/06'
SchuljahrStr:=SchuljahrToStrEx(2005,2,'Schuljahr %d/%2d, %d. Halbjahr',False);
Ergebnis: lSchuljahrStr = 'Schuljahr 2005/06, 2. Halbjahr'
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SchuljahrToStrEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchuljahrToStrEx&oldid=93)
