---
title: "Reportbaukasten"
wiki_title: "Reportbaukasten"
wiki_page_id: 385
wiki_revision: 4830
---

# Reportbaukasten


![RepBau01](/bilder/wiki/repbau01-ea9fbcaa.jpg)

Der Reportbaukasten soll Usern dabei behilflich sein, eigene Formulare nach einem Vorbild für bestimmte Zwecke erstellen zu können.

Die Formulare können in einem ZIP-Archiv hier herunter geladen werden. **[Datei:Report-Baukasten.zip](https://wiki.svws.nrw.de/mediawiki/index.php?title=Datei:Report-Baukasten.zip)**

Dabei werden Themengruppen herausgesucht und einige Beispielreports erstellt. Diese Reports sind möglichst einfach gehalten und enthalten auch sehr wenig Layout-Elemente. Sie sollen lediglich als Beispiele für die gewünschte Funktion dienen.

Wenn Sie einen Report zur Bearbeitung geöffnet haben, dann öffnet sich die Ansicht des Reportdesigners. Üblicherweise befindet sich der Report dann im Entwurfsmodus.

Darüber befinden sich vier Karteireiter:

![RepBau02](/bilder/wiki/repbau02-45c47307.jpg)

1.  **Daten:** Hier können Sie eigene Datenquellen mit Hilfe eines Assistenten zusammenstellen. In der Regel sollten Sie hier einige SQL-Kenntnisse mitbringen.
2.  **Berechnungen:** Unter diesem Karteireiter finden Sie alle Programmierungen, die sich im Report verbergen. Dies ist die Stelle, wo Sie mit einem Code zu bestimmten Zeitpunkten Berechnungen, Ersetzungen oder Ähnliches durchführen lassen können.
3.  **Entwurf:** Hier können Sie durch *Drag&Drop* die Elemente des Reports bestimmen und positionieren.
4.  **Vorschau:** Liefert die Voransicht des Reports.

**Einige Begriffserklärungen vorab:**

![RepBau03](/bilder/wiki/repbau03-a162297d.jpg)

Text = freies Textfeld (Label) ohne Datenhintergrund

Diese Labels können aber unter Berechnungen per Programm verändert werden.

![RepBau04](/bilder/wiki/repbau04-4ddb49e0.jpg)

DBText = Textfeld, das sich aus der Datenbank einen Wert holt

Dieser Wert wird über Datenquelle und Datenfeld gesteuert

![RepBau05](/bilder/wiki/repbau05-7b508a77.jpg)

Subreport = Unterbericht, hier können Datenfelder aus Schild wiedergegeben werden, die u.U. mehrere Datensätze enthalten

![RepBau06](/bilder/wiki/repbau06-6890f235.jpg)

Richtext = hier können formatierte Texte eingebunden werden

(existiert auch als DBRichtext)

![RepBau07](/bilder/wiki/repbau07-89010027.jpg)

Memo = unformatierter mehrzeiliger Text

(existiert auch als DBMemo)

![RepBau08](/bilder/wiki/repbau08-a748c762.jpg)

DBImage = Bild aus der Datenbank, rechte Maustaste auf den Rahmen öffnet ein Kontextmenü (existiert auch ohne DB)

![RepBau09](/bilder/wiki/repbau09-23a77213.jpg)

Shapes = Formen die mit Linien und Farbe versehen werden können

(gut geeignet für Gitterstrukturen im PDF-Druck)

![RepBau10](/bilder/wiki/repbau10-6dc5fcf4.jpg)

Systemvarialble = kann bestimmte Umgebungsvarialblen drucken

(Datum, Zeit, Seitenzahl, Reportname usw.)

------------------------------------------------------------------------

![RepBau11](/bilder/wiki/repbau11-c14e39da.jpg)

Ereignisse = diese Ereignisse stehen im Reportdesigner unter Berechnungen

zur Verfügung und können Programmierungen enthalten

Das am häufigsten genutzte Ereignis ist sicherlich ReportBeforePrint, mit dem man etwas vor dem Druck ablaufen lassen kann.

Beim Einfügen von Funktionen und Proceduren sollte man sich die vorhandenen Ereignisse in anderen Reports einmal ansehen.

------------------------------------------------------------------------

![RepBau12](/bilder/wiki/repbau12-aef42fab.jpg)

Funktionen = Programmteile, die ohne bestimmtes Ereignis jederzeit im Prozedurenteil des Programms aufgerufen werden können

------------------------------------------------------------------------

<a id="Beispiel_1:_01_Stammblatt.rtm"></a>

## Beispiel 1: 01_Stammblatt.rtm

Das Stammblatt dient als Beispiel für einige Elemente, die häufig im Zusammenhang mit Individualdaten verwendet werden.

**Barcode:**

![RepBau13](/bilder/wiki/repbau13-3641e3f3.jpg)

So befindet sich im Kopf links oben das Element DBBarCode1, welchem das Datenfeld für den Schülernamen zugewiesen ist.

Weitere Einstellungen zu diesem Element finden Sie, wenn Sie mit der rechten Maustaste darauf klicken und dann *Konfigurieren* wählen.

Dort stehen Ihnen dann auch die Auswahl des Barcode-Typs und einige andere Einstellungen zur Verfügung.

**Schülerfoto:**

![RepBau14](/bilder/wiki/repbau14-efd8f96b.jpg)

Das Element *DBImage1* bedient sich aus der Datenquelle *SchuelerFotos* und zeigt dort das Datenfeld Foto an. Wenn ein Bild beim Schüler in der Datenbank hinterlegt ist, dann wird dieses nun auf dem Stammblatt angezeigt. Auch hier stehen wieder einige Auswahlmöglichkeiten zur Verfügung, wenn man das Element mit der rechten Maustaste anklickt.

Eine häufige Fehlermeldung bei Bildern aus der Datenbank lautet „*Ungültige Grafik*“.

Hier hilft die Einstellung Grafikart, die standardmäßig auf *Autodetect* steht.Grundsätzlich gilt der Tipp, dass Sie möglichst mit einem Grafikformat in der gesamten Datenbank arbeiten. JPG-Bilder verhalten sich in der Regel am unproblematischsten. Der Menüpunkt *Dehnen* kann dazu verwendet werden, das Bild an die Größe des vorgegebenen Rahmens anzupassen (vergrößern oder verkleinern).

**Subreport Erzieherdaten**

Die Angaben zu den Erziehungsberechtigten werden aus einem Subreport gedruckt, weil es hier unter Umständen vorkommen kann, dass ein Schüler dort mehrere Datensätze besitzt. Diese sollen natürlich alle untereinander auf das Stammblatt gedruckt werden. Dazu werden die Datenfelder in einen Unterbericht mit der Datenquelle Erzieher gelegt, der dann so lange durchlaufen wird, wie Datensätze vorhanden sind.

Die Erziehernamen setzen sich oft aus Anrede, Titel, Vorname und Nachname zusammen, so dass das Zusammenrücken der Elemente notwendig ist, wenn man keine unnötigen Leerstellen haben möchte.

![RepBau15](/bilder/wiki/repbau15-ef3ab2cc.jpg)

Dies ist im *Label6* realisiert. Beim Ereignis *OnGetText* werden dem Text des Labels einfach die geforderten Datenelemente samt Leerzeichen zugewiesen.

Das Gleiche ist im Subreport Telefone hinterlegt, auch dort ist eine automatische Anpassung an die Länge wünschenswert, da Telefonnummern ja sehr unterschiedlich lang sein können.

Hierbei ist noch zu berücksichtigen, dass der Subreport *SchuelerTelefone* eine besondere Seiteneinrichtung hat. Wenn Sie den Subreport im Berichtsbaum markieren und dann im Menü *Datei --\> Seite einrichten ...* auswählen, sehen Sie die zugrunde liegenden Seiteneinstellungen.

![Reportbaukasten-02](/bilder/wiki/reportbaukasten-02-7569eb11.png)

Die vier definierten Spalten werden von links nach rechts durchlaufen.

**Schülerlaufbahn**

![RepBau16](/bilder/wiki/repbau16-07188044.jpg)

Auf diesem Stammblatt soll eine Übersicht aller Abschnitte gedruckt werden, die der Schüler an der Schule durchlaufen hat. Dazu reicht ein Subreport mit der Datenquelle *SchuelerLaufbahn*, der im *ReportBeforePrint* Ereignis mit dem Befehl *SetUebersicht(True);* initialisiert wird. Im Ereignis *ReportAfterPrint* wird diese Setzung dann mit *SetUebersicht(False);* wieder zurückgesetzt.

![RepBau17](/bilder/wiki/repbau17-00d082c4.jpg)

Die Berechnungen für das *DBText5*-Label sollen ein Beispiel geben, wie man in Abhängigkeit von den in der Datenbank hinterlegten Bezeichnungen auch eigene Texte generieren kann. So ist der Versetzungsvermerk hier nur als Kürzel hinterlegt, kann aber mit Hilfe einer kleinen Programmierung auch in Textform auf dem Report ausgegeben werden.

**Schulbesuch**

Die Datenfelder zur vorherigen Schule und zur aufnehmenden Schule können Sie aus dem Beispiel ersehen.

Dabei steht LS für *letzte Schule* und ZS für *zukünftige Schule*. Alle Datenfelder, die mit diesen Präfixen beginnen, gehören hier dazu.

------------------------------------------------------------------------

<a id="Beispiel_2:_02_Input_Laufzeit.rtm"></a>

## Beispiel 2: 02_Input_Laufzeit.rtm

![RepBau18](/bilder/wiki/repbau18-5a9d01bc.jpg)

Dieses Formular soll eine kurze Einführung in die Möglichkeit der Dateneingabe zur Laufzeit des Reports bieten.

Dies findet im Ereignis *ReportBeforePrint* statt.

Die Funktionen sind alle auch im WIKI beschrieben.

**[RAP-Funktionen](/reporting/rap/rap-funktionen)**

Dort gibt es zahlreiche Funktionen, die dem Ersteller von Reports helfen sollen, bestimmte Dinge in der Reporting umzusetzen, die von der Programmierung nicht unterstützt werden oder nur sehr schwer umzusetzen sind.

![RepBau19](/bilder/wiki/repbau19-0876eed9.jpg)

In diesem Formular werden erstmalig Variablen benötigt, in die die Inhalte aus den Abfragen eingelesen werden. Diese Variablen müssen vor der Nutzung global deklariert werden, wenn sie in allen Prozeduren und Ereignissen zur Verfügung stehen sollen. Sehen Sie sich dazu bitte den Bereich Deklarationen in „Global“ an. Dieses Menü erreichen Sie, wenn Sie mit der rechten Maustaste in den Bereich der linken oberen Ecke klicken.

![RepBau20](/bilder/wiki/repbau20-ec6aee73.jpg)

Die Inhalte der Variablen werden den Labels dann „einfach“ zugewiesen. Bitte sehen Sie dazu in die jeweiligen *OnGetText*-Ereignisse der jeweiligen Labels.

Im *RichtText1* finden Sie ein Beispiel, wie Ersetzungen in größeren Textfeldern realisiert werden können. Öffnen Sie dazu das Richtextfeld mit der rechten Maustaste „Bearbeiten“. Setzen Sie den Haken bei *Mail Merge*. Jetzt können Sie durch Auswählen des Datenfeldes mit *Add Field* ein Datenbankfeld im Richtext hinzufügen.

Bestimmte Ersetzungen sind damit aber nicht möglich, dazu können feste Platzhalter, wie hier im Beispiel \$Schuljahr\$, verwendet werden.

![RepBau21](/bilder/wiki/repbau21-f59a0445.jpg)

Dort wird der Platzhalter dann durch eine entsprechende Programmierung im *OnPrint*-Ereignis des *Richtext1* ersetzt.

------------------------------------------------------------------------

<a id="Beispiel_3:_03_Lehrerdaten.rtm"></a>

## Beispiel 3: 03_Lehrerdaten.rtm

![RepBau22](/bilder/wiki/repbau22-79bd61c3.jpg)

Prinzipiell bedient sich dieser Report aus der Datenquelle Lehrer. Alle Stamminformationen zu den Lehrkräften sind hier enthalten.

Damit zu Beginn des Reports eine Auswahlliste der zu druckenden Lehrer erscheint, ist im Ereignis *BeforeOpenDataPipelines* der Befehl *LehrerAuswaehlen(True)* hinterlegt. Der Auswahlmodus wird im *AfterPrint*-Ereignis wieder zurückgesetzt. Werden diese Befehle nicht gesetzt, werden immer alle Lehrerdaten in die Datenquelle gefüllt.

Die Lehrämter, Lehrbefähigungen und Lehrerfunktionen werden in Subreports ausgegeben, da sich dort unter einem Lehrer mehrere Angaben befinden können. Die Lehrerfunktionen befinden sich auf dem Karteireiter „zeitabhängige Daten“ im Lehrerbereich von Schild-NRW.

Die Lehrbefähigungen werden als Unterdatenquelle der Lehrämter gefüllt.

Das ist der Grund dafür, dass im Report ein Unterbericht mit der Datenquelle *LehrerAktuellerAbschnitt* eingefügt ist, weil die *LehrerFunktionen* sonst u.U. nicht gefüllt werden.

![RepBau23](/bilder/wiki/repbau23-b63f3104.jpg)

Eine Übersicht über die Abhängigkeit der Datenquellen finden Sie in der Reportverwaltung, wenn Sie auf das rote Fragezeichensymbol klicken.

![RepBau24](/bilder/wiki/repbau24-a75168c8.jpg)

------------------------------------------------------------------------

<a id="Beispiel_4:_04_Konferenz.rtm"></a>

## Beispiel 4: 04_Konferenz.rtm

![RepBau25](/bilder/wiki/repbau25-dbd5469b.jpg)

Dieser Report soll eine Übersichtsliste z.B. für Konferenzen bieten, die alle Schüler einer Klasse / eines Jahrgangs mit ihren Fächern auflistet. Der Report druckt lediglich den aktuellen Abschnitt.

Dazu werden die Datenquellen *FachUebersichtHeader* und *Fachuebersicht* verwendet.

![RepBau26](/bilder/wiki/repbau26-d954c4ea.jpg)

Der Subreport *FachUebersichtHeader* erzeugt eine Kopfzeile für die Übersichtsliste, die alle bei der ausgewählten Schülermenge enthaltenen Fächer in der Sortierungsreihenfolge auflistet. Aus diesem Grund ist es auch sinnvoll, vor dem Druck klassenweise oder jahrgangsweise zu filtern, da alle auftretenden Fächer sonst in den Header wandern.

Im Ereignis *BeforePrint* benötigen die beiden Datenquellen den Aufruf ***Faechervorbelegen*** und im *AfterPrint* Ereignis den Befehl ***ResetFaechervorbelegen***.

Mit diesen Befehlen werden die Erzeugung des Notenheaders und die Einsortierung der fachspezifischen Daten in die Übersicht erzeugt.

Der Bericht enthält zwei Gruppierungen. Die Gruppe\[0\]:Klasse erzeugt eine neue Seite, wenn die Klasse des Schülers wechselt. Die Gruppe\[1\]:ID sorgt dafür, dass die einzelnen Schülerdaten auf einer Seite zusammengehalten werden.

------------------------------------------------------------------------

<a id="Beispiel_5:_05_Konferenz.rtm"></a>

## Beispiel 5: 05_Konferenz.rtm

![RepBau27](/bilder/wiki/repbau27-a6344f2a.jpg)

Dieser Report druckt eine Leistungsübersicht der ausgewählten Schülermenge für den aktuellen Lernabschnitt. Dieses Mal wird aber in jeder Schülerzeile eine eigene Kopfzeile für die Fächer erzeugt, die dieser Schüler hat.

Dazu wird die Datenquelle Lernabschnitte verwendet, die ohne weitere Programmierung den aktuellen Abschnitt des Schülers liefert.

![RepBau28](/bilder/wiki/repbau28-cb4b7474.jpg)

In diesem Subreport befindet sich dann ein Unterbericht mit der Datenquelle *SchuelerLeistungen*, der die Leistungsdaten liefert.

Unter Berechnungen findet sich lediglich eine Ersetzung für das Label1, das den aktuellen Abschnitt ausgeben soll.

Hier wird die Funktion *SchuljahrToStr* verwendet, die eingeführt wurde, um komplizierte Abfragen zum aktuellen Abschnitt zu vereinfachen.

Dieser Report druckt auch zurückliegende Abschnitte, wenn dies im Report-Explorer vor dem Druckaufruf eingestellt wird!

Die Gruppe\[0\]: ID sorgt im Bericht lediglich dafür, dass ein Schülerdatensatz auf einer Seite zusammengehalten wird.

------------------------------------------------------------------------

<a id="Beispiel_6:_06_Laufbahnuebersicht.rtm"></a>

## Beispiel 6: 06_Laufbahnuebersicht.rtm

![RepBau30](/bilder/wiki/repbau30-a46b1d14.jpg)

Dieser Report druckt zu jedem Schüler die gesamte in Schild-NRW hinterlegte Laufbahn mit allen Abschnitten.

Dazu werden die Datenquellen *Leistungsuebersicht* (zur Erzeugung des Headers) und *Schuelerlaufbahn* verwendet.

Damit der Report die Kopfzeile für die Fächer und die Laufbahn über alle Abschnitte erzeugen kann, benötigt er im *BeforePrint*-Ereignis den Aufruf *SetUebersicht(True)*.

![RepBau31](/bilder/wiki/repbau31-86eaf270.jpg)

Dies wird dann im *AfterPrint*-Ereignis mit *SetUebersicht(False)* wieder aufgehoben.

Die Gruppe\[0\]: ID dient lediglich dazu, dass die Schüler auf einer Seite zusammengehalten werden. Außerdem ist in allen Subreports darauf geachtet worden, dass die Seitenränder auf Null stehen, damit möglichst wenig Verschiebungen stattfinden.

------------------------------------------------------------------------

<a id="Beispiel_7:_07_Laufbahnuebersicht.rtm"></a>

## Beispiel 7: 07_Laufbahnuebersicht.rtm

![RepBau32](/bilder/wiki/repbau32-2c23b73f.jpg)

Dieser Bericht ist lediglich eine Abwandlung von Beispiel 6, in dem einige Ergänzungen gemacht wurden.

Der Report soll nur bestimmte, aufeinander folgende Abschnitte einer Schülerlaufbahn drucken. Hier in diesem Beispiel von EF bis Q1.

Dazu wird zusätzlich im Ereignis *ReportOpenDataPipelines* der Befehl *FilterLaufbahnJahrgangASD(‘EF,Q1,Q2‘)* aufgerufen.

Dass hier nicht *ReportBeforePrint* genommen wird, hat den Grund, dass u.U. dann der erste Schülerdatensatz nach dem Öffnen der Datenquelle erstellt wird und evtl. der Fachheader dann nicht korrekt ausgegeben wird.

Zusätzlich wird aber im *ReportBeforePrint* Ereignis der Übersichtsmodus geändert.

![RepBau33](/bilder/wiki/repbau33-d171f2b2.jpg)

Wie im Screenshot zu sehen, wird dort auf die Kursart umgestellt, da der Übersichtsmodus standardmäßig auf „NurFach“ steht und dann gleiche Fächer nicht nach Kursarten unterschieden werden und in die gleiche Spalte einsortiert werden.

Dies wird im *AfterPrint* Ereignis zusammen mit *FilterLaufbahnJahrgangASD(“)* wieder zurückgesetzt.

Zusätzlich wurde in *OnGetText* des *DBText4*-Labels eine Abfrage eingebaut, die bei den Notenpunkten 0 bis 4 eine gelbe Farbe in das Element Shape1 setzt.

------------------------------------------------------------------------

<a id="Beispiel_8:_08_Zeugnisbemerkungen_AUE_ASV.rtm"></a>

## Beispiel 8: 08_Zeugnisbemerkungen_AUE_ASV.rtm

Die Felder für die Bemerkungen auf den Zeugnissen wurden vor einigen Versionen in der Datenbank in Memo-Felder umgewandelt. Das bedeutet, dass dort nun nur noch die eigentlichen Texte ohne jegliche Formatierung in der Datenbank liegen.

![RepBau34](/bilder/wiki/repbau34-c7e48857.jpg)

Früher waren dort Richttextinformationen mit Textformatierungen enthalten, weswegen u.U. manche Zeugnisbemerkungen in einer anderen Schrift erscheinen konnten.

Um an die Informationen der Bemerkungen zu gelangen, benötigen wir die Subreports zu *Lernabschnitte* sowie einen mit der Datenquelle *SchuelerLaufbahnBem*.

In diesen Subreports werden dann DBMemo-Felder mit den jeweiligen Angaben gefüllt. Die Abhängigkeiten können Sie wieder im Menü „Infos über Datenquellen“ ersehen.

Der Report gibt eine Übersicht über die Eintragungen des aktuellen Abschnittes.

Diese Unterberichte könnten so z.B. auch auf einer Konferenzliste eingefügt werden, um die eingetragenen Daten zu kontrollieren.

------------------------------------------------------------------------

<a id="Beispiel_9:_09_Zuweisungen.rtm"></a>

## Beispiel 9: 09_Zuweisungen.rtm

Dieser Report soll kurz ein Beispiel für die Verwendung der an den Gesamtschulen benötigten Zuweisungen zu den Kursarten der Folgeschuljahre geben.

Diese werden an Gesamtschulen auf Zeugnissen und Übersichten benötigt.

------------------------------------------------------------------------

<a id="Beispiel_10:_10_Zeugnis.rtm"></a>

## Beispiel 10: 10_Zeugnis.rtm

Das Zeugnisformular soll alle Benutzer unterstützen, die eigene Zeugnisse für besonders spezielle Verhältnisse an ihren Schulen erzeugen wollen.

![RepBau35](/bilder/wiki/repbau35-aa39f89f.jpg)

Auch in diesem Formular wurden keine überflüssigen Programmierungen eingesetzt.

Das Formular bedient sich aus den Datenquellen der Fächergruppen und der Lernabschnitte, damit das im Reportexplorer eingestellte Schuljahr gedruckt wird.

![RepBau36](/bilder/wiki/repbau36-e40eedf7.jpg)

Aus diesem Grund befindet sich im Ereignis *ReportBeforeOpenDataPipelines* auch der Befehl *MitLernabschnitten(True).* Dadurch wird das Befüllen der Fächergruppen-Quellen angestoßen.

Das Schuljahr und die Klassenbezeichnung steuert die Datenquelle *Lernabschnitte*.

![RepBau37](/bilder/wiki/repbau37-a01c779a.jpg)

In den Unterberichten der Fächergruppen werden einige Programmierungen vorgenommen, die je nach Fach oder nach Kursart die Detailbereiche unsichtbar schalten. Dies ist notwendig, wenn entweder Fächer in der Datenquelle vorkommen, die nicht gedruckt werden sollen (hier am Beispiel der Fremdsprachen E und F, die getrennt ausgewiesen werden), oder aber auch im Beispiel der weiteren Unterrichte, wo die Kursarten ZUV und KMFÖ in einer Datenquelle ankommen.

Weitere Unterberichte zu anderen Fächergruppen, wie z.B. Naturwissenschaften oder Gesellschaftslehre, müssen für ergänzt werden, um die entsprechenden Fächer im Zeugnis auszudrucken. Die Fächergruppen der Berufskollegs beginnen mit BK. Dazu gehören beispielsweise die Fächergruppen BKBerufsuebergreifend, BKBerufsbezogen und BKDifferenzierung.

Die Zeugnisbemerkungen sind nicht wie im Beispielreport_08 aufgebaut, hier können Sie sehen, dass die Angaben in der Datenquelle *ASVSek_I* enthalten sind.

Bitte beachten Sie, dass dieses im *ReportBeforeOpenDatenPipellines* Ereignis bisher nur den Befehl *MitLernabschnitten(true)* enthält.

Für Zeugnisse oder Übersichten, die auf Abiturdaten, Sprachenfolge oder die Daten auf dem Karteireiter ZP10 zugreifen wollen, sind die Befehle *SetAbitur(true)* und *SetBKAbschluss(true)* notwendig!

(Der ZP10-Reiter hat an BKs den Namen *BK-Abschluss*.)

------------------------------------------------------------------------

<a id="Beispiel_11:_11_Laufbahnuebersicht_mit_QT.rtm"></a>

## Beispiel 11: 11_Laufbahnuebersicht_mit_QT.rtm

![Reportbaukasten-03](/bilder/wiki/reportbaukasten-03-7ea296f7.png)

Diese Laufbahnübersicht zeigt die Noten eines jeden Quartales (QT) an. Sie entspricht ansonsten der Laufbahnübersicht in Beispiel 7.

Im Ereignis *ReportBeforePrint* wird dafür *SetQuartalsnotenInUebersicht(true)* gesetzt.

------------------------------------------------------------------------

---

Quelle: [Reportbaukasten – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Reportbaukasten&oldid=4830) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Reportbaukasten&action=history)
