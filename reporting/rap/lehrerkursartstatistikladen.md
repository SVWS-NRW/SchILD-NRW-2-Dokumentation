---
title: "LehrerKursartStatistikLaden"
---

# LehrerKursartStatistikLaden

<a id="RAP-Funktion_&quot;LehrerKursartStatistikLaden&quot;"></a>
<a id="RAP-Funktion_.22LehrerKursartStatistikLaden.22"></a>

## Signatur

```pascal
Procedure LehrerKursartStatistikLaden;
```

## Beschreibung

Durch den Aufruf dieser Prozedur wird die Datenquelle
'LehrerUnterrichtsStatistik' mit Daten gefüllt.
Diese Datenquelle sollte nur als Datenquelle für eine Kreuztabelle
eingesetzt werden, die dann statistische Aussagen über den Unterricht
des Lehrers (Anzahl der Schüler mit Kursart xyz...) liefert. Auch diese
Datenquelle ist Detaildatenquelle der Datenquelle 'Lehrer'.

## Beispiel

```pascal
Procedure DetailBeforeGenerate;
 begin
   LehrerUnterrichtLaden;
   LehrerKursartStatistikLaden;
 end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-42) · [LehrerKursartStatistikLaden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerKursartStatistikLaden&oldid=63)
