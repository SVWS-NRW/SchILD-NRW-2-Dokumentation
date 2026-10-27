---
title: "UeberspringeRecord"
wiki_title: "UeberspringeRecord"
wiki_page_id: 104
wiki_revision: 2723
---

# UeberspringeRecord

<a id="RAP-Funktion_&quot;UeberspringeRecord&quot;"></a>
<a id="RAP-Funktion_.22UeberspringeRecord.22"></a>

## RAP-Funktion "UeberspringeRecord"

## Beschreibung

```pascal
procedure UeberspringeRecord(aPipeline: TppDatapipeline);
überspringt einen Datensatz der Datenquelle
```

## Parameter

```text
aPipeline  - Name der Datenpipeline
```

## Rückgabewert

```text
...
```

## Beispiel

```text
If Copy(Schueler['Name'],1,1) = 'D' then UeberspringeRecord(Schueler);
oder
While Copy(Schueler['Name'],1,1) = 'D' Do
Begin
  UeberspringeRecord(Schueler);
End;

Bitte beachten Sie, dass die Funktion beim letzten Datensatz nicht weiterspringen kann,
dies muss u.U. berücksichtigt werden!
```


---

Quelle: [UeberspringeRecord – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UeberspringeRecord&oldid=2723) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=UeberspringeRecord&action=history)
