---
title: "AufFaecherFiltern"
---

# AufFaecherFiltern

<a id="RAP-Funktion_&quot;AufFaecherFiltern&quot;"></a>
<a id="RAP-Funktion_.22AufFaecherFiltern.22"></a>

## Beschreibung

```pascal
 
    procedure AufFaecherFiltern( const fachliste: string);

Ermöglicht eine Filterung in der Datenquelle „SchuelerJahresuebersicht“ auf bestimmte Fächer. Der Aufruf erfolgt typischerweise im Ereignis „ReportBeforPrint“

Es ist aber geplante, die Filterung auch auf andere Datenquellen zu erweitern
```

## Parameter

```text
 
    Fachliste: Durch Komma oder Semikolon getrennte Liste der schulinternen Fachkürzel

Hinweis: Komma oder Semikolon dürfen nicht vermischt werden, d.h. es dürfen nur Kommas oder nur Semikolons verwendet werden.
```


## Beispiel

```text
AufFaecherFiltern('D,E,M');
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1144) · [AufFaecherFiltern – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AufFaecherFiltern&oldid=4247)
