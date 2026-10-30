---
title: "ReadDateTime"
---

# ReadDateTime

<a id="RAP-Funktion_&quot;ReadDateTime&quot;"></a>
<a id="RAP-Funktion_.22ReadDateTime.22"></a>

<a id="signatur"></a>

## Beschreibung

Zeigt einen Dialog für Datum und Uhrzeiten an. Bei Bedarf lässt sich ein Zeitintervall mit Beginn und Ende erfassen.

```pascal
function ReadDateTime(aPrompt: String; var D,T1,T2: TDateTime; IsIntervall: Boolean): Boolean;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aPrompt` | Hinweistext im Dialogtitel |
| `D` | Datum) |
| `T1` | Uhrzeit (Beginn) |
| `T2` | Uhrzeit(Ende |
| `IsIntervall` | Falls True, wird die Uhrzeit (Ende) eingeblendet und kann verändert werden |

## Rückgabewert

True: Dialog durch „Ok“ beendet, False sonst

## Beispiel

```pascal
Procedure Label1OnGetText(var Text: String);
 var
   D,T1,T2 : Datetime;
 begin
   If ReadDateTime('Sprechtag', D, T1, T2, True) then
     Text:='Elternsprechtag am ' + DateToStr(D)
     + ' von ' + TimeToStr(T1) + ' Uhr'
     + ' bis ' + TimeToStr(T2) + ' Uhr'
   else
     Text:='---';
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ReadDateTime – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReadDateTime&oldid=81)
