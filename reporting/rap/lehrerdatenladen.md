---
title: "LehrerDatenLaden"
wiki_title: "LehrerDatenLaden"
wiki_page_id: 41
wiki_revision: 4843
---

# LehrerDatenLaden

<a id="RAP-Funktion_&quot;LehrerDatenLaden&quot;"></a>
<a id="RAP-Funktion_.22LehrerDatenLaden.22"></a>

## RAP-Funktion "LehrerDatenLaden"

## Beschreibung

   procedure LehrerDatenLaden(const Kuerzel: String; var Name, Vorname, Anrede, Titel, Amtsbez: String);\

## Parameter

   Name               - Nachname des Lehrers\
   Vorname            - ..des Lehrers\
   Anrede             - ..des Lehrers\
   Titel              - ..des Lehrers\
   Amtsbez            - ..des Lehrers\

## Rückgabewert

   ...\

## Beispiel

   procedure Label4711OnGetText(var Text: String);\
   var\
     lName, lVorname, lAnrede, lTitel, lAmtsbez: String;\
   begin\
     LehrerdatenLaden(Schueler\['Lehrer'\],lName, lVorname, lAnrede, lTitel,lAmtsbez);\
     Text:=lAnrede;\
     if lAmtsBez \<\> '' then Text:=Text + lAmtsBez;\
     if lTitel \<\> '' then Text:=Text +  lTitel;\
     Text:=Text + lVorname +  lName;\
   end;\


---

Quelle: [LehrerDatenLaden – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerDatenLaden&oldid=4843) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=LehrerDatenLaden&action=history)
