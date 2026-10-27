---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Umgang mit Bildungsgangswechlsern am BK"
---

# Umgang mit Bildungsgangswechlsern am BK

Gesicherte Wiki-Seite · Namensraum 0 · Version 4062 · Stand 2016-12-01.

[Lesbaren Artikel öffnen](/schild2/versetzung/umgang-mit-bildungsgangswechlsern-am-bk) · [Originaldaten herunterladen](/dateien/quellen/seite-1091.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
===Bildungsgangwechsler ohne Online-Verfahren zur Anmeldung===
[[Image:KA33 001.jpg|right]]
Verwendet die Schule kein Online-Anmeldeverfahren, so müssen Datensätze neu-er Schüler manuell eingetragen werden.
Handelt es sich um Schüler der eigenen Schule, die einen weiteren Bildungsgang besuchen möchten, so kann man sich die Eingabe der Daten ersparen, indem man ein Duplikat anlegt:
Zunächst aktiviert man zusätzlich den Haken bei „Neuaufnahme“, wählt den Da-tensatz des Schülers aus und drückt anschließend auf „Schüler duplizieren“.
Hierdurch wird ein neuer Datensatz mit den Daten des Schülers angelegt, der dann in die zukünftige Klasse und in das entsprechende (kommende) Halbjahr einsortiert wird.

===Bildungsgangwechsler mit Schüler-Online (oder anderen Verfahren)===

Exportiert man Schülerdaten aus Schüler-Online, wird der Name des Schülers in der zu erzeugten Datei (SchuelerBasisidaten.dat) durch „#neueKlasse“ ergänzt. Wenn SchILD beim Import bereits einen Schülerdatensatz für den gleichen Schüler (Kriterien sind Name, Vorname und Geburtsdatum) findet, so wird dieser als Dupli-kat mit der neuen Klasse für das kommende Schuljahr eingetragen. 
Bei Verwendung anderer Online-Anmeldungen (OSA,…) sollte man versuchen, die zu übertragende Datei genauso zu strukturieren, um den gleichen Effekt beim Im-port zu erreichen.

===Verschmelzen von Duplikat und ursprünglichem Datensatz===
[[Image:KA33 002.jpg|right]]
Egal, auf welchem Weg die Schülerdatensätze ins Programm gekommen sind, das weitere Verfahren ist völlig identisch:
Der Name des Schülers ist in der Namensliste gelb hinterlegt und der Haken bei „Ist Duplikat“ ist gesetzt worden.



Die weiteren Arbeiten erfolgen nach dem Schuljahrewechsel.
Beim Schuljahreswechsel wird der ursprüngliche „Originaldatensatz“ (also der Datensatz des abgelaufenen Schuljahres) automatisch in den Karteikasten „Ab-schluss“ verschoben.
Sinnvoll ist es nun, das Duplikat und den Originaldatensatz zu „verschmelzen“. Dies hat den Vorteil, dass die komplette Vorgeschichte des Schülers an der eigenen Schule im gleichen Datensatz verfügbar ist, so dass pädagogische Absprachen o-der Rückfragen einfacher möglich sind.


Um dies zu erreichen geht man wie folgt vor:

1.)	Änderung der Sortierreihenfolge auf Name, Vorname, Klasse.
[[Image:KA33 003.jpg|Center]]

2.)	Aktivierung der „Kästen“ Neuaufnahme, Aktiv, Abgang und Abschluss.
[[Image:KA33 004.jpg|Center]]

3.)	Alle Duplikate sind an der gelben Farbe gut zu erkennen. Der entsprechende Originaldatensatz steht nun direkt über oder unter dem Duplikat.
[[Image:KA33 005.jpg|Center]]

4.)	Beim Originaldatensatz werden nun folgende Daten des Duplikats eingetra-gen:

*	Schul- und Halbjahr
*	Klasse
*	Bildungsgangbeginn
*	Bei Berufsschülern: Betrieb, Vertragsbeginn und -ende
[[Image:KA33 006.jpg|Center]]

5.)	Der Status des Originaldatensatzes wird von „Abschluss“ auf „Aktiv“ geän-dert.

6.)	Der Duplikatdatensatz wird gelöscht. 

7.)	Die Sortierreihenfolge kann danach wieder geändert werden.


----

[[Schild-NRW-Tutorials|Zurück zu Schnellanleitungen]]
```
