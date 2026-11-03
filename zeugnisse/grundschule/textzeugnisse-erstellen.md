# Text- und Notenzeugnisse mit dem Report-Explorer erstellen

Bereiten Sie die Leistungsdaten vor, erfassen Sie Texte und Noten und geben Sie die Grundschulzeugnisse im Report-Explorer aus.

Diese Anleitung folgt dem [Original-PDF](/dateien/pdf/Grundschule_Textzeugnisse_mit_SchILD2_Anleitung.pdf) des Ministeriums für Schule und Bildung des Landes NRW. Die Abbildungen stammen aus dieser Anleitung.

Die Optionen für die Vorlage können Sie auch getrennt in der [Anleitung zur INI-Datei](/zeugnisse/grundschule/textzeugnisse-ini) nachschlagen.

Für den Report-Explorer von SchILD-NRW 2 stehen nun auch Vorlagen für Text- und Notenzeugnisse in der Grundschule zur Verfügung. Damit diese genutzt werden können, sind einige Dinge zu beachten, die im Folgenden erläutert werden.

## 1. Allgemeine Vorbereitungen

Da ab dem Zeugnis der Klasse 2 auch Noten für die einzelnen Fächer vergeben werden, müssen die Voraussetzungen geschaffen werden, jedem Kind einen individuellen Fächerkanon mit den jeweiligen Noten zuzuweisen. Dieser Vorgang setzt sich aus folgenden Einzelschritten zusammen

- Fächerkatalog konfigurieren
- Stundentafeln einrichten
- Fächer den Schülern zuweisen (über die Stundentafeln)
- Lehrer den Fächern zuweisen
- Noten eingeben

Für die meisten dieser Schritte gibt es in SchILD-NRW 2 entsprechende Gruppenprozesse, mit denen die jeweiligen Aufgaben rasch erledigt werden können.

### 1.1. Fächerkatalog konfigurieren

Um den Fächerkatalog zu bearbeiten, aktivieren Sie den Menüpunkt „Schulverwaltung → Unterrichtsfächer“. Es erscheint dann ein Fenster, in dem die derzeit vorhandenen Fächer aufgelistet werden:

![Abbildung zu 1.1. Fächerkatalog konfigurieren aus der PDF-Anleitung auf Seite 3](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-03-bild-001.png)

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

![Abbildung zu Basis-Fächerkatalog laden aus der PDF-Anleitung auf Seite 4](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-04-bild-002.png)

Diesen Hinweis sollten Sie nur mit „Ja“ bestätigen, wenn Sie bisher noch keine Fächer den Schülern zugewiesen haben.

### Fächer einzeln anlegen und bearbeiten

Der Fächerkatalog kann aber auch jederzeit individuell ergänzt werden. Das folgende Beispiel zeigt, wie Sie islamische Religionslehre ergänzen.

Um ein weiteres Fach anzulegen, aktivieren Sie den „Plus“-Schalter auf dem Karteireiter „Übersicht“:

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 4](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-04-bild-003.png)

Es wird dann der Karteireiter „Details“ mit einer leeren Maske angezeigt.

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 5](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-05-bild-004.png)

Wählen Sie nun aus der Liste, die sich unter „ASD-Bezeichnung“ aufklappen lässt, ein passendes „Basisfach“ aus (Hinweis: Sie können in SchILD-NRW 2 beliebige weitere Fächer anlegen, jedes Fach muss sich aber auf ein gültiges Basisfach beziehen). In der Liste tauchen alle Fächer auf, die an Ihrer Schule grundsätzlich vorkommen können. Für das Beispiel wählen wir den Eintrag „Islamische Religionslehre“ aus.

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 5](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-05-bild-005.png)

Durch die Auswahl des Faches werden einige weitere Felder (z.B. „interne Kurzform“, „Bezeichnung“ im Zeugnis“) bereits gefüllt.

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 5](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-05-bild-006.png)

Hierzu einige Erläuterungen: Jedes Fach hat eine „interne Kurzform“ (im obigen Beispiel „IL“). Diese können Sie grundsätzlich frei definieren, es wird aber empfohlen, zumindest für die Fächer, die auf dem Zeugnis ausgegeben werden sollen, die Standard-Vorgaben zu verwenden. Die „Bezeichnung im Zeugnis“ ist der Text, mit dem das jeweilige Fach auf dem Zeugnis ausgegeben wird. Bitte achten Sie darauf, dass dieser nicht zu lang ist, andernfalls kann es Platzprobleme auf dem Zeugnis geben.

Wichtig: Jedes Fach muss einer „Fächergruppe“ zugewiesen werden. Diese steuert, in welcher „Rubrik“ (und damit Reihenfolge) ein Fach auf dem Zeugnis erscheint. Die Fächergruppe wird nicht automatisch zugewiesen, bitte wählen Sie die passende Gruppe aus (in unserem Beispiel also „Religion“).

![Abbildung zu Fächer einzeln anlegen und bearbeiten aus der PDF-Anleitung auf Seite 6](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-06-bild-007.png)

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

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 7](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-07-bild-008.png)

- Geben Sie bei „Deutsch“ in der Spalte „Sortiernr.“ eine „passende“ Zahl ein, z.B. 10). Im Prinzip ist es egal, welche Zahl Sie wählen, nur sollte „Deutsch“ innerhalb der Gruppe der Sprachfächer (also Deutsch, Lesen, Rechtschreiben und Sprachgebrauch) die niedrigste Nummer haben.
- Geben Sie jeweils bei den anderen Fächern eine höhere Nummer ein, die Nummer definiert, in welcher Reihenfolge die Fächer ausgegeben werden.

Falls schon Fächer bei den Schülern hinterlegt sind, muss die so angepasste Reihenfolge auch auf die „Schülerfächer“ übertragen werden. Schließen Sie dazu die Fächerverwaltung und aktivieren Sie im Hauptfenster den Menüpunkt „Extras → Fächer in Leistungsdaten neu sortieren“. Es erscheint dann eine Abfrage, für welches Halbjahr der Vorgang erfolgen soll, Vorgabe dabei ist das aktuelle Halbjahr.

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 7](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-07-bild-009.png)

Anschließend sollten die Fächer auf dem Karteireiter „Akt. Halbjahr“ in der von Ihnen definierten Reihenfolge erscheinen:

![Abbildung zu Besondere Hinweise für „Deutsch“ aus der PDF-Anleitung auf Seite 7](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-07-bild-010.png)

### 1.2. Stundentafeln einrichten

Nachdem der Fächerkatalog eingerichtet wurde, können Stundentafeln eingerichtet werden. Eine Stundentafel ist eine Teilmenge der vorhandenen Fächer, die unter einem Namen zusammengefasst werden und die den Unterricht beschreiben, der z.B. in einem Jahrgang gegeben wird. Da sich die Zusammensetzung des Unterrichtes nur selten ändert, müssen die Stundentafeln in der Regel nur einmal angelegt werden.

Um eine Stundentafel anzulegen oder zu bearbeiten, aktivieren Sie den Menüpunkt „Schulverwaltung → Stundentafeln“. Es erscheint das folgende Fenster:

![Abbildung zu 1.2. Stundentafeln einrichten aus der PDF-Anleitung auf Seite 8](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-08-bild-011.png)

Im oberen Teil werden die vorhandenen Stundentafeln angezeigt, im unteren Teil die Fächer, die zur jeweils ausgewählten Stundentafel gehören.

Wenn Sie noch keine Stundentafeln eingerichtet haben, können Sie diese über den Schalter „Standard-Stundentafeln anlegen“ automatisch erzeugen lassen.

Sie können die Stundentafeln aber auch individuell anlegen, aktivieren Sie dazu den „Plus“-Schalter (im oberen Teil des Fensters). In der Tabelle wird dann eine neue leere Zeile eingefügt. Wählen Sie dann den Jahrgang, für den die Stundentafel gelten soll, aus der Liste aus und geben Sie eine aussagekräftige Bezeichnung ein (frei wählbar).

Nachdem dies geschehen ist, aktivieren Sie den „Häkchen“-Schalter, um die Bezeichnung der Stundentafel zu speichern.

![Abbildung zu 1.2. Stundentafeln einrichten aus der PDF-Anleitung auf Seite 9](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-09-bild-012.png)

Nun können die Fächer zu der neu angelegten Stundentafel eingerichtet werden. Wechseln Sie dazu in den unteren Teil des Fensters und aktivieren Sie den dortigen „Plus“-Schalter. Es wird wieder eine leere Zeile in der Tabelle angelegt, wählen Sie in der Spalte „Fach“ ein Fach aus, das in der Stundentafel enthalten sein soll (Auswahlliste).

![Abbildung zu 1.2. Stundentafeln einrichten aus der PDF-Anleitung auf Seite 9](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-09-bild-013.png)

Optional können Sie auch die Kursart (meist PUK=Unterricht im Klassenverband) und die „Wochenzeiteinheiten“ (WZE, i.d.R. die Anzahl der Schulstunden, sofern Ihre Schule nicht ein alternatives Stundenmodell benutzt) eingeben. Geben Sie so alle Fächer der Stundentafel ein.

Bitte beachten Sie, dass in der Stundentafel keine Lehrkräfte zugewiesen werden, da diese pro Klasse und pro Schuljahr wechseln können.

Hinweis: In der Grundschule sind die Stundentafeln für die einzelnen Jahrgänge in der Regel recht ähnlich. Damit Sie die Fächer nicht zu jeder einzelnen Stundentafel auf die oben beschriebene Weise eingeben müssen, können Sie wie folgt vorgehen:

- Geben Sie eine Stundentafel wie beschrieben ein
- Aktivieren Sie dann den Schalter „Fächer kopieren“
- Legen Sie dann eine neue Stundentafel an und speichern diese
- Aktvieren Sie dann den Schalter „Fächer einfügen“

### Sonderfall Religion

Religion nimmt bei den Stundentafeln eine gewisse Sonderrolle ein. Im Gegensatz zu den anderen Fächern wird katholische und evangelische Religionslehre (und evtl. auch islamische Religionslehre) nur einem Teil der Schüler des jeweiligen Jahrganges zugewiesen. Es gibt zwei Optionen, mit den Religionsfächern umzugehen:

- Die Religionsfächer sind in den Stundentafeln enthalten Nach der Zuweisung der Stundentafeln (s.u.) muss dann bei den Kindern, die den betreffenden Religionsunterricht nicht besuchen, das Fach gelöscht (oder das Häkchen „auf Zeugnis“ deaktiviert) werden.
- Die Religionsfächer sind in den Stundentafeln nicht enthalten Nach der Zuweisung der Stundentafeln muss das jeweilige Religionsfach individuell den jeweiligen Kindern zugewiesen werden.

Beide Optionen sind im Anhang 1 beschrieben.

### 1.3. Stundentafel zuweisen

Nachdem die Stundentafeln eingerichtet wurden, können sie über einen Gruppenprozess den Schülern zugewiesen werden. Gehen Sie hierzu wie folgt vor:

- Filtern Sie auf den jeweiligen Jahrgang
- Aktivieren Sie den Gruppenprozess „Fächer → Stundentafeln zuweisen“

![Abbildung zu 1.3. Stundentafel zuweisen aus der PDF-Anleitung auf Seite 11](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-11-bild-014.png)

- Wählen Sie die Stundentafel für den Jahrgang aus

![Abbildung zu 1.3. Stundentafel zuweisen aus der PDF-Anleitung auf Seite 11](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-11-bild-015.png)

und aktivieren Sie dann den Schalter „Übernehmen“. Anschließend können Sie ggf. das Schuljahr auswählen (standardmäßig werden die Fächer der Stundentafel in das aktuelle Halbjahr eingetragen). Nach Abschluss des Gruppenprozesses sind dann bei allen Kindern des ausgewählten Jahrganges die Fächer aus der Stundentafel eingetragen (auf Karteireiter „Akt. Halbjahr → Leistungsdaten“).

### 1.4. Lehrkräfte zuweisen

Nach der Zuweisung der Stundentafel sollten auch die Lehrkräfte, die die einzelnen Fächer unterrichten, zugewiesen werden:

Wichtig: Wenn die Noteneingabe über die Internet-Anwendung SchILDweb erfolgen soll, muss die Zuweisung der Lehrkräfte zwingend erfolgen. In SchILDweb können Noten nur von den Lehrkräften eingegeben werden, die das jeweilige Fach unterrichten.

Die Zuweisung der Lehrkräfte für die einzelnen Fächer erfolgt auf Klassenebene (da das gleiche Fach von unterschiedlichen Lehrkräften unterrichtet werden kann), die Bearbeitung ist aber auch für einen kompletten Jahrgang möglich, d.h. Sie können die Filterung auf den Jahrgang (wie bei der Zuweisung der Stundentafeln) beibehalten.

Gehen Sie dann wie folgt vor:

- Aktivieren Sie den Gruppenprozess „Fächer → Klassenunterrichte bearbeiten“

![Abbildung zu 1.4. Lehrkräfte zuweisen aus der PDF-Anleitung auf Seite 12](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-12-bild-016.png)

- Es erscheint dann eine Liste der Fächer, die in den Klassen unterrichtet werden.

![Abbildung zu 1.4. Lehrkräfte zuweisen aus der PDF-Anleitung auf Seite 12](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-12-bild-017.png)

- Tragen Sie nun pro Fach die Lehrkraft ein, die ein Fach in der jeweiligen Klasse unterrichtet.

![Abbildung zu 1.4. Lehrkräfte zuweisen aus der PDF-Anleitung auf Seite 12](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-12-bild-018.png)

- Beim Schließen des Fensters erscheint dann eine Abfrage, ob die Änderung gespeichert werden soll.

## 2. Vorbereitungen für Textzeugnisse

### 2.1 Floskeln bearbeiten

An der Grundschule werden (zumindest bis einschließlich Jahrgang 03) im Zeugnis neben den Noten auch Erläuterungen zu jedem Fach oder zur allgemeinen Lernentwicklung und zum Leistungsstand gemacht. Um Sie bei der Eingabe solcher Texte zu unterstützen, können in SchILD-NRW 2 sogenannte „Floskeln“ verwendet werden. Dies sind Textbausteine, die in den Bemerkungsfeldern eingefügt werden können. Es können auch „Platzhalter“ verwendet werden, um z.B. automatisch den Vornamen eines Kindes einzufügen.

Anfänglich sind noch keine Floskeln in der Datenbank vorhanden, es können aber „Standard-Floskeln“ aus einer vorhandenen Textdatei importiert werden. Diese heißt in der Regel „Floskeln.txt“ und befindet sich in Ihrem Schulverzeichnis. Gehen Sie hierzu wie folgt vor:

- Aktivieren Sie den Menüpunkt "Schulverwaltung → "Floskeln" bearbeiten". Es erscheint das Fenster "Floskeln bearbeiten…"

![Abbildung zu 2.1 Floskeln bearbeiten aus der PDF-Anleitung auf Seite 13](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-13-bild-019.png)

- Aktivieren Sie dort den Schalter "Import", es erscheint dann ein Dateiauswahldialog, dort die Datei "Floskeln.txt" auswählen. Anschließend enthält der Katalog die Floskeln aus der Datei.

Es können aber auch Floskeln individuell angelegt werden. Gehen Sie dazu wie folgt vor:

- Filtern Sie auf eine „Floskel-Gruppe“:

![Abbildung zu 2.1 Floskeln bearbeiten aus der PDF-Anleitung auf Seite 13](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-13-bild-020.png)

Je nach gewählter Floskel-Gruppe stehen dann weitere Filteroptionen zur

Verfügung, z.B. bei Fachfloskeln für das betreffende Fach:

![Abbildung zu 2.1 Floskeln bearbeiten aus der PDF-Anleitung auf Seite 14](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-14-bild-021.png)

- Aktivieren Sie den „Plus“-Schalter und geben Sie den Floskeltext ein. Wichtig: Für jede Floskel muss ein eindeutiges Kürzel eingegeben werden, wenn Sie dieses leer lassen, wird ein Kürzel automatisch erzeugt. Das Kürzel kann bei der späteren Verwendung der Floskel als „Tastenkombination“ dazu verwendet werden, den Floskeltext einzufügen.

Hier noch weitere Hinweise:

- In den Floskeln können auch "Platzhalter" verwendet werden: $Vorname$ wird bei der Verwendung einer Floskel bei einem konkreten Kind durch den individuellen Vornamen ersetzt. Es sind aber auch "geschlechtsspezifische" Bemerkungen möglich, diese werden in der folgenden Form eingegeben:

&amp;männliche Form%weibliche Form&amp;

z.B. $Vorname$ hat sich in Konfliktsituationen auf dem Schulhof oft als &amp;Streitschlichter%Streitschlichterin&amp; hervorgetan.

Aus obigem Beispiel wird somit (je nach Geschlecht und Vorname):

„Andreas hat sich in Konfliktsituationen auf dem Schulhof oft als Streitschlichter hervorgetan.“

„Lena hat sich in Konfliktsituationen auf dem Schulhof oft als Streitschlichterin hervorgetan.“

- Jede Floskel muss zu einer Gruppe gehören, bei der Verwendung der Floskeln wird dann situationsbedingt auf die entsprechende Gruppe gefiltert. Die Floskeln der Gruppe ASV stehen z.B. nur bei der Texteingabe für das Arbeits- und Sozialverhalten zur Verfügung. Eine Sonderrolle spielen Floskeln, die der Gruppe ALLG zugeordnet sind, diese stehen zusätzlich immer zur Verfügung.
- Bei Fachfloskeln kann auch ein „Niveau“ eingetragen werden. Die Niveaus können frei definiert werden (max. 2 Zeichen) und müssen nicht zwingend den Notenstufen entsprechen. Auf die Niveaus kann bei der Verwendung der Floskeln auch gefiltert werden.
- Fachfloskeln für den Jahrgang E3 können nicht definiert werden, beim Jahrgang E3 werden die gleichen Floskeln wie beim Jahrgang E2 verwendet.
- Die Floskeln werden in den Eingabefenstern unterhalb des jeweiligen Editierbereiches angezeigt. Sie können dort per Doppelklick auf die gewünschte Floskel in den Editierbereich übernommen werden. Alternativ kann auch das Kürzel manuell eingetragen werden, danach muss unbedingt die Enter-Taste betätigt werden.

Wichtig: Damit die automatische Umsetzung des Kürzels in den Floskeltext funktioniert, muss das Kürzel unbedingt mit einem #-Zeichen beginnen!

- Floskeln können auch aus einer Excel-Datei importiert werden. Diese muss folgenden Aufbau haben:

![Abbildung zu 2.1 Floskeln bearbeiten aus der PDF-Anleitung auf Seite 15](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-15-bild-022.png)

Der Inhalt der Spalte „Kürzel“ kann leer sein (die Spalte muss aber existieren!), beim Import wird dann ein Kürzel automatisch generiert. Bei „Fachfloskeln“ (Gruppe FACH) muss auch das zugehörige Fach (gleiche Schreibweise wie im Fächerkatalog von SchILD-NRW 2) und ggf. das Niveau und der Jahrgang eingetragen sein.

Der Import erfolgt über den Schalter „Import“ im Fenster „Floskeln bearbeiten“, wählen Sie dann aber im Dateiauswahl-Dialog die Datenart „Excel-Dateien“.

![Abbildung zu 2.1 Floskeln bearbeiten aus der PDF-Anleitung auf Seite 15](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-15-bild-023.png)

### 2.2. Inklusionszeugnisse

Das Hybridzeugnis kann für Schülerinnen und Schüler aus der Jahrgangsstufe 4, die zieldifferent unterrichtet werden, genutzt werden. Dazu muss in SchILD-NRW 2 die Auswahl „zieldifferentes Lernen“ unter Individualdaten II aktiviert sein.

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

![Abbildung zu 3.2 Erster Aufruf aus der PDF-Anleitung auf Seite 16](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-16-bild-024.png)

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

![Abbildung zu 3.3 Noten und fachbezogene Bemerkungen eingeben aus der PDF-Anleitung auf Seite 17](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-17-bild-025.png)

Die Abkürzungen in den Spaltenüberschriften haben dabei folgende Bedeutung:

- FSG: Anzahl der Gesamt-Fehlstunden
- FSU: Anzahl der unentschuldigten Fehlstunden
- FBLE: Fachbezogene Lernentwicklung

Eingaben in den ersten sechs Spalten (bis einschl. „Kurs“) sind gesperrt, eine Eingabe in den Fehlstundenspalten ist nur möglich, wenn in SchILDzentral für die jeweilige Jahrgangsstufe ein „fachbezogenes Fehlstundenmodell“ eingestellt wurde. Bei Grundschulen ist dies meist nicht der Fall, hier werden i.d.R. die „Gesamtfehlstunden“ erfasst (die nur der Klassenlehrer/die Klassenlehrerin eingeben kann).

In der Spalte „Note“ können Sie die jeweilige Note eintragen.

Bei einem Klick auf das „Stiftsymbol“ in der Spalte „FBLE“ öffnet sich ein Editor, in dem Sie eine Bemerkung zur fachbezogenen Lernentwicklung eingeben können.

![Abbildung zu 3.3 Noten und fachbezogene Bemerkungen eingeben aus der PDF-Anleitung auf Seite 18](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-18-bild-026.png)

Dabei stehen Ihnen auch die Floskeln zur Verfügung (siehe Abschnitt „Floskeln bearbeiten“). Um einen Floskeltext in den Editierbereich zu übernehmen, führen Sie einen Doppelklick auf die entsprechende Floskel aus, der Text wird dann an der jeweiligen Cursor-Position eingefügt. Sofern die Floskel auch einen Platzhalter für den Vornamen enthält, wird dieser automatisch durch den Vornamen des Kindes ersetzt.

Über das Kontrollhäkchen „Noch nacharbeiten“ können Sie festlegen, ob Sie mit der Texteingabe fertig sind. In der Tabellendarstellung wird dann das Stiftsymbol wie folgt dargestellt:

- Rot: Es ist eine Texteingabe vorhanden, diese muss aber noch nachgearbeitet werden
- Gelb: Es ist noch keine Texteingabe vorhanden
- Grün: Es ist eine Texteingabe vorhanden, die Bearbeitung ist abgeschlossen

Hinweis: Ein rotes Dreieck in einer Zelle der Tabelle deutet an, dass die jeweiligen Angaben geändert, aber noch nicht gespeichert wurden

![Abbildung zu 3.3 Noten und fachbezogene Bemerkungen eingeben aus der PDF-Anleitung auf Seite 19](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-19-bild-027.png)

### 3.4 Eingaben durch Klassenlehrer

Wenn Sie Klassenlehrer oder Klassenlehrerin sind, steht Ihnen zusätzlich noch der Karteireiter „Bereichsnoten/Bemerkungen“ zur Verfügung. In den Spalten

- A&amp;S (für Arbeits- und Sozialverhalten)
- ZB (für Zeugnis-Bemerkung)
- L&amp;L (für Lernentwicklung und Leistungsstand)

Können Sie „globale“ (also nicht an ein Fach gebundene) Texteinträge machen. Der Vorgang ist der gleiche wie zuvor beschrieben.

Hinweis: Eingaben bei den „globalen“ Angaben zur Lernentwicklung und zum Leistungsstand haben bei der Zeugnisausgabe Vorrang vor den fachbezogenen Eingaben. Wenn Sie also zu jedem Fach einen eigenen Bemerkungstext eingeben wollen, so muss dies beim jeweiligen Fach auf dem Karteireiter „Leistungsdaten“ erfolgen, auf dem Karteireiter „Bereichsnoten/Bemerkungen“ darf dann in der Spalte „L&amp;L“ nichts eingegeben werden.

Soll dagegen die Lernentwicklung und der Leistungsstand zusammenfassend für alle Fächer separat auf dem Zeugnis ausgegeben werden, so muss die Eingabe in der Spalte „L&amp;L“ erfolgen.

### 3.5 Änderungen speichern

Geänderte Daten werden nicht sofort in der Datenbank gespeichert. Sie können den Speichervorgang für alle geänderten Datensätze aktivieren, indem Sie den Schalter „Speichern (alle Datensätze)“ anklicken. Um nur den aktuellen Datensatz zu speichern, klicken Sie auf „Speichern (aktueller Datensatz)“

![Abbildung zu 3.5 Änderungen speichern aus der PDF-Anleitung auf Seite 19](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-19-bild-028.png)

Alternativ können Sie auch die Tastenkombination „Alt-S“ bzw. „Alt-P“ benutzen.

Wenn Sie sich aus SchILDweb abmelden und noch nicht gespeicherte Änderungen vorhanden sind, so erscheint die folgende Abfrage, über die Sie festlegen können, was mit diesen Änderungen geschehen soll.

![Abbildung zu 3.5 Änderungen speichern aus der PDF-Anleitung auf Seite 20](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-20-bild-029.png)

## 4. Zeugnisse ausgeben

Für eine Ausgabe in Heftform folgen Sie anschließend der Anleitung zum [Broschürendruck](/zeugnisse/vorbereitung/zeugnisse-broschuerendruck?rubrik=reporting).

### 4.1 Allgemeine Angaben

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

### 4.2 Spezielle Informationen zum Textzeugnis

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

## Anhang 1: Religion individuell zuweisen bzw. löschen

Da die Klassen in den meisten Fällen konfessionell gemischt sind, kann der Religionsunterricht (genauer gesagt katholischer, evangelischer und evtl. islamischer Religionsunterricht) in der Regel nicht global für alle Kinder einer Klasse zugewiesen werden. Es gibt dazu zwei Optionen

- In die Stundentafel werden keine Religionsfächer aufgenommen, vielmehr wird das jeweilige Religionsfach nachträglich den Kindern zugewiesen.
- In die Stundentafel werden alle Religionsfächer aufgenommen, nach Zuweisung der Stundentafel werden die „überflüssigen“ Religionsfächer gelöscht.

In beiden Fällen können entsprechende Gruppenprozesse verwendet werden.

### Religionsfächer nachträglich zuweisen

Führen Sie den Vorgang klassenweise durch, d.h. filtern Sie auf eine Klasse.

Aktivieren Sie dann in der Schülerliste (linker Teil des Hauptfensters) bei den Kindern, die am evangelischen Religionsunterricht teilnehmen, das „Kontrollhäkchen“ am linken Rand. Die Namen werden mit blauem Hintergrund dargestellt. Hinweis: Der evangelische Religionsunterricht wird hier nur exemplarisch verwendet, Sie können natürlich auch mit den Kindern beginnen, die am katholischen Religionsunterricht teilnehmen.

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 24](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-24-bild-037.png)

Aktivieren Sie nun den Gruppenprozess „Fächer“, es erscheint dann das folgende Fenster

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 24](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-24-bild-038.png)

Das Programm hat erkannt, dass Sie einige Kinder explizit ausgewählt haben und

will nun „wissen“, ob der folgende Gruppenprozess sich nur auf die explizit ausgewählten Kinder beziehen soll. Da dies der Fall ist, aktivieren Sie daher die Option „nur explizit ausgewählte Schüler“.

Klicken Sie anschließend auf den Schalter „Einzelne Fächer bei Schülern hinzufügen“.

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 25](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-25-bild-039.png)

Es erscheint dann das folgende Fenster, in dem Sie das Fach und die Lehrkraft auswählen können.

![Abbildung zu Religionsfächer nachträglich zuweisen aus der PDF-Anleitung auf Seite 25](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-25-bild-040.png)

Klicken Sie anschließend auf den Schalter „Fach eintragen“, danach auf den Schalter „Schließen“.

Wiederholen Sie den ganzen Vorgang mit den Kindern, die am katholischen und evtl. am islamischen Religionsunterricht teilnehmen.

Hinweis: Falls ein Religionsfach klassenübergreifend unterrichtet wird, können Sie den Vorgang z.B. auch jahrgangsweise durchführen.

### Religionsfächer nachträglich löschen

Wenn die Stundentafeln alle Religionsfächer enthalten, müssen die „überflüssigen“ nachträglich gelöscht werden. Führen Sie diesen Vorgang wieder klassenweise durch.

Markieren Sie dann wie oben beschrieben, die Kinder, die am evangelischen Religionsunterricht teilnehmen und rufen Sie dann wieder den Gruppenprozess „Fächer“ auf (wieder die Option „nur explizit ausgewählte Schüler“ verwenden).

Aktivieren Sie dann den Schalter „Einzelne Fächer bei Schülern löschen“

![Abbildung zu Religionsfächer nachträglich löschen aus der PDF-Anleitung auf Seite 26](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-26-bild-041.png)

Es erscheint das folgende Fenster, wählen Sie dort das Fach KR (katholische Religionslehre) aus (Sie haben ja die Kinder ausgewählt, die am evangelischen Religionsunterricht teilnehmen) und aktivieren Sie den Schalter „OK“.

![Abbildung zu Religionsfächer nachträglich löschen aus der PDF-Anleitung auf Seite 26](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-26-bild-042.png)

Falls die Stundentafel auch islamischen Religiosnunterricht enthält, so wiederholen Sie diesen Schritt mit diesem Fach.

Wiederholen Sie den ganzen Vorgang mit den Kindern, die am katholischen und evtl. am islamischen Religionsunterricht teilnehmen (dann natürlich sinngemäß den evangelischen und islamischen bzw. evangelischen und katholischen Religionsunterricht löschen).

## Anhang 2: Layout des Textzeugnisses konfigurieren

Über eine separate Konfigurationsdatei kann das Layout des Textzeugnisses angepasst werden, ohne dass die Vorlage selbst verändert werden muss. Diese Datei heißt „GrundschulzeugnisEinstellungen.ini“ und muss sich im gleichen Verzeichnis wie die Zeugnisvorlage befinden. Wenn diese Datei vorhanden ist, wird sie auch im Report-Explorer angezeigt.

![Abbildung zu Anhang 2: Layout des Textzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-27-bild-043.png)

Wenn ein Doppelklick auf den Dateinamen ausgeführt wird, öffnet sich der Windows- Editor, damit kann dann die Datei bearbeitet werden. Hinweis: Bitte speichern Sie die Datei, wenn Sie Änderungen gemacht haben.

Der Inhalt der Datei sieht z.B. so aus:

![Abbildung zu Anhang 2: Layout des Textzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-27-bild-044.png)

Die Datei ist in mehrere „Blöcke“ unterteilt, die jeweils eine Überschrift in eckigen Klammern haben. Wichtig: Diese Überschriften dürfen nicht verändert werden.

Die einzelnen Blöcke haben einen oder mehrere Optionen, die nachfolgend beschrieben sind.

### `[Textzeugnisreihenfolge]`

Hier können Sie festlegen, in welcher Reihenfolge die einzelnen Fächergruppen bei der Ausgabe als Textzeugnis erscheinen sollen. Der Eintrag „Englisch“ gilt stellvertretend für alle Fremdsprachen, also auch z.B. für muttersprachlichen Unterricht in Türkisch.

Wichtig: Es dürfen nur die vorgegebenen Bezeichnungen verwendet werden (deren Reihenfolge kann aber verändert werden). Beispiel für korrekte Schreibweise: KunstMusik

Beispiel für falsche Schreibweise( da in separaten Zeilen) Kunst Musik

### `[Notenzeugnisreihenfolge_Links]`

Im 4. Jahrgang wird die Zeugnisvorlage automatisch zu einem Notenzeugnis (mit zwei Spalten für die Fächergruppen). Hier kann die Reihenfolge in der linken Spalte festgelegt werden. Ansonsten gelten die gleichen Anmerkungen wie für den Block [Textzeugnisreihenfolge].

### `[Notenzeugnisreihenfolge_Rechts]`

Hier kann die Reihenfolge der Fächergruppen in der rechten Spalte festgelegt werden. Wichtig: Eine Fächergruppe darf nicht in beiden Blöcken (für linke und rechte Spalte) vorkommen.

### `[Optionen]`

In diesem Block können weitere Optionen eingestellt werden. Falls eine Option nicht verwendet werden soll, kann dem jeweiligen Text ein Semikolon vorangestellt werden (Beispiel „Duplex“ in obiger Abbildung). Die einzelnen Einträge haben folgende Bedeutung:

### Duplex

Über diese Option kann ein doppelseitiger Druck aktiviert werden (sofern der verwendete Drucker dies unterstützt). Als Vorgabe wird dabei die Seite „an der langen Seite“ gedreht (gleichbedeutend mit „Duplex=Vertikal“). Bei manchen Druckern kann es aber evtl. notwendig sein, stattdessen „Duplex=Horizontal“ zu verwenden, falls das Ergebnis mit der Option „Duplex“ oder „Duplex=Vertikal“ nicht zufriedenstellend ist.

### MitJahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird zusätzlich zu der Angabe, welcher Klasse sein Kind besucht, auch der Jahrgang mit ausgegeben (also z.B. „Bärenklasse, Jahrgang 03“). Dies hat aber nur Auswirkungen, wenn sich das Kind im Jahrgang 03 oder 04 befindet, im Jahrgang E1, E2 und E3 hat diese Option keine Auswirkung, da automatisch das Schulbesuchsjahr mit ausgegeben wird.

### Blocksatz

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden die Textfelder im Zeugnis als Blocksatz ausgegeben, ansonsten werden Sie linksbündig formatiert.

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

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden die einzelnen Fächer auf dem Zeugnis zusammengehalten, es wird also kein automatischer Zeilenumbruch innerhalb eines Faches eingefügt, falls die Angaben nicht mehr vollständig auf eine Seite passen. Das kann aber dazu führen, dass mehr Platz verbraucht wird, weil beim Druck die Bemerkungstexte zu einem Fach dann komplett auf die nächste Seite verschoben werden.

### ASVSeite2

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird der Bereich für „Arbeits- und Sozialverhalten“ erst auf der zweiten Seite dargestellt, d.h. auf der ersten Seite befinden sich nur der Schulname und die persönlichen Angaben (Name, Klasse usw.) des betreffenden Kindes.

### FächerAufNeuerSeite

Wenn diese Option aktiviert ist, werden die Kompetenzbeschreibungen der „echten“ Fächer (also alles außer „Arbeits- und Sozialverhalten“ und einm optionalen, frei definierbaren „Fach“) auf einer neuen Seite ausgegeben. Hinweis: Wenn Sie eine möglichst platzsparende Ausgabe erzielen möchten, sollten Sie die Optionen „Zusammenhalten“, „ASVSeite2“ und „FächerAufNeuerSeite“ deaktivieren.

### Folgejahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird im „Versetzungstext“ anstelle der Folgeklasse der Folgejahrgang ausgegeben. Dies betrifft aber nur die Folgejahrgänge 03 und 04.

Beispiel: Folgejahrgang deaktiviert „..wird zum 01.08.2018' in die Klasse 03A versetzt.“

Folgejahrgang aktiviert „..wird zum 01.08.2018 in den Jahrgang 03 versetzt.“

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

Als Ausgabe erfolgt nur „Klassenleitung“ keine Vor- oder Nachnamen.

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

### SchulleitungText

Über diesen Eintrag kann ein individueller Text definiert werden, der anstelle des Namens der Schulleiterin oder des Schulleiters ausgegeben wird. Beispiel

```ini
SchulleitungText=Schulleitung/Vertretung
```

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 30](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-30-bild-045.png)

Wenn der Eintrag fehlt, werden die bei den Schuldaten hinterlegten Angaben verwendet.

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 31](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-31-bild-046.png)

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

### Jg4AufEinerSeite

Über diesen Eintrag kann gesteuert werden, dass das Notenzeugnis für den Jahrgang 04 auf einer Seite ausgegeben werden soll. Wenn diese Option aktiviert ist, hat das folgende Auswirkungen:

- Die Schriftgröße für die Bemerkungstexte wird automatisch auf 10 Punkte gesetzt.
- Der vertikale Abstand zwischen den einzelnen Fächern wird reduziert. Zusätzlich sind folgende Bedingungen zu beachten:
- Die Zeugnisbemerkungen dürfen max. 7 Zeilen umfassen.
- Es dürfen keine fachbezogenen Bemerkungen vorhanden sein.
- Eine ausführliche Erläuterung für die „Empfehlung zur Wahl der Schulformen in der Sekundarstufe I“ ist nicht möglich.

### NachnameInVersetzungsvermerk

Wenn dieser Eintrag vorhanden ist, wird auch der Nachname im Versetzungsvermerk ausgegeben ("Max Müller wird in die Klasse 03 versetzt")

### WiderspruchInEingangsphaseAusblenden

Wenn dieser Eintrag vorhanden ist, wird der Widerspruchshinweis auf der letzen Seite unten ("Gegen die Entscheidung, Max Müller nicht zu versetzen...") bei Schülern der Eingangsphase nicht ausgegeben.

### WiderspruchInHalbjahr1Ausblenden

Wenn dieser Eintrag vorhanden ist, wird der Widerspruchshinweis auf der letzen Seite unten ("Gegen die Entscheidung, Max Müller nicht zu versetzen...") im 1. Halbjahr nicht ausgegeben.

### SonderpaedagogeText

Wenn ein Kind zusätzlich sonderpädagogisch betreut wird und die entsprechende Betreuungsperson auch aus dem Zeugnis unterschreiben soll, so kann hier der Name festgelegt werden. Eine "Kind-bezogene" Verwaltung der Sonderpädogogen ist derzeit noch nicht möglich, falls es unterschiedliche Betreuungspersonen gibt, müssen die Zeugnisse getrennt (mit entsprechender Anpassung der Option "SonderpaedagogeText") ausgegeben werden.

### WiederbeginnUnterrichtJg4

Hier kann ein Text definiert werden, der im 2. Halbjahr des Jahrganges 04 bei "Wiederbeginn des Unterrichtes" ausgegeben werden soll. Beispiel: WiederbeginnUnterrichtJg4=Laut Mitteilung der aufnehmenden Schule"

### Noten2spaltigAbJahrgang

Hier kann festgelegt werden, ab welchem Jahrgang die Fächer und Noten 2spaltig ausgegeben werden. Wenn nicht eingetragen ist, erfolgt dies ab dem Jahrgang 04 Beispiel: Noten2spaltigAbJahrgang=03

### BemerkungenAufNeuerSeite

Wenn dieser Eintrag vorhanden ist, wird für die Bemerkungen, die hinter den Fächern und Noten ausgegeben werden, eine neue Seite erzeugt. Das betrifft z.B. allgemeine Zeugnisbemerkungen, Bemerkungen zur Versetzung, die Unterschriftsfelder usw.

## Verwendung von Ankreuzkompetenzen im ASV bei Klasse 4

Die folgenden Optionen werden nur benötigt, falls das Zeugnis auch einen "Ankreuzbereich" für das Arbeits- und Sozialverhalten enthält. Es gibt nämlich Schulen, bei denen ASV im Jahrgang 04 nicht als Text, sondern als "Ankreuzkompetenzen" ausgegeben werden. Das Hybridzeugnis kann bei Vorhandensein solcher Daten diese auch ausgeben, das beschränkt sich aber nur auf ASV Kompetenzen, sollen Ankreuzkompetenzen anderer Fächer ausgegeben werden, so ist das Ankreuzzeugnis zu verwenden.

### KeineASVAKK

Fall diese Option vorhanden ist, werden trotz Vorhandensein von ASV- Ankreuzkompetenzen diese nicht auf dem Zeugnis ausgegeben. Es gibt Schulen, die diese Angaben stattdessen auf einen separaten Beiblatt zum Zeugnis ausgeben, dann sollen die ASV-Ankreuzkompetenzen im eigentlichen Zeugnis nicht ausgegeben werden.

### Kopfhoehe

Hier kann die Höhe des „Fachkopfes“ festgelegt werden (in mm). Der Wert hängt von der Textlänge der verwendeten „Kompetenzstufen“ ab und muss experimentell ermittelt werden. Vorgabe ist „Kopfhoehe=30“.

![Abbildung zu Kopfhoehe aus der PDF-Anleitung auf Seite 33](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-33-bild-047.png)

### Zeilenhoehe

Hier kann die Höhe einer „Ankreuz-Zeile“ (in mm) eingestellt werden, gültige Werte sind 4 oder 5. Die Schriftgröße wird automatisch angepasst. Hinweis: Wenn die betreffende Kompetenzbeschreibung nicht in eine Zeile passt, erfolgt ein automatischer Umbruch, dadurch wird natürlich mehr Platz als der eingestellte Wert benötigt.

### FachKopfSichtbarE1

### FachKopfSichtbarE2

### FachKopfSichtbar03

### FachKopfSichtbar04

Wenn keine individuellen Angaben gemacht werden, werden die Texte für die Kompetenzstufen bei jedem „Fachkopf“ ausgegeben (siehe Abbildung oben). Dadurch wird natürlich relativ viel Platz verbraucht. Über die Optionen „FachKopfSichtbarE1=“ usw. kann für jeden Jahrgang individuell festgelegt werden, bei welchen Fächern der Kopf bzw. die Kompetenzstufen ausgegeben werden sollen. Dies sollte bei den Fächern der Fall sein, die auf einer Seite als erste erscheinen. Da dies aber von mehreren Faktoren abhängt (Reihenfolge der Fächer, Anzahl der Kompetenzbeschreibungen pro Fach, Höhe des Fachkopfes, „Zusammenhalten“ der einzelnen Fächer usw.), kann nicht automatisch entschieden werden, bei welchen Fächern die Texte für die Kompetenzstufen ausgegeben werden sollen. Zudem kann die Anzahl der Kompetenzbeschreibungen bei den einzelnen Jahrgängen sehr unterschiedlich sein. Daher kann über die Optionen „FachKopfSichtbarE1=“ usw. für jeden Jahrgang separat festgelegt werden, bei welchen Fächern der Kopf ausgegeben werden soll. Dabei sind die betreffenden Fachkürzel, getrennt durch Semikolon, anzugeben. Welche dies sind, muss für jeden

Jahrgang experimentell festgelegt werden. Das sollte natürlich erst dann geschehen, wenn endgültig festgelegt ist, welche Kompetenzbeschreibungen für die einzelnen Fächer zur Verfügung stehen sollen und in welcher Reihenfolge die Fächer auf dem Zeugnis ausgegeben werden.

Beispiel:

```ini
FachKopfSichtbarE1=D;E;M;SP;MU
```

Im Jahrgang E1 wird der Fachkopf bei den Fächern Deutsch, Englisch, Mathematik, Sport und Musik ausgegeben.

### Ankreuzsymbol

Über diesen Eintrag kann das „Ankreuzsymbol“ festgelegt werden. Gültige Einträge sind

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 34](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-34-bild-048.png)

```ini
Ankreuzsymbol=C
```

Es wird ein „Check-Häkchen“ angezeigt.

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 34](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-34-bild-049.png)

```ini
Ankreuzsymbol=X
```

Es wird ein „Kreuzchen“ angezeigt.

Wichtig: Möglicherweise muss bei dieser Option ein speziell angepasstes Deckblatt (Schullogo, persönliche Angaben) verwendet werden. Bitte beachten Sie hierzu die Hinweise in Abschnitt 4.1.

## Anhang 3: Beispiele

### Jahrgang 03 im zweiten Halbjahr mit allgemeinen Angaben

Bei diesem Beispiel wurden allgemeine Angaben zur Lernentwicklung und zum Leistungsstand eingegeben, diese haben Vorrang vor evtl. vorhandenen fachbezogenen Bemerkungen (die dann nicht ausgegeben werden).

![Abbildung zu Angaben zur Lernentwicklung und zum Leistungsstand aus der PDF-Anleitung auf Seite 35](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-35-bild-050.png)

### Jahrgang 03 im zweiten Halbjahr mit fachbezogenen Angaben

Bei diesem Beispiel wurden keine allgemeinen Angaben zur Lernentwicklung und zum Leistungsstand eingegeben, daher werden vorhandene fachbezogenen Bemerkungen ausgegeben.

![Abbildung zu Angaben zur Lernentwicklung und zum Leistungsstand aus der PDF-Anleitung auf Seite 36](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-36-bild-051.png)

### Jahrgang 04 im ersten Halbjahr mit Sozialverhalten und Schulformempfehlung

![Abbildung zu Arbeits- und Sozialverhalten sowie zur Empfehlung zur Wahl der aus der PDF-Anleitung auf Seite 37](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-37-bild-052.png)

### Jahrgang 04 im zweiten Halbjahr ohne Arbeits- und Sozialverhalten

![Abbildung zu Arbeits- und Sozialverhalten aus der PDF-Anleitung auf Seite 38](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-38-bild-053.png)

## Quelle

[Originalanleitung als PDF, 38 Seiten](/dateien/pdf/Grundschule_Textzeugnisse_mit_SchILD2_Anleitung.pdf)
