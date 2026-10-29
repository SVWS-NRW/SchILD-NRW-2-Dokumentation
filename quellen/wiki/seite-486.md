---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Mahnungen drucken"
---

# Mahnungen drucken

Gesicherte Wiki-Seite · Namensraum 0 · Version 6067 · Stand 2026-05-04.

[Lesbaren Artikel öffnen](/zeugnisse/vorbereitung/mahnungen-drucken) · [Originaldaten herunterladen](/dateien/quellen/seite-486.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Dieser Gruppenprozess dient der komfortablen Erstellung von Mahnschreiben an die Erziehungsberechtigten. Im Laufe der Zeit hat sich das Mahnschreiben weiterentwickelt, so dass der Prozess der Mahnungen auf besondere Art und Weise absolviert werden muss. Im Folgenden wird der Prozess beschrieben.

===Hinweise zu den Mahnbriefen===
Prinzipiell sind die Mahnbriefe Serienbriefe mit erweiterten Funktionen und Rückantwortabschnitt. Das Aussehen des Mahnschreibens wird in der APO-S I definiert. Dort findet sich auch der Hinweis, dass das Schreiben gemäß Anlage "zu verwenden" ist. Dies meint, dass die Anlage nicht abgeändert werden darf. Der Mahnbrief wurde in enger Rücksprache mit dem MSB konzipiert und kann in den Jahrgangsstufen 3 bis EF verwendet werden. Folgende Vorgaben wurden vom MSB gemacht:
*Ein dezidierter Abschluss muss bei einer Abschlussgefährdung nicht ausgesprochen werden.
*es unterschreibt immer die Klassenleitung / Stufenleitung
*eine gesonderte Warnung auf die Note 6 gibt es nicht
*es werden im 2. Halbjahr nur diejenigen Noten aufgelistet, welche abweichend vom ersten Halbjahr defizitär sind. Das Wort „auch“ weist darauf hin, dass es vorab Defizite gab.

===Vorbereitungen===
Setzen Sie zunächst bei allen Schülerinnen und Schülern in den Leistungsdaten von defizitären Epochalfächern ein Mahnhäkchen. Dies kann z.B. auch mit Hilfe von Notendateien und dem ENM-Notenmodul oder über den Gruppenprozess [[Noten, Mahnungen und Fehlstunden eingeben]] geschehen.

Die Mahnhäkchen werden mit zwei Farben hinterlegt. Bei roten Mahnhäkchen wurde noch kein Mahndatum hinterlegt. Bei grünen Mahnhäkchen existiert bereits ein Mahndatum. Das Mahndatum hat informativen Charakter und wird vom Gruppenprozess für die Filterung ausgewertet.

===Verwendung des Serienbriefs "Serienbrief Mahnung gefährdete Versetzung Filter II @Eltern.rtf"===
Dieser Serienbrief muss in Kombination mit dem Filter II gedruckt werden. Der Report greift für den Ausdruck auf die Datenpipeline "SchuelerLeistungen" zurück und funktioniert nur in Kombination mit Filter II. Nach der Filterung der zu mahnenden Schülerinnen und Schüler kann der Mahnreport über den Reportexplorer aufgerufen werden. In einem letzten Schritt wird das Datum der Mahnung über einen Gruppenprozess bei den Schülerinnen und Schülern eingetragen. Das benötigte Mahnschreiben heißt "Serienbrief Mahnung gefährdete Versetzung Filter II @Eltern.rtm" und befindet sich in der Basis-Reportsammlung, welche Sie hier herunterladen können: https://www.svws.nrw.de/download/schild-reports/basis-reportsammlung

====Schüler mit Hilfe von Filter II filtern====
Rufen Sie Auswahl ➜ Filter II auf. Fügen Sie in '''SchILD-NRW''' entsprechend der Abbildung folgenden Code ein:

<pre>
SELECT Schueler.*
FROM Schueler
WHERE
  Schueler.Status = 2
  AND Schueler.Geloescht = '-'
  AND Schueler.Volljaehrig = '-'
  AND Schueler.ASDJahrgang IN ('06','07','08','09','10','EF')
  AND EXISTS (
    SELECT 1
    FROM
      (SchuelerLernabschnittsdaten AS SLAD
      INNER JOIN SchuelerLeistungsdaten AS SLD
        ON SLD.Abschnitt_ID = SLAD.ID),
      EigeneSchule AS SCH
    WHERE
      SLAD.Schueler_ID = Schueler.ID
      AND SLAD.Jahr = SCH.Schuljahr
      AND SLAD.Abschnitt = SCH.SchuljahrAbschnitt
      AND SLAD.WechselNr = 999
      AND SLAD.Hochrechnung = 0
      AND SLD.Warnung = '+'
      AND SLD.Warndatum IS NULL)
</pre>

Sofern Sie '''SchILDzentral''' verwenden, benutzen Sie den leicht angepassten Code, wobei alle Zahlen 123456 durch Ihre Schulnummer ersetzt werden müssen.
<pre>
SELECT Schueler.*
FROM Schueler
WHERE
  Schueler.Status = 2
  AND Schueler.Geloescht = '-'
  AND Schueler.Volljaehrig = '-'
  AND Schueler.ASDJahrgang IN ('06','07','08','09','10','EF')
  AND EXISTS (
    SELECT 1
    FROM
      (SchuelerLernabschnittsdaten AS SLAD
      INNER JOIN SchuelerLeistungsdaten AS SLD
        ON SLD.Abschnitt_ID = SLAD.ID),
      EigeneSchule AS SCH
    WHERE
      SCH.SchulnrEigner = 123456
      AND Schueler.SchulnrEigner = SCH.SchulnrEigner
      AND SLAD.SchulnrEigner = SCH.SchulnrEigner
      AND SLD.SchulnrEigner = SCH.SchulnrEigner
      AND SLAD.Schueler_ID = Schueler.ID
      AND SLAD.Jahr = SCH.Schuljahr
      AND SLAD.Abschnitt = SCH.SchuljahrAbschnitt
      AND SLAD.WechselNr = 999
      AND SLAD.Hochrechnung = 0
      AND SLD.Warnung = '+'
      AND SLD.Warndatum IS NULL)
</pre>

Alternativ zur Eingabe des Codes können Sie auch einen SQL-Filter "Aus Datei laden". [[:Datei:Serienbrief_Mahnung_gefährdete_Versetzung_Filter_II.zip|Die benötigte Datei können Sie hier als ZIP-Datei für SchILD-NRW herunterladen.]] Diese Datei muss vor der Benutzung noch entpackt werden. [[:Datei:Serienbrief_Mahnung_gefährdete_Versetzung_Filter_II_SchILDzentral.zip|Die benötigte Datei können Sie hier als ZIP-Datei für SchILDzentral herunterladen.]] 

Passen Sie die Jahrgänge im Codeabschnitt <code>AND Schueler.ASDJahrgang IN ('06','07','08','09','10','EF')</code> entsprechend ihrer Schulform an.

:[[Image:Filter_II_Mahnungen.png|Left|500px]]

Klicken Sie auf die Schaltfläche "Testen" und dann auf "Übernehmen". Der Schülerkontainer enthält nun alle Schülerinnen und Schüler, welche ein Mahnschreiben erhalten müssen.

====Mahnungen drucken====
Öffnen Sie nun den Reportexplorer und navigieren Sie zum oben genannten Mahnschreiben. Wenn Sie das Mahnschreiben ausdrucken, wird für jeden Erziehungsberechtigten, welcher die Berechtigung "erhält Anschreiben" besitzt, ein Mahnschreiben ausgedruckt. Diese Schreiben können zudem in die Dokumentenverwaltung der Schülerin / des Schülers gedruckt werden. Schließen Sie den Reportexplorer, wenn alle Mahnschreiben und Übersichtslisten gedruckt wurden. Der Report hat einen internen Filter, so dass nur die zu Mahnenden Fächer des jeweiligen Halbjahres gedruckt werden.

====Mahndatum setzen====
Nun muss bei den Schülerinnen und Schülern noch das Mahndatum hinterlegt werden. Starten Sie hierzu den Gruppenprozess ➜ Noten, Zeugnisvorbereitung ➜ Mahnungen drucken. 

:[[Image:Mahndatum_setzen.png|Left|500px]]

Lassen Sie die zwei Auswahlfelder aktiviert. Es ist nun notwendig, auf die Schaltfläche "Mahnungen drucken" zu klicken, auch wenn keine Mahnungen mehr gedruckt werden sollen. Es öffnet sich nun der Reportexplorer, der sofort wieder geschlossen werden darf. Klicken Sie nun auf die Schaltfläche "Fertigstellen". Es wird nun bei allen Schülerinnen und Schülern innerhalb des Schülerkontainers das Mahndatum gesetzt, wo es noch nicht vorhanden ist. Bestehende Angaben werden dabei nicht überschrieben.

====Übersichtslisten drucken====
Sie finden in der Basis-Reportsammlung eine Übersichtsliste "Schülerliste Gemahnte Schüler.rtm" für die Schulleitung bzw. die Koordinatoren und eine Übersichtsliste "Klassenliste Gemahnte Schüler @KL.rtm" für die Klassenleitungen. Diese können Sie optional ebenfalls drucken. Insbesondere im 2. Halbjahr ist es sinnvoll, hierzu eine Übersicht zu drucken, welche alle Mahnungen des Schuljahres enthält. Hierzu können Sie entweder den Filter II abermals einsetzen und folgende angepassten SQL-Befehle nutzen:

'''SchILD-NRW'''

<pre>
SELECT Schueler.*
FROM Schueler
WHERE
  Schueler.Status = 2
  AND Schueler.Geloescht = '-'
  AND Schueler.Volljaehrig = '-'
  AND Schueler.ASDJahrgang IN ('06','07','08','09','10','EF')
  AND EXISTS (
    SELECT 1
    FROM
      (SchuelerLernabschnittsdaten AS SLAD
      INNER JOIN SchuelerLeistungsdaten AS SLD
        ON SLD.Abschnitt_ID = SLAD.ID),
      EigeneSchule AS SCH
    WHERE
      SLAD.Schueler_ID = Schueler.ID
      AND SLAD.Jahr = SCH.Schuljahr
      AND SLAD.WechselNr = 999
      AND SLAD.Hochrechnung = 0
      AND SLD.Warnung = '+')
</pre>

'''SchILDzentral'''

<pre>
SELECT Schueler.*
FROM Schueler
WHERE
  Schueler.Status = 2
  AND Schueler.Geloescht = '-'
  AND Schueler.Volljaehrig = '-'
  AND Schueler.ASDJahrgang IN ('06','07','08','09','10','EF')
  AND EXISTS (
    SELECT 1
    FROM
      (SchuelerLernabschnittsdaten AS SLAD
      INNER JOIN SchuelerLeistungsdaten AS SLD
        ON SLD.Abschnitt_ID = SLAD.ID),
      EigeneSchule AS SCH
    WHERE
      SCH.SchulnrEigner = 123456
      AND Schueler.SchulnrEigner = SCH.SchulnrEigner
      AND SLAD.SchulnrEigner = SCH.SchulnrEigner
      AND SLD.SchulnrEigner = SCH.SchulnrEigner
      AND SLAD.Schueler_ID = Schueler.ID
      AND SLAD.Jahr = SCH.Schuljahr
      AND SLAD.WechselNr = 999
      AND SLAD.Hochrechnung = 0
      AND SLD.Warnung = '+')
</pre>

Alternativ können Sie den Gruppenprozess abermals starten und das erste Auswahlfeld "Nur Mahnungen ausgeben, bei denen das Mahndatum noch nicht gesetzt ist" deaktivieren. Auf diese Weise erhalten Sie eine Übersicht aller gemahnten Fächer des 1. und 2. Halbjahres.

===Verwendung des Serienbriefs "Serienbrief Mahnung gefährdete Versetzung @Eltern.rtf"===
Dieser Serienbrief muss über den Gruppenprozess ➜ Noten, Zeugnisvorbereitung ➜ Mahnungen drucken aufgerufen werden. Der Gruppenprozess übernimmt die Filterung auf die passende Schülermenge und füllt die Pipeline "Mahnungen" des Reportexplorers. Der Report greift für den Ausdruck auf die Datenpipeline "Warnungen" zurück und funktioniert nur in Kombination mit dem Gruppenprozess. Bei diesem Serienbrief kommt es leider aufgrund eines fehlerhaften Filters im Gruppenprozess unter Umständen im 2. Halbjahr dazu, dass Mahnungen für Schülerinnen und Schüler gedruckt werden, die keine weitere Mahnung im 2. Halbjahr erhalten haben. Diese fehlerhaften Briefe müssen manuell aussortiert werden. Das benötigte Mahnschreiben heißt "Serienbrief Mahnung gefährdete Versetzung @Eltern.rtm" und befindet sich in der Basis-Reportsammlung, welche Sie hier herunterladen können: https://www.svws.nrw.de/download/schild-reports/basis-reportsammlung

====Schüler mit Hilfe des Gruppenprozesses filtern====
Starten Sie den Gruppenprozess ➜ Noten, Zeugnisvorbereitung ➜ Mahnungen drucken. Deaktivieren Sie das Auswahlfeld "Nur Mahnungen ausgeben, bei denen das Mahndatum noch nicht gesetzt wurde. Das Mahnschreiben ist so programmiert, dass immer alle Mahnungen mit oder ohne Mahndatum benötigt werden. Der Report hat einen internen Filter, so dass trotz Deaktivierung des Häkchens nur die zu Mahnenden Fächer des jeweiligen Halbjahres gedruckt werden.

:[[Image:MahnungDrucken.png|Left|500px]]

====Mahnungen drucken====
Klicken Sie auf die Schaltfläche "Mahnungen drucken". Es öffnet sich der Reportexplorer, so dass sie das Mahnschreiben "Serienbrief Mahnung gefährdete Versetzung @Eltern.rtm" auswählen können. Wenn Sie das Mahnschreiben ausdrucken, wird für jeden Erziehungsberechtigten, welcher die Berechtigung "erhält Anschreiben" besitzt, ein Mahnschreiben ausgedruckt. Diese Schreiben können zudem in die Dokumentenverwaltung der Schülerin / des Schülers gedruckt werden.

====Mahndatum setzen====
Nach dem Ausdruck muss noch das Mahndatum bei allen Mahnungen gesetzt werden, welche noch kein Mahndatum haben. Schließen Sie hierzu den Reportexplorer, wenn alle Mahnschreiben und Übersichtslisten gedruckt wurden. Sie gelangen auf diese Weise zum Gruppenprozess zurück. Klicken Sie nun auf die Schaltfläche "Abbrechen" und starten Sie den Gruppenprozess erneut. Aktivieren Sie nun beide Auswahlfelder. Es ist nun notwendig, auf die Schaltfläche "Mahnungen drucken" zu klicken, auch wenn keine Mahnungen mehr gedruckt werden sollen. Es öffnet sich nun der Reportexplorer, der sofort wieder geschlossen werden darf. Klicken Sie nun auf die Schaltfläche "Fertigstellen". Es wird nun bei allen Schülerinnen und Schülern innerhalb des Schülerkontainers das Mahndatum gesetzt, wo es noch nicht vorhanden ist. Bestehende Angaben werden dabei nicht überschrieben.

:[[Image:MahnungDrucken3.png|Left|500px]]

Hinweis: Sie können zu jedem Zeitpunkt den Gruppenprozess abbrechen und zu einem späteren Zeitpunkt wieder aufnehmen. Auf diese Weise können Sie auch schrittweise Mahnschreiben drucken und das jeweilige Mahndatum setzen. Sie sollten jedoch vermeiden, dass bei einem Schüler Mahnhäkchen mit und ohne Mahndatum hinterlegt sind.

====Übersichtslisten drucken====
Sie finden in der Basis-Reportsammlung eine Übersichtsliste "Schülerliste Gemahnte Schüler.rtm" für die Schulleitung bzw. die Koordinatoren und eine Übersichtsliste "Klassenliste Gemahnte Schüler @KL.rtm" für die Klassenleitungen. Diese können Sie optional ebenfalls drucken, indem Sie den Gruppenprozess abermals starten. Für diese Reports sollte ebenfalls das erste Auswahlfeld "Nur Mahnungen ausgeben, bei denen das Mahndatum noch nicht gesetzt ist" deaktiviert werden. Auf diese Weise erhalten Sie eine Übersicht aller gemahnten Fächer des 1. und 2. Halbjahres.

===Mahnungen beim Versetzungsprozess===
Beim Wechsel vom ersten Halbjahr in das zweite Halbjahr werden bei allen Schülerinnen und Schülern automatisch Mahnhäkchen bei denjenigen Fächern gesetzt, welche mit den Noten 5 oder 6 bewertet wurden. Dies geschieht jedoch nur dann, wenn bei der Versetzung die Fächer vom ersten Halbjahr in das zweite Halbjahr übertragen werden. Sollten die Fächer nicht übertragen worden sein oder die Mahnhäkchen fehlen, so können Sie diese durch den Gruppenprozess [[Mahnungen automatisch setzen]] nachträglich holen. Bei diesen Mahnhäkchen wird das Zeugnisdatum als Mahndatum hinterlegt. Der Gruppenprozess [[Mahnungen automatisch setzen]] ist nur in der Lage Mahnungen aus dem ersten in das zweite Halbjahr zu schreiben. Quartale kennt der Gruppenprozess nicht.

===Weitere Hinweise===
Sie können ein Mahndatum entfernen/ändern, indem Sie mit der rechten Maustaste auf das betreffende Mahnhäkchen klicken und im Kontextmenü  den Menüpunkt "Mahndatum eingeben" wählen. Sie können in dem folgenden Fenster das Mahndatum löschen oder ändern. Es gibt keinen Gruppenprozess zum Ändern oder Entfernen von Eintragungen zum Mahndatum. Sie sollten das Mahndatum immer erst setzen, wenn der Ausdruck der Mahnschreiben abgeschlossen ist.


----

[[#top|Zum Seitenanfang]]

[[Noten, Zeugnisvorbereitung|Zurück zu Noten, Zeugnisvorbereitung]]
```
