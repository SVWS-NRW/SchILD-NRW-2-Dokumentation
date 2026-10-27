---
title: "ReplaceDefault"
wiki_title: "ReplaceDefault"
wiki_page_id: 61
wiki_revision: 82
---

# ReplaceDefault

<a id="RAP-Funktion_&quot;ReplaceDefault&quot;"></a>
<a id="RAP-Funktion_.22ReplaceDefault.22"></a>

## RAP-Funktion "ReplaceDefault"

## Beschreibung

```pascal
function ReplaceDefault(aText: String): String;

   Platzhalter              | Wird ersetzt durch
  --------------------------+----------------------------------
   $_NAME$                  | Schueler['Name']
   $_VORNAME$               | Schueler['Vorname']
   $_NAME_VORNAME$          | Schueler['NameVorname']
   $_VORNAME_NAME$          | Schueler['VornameName']
   $_ANREDE$                | Schueler['Anrede']
   $_ER_ODER_SIE$           | Schueler['ErSie']
   $_SOHN_ODER_TOCHTER$     | Schueler['SohnOderTochter']
   $_ADRESSANREDE$          | Schueler['AdressAnrede']
   $_STRASSE$               | Schueler['Strasse']
   $_PLZ_ORT$               | Schueler['PLZ + ' ' + Schueler['OrtAbk']
   $_ERZ_ADRESSANREDE$      | SchErzAdr['BriefAnrede']
   $_ERZ_FORMALEANREDE$     | SchErzAdr['FormaleAnrede']
   $_ERZ_VORNAMEN_UND_NAME$ | SchErzAdr['VornamenUndName']
   $_ERZ_STRASSE$           | SchErzAdr['ErzStrasse']
   $_ERZ_PLZ_ORT$           | SchErzAdr['ErzPLZ + ' ' + SchErzAdrOrt']

Zusätzlich werden im Text geschlechtsspezifische Umwandlungen nach dem Muster
der Bemerkungsfelder vorgenommen, d.h. aus &Text_männlich%Text_weiblich& wird
in Abhängigkeit vom Geschlecht des Schülerdatensatzes die korrekte Form gewählt.
```

## Parameter

```text
aText - Text, in dem die oder der Standard-Platzhalter ersetzt
        werden sollen.
```

## Rückgabewert

```text
...
```

## Beispiel

```pascal
Procedure DetailBeforePrint;
begin
  ...
  RichText1.Richtext:=ReplaceDefault(RichText1.Richtext);
  ...
end;
```


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-61) · [ReplaceDefault – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceDefault&oldid=82)
