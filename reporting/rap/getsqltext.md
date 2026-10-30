---
title: "GetSqlText"
---

# GetSqlText

<a id="RAP-Funktion_&quot;GetSqlText&quot;"></a>
<a id="RAP-Funktion_.22GetSqlText.22"></a>

<a id="signatur"></a>

## Beschreibung

liefert den Text der SQL-Abfrage, die der als Parameter übergebenen
Datenquelle zugrunde liegt.

```pascal
function GetSqlText(aPipeline: TppDatapipeline): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aPipeline` | Name der Datenpipeline |

## Rückgabewert

SqlText, falls die Pipeline eine DB-Pipeline ist, sonst ein leerer String

## Beispiel

```pascal
ShowMessage('Abfragetext: ' + GetSqlText(Schueler))
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [GetSqlText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=GetSqlText&oldid=54)
