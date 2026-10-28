---
title: "SchulText"
---

# SchulText

<a id="RAP-Funktion_&quot;SchulText&quot;"></a>
<a id="RAP-Funktion_.22SchulText.22"></a>

## Signatur

```pascal
function SchulText(const Kuerzel: String): String;
```

## Parameter

```text
Kuerzel - Kurzzeichen des Textes
```

## Rückgabewert

der dem Kürzel zugeordnete Text

## Beispiel

```pascal
procedure Label4711OnGetText(var Text: String);
begin
  Text:='Schulleiter: ' + SchulText('Direktor');
end;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-73) · [SchulText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchulText&oldid=94)
