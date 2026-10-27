---
title: "Praktikumstage"
wiki_title: "Praktikumstage"
wiki_page_id: 122
wiki_revision: 170
---

# Praktikumstage

<a id="RAP-Funktion_&quot;Praktikumstage&quot;"></a>
<a id="RAP-Funktion_.22Praktikumstage.22"></a>

## RAP-Funktion "Praktikumstage"

## Beschreibung

```pascal
function PraktikumsTage( const nur_betriebspraktikum: boolean): integer;
Liefert die Anzahl der Praktikumstage eines Schülers (optional nur solche mit
Kennung „Betriebspraktikum“). Voraussetzung ist, dass das Praktikum bei dem
jeweiligen Betrieb als solches gekennzeichnet ist (mit Anfangs- und Enddatum)
```

## Parameter

```text
...
```

## Rückgabewert

```text
Anzahl der Tage.
```

## Beispiel

```pascal
procedure DetailBeforePrint;
 Begin
 {Alle Praktikumstage ausgeben}
 LblPraktikumstage.Text := IntToStr( Praktikumstage( false ) );
End;
```


---

Quelle: [Praktikumstage – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Praktikumstage&oldid=170) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Praktikumstage&action=history)
