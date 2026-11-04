# Zeugnisse ausgeben

Für eine Ausgabe in Heftform folgen Sie anschließend der Anleitung zum [Broschürendruck](/zeugnisse/vorbereitung/zeugnisse-broschuerendruck?rubrik=reporting).

## Allgemeine Angaben

Um die Noten und Bemerkungen über den Report-Explorer von SchILDzentral als Zeugnis auszugeben, muss zuerst (sofern noch nicht geschehen) die entsprechende „Druckvorlage“ in ein geeignetes Verzeichnis unterhalb Ihres Report-Verzeichnisses kopiert werden.

Das Report-Verzeichnis heißt in der Regel „\\SchILD-NRW 2-Reports“ und befindet sich in Ihrem Schulverzeichnis. Im Report-Verzeichnis sollten Sie ein geeignetes Unterverzeichnis (z.B. „GS-Zeugnisse“, der Name ist aber beliebig) anlegen. In dieses Verzeichnis kopieren Sie bitte die Druckvorlagen

- GS-Zeugnis_Klasse_01_bis_04.rtm (Vorlage für Textzeugnis)
- GrundschulzeugnisEinstellungen.ini (Konfigurationsdatei, über die Einträge darin lässt sich das Verhalten der Zeugnis-Reportvorlage steuern, siehe Anlage 2)

Falls diese Ihnen nicht vorliegt, fragen Sie bitte Ihren Schulträger oder Ihren Fachberater.

Das Layout des Deckblattes (Zeugnis_Kopf_GS.rtm) kann von Ihnen (in gewissem Rahmen) verändert werden, die eigentliche Zeugnisvorlage („GS- Zeugnis_Klasse_01_bis_04.rtm“), die die eigentliche Logik enthalten, sollten nicht verändert werden (Änderungen gehen bei einem Update der beiden Vorlagen verloren). Sie können das Erscheinungsbild aber über Einträge in einer Konfigurationsdatei individuell anpassen. Weitere Details hierzu finden Sie in Anhang 2.

Hinweis: Falls Sie für bestimmte Jahrgänge abweichende Deckblätter verwenden möchten, so gehen Sie wie folgt vor:

- Legen Sie für jeden Jahrgang ein separates Verzeichnis an (z.B. \\SchILD-NRW 2- Reports\\GS-Zeugniss\\E1, . \\SchILD-NRW 2-Reports\\GS-Zeugniss\\E2 usw.)
- Kopieren Sie die o.a. Reportvorlagen in jedes dieser Unterverzeichnisse.
- Passen Sie das Deckblatt (Zeugnis_Kopf_GS.rtm) jahrgangsbezogen an, markieren Sie dazu die jeweilige Vorlage, aktivieren Sie die rechte Maustaste und wählen die Option „Report bearbeiten“. Es erscheint dann der Report-

Designer von SchILD-NRW 2.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 21](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-21-bild-030.png)

Um ein Zeugnis auszudrucken, gehen Sie wie folgt vor:

- Filtern Sie auf die jeweilige Klasse oder den Jahrgang. Die Zeugnisvorlage erkennt zwar automatisch, in welchen Jahrgang (und Halbjahr) sich ein Kind befindet (und steuert damit das Erscheinungsbild des Zeugnisses), dennoch empfiehlt es sich, vor der Ausgabe auf eine Klasse oder einen Jahrgang zu filtern, insbesondere, wenn die Vorlage aus unterschiedlichen Verzeichnissen geladen werden (wegen eines jahrgangsbezogenen Layouts des Deckblattes).
- Klicken Sie danach auf den Schalter „Drucken“ in der Werkzeugleiste von SchILDzentral, es erscheint dann der Report-Explorer.
- Im linken Teil des Fensters werden die einzelnen Verzeichnisse unterhalb des Reportverzeichnisses angezeigt, im rechten Teil die Reportvorlagen, die sich im jeweils ausgewählten Unterverzeichnis befinden.
- Wählen Sie dort das Verzeichnis aus, das die gewünschte Reportvorlage enthält.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 21](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-21-bild-031.png)

- Um einen Report auszugeben, führen Sie einen Doppelklick auf die entsprechende Vorlage aus. Bei Vorlagen, die Schülerdaten ausgeben, erscheint anschließend das folgende Fenster.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 22](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-22-bild-032.png)

Hier können Sie z.B. auswählen, ob die ausgewählte Vorlage erst in einem Vorschaufenster angezeigt oder direkt auf einem Drucker ausgegeben werden soll. Weiterhin können Sie festlegen, ob die Ausgabe nur für den ausgewählten Schüler oder die ganze Gruppe (Klasse, Jahrgang) erfolgen soll. Bei Zeugnissen wird man i.d.R. die Option „die ganze Gruppe“ wählen.

- Bei einer Zeugnisvorlage erscheint dann das folgende Fenster, in dem Sie Angaben zum Wiederbeginn des Unterrichters und evtl. zu Elternsprechtagen machen können. Die hier gemachten Angaben werden auch auf dem Zeugnis ausgegeben.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 22](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-22-bild-033.png)

Falls die Zeugnisse als „Broschüren“ ausgegeben werden sollen, beachten Sie bitte die Hinweise in Anhang 3.

## Spezielle Informationen zum Textzeugnis

Im Folgenden finden Sie einige Erläuterungen, wie sich das Erscheinungsbild des Text-Zeugnisses beeinflussen lässt. Dies wird mit Beispielausgaben für den Jahrgang 03 und 04 im Anhang 4 demonstriert.

### Anzeige von Arbeits- und Sozialverhalten

Die Zeugnisvorlage enthält einen Bereich, in dem die Angaben zum Arbeits- und Sozialverhalten angezeigt werden. Dieser Bereich wird aber nur angezeigt, wenn tatsächlich eine Texteingabe für das Arbeits- und Sozialverhalten vorhanden ist.

### Anzeige von Lernentwicklung- und Leistungsstand

Die Zeugnisvorlage enthält einen weiteren Bereich, in dem allgemeine Angaben zur Lernentwicklung und zum Leistungsstand ausgegeben werden können. Dieser Bereich wird aber nur angezeigt, wenn tatsächlich eine entsprechende Texteingabe vorhanden ist. Falls dies der Fall ist, haben diese allgemeinen Bemerkungen Vorrang vor evtl. vorhandenen fachbezogenen Bemerkungen zur Lernentwicklung und zum Leistungsstand. Sie müssen sich daher grundsätzlich entscheiden, ob bei einem

Kind für die Lernentwicklung und den Leistungsstand Bemerkungen pro Fach gemacht (und ausgegeben) werden sollen oder ob die Lernentwicklung und der Leistungsstand zusammenfassend beurteilt werden soll.

### Versetzungsvermerk

Wird das Zeugnis für das zweite Halbjahr erzeugt, so wird auch der Versetzungsvermerk (in der Form „Markus wird zum 01.08.2013 in die Klasse 03A versetzt“) ausgegeben. Dazu werden die Angaben auf dem Karteireiter „Akt. Halbjahr“ ausgewertet.

![Abbildung zu Versetzungsvermerk aus der PDF-Anleitung auf Seite 23](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-23-bild-034.png)

Empfehlung zur Wahl der Schulformen in der Sekundarstufe I: Wird das Zeugnis im ersten Halbjahr für einen Schüler der Jahrgangsstufe 04 erzeugt, so wird auch die Empfehlung zur Wahl der Schulform in der Sekundarstufe I mit ausgegeben.

Hinweis: Die Empfehlung zur Wahl kann auf dem Karteireiter „Individualdaten II“, Rubrik „Grundschulbesuch“) eingetragen werden.

![Abbildung zu Versetzungsvermerk aus der PDF-Anleitung auf Seite 23](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-23-bild-035.png)

Außerdem können Sie auf dem Karteireiter „Akt. Halbjahr“ eine Erläuterung zu der Entscheidung eingeben

![Abbildung zu Versetzungsvermerk aus der PDF-Anleitung auf Seite 23](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-23-bild-036.png)

Über einen Doppelklick in das Textfeld öffnet sich ein Editor, mit dem Sie den Text bearbeiten können.

[Originalanleitung als PDF](/dateien/pdf/Grundschule_Textzeugnisse_mit_SchILD2_Anleitung.pdf)
