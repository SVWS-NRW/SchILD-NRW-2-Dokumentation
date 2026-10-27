---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Multi Klausurplanung CNF:Hauptseite"
---

# Multi Klausurplanung CNF:Hauptseite

Gesicherte Wiki-Seite · Namensraum 0 · Version 4574 · Stand 2020-05-05.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/multi-klausurplanung-cnf-hauptseite) · [Originaldaten herunterladen](/dateien/quellen/seite-1164.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
=== Hinweise ===
Multi_Klausurplanung_CNF wurde in JAVA von Benjamin Bartsch programmiert. Die Software ist "open source" und unterliegt der MIT oder der CC0 Lizenz, d.h. der Quellcode steht allen frei zur Verfügung, aber es dürfen keinerlei Ansprüche geltend gemacht werden. Wenn Sie den Autor kontaktieren möchten, finden Sie die E-Mail-Adresse innerhalb des Programms.

Das Programm arbeitet auf Basis der Daten des Programms Kurs42. Wenn Sie eine Import/Exportfunktion zu anderen Programmen wünschen, können Sie den Autor kontaktieren.

Das Programm unterstützt eine Vielzahl von Nebenbedingungen (Regeln genannt). Wenn Sie für Ihre Schule  zusätzliche Regeln benötigen, können Sie ebenfalls den Autor kontaktieren.

Das Programm Multi_Klausurplanung_CNF berechnet mehrere Klausurpläne parallel und in Beziehung zueinander, so dass z.B. in der gymnasialen Oberstufe alle drei Jahrgangsstufen in einer gemeinsamer Klausurplanung berechnet werden. Die Details dazu finden Sie in diesem Wiki.

=== Vorbereitungen ===

* Laden Sie sich den folgenden SAT-Solver (https://github.com/msoos/cryptominisat/releases) herunter und speichern Sie die Datei (für Windows: cryptominisat5-win-amd64-nogauss.exe) auf Ihrem PC und merken Sie sich den Pfad.
* Installieren Sie ggf. JAVA und laden sich sich dann die aktuellste Version von Multi_Klausurplanung_CNF herunter (https://schulverwaltungsinfos.nrw.de/svws/forum/viewtopic.php?f=71&t=1928).
* Sie haben nun das Programm in Form einer JAR-Datei, welche man mit einem Doppelklick starten kann. Dort müssen Sie dort zunächst den Pfad zu "cryptominisat...exe" angeben und können dann arbeiten, aber zuvor müssen Sie jedoch noch aus Kurs42 Ihre Daten exportieren.

=== Daten in Kurs42 vorbereiten und exportieren ===

* Die Wahl der schriftlichen Fächer (Klausurverpflichtung) aller Schüler sollte in allen zu importierenden Blockungen vor dem Export aus Kurs42 gründlich geprüft werden.
* Unter ''Import/Export --> Export in Textdatei'' werden sämtliche Häkchen gesetzt und ein Zielordner gewählt.
* Der letzte Schritt ist für alle zu planenden Jahrgangsstufen zu wiederholen - für jede Jahrgangsstufe muss ein separater Unterordner verwendet werden (bspw. "Blockung EF", "Blockung Q1", "Blockung Q2").
* In Multi_Klausurplanung_CNF unter ''Importieren'' alle soeben erstellten Ordner gleichzeitig auswählen (Mehrfachauswahl: Strg-Taste gedrückt halten).
* Das Programm ist nun bereit für die Arbeiten am Klausurplan.

=== Vorbereitungen und Rechnung ===   
[[Datei:Multi Klausurplaner Main.png|300px|thumb|right|Hauptfenster mit Dateneingabe]]
* Auf der Registerkarte "Eingabe" legen Sie den Beginn und das Ende des Klausurzeitraums an (frühester Termin der 1. Klausur und spätester Termin der letzten Klausur).
* Die maximale Anzahl von Klausuren eines Schüler bzw. einer Schülerin ist standardmäßig auf drei pro Woche voreingestellt. Dies kann bei Bedarf geändert werden.
* Im Fenster Regeln werden nun die nötigen Regeln für den Klausurplan per Dropdown ausgewählt und präzisiert (siehe nachfolgender Abschnitt).
* Ist dies geschehen, kann die Rechnung durch Klick auf "+" gestartet werden. Mehrere Rechnungen sind, je nach Leistung des Computers, möglich. Es gibt eine "Warteschlange der Berechnungen", da eine Berechnung sehr viel Arbeitsspeicher verbraucht. So können Sie über Nacht auch mehrere Berechnungen zur Abarbeitung hinzufügen. Als Orientierungswert gilt: höchstens eine Rechnung pro CPU-Kern.

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

Ist die Festlegung der Prioritäten erfolgt, kann anhand dieser der Klausurplan errechnet werden. Hierzu ein Beispiel: 

'''Beispiel für Priorisierung'''
: Die folgenden Beispiele zeigen eine Priorisierung aus Anwendersicht, also für die eigene Orientierung. Das Programm kennt keine Prioritäten, es versucht stets <b>alle</b> Bedingungen zu erfüllen.
;Priorität I (Klausurtage)
: 900#Optimiere: Stufe <EF> hat maximal <15> Klausurtage.
: 900#Optimiere: Stufe <Q1> hat maximal <15> Klausurtage.
: 900#Optimiere: Stufe <Q2> hat maximal <15> Klausurtage.
;Priorität II (betroffener Unterricht)
: 907#Optimiere: Stufe <EF> hat pro Stundenplanzelle (Summe über alle Wochen) maximal <5> Klausurtermine. 
: 907#Optimiere: Stufe <Q1> hat pro Stundenplanzelle (Summe über alle Wochen) maximal <5> Klausurtermine. 
: 907#Optimiere: Stufe <Q2> hat pro Stundenplanzelle (Summe über alle Wochen) maximal <5> Klausurtermine.
;Priorität III (Schüler)
: 300#SchülerIn: Stufe <EF> und SchülerIn <*> in keiner Woche <3> Klausurtage aufeinanderfolgend.
: 301#SchülerIn: Stufe <EF> und SchülerIn <*> Wochen-Summe mit <2> Klausurtagen aufeinanderfolgend maximal <10>.
: 300#SchülerIn: Stufe <Q1> und SchülerIn <*> in keiner Woche <3> Klausurtage aufeinanderfolgend.
: 301#SchülerIn: Stufe <Q1> und SchülerIn <*> Wochen-Summe mit <2> Klausurtagen aufeinanderfolgend maximal <10>.
: 300#SchülerIn: Stufe <Q2> und SchülerIn <*> in keiner Woche <3> Klausurtage aufeinanderfolgend.
: 301#SchülerIn: Stufe <Q2> und SchülerIn <*> Wochen-Summe mit <2> Klausurtagen aufeinanderfolgend maximal <10>.
;Priorität IV (Kursstunden)
: 921#Optimiere: Stufe <EF> hat in der Summe mindestens <40> Klausurstunden, die laut Plan stattfinden.
: 921#Optimiere: Stufe <Q1> hat in der Summe mindestens <50> Klausurstunden, die laut Plan stattfinden.
: 921#Optimiere: Stufe <Q2> hat in der Summe mindestens <50> Klausurstunden, die laut Plan stattfinden.

Beim Errechnen des Klausurplans wird nun so vorgegangen: 
# Zunächst sind bei der Prioritäten II-IV hohe Werte zu wählen, die auf jeden Fall zu einer Lösung führen. 
# Bei Priorität I wird hingegen der Wert immer weiter reduziert, bis es keine Lösung mehr gibt. Der kleinste Wert mit einer Lösung wird beibehalten.
# Nun wird Priorität II so weit möglich reduziert und ebenfalls der kleinstmögliche Wert beibehalten.
# Das Gleiche wird für Priorität III und IV getan. 

Ein alternatives Vorgehen wäre es, alle Prioritäten als Ganzes in den Blick zu nehmen und eine ausgewogene Lösung zu erstellen. Dies hat sowohl Vor- als auch Nachteile, die von den konkreten Wünschen der Schulgemeinde abhängen.

=== Regelkatalog ===

Hinweis: In den Regeln können konkrete Werte festgelegt werden. Setzt man stattdessen ein Sternchen, so bedeutet dies "alle"!
{| class="wikitable" style="color:black; background-color:#ffffcc;" cellpadding="10"
|'''Regel'''
|'''Hinweise'''
|-
|style="width: 45%"|100#Klausurphasen: Stufe <A> und Kurs <nowiki><B></nowiki> schreibt <C> Klausuren.
|Sie legen fest, welcher Kurs einer Stufe welche Anzahl von Klausuren schreibt. Wird die Regel mehrfach verwendet, gilt für einen Kurs die letzte Anweisung.
|-
|101#Klausurphasen: Stufe <A> und Fach/Kursart <nowiki><B></nowiki>/<C> schreibt <D> Klausuren.
|Sie legen fest, welches Fach bzw. welche Kursart einer Stufe welche Anzahl von Klausuren schreibt. Wird die Regel mehrfach verwendet, gilt für einen Kurs die letzte Anweisung.
|-
|102#Klausurphasen: Stufe <A> und Kurs <nowiki><B></nowiki> mit Klausurnummer <C> entfällt.
|Sie legen fest, dass eine bestimmte Klausur eines Kurses nicht stattfindet. Dies ist z.B. sinnvoll, wenn eine übergeordnete Regel wie #100 in einem Spezialfall außer Kraft gesetzt werden soll.
|-
|103#Klausurphasen: Stufe <A> und Fach/Kursart <nowiki><B></nowiki>/<C> mit Klausurnummer <D> entfällt.
|Sie legen fest, dass eine bestimmte Klausur eines Faches bzw. einer Kursart nicht stattfindet. Dies ist z.B. sinnvoll, wenn eine übergeordnete Regel wie #100 in einem Spezialfall außer Kraft gesetzt werden soll.
|-
|104#Klausurphasen: Stufe <A> und Kurs <nowiki><B></nowiki>: Abstand zweier Klausuren ist mindestens <C> Tage.
|Sie legen einen Mindestabstand (in Tagen) zwischen zwei Klausuren eines bestimmten Kurses einer bestimmten Stufe fest. Sinnvoll ist es, diesen Wert für alle Kurse zu maximieren.
|-
|105#Klausurphasen: Stufe <A> und Fach/Kursart <nowiki><B></nowiki>/<C>: Abstand zweier Klausuren ist mindestens <D> Tage.
|Sie legen einen Mindestabstand (in Tagen) zwischen zwei Klausuren eines bestimmten Faches oder einer bestimmten Kursart einer bestimmten Stufe fest. Dies ist sinnvoll, um individuelle Abstandsregelungen für LKs oder einzelne Fächer zu realisieren.
|-
|106#Klausurphasen: Stufe <A> und Schiene <nowiki><B></nowiki>: Abstand zweier Klausuren ist mindestens <C> Tage.
|Sie legen einen Mindestabstand (in Tagen) zwischen zwei Klausuren einer bestimmten Blockungsschiene einer bestimmten Stufe fest. Dies ist sinnvoll, wenn eine Schule Klausuren schienenweise plant und hier (schienen-)individuelle Abstände realisieren will. 
|-
|150#Klausurlänge: Stufe <A> und Kurs <nowiki><B></nowiki> mit Klausurnummer <C> hat Länge <D>.
|Sie legen fest, welche Klausurlänge (in Schulstunden) eine bestimmte Klausur eines bestimmten Kurses einer bestimmten Stufe hat.
|-
|151#Klausurlänge: Stufe <A> und Fach/Kursart <nowiki><B></nowiki>/<C> mit Klausurnummer <D> hat Länge <E>.
|Sie legen fest, welche Klausurlänge (in Schulstunden) eine bestimmte Klausur eines bestimmten Faches bzw. einer bestimmten Kursart einer bestimmten Stufe hat.
|-
|152#Klausurlänge: Stufe <A> und Schiene <nowiki><B></nowiki> mit Klausurnummer <C> hat Länge <D>.
|Sie legen fest, welche Klausurlänge (in Schulstunden) eine bestimmte Klausur einer bestimmten Schiene einer bestimmten Stufe hat. Dies ist sinnvoll, um die Klausurlängen von LK-Schienen und GK-Schienen voneinander getrennt zu definieren.
|-
|170#Klausurtyp: Stufe <A> und Kurs <nowiki><B></nowiki> mit Klausurnummer <C> prüft mündlich über <D> Tage.
|Plant eine mündliche Prüfung für einen bestimmten Kurs einer bestimmten Stufe ein. Dazu muss auch die Klausurnummer und die Anzahl der benötigten Tage angegeben werden. Es wird dann keiner der betroffenen SchülerInnen eine Klausur in diesem Zeitraum haben. Im Klausurplan erscheint nur der erste betroffene Tag.
|-
|171#Klausurtyp: Stufe <A> und Fach/Kursart <nowiki><B></nowiki>/<C> mit Klausurnummer <D> prüft mündlich über <E> Tage.
|Plant eine mündliche Prüfung für ein bestimmtes Fach/eine bestimmte Kursart einer bestimmten Stufe ein. Dazu muss auch die Klausurnummer und die Anzahl der benötigten Tage angegeben werden. Es wird dann keiner der betroffenen SchülerInnen eine Klausur in diesem Zeitraum haben. Im Klausurplan erscheint nur der erste betroffene Tag.
|-
|200#Plan: Stufe <A> und Datum <nowiki><B></nowiki> bis Datum <C> gesperrt.
|Sie sperren einen Zeitraum von mehreren Tagen für Klausuren einer bestimmten Stufe. Dies ist beispielsweise sinnvoll, um lange Wochenenden und Ferien vom Programm berücksichtigen zu lassen.
|-
|201#Plan: Stufe <A> und Stunden <nowiki><B></nowiki> bis <C> gesperrt.
|Sie sperren einige Stunden grundsätzlich für Klausuren einer bestimmten Stufe. Dies ist beispielsweise sinnvoll, um bspw. keine Klausuren in den Nachmittag rechnen zu lassen. Diese Regel ignoriert mündliche Prüfungen!
|-
|202#Plan: Stufe <A> und Datum <nowiki><B></nowiki> und Stunden <C> bis <D> gesperrt.
|Sie sperren einige Stunden eines bestimmten Tages grundsätzlich für Klausuren einer bestimmten Stufe. Dies ist beispielsweise sinnvoll, um Termine der Schulgemeinde zu berücksichtigen, zu denen keine Klausuren stattfinden dürfen. Diese Regel ignoriert mündliche Prüfungen!
|-
|300#SchülerIn: Stufe <A> und SchülerIn <nowiki><B></nowiki> in keiner Woche <C> Klausurtage aufeinanderfolgend.
|Ein bestimmter Schüler bzw. eine bestimmte Schülerin hat in keiner Woche die angegebene Zahl aufeinander folgender Klausurtage (2 oder 3). Diese Regel ist insbesondere sinnvoll, um mit dem Sternchen alle SchülerInnen einer Stufe zu verarbeiten und eine gewisse Anzahl von aufeinander folgenden Klausurtagen zu verhindern.
|-
|301#SchülerIn: Stufe <A> und SchülerIn <nowiki><B></nowiki> Wochen-Summe mit <C> Klausurtagen aufeinanderfolgend maximal <D>.
|Sinnvoll als Ergänzung zu Regel 300. Man kann hier die Häufigkeit regulieren, mit der ein bestimmter Schüler bzw. eine bestimmte Schülerin einer bestimmten Jahrgangsstufe mehrere Klausurtage (2 oder 3) am Stück hat.
|-
|302#SchülerIn: Stufe <A> Schüler-Wochen-Summe mit <nowiki><B></nowiki> Klausurtagen aufeinanderfolgend maximal <C>.
|Diese Regel nimmt pro Jahrgangsstufe die Summe über alle SchülerInnen und Wochen und zählt aufeinanderfolgende Klausurtage (2 oder 3) und begrenzt diese.
|-
|303#SchülerIn: Stufen-Schüler-Wochen-Summe mit <A> Klausurtagen aufeinanderfolgend maximal <nowiki><B></nowiki>.
|Diese Regel nimmt die Summe über alle Jahrgangsstufen und SchülerInnen und Wochen und zählt aufeinanderfolgende Klausurtage (2 oder 3) und begrenzt diese.
|-
|304#SchülerIn: Stufe <A> und SchülerIn <nowiki><B></nowiki> mit Klausur der Fach/Kursart <C>/<D> impliziert danach keinen Klausurtag.
|Sie sperren den Tag nach einer Klausur eines bestimmten Faches oder einer bestimmten Kursart für einen bestimmten Schüler bzw. eine bestimmte Schülerin einer bestimmten Stufe. Wendet man die Regel für alle SchülerInnen einer bestimmten Stufe an, so kann man beispielsweise den Tag nach einer LK-Klausur frei halten.
|-
|305#SchülerIn: Stufe <A> und SchülerIn <nowiki><B></nowiki> mit Klausur der Fach/Kursart <C>/<D> impliziert davor keinen Klausurtag.
|Sie sperren den Tag vor einer Klausur eines bestimmten Faches oder einer bestimmten Kursart für einen bestimmten Schüler bzw. eine bestimmte Schülerin einer bestimmten Stufe. Wendet man die Regel für alle SchülerInnen einer bestimmten Stufe an, so kann man beispielsweise den Tag vor einer LK-Klausur frei halten.
|-
|306#SchülerIn: Stufe <A> und SchülerIn <nowiki><B></nowiki> mit Fach/Kursart <C>/<D> nicht in gleicher Woche mit Fach/Kursart <E>/<F>.
|Sie verhindern, dass für einen bestimmten Schüler bzw. eine bestimmte Schülerin einer bestimmten Stufe die angegebenen Klausuren eines Faches oder einer Kursart in der gleichen Woche liegen. Wendet man die Regel für alle SchülerInnen einer bestimmten Stufe an, so kann man grundsätzlich ausschließen, dass Klausuren von zwei bestimmten Fächern bzw. Kursarten in einer Woche liegen.
|-
|307#SchülerIn: Stufe <A> und SchülerIn <nowiki><B></nowiki> mit Fach/Kursart <C>/<D> in einer Woche begrenzen die Klausurtage auf <E>.
|Sie setzen eine Obergrenze für Klausurtage in einer Woche, bezogen auf einen bestimmten Schüler bzw. eine bestimmte Schülerin einer bestimmten Stufe, wenn ein bestimmtes Fach bzw. eine bestimmte Kursart in der Woche eine Klausur hat. Wendet man die Regel für alle SchülerInnen einer bestimmten Stufe an, so kann man beispielsweise ausschließen, dass in der Woche einer LK-Klausur noch zwei weitere Klausuren liegen.
|-
|400#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse (außer LK und mündl. Prüfungen) mit gleichem Fach.
|Sie definieren einen gemeinsamen Klausurbeginn für alle Klausuren des gleichen Fachs. Ausgenommen sind hier mündliche Prüfungen (die aber separat definiert werden müssen) und LK-Klausuren. Diese Regel ist nötig, wenn eine Schule Klausuren nicht in Stundenplanschienen schreibt, sondern nach Fächern. Wendet man diese Regel für alle Stufen an (Sternchen), so wird jede Stufe für sich gerechnet. 
|-
|401#Klausurbeginn gemeinsam: Stufe <A> für Kurs <nowiki><B></nowiki> und Kurs <C> (außer mündl. Prüfungen).
|Sie definieren einen gemeinsamen Klausurbeginn für alle Klausuren von zwei bestimmten Kursen. Mündliche Klausuren werden ignoriert.
|-
|402#Klausurbeginn gemeinsam: Stufe <A> für Kurs <nowiki><B></nowiki> und allen Kursen mit Fach/Kursart <C>/<D> (außer mündl. Prüfungen).
|Sie definieren einen gemeinsamen Klausurbeginn für alle Klausuren eines bestimmten Kurses mit allen Kursen eines Faches bzw. einer Kursart. Sie könnten damit beispielsweise dafür sorgen, dass die Klausuren eines L8-Kurses gemeinsam geschrieben wird mit alles L6-Kursen. Mündliche Klausuren werden ignoriert.
|-
|403#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse mit Fach/Kursart <nowiki><B></nowiki>/<C> (außer mündl. Prüfungen).
|Sie definieren einen gemeinsamen Klausurbeginn für alle Klausuren eines bestimmten Faches bzw. einer bestimmten Kursart. Sie könnten damit beispielsweise dafür sorgen, dass alle Mathematik-Leistungskurse parallel schreiben. Mündliche Klausuren werden ignoriert.
|-
|404#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse mit Fach/Kursart <nowiki><B></nowiki>/<C> und alle mit Fach/Kursart <D>/<E> (außer mündl. Prüfungen).
|Sie definieren einen gemeinsamen Klausurbeginn für alle Klausuren eines bestimmten Faches bzw. einer bestimmten Kursart mit allen Klausuren eines anderen Faches bzw. einer anderen Kursart. Sie könnten damit beispielsweise dafür sorgen, dass alle Sozialwissenschaften-Kurse ihre Klausuren parallel zu den Sozialwissenschaften (Englisch)-Kursen schreiben. Mündliche Klausuren werden ignoriert.
|-
|405#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse des gleichen Tages (außer mündl. Prüfungen).
|Sie legen fest, dass alle Klausuren einer Stufe, die auf einen Tag gerechnet werden, in der gleichen Stunde beginnen. Dies ist beispielsweise von Vorteil, wenn man möglichst wenige Räume und möglichst wenige Aufsichten einsetzen möchte. Mündliche Klausuren werden ignoriert.
|-
|406#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse der gleichen Lehrkraft pro Fach/Kursart (außer mündl. Prüfungen).
|Sie legen fest, dass alle Kurse einer Stufe und eines Faches bzw. einer Kursart, die durch die gleiche Lehrkraft unterrichtet werden, zur gleichen Zeit beginnen sollen. Dies minimiert die Anzahl von Klausuren, die eine Lehrkraft konzipieren muss und ist eine weniger große Einschränkung im Vergleich zu Regel 403. Mündliche Klausuren werden ignoriert.
|-
|407#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse der Schiene <nowiki><B></nowiki> (außer mündl. Prüfungen).
|Sie legen fest, dass alle Kurse einer Stufe und einer (Blockungs-)Schiene des Stundenplans zur gleichen Zeit beginnen sollen. Mündliche Klausuren werden ignoriert.
|-
|408#Klausurbeginn gemeinsam: Stufe <A> für Kurs <nowiki><B></nowiki> und Kurs <C> für Klausurnummer <D> (auch mündl. Prüfungen).
|Im Unterschied zur Regel 400-407 sind hier mündliche Prüfungen berücksichtigt. Damit können unterschiedliche Kurse gleichzeitig für mündliche Prüfungen verplant werden.
|-
|409#Klausurbeginn gemeinsam: Stufe <A> für alle Kurse mit Fach/Kursart <nowiki><B></nowiki>/<C> für Klausurnummer <D> (auch mündl. Prüfungen).
|Im Unterschied zur Regel 400-407 sind hier mündliche Prüfungen berücksichtigt. Damit können unterschiedliche Fächer/Kursarten gleichzeitig für mündliche Prüfungen verplant werden.
|-
|450#Klausurbeginn: Ist in Stufe <A> für alle Kurse aus Schiene <nowiki><B></nowiki> mit Klausurnummer <C> am Datum <D> in Stunde <E>.
|Sie legen den Beginn einer bestimmten Klausur einer Stufe und eine (Blockungs-)Schiene des Stundenplans manuell fest.
|-
|451#Klausurbeginn: Ist in Stufe <A> für Kurs <nowiki><B></nowiki> mit Klausurnummer <C>  am Datum <D> in Stunde <E>.
|Sie legen den Beginn einer bestimmten Klausur eines bestimmten Kurses einer Stufe manuell fest.
|-
|452#Klausurbeginn: Ist in Stufe <A> für Fach/Kursart <nowiki><B></nowiki>/<C> mit Klausurnummer <D> am Datum <E> in Stunde <F>.
|Sie legen den Beginn einer bestimmten Klausur einer Stufe und eines Faches bzw. einer Kursart manuell fest.
|-
|453#Klausurbeginn: Ist in Stufe <A> für Kurs <nowiki><B></nowiki> mit Klausurnummer <C> zwischen Datum <D> und <E>.
|Sie legen einen Datumsbereich für den Beginn einer bestimmten Klausur eines bestimmten Kurses einer Stufe fest. Dies ist sinnvoll, um Klausuren zweier Quartale voneinander zu trennen.
|-
|454#Klausurbeginn: Ist in Stufe <A> für Fach/Kursart <nowiki><B></nowiki>/<C> mit Klausurnummer <D> zwischen Datum <E> und <F>.
|Sie legen einen Datumsbereich für den Beginn einer bestimmten Klausur eines bestimmten Faches bzw. einer Kursart einer Stufe fest. Dies ist sinnvoll, um Klausuren zweier Quartale voneinander zu trennen.
|-
|455#Klausurbeginn: Ist in Stufe <A> generell verboten in Stunde <nowiki><B></nowiki> (außer mündl. Prüfungen).
|Sie sperren eine bestimmte Stunde im Stundenplan einer Stufe für den Klausurbeginn. Mündliche Klausuren werden ignoriert. 
|-
|456#Klausurbeginn: Ist in Stufe <A> generell verboten für Kursart <nowiki><B></nowiki> am Wochentag <C> von Stunde <D> bis <E>  (außer mündl. Prüfungen).
|Sie sperren eine Stundenbereich eines bestimmten Wochentages (alle Wochen) im Stundenplan einer Stufe für den Klausurbeginn einer Kursart. Mündliche Klausuren werden ignoriert. 
|-
|900#Optimiere: Stufe <A> hat maximal <nowiki><B></nowiki> Klausurtage.
|Sie legen die maximale Anzahl von Klausurtagen einer Stufe fest. Dies ein Optimierungsparameter, der beim Erstellen des Klausurplans heruntergerechnet werden muss, um unterschiedliche Klausuren zusammen zu legen.
|-
|901#Optimiere: Die Schule hat maximal <A> Klausurtage.
|Sie legen die maximale Anzahl von Klausurtagen aller Stufen zusammen fest. Im Vergleich zu Regel 900 führt er dazu, dass Klausuren von mehreren Stufen mit höherer Wahrscheinlichkeit am gleichen Tag landen und dadurch sehr volle Klausurtage (hohe Anzahl an Klausurschreibern führen evtl. zu einem Raum-/Aufsichtsproblem) entstehen können, wenn man nicht mit einer Zellenregel (vgl. Regel 903-905) ein Maximum festlegt. 
|-
|902#Optimiere: Stufe <A> hat mit Stufe <nowiki><B></nowiki> höchstens <C> gemeinsame Klausurtage.
|Zur besseren Verteilung können Sie einen Höchstwert für gemeinsame Klausurtage zweier Stufen festlegen. Die Stunden des jeweiligen Tages sind dabei egal.
|-
|903#Optimiere: Alle Stufen haben höchstens <A> gemeinsame Klausurtage.
|Zur besseren Verteilung können Sie einen Höchstwert für gemeinsame Klausurtage aller Stufen festlegen. Die Stunden des jeweiligen Tages sind dabei egal und es zählt auch eine Klausur als "gemeinsam", wenn sie nur zwei (von drei oder mehr) Stufen betrifft.
|-
|904#Optimiere: Stufe <A> hat mit Stufe <nowiki><B></nowiki> höchstens <C> gemeinsame Klausurstunden.
|Mit dieser Regel kann die höchste Anzahl an gemeinsamen Klausurstunden zweier Stufen festgelegt werden. Dies ist sinnvoll, um große Anzahlen von Klausurschreibern zu verhindern, die ggf. zu einem Raum- bzw. Aufsichtsproblem führen. Eine gemeinsame Klausurstunde ist eine Stunde an einem bestimmten Tag, in der in mehr als einer Jahrgangsstufe eine Klausur stattfindet.
|-
|905#Optimiere: Alle Stufen haben höchstens <A> gemeinsame Klausurstunden.
|Mit dieser Regel kann die höchste Anzahl an gemeinsamen Klausurstunden aller Stufen festgelegt werden. Dies ist sinnvoll, um große Anzahlen von Klausurschreibern zu verhindern, die ggf. zu einem Raum- bzw. Aufsichtsproblem führen. Eine gemeinsame Klausurstunde ist eine Stunde an einem bestimmten Tag, in der in mehr als einer Jahrgangsstufe eine Klausur stattfindet.
|-
|906#Optimiere: Alle Stufen zusammen haben am Datum <A> in Stunde <nowiki><B></nowiki> höchstens <C> KlausurschreiberInnen.
|Sie legen eine Höchstgrenze an Klausurschreibern über alle Stufen für eine bestimmte Stunde eines bestimmten Datums fest. Achtung, rechenintensive Regel, falls für alle Daten und alle Stunden gerechnet wird! 
|-
|907#Optimiere: Stufe <A> hat pro Stundenplanzelle (Summe über alle Wochen) maximal <nowiki><B></nowiki> Klausurtermine.
|Sie legen eine Höchstgrenze für die Anzahl an Klausuren fest, die eine bestimmte Stunde eines bestimmten Wochentages (Summe über alle Wochen des Klausurplans) betreffen.
|-
|908#Optimiere: Stufe <A> hat pro Stundenplanzelle (Summe über alle Wochen) höchstens <nowiki><B></nowiki> mal maximal <C> (oder mehr) Klausurtermine.
|Ergänzung zu Regel 903: Sie legen eine Höchstgrenze für die Anzahl an Klausuren fest, die eine bestimmte Schulstunde eines bestimmten Wochentages (Summe über alle Wochen des Klausurplans) betreffen.
|-
|909#Optimiere: Stufe <A> hat pro Stundenplanzelle (Summe über alle Wochen) am Tag <nowiki><B></nowiki> in Stunde <C> maximal <D> Klausurtermine.
|Sie legen eine Höchstgrenze für die Anzahl an Klausuren fest, die eine bestimmte Schulstunde eines bestimmten Tages (Summe über alle Wochen des Klausurplans) betreffen.
|-
|910#Optimiere: Stufe <A> mit Kurs <nowiki><B></nowiki> hat maximal <C> Unterrichtsstunden mit fehlenden Schülern.
|Sie legen eine Höchstgrenze für Stunden eines bestimmten Kurses fest, in denen SchülerInnen aufgrund von Klausuren fehlen. Verwendet man *, so gilt die Höchstgrenze "pro Kurs".
|-
|911#Optimiere: Stufe <A> alle Kurse in Summe haben maximal <nowiki><B></nowiki> Unterrichtsstunden mit fehlenden Schülern.
|Kursübergreifende Variante von Regel 910. Sie legen die Summe von Unterrichtsstunden einer bestimmten Stufe fest, in denen SchülerInnen aufgrund von Klausuren fehlen. 
|-
|912#Optimiere: Stufenübergreifend gibt es in Summe maximal <A> Unterrichtsstunden mit fehlenden Schülern.
|Stufenübergreifende Variante von Regel 910. Sie legen die Summe von Unterrichtsstunden aller Stufen fest, in denen SchülerInnen aufgrund von Klausuren fehlen. 
|-
|920#Optimiere: Stufe <A> und Fach/Kursart <nowiki><B></nowiki>/<C> hat mindestens <D> Klausurstunden, die nach Plan stattfinden.
|Die Klausuren werden so geplant, dass eine bestimmte Mindestanzahl von Klausurstunden eines Faches bzw. einer Kursart innerhalb der regulären Unterrichtszeit der einzelnen Kurse stattfindet. Achtung: Wenn alle Kurse eines Faches parallel schreiben sollen, darf die Mindestzahl nicht zu hoch gewählt werden.
|-
|921#Optimiere: Stufe <A> hat in der Summe mindestens <nowiki><B></nowiki> Klausurstunden, die laut Plan stattfinden.
|Fächerübergreifende Variante von Regel 920. Wenn bei Stufe * gewählt wird, gilt die gewählte Mindestzahl von Klausurstunden "pro Stufe".
|-
|922#Optimiere: Insgesamt gibt es mindestens <A> Klausurstunden, die laut Plan stattfinden.
|Fächer- und Stufenübergreifende Variante von Regel 920. 
|}

===Ergebnisse einsehen===

Im Reiter "Ausgabe" können Sie die Ergebnisse der durchgeführten Rechnungen sehen. Neben einigen relevanten Statistiken sehen Sie hier auch den kompletten Klausurplan nach Jahrgangsstufen. Hier ein Eindruck:

[[Datei:Multi Klausurplaner Klausuren pro Tag.png|500px|Übersicht über die klausurschreibenden Klausuren pro Tag]]
[[Datei:Multi Klausurplaner Zellenübersicht.png|500px|Belegung einzelner Stunden mit Klausuren (wochenübergreifend)]]
[[Datei:Multi Klausurplaner Klausurplan.png|500px|Klausurplan Beispielwoche]]

===Speichern und Rückimport===

Eine Rechnung, die als Klausurplan verwendet werden soll, kann gespeichert werden. Beim Speichern erstellt das Programm mehrere Ausgabe-Dateien:
* Pro Jahrgang eine XML-Datei, die in Kurs42 als Klausurblockung importiert werden kann. Die Zuordnung zu den Quartalen geschieht über die Klausurnummern.
* Die Datei Ausgabe.html enthält die Informationen, die auch der Multi-Klausurplaner nach erfolgter Rechnung anzeigt.
* Die Datei Statistik_Schueler.csv enthält pro SchülerIn die Gesamtzahl der Klausuren (AnzahlKlGes), die Anzahl der Wochen mit 2 bzw. 3 Klausuren (AnzWo2Kl AnzWo3Kl) und die Wochenanzahl mit 2 bzw. 3 aufeinanderfolgenden Klausuren (AnzWo2FoKl bzw. AnzWo3FoKl)
* Die Datei Statistik_Kurse_nach_Kursnamen enthält pro Kurs alle Klausurstunden (Datum/Stunde) in denen SuS fehlen. Es wird angezeigt wie viele SuS (AnzKlSchueler) von wie vielen (AnzGesSchueler) fehlen.
* Die Datei Statistik_Kurse_nach_Datum enthält die gleichen Informationen wie die vorherige Datei, ist aber nach Datum sortiert.

Rückimport der XML-Datei in Kurs42:
* Wählen Sie in Kurs42 den Reiter "Import/Export" und danach "Klausuren Im/Export" und "Klausurtermine aus XML importieren". 
* Die Frage, ob die existierenden Klausurtermine gelöscht werden sollen, ist standardmäßig zu bejahen, kann im Einzelfall aber auch verneint werden, falls erforderlich (z.B. wenn Quartale einzeln berechnet wurden und getrennt importiert werden).
* Verwenden Sie nun Ihren Report, um die Daten weiter zu verarbeiten oder auszugeben.

===Beispiele===

..wird ausgebaut...
```
