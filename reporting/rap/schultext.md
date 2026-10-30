---
title: "SchulText"
---

# SchulText

<a id="RAP-Funktion_&quot;SchulText&quot;"></a>
<a id="RAP-Funktion_.22SchulText.22"></a>

<a id="signatur"></a>

## Beschreibung

Gibt den Text zurück, der dem übergebenen Kürzel zugeordnet ist.

```pascal
function SchulText(const Kuerzel: String): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Kuerzel` | Kurzzeichen des Textes |

## Rückgabewert

der dem Kürzel zugeordnete Text

## Beispiel

```pascal
procedure Label4711OnGetText(var Text: String);
begin
  Text:='Schulleiter: ' + SchulText('Direktor');
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SchulText – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchulText&oldid=94)
