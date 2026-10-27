---
title: "DateinameFuerDVAuswaehlen"
wiki_title: "DateinameFuerDVAuswaehlen"
wiki_page_id: 125
wiki_revision: 6027
---

# DateinameFuerDVAuswaehlen

<a id="RAP-Funktion_&quot;DateinameFuerDVAuswaehlen&quot;"></a>
<a id="RAP-Funktion_.22DateinameFuerDVAuswaehlen.22"></a>

## RAP-Funktion "DateinameFuerDVAuswaehlen"

## Beschreibung

```pascal
procedure DateinameFuerDVAuswaehlen;
Der Aufruf dieser Prozedur (typischerweise im Ereignis ReportBeforePrint) bewirkt,
dass vor der Ausgabe eines Reportes als PDF-Datei in der Dokumentenverwaltung
ein individueller Dateiname eingegeben werden kann. Dieser Name wird dann bei
der Ermittlung des „schülerspezifischen“ Dateinamens anstelle des Namens der
Reportvorlage verwendet. Dies ist besonders bei Serienbriefvorlagen hilfreich, bei
denen der Briefinhalt zur Laufzeit aus einer RTF-Datei geladen wird.
```

## Parameter

```text
...
```

## Rückgabewert

```text
Die Reportvorlage heißt „RTFBrief.rtm“, der nachgeladene RTF-Brieftext heißt "Hausaufgaben.rtf". Normalerweise würde dann die in der
Dokumentenverwaltung des Schülers abgelegte Datei z.B. den Namen
„Hausaufgaben_2013_05_24.pdf“ erhalten, d.h. aus dem Dateinamen geht die Bedeutung
des Schreibens bereits hervor. Durch Aufruf von „DateinameFuerDVAuswaehlen“ kann
aber ein Dialog aufgerufen werden, in dem ein individueller Name definiert werden
kann (z.B. „Hausaufgaben - Zweite Information“), woraus sich dann der Dateinamen
„Hausaufgaben - Zweite Information_2013_05_24.pdf“ ergibt.
```

## Beispiel

```pascal
procedure GlobalOnCreate;
 begin
  DateinameFuerDVAuswaehlen;
 end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-125) · [DateinameFuerDVAuswaehlen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=DateinameFuerDVAuswaehlen&oldid=6027)
