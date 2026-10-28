---
title: "NurErzieherMitAnschreiben"
---

# NurErzieherMitAnschreiben

<a id="RAP-Funktion_&quot;NurErzieherMitAnschreiben&quot;"></a>
<a id="RAP-Funktion_.22NurErzieherMitAnschreiben.22"></a>

## Signatur

```pascal
procedure NurErzieherMitAnschreiben(Filtern: Boolean);
```

## Parameter

```text
Filtern  - TRUE, falls nur Erzieher berücksichtigt werden sollen, bei
           denen das Flag „Erhält Anschreiben“ gesetzt ist.
```


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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-55) · [NurErzieherMitAnschreiben – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurErzieherMitAnschreiben&oldid=76)
