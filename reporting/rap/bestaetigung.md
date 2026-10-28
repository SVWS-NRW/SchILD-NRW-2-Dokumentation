---
title: "Bestaetigung"
---

# Bestaetigung

<a id="RAP-Funktion_&quot;Bestaetigung&quot;"></a>
<a id="RAP-Funktion_.22Bestaetigung.22"></a>

## Signatur

```pascal
function Bestaetigung(const aFrage: String): Boolean;
```

## Parameter

```text
aFrage             - String mir einer Frage, die sich durch Ja oder nein
                     beantworten lässt
```

## Rückgabewert

TRUE, falls 'OK' angeklickt wird, FALSE sonst

## Beispiel

```pascal
Procedure ReportBeforePrint;
 var
   lFilename : String;
begin
  If Bestaetigung('Soll der Text geladen werden?') then begin
    lFilename:=FileOpenDlg('*.txt','c:\Texte','Textdateien|*.txt|Alle Dateien|*.*');
    If lFilename <> '' then Memo1.Text:=LoadFromFile(lFilename)
  end;
end;
```

---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-14) · [Bestaetigung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Bestaetigung&oldid=28)
