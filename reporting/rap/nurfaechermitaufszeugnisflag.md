---
title: "NurFaecherMitAufsZeugnisFlag"
---

# NurFaecherMitAufsZeugnisFlag

<a id="RAP-Funktion_&quot;NurFaecherMitAufsZeugnisFlag&quot;"></a>
<a id="RAP-Funktion_.22NurFaecherMitAufsZeugnisFlag.22"></a>

<a id="signatur"></a>

## Beschreibung

Durch die Verwendung dieser Prozedur kann erreicht werden, dass
bei den Schülerleistungsdaten auch Fächer mit ausgegeben werden,
bei denen das Flag "Auf Zeugnis" nicht gesetzt ist. Voreinstellung
für diesen Wert ist TRUE, das heißt es werden nur Fächer ausgegeben, bei
denen dieses Flag gesetzt ist.

```pascal
Procedure NurFaecherMitAufsZeugnisFlag(aValue : Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aValue` | Boolscher Wert: FALSE schaltet die Überprüfung ab, TRUE schaltet sie wieder ein. |

## Beispiel

```pascal
procedure ReportBeforePrint;
begin
  NurFaecherMitAufsZeugnisFlag(False)
end;

procedure ReportAfterPrint;
begin
  NurFaecherMitAufsZeugnisFlag(True)
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [NurFaecherMitAufsZeugnisFlag – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurFaecherMitAufsZeugnisFlag&oldid=77)
