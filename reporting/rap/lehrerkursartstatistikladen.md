---
title: "LehrerKursartStatistikLaden"
---

# LehrerKursartStatistikLaden

<a id="RAP-Funktion_&quot;LehrerKursartStatistikLaden&quot;"></a>
<a id="RAP-Funktion_.22LehrerKursartStatistikLaden.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
Procedure LehrerKursartStatistikLaden;
```


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


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LehrerKursartStatistikLaden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerKursartStatistikLaden&oldid=63)
