---
title: "Praktikumstage"
---

# Praktikumstage

## Beschreibung

Liefert die Anzahl der Praktikumstage eines Schülers (optional nur solche mit
Kennung „Betriebspraktikum“). Voraussetzung ist, dass das Praktikum bei dem
jeweiligen Betrieb als solches gekennzeichnet ist (mit Anfangs- und Enddatum)

```pascal
function PraktikumsTage( const nur_betriebspraktikum: boolean): integer;
```

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

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [Praktikumstage – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Praktikumstage&oldid=170)
