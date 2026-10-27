---
title: "MitLernabschnitten"
wiki_title: "MitLernabschnitten"
wiki_page_id: 53
wiki_revision: 5723
---

# MitLernabschnitten

<a id="RAP-Funktion_&quot;MitLernabschnitten&quot;"></a>
<a id="RAP-Funktion_.22MitLernabschnitten.22"></a>

## RAP-Funktion "MitLernabschnitten"

## Beschreibung

```pascal
procedure MitLernabschnitten(const Value: Boolean);
Erzwingt die Aktualisierung der Datenquelle Lernabschnitte beim Wechsel
eines Schülerdatensatzes.
```

## Parameter

```text
Value - Boolescher Wert
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  MitLernabschnitten(True);
end;

procedure ReportAfterPrint;
begin
  MitLernabschnitten(false);
end
```


---

Quelle: [MitLernabschnitten – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=MitLernabschnitten&oldid=5723) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=MitLernabschnitten&action=history)
