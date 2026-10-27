---
title: "Mehrfachauswahl"
wiki_title: "Mehrfachauswahl"
wiki_page_id: 51
wiki_revision: 1842
---

# Mehrfachauswahl

<a id="RAP-Funktion_&quot;Mehrfachauswahl&quot;"></a>
<a id="RAP-Funktion_.22Mehrfachauswahl.22"></a>

## RAP-Funktion "Mehrfachauswahl"

## Beschreibung

```pascal
function Mehrfachauswahl(Prompt, Optionsliste: String; Trennzeichen: Char): TStringList;
ermöglicht die Auswahl mehrerer Elemente einer Auswahlliste
```

## Parameter

```text
Prompt       - Eingabeaufforderung
Optionsliste - Liste der verfügbaren Optionen
Trennzeichen - Trennt die Optionen in der Liste voneinander
```

## Rückgabewert

```text
Eine Stringliste mit den gewählten Optionen
```

## Beispiel

```pascal
procedure DetailBeforePrint;
begin
  Memo1.Lines:=MehrfachAuswahl('Bitte wählen Sie eine oder mehrere Optionen:',
    'Option 1;Option 2;Option 3',';');
end
```


---

Quelle: [Mehrfachauswahl – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Mehrfachauswahl&oldid=1842) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Mehrfachauswahl&action=history)
