---
title: "Ausgewählte Beispiele aus der BASIC-Sammlung"
---

# Ausgewählte Beispiele aus der BASIC-Sammlung

Wenn Sie anfangen, mit dem Reportexplorer zu arbeiten, bietet es sich an, die BASIC-Reportsammlung \[[\[1\]](http://www.svws.nrw.de/index.php?id=schildformulare)\] herunterzuladen. Sie haben damit Beispiele aus den verschiedenen Anwendungsbereichen zur Verfügung, die Sie als Grundlage verwenden können.

Einzelne Reports aus der Sammlung werden in diesem Kapitel genauer vorgestellt.

Vorausgesetzt ist, dass Sie die Reportsammlung im Ordner **Schild-Reports** abgespeichert haben und die mitgelieferten Briefköpfe und -füße in den Ordner **Header_Footer**, der ein direkter Unterordner von Schild-Reports sein muss, verschoben haben.

<a id="DIN-Erzieherbrief_(Ordner:_A4_Mitteilungen)"></a>
<a id="DIN-Erzieherbrief_.28Ordner:_A4_Mitteilungen.29"></a>

## DIN-Erzieherbrief (Ordner: A4_Mitteilungen)

Auf der Grundlage des DIN-Erzieherbriefes können einfach und schnell Briefe an die Erziehungsberechtigten erstellt werden. Wenn Sie den Brief aufrufen, erhalten Sie folgende Ansicht:

![Erzieherbrief-00](/bilder/reporting/erstellung/erzieherbrief-00.png)

In diesem Report ist direkt die Aufforderung enthalten, den Brieftext im Reportexplorer anzupassen. Möglicherweise möchten Sie auch weitere Kleinigkeiten ändern.

Wenn Sie den Report *DIN-Erzieherbrief.rtm* zur Bearbeitung aufrufen, sehen Sie die Struktur des Briefes. Im Kopfbereich sind zwei dynamisch ladbare Briefköpfe untergebracht, im Detailbereich finden Sie den eigentlichen Brieftext, im Fußbereich befindet sich ein dynamisch ladbarer Fuß.

![Erzieherbrief-01](/bilder/reporting/erstellung/erzieherbrief-01.png)

Klicken Sie nun mit der rechten Maustaste auf den Brieftext, dann können Sie ihn zum Bearbeiten öffnen.

![Erzieherbrief-02](/bilder/reporting/erstellung/erzieherbrief-02.png)

![Erzieherbrief-03](/bilder/reporting/erstellung/erzieherbrief-03.png)

Nachdem Sie die Änderungen beim Schließen des Editors gespeichert haben, lassen sich die Änderungen in der Vorschau überprüfen. Speichern Sie anschließend das erstellte Briefformular unter einem aussagekräftigen Namen ab.

Wenn Sie nun die passende Schülergruppe auswählen, können Sie den Brief an die Erziehungsberechtigten ausdrucken!

------------------------------------------------------------------------

Es fällt auf, dass der Brieftext im Vergleich zur Anrede verrutscht ist. Um den Brieftext, also hier das RichText-Element richtig auszurichten, öffnen Sie im Reportexplorer den Header *Erzieher_Kopf.rtm*, der in den Erzieherbrief eingebunden wird.

Wenn Sie nun das Element DBText1, welches die formale Anrede enthält, mit der rechten Maustaste anklicken, finden Sie im Kontextmenü den Eintrag *Position*.

![Erzieherbrief-08](/bilder/reporting/erstellung/erzieherbrief-08.png)

Die Position von links hat den Wert 20,373.

![Erzieherbrief-07](/bilder/reporting/erstellung/erzieherbrief-07.png)

Diese Zahl merken Sie sich und öffnen über den Reportexplorer nun wieder den Erzieherbrief. Dort klicken Sie - wiederum mit der rechten Maustaste - auf das RichText-Feld, das den Brieftext enthält. Öffnen Sie auch hier den Menüpunkt *Position* und geben Sie den Wert 20,373 hier ein.

![Erzieherbrief-09](/bilder/reporting/erstellung/erzieherbrief-09.png)

Bestätigen Sie Ihre Eingabe mit *Anwenden*, Sie sehen dann, wie das RichText-Feld die Position ändert. Überprüfen Sie das Ergebnis in der Vorschau.

![Erzieherbrief-10](/bilder/reporting/erstellung/erzieherbrief-10.png)

<a id="Unfallanzeige_Unfallkasse_NRW_(Ordner:_A1_Formulare)"></a>
<a id="Unfallanzeige_Unfallkasse_NRW_.28Ordner:_A1_Formulare.29"></a>

## Unfallanzeige Unfallkasse NRW (Ordner: A1_Formulare)

Das Formular für die Unfallanzeige muss vor dem Einsatz zunächst mit den schulspezifischen Angaben zum zuständigen Gemeindeunfallversicherungsverband und der Versicherungsnummer gefüllt werden. Wenn Sie anschließend den Report aufrufen, werden Sie mit Hilfe von Texteingabefeldern durch das Formular geleitet.

![Unfallanzeige-01](/bilder/reporting/erstellung/unfallanzeige-01.png)

Öffnen Sie den Report *Unfallanzeige Unfallkasse NRW.rtm* zur Bearbeitung. Wie im Formular beschrieben, verändern Sie die drei RichText-Felder, in denen die schulspezifischen Angaben eingetragen werden sollen. Diese Anpassung müssen Sie nur einmal vornehmen. Anschließend speichern Sie das veränderte Formular.

![Unfallanzeige-02](/bilder/reporting/erstellung/unfallanzeige-02.png)

Änderungen am Layout können Sie wie in allen anderen Formularen vornehmen. Wenn beispielsweise der Schulname und die Schulbezeichnung so lang sind, dass Textteile übereinander liegen, schieben Sie die Felder entsprechend auseinander.

Wenn Sie dagegen Änderungen an den Texteingabefeldern vornehmen möchten, müssen Sie sich die Programmierung ansehen. Dazu öffnen Sie den Report zum Bearbeiten und wechseln dann auf den Karteireiter *Berechnungen*. Klicken Sie nun auf das Berichts-Element *Report* (oben auf der linken Seite) und wählen Sie das grün unterlegte Ereignis *BeforePrint* aus.

![Unfallanzeige-03](/bilder/reporting/erstellung/unfallanzeige-03.png)

Im unteren Bildschirmbereich sollte nun die *procedure ReportBeforePrint* zu sehen sein, in der die Texteingabefelder aktiviert werden.

Zunächst werden verschiedene Variablen (z.B. Wochentag, Datum, Hergang, Schilderung) deklariert, die beim Aufruf des Reports durch die Eingaben des Nutzers mit Inhalt gefüllt werden.

![Unfallanzeige-04](/bilder/reporting/erstellung/unfallanzeige-04.png)

Durch die Anweisung "Zeuge := StringInput ( 'Name u. Anschrift von Zeugen ' , ' ');" wird der Variablen *Zeuge* die Eingabe des Texteingabefeldes, das durch *StringInput* erzeugt wird, zugewiesen. In den Klammern steht zunächst der Text, der angezeigt wird, die beiden Hochkommata hintereinander erzeugen ein leeres Eingabefeld. Sie können hier auch schon Vorschläge für die Eingabe machen, wie es für die Variable Augenzeuge erfolgt: " Augenzeuge := StringInput ('War diese Person Augenzeuge?' , 'JA');". Dies erleichtert dem Benutzer die Eingabe, da er einfach auf OK klicken kann.

Nach dem Einlesen des Textes in die jeweilige Variable wird der Inhalt der Variablen an das Label-Feld übergeben, das an der entsprechenden Stelle im Formular steht: "Label61.Text := Zeuge;"

![Unfallanzeige-05](/bilder/reporting/erstellung/unfallanzeige-05.png)

Wenn Sie ein größeres Eingabefeld, z.B. bei der Schilderung des Unfallhergangs bevorzugen, können Sie es über den Aufruf des Editors erreichen, die Zeile würde dann lauten:

"Hergang := EditPlainText('Schildern Sie hier bitte den Unfallhergang und geben Sie die Art der Veranstaltung bzw. die Sportart bei Sportunfällen an');"

![Unfallanzeige-06](/bilder/reporting/erstellung/unfallanzeige-06.png)

<a id="Leistungsuebersicht_akt_HJ_A3.rtm_(Ordner:_A5_Leistungsübersichten_--&gt;_Uebersichten_Sekundarstufe_1)"></a>
<a id="Leistungsuebersicht_akt_HJ_A3.rtm_.28Ordner:_A5_Leistungs.C3.BCbersichten_--.3E_Uebersichten_Sekundarstufe_1.29"></a>

## Leistungsuebersicht_akt_HJ_A3.rtm (Ordner: A5_Leistungsübersichten --\> Uebersichten Sekundarstufe 1)

Im Ordner A5_Leistungsübersichten finden Sie Formulare unterschiedlicher Komplexität für die Leistungsübersichten der Sekundarstufe I und II. Die Leistungsübersicht *Leistungsuebersicht_akt_HJ_A3.rtm* listet die Leistungen der Schüler im aktuellen Halbjahr auf. Berechnungen werden in diesem Formular nicht durchgeführt.

*Hinweis:* Für diesen Report sollten Sie nur **eine** Klasse auswählen, für die die Übersicht ausgegeben wird. Wenn Sie mehrere Klassen auswählen, dann werden immer alle Fächer aller Klassen angezeigt (vgl. Funktion [Faechervorbelegen](/reporting/rap/faechervorbelegen), die für den gesamten Report gilt).

![Leistungsuebersicht-01](/bilder/reporting/erstellung/leistungsuebersicht-01.png)

Die Leistungsübersicht ist tabellarisch aufgebaut, wobei die Tabelle abhängig von den zugewiesenen Fächern erstellt und gefüllt wird. Somit ist die Spaltenanzahl der Tabelle nicht fest vorgegeben, sondern abhängig von der verwendeten Stundentafel bzw. von den Fächern, die die ausgewählten Schüler im aktuellen Halbjahr haben.

Wenn Sie den Report im Bearbeitungsmodus öffnen, sehen Sie, dass zwei Subreports mit der Datenquelle *Fachuebersicht* benutzt werden.

![Leistungsuebersicht-02](/bilder/reporting/erstellung/leistungsuebersicht-02.png)

Der Subreport1 steht im Kopf des Reports, hier wird einmal die Überschriftenzeile für die Tabelle erzeugt, in dem alle Fächer, die den ausgewählten Schülern zugeordnet sind, ausgegeben werden. Dazu wird für jedes Fach im Subreport eine Tabellenzelle als Kästchen mit dem zugehörigen Fachkürzel angelegt.

![Leistungsuebersicht-03](/bilder/reporting/erstellung/leistungsuebersicht-03.png)

Der Subreport durchläuft dabei die gesamte Liste aller Fächer, die im aktuellen Abschnitt in dieser ausgewählten Gruppe vorkommen. Damit das gelingt, wird im Hauptbericht beim Ereignis "BeforePrint" die Funktion [Faechervorbelegen](/reporting/rap/faechervorbelegen) aufgerufen.

![Leistungsuebersicht-04](/bilder/reporting/erstellung/leistungsuebersicht-04.png)

Die durch die Funktion [Faechervorbelegen](/reporting/rap/faechervorbelegen) gefüllte interne Tabelle wird beim Ereignis "AfterPrint" durch den Aufruf der Funktion [ResetFaechervorbelegung](/reporting/rap/resetfaechervorbelegung) wieder geleert, damit bei einem erneuten Aufruf des Reports nur die zugehörigen Fächer angezeigt werden.

Die Daten aus dieser internen Tabelle werden auch im Subreport2 verwendet, der sich im Detailbereich des Reports befindet.

![Leistungsuebersicht-05](/bilder/reporting/erstellung/leistungsuebersicht-05.png)

Hier wird für jedes Fach aus der Datenquelle *Fachuebersicht* die Note in Kurzform, also als Ziffer, ausgegeben. Wird das Fach als Kurs unterrichtet, dann wird zusätzlich die Kurzbezeichnung des Kurses mit ausgegeben.

<a id="S2_Konferenz_LeistÜbersicht.rtm_(Ordner:_A6_Konferenzen\Zeugniskonferenzen\Sekundarstufe_II)"></a>
<a id="S2_Konferenz_Leist.C3.9Cbersicht.rtm_.28Ordner:_A6_Konferenzen.5CZeugniskonferenzen.5CSekundarstufe_II.29"></a>

## S2 Konferenz LeistÜbersicht.rtm (Ordner: A6_Konferenzen\Zeugniskonferenzen\Sekundarstufe II)

Mit diesem Report können Sie eine Leistungsübersicht für jeden Schüler über mehrere Schulhalbjahre hinweg erstellen. Im Beispiel sind nur die Noten für die Q1 eingetragen, daher ist die Zeile für die Q2.1 nicht gefüllt.

![Leistungsuebersicht-06](/bilder/reporting/erstellung/leistungsuebersicht-06.png)

Wenn Sie nun in die Bearbeitungsansicht des Reports wechseln, dann sehen Sie, dass neben der Datenquelle *Leistungsuebersicht* zusätzlich die Datenquelle *Schuelerlaufbahn* genutzt wird. Die *Schuelerlaufbahn* ermöglicht es, auf die Daten der abgeschlossenen Abschnitte in der schuelerlaufbahn zuzugreifen.

![Leistungsuebersicht-07](/bilder/reporting/erstellung/leistungsuebersicht-07.png)

Innerhalb eines abgeschlossenen Abschnittes kann dann auf die zugehörige Leistungsübersicht zugegriffen werden.

![Leistungsuebersicht-08](/bilder/reporting/erstellung/leistungsuebersicht-08.png)

Damit nicht alle Abschnitte von Jahrgang 5 an beginnend aufgelistet werden, sind in diesem Report nur die Abschnitte ab Jahrgangsstufe 11 auf sichtbar gesetzt worden. Sie finden die Programmierung im Detailbereich von SubReport1 beim Ereignis *BeforePrint*.

![Leistungsuebersicht-09](/bilder/reporting/erstellung/leistungsuebersicht-09.png)

Um die Noten, die schlechter als ausreichend sind, farblich zu markieren, müssen Sie in die Berechnungen von SubReport2 wechseln. Beim Ereignis *OnGetText* des Datenbankfeldes *DBText5* ist die zugehörige Programmierung zu finden. Die Variable "sw" (für schwarz-weiß) können Sie ignorieren, da sie in diesem Report immer auf "false" steht. Die anschließende Abfrage setzt in Abhängigkeit vom Text, in diesem Fall die eingetragene Note als Ziffer mit Tendenz, die Farbe der Zelle auf gelb.

![Leistungsuebersicht-10](/bilder/reporting/erstellung/leistungsuebersicht-10.png)

Über den noten wird in der Leistungsübersicht gekennzeichnet, ob es sich um einen Leistungskurs handelt bzw. ob der Kurs nur mündlich belgt wurde. Die zugehörige Programmierung ist auch im SubReport2, nämlich beim Label 12. In die neu definierte String-Variable **S** wird die Kursart eingelesen. Mit der Funktion *copy* werden die ersten beiden Buchstaben aus **S** ausgelesen und abgeglichen.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-728) · [Ausgewählte Beispiele aus der BASIC-Sammlung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Ausgew%C3%A4hlte+Beispiele+aus+der+BASIC-Sammlung&oldid=3811)
