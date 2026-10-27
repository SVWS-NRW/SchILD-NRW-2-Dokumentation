---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Abiturdurchlauf"
---

# Abiturdurchlauf

Gesicherte Wiki-Seite · Namensraum 0 · Version 2576 · Stand 2014-10-23.

[Lesbaren Artikel öffnen](/zeugnisse/sekundarstufen/abiturdurchlauf) · [Originaldaten herunterladen](/dateien/quellen/seite-630.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Dieses Tutorial soll helfen, die kompletten Abiturberechnungen fehlerfrei durchzuführen. Dazu wird erläutert, welche Vorbereitungen für die Abiturberechnungen zu treffen sind, in welcher Reihenfolge die Berechnungen durchgeführt werden sollten und es wird auf mögliche Fehlerquellen hingewiesen. Genutzt werden dazu die [[Gruppenaktionen Abitur|Gruppenaktionen für das Abitur]] und der Karteireiter [[Abitur]]. Diesen Seiten kann man jeweils weitere Informationen entnehmen. Alle Berechnungen sollten für den gesamten Abiturjahrgang über die zur Verfügung stehenden Gruppenprozesse durchgeführt werden. Jede Aktion bzw. Berechnung kann aber auch für einen einzelnen Schüler unter dem Karteireiter "Abitur" vorgenommen werden. 

Der gesamte Abiturdurchlauf gliedert sich in mehrere Phasen.

<ol>
<li> Zuerst müssen die Berechnungen für die Abiturzulassung durchgeführt werden. Voraussetzung ist natürlich, dass alle Leistungsdaten am Ende der Qualifikationsphase 2 in Schild vorliegen. <br />
Für die Abiturzulassungsberechnung werden die ersten drei Gruppenprozesse der [[Gruppenaktionen Abitur|Gruppenaktionen für das Abitur]] benötigt. Der erste Gruppenprozess [[Leistungsdaten holen]] bildet die Grundlage für alle weiteren Abitur-Gruppenprozesse. Wird dieser Prozess gestartet, so werden alle Noten der ausgewählten Schülermenge für die weiteren Abiturberechnungen unter dem Karteireiter "Abitur" zur Verfügung gestellt. Dort schon vorhandene Daten werden überschrieben.<br /> <br />

[[Datei:AbiturTut01.jpg|600px]]<br /> <br />

Sollten nach Durchführung des Prozesses für den gesamten Abiturjahrgang noch Änderungen der Daten bei einzelnen Schülern vorgenommen werden müssen, so kann man die Aktualisierung der Daten für einen einzelnen Schüler auch unter dem Karteireiter "Abitur" durch Klicken auf die Schaltfläche "Leistungsdaten holen" durchführen.<br />
Direkt danach kann der Gruppenprozess [[Kurse algorithmisch markieren]] durchgeführt werden. Dieser markiert die für die Abiturzulassung zu belegenden Kurse. Diese werden unter dem Karteireiter "Abitur" türkis hinterlegt angezeigt.<br /> <br />

[[Datei:AbiturTut02.jpg|400px]]<br /><br /> 

Der Gruppenprozess gibt ebenfalls aus, welche Belegungsfehler bei der Prüfung aufgetreten sind. Diese Schülerinnen und Schüler muss man dann noch einmal gesondert unter die Lupe nehmen.<br /> 
Sollte es nötig sein, an dieser Stelle den Algorithmus zu übersteuern, so kann man unter dem Karteireiter "Abitur" einen Doppelklick auf die Punktzahlen durchführen, um damit zwischen Markierung des Kurses (türkis hinterlegt) und Nichtmarkierung des Kurses (weiß hinterlegt) hin- und herzuschalten.<br />
Für einen einzelnen Schüler kann der Prozess auch unter dem Karteireiter "Abitur" durch Klicken auf die entsprechende Schaltfläche initialisiert werden. Dies gilt auch für den nun kommenden Prozess. <br />
Zum Abschluss der Zulassungsberechnung muss nun noch der Prozess [[Abitur-Zulassung berechnen]] durchgeführt werden. Da die relevanten Kurse markiert sind, realisiert dieser Prozess die Berechnung der Abiturzulassung (Vorhandene Daten werden überschrieben). Die genauen Ergebnisse der Berechnung können dann unter dem Karteireiter "Abitur" unten links unter Block I eingesehen werden.<br /><br /> 

[[Datei:AbiturTut03.jpg|350px]]<br /> <br />

Der Prozess gibt aber am Ende auch noch eine Textdatei aus, in der aufgelistet ist, welche Schüler für die Abiturprüfung zugelassen werden und welche nicht.<br />
 
<li> Die zweite Phase der Abiturberechnungen findet statt, sobald die Prüfungsergebnisse der schriftlichen und mündlichen Prüfungen vorliegen. In der Regel liegen die mündlichen Ergebnisse als Erstes vor und können auch direkt eingegeben werden. Danach folgt die Eingabe der Ergebnisse der schriftlichen Prüfungen. Eine sehr komfortable Möglichkeit bietet hier der Gruppenprozess [[Prüfungsergebnisse eingeben]]. Dort stehen mehrere Sortierung- und Filtermöglichkeiten zur Verfügung, um die Eingabe der Ergebnisse möglichst leicht zu gestalten. Genauere Erläuterungen findet man unter dem entsprechenden Gruppenprozess.<br />
Sind die Ergebnisse der schriftlichen Prüfungen eingegeben, so kann der Gruppenprozess [[Mdl. Prüfungen A1-A3 festlegen]] durchgeführt werden. Der Prozess legt fest, in welchen Fächern zusätzliche mündliche (Abweichungs- bzw. Bestehens-) Prüfungen angesetzt werden müssen. In einer Textdatei wird ausgegeben, welche Schüler zusätzliche Prüfungen ablegen müssen. Sollte bei einem Schüler doch noch eine Note im ersten bis dritten Abiturfach fehlen, wird "Abiturergebnisse unvollständig" ausgegeben. Die festgesetzten Prüfungen können dann unter dem Karteireiter "Abitur" eingesehen werden.<br /> 
In der Spalte "MPRF" (= Reihenfolge der mündlichen Prüfungen im 1. - 3. Fach) muss dann die Reihenfolge festgelegt werden, in der die Prüfungen stattfinden sollen. Über die [[Druckausgabe]] und das passende Formular können dann direkt die Informationen für die Fachprüfungsausschüsse ausgedruckt werden.<br /><br /> 

[[Datei:AbiturTut04.jpg|350px]]<br /><br /> 

Sollten nachträglich noch Änderungen bei einem einzelnen Schüler vorgenommen werden müssen, so gilt auch jetzt wieder, dass man den Prozess durch die entsprechende Schaltfläche für den einzelnen Schüler initialisieren kann.<br />
Wurden durch den obigen Prozess zusätzliche Prüfungen angesetzt, so kann man erst nach Eingabe der entsprechenden Ergebnisse unter dem Karteireiter "Abitur" mit dem abschließenden Gruppenprozess [[Gesamtergebnis berechnen]] fortfahren. <br /><br /> 

[[Datei:AbiturTut05.jpg|350px]]<br /><br /> 

Der Prozess berechnet nun abschließend, ob die Abiturprüfung bestanden bzw. nicht bestanden wurde. Die Ergebnisse der Berechnung können dann unter dem Karteireiter "Abitur" unten links unter Abitur eingesehen werden, werden aber auch wieder in einer Textdatei ausgegeben.<br /><br /> 

[[Datei:AbiturTut06.jpg|350px]]<br /> 

<li> Die [[Gruppenaktionen Abitur|Gruppenaktionen für das Abitur]] stellen allerdings noch drei weitere Prozesse zur Verfügung. Die ersten beiden dienen dazu, weitere Informationen zu den Schülern für das Abiturzeugnis zu erfassen. Dies sind die Gruppenprozesse [[Zusatzdaten (Latinum...) eingeben]] und [[Gesamt-Fehlstunden berechnen]].<br />

Der letzte Gruppenprozess [[Abitur-Jahr setzen (für Statistik)]] bildet den endgültigen Abschluss für die Berechnungen in SchILD und setzt bei allen ausgewählten Schülern das Abitur-Jahr. Dies ist besonders für die Statistik und evtl. weiteren Datenaustausch wichtig, damit z.B. die richtigen Ergebnisse für den Export der Abiturergebnisse zur Verfügung gestellt werden können. 

</ol>


----

[[#top|Zum Seitenanfang]]

[[Schild-NRW-Tutorials|Zurück zu den Tutorials]]
```
