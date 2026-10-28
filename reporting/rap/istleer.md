---
title: "IstLeer"
---

# IstLeer

<a id="RAP-Funktion_&quot;IstLeer&quot;"></a>
<a id="RAP-Funktion_.22IstLeer.22"></a>

## Signatur

```pascal
function IstLeer(aDataPipeline: TppDataPipeline; const aFieldname: String): Boolean;
```

## Parameter

```text
aDataPipeline      - Zu prüfende Datenquelle
aFieldname         - Name des zu überprüfenden Felde
```

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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-37) · [IstLeer – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=IstLeer&oldid=58)
