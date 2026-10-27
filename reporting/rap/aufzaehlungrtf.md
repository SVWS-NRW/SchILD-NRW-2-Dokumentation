---
title: "AufzaehlungRTF"
wiki_title: "AufzaehlungRTF"
wiki_page_id: 13
wiki_revision: 2077
---

# AufzaehlungRTF

<a id="RAP-Funktion_&quot;AufzaehlungRTF&quot;"></a>
<a id="RAP-Funktion_.22AufzaehlungRTF.22"></a>

## RAP-Funktion "AufzaehlungRTF"

## Beschreibung

   function AufzaehlungRTF(aRichtext: String; const Label: String;aListe: TStrings): String;\
   fügt eine Aufzählung (ungeordnete Liste) in einen RTF-Text ein.\

## Parameter

   aRichtext   - Der Richtext, in den die Aufzählung eingefügt werden soll\
   aLabel      - Positionsmarke, an der die Aufzählung eingefügt werden soll, eingeschlossen\

von

- ..

für eine ungeordnete Liste bzw.

1.  ..

                 für eine geordnete (nummerierte) Liste.\
   aListe      - Stringliste, die die einzufügenden Zeilen enthält\

## Rückgabewert

   Der veränderte Richtext\

## Beispiel

   Die Liste muss global deklariert werden:\
   var\
      lListe : TStringList;\

   Muss in diesem Ereignis erzeugt werden:\
   procedure ReportBeforePrint;\
    Begin\
     lListe:=TStringList.Create;\

    Wird hier befüllt:\
    procedure DetailBeforePrint;\
    begin\
      lListe.Clear;\
      lListe.Add('Zeile 1');\
      lListe.Add('Zeile 2');\
      Richtext1.Richtext:=AufzaehlungRTF(Richtext1.Richtext,'\$LISTE\$',lListe);\
      lListe:=TStringList.Free;\
    end;\
    // Im Richtext muss dann \<ul\>\$LISTE\$\</ul\> oder \<ol\>\$LISTE\$\</ol\> eingefügt werden.\


---

Quelle: [AufzaehlungRTF – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=AufzaehlungRTF&oldid=2077) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=AufzaehlungRTF&action=history)
