---
title: "NurErzieherMitAnschreiben"
---

# NurErzieherMitAnschreiben

<a id="RAP-Funktion_&quot;NurErzieherMitAnschreiben&quot;"></a>
<a id="RAP-Funktion_.22NurErzieherMitAnschreiben.22"></a>

<a id="signatur"></a>

## Beschreibung

Steuert, ob nur Erziehungsberechtigte mit dem gesetzten Merkmal **Erhält Anschreiben** berücksichtigt werden.

```pascal
procedure NurErzieherMitAnschreiben(Filtern: Boolean);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Filtern` | TRUE, falls nur Erzieher berücksichtigt werden sollen, bei denen das Flag „Erhält Anschreiben“ gesetzt ist. |

## Beispiel

```pascal
Procedure ReportBeforePrint;
 begin
   NurErzieherMitAnschreiben(True);
 end;

Procedure ReportAfterPrint;
begin
  NurErzieherMitAnschreiben(False);
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [NurErzieherMitAnschreiben – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurErzieherMitAnschreiben&oldid=76)
