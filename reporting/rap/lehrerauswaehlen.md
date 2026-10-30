---
title: "LehrerAuswaehlen"
---

# LehrerAuswaehlen

<a id="RAP-Funktion_&quot;LehrerAuswaehlen&quot;"></a>
<a id="RAP-Funktion_.22LehrerAuswaehlen.22"></a>

<a id="signatur"></a>

## Beschreibung

Bisher wurde vor dem Druck eines Berichtes mit der Datenquelle
'Lehrer' grundsätzlich der Lehrerauswahldialog auf gerufen.
Dieser Dialog wird jetzt nur noch aufgerufen, wenn in einem geeigneten
Ereignis (hier bietet sich BeforeOpenDataPipelines an) die Procedur
  LehrerAuswaehlen(True)
aufgerufen wird. Sinnvollerweise sollte die Auswahl nach dem Druck
wieder zurückgesetzt werden.

```pascal
procedure LehrerAuswaehlen(const Auswahlzeigen: Boolean)
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Auswahlzeigen` | Boolea |

## Beispiel

```pascal
Procedure ReportBeforeOpenDataPipelines;
begin
  LehrerAuswaehlen(True);
end;

Procedure ReportAfterPrint;
begin
  LehrerAuswaehlen(false);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [LehrerAuswaehlen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerAuswaehlen&oldid=61)
