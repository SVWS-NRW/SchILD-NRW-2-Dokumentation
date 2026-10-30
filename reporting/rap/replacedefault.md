---
title: "ReplaceDefault"
---

# ReplaceDefault

<a id="RAP-Funktion_&quot;ReplaceDefault&quot;"></a>
<a id="RAP-Funktion_.22ReplaceDefault.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function ReplaceDefault(aText: String): String;
```


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

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aText` | Text, in dem die oder der Standard-Platzhalter ersetzt werden sollen. |


## Beispiel

```pascal
Procedure DetailBeforePrint;
begin
  ...
  RichText1.Richtext:=ReplaceDefault(RichText1.Richtext);
  ...
end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [ReplaceDefault – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=ReplaceDefault&oldid=82)
