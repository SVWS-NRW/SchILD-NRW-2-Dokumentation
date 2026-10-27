---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Klausurplanung CNF:Hauptseite"
---

# Klausurplanung CNF:Hauptseite

Gesicherte Wiki-Seite · Namensraum 0 · Version 4499 · Stand 2020-04-29.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/klausurplanung-cnf-hauptseite) · [Originaldaten herunterladen](/dateien/quellen/seite-1163.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
=== Hinweise ===
Klausurplanung_CNF wurde in JAVA von Benjamin Bartsch programmiert. Die Software ist "open source" und unterliegt der MIT oder der CC0 Lizenz, d.h. der Quellcode steht allen frei zur Verfügung, aber es dürfen keinerlei Ansprüche geltend gemacht werden. Wenn Sie den Autor kontaktieren möchten, finden Sie die E-Mail-Adresse innerhalb des Programms.

Das Programm arbeitet auf Basis der Daten des Programms Kurs42. Wenn Sie eine Import/Exportfunktion zu anderen Programmen wünschen, können Sie den Autor kontaktieren.

Das Programm unterstützt eine Vielzahl von Nebenbedingungen (Regeln genannt). Wenn Sie für Ihre Schule  zusätzliche Regeln benötigen, können Sie ebenfalls den Autor kontaktieren.

Das Programm Klausurplanung_CNF berechnet den Klausurplan einer Jahrgangsstufe. Die Details dazu finden Sie in diesem Wiki. 

'''Wenn Sie sich neu mit diesem Programm beschäftigen, nutzen Sie bitte direkt den Multi-Klausurplaner: [https://wiki.svws.nrw.de/mediawiki/index.php?title=Multi_Klausurplanung_CNF:Hauptseite Klick!]. Dieses Programm wird nicht mehr gepflegt!'''

=== Vorbereitungen ===

* Laden Sie sich den folgenden SAT-Solver (https://github.com/msoos/cryptominisat/releases) herunter und speichern Sie die Datei (für Windows: cryptominisat5-win-amd64-nogauss.exe) auf Ihrem PC und merken Sie sich den Pfad.
* Installieren Sie ggf. JAVA und laden sich sich dann die aktuellste Version von Klausurplanung_CNF herunter (https://schulverwaltungsinfos.nrw.de/svws/forum/viewtopic.php?f=71&t=1302).
* Sie haben nun das Programm in Form einer JAR-Datei, welche man mit einem Doppelklick starten kann. Dort müssen Sie dort zunächst den Pfad zu cryptominisat...exe angeben und können dann arbeiten, aber zuvor müssen Sie jedoch noch aus Kurs42 Ihre Daten exportieren.

=== Daten in Kurs42 vorbereiten und exportieren ===

* Die Wahl der schriftlichen Fächer (Klausurverpflichtung) aller Schüler sollte in der zu importierenden Blockung vor dem Export aus Kurs42 gründlich geprüft werden.
* Unter ''Import/Export --> Export in Textdatei'' werden sämtliche Häkchen gesetzt und ein Zielordner gewählt.
* In Klausurplanung_CNF unter ''Importieren'' den soeben erstellten Ordner auswählen.
* Das Programm ist nun bereit für die Arbeiten am Klausurplan.

=== Vorbereitungen und Rechnung ===

* Auf der Registerkarte "Berechnungen" legen Sie den Beginn und das Ende des Klausurzeitraums an (frühester Termin der 1. Klausur und spätester Termin der letzten Klausur).
* Die maximale Anzahl von Klausuren eines Schüler bzw. einer Schülerin ist standardmäßig auf drei pro Woche voreingestellt. Dies kann bei Bedarf geändert werden.
* Im Fenster Regeln werden nun die nötigen Regeln für den Klausurplan per Dropdown ausgewählt und präzisiert (siehe nachfolgender Abschnitt).
* Ist dies geschehen, kann die Rechnung durch Klick auf "+" gestartet werden. Mehrere Rechnungen sind, je nach Leistung des Computers, möglich. Als Orientierungswert gilt: höchstens eine Rechnung pro CPU-Kern.

=== Regelwerk ===

Das Programm arbeitet mit Regeln, die der Nutzer selbst vorgibt und in deren Rahmen eine (mathematische) Lösung gesucht wird. In diesem Fall also eine funktionierende Klausurplanung, die gewisse Rahmenvorgaben erfüllt. Jede Schule hat hier Spezifika, die zunächst definiert werden müssen. Beispielsweise sind folgende Fragen relevant:
* Werden Klausurpläne nach Fächern erstellt oder nach (Blockungs-)Schienen?
* Welche Längen haben die einzelnen Klausuren?
* Soll ein Klausurplan für ein Halbjahr oder ein Quartal erstellt werden (entscheidend für Zeitfenster des Planes und Anzahl der Klausuren pro Fach)?
* Schreiben bestimmte Fächer (vorzugsweise in der EF) nur eine Klausur im Halbjahr oder keine Klausur im Quartal?
* Welche Klausuren werden als mündliche Prüfungen durchgeführt?
* Sind bestimmte Klausurtermine festgelegt, wie bspw. zentrale gestellte Klausuren?
* Sind bestimmte Termine im Zeitfenster zu blockieren, bspw. Feiertage, pädagogische Tage, Ferien,...?
* ...

Ist ein Regelkatalog mit grundsätzlichen Vorgaben erstellt, so folgt ein weiterer Teil des Regelkatalog, der durch das Programm optimiert werden soll. Auch hier sind Prioritäten zu setzen und dem Programm vorzugeben. Mögliche Faktoren einer Priorisierung sind:
* Anzahl der Klausurtage
* Anzahl der durch Klausuren betroffenen Stunden
* Anzahl von Klausuren, die in einer bestimmten Stunde liegen (Unterrichtsausfall)
* Anzahl der SchülerInnen, die Klausuren an zwei/drei aufeinanderfolgenden Tagen haben
* Anzahl der Klausuren pro Woche (kann ggf. auf zwei reduziert werden?)
* Anzahl von Klausurstunden, die innerhalb der regulären Unterrichtszeit liegen
* Abstand von zwei Klausuren eines Kurses
* ...

Ist die Festlegung der Prioritäten erfolgt, kann anhand dieser der Klausurplan errechnet werden. Beispiele finden Sie auf der Seite vom Multi_Klausurplaner_CNF: [https://wiki.svws.nrw.de/mediawiki/index.php?title=Multi_Klausurplanung_CNF:Hauptseite Klick!].
```
