---
title: "AufzaehlungRTF"
---

# AufzaehlungRTF

<a id="RAP-Funktion_&quot;AufzaehlungRTF&quot;"></a>
<a id="RAP-Funktion_.22AufzaehlungRTF.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function AufzaehlungRTF(aRichtext: String; const Label: String;aListe: TStrings): String;
```


fügt eine Aufzählung (ungeordnete Liste) in einen RTF-Text ein.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aRichtext` | Der Richtext, in den die Aufzählung eingefügt werden soll |
| `aLabel` | Positionsmarke, an der die Aufzählung eingefügt werden soll, eingeschlossen von &lt;ul&gt;..&lt;/ul&gt; für eine ungeordnete Liste bzw. &lt;ol&gt;..&lt;/ol&gt; für eine geordnete (nummerierte) Liste. |
| `aListe` | Stringliste, die die einzufügenden Zeilen enthält |


## Rückgabewert

Der veränderte Richtext

## Beispiel

Die Liste muss global deklariert werden:

```pascal
var
   lListe : TStringList;

```

Im folgenden Ereignis wird die Liste erzeugt:

```pascal
procedure ReportBeforePrint;
 Begin
  lListe:=TStringList.Create;

```

Hier wird sie befüllt:

```pascal
 procedure DetailBeforePrint;
 begin
   lListe.Clear;
   lListe.Add('Zeile 1');
   lListe.Add('Zeile 2');
   Richtext1.Richtext:=AufzaehlungRTF(Richtext1.Richtext,'$LISTE$',lListe);
   lListe:=TStringList.Free;
 end;
```

Im Richtext muss `<ul>$LISTE$</ul>` oder `<ol>$LISTE$</ol>` eingefügt werden.

Die Quelle enthält einen unvollständigen Ereignisblock und die auffällige Zeile `lListe:=TStringList.Free;`. Das Beispiel ist als historischer Quelltext erhalten und nicht als lauffähiges vollständiges Reportprogramm bestätigt.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [AufzaehlungRTF – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AufzaehlungRTF&oldid=2077)
