---
title: "MehrfachauswahlEx"
---

# MehrfachauswahlEx

<a id="RAP-Funktion_&quot;MehrfachauswahlEx&quot;"></a>
<a id="RAP-Funktion_.22MehrfachauswahlEx.22"></a>

<a id="signatur"></a>

## Beschreibung

ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste

```pascal
function MehrfachauswahlEx(Prompt: String, Optionsliste: String; Trennzeichen: Char): String;
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Prompt` | Eingabeaufforderung |
| `Optionsliste` | Liste der verfügbaren Optionen |
| `Trennzeichen` | Trennt die Optionen in der Liste voneinander |

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [MehrfachauswahlEx – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=MehrfachauswahlEx&oldid=5725)
