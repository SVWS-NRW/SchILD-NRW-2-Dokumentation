---
title: "Mehrfachauswahl"
---

# Mehrfachauswahl

<a id="RAP-Funktion_&quot;Mehrfachauswahl&quot;"></a>
<a id="RAP-Funktion_.22Mehrfachauswahl.22"></a>

## Signatur

```pascal
function Mehrfachauswahl(Prompt, Optionsliste: String; Trennzeichen: Char): TStringList;
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

Eine Stringliste mit den gewählten Optionen

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Memo1.Lines:=MehrfachAuswahl('Bitte wählen Sie eine oder mehrere Optionen:',
    'Option 1;Option 2;Option 3',';');
end
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-51) · [Mehrfachauswahl – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Mehrfachauswahl&oldid=1842)
