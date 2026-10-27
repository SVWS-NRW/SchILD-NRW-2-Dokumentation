---
title: "GetSqlText"
wiki_title: "GetSqlText"
wiki_page_id: 33
wiki_revision: 54
---

# GetSqlText

<a id="RAP-Funktion_&quot;GetSqlText&quot;"></a>
<a id="RAP-Funktion_.22GetSqlText.22"></a>

## RAP-Funktion "GetSqlText"

## Beschreibung

```pascal
function GetSqlText(aPipeline: TppDatapipeline): String;
liefert den Text der SQL-Abfrage, die der als Parameter übergebenen
Datenquelle zugrunde liegt.
```

## Parameter

```text
aPipeline  - Name der Datenpipeline
```

## Rückgabewert

```text
SqlText, falls die Pipeline eine DB-Pipeline ist, sonst ein leerer String
```

## Beispiel

```text
ShowMessage('Abfragetext: ' + GetSqlText(Schueler))
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-33) · [GetSqlText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GetSqlText&oldid=54)
