---
title: "WaehleDatumStr"
wiki_title: "WaehleDatumStr"
wiki_page_id: 106
wiki_revision: 131
---

# WaehleDatumStr

<a id="RAP-Funktion_&quot;WaehleDatumStr&quot;"></a>
<a id="RAP-Funktion_.22WaehleDatumStr.22"></a>

## RAP-Funktion "WaehleDatumStr"

## Beschreibung

```pascal
function WaehleDatumStr(const Hinweis: String; const LangFormat: Boolean): String;
```

## Parameter

```text
Hinweis            - Hinweistext
LangFormat         - True: Formatierung des Ergebnisses wie
                    „Langes Datumsformat“ in den Ländereinstellungen von
                     Windows, sonst Kurzformat
```

## Rückgabewert

```text
Zeichenkette mit formatiertem Datum
```

## Beispiel

```pascal
lDatum:=WaehleDatumStr('Geburtsdatum:',True);
liefert (z.B.) 'Sonntag, 26. Mai 1996'
```


---

Quelle: [WaehleDatumStr – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=WaehleDatumStr&oldid=131) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=WaehleDatumStr&action=history)
