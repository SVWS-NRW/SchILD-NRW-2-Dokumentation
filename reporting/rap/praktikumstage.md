---
title: "Praktikumstage"
---

# Praktikumstage

<a id="RAP-Funktion_&quot;Praktikumstage&quot;"></a>
<a id="RAP-Funktion_.22Praktikumstage.22"></a>

## Signatur

```pascal
function PraktikumsTage( const nur_betriebspraktikum: boolean): integer;
```

## Beschreibung

Liefert die Anzahl der Praktikumstage eines Schülers (optional nur solche mit
Kennung „Betriebspraktikum“). Voraussetzung ist, dass das Praktikum bei dem
jeweiligen Betrieb als solches gekennzeichnet ist (mit Anfangs- und Enddatum)

## Rückgabewert

Anzahl der Tage.

## Beispiel

```pascal
procedure DetailBeforePrint;
 Begin
 {Alle Praktikumstage ausgeben}
 LblPraktikumstage.Text := IntToStr( Praktikumstage( false ) );
End;
```


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-122) · [Praktikumstage – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Praktikumstage&oldid=170)
