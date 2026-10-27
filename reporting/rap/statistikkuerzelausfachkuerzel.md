---
title: "StatistikKuerzelAusFachKuerzel"
wiki_title: "StatistikKuerzelAusFachKuerzel"
wiki_page_id: 136
wiki_revision: 265
---

# StatistikKuerzelAusFachKuerzel

<a id="RAP-Funktion_&quot;StatistikKuerzelAusFachKuerzel&quot;"></a>
<a id="RAP-Funktion_.22StatistikKuerzelAusFachKuerzel.22"></a>

## RAP-Funktion "StatistikKuerzelAusFachKuerzel"

## Beschreibung

```pascal
Function StatistikKuerzelAusFachKuerzel ( const fach_krz: string): string;
Ermittelt das Statistik-Kürzel eines Faches aus dem internen Fachkürzel. Damit kann
z.B. ermittelt werden, um was für ein Fach es sich im Einzelfall handelt (unabhängig
von der jeweils internen Bezeichnung). Dadurch können Reports, die bestimmte
Fächer auswerten, unabhängig von der internen Bezeichnung gemacht werden.
```

## Parameter

```text
fach_krz: Das interne Fachkürzel
```

## Rückgabewert

```text
Statistikkürzel als String
```

## Beispiel

```text
If StatistikKuerzelAusFachKuerzel(SchuelerLeistungen[’FachKrz’]) =’D’
then ShowMessage( ’Das Fach ist DEUTSCH’ );
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-136) · [StatistikKuerzelAusFachKuerzel – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=StatistikKuerzelAusFachKuerzel&oldid=265)
