---
title: "ZeugnisParameter"
---

# ZeugnisParameter

<a id="RAP-Funktion_&quot;ZeugnisParameter&quot;"></a>
<a id="RAP-Funktion_.22ZeugnisParameter.22"></a>

## Signatur

```pascal
procedure ZeugnisParameter(var aBeginn, aSprechtag1, aSprechtag2: String);
```

## Parameter

```text
aBeginn            - Wiederbeginn des Unterrichts
aSprechtag1        - Erster Sprechtag (mit Anfangs – und Endzeiten)
aSprechtag2        - Zweiter Sprechtag (mit Anfangs – und Endzeiten)
```

## Beispiel

Im Dialog werden der Wiederbeginn des Unterrichts und zwei Sprechtage abgefragt,
die jeweils Vor- und Nachmittags stattfinden können. Wenn ein Tag vollständig
deaktiviert wird, ist der entsprechende Ergebnisstring leer.

```pascal
Procedure ReportBeforePrint;
begin
  ZeugnisParameter(Wiederbeginn, Sprechtag1, Sprechtag2);
end;

Procedure Label1OnGetText(var Text: String);
begin
  Text:=Wiederbeginn
end;

Procedure Label2onGetText(var Text: String);
begin
  Text:='am '+ Sprechtag1;
  If Sprechtag2 <>'' then Text:=Text + ' und am ' + Sprechtag2;
end;
```

Gedruckt wird (Beispieldaten aus der Quelle):

```text
Elternsprechtag: am 10. Februar 2006 von 8:00 bis 12:00 und von 14:00Uhr
bis 18:00 Uhr und am 17. Februar 2006 von 8:00 bis 12:00 und von 14:00Uhr
bis 18:00 Uhr
Wiederbeginn des Unterrichts am 10. Februar 2006 um 8:00 Uhr.
```

---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-111) · [ZeugnisParameter – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ZeugnisParameter&oldid=136)
