---
title: "Bestaetigung"
wiki_title: "Bestaetigung"
wiki_page_id: 14
wiki_revision: 28
---

# Bestaetigung

<a id="RAP-Funktion_&quot;Bestaetigung&quot;"></a>
<a id="RAP-Funktion_.22Bestaetigung.22"></a>

## RAP-Funktion "Bestaetigung"

## Beschreibung

   function Bestaetigung(const aFrage: String): Boolean;\

## Parameter

   aFrage             - String mir einer Frage, die sich durch Ja oder nein\
                        beantworten lässt\

## Rückgabewert

   TRUE, falls 'OK' angeklickt wird, FALSE sonst\

## Beispiel

   Procedure ReportBeforePrint;\
    var\
      lFilename : String;\
   begin\
     If Bestaetigung('Soll der Text geladen werden?') then begin\
       lFilename:=FileOpenDlg('\*.txt','c:\Texte','Textdateien\|\*.txt\|Alle Dateien\|\*.\*');\
       If lFilename \<\> * then Memo1.Text:=LoadFromFile(lFilename)*\
     end;\
   end;\


---

Quelle: [Bestaetigung – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Bestaetigung&oldid=28) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Bestaetigung&action=history)
