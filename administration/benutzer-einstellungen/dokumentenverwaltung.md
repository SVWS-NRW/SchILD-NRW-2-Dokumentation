---
title: "Dokumentenverwaltung"
wiki_title: "Dokumentenverwaltung"
wiki_page_id: 538
wiki_revision: 3436
---

# Dokumentenverwaltung

Die Dokumentenverwaltung in Schild-NRW unterstützt Sie bei der Archivierung von schülerbezogenen Briefen, Zeugnissen, E-Mails usw. Seit der Version 1.7.77.2 ist die Dokumentenverwaltung verfügbar. Es können PDFs und E-Mail-Texte direkt aus Schild-NRW beim Schüler in den eigenen Ordner gedruckt werden. Über das Windows-Dateisystem können aber auch beliebige Dateien dort gespeichert werden.

Im Folgenden sollen die zur Verfügung stehenden Optionen und Einstellungsmöglichkeiten beschrieben werden.

Die Dokumentenverwaltung steht nach der Installation nicht automatisch zur Verfügung. Wenn Sie diese Möglichkeit zur Archivierung nutzen möchten, dann müssen Sie sie über die Programmeinstellungen aktivieren. Dazu öffnen Sie das Menü Extras --\> Programm-Einstellungen --\> Globale Einstellungen --\> Dokumentenverwaltung. (Die Aktivierung ist nur bei entsprechenden Rechten, z.B. als Admin, möglich!)

![Dokumentenverwaltung-01](/bilder/wiki/dokumentenverwaltung-01-1fa2303c.png)

Nachdem Sie das Häkchen bei **Dokumentenverwaltung verwenden** gesetzt haben, müssen Sie das Verzeichnis bestimmen, in dem die Dokumente abgelegt werden sollen. (Achtung! Es wird keine Fehlermeldung ausgegeben, falls der ausgesuchte Speicherort nicht existiert! Achten Sie auch auf ausreichende Schreibrechte, insbesondere wenn der Ordner außerhalb des Programmordners liegt.) Zusätzlich können Sie die Dateimaske anpassen. Damit ist die Regel gemeint, nach der der Dateibaum für die zu archivierenden Dokumente aufgebaut werden soll.

![Dokumentenverwaltung-02](/bilder/wiki/dokumentenverwaltung-02-cab4dc55.png)

Vorgeschlagen ist diese Reihenfolge: Für jeden Schüler wird ein Ordner erzeugt, dessen Bezeichnung sich aus dem *Namen*, dem *Vornamen* und dem *Geburtsdatum* des Schülers zusammensetzt. In diesem Ordner gibt es dann für jede *Klasse*, in der der Schüler ist, einen Unterordner. Das archivierte Dokument bekommt den Namen des ausgewählten Reports mit einem zusätzlichen Zeitstempel. Mit Hilfe dieser Struktur lässt sich nachvollziehen, in welcher Klasse der Schüler war, als das Dokument gedruckt wurde, und wann das Dokument gedruckt wurde.

Wenn Sie sich für eine Ordnerstruktur entschieden haben, besteht die Möglichkeit, die Ordner für alle aktiven Schüler und, wenn gewünscht, auch für Schüler mit einem anderen Status anzulegen. Wenn Sie die Ordner nicht anlegen, wird beim Druck eines Dokumentes der benötigte Ordner angelegt.

Wenn Sie die Dokumentenverwaltung aktiviert haben, wird der zusätzliche Karteireiter **Dokumentenverwaltung** eingeblendet, auf dem die Ordnerstruktur des jeweiligen Schülers zu erkennen ist. Durch Doppelklick auf einen Ordner öffnet sich der Windows-Explorer und es werden die zugehörigen Dokumente angezeigt.

![Dokumentenverwaltung-03](/bilder/wiki/dokumentenverwaltung-03-b7bb07c3.png)

Um die Dokumente zu archivieren, müssen Sie einen der zusätzlich eingeblendeten Menüpunkte beim Druck eines Dokumentes auswählen.

![Dokumentenverwaltung-04](/bilder/wiki/dokumentenverwaltung-04-aef82aac.png)

Vielleicht wundern Sie sich, dass bei Ihnen das Druckmenü noch genauso aussieht wie vor der Aktivierung der Dokumentenverwaltung. Für die Archivierung müssen **drei Bedingungen** erfüllt sein:

- \- die Datenquelle *Schüler* muss für den Report ausgewählt sein
- \- es muss eine Gruppierung bezüglich eines Datenfeldes der Datenquelle im Report vorhanden sein, z.B. nach Schueler_Id
- \- Auswahl *Drucker mit Archivierung* oder *nur Archivierung (in Dokumentenverwaltung)* im Druckmenü

**Erstellen geeigneter Reports**

Damit ein Report mit der Dokumentenverwaltung zusammenarbeitet, muss er eine Gruppe haben. Diese Gruppen richtet man wie folgt ein:

Öffnen Sie einen bestehenden Report zur Bearbeitung oder erstellen Sie einen neuen Report. Unter Bericht -\> Gruppen öffnet sich das Fenster für die benötigten Einstellungen.

![Dokumentenverwaltung-05](/bilder/wiki/dokumentenverwaltung-05-ce5b1276.png)

Fügen Sie nun eine Gruppe ein, die mit den Schülerdatensätzen wechselt. Dies kann ein Label (hier NameVorname) sein.

![Dokumentenverwaltung-06](/bilder/wiki/dokumentenverwaltung-06-cc4a930d.png)

Dieses Feld kann auch ein (unsichtbares) Datenfeld mit der SchülerID sein, um sicherzustellen, dass ein Gruppenwechsel (in diesem Moment wird das Dokumentenverzeichnis gewechselt) auch bei jedem Schüler stattfindet.

![Dokumentenverwaltung-07](/bilder/wiki/dokumentenverwaltung-07-2b615279.png)

Jetzt kann der Report wie gewohnt mit Doppelklick gedruckt werden, es erscheint dann das Druckmenü mit den zusätzlichen Auswahlmöglichkeiten *Drucker mit Archivierung* oder *nur Archivierung (in Dokumentenverwaltung)*.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-538) · [Dokumentenverwaltung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Dokumentenverwaltung&oldid=3436)
