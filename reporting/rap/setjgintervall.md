---
title: "SetJgIntervall"
wiki_title: "SetJgIntervall"
wiki_page_id: 88
wiki_revision: 112
---

# SetJgIntervall

<a id="RAP-Funktion_&quot;SetJgIntervall&quot;"></a>
<a id="RAP-Funktion_.22SetJgIntervall.22"></a>

## RAP-Funktion "SetJgIntervall"

## Beschreibung

```pascal
function SetJgIntervall(aStartJg, aEndJg: Integer): Boolean; Diese Funktion
ist veraltet. Statt dessen sollte SetJgIntervall_ASD benutzt werden.
```

## Parameter

```text
aStartJg           - Beginn des Jahrgangsintervalles, für das Übersichten erzeugt
                     werden solle
aEndJg             - Ende des Jahrgangsintervalles, für das Übersichten erzeugt
                     werden sollen
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   If SetJgIntervall(12,13) then
     ShowMessage('Dieser Report ist für den Quartalsbetrieb nicht geeignet');
 end;
```


---

Quelle: [SetJgIntervall – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetJgIntervall&oldid=112) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SetJgIntervall&action=history)
