---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Ausgewählte Beispiele aus der BASIC-Sammlung"
---

# Ausgewählte Beispiele aus der BASIC-Sammlung

Gesicherte Wiki-Seite · Namensraum 0 · Version 3811 · Stand 2016-02-23.

[Lesbaren Artikel öffnen](/reporting/erstellung/ausgewaehlte-beispiele-aus-der-basic-sammlung) · [Originaldaten herunterladen](/dateien/quellen/seite-728.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Wenn Sie anfangen, mit dem Reportexplorer zu arbeiten, bietet es sich an, die BASIC-Reportsammlung [[http://www.svws.nrw.de/index.php?id=schildformulare]] herunterzuladen. Sie haben damit Beispiele aus den verschiedenen Anwendungsbereichen zur Verfügung, die Sie als Grundlage verwenden können. 

Einzelne Reports aus der Sammlung werden in diesem Kapitel genauer vorgestellt.

Vorausgesetzt ist, dass Sie die Reportsammlung im Ordner '''Schild-Reports''' abgespeichert haben und die mitgelieferten Briefköpfe und -füße in den Ordner '''Header_Footer''', der ein direkter Unterordner von Schild-Reports sein muss, verschoben haben.


== DIN-Erzieherbrief (Ordner: A4_Mitteilungen) ==

Auf der Grundlage des DIN-Erzieherbriefes können einfach und schnell Briefe an die Erziehungsberechtigten erstellt werden. Wenn Sie den Brief aufrufen, erhalten Sie folgende Ansicht:


[[Datei:Erzieherbrief-00.png|300px]]


In diesem Report ist direkt die Aufforderung enthalten, den Brieftext im Reportexplorer anzupassen. Möglicherweise möchten Sie auch weitere Kleinigkeiten ändern.

Wenn Sie den Report ''DIN-Erzieherbrief.rtm'' zur Bearbeitung aufrufen, sehen Sie die Struktur des Briefes. Im Kopfbereich sind zwei dynamisch ladbare Briefköpfe untergebracht, im Detailbereich finden Sie den eigentlichen Brieftext, im Fußbereich befindet sich ein dynamisch ladbarer Fuß.


[[Datei:Erzieherbrief-01.png|200px]]


Klicken Sie nun mit der rechten Maustaste auf den Brieftext, dann können Sie ihn zum Bearbeiten öffnen.


[[Datei:Erzieherbrief-02.png|200px]]


[[Datei:Erzieherbrief-03.png|200px]]


Nachdem Sie die Änderungen beim Schließen des Editors gespeichert haben, lassen sich die Änderungen in der Vorschau überprüfen. Speichern Sie anschließend das erstellte Briefformular unter einem aussagekräftigen Namen ab.

Wenn Sie nun die passende Schülergruppe auswählen, können Sie den Brief an die Erziehungsberechtigten ausdrucken!


----

Es fällt auf, dass der Brieftext im Vergleich zur Anrede verrutscht ist. Um den Brieftext, also hier das RichText-Element richtig auszurichten, öffnen Sie im Reportexplorer den Header ''Erzieher_Kopf.rtm'', der in den Erzieherbrief eingebunden wird. 



Wenn Sie nun das Element DBText1, welches die formale Anrede enthält, mit der rechten Maustaste anklicken, finden Sie im Kontextmenü den Eintrag ''Position''.

[[Datei:Erzieherbrief-08.png|200px]]

Die Position von links hat den Wert 20,373.

[[Datei:Erzieherbrief-07.png|200px]]


Diese Zahl merken Sie sich und öffnen über den Reportexplorer nun wieder den Erzieherbrief. Dort klicken Sie - wiederum mit der rechten Maustaste - auf das RichText-Feld, das den Brieftext enthält. Öffnen Sie auch hier den Menüpunkt ''Position'' und geben Sie den Wert 20,373 hier ein. 

[[Datei:Erzieherbrief-09.png|200px]]

Bestätigen Sie Ihre Eingabe mit ''Anwenden'', Sie sehen dann, wie das RichText-Feld die Position ändert. Überprüfen Sie das Ergebnis in der Vorschau.

[[Datei:Erzieherbrief-10.png|200px]]



== Unfallanzeige Unfallkasse NRW (Ordner: A1_Formulare) ==


Das Formular für die Unfallanzeige muss vor dem Einsatz zunächst mit den schulspezifischen Angaben zum zuständigen Gemeindeunfallversicherungsverband und der Versicherungsnummer gefüllt werden. Wenn Sie anschließend den Report aufrufen, werden Sie mit Hilfe von Texteingabefeldern durch das Formular geleitet.


[[Datei:Unfallanzeige-01.png|200px]]


Öffnen Sie den Report ''Unfallanzeige Unfallkasse NRW.rtm'' zur Bearbeitung. Wie im Formular beschrieben, verändern Sie die drei RichText-Felder, in denen die schulspezifischen Angaben eingetragen werden sollen. Diese Anpassung müssen Sie nur einmal vornehmen. Anschließend speichern Sie das veränderte Formular.


[[Datei:Unfallanzeige-02.png|200px]]


Änderungen am Layout können Sie wie in allen anderen Formularen vornehmen. Wenn beispielsweise der Schulname und die Schulbezeichnung so lang sind, dass Textteile übereinander liegen, schieben Sie die Felder entsprechend auseinander.

Wenn Sie dagegen Änderungen an den Texteingabefeldern vornehmen möchten, müssen Sie sich die Programmierung ansehen. Dazu öffnen Sie den Report zum Bearbeiten und wechseln dann auf den Karteireiter ''Berechnungen''. Klicken Sie nun auf das Berichts-Element ''Report'' (oben auf der linken Seite) und wählen Sie das grün unterlegte Ereignis ''BeforePrint'' aus.    


[[Datei:Unfallanzeige-03.png|200px]]


Im unteren Bildschirmbereich sollte nun die ''procedure ReportBeforePrint'' zu sehen sein, in der die Texteingabefelder aktiviert werden.


Zunächst werden verschiedene Variablen (z.B. Wochentag, Datum, Hergang, Schilderung) deklariert, die beim Aufruf des Reports durch die Eingaben des Nutzers mit Inhalt gefüllt werden.

[[Datei:Unfallanzeige-04.png]]

 
Durch die Anweisung "Zeuge := StringInput ( 'Name u. Anschrift von Zeugen ' , ' ');" wird der Variablen ''Zeuge'' die Eingabe des Texteingabefeldes, das durch ''StringInput'' erzeugt wird, zugewiesen. In den Klammern steht zunächst der Text, der angezeigt wird, die beiden Hochkommata hintereinander erzeugen ein leeres Eingabefeld. Sie können hier auch schon Vorschläge für die Eingabe machen, wie es für die Variable Augenzeuge erfolgt: "	Augenzeuge := StringInput ('War diese Person Augenzeuge?' , 'JA');". Dies erleichtert dem Benutzer die Eingabe, da er einfach auf OK klicken kann.

Nach dem Einlesen des Textes in die jeweilige Variable wird der Inhalt der Variablen an das Label-Feld übergeben, das an der entsprechenden Stelle im Formular steht: "Label61.Text := Zeuge;"

[[Datei:Unfallanzeige-05.png]]

 
Wenn Sie ein größeres Eingabefeld, z.B. bei der Schilderung des Unfallhergangs bevorzugen, können Sie es über den Aufruf des Editors erreichen, die Zeile würde dann lauten:

"Hergang := EditPlainText('Schildern Sie hier bitte den Unfallhergang und geben Sie die Art der Veranstaltung bzw. die Sportart bei Sportunfällen an');"

[[Datei:Unfallanzeige-06.png | 200px]]

== Leistungsuebersicht_akt_HJ_A3.rtm (Ordner: A5_Leistungsübersichten --> Uebersichten Sekundarstufe 1) ==

Im Ordner A5_Leistungsübersichten finden Sie Formulare unterschiedlicher Komplexität für die Leistungsübersichten der Sekundarstufe I und II. Die Leistungsübersicht ''Leistungsuebersicht_akt_HJ_A3.rtm'' listet die Leistungen der Schüler im aktuellen Halbjahr auf. Berechnungen werden in diesem Formular nicht durchgeführt. 

''Hinweis:'' Für diesen Report sollten Sie nur '''eine''' Klasse auswählen, für die die Übersicht ausgegeben wird. Wenn Sie mehrere Klassen auswählen, dann werden immer alle Fächer aller Klassen angezeigt (vgl. Funktion [[Faechervorbelegen]], die für den gesamten Report gilt).

[[Datei:Leistungsuebersicht-01.png|200px]]


Die Leistungsübersicht ist tabellarisch aufgebaut, wobei die Tabelle abhängig von den zugewiesenen Fächern erstellt und gefüllt wird. Somit ist die Spaltenanzahl der Tabelle nicht fest vorgegeben, sondern abhängig von der verwendeten Stundentafel bzw. von den Fächern, die die ausgewählten Schüler im aktuellen Halbjahr haben.
 
Wenn Sie den Report im Bearbeitungsmodus öffnen, sehen Sie, dass zwei Subreports mit der Datenquelle ''Fachuebersicht'' benutzt werden. 

[[Datei:Leistungsuebersicht-02.png|200px]]

Der Subreport1 steht im Kopf des Reports, hier wird einmal die Überschriftenzeile für die Tabelle erzeugt, in dem alle Fächer, die den ausgewählten Schülern zugeordnet sind, ausgegeben werden. Dazu wird für jedes Fach im Subreport eine Tabellenzelle als Kästchen mit dem zugehörigen Fachkürzel angelegt.



[[Datei:Leistungsuebersicht-03.png|200px]]

Der Subreport durchläuft dabei die gesamte Liste aller Fächer, die im aktuellen Abschnitt in dieser ausgewählten Gruppe vorkommen. Damit das gelingt, wird im Hauptbericht beim Ereignis "BeforePrint" die Funktion [[Faechervorbelegen]] aufgerufen.

[[Datei:Leistungsuebersicht-04.png|200px]]

Die durch die Funktion [[Faechervorbelegen]] gefüllte interne Tabelle wird beim Ereignis "AfterPrint" durch den Aufruf der Funktion [[ResetFaechervorbelegung]] wieder geleert, damit bei einem erneuten Aufruf des Reports nur die zugehörigen Fächer angezeigt werden.

Die Daten aus dieser internen Tabelle werden auch im Subreport2 verwendet, der sich im Detailbereich des Reports befindet.

[[Datei:Leistungsuebersicht-05.png|200px]]

Hier wird für jedes Fach aus der Datenquelle ''Fachuebersicht'' die Note in Kurzform, also als Ziffer, ausgegeben. Wird das Fach als Kurs unterrichtet, dann wird zusätzlich die Kurzbezeichnung des Kurses mit ausgegeben.

== S2 Konferenz LeistÜbersicht.rtm (Ordner: A6_Konferenzen\Zeugniskonferenzen\Sekundarstufe II) ==
Mit diesem Report können Sie eine Leistungsübersicht für jeden Schüler über mehrere Schulhalbjahre hinweg erstellen. Im Beispiel sind nur die Noten für die Q1 eingetragen, daher ist die Zeile für die Q2.1 nicht gefüllt.

[[Datei:Leistungsuebersicht-06.png | 200px]]


Wenn Sie nun in die Bearbeitungsansicht des Reports wechseln, dann sehen Sie, dass neben der Datenquelle ''Leistungsuebersicht''  zusätzlich die Datenquelle ''Schuelerlaufbahn'' genutzt wird. Die ''Schuelerlaufbahn'' ermöglicht es, auf die Daten der abgeschlossenen Abschnitte in der schuelerlaufbahn zuzugreifen.


[[Datei:Leistungsuebersicht-07.png | 200px]]


Innerhalb eines abgeschlossenen Abschnittes kann dann auf die zugehörige Leistungsübersicht zugegriffen werden.


[[Datei:Leistungsuebersicht-08.png | 200px]]


Damit nicht alle Abschnitte von Jahrgang 5 an beginnend aufgelistet werden, sind in diesem Report nur die Abschnitte ab Jahrgangsstufe 11 auf sichtbar gesetzt worden. Sie finden die Programmierung im Detailbereich von SubReport1 beim Ereignis ''BeforePrint''.

[[Datei:Leistungsuebersicht-09.png | 200px]]


Um die Noten, die schlechter als ausreichend sind, farblich zu markieren, müssen Sie in die Berechnungen von SubReport2 wechseln. Beim Ereignis ''OnGetText'' des Datenbankfeldes ''DBText5'' ist die zugehörige Programmierung zu finden.  Die Variable "sw" (für schwarz-weiß) können Sie ignorieren, da sie in diesem Report immer auf "false" steht. Die anschließende Abfrage setzt in Abhängigkeit vom Text, in diesem Fall die eingetragene Note als Ziffer mit Tendenz, die Farbe der Zelle auf gelb.

[[Datei:Leistungsuebersicht-10.png | 200px]]


Über den noten wird in der Leistungsübersicht gekennzeichnet, ob es sich um einen Leistungskurs handelt bzw. ob der Kurs nur mündlich belgt wurde. Die zugehörige Programmierung ist auch im SubReport2, nämlich beim Label 12. In die neu definierte String-Variable '''S''' wird die Kursart eingelesen. Mit der Funktion ''copy'' werden die ersten beiden Buchstaben aus '''S''' ausgelesen und abgeglichen. 
 
----

[[#top|Zum Seitenanfang]]

[[Reporting|Zurück zu Reporting]]
```
