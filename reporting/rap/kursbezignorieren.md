---
title: "KursBezIgnorieren"
wiki_title: "KursBezIgnorieren"
wiki_page_id: 39
wiki_revision: 60
---

# KursBezIgnorieren

<a id="RAP-Funktion_&quot;KursBezIgnorieren&quot;"></a>
<a id="RAP-Funktion_.22KursBezIgnorieren.22"></a>

## RAP-Funktion "KursBezIgnorieren"

## Beschreibung

```pascal
Procedure KursBezIgnorieren(Const Ignore : Boolean);
Durch den Aufruf dieser Prozedur wird bei der Einsortierung
der Leistungsdaten in die Leistungsübersichten die Kursbezeichnung
ignoriert. Diese Prozedur ist nur im Zusammenhang mit SetUebersicht
notwendig und sinnvoll. Standardmäßig wird die Kursbezeichnung berücksichtigt.
```

## Parameter

```text
ignore : wahr-> Kursarten ignorieren
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   SetUebersicht(True);
   KursBezIgnorieren(True);
 end;

 Procedure ReportAfterPrint;
 begin
   SetUebersicht(false);
   KursBezIgnorieren(False);
 end;
```


---

Quelle: [KursBezIgnorieren – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=KursBezIgnorieren&oldid=60) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=KursBezIgnorieren&action=history)
