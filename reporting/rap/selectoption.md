---
title: "SelectOption"
wiki_title: "SelectOption"
wiki_page_id: 81
wiki_revision: 2151
---

# SelectOption

<a id="RAP-Funktion_&quot;SelectOption&quot;"></a>
<a id="RAP-Funktion_.22SelectOption.22"></a>

## RAP-Funktion "SelectOption"

## Beschreibung

   function SelectOption(Prompt, Optionsliste: String; Trennzeichen: Char): Integer;\
   ermöglicht die Auswahl eines Elements aus einer Auswahlliste\

## Parameter

   Prompt       - Eingabeaufforderung\
   Optionsliste - Liste der verfügbaren Optionen\
   Trennzeichen - Trennt die Optionen in der Liste voneinander\

## Rückgabewert

   Nullbasierter Index der gewählten Option oder -1, falls der Dialog\
   nicht über 'Ok' beendet wurde\

## Beispiel

    var\
     lOption : Integer;\
   begin\
     lOption:=SelectOption('Bitte wählen Sie eine Option:',\
       'Option 1;Option 2;Option 3',';');\
     if lOption \<\> -1 then\
       Label1.Caption:='Gewählt: Option Nr. ' + IntToStr(lOption)\
     else\
       Label1.Caption:='---';\
   end;\


---

Quelle: [SelectOption – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectOption&oldid=2151) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectOption&action=history)
