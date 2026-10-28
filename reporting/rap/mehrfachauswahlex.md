---
title: "MehrfachauswahlEx"
---

# MehrfachauswahlEx

<a id="RAP-Funktion_&quot;MehrfachauswahlEx&quot;"></a>
<a id="RAP-Funktion_.22MehrfachauswahlEx.22"></a>

## Signatur

```pascal
function MehrfachauswahlEx(Prompt: String, Optionsliste: String; Trennzeichen: Char): String;
```

## Beschreibung

ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste

## Parameter

```text
Prompt       - Eingabeaufforderung
Optionsliste - Liste der verfügbaren Optionen
Trennzeichen - Trennt die Optionen in der Liste voneinander
```

## Rückgabewert

Ein String mit den durch Bindestriche begrenzeten Indizes der gewählten Optionen;
Wenn keine Auswahl getroffen wurde, besteht der String nur aus einem Bindestrich.

## Beispiel

```pascal
procedure DetailBeforePrint;
var
  lResult : String;
begin
  lResult:=MehrfachAuswahlEx(Bitte wählen Sie eine oder mehrere Optionen:',
    'Option 1;Option 2;Option 3',';');
  if pos('-1-',lResult) > 0 then...
  if pos('-2-',lResult) > 0 then...
end
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-52) · [MehrfachauswahlEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=MehrfachauswahlEx&oldid=5725)
