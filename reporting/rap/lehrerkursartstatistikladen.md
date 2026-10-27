---
title: "LehrerKursartStatistikLaden"
wiki_title: "LehrerKursartStatistikLaden"
wiki_page_id: 42
wiki_revision: 63
---

# LehrerKursartStatistikLaden

<a id="RAP-Funktion_&quot;LehrerKursartStatistikLaden&quot;"></a>
<a id="RAP-Funktion_.22LehrerKursartStatistikLaden.22"></a>

## RAP-Funktion "LehrerKursartStatistikLaden"

## Beschreibung

```pascal
Procedure LehrerKursartStatistikLaden;
Durch den Aufruf dieser Prozedur wird die Datenquelle
'LehrerUnterrichtsStatistik' mit Daten gefüllt.
Diese Datenquelle sollte nur als Datenquelle für eine Kreuztabelle
eingesetzt werden, die dann statistische Aussagen über den Unterricht
des Lehrers (Anzahl der Schüler mit Kursart xyz...) liefert. Auch diese
Datenquelle ist Detaildatenquelle der Datenquelle 'Lehrer'.
```

## Parameter

```text
...
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure DetailBeforeGenerate;
 begin
   LehrerUnterrichtLaden;
   LehrerKursartStatistikLaden;
 end;
```


---

Quelle: [LehrerKursartStatistikLaden – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerKursartStatistikLaden&oldid=63) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerKursartStatistikLaden&action=history)
