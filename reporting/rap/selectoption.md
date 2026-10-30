---
title: "SelectOption"
---

# SelectOption

<a id="RAP-Funktion_&quot;SelectOption&quot;"></a>
<a id="RAP-Funktion_.22SelectOption.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function SelectOption(Prompt, Optionsliste: String; Trennzeichen: Char): Integer;
```


ermöglicht die Auswahl eines Elements aus einer Auswahlliste

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Prompt` | Eingabeaufforderung |
| `Optionsliste` | Liste der verfügbaren Optionen |
| `Trennzeichen` | Trennt die Optionen in der Liste voneinander |


## Rückgabewert

Nullbasierter Index der gewählten Option oder -1, falls der Dialog
nicht über 'Ok' beendet wurde

## Beispiel

```pascal
var
  lOption : Integer;
begin
  lOption:=SelectOption('Bitte wählen Sie eine Option:',
    'Option 1;Option 2;Option 3',';');
  if lOption <> -1 then
    Label1.Caption:='Gewählt: Option Nr. ' + IntToStr(lOption)
  else
    Label1.Caption:='---';
end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [SelectOption – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SelectOption&oldid=2151)
