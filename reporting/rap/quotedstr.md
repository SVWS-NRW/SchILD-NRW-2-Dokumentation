---
title: "QuotedStr"
wiki_title: "QuotedStr"
wiki_page_id: 59
wiki_revision: 80
---

# QuotedStr

<a id="RAP-Funktion_&quot;QuotedStr&quot;"></a>
<a id="RAP-Funktion_.22QuotedStr.22"></a>

## RAP-Funktion "QuotedStr"

## Beschreibung

```pascal
function QuotedStr(const Value: String): String;
schließt den String Value in Delphi-Hochkommata ein
```

## Parameter

```text
Value   - String, der eingeschlossen werden soll
```

## Rückgabewert

```text
In Hochkommata eingeschlossener String
```

## Beispiel

```text
Setzefilter(Klassenlehrer_mit_Noten,'Fachkrz=' + QuotedStr('M'));
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-59) · [QuotedStr – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=QuotedStr&oldid=80)
