---
title: "StatistikKuerzelAusFachKuerzel"
---

# StatistikKuerzelAusFachKuerzel

<a id="RAP-Funktion_&quot;StatistikKuerzelAusFachKuerzel&quot;"></a>
<a id="RAP-Funktion_.22StatistikKuerzelAusFachKuerzel.22"></a>

## Signatur

```pascal
Function StatistikKuerzelAusFachKuerzel ( const fach_krz: string): string;
```

## Beschreibung

Ermittelt das Statistik-Kürzel eines Faches aus dem internen Fachkürzel. Damit kann
z.B. ermittelt werden, um was für ein Fach es sich im Einzelfall handelt (unabhängig
von der jeweils internen Bezeichnung). Dadurch können Reports, die bestimmte
Fächer auswerten, unabhängig von der internen Bezeichnung gemacht werden.

## Parameter

```text
fach_krz: Das interne Fachkürzel
```

## Rückgabewert

Statistikkürzel als String

## Beispiel

```text
If StatistikKuerzelAusFachKuerzel(SchuelerLeistungen[’FachKrz’]) =’D’
then ShowMessage( ’Das Fach ist DEUTSCH’ );
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-136) · [StatistikKuerzelAusFachKuerzel – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=StatistikKuerzelAusFachKuerzel&oldid=265)
