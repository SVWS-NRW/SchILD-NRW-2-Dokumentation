---
title: "ZeugnisParameter"
wiki_title: "ZeugnisParameter"
wiki_page_id: 111
wiki_revision: 136
---

# ZeugnisParameter

<a id="RAP-Funktion_&quot;ZeugnisParameter&quot;"></a>
<a id="RAP-Funktion_.22ZeugnisParameter.22"></a>

## RAP-Funktion "ZeugnisParameter"

## Beschreibung

   procedure ZeugnisParameter(var aBeginn, aSprechtag1, aSprechtag2: String);\

## Parameter

   aBeginn            - Wiederbeginn des Unterrichts\
   aSprechtag1        - Erster Sprechtag (mit Anfangs – und Endzeiten)\
   aSprechtag2        - Zweiter Sprechtag (mit Anfangs – und Endzeiten)\

## Rückgabewert

   ...\

## Beispiel

   Im Dialog werden der Wiederbeginn des Unterrichts und zwei Sprechtage abgefragt,\
   die jeweils Vor- und Nachmittags stattfinden können. Wenn ein Tag vollständig\
   deaktiviert wird, ist der entsprechende Ergebnisstring leer.\

   Procedure ReportBeforePrint;\
   begin\
     ZeugnisParameter(Wiederbeginn, Sprechtag1, Sprechtag2);\
   end;\

   Procedure Label1OnGetText(var Text: String);\
   begin\
     Text:=Wiederbeginn\
   end;\

   Procedure Label2onGetText(var Text: String);\
   begin\
     Text:='am '+ Sprechtag1;\
     If Sprechtag2 \<\>* then Text:=Text + ' und am ' + Sprechtag2;*\
   end;\

   Gedruckt wird:\
   Elternsprechtag: am 10. Februar 2006 von 8:00 bis 12:00 und von 14:00Uhr\
   bis 18:00 Uhr und am 17. Februar 2006 von 8:00 bis 12:00 und von 14:00Uhr\
   bis 18:00 Uhr\
   Wiederbeginn des Unterrichts am 10. Februar 2006 um 8:00 Uhr.\


---

Quelle: [ZeugnisParameter – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ZeugnisParameter&oldid=136) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=ZeugnisParameter&action=history)
