---
title: "Einrichtung des Report-Explorers"
---

# Einrichtung des Report-Explorers

Der Dateibasierende-Reportgenerator für Schild-NRW benötigt einige Einstellungen, die hier im Folgenden beschrieben werden.

<a id="Dateistruktur_in_der_Installation"></a>

## Dateistruktur in der Installation

![Reportverzeichnisse](/bilder/administration/benutzer-einstellungen/reportverzeichnisse.jpg)

Die Reports liegen nicht mehr in einer Report-Datenbank, sondern befinden sich nun als Einzeldateien in einem Ordner der Schild-Installation. Dieser Ordner hat den Namen Schild-Reports. Der genaue verwendete Speicherort kann unter [Extras](/administration/benutzer-einstellungen/extras) \> [Programm-Einstellungen](/administration/benutzer-einstellungen/programm-einstellungen) \> Report-Verzeichnisse festgelegt werden.

Achten Sie darauf, dass diese Ordner auch in Ihrer Schildinstallation direkt im Ordner Schild-Reports angelegt sind, denn diese Ordner übernehmen spezielle Funktionen und müssen daher mit exakt diesem Namen existieren.

Wenn Sie eine Serverinstallation haben, stehen hier die Pfade des Netzlaufwerks oder die UNC-Pfadangaben des Servers.

Mit dem Haken "Standard-Verzeichnisstruktur verwenden" können Sie die eingetragenen Werte übergehen, dies ist z.B. nützlich, wenn man mit einer Kopie der Datenbank außerhalb der Serverumgebung arbeiten muss.

<a id="Funktionen_der_Ordner"></a>

## Funktionen der Ordner

![Reportordner](/bilder/reporting/erstellung/reportordner.jpg)

1.  **Header_Footer**, dieser Ordner enthält alle Köpfe und Füße, die Sie in der neuen Reporting verwenden möchten. Auch diese liegen als Subreportdateien einzeln auf der Festplatte und können dort genauso wie „normale“ Reports bearbeitet werden. Viele Formulare durchsuchen genau diesen Ordner nach bestimmten Köpfen oder Füßen. Sie können sich eine Beispielsammlung von Köpfen und Füßen auf der Seite <http://www.svws.nrw.de> herunterladen.
2.  **Standard**, dieser Ordner wird für den schnelleren Druckzugang verwendet. Der Zugriff kann über Schild-NRW neben dem Druckersymbol über "Standardformulare drucken" erreicht werden. Bei diesem Ordner hat man auch in der Benutzerverwaltung die Möglichkeit, einigen Usern nur den Zugriff auf den Ordner Standard zu gewähren. Alle Formulare außerhalb können dann von diesen Benutzern nicht erreicht werden.
3.  **Subreports**, dieser Ordner enthält bestimmte Subreports, die von verschiedenen Formularen genutzt werden können. Die Formulare sehen dann vor dem Druck in diesem Ordner nach und laden die Subreports zur Laufzeit.
4.  **Standardtexte**, hier liegen die RTF-Dateien (wordähnliches Format), die auf den Zeugnissen die Hinweistexte darstellen. Diese Standardtexte können auch von der Schild-Homepage im Zeugnisbereich heruntergeladen und dort hineinkopiert werden.

Daneben können Sie noch so viele Ordner anlegen wie Sie möchten. Diese müssen sich nur innerhalb des Schild-Reports-Ordners befinden!

<a id="Ablegen_der_Reportdateien"></a>

## Ablegen der Reportdateien

![Reports](/bilder/reporting/erstellung/reports.jpg)

Innerhalb des Schild-Reports-Ordners werden die einzelnen Formulardateien mit der Endung \*.rtm abgelegt. Dateien mit dieser Endung werden automatisch von der Reportverwaltung als Formulare erkannt und stehen beim nächsten Neustart zur Verfügung. Wahlweise können Sie auch das Aktualisieren-Symbol ![Aktualisieren](/bilder/reporting/erstellung/aktualisieren.jpg) im Reportexplorer drücken.

Im Dateifenster des Reportexplorers werden dann folgende Dateitypen angezeigt:

1.  RTM: Reportdateien
2.  PDF: PDF-Dokumente (Bei einem Doppelklick öffnet sich der PDF-Reader.)
3.  RTF: Richtextdateien (Bei einem Doppelklick öffnet sich das Word-Pad.)

Wenn Sie Formulardateien heruntergeladen haben oder diese per E-Mail bekommen haben, müssen Sie diese Dateien in den jeweiligen Ordner der Schild-Reports-Umgebung speichern.

<a id="Formulardownload"></a>

## Formulardownload

Auf der Internetseite der Schulverwaltungsprogramme <http://www.svws.nrw.de> können Sie sich zusätzliche Formulare, Zeugnisse und Köpfe und Füße herunterladen (Downloads -\> Drucken).

Es steht auch ein Formularpaket mit über 100 Reports zur Verfügung [(Basic-Reportsammlung)](https://www.svws.nrw.de/index.php?id=schildformulare). Diese Reportsammlung enthält Reports, die für den alltäglichen Gebrauch in Schild-NRW bestimmt sind.

Achten Sie bitte darauf, dass die Reports-Ordnerstruktur mit den 4 festgelegten Ordnern erhalten bleiben muss. (Header_Footer, Standard, Standardtexte und Subreports)

<a id="Ordnerstruktur"></a>

## Ordnerstruktur

![Reports](/bilder/reporting/erstellung/reports.png)

![Reports_alt](/bilder/reporting/erstellung/reports-alt.png)

Eine sachgerechte Organisation der Ordnerstruktur, die sinnvolle Vergabe der Benutzerrechte und regelmäßiges Ausmisten kann die tägliche Arbeit enorm erleichtern. Eine solche Struktur ist z.B. in der Basis-Reportsammlung angelegt.

In den Abbildungen sind jeweils aktive Report-Ordner eines Gymnasiums vor (rechts) und nach (links) der Überarbeitung dargestellt. Vor der Überarbeitung waren im Report-Ordner mehr als 4000 Dateien. Nach einer vorsichtigen Überarbeitung sind es weniger als 1000.**Während der Überarbeitung werden keine Dateien gelöscht. Nicht unbedingt benötigte Dateien werden in den Ordner ARCHIV geschoben und können von dort aktiviert werden!**

Folgende Aspekte können bei der Überarbeitung der Ordnerstruktur helfen:

**funktionale Gliederung**; die Ordner mit den Reports werden durch Ziffern sortiert. So kann eine funktionale Gliederung je nach Bedarf der schulischen Verwaltung erstellt werden.

**Spielwiese**; Ort für´s Basteln an Reports, Testversionen etc. Hier darf sich jeder austoben.

**Archiv**; hier liegt die alte Ordnerstruktur. dieser Ordner enthält bestimmte Subreports, die von verschiedenen Formularen genutzt werden können. Die Formulare sehen dann vor dem Druck in diesem Ordner nach und laden die Subreports zur Laufzeit.

**Nirvana**; bevor Reports gelöscht werden, liegen sie ein Jahr im Nirvana (und nur dort). Wenn sie im Alltag nicht vermisst wurden, können sie gerne gelöscht werden. *Bitte nie Zeugnisformulare löschen! Diese gehören ins Archiv.*

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-298) · [Einrichtung des Report-Explorers – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Einrichtung+des+Report-Explorers&oldid=4135)
