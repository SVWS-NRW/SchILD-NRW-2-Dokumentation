---
title: "NurFaecherMitAufsZeugnisFlag"
wiki_title: "NurFaecherMitAufsZeugnisFlag"
wiki_page_id: 56
wiki_revision: 77
---

# NurFaecherMitAufsZeugnisFlag

<a id="RAP-Funktion_&quot;NurFaecherMitAufsZeugnisFlag&quot;"></a>
<a id="RAP-Funktion_.22NurFaecherMitAufsZeugnisFlag.22"></a>

## RAP-Funktion "NurFaecherMitAufsZeugnisFlag"

## Beschreibung

```pascal
Procedure NurFaecherMitAufsZeugnisFlag(aValue : Boolean);
Durch die Verwendung dieser Prozedur kann erreicht werden, dass
bei den Schülerleistungsdaten auch Fächer mit ausgegeben werden,
bei denen das Flag "Auf Zeugnis" nicht gesetzt ist. Voreinstellung
für diesen Wert ist TRUE, d.h. es werden nur Fächer ausgegeben, bei
denen dieses Flag gesetzt ist.
```

## Parameter

```text
aValue             - Boolscher Wert: FALSE schaltet die Überprüfung ab,
                     TRUE schaltet sie wieder ein.
```

## Rückgabewert

```text
...
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

Quelle: [NurFaecherMitAufsZeugnisFlag – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurFaecherMitAufsZeugnisFlag&oldid=77) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurFaecherMitAufsZeugnisFlag&action=history)
