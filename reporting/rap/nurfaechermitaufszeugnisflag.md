---
title: "NurFaecherMitAufsZeugnisFlag"
---

# NurFaecherMitAufsZeugnisFlag

<a id="RAP-Funktion_&quot;NurFaecherMitAufsZeugnisFlag&quot;"></a>
<a id="RAP-Funktion_.22NurFaecherMitAufsZeugnisFlag.22"></a>

## Signatur

```pascal
Procedure NurFaecherMitAufsZeugnisFlag(aValue : Boolean);
```

## Beschreibung

Durch die Verwendung dieser Prozedur kann erreicht werden, dass
bei den Schülerleistungsdaten auch Fächer mit ausgegeben werden,
bei denen das Flag "Auf Zeugnis" nicht gesetzt ist. Voreinstellung
für diesen Wert ist TRUE, d.h. es werden nur Fächer ausgegeben, bei
denen dieses Flag gesetzt ist.

## Parameter

```text
aValue             - Boolscher Wert: FALSE schaltet die Überprüfung ab,
                     TRUE schaltet sie wieder ein.
```


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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-56) · [NurFaecherMitAufsZeugnisFlag – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurFaecherMitAufsZeugnisFlag&oldid=77)
