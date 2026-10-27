---
title: "SchulText"
wiki_title: "SchulText"
wiki_page_id: 73
wiki_revision: 94
---

# SchulText

<a id="RAP-Funktion_&quot;SchulText&quot;"></a>
<a id="RAP-Funktion_.22SchulText.22"></a>

## RAP-Funktion "SchulText"

## Beschreibung

```pascal
function SchulText(const Kuerzel: String): String;
```

## Parameter

```text
Kuerzel - Kurzzeichen des Textes
```

## Rückgabewert

```text
der dem Kürzel zugeordnete Text
```

## Beispiel

```pascal
procedure Label4711OnGetText(var Text: String);
begin
  Text:='Schulleiter: ' + SchulText('Direktor');
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-73) · [SchulText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchulText&oldid=94)
