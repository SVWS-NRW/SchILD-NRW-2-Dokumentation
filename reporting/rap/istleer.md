---
title: "IstLeer"
---

# IstLeer

<a id="RAP-Funktion_&quot;IstLeer&quot;"></a>
<a id="RAP-Funktion_.22IstLeer.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function IstLeer(aDataPipeline: TppDataPipeline; const aFieldname: String): Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aDataPipeline` | Zu prüfende Datenquelle |
| `aFieldname` | Name des zu überprüfenden Felde |


## Rückgabewert

True, falls das Datenfeld leer ist

## Beispiel

```pascal
Procedure DBText1OnGetText(var Text: String);
begin
  If IstLeer(Schueler,'Geburtsdatum') then
    Text:='Geburtsdatum fehlt';
end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-37) · [IstLeer – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IstLeer&oldid=58)
