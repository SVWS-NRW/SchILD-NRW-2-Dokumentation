---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: CreateNotenHeader"
---

# CreateNotenHeader

Gesicherte Wiki-Seite · Namensraum 0 · Version 183 · Stand 2013-11-06.

[Lesbaren Artikel öffnen](/reporting/rap/createnotenheader) · [Originaldaten herunterladen](/dateien/quellen/seite-15.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    '''procedure CreateNotenHeader(aFaecherListe: String);'''
    (*Im tatsächlich erzeugten Header stehen die Fächer
    in der unter „Unterrichtsfächer“ festgelegten Sortierreihenfolge*). 
    Diese Prozedur ist nur nötig und sinnvoll, wenn eine tabellarische
    Übersicht über alle gewählten Schüler und deren Leistungsdaten gewünscht wird,
    da ein Aufruf dieser Prozedur dazu führt, dass die Leistungsdaten 
    aller in der Auswahl befindlichen Schüler gelesen werden, 
    damit eine interne Tabelle mit diesen Fächern angelegt werden kann.
    In allen anderen Fällen ist dieser Aufruf unnötig! Nach der Darstellung der Tabelle muss
    unbedingt die Prozedur 'ResetFaechervorbelegung' aufgerufen werden!
|-
|'''Parameter''' || 
    aFaecherListe      - Kommaseparierte Liste der Fachkürzel, für die
                         eine Übersicht erzeugt werden soll.
|-
|'''Rückgabewert''' ||
    ...
|- 
|'''Beispiel''' || 
  '''CreateNotenHeader('D,E,M,F,L');'''
  Bei den "Konferen-Übersichten (d.h. Vorlagen, die die Datenquellen FachUebersichtHeader 
  und FachUebersicht verwenden) stehen im Befehl "CreateNotenHeader" weitere Optionen zum 
  Filtern auf Fächer zur Verfügung:
  -Es können "Platzhalter * oder % (gleichbedeutend) verwendet werden
  Beispiel:
  '''CreateNotenHeader( 'D,M,E*' );'''
  würde nur die Fächer D,M und solche, die mit E anfangen, berücksichtigen (also z.B. E5, EK)
  -Der Platzhalter # kann speziell für Fremdsprachen mit Jahrgangsangabe verwendet werden
  Beispiel
  '''CreateNotenHeader( 'D,M,E#' );'''
  würde nur die Fächer D,M und alle Englisch-Fächer berücksichtigen (aber nicht EK)
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
