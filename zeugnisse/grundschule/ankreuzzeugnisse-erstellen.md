# Ankreuzzeugnisse mit dem Report-Explorer erstellen

Richten Sie die Fächer und Kompetenzen ein, erfassen Sie die Leistungen und geben Sie die Ankreuzzeugnisse im Report-Explorer aus.

Diese Anleitung folgt dem [Original-PDF](/dateien/pdf/Grundschule_Ankreuzzeugnisse_mit_SchILD2.pdf) des Ministeriums für Schule und Bildung des Landes NRW. Die Abbildungen stammen aus dieser Anleitung.

Die Optionen für die Vorlage können Sie auch getrennt in der [Anleitung zur INI-Datei](/zeugnisse/grundschule/ankreuzzeugnisse-ini) nachschlagen.

Für den Report-Explorer von SchILD-NRW 2 stehen nun auch Vorlagen für Ankreuzzeugnisse in der Grundschule zur Verfügung. Damit diese genutzt werden können, sind einige Dinge zu beachten, die im Folgenden erläutert werden.

## 1. Allgemeine Vorbereitungen

Da in den Zeugnissen für jedes Kind individuelle Angaben ausgeben werden sollen, müssen die Voraussetzungen geschaffen werden, jedem Kind einen individuellen Fächerkanon mit den jeweiligen Kompetenzen und Noten zuzuweisen. Dieser Vorgang setzt sich aus folgenden Einzelschritten zusammen

- Fächerkatalog konfigurieren
- Stundentafeln einrichten
- Fächer den Schülern zuweisen (über die Stundentafeln)
- Lehrer den Fächern zuweisen
- „Kompetenzbeschreibungen“ den Fächern zuweisen
- Kompetenzstufen und Noten eingeben

Für die meisten dieser Schritte gibt es in SchILD-NRW 2 entsprechende Gruppenprozesse, mit denen die jeweiligen Aufgaben rasch erledigt werden können.

### 1.1. Fächerkatalog konfigurieren

Um den Fächerkatalog zu bearbeiten, aktivieren Sie den Menüpunkt „Schulverwaltung → Unterrichtsfächer“. Es erscheint dann ein Fenster, in dem die derzeit vorhandenen Fächer aufgelistet werden:

![Abbildung zu 1.1. Fächerkatalog konfigurieren aus der PDF-Anleitung auf Seite 3](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-03-bild-001.png)

Bitte überprüfen Sie den Fächerkatalog. Er sollte mindestens die folgenden Fächer enthalten:

- Deutsch
  - Lesen

  - Rechtschreibung

  - Sprachgebrauch

- Mathematik
- Sachunterricht
- Religion
  - Katholische Religionslehre

  - Evangelische Religionslehre

  - Weitere Religionslehren (sofern vorhanden)

- Englisch
- Sport
- Musik
- Kunst

### Basis-Fächerkatalog laden

Wenn Sie bisher in SchILD-NRW 2 noch nicht mit Fächern gearbeitet haben, können Sie sich einen Basiskatalog, der die obigen Fächer enthält, automatisch erzeugen, indem Sie auf den Schalter „Basis-Fächerkatalog laden“ klicken. Es erscheint dann der Hinweis

![Abbildung zu Basis-Fächerkatalog laden aus der PDF-Anleitung auf Seite 4](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-04-bild-002.png)

Diesen Hinweis sollten Sie nur mit „Ja“ bestätigen, wenn Sie bisher noch keine Fächer den Schülern zugewiesen haben.

### Fächer einzeln anlegen und bearbeiten

Der Fächerkatalog kann aber auch jederzeit individuell ergänzt werden. Das folgende Beispiel zeigt, wie Sie islamische Religionslehre ergänzen.

Um ein weiteres Fach anzulegen, aktivieren Sie den „Plus“-Schalter auf dem Karteireiter „Übersicht“:

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 5](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-05-bild-003.png)

Es wird dann der Karteireiter „Details“ mit einer leeren Maske angezeigt.

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 5](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-05-bild-004.png)

Wählen Sie nun aus der Liste, die sich unter „ASD-Bezeichnung“ aufklappen lässt, ein passendes „Basisfach“ aus (Hinweis: Sie können in SchILD-NRW 2 beliebige weitere Fächer anlegen, jedes Fach muss sich aber auf ein gültiges Basisfach beziehen). In der Liste tauchen alle Fächer auf, die an Ihrer Schule grundsätzlich vorkommen können. Für das Beispiel wählen wir den Eintrag „Islamische Religionslehre“ aus.

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 6](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-06-bild-005.png)

Durch die Auswahl des Faches werden einige weitere Felder (z.B. „interne Kurzform“, „Bezeichnung“ im Zeugnis“) bereits gefüllt.

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 6](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-06-bild-006.png)

Hierzu einige Erläuterungen: Jedes Fach hat eine „interne Kurzform“ (im obigen Beispiel „IL“). Diese können Sie grundsätzlich frei definieren, es wird aber empfohlen, zumindest für die Fächer, die auf dem Zeugnis ausgegeben werden sollen, die Standard-Vorgaben zu verwenden. Die „Bezeichnung im Zeugnis“ ist der Text, mit dem das jeweilige Fach auf dem Zeugnis ausgegeben wird. Bitte achten Sie darauf, dass dieser nicht zu lang ist, andernfalls kann es Platzprobleme auf dem Zeugnis geben.

Wichtig: Jedes Fach muss einer „Fächergruppe“ zugewiesen werden. Diese steuert, in welcher „Rubrik“ (und damit Reihenfolge) ein Fach auf dem Zeugnis erscheint. Die Fächergruppe wird nicht automatisch zugewiesen, bitte wählen Sie die passende Gruppe aus (in unserem Beispiel also „Religion“).

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 6](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-06-bild-007.png)

Und hier noch ein weiterer Hinweis: Das Häkchen bei „Auf Zeugnis“ steuert, ob ein Fach auf dem Zeugnis erscheinen soll. Eine Deaktivierung ist z.B. bei einem Förderunterricht sinnvoll.

### Besondere Hinweise für „Deutsch“

Das Fach „Deutsch“ wird an der Grundschule einmal als „Hauptfach“ auf dem Zeugnis ausgegeben, daneben aber zusätzlich auch als

- Lesen
- Rechtschreiben
- Sprachgebrauch

Da auch diese „Teilfächer“ einzeln benotet werden, müssen sie ebenfalls als Einträge in der Fächerliste vorhanden sein. Bei diesen drei Fächern kann als Fachgruppe entweder „Deutsch“ oder „Sprache“ verwendet werden. Die Wahl der Fächergruppe hat Auswirkungen auf den Zeugnisdruck, Sie sollten den Eintrag daher von folgenden Überlegungen abhängig machen:

- Wenn Sie zu jedem der drei Fächer individuelle Bemerkungen zum Lern- und Leistungsstand machen möchten (die auch einzeln auf dem Zeugnis ausgegeben werden sollen), so muss als Fächergruppe „Deutsch“ gewählt werden.
- Soll dagegen der Lern- und Leistungsstand nur beim Fach „Deutsch“ eingetragen (und auf dem Zeugnis ausgegeben) werden, so wählen Sie bei „Lesen“, „Rechtschreiben“ und „Sprachgebrauch“ die Fächergruppe „Sprache“.

Hinweis: Das Fach „Deutsch“ sollte aber grundsätzlich der Fächergruppe „Deutsch“ zugeordnet werden.

Wichtig: Damit die Fächer in der gewünschten Reihenfolge auf dem Zeugnis erscheinen, muss die „Sortierung“ korrekt eingestellt sein. Gehen Sie hierzu wie folgt vor:

- Stellen Sie in der Fächerverwaltung die Sortierung auf „Benutzerdefiniert“

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 7](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-07-bild-008.png)

- Geben Sie bei „Deutsch“ in der Spalte „Sortiernr.“ eine „passende“ Zahl ein, z.B. 10). Im Prinzip ist es egal, welche Zahl Sie wählen, nur sollte „Deutsch“ innerhalb der Gruppe der Sprachfächer (also Deutsch, Lesen, Rechtschreiben und Sprachgebrauch) die niedrigste Nummer haben.
- Geben Sie jeweils bei den anderen Fächern eine höhere Nummer ein, die Nummer definiert, in welcher Reihenfolge die Fächer ausgegeben werden.

Falls schon Fächer bei den Schülern hinterlegt sind, muss die so angepasste Reihenfolge auch auf die „Schülerfächer“ übertragen werden. Schließen Sie dazu die Fächerverwaltung und aktivieren Sie im Hauptfenster den Menüpunkt „Extras → Fächer in Leistungsdaten neu sortieren“. Es erscheint dann eine Abfrage, für welches Halbjahr der Vorgang erfolgen soll, Vorgabe dabei ist das aktuelle Halbjahr.

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 8](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-08-bild-009.png)

Anschließend sollten die Fächer auf dem Karteireiter „Akt. Halbjahr“ in der von Ihnen definierten Reihenfolge erscheinen:

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 8](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-08-bild-010.png)

### 1.2. Stundentafeln einrichten

Nachdem der Fächerkatalog eingerichtet wurde, können Stundentafeln eingerichtet werden. Eine Stundentafel ist eine Teilmenge der vorhandenen Fächer, die unter einem Namen zusammengefasst werden und die den Unterricht beschreiben, der z.B. in einem Jahrgang gegeben wird. Da sich die Zusammensetzung des Unterrichtes nur selten ändert, müssen die Stundentafeln in der Regel nur einmal angelegt werden.

Um eine Stundentafel anzulegen oder zu bearbeiten, aktivieren Sie den Menüpunkt „Schulverwaltung → Stundentafeln“. Es erscheint das folgende Fenster:

![Abbildung zu 1.2. Stundentafeln einrichten aus der PDF-Anleitung auf Seite 9](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-09-bild-011.png)

Im oberen Teil werden die vorhandenen Stundentafeln angezeigt, im unteren Teil die Fächer, die zur jeweils ausgewählten Stundentafel gehören.

Wenn Sie noch keine Stundentafeln eingerichtet haben, können Sie diese über den Schalter „Standard-Stundentafeln anlegen“ automatisch erzeugen lassen. Sie können die Stundentafeln aber auch individuell anlegen, aktivieren Sie dazu den „Plus“-Schalter (im oberen Teil des Fensters). In der Tabelle wird dann eine neue leere Zeile eingefügt. Wählen Sie dann den Jahrgang, für den die Stundentafel gelten soll, aus der Liste aus und geben Sie eine aussagekräftige Bezeichnung ein (frei wählbar).

Nachdem dies geschehen ist, aktivieren Sie den „Häkchen“-Schalter, um die Bezeichnung der Stundentafel zu speichern.

![Abbildung zu 1.2. Stundentafeln einrichten aus der PDF-Anleitung auf Seite 10](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-10-bild-012.png)

Nun können die Fächer zu der neu angelegten Stundentafel eingerichtet werden. Wechseln Sie dazu in den unteren Teil des Fensters und aktivieren Sie den dortigen „Plus“-Schalter. Es wird wieder eine leere Zeile in der Tabelle angelegt, wählen Sie in der Spalte „Fach“ ein Fach aus, das in der Stundentafel enthalten sein soll (Auswahlliste).

![Abbildung zu 1.2. Stundentafeln einrichten aus der PDF-Anleitung auf Seite 10](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-10-bild-013.png)

Optional können Sie auch die Kursart (meist PUK=Unterricht im Klassenverband) und die „Wochenzeiteinheiten“ (WZE, i.d.R. die Anzahl der Schulstunden, sofern Ihre Schule nicht ein alternatives Stundenmodell benutzt) eingeben. Geben Sie so alle Fächer der Stundentafel ein.

Bitte beachten Sie, dass in der Stundentafel keine Lehrkräfte zugewiesen werden, da diese pro Klasse und pro Schuljahr wechseln können.

Hinweis: In der Grundschule sind die Stundentafeln für die einzelnen Jahrgänge in der Regel recht ähnlich. Damit Sie die Fächer nicht zu jeder einzelnen Stundentafel auf die oben beschriebene Weise eingeben müssen, können Sie wie folgt vorgehen:

- Geben Sie eine Stundentafel wie beschrieben ein
- Aktivieren Sie dann den Schalter „Fächer kopieren“
- Legen Sie dann eine neue Stundentafel an und speichern diese
- Aktvieren Sie dann den Schalter „Fächer einfügen“

### Sonderfall Religion

Religion nimmt bei den Stundentafeln eine gewisse Sonderrolle ein. Im Gegensatz zu den anderen Fächern wird katholische und evangelische Religionslehre (und evtl. auch islamische Religionslehre) nur einem Teil der Schüler des jeweiligen

Jahrganges zugewiesen. Es gibt zwei Optionen, mit den Religionsfächern umzugehen:

- Die Religionsfächer sind in den Stundentafeln enthalten Nach der Zuweisung der Stundentafeln (s.u.) muss dann bei den Kindern, die den betreffenden Religionsunterricht nicht besuchen, das Fach gelöscht (oder das Häkchen „auf Zeugnis“ deaktiviert) werden.
- Die Religionsfächer sind in den Stundentafeln nicht enthalten Nach der Zuweisung der Stundentafeln muss das jeweilige Religionsfach individuell den jeweiligen Kindern zugewiesen werden.

Beide Optionen sind im Anhang 1 beschrieben.

### 1.3. Stundentafel zuweisen

Nachdem die Stundentafeln eingerichtet wurden, können sie über einen Gruppenprozess den Schülern zugewiesen werden. Gehen Sie hierzu wie folgt vor:

- Filtern Sie auf den jeweiligen Jahrgang
- Aktivieren Sie den Gruppenprozess „Fächer → Stundentafeln zuweisen“

![Abbildung zu 1.3. Stundentafel zuweisen aus der PDF-Anleitung auf Seite 11](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-11-bild-014.png)

- Wählen Sie die Stundentafel für den Jahrgang aus

![Abbildung zu 1.3. Stundentafel zuweisen aus der PDF-Anleitung auf Seite 11](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-11-bild-015.png)

und aktivieren Sie dann den Schalter „Übernehmen“. Anschließend können Sie ggf. das Schuljahr auswählen (standardmäßig werden die Fächer der Stundentafel in das aktuelle Halbjahr eingetragen). Nach Abschluss des Gruppenprozesses sind dann bei allen Kindern des ausgewählten Jahrganges die Fächer aus der Stundentafel eingetragen (auf Karteireiter „Akt. Halbjahr → Leistungsdaten“).

### 1.4. Lehrkräfte zuweisen

Nach der Zuweisung der Stundentafel sollten auch die Lehrkräfte, die die einzelnen Fächer unterrichten, zugewiesen werden:

Wichtig: Wenn die Noteneingabe über die Internet-Anwendung SchILDweb erfolgen soll, muss die Zuweisung der Lehrkräfte zwingend erfolgen. In SchILDweb können Noten nur von den Lehrkräften eingegeben werden, die das jeweilige Fach unterrichten.

Die Zuweisung der Lehrkräfte für die einzelnen Fächer erfolgt auf Klassenebene (da das gleiche Fach von unterschiedlichen Lehrkräften unterrichtet werden kann), die Bearbeitung ist aber auch für einen kompletten Jahrgang möglich, d.h. Sie können die Filterung auf den Jahrgang (wie bei der Zuweisung der Stundentafeln) beibehalten.

Gehen Sie dann wie folgt vor:

- Aktivieren Sie den Gruppenprozess „Fächer → Klassenunterrichte bearbeiten“

![Abbildung zu 1.4. Lehrkräfte zuweisen aus der PDF-Anleitung auf Seite 12](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-12-bild-016.png)

- Es erscheint dann eine Liste der Fächer, die in den Klassen unterrichtet werden.

![Abbildung zu 1.4. Lehrkräfte zuweisen aus der PDF-Anleitung auf Seite 12](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-12-bild-017.png)

- Tragen Sie nun pro Fach die Lehrkraft ein, die ein Fach in der jeweiligen Klasse unterrichtet.

![Abbildung zu 1.4. Lehrkräfte zuweisen aus der PDF-Anleitung auf Seite 13](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-13-bild-018.png)

- Beim Schließen des Fensters erscheint dann eine Abfrage, ob die Änderung gespeichert werden soll.

## 2. Spezielle Vorbereitungen für Ankreuzzeugnisse

In Ankreuzzeugnissen (auch Rasterzeugnisse genannt) wird pro Fach eine bestimmte Anzahl von „Kompetenzbeschreibungen“ ausgegeben, durch das „Ankreuzen“ einer (von bis zu fünf) „Kompetenzstufen“ werde dann die Fähigkeiten eines Kindes beurteilt.

![Abbildung zu 2. Spezielle Vorbereitungen für Ankreuzzeugnisse aus der PDF-Anleitung auf Seite 13](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-13-bild-019.png)

Dazu sind folgende Vorarbeiten notwendig:

### 2.1 Kompetenzbeschreibungen bearbeiten

Kompetenzbeschreibungen sind die (i.d.R. einzeiligen) Texte, die in den Zeugnissen erscheinen und für die dann eine Kompetenzstufe angekreuzt wird. Die Bearbeitung erfolgt in SchILD-NRW 2 über den Menüpunkt „Schulverwaltung → Angaben zu Ankreuzzeugnissen“. Es erscheint dann das folgende Fenster:

![Abbildung zu 2.1 Kompetenzbeschreibungen bearbeiten aus der PDF-Anleitung auf Seite 14](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-14-bild-020.png)

Die Bearbeitung erfolgt immer für das betreffende Fach, dieses wird aus der Liste ausgewählt:

![Abbildung zu 2.1 Kompetenzbeschreibungen bearbeiten aus der PDF-Anleitung auf Seite 14](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-14-bild-021.png)

Hinweis: Auch „Arbeits- und Sozialverhalten“ wird bei den Ankreuzkompetenzen wie ein Fach behandelt (obwohl es kein Fach im engeren Sinne ist). Jede Ankreuzkompetenz ist zudem einem Jahrgang zugeordnet, daher muss auch dieser ausgewählt werden.

Bei der Eingabe einer Beschreibungen kann auch festgelegt werden, für welches Halbjahr diese gelten soll.

Bei der Ausgabe auf dem Zeugnis werden die Kompetenzberschreibungen zu einem Fach in der Reihenfolge ausgegeben, die sich durch die Nummer in der Spalte „Sortierung“ ergibt. Die Sortiernummer kann manuell eingetragen oder geändert werden, alternativ können auch die Schalter mit den roten Pfeilen am rechten Rand des Fensters benutzt werden.

Neben der manuellen Eingabe in SchILD-NRW 2 ist auch ein Import aus einer Excel-Datei möglich (über den Schalter „Import“). Die Excel-Datei muss wie folgt aufgebaut sein:

![Abbildung zu 2.1 Kompetenzbeschreibungen bearbeiten aus der PDF-Anleitung auf Seite 14](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-14-bild-022.png)

In der Spalte „Fach“ ist bei Kompetenzbeschreibungen für das Arbeits- und Sozialverhalten „ASV“ einzutragen, bei den „echten“ Fächern das Fachkürzel wie im Fächerkatalog von SchILD-NRW 2.

Hier noch weitere Hinweise:

### Jahrgang 03

Für den Jahrgang E3 können keine Kompetenzbeschreibungen vergeben werden, es werden vielmehr die gleichen Beschreibungen wie für Jahrgang E2 verwendet.

### Unterkategorien

Zu einem Fach können durch Unterkategorien gebildet werden. Beispiel: Das Arbeits- und Sozialverhalten soll im Zeugnis in zwei Unterkategorien „Lern- und Leistungsbereitschaft“ und „Zuverlässigkeit und Sorgfalt“ ausgegeben werden. Die einzelnen Kompetenzbeschreibungen dazu sind dann wie folgt einzutragen

- Lern- und Leistungsbereitschaft: Kompetenzbeschreibung 1
- Lern- und Leistungsbereitschaft: Kompetenzbeschreibung 2
- Lern- und Leistungsbereitschaft: Kompetenzbeschreibung 3
- Lern- und Leistungsbereitschaft: Kompetenzbeschreibung 4
- Zuverlässigkeit und Sorgfalt: Kompetenzbeschreibung 1
- Zuverlässigkeit und Sorgfalt: Kompetenzbeschreibung 2
- Zuverlässigkeit und Sorgfalt: Kompetenzbeschreibung 3
- Zuverlässigkeit und Sorgfalt: Kompetenzbeschreibung 4
- Usw.

„Kompetenzbeschreibung 1..4“ ist dabei durch die konkreten Beschreibungen zu ersetzen.

Folgende Punkte sind dabei zu beachten´:

- Die Trennung der „Unterkategorie“ zu der eigentlichen Kompetenzbeschreibung erfolgt durch einen Doppelpunkt.
- Alle Einträge, die zur gleichen Unterkategorie gehören sollen, muss der Text vor dem Doppelpunkt exakt gleich geschrieben werden.
- Alle Einträge, die zur gleichen Unterkategorie gehören sollen, müssen in der Tabelle (durch Eintrag entsprechender Sortiernummern) zusammen stehen.

Im Zeugnis sieht das dann z.B. so aus:

![Abbildung zu Unterkategorien aus der PDF-Anleitung auf Seite 15](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-15-bild-023.png)

### Zeilenumbrüche

Wenn eine Kompetenzbeschreibung länger als eine Zeile ist, so erfolgt im Zeugnis ein automatischer Zeilenumbruch. Falls aber der Text mit einem Spiegelstrich o.ä.

beginn, wird dann die zweite Zeile nicht automatisch eingerückt. Das sieht dann im Ausdruck nicht so schön aus:

![Abbildung zu Zeilenumbrüche aus der PDF-Anleitung auf Seite 16](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-16-bild-024.png)

Durch Einfügen eines #-Zeichens in die Kompetenzbeschreibung kann ein Zeilenumbruch an der entsprechenden Stelle mit Einrückung in der nächsten Zeile erzwungen werden:

![Abbildung zu Zeilenumbrüche aus der PDF-Anleitung auf Seite 16](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-16-bild-025.png)

Im Ausdruck sieht das dann so aus:

![Abbildung zu Zeilenumbrüche aus der PDF-Anleitung auf Seite 16](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-16-bild-026.png)

### Besondere Hinweise für „Deutsch“

Für das eigentliche Kernfach „Deutsch“ werden oft keine expliziten Kompetenzbeschreibungen verwendet, vielmehr werden diese den Teilfächern „Lesen“, „Rechtschreiben“ und „Sprachgebrauch“ zugewiesen. In der Reportvorlage wird in einem solchen Fall automatisch eine Überschrift „Deutsch“ erzeugt, zusätzlich auch die Überschriften der Teilfächer.

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 17](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-17-bild-027.png)

Wichtig: Falls auch für das Fach „Deutsch“ Kompetenzbeschreibungen vorhanden sind (die dann auch auf dem Zeugnis erscheinen), so muss (durch entsprechende Sortierung im Fächerkatalog) dafür gesorgt werden, dass das Fach „Deutsch“ zuerst in der Fächergruppe „Deutsch“ erscheint, andernfalls wird die Überschrift doppelt ausgegeben.

Wenn gewünscht wird, dass das Wort „Deutsch“ auch bei den Teilfächern erscheint, so tragen Sie im Fächerkatalog („Schulverwaltung → Unterrichtsfächer“) im Feld „Bezeichnung im Überweisungszeugnis“ den gewünschten Titel ein, z.B.:

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 17](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-17-bild-028.png)

Im Zeugnis sieht das dann so aus:

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 18](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-18-bild-029.png)

Hinweis: Das Feld „Bezeichnung im Überweisungszeugnis“ wird an der Grundschule normalerweise nicht benötigt, es macht also nichts, wenn es für die Verwendung im Ankreuzzeugnis „umgewidmet“ wird.

Wichtig: Bitte tragen Sie die gewünschte Bezeichnung nicht im Feld „Bezeichnung im Zeugnis“ ein. Hier sollte weiterhin die eigentliche Zeugnisbezeichnung stehen. Der Grund ist, dass ab dem dritten Jahrgang ja auch Noten auf dem Zeugnis ausgegeben werden, dort sollte dann die eigentliche Zeugnisbezeichnung des jeweiligen Teilfaches stehen.

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 18](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-18-bild-030.png)

### 2.2 Weitere Angaben zu Ankreuzzeugnissen

### Kompetenzstufen

Neben den Kompetenzbeschreibungen müssen auch die Texte für die „Kompetenzstufen“ festgelegt werden. Das sind die Überschriften, die im Zeugnis oberhalb der „Ankreuzkästchen“ stehen:

![Abbildung zu Kompetenzstufen aus der PDF-Anleitung auf Seite 19](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-19-bild-031.png)

Die Bearbeitung erfolgt auf dem Karteireiter „Weitere Angaben“ im Fenster „Angaben zu Ankreuzzeugnissen“:

![Abbildung zu Kompetenzstufen aus der PDF-Anleitung auf Seite 19](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-19-bild-032.png)

Sie können Texte für fünf Kompetenzstufen eingeben, wenn für die fünfte Stufe kein Text eingegeben wird, erscheinen auf dem Zeugnis auch nur 4 „Kästchenspalten“.

Falls ein zweizeiliger Text als Überschrift ausgegeben werden soll, so ist ein #- Zeichen als „Zeilenumbruch“ einzugeben:

![Abbildung zu Kompetenzstufen aus der PDF-Anleitung auf Seite 19](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-19-bild-033.png)

Im Zeugnis sieht das dann so aus:

![Abbildung zu Kompetenzstufen aus der PDF-Anleitung auf Seite 20](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-20-bild-034.png)

### Frei definierbare Zeugnisrubrik

Neben den fest vorgegebenen Fächern (zuzüglich Arbeits- und Sozialverhalten), kann bei Bedarf auch eine frei definierbares zusätzliche „Zeugnisrubrik“ verwendet werden.

![Abbildung zu Frei definierbare Zeugnisrubrik aus der PDF-Anleitung auf Seite 20](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-20-bild-035.png)

Wenn eine entsprechende Bezeichnung eingetragen ist, so können dafür Kompetenzbeschreibungen unter der Fachbezeichnung „Sonstiges“ bearbeitet werden.

![Abbildung zu Frei definierbare Zeugnisrubrik aus der PDF-Anleitung auf Seite 20](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-20-bild-036.png)

Auf dem Zeugnis wird aber die selbst definierte Bezeichnung verwendet.

### 2.3 Zuweisung der Kompetenzbeschreibungen

Nachdem die Einträge für die Ankreuzzeugnisse abgeschlossen sind, müssen die einzelnen Kompetenzbeschreibungen den Kindern (in Abhängigkeit von Jahrgang und Halbjahr) zugewiesen werden, damit anschließend eine individuelle Beurteilung erfolgen kann. Dazu muss aber erst festgelegt werden, in welchen Klassen Ankreuzzeugnisse verwendet werden sollen. Dies erfolgt über den Menüpunkt „Schulverwaltung → Klassen/Versetzungstabelle“.

Bei diesen Klassen aktivieren Sie auf dem Karteireiter „Details“ das Häkchen „In dieser Klasse werden Ankreuzzeugnisse verwendet“.

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 21](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-21-bild-037.png)

Als Konsequenz erscheint dann bei allen Kindern, die die betreffenden Klassen besuchen, auf dem Karteireiter „Akt.Halbjahr“ ein zusätzlicher Unter-Karteireiter „Kompetenzen f. Ankreuzzeugnisse“:

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 21](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-21-bild-038.png)

Durch Aktivierung des Schalters „Kompetenzbeschreibungen holen“ werden dann die Kompetenzbeschreibungen, die für den Jahrgang des Kindes und das jeweilige Halbjahr vorhanden sind, geholt.

Wichtig: Damit Kompetenzbeschreibungen einem Kind zugewiesen werden können, müssen auf dem Karteireiter „Leistungsdaten“ auch die zugehörigen Fächer vorhanden sein. Ohne Fächer können keine Kompetenzstufen zugewiesen werden, weder in SchILD-NRW 2/SchILDzentral noch in SchILDweb!

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 21](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-21-bild-039.png)

Hinweis: Für das Holen der Kompetenzbeschreibungen gibt es auch einen Gruppenprozess:

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 22](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-22-bild-040.png)

Danach erscheinen auf dem Karteireiter „Kompetenzen f. Ankreuzzeugnisse“ die Fächer, für die Kompetenzbeschreibungen vorhanden sind.

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 22](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-22-bild-041.png)

Durch Klicken auf das kleine +-Zeichen neben einem Fach werden die dazu vorhandenen Kompetenzbeschreibungen angezeigt.

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 22](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-22-bild-042.png)

Die jeweilige Kompetenzstufe kann dann durch Klicken in das entsprechende Kästchen aktiviert werden.

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 22](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-22-bild-043.png)

Sonderfall Kind in der ersten Klasse im Jahrgang E2:

In ausnahmefällen kann es vorkommen, dass ein Kind in der ertsen Klasse schon im Jahrgang E2 ist, weil es einen Rücktritt in der Schuleingangsphase gegeben hat.

In solchen Fällen würden bei solchen Kindern die Kompetenzbeschreibungen des 2. Jahrgangs geholt, was man an dieser Stelle vermeiden möchte.

Gehen Sie dazu auf den Reiter „Individualdaten II“ und geben Sie dem Kind bei EP Jahre die Zahl 1.

![Abbildung zu 2.3 Zuweisung der Kompetenzbeschreibungen aus der PDF-Anleitung auf Seite 23](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-23-bild-044.jpg)

Bitte denken Sie daran, diesen Kindern später nach dem Wechsel in die 2.Klasse dann den Wert EP-Jahre 3 zu geben.

Dieser Wert ist nicht statistik relevant und wird nur bei der Berechnung der Schulbesuchsjahre berücksichtigt.

## 3. Noteneingabe in SchILDweb

### 3.1 Allgemeine Informationen

Mit dem SchILDweb Notenmodul haben Lehrerinnen und Lehrer über das Inter- oder Intranet direkten Zugriff aus Schülerleistungsdaten in SchILDzentral. Diese können dann mit Hilfe eines aktuellen Webbrowsers eingesehen und editiert werden. Neben der reinen Noteneingabe können auch Bemerkungen zur Lernentwicklung und Zeugnisbemerkungen eingegeben werden. Dem Anwender steht hierfür eine komfortable Benutzeroberfläche mit selbstdefinierbaren Filter- und Anzeigefunktionen zur Verfügung.

Die Rechte für Datenzugriff und Bearbeitung werden von SchILDzentral gesteuert. Über ein sicheres Einmal-Kennwort wird der Zugriff auf SchILDweb aktiviert. Eine verschlüsselte SSL-Verbindung sowie ein sicheres Sitzungs-Management verhindern den Fremdzugriff auf Schülerdaten.

Damit SchILDweb von einer Lehrerin oder einem Lehrer verwendet werden kann, müssen folgende Voraussetzungen erfüllt sein:

- Für die betreffende Person muss in SchILDzentral eine gültige E-Mail-Adresse hinterlegt sein
- Bei den Schülern, die von der jeweiligen Lehrkraft unterrichtet werden, müssen die unterrichteten Fächer mit Angabe der Lehrkraft eingetragen sein (siehe Abschnitt „Stundentafeln zuweisen“)

### 3.2 Erster Aufruf

Sind die obigen Voraussetzungen erfüllt, so kann SchILDweb wie folgt gestartet werden:

- Rufen Sie SchILDweb in Ihrem Browser über die Internet-Adresse auf, die sie von Ihrem Schulträger erhalten haben
- Es erscheint dann ein Anmeldedialog, in dem Sie Ihren Login-Namen eingeben müssen. Der Login-Name setzt sich aus Ihrem Lehrerkürzel (wie in SchILDzentral) und der Schulnummer Ihrer Schule zusammen. Beispiel: Wenn das Lehrerkürzel MEI ist und Sie an der Schule mit der Schulnr. 123456 unterrichten, so geben Sie als Login-Name MEI123456 ein.

![Abbildung zu 3.2 Erster Aufruf aus der PDF-Anleitung auf Seite 24](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-24-bild-045.png)

- Bei der ersten Anmeldung müssen Sie ein Einmal-Kennwort beantragen, dazu klicken Sie auf den Link „Neues Passwort beantragen“.
- Anschließend müssen Sie Ihre E-Mail-Adresse angeben, die Eingabe wird mit der in SchILDzentral hinterlegten E-Mail-Adresse verglichen, nur wenn die

Angaben identisch sind, wird eine E-Mail mit einem temporären Passwort an die Adresse geschickt. Bei Eingabe einer falschen Adresse wird der Vorgang abgebrochen.

- Anschließend können Sie sich mit dem per Mail erhaltenen Passwort anmelden.
- Nach der Anmeldung muss allerdings das Passwort sofort geändert werden. An das von Ihnen gewählte Passwort werden gewisse Sicherheitsanforderungen gestellt. Es muss mindestens jeweils eines der folgenden Zeichenarten enthalten:
  - Großbuchstaben

  - Kleinbuchstaben

  - Ziffer

  - Sonderzeichen

Hinweis: Fall Sie Ihr Passwort vergessen haben (oder dreimal hintereinander ein falsches Passwort eingegeben haben), aktivieren Sie wieder den Link „Neues Passwort beantragen“, die beschriebene Prozedur muss dann erneut durchlaufen werden.

### 3.3 Noten und fachbezogene Bemerkungen eingeben

Nach erfolgreicher Anmeldung werden auf dem Karteireiter „Leistungsdaten“ die Schüler und Fächer angezeigt, die von Ihnen unterrichtet werden.

![Abbildung zu 3.3 Noten und fachbezogene Bemerkungen eingeben aus der PDF-Anleitung auf Seite 25](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-25-bild-046.png)

Die Abkürzungen in den Spaltenüberschriften haben dabei folgende Bedeutung:

- FSG: Anzahl der Gesamt-Fehlstunden
- FSU: Anzahl der unentschuldigten Fehlstunden
- FBLE: Fachbezogene Lernentwicklung

Eingaben in den ersten sechs Spalten (bis einschl. „Kurs“) sind gesperrt, eine Eingabe in den Fehlstundenspalten ist nur möglich, wenn in SchILDzentral für die jeweilige Jahrgangsstufe ein „fachbezogenes Fehlstundenmodell“ eingestellt wurde. Bei Grundschulen ist dies meist nicht der Fall, hier werden i.d.R. die „Gesamtfehlstunden“ erfasst (die nur der Klassenlehrer/die Klassenlehrerin eingeben kann).

In der Spalte „Note“ können Sie die jeweilige Note eintragen.

Bei einem Klick auf das „Stiftsymbol“ in der Spalte „FBLE“ öffnet sich ein Editor, in dem Sie eine Bemerkung zur fachbezogenen Lernentwicklung eingeben können.

![Abbildung zu 3.3 Noten und fachbezogene Bemerkungen eingeben aus der PDF-Anleitung auf Seite 26](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-26-bild-047.png)

Dabei stehen Ihnen auch die Floskeln zur Verfügung (siehe Abschnitt „Floskeln bearbeiten“). Um einen Floskeltext in den Editierbereich zu übernehmen, führen Sie einen Doppelklick auf die entsprechende Floskel aus, der Text wird dann an der jeweiligen Cursor-Position eingefügt. Sofern die Floskel auch einen Platzhalter für den Vornamen enthält, wird dieser automatisch durch den Vornamen des Kindes ersetzt.

Über das Kontrollhäkchen „Noch nacharbeiten“ können Sie festlegen, ob Sie mit der Texteingabe fertig sind. In der Tabellendarstellung wird dann das Stiftsymbol wie folgt dargestellt:

- Rot: Es ist eine Texteingabe vorhanden, diese muss aber noch nachgearbeitet werden
- Gelb: Es ist noch keine Texteingabe vorhanden
- Grün: Es ist eine Texteingabe vorhanden, die Bearbeitung ist abgeschlossen

Hinweis: Ein rotes Dreieck in einer Zelle der Tabelle deutet an, dass die jeweiligen Angaben geändert, aber noch nicht gespeichert wurden

![Abbildung zu 3.3 Noten und fachbezogene Bemerkungen eingeben aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-27-bild-048.png)

### 3.4 Änderungen speichern

Geänderte Daten werden nicht sofort in der Datenbank gespeichert. Sie können den Speichervorgang für alle geänderten Datensätze aktivieren, indem Sie den Schalter „Speichern (alle Datensätze)“ anklicken. Um nur den aktuellen Datensatz zu speichern, klicken Sie auf „Speichern (aktueller Datensatz)“

![Abbildung zu 3.4 Änderungen speichern aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-27-bild-049.png)

Alternativ können Sie auch die Tastenkombination „Alt-S“ bzw. „Alt-P“ benutzen.

Wenn Sie sich aus SchILDweb abmelden und noch nicht gespeicherte Änderungen vorhanden sind, so erscheint die folgende Abfrage, über die Sie festlegen können, was mit diesen Änderungen geschehen soll.

![Abbildung zu 3.4 Änderungen speichern aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-27-bild-050.png)

### 3.5 Kompetenzstufen eintragen

Um die Kompetenzsstufen „anzukreuzen“, wählen Sie den Karteireiter „Kompetenzen für Ankreuzzeugnisse (AZ)“ aus. Auf der linken Bildschirmseite können Sie dann die Schüler und Schülerinnen auswählen.

![Abbildung zu 3.5 Kompetenzstufen eintragen aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-27-bild-051.png)

Rechts daneben werden die Fächer, für die Kompetenzbeschreibungen vorhanden sind, angezeigt.

![Abbildung zu 3.5 Kompetenzstufen eintragen aus der PDF-Anleitung auf Seite 28](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-28-bild-052.png)

Über das „Plus-Symbol“ links neben der Fachbezeichnung können Sie die Kompetenzbeschreibungen zu diesem Fach sichtbar machen:

![Abbildung zu 3.5 Kompetenzstufen eintragen aus der PDF-Anleitung auf Seite 28](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-28-bild-053.png)

Wenn Sie eine Kompetenzstufe ankreuzen, wird am linken Rand ein rotes Stiftsymbol angezeigt.

![Abbildung zu 3.5 Kompetenzstufen eintragen aus der PDF-Anleitung auf Seite 28](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-28-bild-054.png)

Damit wird angezeigt, dass der betreffende Datensatz geändert, aber noch nicht gespeichert wurde. Zum Speichern klicken Sie oben links auf den Schalter „Speichern“, wählen Sie dort die Option „Alle Änderungen der Kompetenzen f. Ankreuzzeugnisse speichern..“ aus.

![Abbildung zu 3.5 Kompetenzstufen eintragen aus der PDF-Anleitung auf Seite 28](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-28-bild-055.png)

Anschließend werden die roten Stift-Symbole nicht mehr angezeigt.

Hinweis: Der „Speichern-Schalter“ muss natürlich nicht nach jedem Ankreuzvorgang aktiviert werden, Sie können beliebig viele Änderungen machen und diese gesammelt speichern.

### 3.6 Eingaben durch Klassenlehrer

Wenn Sie Klassenlehrer oder Klassenlehrerin sind, steht Ihnen zusätzlich noch der Karteireiter „Bereichsnoten/Bemerkungen“ zur Verfügung. In den Spalten

- A&amp;S (für Arbeits- und Sozialverhalten)
- ZB (für Zeugnis-Bemerkung)
- L&amp;L (für Lernentwicklung und Leistungsstand)

Können Sie „globale“ (also nicht an ein Fach gebundene) Texteinträge machen. Der Vorgang ist der gleiche wie zuvor beschrieben.

Hinweis: Eingaben bei den „globalen“ Angaben zur Lernentwicklung und zum Leistungsstand haben bei der Zeugnisausgabe Vorrang vor den fachbezogenen Eingaben. Wenn Sie also zu jedem Fach einen eigenen Bemerkungstext eingeben wollen, so muss dies beim jeweiligen Fach auf dem Karteireiter „Leistungsdaten“ erfolgen, auf dem Karteireiter „Bereichsnoten/Bemerkungen“ darf dann in der Spalte „L&amp;L“ nichts eingegeben werden.

Soll dagegen die Lernentwicklung und der Leistungsstand zusammenfassend für alle Fächer separat auf dem Zeugnis ausgegeben werden, so muss die Eingabe in der Spalte „L&amp;L“ erfolgen.

## 4. Zeugnisse ausgeben

Für eine Ausgabe in Heftform folgen Sie anschließend der Anleitung zum [Broschürendruck](/zeugnisse/vorbereitung/zeugnisse-broschuerendruck?rubrik=reporting).

### 4.1 Allgemeine Angaben

Um die Noten und Bemerkungen über den Report-Explorer von SchILDzentral als Zeugnis auszugeben, muss zuerst (sofern noch nicht geschehen) die entsprechende „Druckvorlage“ in ein geeignetes Verzeichnis unterhalb Ihres Report-Verzeichnisses kopiert werden.

Das Report-Verzeichnis heißt in der Regel „\\SchILD-NRW 2-Reports“ und befindet sich in Ihrem Schulverzeichnis. Im Report-Verzeichnis sollten Sie ein geeignetes Unterverzeichnis (z.B. „GS-Zeugnisse“, der Name ist aber beliebig) anlegen. In dieses Verzeichnis kopieren Sie bitte die Druckvorlagen

- Zeugnis_Kopf_GS.rtm (Deckblatt mit Schullogo und persönlichen Angaben des Kindes)
- GS-AnkreuzZeugnis.rtm (Vorlage für Ankreuzzeugnis)
- GS-AnkreuzBeurteilung.rtm (Vorlage für Ankreuzzeugnis mit separatem Beiblatt für Erläuterungen zu den Kompetenzstufen)
- AnkreuzzeugnisEinstellungen.ini (Konfigurationsdatei, über die Einträge darin lässt sich das Verhalten der Zeugnis-Reportvorlage steuern, siehe Anlage 2).

Falls diese Ihnen nicht vorliegt, fragen Sie bitte Ihren Schulträger oder Ihren Fachberater.

Das Layout des Deckblattes (Zeugnis_Kopf_GS.rtm) und des Beiblattes (Kompetenz_Erlaeuterung.rtm) kann von Ihnen (in gewissem Rahmen) verändert werden, die beiden eigentlichen Zeugnisvorlagen („GS-AnkreuzZeugnis.rtm“ und „GS-AnkreuzBeurteilung.rtm“), die die eigentliche Logik enthalten, sollten nicht verändert werden (Änderungen gehen bei einem Update der beiden Vorlagen verloren). Sie können das Erscheinungsbild aber über Einträge in einer Konfigurationsdatei individuell anpassen. Weitere Details hierzu finden Sie in Anhang 2.

Hinweis: Falls Sie für bestimmte Jahrgänge abweichende Deckblätter verwenden möchten, so gehen Sie wie folgt vor:

- Legen Sie für jeden Jahrgang ein separates Verzeichnis an (z.B. \\SchILD-NRW 2- Reports\\GS-Zeugniss\\E1, . \\SchILD-NRW 2-Reports\\GS-Zeugniss\\E2 usw.)
- Kopieren Sie die o.a. Reportvorlagen in jedes dieser Unterverzeichnisse.
- Passen Sie das Deckblatt (Zeugnis_Kopf_GS.rtm) jahrgangsbezogen an, markieren Sie dazu die jeweilige Vorlage, aktivieren Sie die rechte Maustaste und wählen die Option „Report bearbeiten“. Es erscheint dann der Report- Designer von SchILD-NRW 2.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 30](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-30-bild-056.png)

Um ein Zeugnis auszudrucken, gehen Sie wie folgt vor:

- Filtern Sie auf die jeweilige Klasse oder den Jahrgang. Die Zeugnisvorlage erkennt zwar automatisch, in welchen Jahrgang (und Halbjahr) sich ein Kind befindet (und steuert damit das Erscheinungsbild des Zeugnisses), dennoch empfiehlt es sich, vor der Ausgabe auf eine Klasse oder einen Jahrgang zu filtern, insbesondere, wenn die Vorlage aus unterschiedlichen Verzeichnissen geladen werden (wegen eines jahrgangsbezogenen Layouts des Deckblattes).
- Klicken Sie danach auf den Schalter „Drucken“ in der Werkzeugleiste von SchILDzentral, es erscheint dann der Report-Explorer.
- Im linken Teil des Fensters werden die einzelnen Verzeichnisse unterhalb des Reportverzeichnisses angezeigt, im rechten Teil die Reportvorlagen, die sich im jeweils ausgewählten Unterverzeichnis befinden.
- Wählen Sie dort das Verzeichnis aus, das die gewünschte Reportvorlage enthält.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 31](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-31-bild-057.png)

- Um einen Report auszugeben, führen Sie einen Doppelklick auf die entsprechende Vorlage aus. Bei Vorlagen, die Schülerdaten ausgeben, erscheint anschließend das folgende Fenster.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 31](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-31-bild-058.png)

Hier können Sie z.B. auswählen, ob die ausgewählte Vorlage erst in einem Vorschaufenster angezeigt oder direkt auf einem Drucker ausgegeben werden soll. Weiterhin können Sie festlegen, ob die Ausgabe nur für den ausgewählten Schüler oder die ganze Gruppe (Klasse, Jahrgang) erfolgen soll. Bei Zeugnissen wird man i.d.R. die Option „die ganze Gruppe“ wählen.

- Bei einer Zeugnisvorlage erscheint dann das folgende Fenster, in dem Sie Angaben zum Wiederbeginn des Unterrichters und evtl. zu Elternsprechtagen

machen können. Die hier gemachten Angaben werden auch auf dem Zeugnis ausgegeben.

![Abbildung zu 4.1 Allgemeine Angaben aus der PDF-Anleitung auf Seite 32](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-32-bild-059.png)

Falls die Zeugnisse als „Broschüren“ ausgegeben werden sollen, beachten Sie bitte die Hinweise in Anhang 3.

### 4.2 Spezielle Informationen auf dem Zeugnis ausgeben

### Versetzungsvermerk

Wird das Zeugnis für das zweite Halbjahr erzeugt, so wird auch der Versetzungsvermerk (in der Form „Markus wird zum 01.08.2013 in die Klasse 03A versetzt“) ausgegeben. Dazu werden die Angaben auf dem Karteireiter „Akt. Halbjahr“ ausgewertet.

![Abbildung zu Versetzungsvermerk aus der PDF-Anleitung auf Seite 32](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-32-bild-060.png)

Empfehlung zur Wahl der Schulformen in der Sekundarstufe I: Wird das Zeugnis im ersten Halbjahr für einen Schüler der Jahrgangsstufe 04 erzeugt, so wird auch die Empfehlung zur Wahl der Schulform in der Sekundarstufe I mit ausgegeben.

Hinweis: Die Empfehlung zur Wahl kann auf dem Karteireiter „Individualdaten II“, Rubrik „Grundschulbesuch“) eingetragen werden.

![Abbildung zu Versetzungsvermerk aus der PDF-Anleitung auf Seite 32](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-32-bild-061.png)

Außerdem können Sie auf dem Karteireiter „Akt. Halbjahr“ eine Erläuterung zu der Entscheidung eingeben

![Abbildung zu Versetzungsvermerk aus der PDF-Anleitung auf Seite 32](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-32-bild-062.png)

Über einen Doppelklick in das Textfeld öffnet sich ein Editor, mit dem Sie den Text bearbeiten können.

## Anhang 1: Religion individuell zuweisen bzw. löschen

Da die Klassen in den meisten Fällen konfessionell gemischt sind, kann der Religionsunterricht (genauer gesagt katholischer, evangelischer und evtl. islamischer Religionsunterricht) in der Regel nicht global für alle Kinder einer Klasse zugewiesen werden. Es gibt dazu zwei Optionen

- In die Stundentafel werden keine Religionsfächer aufgenommen, vielmehr wird das jeweilige Religionsfach nachträglich den Kindern zugewiesen.
- In die Stundentafel werden alle Religionsfächer aufgenommen, nach Zuweisung der Stundentafel werden die „überflüssigen“ Religionsfächer gelöscht.

In beiden Fällen können entsprechende Gruppenprozesse verwendet werden.

### Religionsfächer nachträglich zuweisen

Führen Sie den Vorgang klassenweise durch, d.h. filtern Sie auf eine Klasse.

Aktivieren Sie dann in der Schülerliste (linker Teil des Hauptfensters) bei den Kindern, die am evangelischen Religionsunterricht teilnehmen, das „Kontrollhäkchen“ am linken Rand. Die Namen werden mit blauem Hintergrund dargestellt. Hinweis: Der evangelische Religionsunterricht wird hier nur exemplarisch verwendet, Sie können natürlich auch mit den Kindern beginnen, die am katholischen Religionsunterricht teilnehmen.

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 33](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-33-bild-063.png)

Aktivieren Sie nun den Gruppenprozess „Fächer“, es erscheint dann das folgende Fenster

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 33](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-33-bild-064.png)

Das Programm hat erkannt, dass Sie einige Kinder explizit ausgewählt haben und

will nun „wissen“, ob der folgende Gruppenprozess sich nur auf die explizit ausgewählten Kinder beziehen soll. Da dies der Fall ist, aktivieren Sie daher die Option „nur explizit ausgewählte Schüler“.

Klicken Sie anschließend auf den Schalter „Einzelne Fächer bei Schülern hinzufügen“.

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 34](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-34-bild-065.png)

Es erscheint dann das folgende Fenster, in dem Sie das Fach und die Lehrkraft auswählen können.

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 34](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-34-bild-066.png)

Klicken Sie anschließend auf den Schalter „Fach eintragen“, danach auf den Schalter „Schließen“.

Wiederholen Sie den ganzen Vorgang mit den Kindern, die am katholischen und evtl. am islamischen Religionsunterricht teilnehmen.

Hinweis: Falls ein Religionsfach klassenübergreifend unterrichtet wird, können Sie den Vorgang z.B. auch jahrgangsweise durchführen.

### Religionsfächer nachträglich löschen

Wenn die Stundentafeln alle Religionsfächer enthalten, müssen die „überflüssigen“ nachträglich gelöscht werden. Führen Sie diesen Vorgang wieder klassenweise durch.

Markieren Sie dann wie oben beschrieben, die Kinder, die am evangelischen Religionsunterricht teilnehmen und rufen Sie dann wieder den Gruppenprozess „Fächer“ auf (wieder die Option „nur explizit ausgewählte Schüler“ verwenden).

Aktivieren Sie dann den Schalter „Einzelne Fächer bei Schülern löschen“

![Abbildung zu Religionsfächer nachträglich löschen aus der PDF-Anleitung auf Seite 35](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-35-bild-067.png)

Es erscheint das folgende Fenster, wählen Sie dort das Fach KR (katholische Religionslehre) aus (Sie haben ja die Kinder ausgewählt, die am evangelischen Religionsunterricht teilnehmen) und aktivieren Sie den Schalter „OK“.

![Abbildung zu Religionsfächer nachträglich löschen aus der PDF-Anleitung auf Seite 35](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-35-bild-068.png)

Falls die Stundentafel auch islamischen Religiosnunterricht enthält, so wiederholen Sie diesen Schritt mit diesem Fach.

Wiederholen Sie den ganzen Vorgang mit den Kindern, die am katholischen und evtl. am islamischen Religionsunterricht teilnehmen (dann natürlich sinngemäß den evangelischen und islamischen bzw. evangelischen und katholischen Religionsunterricht löschen).

## Anhang 2: Layout des Ankreuzzeugnisses konfigurieren

Über eine separate Konfigurationsdatei kann auch das Layout des Ankreuzzeugnisses angepasst werden, ohne dass die Vorlage selbst verändert werden muss. Diese Datei heißt „AnkreuzzeugnisEinstellungen.ini“ und muss sich im gleichen Verzeichnis wie die Zeugnisvorlage befinden. Wenn diese Datei vorhanden ist, wird sie auch im Report-Explorer angezeigt.

![Abbildung zu Anhang 2: Layout des Ankreuzzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 36](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-36-bild-069.png)

Wenn ein Doppelklick auf den Dateinamen ausgeführt wird, öffnet sich der Windows- Editor, damit kann dann die Datei bearbeitet werden. Hinweis: Bitte speichern Sie die Datei, wenn Sie Änderungen gemacht haben.

Der Inhalt der Datei sieht z.B. so aus:

![Abbildung zu Anhang 2: Layout des Ankreuzzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 36](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-36-bild-070.png)

Die Datei ist in mehrere „Blöcke“ unterteilt, die jeweils eine Überschrift in eckigen Klammern haben. Wichtig: Diese Überschriften dürfen nicht verändert werden. Die einzelnen Blöcke haben einen oder mehrere Optionen, die nachfolgend beschrieben sind.

### `[Fachgruppenreihenfolge]`

Hier können Sie festlegen, in welcher Reihenfolge die einzelnen Fächergruppen bei der Ausgabe des Ankreuzzeugnisses erscheinen sollen. Hinweis: Die Kompetenzbeschreibungen für das Arbeits- und Sozialverhalten und eine evtl. vorhandene zusätzliche Zeugnisrubrik (siehe Kapitel 3.2) erscheinen im Zeugnisausdruck immer am Anfang vor den „echten“ Fächern.

Der Eintrag „Englisch“ gilt stellvertretend für alle Fremdsprachen, also auch z.B. für muttersprachlichen Unterricht in Türkisch.

Wichtig: Es dürfen nur die vorgegebenen Bezeichnungen verwendet werden (deren Reihenfolge kann aber verändert werden). Beispiel für korrekte Schreibweise: KunstMusik

Beispiel für falsche Schreibweise (da in separaten Zeilen) Kunst Musik

### `[Optionen]`

In diesem Block können weitere Optionen eingestellt werden. Falls eine Option nicht verwendet werden soll, kann dem jeweiligen Text ein Semikolon vorangestellt werden (Beispiel „Duplex“ in obiger Abbildung). Die einzelnen Einträge haben folgende Bedeutung:

### Duplex

Über diese Option kann ein doppelseitiger Druck aktiviert werden (sofern der verwendete Drucker dies unterstützt). Als Vorgabe wird dabei die Seite „an der langen Seite“ gedreht (gleichbedeutend mit „Duplex=Vertikal“). Bei manchen Druckern kann es aber evtl. notwendig sein, stattdessen „Duplex=Horizontal“ zu verwenden, falls das Ergebnis mit der Option „Duplex“ oder „Duplex=Vertikal“ nicht zufriedenstellend ist.

### MitJahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird zusätzlich zu der Angabe, welcher Klasse sein Kind besucht, auch der Jahrgang mit ausgegeben (also z.B. „Bärenklasse, Jahrgang 03“). Dies hat aber nur Auswirkungen, wenn sich das Kind im Jahrgang 03 oder 04 befindet, im Jahrgang E1, E2 und E3 hat diese Option keine Auswirkung, da automatisch das Schulbesuchsjahr mit ausgegeben wird.

### Blocksatz

Im Ankreuzzeugnis können neben den Kompetenzbeschreibungen zusätzlich auch zu jedem Fach Bemerkungstexte ausgeben werden, sofern diese beim jeweiligen Kind eingetragen wurden. Wenn die Option „Blocksatz“ aktiviert ist (also ohne vorangestelltes Semikolon) werden die Textfelder im Zeugnis als Blocksatz ausgegeben, ansonsten werden Sie linksbündig formatiert.

### Linien

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden im Zeugnis die einzelnen Kompetenztexte durch eine horizontale Linie getrennt:

![Abbildung zu Linien aus der PDF-Anleitung auf Seite 38](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-38-bild-071.png)

```ini
SchriftgroesseBemerkungen=11
```

Hier kann die Schriftgröße für die Bemerkungstexte festgelegt werden (z.B.
 `SchriftgroesseBemerkungen=11`).

```ini
NotenAbJahrgang=03
```

Über diesen Eintrag kann festgelegt werden, ab welchem Jahrgang (E1, E2, 03, 04) die Notenfelder auf dem Zeugnis angezeigt werden, Vorgabe ist Jahrgang 03.

### Zusammenhalten

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden die einzelnen Fächer auf dem Zeugnis zusammengehalten, es wird also kein automatischer Zeilenumbruch innerhalb eines Faches eingefügt, falls die Angaben nicht mehr vollständig auf eine Seite passen. Falls dieser Eintrag deaktiviert ist, werden bei einem Seitenumbruch die Spaltenüberschriften auf der neuen Seite erneut ausgegeben (sofern das für das betreffende Fach aktiviert ist, s.u.).

### Folgejahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird im „Versetzungstext“ anstelle der Folgeklasse der Folgejahrgang ausgegeben. Dies betrifft aber nur die Folgejahrgänge 03 und 04.

Beispiel: Folgejahrgang deaktiviert „..wird zum 01.08.2018' in die Klasse 03A versetzt.“

Folgejahrgang aktiviert „..wird zum 01.08.2018 in den Jahrgang 03 versetzt.“

### Vorname

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird der Vorname des jeweiligen Kindes im Kopfbereich jedes „Fachblockes“ ausgegeben. Beispiel:

![Abbildung zu Vorname aus der PDF-Anleitung auf Seite 39](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-39-bild-072.png)

### Kopfhoehe

Hier kann die Höhe des „Fachkopfes“ festgelegt werden (in mm). Der Wert hängt von der Textlänge der verwendeten „Kompetenzstufen“ ab und muss experimentell ermittelt werden. Vorgabe ist „Kopfhoehe=30“.

![Abbildung zu Kopfhoehe aus der PDF-Anleitung auf Seite 40](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-40-bild-073.png)

### Zeilenhoehe

Hier kann die Höhe einer „Ankreuz-Zeile“ (in mm) eingestellt werden, gültige Werte sind 4 oder 5. Die Schriftgröße wird automatisch angepasst. Hinweis: Wenn die betreffende Kompetenzbeschreibung nicht in eine Zeile passt, erfolgt ein automatischer Umbruch, dadurch wird natürlich mehr Platz als der eingestellte Wert benötigt.

### FachKopfSichtbarE1

### FachKopfSichtbarE2

### FachKopfSichtbar03

### FachKopfSichtbar04

Wenn keine individuellen Angaben gemacht werden, werden die Texte für die Kompetenzstufen bei jedem „Fachkopf“ ausgegeben (siehe Abbildung oben). Dadurch wird natürlich relativ viel Platz verbraucht. Über die Optionen „FachKopfSichtbarE1=“ usw. kann für jeden Jahrgang individuell festgelegt werden, bei welchen Fächern der Kopf bzw. die Kompetenzstufen ausgegeben werden sollen. Dies sollte bei den Fächern der Fall sein, die auf einer Seite als erste erscheinen. Da dies aber von mehreren Faktoren abhängt (Reihenfolge der Fächer, Anzahl der Kompetenzbeschreibungen pro Fach, Höhe des Fachkopfes, „Zusammenhalten“ der einzelnen Fächer usw.), kann nicht automatisch entschieden werden, bei welchen Fächern die Texte für die Kompetenzstufen ausgegeben werden sollen. Zudem kann die Anzahl der Kompetenzbeschreibungen bei den einzelnen Jahrgängen sehr unterschiedlich sein. Daher kann über die Optionen „FachKopfSichtbarE1=“ usw. für jeden Jahrgang separat festgelegt werden, bei welchen Fächern der Kopf ausgegeben werden soll. Dabei sind die betreffenden Fachkürzel, getrennt durch Semikolon, anzugeben. Welche dies sind, muss für jeden Jahrgang experimentell festgelegt werden. Das sollte natürlich erst dann geschehen, wenn endgültig festgelegt ist, welche Kompetenzbeschreibungen für die einzelnen Fächer zur Verfügung stehen sollen und in welcher Reihenfolge die Fächer auf dem Zeugnis ausgegeben werden.

Beispiel:

```ini
FachKopfSichtbarE1=D;E;M;SP;MU
```

Im Jahrgang E1 wird der Fachkopf bei den Fächern Deutsch, Englisch, Mathematik, Sport und Musik ausgegeben.

Hinweis: Wenn die betreffende Option deaktiviert wird (durch vorangestelltes Semikolon) wird der Kopf für alle Fächer ausgegeben.

### ASVSeite2

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird der Bereich für „Arbeits- und Sozialverhalten“ erst auf der zweiten Seite dargestellt, d.h. auf der ersten Seite befinden sich nur der Schulname und die persönlichen Angaben (Name, Klasse usw.) des betreffenden Kindes.

### FächerAufNeuerSeite

Wenn diese Option aktiviert ist, werden die Kompetenzbeschreibungen der „echten“ Fächer (also alles außer „Arbeits- und Sozialverhalten“ und einm optionalen, frei definierbaren „Fach“) auf einer neuen Seite ausgegeben. Hinweis: Wenn Sie eine möglichst platzsparende Ausgabe erzielen möchten, sollten Sie die Optionen „Zusammenhalten“, „ASVSeite2“ und „FächerAufNeuerSeite“ deaktivieren.

### Unterschrift

Über diesen Eintrag kann das „Namensformat“ bei den Unterschriften für Schulleitung und Klassenleitung festgelegt werden. Folgende Einträge sind möglich:

```ini
Unterschrift=VN
```

Die Ausgabe erfolgt als „Vorname Nachname“ (z.B. Monika Meyer, Klassenlehrerin)

```ini
Unterschrift=NV
```

Die Ausgabe erfolgt als „Nachname, Vorname“ (z.B. Meyer, Monika, Klassenlehrerin)

```ini
Unterschrift=N
```

Die Ausgabe erfolgt nur als Nachname (z.B. Meyer, Klassenlehrerin) Das ist auch die Vorgabe, wenn kein Eintrag gefunden wird.

```ini
Unterschrift=ON
```

Als Ausgabe erfolgt nur „Klassenleitung“ keine Vor- oder Nachnamen..

### UnterschriftMitStVertr

Über diesen Eintrag kann man festlegen ob der/die stellvertretende Klassenlehrer/in im Unterschriftenfeld zusätzlich zur Klassenlehrerin angezeigt werden soll.

```ini
UnterschriftMitStVertr=ja
```

Stellvertretender Klassenlehrer/in wird angezeigt.

```ini
UnterschriftMitStVertr=nein
```

Stellvertretender Klassenlehrer/in wird nicht angezeigt.

### FachPosition

Über diesen Eintrag kann die vertikale Position der Fächerbezeichnungen im Zeugnis festgelegt werden, gültige Einträge sind

```ini
FachPosition=Oben
```

und

```ini
Fachposition=Mitte
```

Wenn nichts angegeben ist, wird „FachPosition=Mitte“ (d.h. in der Mitte des Kopfbereiches) verwendet. Im Zeugnis sieht das dann so aus:

![Abbildung zu FachPosition aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-074.png)

```ini
FachPostion=Oben
```

![Abbildung zu FachPosition aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-075.png)

### Ankreuzsymbol

Über diesen Eintrag kann das „Ankreuzsymbol“ festgelegt werden. Gültige Einträge sind

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-076.png)

```ini
Ankreuzsymbol=C
```

Es wird ein „Check-Häkchen“ angezeigt.

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-077.png)

```ini
Ankreuzsymbol=X
```

Es wird ein „Kreuzchen“ angezeigt.

### SchulleitungText

Über diesen Eintrag kann ein individueller Text definiert werden, der anstelle des Namens der Schulleiterin oder des Schulleiters ausgegeben wird. Beispiel

```ini
SchulleitungText=Schulleitung/Vertretung
```

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-078.png)

Wenn der Eintrag fehlt, werden die bei den Schuldaten hinterlegten Angaben verwendet.

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-079.png)

### PositionSchulleitungText

Über diesen Eintrag kann festgelegt werden, wo das Unterschriftsfeld für die Schulleitung angezeigt wird, gültige Einträge sind „L“ (links) und „R“ (rechts). Das Unterschriftsfeld für die Klassenleitung wird auf der jeweils gegenüber liegenden Seite angezeigt. Beispiel:

```ini
PositionSchulleitungText=R
```

### ASVText

Über diesen Eintrag kann die Überschrift für das Arbeits- und Sozialverhalten definiert werden. Falls der Eintrag fehlt, wird „Arbeits- und Sozialverhalten“ ausgegeben. Beispiel:

```ini
ASVText=Arbeitsverhalten
```

Hinweis: Falls der Eintrag vorhanden ist, aber kein Text zugewiesen ist (also

```ini
ASVText=), wird keine Überschrift ausgegeben.
```

### LELSText

Über diesen Eintrag kann die Überschrift für „Lernentwicklung und Leistungsstand“ definiert werden. Falls der Eintrag fehlt, wird „Aussagen über die Lernentwicklung und den Leistungsstand“ ausgegeben. Beispiel:

```ini
LELSText=Leistungsstand in den Fächern
```

Hinweis: Falls der Eintrag vorhanden ist, aber kein Text zugewiesen ist (also

```ini
LELSText=), wird keine Überschrift ausgegeben.
```

### BemerkungText

Über diesen Eintrag kann die Überschrift für weitere fachbezogene Bemerkungen festgelegt werden. Beispiel:

```ini
BemerkungText=Bemerkungen
```

![Abbildung zu BemerkungText aus der PDF-Anleitung auf Seite 43](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-43-bild-080.png)

Hinweis: Falls der Eintrag fehlt, wird keine Überschrift ausgegeben. Wenn er aber vorhanden ist, aber keine fachbezogene Bemerkung eingegeben wurde, hängt es von dem Eintrag „BemerkungLeerText“ (s.u.) ab, ob die Überschrift ausgegeben wird.

### BemerkungLeerText

Über diesen Eintrag kann festgelegt werden, welcher Text ausgegeben werden soll, wenn keine fachbezogene Bemerkung vorhanden ist. Beispiel:

```ini
BemerkungLeerText=-keine-
```

![Abbildung zu BemerkungLeerText aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-081.png)

Hinweis: Der Eintrag wird nur berücksichtigt, wenn auch eine Überschrift für die fachbezogene Bemerkung vorhanden ist (s.o.).

### DeutschNotenEinzeln

Wenn dieser Eintrag vorhanden ist (bzw. nicht über ein Semikolon am Anfang auskommentiert ist), so werden Noten für die Fächergruppe „Deutsch“ nicht als „Block“ ausgegeben, sondern direkt unter den Kompetenzbeschreibungen des jeweiligen Faches:

![Abbildung zu DeutschNotenEinzeln aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-082.png)

Hinweis: Falls für das eigentliche Fach „Deutsch“ keine Kompetenzbeschreibungen vorhanden sind, erscheint die Note direkt unterhalb der Fach-Überschrift:

![Abbildung zu DeutschNotenEinzeln aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-083.png)

In diesem Fall sollte daher die Option „DeutschNoteEinzeln“ nicht verwendet werden. Dann werden die Noten blockweise ausgegeben:

![Abbildung zu DeutschNotenEinzeln aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-084.png)

## Quelle

[Originalanleitung als PDF, 44 Seiten](/dateien/pdf/Grundschule_Ankreuzzeugnisse_mit_SchILD2.pdf)
