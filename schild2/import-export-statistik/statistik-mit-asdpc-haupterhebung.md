---
title: "Statistik mit ASDPC Haupterhebung"
wiki_title: "Statistik mit ASDPC Haupterhebung"
wiki_page_id: 1343
wiki_revision: 5313
---

# Statistik mit ASDPC Haupterhebung

<a id="Die_Haupterhebung"></a>

## Die Haupterhebung

Aus den Eintragungshilfen des Ministeriums folgt:

:::warning
Die Erhebung bezieht sich auf die Kalenderwoche, in die der 15. Oktober fällt.
:::

:::info
Falls der 15. Oktober in eine Kalenderwoche mit einem oder mehreren schulfreien Tagen fällt, ist für die Erhebung von einer Kalenderwoche mit regulärem Schulbetrieb auszugehen.\

Im Rahmen der Klassendaten (KLD) müssen somit alle Schülerinnen und Schüler erfasst werden, die in dieser Kalenderwoche an der Schule angemeldet sind. Im Bereich der Unterrichtsdaten (UVD) muss der geplante Unterricht für diese Kalenderwoche erfasst werden.
:::

Starten Sie ASDPC. Starten Sie über "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)".

Im Übersichtsbildschirm mit den Schuldaten lässt sich nun über "Erhebung" ➥ "Haupterhebung JAHR" ebendiese Haupterhebung starten.

![ASDPC_Haupterhebung_Starten](/bilder/wiki/asdpc-haupterhebung-starten-bc925a45.png)

Je nachdem, ob in Ihrer Schule schon Vorgabedaten vorhanden sind oder ob schon an der Statistik gearbeitet wurde, erscheinen andere statistische Zusammenfassungen. In der Statistik hier im Beispiel wurden noch keine Daten eingelesen.

![ASDPC_HE_Hauptfenster](/bilder/wiki/asdpc-he-hauptfenster-4181ead7.png)

<a id="Die_Menüoptionen_in_der_Haupterhebung"></a>
<a id="Die_Men.C3.BCoptionen_in_der_Haupterhebung"></a>

### Die Menüoptionen in der Haupterhebung

Es ist nun zu sehen, dass sich das Menü in der Kopfzeile verändert hat. Diese Einträge sollen nun erläutert werden.

<a id="Datei_➥_Import"></a>
<a id="Datei_.E2.9E.A5_Import"></a>

#### Datei ➥ Import

![ASDPC_Import](/bilder/wiki/asdpc-import-14aa6503.png)

Hier können von anderen Programmen erstellte Daten eingelesen werden, z.B. von SchILD NRW. Je nach Schulform können eventuell auch weitere Dateien eingelesen werden.

Hier sind die Daten in der Reihenfolge des Menüs einzulesen. Daher es müssen zuerst die Schuldaten über die Vorgabedaten eingelesen werden, dann die Daten zu SuS, dann Lehrkraftdaten und schließlich die Unterrichtsverteilung. Dass Daten erfolgreich importiert wurden, bedeutet jedoch nicht, dass diese fehlerfrei sind. Bitte prüfen Sie an dieser Stelle schon von ASDPC gemeldete Unstimmigkeiten und beseitigen Sie diese in Ihrem Schulverwaltsprogramm und nehmen Sie dann einen erneuten Import vor.

Diese Daten können importiert werden

- Vorgabedaten
- Schülerdaten (SIM.TXT)
- Lehrerdaten (Lehrer.txt)
- Die Unterrichtsverteilung (UVD.TXT)
- Eventuell weitere Daten

:::info
Die Vorgabedaten müssen zu Beginn der Statistik im gesicherten Bereich des Bildungsportals heruntergeladen werden.
:::

:::warning
Das Einlesen ist für die "Adressen" und den Beleg "SCD012" (Ausnahme: Grundschulen) verpflichtend!
:::

Die Vorgabedaten enthalten u.a. die Adresse der Schule. Ändert sich diese, ist dies zeitnah über das Bildungsportal anzuzeigen. Weiterhin enthalten die Vorgabedaten den Beleg SCD012 (Vorjahresschüler). Die Vorgabedaten werden zum Ende der Sommerferien jedes Schuljahr über das Bildungsportal bereitgestellt.

Das Einlesen der Lehrerdaten ist optional. In ihnen finden sich auch eventuell noch fehlende Lehreridentnummern (LID).

Zum Einlesen müssen die passenden Dateien gewählt werden. Vom Standard bietet ASDPC den Ordner "Eingang" im ASDPC-Installationsverzeichnis an. Hat man die von anderen Programmen exportierten Daten oder die Vorgabedaten in einem anderen Verzeichnis abgelegt, lassen sich die Dateien dort finden. Hier im Beispiel lassen sich noch verschlüsselte oder schon unverschlüsselte Vorgabedaten anwählen.

![ASDPC_Import_Vorgabedaten](/bilder/wiki/asdpc-import-vorgabedaten-3c6da7e8.png)

Fragt ASDPC, ob vor dem Import eine Sicherung der Daten durchgeführt werden sollte, bietet es sich an, diesen Dialog mit "Ja" zu bestätigen. Bei Problemen mit der Entschlüsselung der Vorgabedaten prüfen Sie bitte zuerst, ob Sie die gleichen Schlüssel wie IT.NRW verwenden oder ob die Dateinamen 100% korrekt geschrieben sind. Mehr Thema Verschlüsselung finden Sie im Kapitel [Schlüsselmanagement](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement).

:::warning
Der Import von Daten überschreibt den aktuellen Stand dieser Daten. Vor einem (erneuten) Import während der Statistik sollte somit eine Datensicherung über "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" angelegt werden. Wird eine Sicherung eingelesen, wird der aktuelle Arbeitsstand mit dem in der Sicherung ersetzt.
:::

:::info
Die *Abteilungsdaten* werden benötigt, wenn mehrere Personen - eventuell auch an unterschiedlichen Standorten mit unterschiedlichen Datenträgern - an der Statistik arbeiten. Über diesen Import ist das Zusammenführen dieser Daten möglich. Ist ein solches verteiltes Arbeiten bei Ihnen nicht der Fall bzw. die Abteilungen sind digital vernetzt, muss hier nichts eingelesen werden.
:::

<a id="Datei_➥_Export"></a>
<a id="Datei_.E2.9E.A5_Export"></a>

#### Datei ➥ Export

![ASDPC_Export](/bilder/wiki/asdpc-export-dc3fc469.png)

**Abteilungsdaten**: Bei Anwahl dieser Option öffnet sich ein Hinweis darauf, dass Klassenbezeichnungen der Abteilungen eindeutig sein müssen und ein Dialogfeld, in dem ein Speicherort und der Name einer .txt-Datei gewählt werden können. Dieser Name ist frei zu vergeben und sollte die Abteilung sowie das Datum eindeutig angeben.

**Daten für IT.NRW**: Wenn Ihre Statistik getaner Arbeit komplett fertig ist, kann das Ergebnis über den Export für IT.NRW (verschlüsselt) ausgeben werden, um diese an IT.NRW zu mailen. Sie müssen hier auch wieder die vierstellige ASD-Signatur der Schule angeben. Es muss zuvor eine Gesamtprüfung der Daten durchgeführt worden sein und die Daten müssen frei von *Harten Fehlern* sein.

:::info
Das genaue Vorgehen wird im Kapitel [Bereitstellung der Daten](/schild2/import-export-statistik/statistik-mit-asdpc#Bereitstellung_der_Daten "Statistik mit ASDPC") behandelt.
:::

**Daten für den Schulträger**: Haben Sie mit dem Schulträger die Absprache, dass dieser Statistikdaten erhält, können diese hier (unverschlüsselt) gespeichert werden. Auch hier kann ein Dateiname für eine .txt-Datei frei vergeben werden.

<a id="Datei_➥_Drucken"></a>
<a id="Datei_.E2.9E.A5_Drucken"></a>

#### Datei ➥ Drucken

![ASDPC_Drucken](/bilder/wiki/asdpc-drucken-1f19eacb.png)

Über dieses Menü können alle *Belege* gesammelt oder einzeln ausgedruckt werden, diese können zur Weiterbearbeitung, der Archivierung oder der Weitergabe an den Schulträger dienen. Weiterhin sind die Belege als *Leerbelege* in ihrer unausgefüllten Form ausdruckbar.

Auch der Druck der *Schlüsseltabellen* und die Fehlerbeschreibung kann über dieses Menu angestoßen werden. Dies ist möglicherweise praktisch, die die Schlüsseltabellen in Teilen in Bezug auf bestimmte Belege gedruckt werden können. Unter dem Bereich *Prüfung* bei den Schlüsseltabellen sind die Ergebnisse der Prüfung ausdruckbar.

<a id="Datei_➥_Daten_löschen"></a>
<a id="Datei_.E2.9E.A5_Daten_l.C3.B6schen"></a>

#### Datei ➥ Daten löschen

Sollte es aufgrund fehlerhafter Daten einfacher sein, eine große Menge Daten direkt zu löschen und neu zu importieren/einzugeben, ist das über das Menü "Datei" ➥ "Daten löschen" anwählbar.

![ASDPC_Daten_löschen](/bilder/wiki/asdpc-daten-loeschen-7260ea80.png)

Die zu löschenden Datensätze werden über die Checkboxen ausgewählt. Sollte es notwendig sein, können über die oberste Option alle Daten gelöscht werden.

:::danger
Es empfiehlt sich, vor einem Löschvorgang eine Sicherung anzufertigen, da später doch benötigte, aber gelöschte Daten nur über eine vorherige Sicherung wiederhergestellt werden können.
:::

<a id="Datei_➥_Sicherung"></a>
<a id="Datei_.E2.9E.A5_Sicherung"></a>

#### Datei ➥ Sicherung

![ASDPC_Sicherung](/bilder/wiki/asdpc-sicherung-40c9b163.png)

Hier kann eine Sicherung über "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" angestoßen werden. Diese wird als MSACCESS Datenbank (.mdb) in den Ordner ASD\sicherungen gespeichert, jedoch kann auch ein beliebiger anderer Ordner angewählt werden. Das Dateinamenformat ist DATUM_ZÄHLER.MBD. So wäre der Vorschlag für die zweite Sicherung am 20.10.2021 der Name "20211020_2_SICHERUNG.MDB". Dieser kann davon abgesehen auch frei gewählt werden.

Über **Gesicherte Daten aus Datenbank einlesen** öffnet sich ein Dialogfeld, über welches eine ebensolche MSACCESS-Datei (.mdb) angewählt werden kann.

:::warning
Das Einlesen von Datensätzen aus einer Sicherung überschreibt den aktuellen Stand in ASDPC.
:::

<a id="Datei_➥_Schließen"></a>
<a id="Datei_.E2.9E.A5_Schlie.C3.9Fen"></a>

#### Datei ➥ Schließen

Über das Feld **Schließen** wird die Haupterhebung des aktuellen Jahres verlassen und ASPDC kehrt zur Schulübersicht zurück.

<a id="Belege"></a>

#### Belege

Unter dieser Option verbergen sich die Belege von ASDPC, in dem die Daten der Statistik erfasst werden. Hinweise zur eigentlichen Erfassung der Daten erhalten Sie im folgenden Kapitel zur DURCHFÜRHUNG DER STATISIK. An dieser Stelle ist grundlegend zu vermerken, dass die Belege der Reihenfolge von oben nach unten abgearbeitet werden.

![ASDPC_Belege](/bilder/wiki/asdpc-belege-ccb4c5a3.png)

Die Belege "SCD011" und "Weitere Belege" können noch weitere Unterbelege beinhalten, die ebenfalls in ihrer Menüreihenfolge abgearbeitet werden.

<a id="Extras"></a>

#### Extras

Der Menüeintrag "Extras" ist wie im identisch zum übergeordneten Menü ["Extras"](/schild2/import-export-statistik/statistik-mit-asdpc-aufbau#Abschnitte_.22Extras.22) in ASDPC.

![ASDPC_Extras](/bilder/wiki/asdpc-extras-bc4281c9.png)

<a id="Prüfen"></a>
<a id="Pr.C3.BCfen"></a>

#### Prüfen

![ASDPC_Prüfen](/bilder/wiki/asdpc-pruefen-dead5265.png)

Nach der Dateneingabe in den Belegen können die Daten innerhalb der Belege geprüft werden. Mit der Option "Prüfen" ➥ "Gesamtprüfung" werden alle Belege und vor allem die Daten untereinander über die Belege hinweg geprüft. Daher muss bei Änderungen immer eine Gesamtprüfung durchgeführt werden.

:::warning
Vor dem Abschicken an IT.NRW muss eine Gesamtprüfung und Auswertung des Fehlerpotokolls durchgeführt werden.
:::

Über "Prüfen" ➥ "Prüfbericht" können Sie sich die Fehler mit oder ohne Beschreibungen anzeigen lassen, auch ein Ausdruck ist hier nun möglich. Der Prüfbericht kann drei Arten von Fehlern beinhalten:

- Harte Fehler (rot markiert): Ein Fehlerbericht kann nur *ohne* Harte Fehler abgeschickt werden. Diese müssen bereinigt werden. Beispiele für Harte Fehler wären etwa falsche Schlüssel wie nicht existierende Staatsangehörigkeiten, Klassen ohne Bildungsgang oder mehr ausländische SuS in einer Klasse als es SuS gibt.
- Muss-Fehler (orange markiert): Der Prüfbericht kann abgeschickt werden, wenn er M-Fehler enthält. Sie treten auf, wenn wie bei den Harten Fehlern eigentlich unlogische Eintragungen auftreten, z.B. ein BK-Schüler mit Herkunft "Grundschule". Bilden diese aber die Realität ab und wurde der Einzelfall ausdrücklich von der Schulaufsicht genehmigt, muss der Fehler nicht korrigiert werden. Alle Muss-Fehler müssen einzeln geprüft werden.
- Hinweise (gelb markiert): Ein Hinweis macht auf eventuelle Fehler aufmerksam, die geprüft werden müssen. Bilden die Eintragungen den Sachverhalt an Ihrer Schule korrekt ab, kann er belassen werden.

:::danger
Zusammenfassend:\
*Harte Fehler* müssen entfernt werden.\
*Muss-Fehler* müssen minimiert werden, nach Absprache mit der Schulaufsicht können sie u.U. bleiben.\
*Hinweise* sind zu prüfen. Das Ziel hier ist nicht aufgrund von künstlichen Eintragungen die Fehlerzahl niedrig zu halten, sondern den Ist-Zustand an Ihrer Schule so zutreffend wie möglich abzubilden.
:::

:::info
Im vorherigen Bildschirm erlaubt "Optionen" ➥ "Rotschwäche" eine Anpassung der Farbdarstellungen.
:::

<a id="Hilfe"></a>

#### Hilfe

Die Hilfe ist identisch zum übergeordneten Menü ["Hilfe"](/schild2/import-export-statistik/statistik-mit-asdpc-aufbau#Abschnitt_.22Hilfe.22). Die Hilfe kann von jedem Beleg aus aufgerufen werden.

<a id="Durchführung_der_Haupterhebung"></a>
<a id="Durchf.C3.BChrung_der_Haupterhebung"></a>

### Durchführung der Haupterhebung

![Schaubild_ASDPC2](/bilder/wiki/schaubild-asdpc2-2bcea4ae.png)

Nachdem Sie die [Statistik vorbereitet](/schild2/import-export-statistik/statistik-mit-asdpc#Vorbereitung_der_Statistik) haben, können Sie damit beginnen, Ihren Daten einzulesen. Beginnen Sie mit den Vorgabedaten. Die weiteren Daten, SIM.TXT, Lehrer.TXT etc. können eventuell aus Schulverwaltungsprogrammen wie SchILD NRW oder Untis usw. erstellt werden.

- Einlesen der Vorgabedaten
- SIM.txt
- Lehrer.txt
- UVD.txt - dies ist an kleinen Schulen eventuell nicht notwendig; liegt die UVD ohnehin digital vor, etwa weil ein online-Vertretungsplan genutzt wird oder weil zeitabhängige Lehrerdaten in SchILD erfasst werden, kann diese aber auch eingelesen werden.
- ABI.txt - an Grundschulen usw. i.d.R. nicht notwendig. ;)

![ASDPC_Belege_in_der_HE](/bilder/wiki/asdpc-belege-in-der-he-3b4c1541.png)

:::info
Achten Sie darauf, schon beim Import auftretende Fehler in den Schulverwaltungsprogrammen zu bereinigen und dann erneut von dort einen Export für einen neuen Import in ASDPC zu starten, damit diese Fehler in Folgejahren nicht erneut auftreten und Ihre Daten konsistent sind.
:::

Nun sind die Belege mit so vielen Daten befüllt, wie im Schulverwaltungsprogramm erfasst sind. Nun können die *Belege in ASDPC der Reihe nach* bearbeitet werden.

<a id="Aufbau_der_Belege_am_Beispiel_der_LID123"></a>

#### Aufbau der Belege am Beispiel der LID123

Bei Belegen in ASDPC findet sich wieder eine Menüleiste, die Punkte entsprechen denen im Kapitel ["Aufbau"](/schild2/import-export-statistik/statistik-mit-asdpc-aufbau) ausgeführt.

Über **Datei** lassen sich Daten für den Beleg *importieren*, der Beleg lässt sich *drucken* und *schließen*.

Unter **Bearbeiten** können alle Datensätze des Belegs auf einmal ausgewählt werden. Weiterhin kann hier ein *Kommentar* zum Beleg sowie Kontaktdaten für IT.NRW eingegeben werden, um eventuelle Rückfragen zu beschleunigen.

![ASDPC_B_Kommentar](/bilder/wiki/asdpc-b-kommentar-a0676513.png)

Unter **Prüfen** lässt sich einmal der aktuelle *Satz* und der komplette *Beleg* prüfen. Ebenso lässt sich hier der gesamte Prüfbericht aufrufen oder der Fehler des aktuellen Satzes anzeigen.

![ASDPC_B_Prüfen](/bilder/wiki/asdpc-b-pruefen-a27ba9f5.png)

Schlussendlich lässt sich über "Bearbeiten" ➥ "Stichtag" der Stichtag für die Abgabe abrufen.

:::warning
Der Stichtag ist einzuhalten. Bei absehbaren Verzögerungen kontaktieren Sie bitte rechtzeitig den zuständigen Fachberater!
:::

Über dem Beleg selbst finden Sie die Kopfzeile des Belegs mit seinen Steuerelementen.

![ASDPC_B_Übersicht](/bilder/wiki/asdpc-b-uebersicht-d6f31add.png)

Wenn der Mauszeiger über einem Steuerelement gehalten wird, erscheint eine Popup-Information zur Funktion des Steuerelements. Hier im Beispiel sehen wir, dass die Tür oben links den Beleg "LID123 schließen" wird.

Der Reihenfolge nach, beginnend links, bedeuten die Schaltflächen:

- zum ersten Satz
- einen Satz zurück
- einen Satz vor
- zum letzten Satz

- einen neuen Satz einfügen
- ein aktuelles Einfügen abbrechen
- den aktuellen Satz löschen

- den aktuellen Satz kopieren
- Wähle die Sandardsortierung - falls eine andere Sortierung gewählt wurde
- Link zu den Eintragungshilfen/Schlüsseltabellen für ihre Schulform

- Filterliste einblenden - hier kann einen Filterzeile oberhalb der Datensätze eingeblendet werden, um schnell nach bestimmten Einträgen zu suchen
- Comboboxen für Filter ein/ausschalten
- Filter ausschalten

- Drucken

- Fehler - wurde schon auf Fehler geprüft, kann hier die Fehlerliste angezeigt werden. Im Beispiel sehen wir, dass es *gelbe Hinweise* gibt, die zu prüfen wären.

- Über "Identnummer aus Vorgabedaten anzeigen" kann nach Anwahl der Vorgabedatendatei die zu diesem Satz gehörende LID angezeigt werden.

![ASDPC_B_Beispielfehler](/bilder/wiki/asdpc-b-beispielfehler-272e973b.png)

Hier im Beispiel sehen wir, dass der Hinweis darauf aufmerksam macht, die Schule habe keine Lehramtsanwärter! Ist dies jedoch in der Tat so, kann dieser Umstand unkorrigiert bleiben, da er die aktuelle Realität an der Schule abbildet. Ansonsten wären die LAA nachzutragen. Harte Fehler sind immer zu beseitigen, Muss-Fehler sind zu beseitigen oder für jeden Einzelfall mit der Schulaufsicht abzuklären.

Unterhalb der Steuerleiste befinden sich die Datensätze. Diese können mit einem Klick in den Datensatz bearbeitet werden.

![ASDPC_B_Daten_zu_Satz](/bilder/wiki/asdpc-b-daten-zu-satz-c671b591.png)

Klickt man auf das jeweilige Kopffeld einer Spalte, wird nach dieser Spalte sortiert. Die Sortierung kann mit einem Klick auf *Standardsortierung* wieder aufgehoben werden.

Unter den Datensätzen - die lassen sich rechts mit einem Balken scrollen - befinden sich in der Fußleiste weitere mit diesem Datensatz verknüpfte Felder. Hier in diesem Fall der Lehrerdaten LID123 sind dies die Lehrämter, Ausbildung, Fächer, Mehr- und Minderleistung und Nichtunterrichtliche Tätigkeiten.

Bei diesen Informationen können wieder neue Datensätze angelegt werden. Bei einem Klick auf das Symbol "Datensatz anlegen" erscheint unterhalb ein leerer Datensatz, in dem per Dropdown-Menü alle von der Statistik vorgesehenen Einträge ausgewählt werden können.

![ASDPC_B_Satzdetails](/bilder/wiki/asdpc-b-satzdetails-ed2886d3.png)

Fehlerhafte oder aus Versehen leer erzeugte unbenötigte Sätze lassen sich über das entsprechende Symbol wieder entfernen.

:::info
Bei Unklarheiten kann ein Blick in die Schlüsseltabellen und Eintragungshilfen helfen.
:::

Hier in der LID123 sind nun alle Daten zu den Lehrkräften einzutragen. Wurden die Daten zu Rechtsverhältnis, Beschäftigungsart, den Pflichtstunden und den zeitabhängigen Daten sauber in den Schulverwaltungsprogrammen erfasst und über die Lehrerdaten und die UVD importiert, wurde schon sehr viel Arbeit an dieser Stelle im Vorfeld geleistet.

:::warning
Wurden die Daten in einem Beleg komplett importiert, nachgetragen und korrigiert, ist im Beleg eine *Prüfung des Belegs* über "Prüfen" ➥ "Beleg prüfen" durchzuführen. Wurden hierauf Korrekturen vorgenommen, sollten die Daten erneut geprüft werden.\
Wurde in einem Beleg nachträglich etwas geändert, ist es empfehlenswert, direkt noch einmal eine *Gesamtprüfung* außerhalb des Belegs durchzuführen.
:::

Wurde der Beleg komplett abgearbeitet, wird er über "Beleg schließen" verlassen. Nun kann mit dem Folgebeleg weitergearbeitet werden.

:::danger
Wurde viel geschafft, empfiehlt es sich, eine Sicherung zu erstellen.
:::

<a id="Beleg:_KLD323_-_Klassendaten"></a>

#### Beleg: KLD323 - Klassendaten

Wie im vorherigen Beleg findet sich die Kopfzeile mit den allgemeinen Steuerelementen. Besonders zu beachten ist hier jedoch die Schaltfläche \*\*Schülerzahlen\*\*, in der die korrekten Summen noch einmal als Kontrolle manuell einzugeben sind.

Beim Beleg KLD323 werden die Daten zu den Klassen erfasst.

![ASDPC_KLD1](/bilder/wiki/asdpc-kld1-0d4a7ce2.png)

Hierbei wird eine Klasse bei Bedarf über mehrere Zeilen abgebildet, welche die unterschiedlichen Möglichkeiten als \*\*Teilklassen\*\* erfasst. Die erste Spalte ordnet der jeweiligen Teilklasse einen Standort zu.

In der zweiten Spalte (410) wird ein Jahrgang gesetzt. Die dritte Spalte (411) erfasst die Parallelität. Hieraus setzen sich die Klasse zusammen: Aus Jahrgang 05 und Parallelität A wird die 05A, aus Jahrgang 05 und Parallelität die 05B und so weiter. Eine homogene Klasse wird somit nur von einer Zeile repräsentiert, hier im Beispiel wäre dies etwa die 05B.

:::danger
Jede abweichende Kombination aus "Jahrgang" und "Parallelität" bedeutet für ASDPC eine neue Klasse.\

**Hierbei ist unbedingt zu beachten, dass das nachträgliche Eintragen und Löschen von Klassen in der KLD323 Inkonsistenzen in KLD und UVD erzeugen kann.**\
**Sollte dies notwendig werden, müssen über "Prüfen" ➥ "Abgleich KLD → UVD" und "Abgleich UVD → KLD" in den jeweiligen Belegen die Klassenkürzel angepasst werden.**
:::

In der folgenden Spalte (413) werden die unterschiedlichen Teilklassen von Mischklassen (daher TKM 413) erfasst. Hier im Beispiel wäre dies die Klasse 05A, in welcher 26 SuS ohne Förderschwerpunkt (Zeile 1), zwei Schüler mit dem Förderschwerpunkt "LB" (Zeile 2) und einer mit dem Förderschwerpunkt "SG" (Zeile 3) erfasst sind.

In den folgenden Spalten sind oft die möglichen Felder per Dropdown-Eintrag auszuwählen, wobei bei der Menüauswahl der Schlüssel zu einer wörtlichen Ausformulierung aufgelöst wird.

- Schulgliederung (420) - Bleibt für "Standard für diese Schulform" leer.
- Klassenart (431) - z.B. "RK" für "Regelklasse".
- Organisationsform (435) - z.B. "2" für Teilnahme am gebundenen Ganztag.
- Jahrgang für diese Teilklasse (440)
- Es folgen die möglichen Förderschwerpunkte 1 (4441) und 2 (4412), sowie der Schalter bei einem Anspruch auf "intensivpädagogische Förderung bei Schwerstbehinderung" (442).
- Reformpädagogik (443) - für "ohne" bleibt der Eintrag leer.
- Lehrkraft (450) der Teilklasse - ggf. ist hier bei mehreren Teilklassen die gleiche Lehrkraft mehrfach einzutragen.

:::warning
Für weitere Beispiele und aktuelle - und sich ggf. über die Jahre ändernde! - Eintragungskonventionen konsultieren Sie die für Ihre Schulform geltenden Eintragungshilfe des aktuellen Schuljahres.
:::

Es folgt die Erfassung der Gesamtschüler/innenzahlen. Hierbei erfasst ASDPC immer zuerst alle SuS (510) und dann die \*\*davon\*\* weiblichen (510W). Diese Eintragung wiederholt sich in den Spalten 870 und 870W für die ausländischen SuS.

Unten im Fuß des Belegs wird für jede Klasse die \*\*schulische Herkunft\*\* der jeweiligen Teilnehmer/innen erfasst. Hierbei wird für alle SuS mit gemeinsamen Daten eine Zeile angelegt. Der erste Eintrag ist hier die Schulnummer (609), dann folgt die Schulform (610) dieser Schule und die Art (611) der Herkunft. In der Grundschule findet noch eine Unterscheidung nach den Grundschulempfehlungen (611A) statt. Es erfolgt dann eine Erfassung der Gesamtzahlen (612) mit "Davon weiblich" (14) und dann die Aufschlüsselung, wer Ausländer-/in ist (613 und 613W) für diesen Eintrag.

:::info
Bei der Art würden bei einer weiterführenden Schule in Jahrgang 05 diverse Grundschulen erscheinen, von denen die SuS zusammengekommen sind, die dann noch nach den Empfehlungen aufgeschlüsselt werden. In Jahrgang 06 und aufwärts werden die meisten SuS von der eigenen Schule per Wiederholung oder Versetzung erfasst werden und nur Schulwechsler würden von einer anderen Schule kommen.
:::

:::info
In den Fußfeldern können neue Einträge jeweils oben links mit dem entsprechenden Symbol erstellt, ausgewählte Zeilen auch gelöscht bzw. kopiert werden.
:::

Rechts neben der "Herkunft der Schüler-/innen" werden die Auslandsherkünfte der SuS in dem zugehörigen Eintrag links weiter aufgeschlüsselt. Hier sind die Staatsangehörigkeit (810), die Gesamtzahl (811) und wieder "Davon weiblich" (811W) zu erfassen.

Schlussendlich können Einträge für die "Betreuung" mit einer Art (970) angelegt werden, auch hier wird wieder eine Gesamtzahl (971) erfasst.

<a id="Beleg:_UVD223_-_Unterrichtsverteilung"></a>

#### Beleg: UVD223 - Unterrichtsverteilung

Bei der Unterrichtsverteilung wird pro Zeile ein Unterricht erfasst.

:::danger
In Optionen ➥ Unterrichtseinheiten in Minuten kann zwischen dem 45-Minuten-Modell und der Abrechnung in Minuteneinheiten für die UVD und die LID123 umgeschaltet werden. Hin- und Herschalten kann jedoch zu Rundungsfehlern führen, so dass ein Umschalten eine gründliche Überlegung erfordert.
:::

![ASDPC_UVD1](/bilder/wiki/asdpc-uvd1-594fdd88.png)

Für den einfachsten Fall, dass alle SuS einer Klasse an einer Unterrichtseinheit teilnehmen, sind in der Zeile ein Jahrgang (110) und eine Parallelität (111) zu wählen. Der Bildungsgang bleibt bei fast allen Schulformen als "Standard für diese Schulform" leer; bei Gymnasien ist er auszufüllen (G8, G9, Aufbaugymnasium). Die Art der Gruppe (112) bleibt ebenfalls leer.

Es fehlen noch das Fach (121) und die Lehrkraft (130), die aus dem Dropdown-Menü ausgewählt werden.

Zusätzliche Teilnehmer (140 und 141) sind nicht einzutragen, da ASDPC davon ausgeht, dass alle SuS der Klasse an diesen Unterrichten teilnehmen.

:::info
Über den *Bildungsgang* lassen sich Unterrichte mit angeschlossenen Bildungsgängen und Bildungszweigen abbilden. So würde eine Gesamtschule mit einem angeschlossenen gymnasialen Bildungszweig eine Klasse hier als Bildungsgang "GY" anlegen.
:::

Mit den Folgezeilen "Team-Teaching" und "Schüler-Folgezeile" lassen sich viele in der Realität vorhandenen Konstrukte abbilden.

![UVD_3](/bilder/wiki/uvd-3-0dd2fbcc.png)

Hat man eine leere UVD vor sich, kann mit dem Symbol "Satz einfügen" eine neue Zeile eingefügt werden, die dann über die erste Spalte "Zeilenart" auf "H - Hauptteile", "F- Schüler-Folgezeile" oder "T - Team-Teaching" gesetzt werden kann. Möchte man eine Zeile in einer existierenden UVD-Tabelle anlegen, so gelingt dies über das Menü "Folgezeilen".

In der Abbildung oben ist zu sehen, dass sich beim Team-Teachung lediglich eine neue Lehrkraft mit dann entsprechender Stundenzahl eintragen lässt. Alle anderen Einträge sind ausgegraut und wie die Hauptzeile.

Bei der Schüler-Folgezeile lassen sich ein neuer Jahrgang, Bildungsgang, eine Art der Gruppe, ein Fach und weitere TeilnehmerInnen auswählen.

![UVD_4](/bilder/wiki/uvd-4-6340e0e4.png)

Die Abbildung oben zeigt zwei Beispiele:

1\. Die *Hauptzeile* H 0159 hat eine *Folgezeile* F 0159. In der Hauptzeile findet im Jahrgang 07 vierstündig Sport bei Lehrkraft L10 mit 14 Teilnehmern statt (7 davon weiblich). In *diesem* Sportkurs befindet sich eine weitere Gruppe aus dem Jahrgang 06 fünf weitere Teilnehmer (davon 3 weiblich). Felder, die in Folgezeilen nicht gesetzt werden können, sind ausgegraut - in Folgezeilen lassen sich also keine Parallelität, keine weiteren Wochenstunden oder neue Lehrkräfte setzen.\
Es lassen sich nach Bedarf weitere Folgezeilen hinzufügen.

Über Folgezeilen lässt sich z.B. gemeinsamer Unterricht von unterschiedlichen Bildungsgängen abbilden. Hier wären dann bei ansonsten identischen Hauptzeile und Folgezeilen unterschiedliche Bildungsgänge und Arten der Gruppe (112) einzutragen; am Ende stünden dann die jeweiligen Teilnehmendenzahlen.

2\. Die *Hauptzeile* H 0162 wird von einer *Team-Teaching-Zeile* T 0162 gefolgt. Hier lassen sich weitere Lehrkräfte mit einer Stundenzahl setzen. Alle andere Felder sind ausgegraut und nicht veränderbar, da am Unterricht der Hauptzeile ansonsten nichts verändert wird.\
Es lassen sich nach Bedarf weitere Team-Teaching-Zeilen hinzufügen.

Folgezeilen und Team-Teaching-Zeilen lassen sich auch kombinieren, etwa um abzubilden, dass ein Unterricht mit Gruppen aus unterschiedlichen Jahrgängen (teilweise) von mehreren Lehrkräften durchgeführt wird.

Über die Spalte Schüler anderer Schulen (109) lassen sich Teilnehmende über Hauptzeilen oder Folgezeilen als externe SuS kenntlich machen.

Bilingualer Unterricht wird über die Spalte 160 erfasst. Hier ist die Sprache einzutragen ("F", "E" usw.).

Gemischtkonfessioneller Religionsunterricht wird über zwei Hauptzeilen erfasst, da die Fächer eigenständig erhalten bleiben und die evangelischen bzw. katholischen Lehrkräfte im Wechsel unterrichten. Ein solcher Unterricht muss zuvor durch die Schulaufsicht genehmigt werden.

:::info
Weitere angepasste Beispiele und Konventionen finden sich in den Eintragungshilfen für das aktuelle Jahr.
:::

<a id="Beleg:_SCD011_-_Religionszugehörigkeiten"></a>
<a id="Beleg:_SCD011_-_Religionszugeh.C3.B6rigkeiten"></a>

#### Beleg: SCD011 - Religionszugehörigkeiten

In diesem Beleg werden jahrgangsweise die Religionszugehörigkeiten und Abmeldungen vom Religionsunterricht erfasst.

![ASDPC_SCD011](/bilder/wiki/asdpc-scd011-ae81964a.png)

:::info
Beachten Sie bitte hierzu die aktuellen Eintragungshilfen.\
So sind z.B. nur Mitglieder der Evangelischen Kirche als "evangelisch" zu erfassen. SuS die zu einer Evangelischen Freikirche gehören, sind als "Andere" zu erfassen. Weiterhin ist festgelegt, welche Orthodoxen Kirchen unter "Orthodox" einzutragen sind und welche getrennt zu erfassen sind.
:::

<a id="Beleg:_SCD012_-_Abgänger"></a>
<a id="Beleg:_SCD012_-_Abg.C3.A4nger"></a>

#### Beleg: SCD012 - Abgänger

In diesem Beleg werden die SuS erfasst, welche die Schule **am Ende des abgelaufenen Schuljahres** nach **Beendigung ihrer Vollschulzeitpflicht** verlassen haben. D.h. geht es darum, die regulär abgehenden SuS zu erfassen.

*Nicht* zu erfassen sind SuS, die

- an der Schule verbleiben
- vor dem Erreichen der Vollzeitschulpflicht die Schule verlassen
- **vor dem Ende des laufenden Schuljahres** die Schule ohne Abschluss verließen (z.B. Wechsler mit einem Überweisungzeugnis)

Weiterhin zu erfassen sind SuS, die 1. **vor dem Ende des Schuljahres** zur Schule kamen, dann 2. **die Vollschulzeitpflicht beendeten** und 3. **nach dem Ende des Schuljahres** die Schule wieder verließen.

:::warning
Es ist zwingend erforderlich, dass die Vorgabedaten *vor* jeder Bearbeitung oder dem Import von Daten aus Schulverwaltungssoftware eingelesen werden.\

**Hierbei sind die Vorgabedaten auf ihre Richtigkeit zu prüfen.**
:::

Aufgrund der Tatsache, dass Vorgabedaten nur die *abschlussrelevanten Jahrgänge* ab Jahrgang 09 enthalten, kann es passieren, dass ein Schüler oder eine Schülerin die Schule nach Erreichen der Vollschulzeitpflicht in einem niedrigeren, z.B. 08, Jahrgang verlässt. Dieser niedrigere Jahrgang wäre somit händisch nachzutragen.

![ASDPC_SCD012](/bilder/wiki/asdpc-scd012-6f689f95.png)

Die grünen Einträge sind vorgegeben und können nicht verändert werden.

Fehlende Bildungsgänge sind nachzutragen, hierbei ist im Feld "Bemerkungen" einzutragen, wieso sie im Vorjahr nicht berücksichtigt waren.

Im Block rechts unten sind wie bei den Klassendaten KLD jeweils die SuS zeilenweise zu erfassen, deren die Abschlussart (61A), Geburtsjahr (61B) und Staatsangehörigkeit (61C) gemein sind, abschließend sind die jeweiligen Anzahlen nach Gesamt (62) und weiblich (62W) aufzuführen.

Es ist zu beachten, dass SuS, die neben einer anderen Staatsangehörigkeit auch die Deutsche besitzen nicht als Ausländer gemeldet werden. Bei SuS ohne deutscher, aber dafür mehrerer anderer Staatsangehörigkeiten ist die "effektive Staatsangehörigkeit" zu melden, d.h. die, mit der sich am meisten identifiziert wird - als Indizien hierfür können Wohnsitz, Geburtsort und bisherige Lebensführung der betroffenen Schülerinnen und Schüler herangezogen werden.

:::info
Es ist jeweils der höchste erreichte Abschluss einzutragen, selbst wenn er in einem vorherigen Jahrgang erworben wurde.
:::

Um Rückfragen zu vermeiden empfiehlt es sich, die Gesamtzahlen zu vergleichen und eventuelle Differenzen im Feld "Bemerkungen" zu erläutern.

<a id="Weitere_Belege"></a>

#### Weitere Belege

Hier finden sich diverse Belege für weitere Daten. Manche der Belege werden nur für passende Schulformen angezeigt.

![ASDPC_Weitere_Belege](/bilder/wiki/asdpc-weitere-belege-8902bb0a.png)

<a id="Abiturprüfungsergebnisse"></a>
<a id="Abiturpr.C3.BCfungsergebnisse"></a>

##### Abiturprüfungsergebnisse

![ASDPC_Abitur](/bilder/wiki/asdpc-abitur-3f0237fc.png)

In diesem Beleg sind die Abiturprüfungsergebnisse einzulesen. Diese Daten können über die von SchILD NRW erzeugte ABI.txt eingelesen werden. Es ist zu beachten, dass bei "Bild.-Gang" von Gymnasien bzw. von Gesamtschulen mit entsprechenden Bildungsgängen G8 bzw. G9 einzutragen ist. Eine Automatik ist bei einer passenden Schulform unter "Bearbeiten" anwählbar.

Zum Ende der Bearbeitung sind wie bei vorherigen Belegen über die gelben Schaltflächen in der Kopfzeile die Daten mit "Schülersummen" und dem Beleg "SCD012" abzugleichen.

<a id="Zuwanderungsgeschichte"></a>

##### Zuwanderungsgeschichte

In diesem Beleg wird die Zuwanderungsgeschichte von SuS klassenweise erfasst. Hierbei ist zu beachten, dass im rechten Bereich zwei unterschiedliche Zählweisen verwendet werden:

![ASDPC_ZuwGeschi](/bilder/wiki/asdpc-zuwgeschi-f210f6ed.png)

- Personen 1): Hier wird jede Person nur einmal gezählt, d.h. es handelt sich um die Summe der SuS, die irgendeine Zuwanderungsgeschichte haben
- Fallzählung 2): Hier werden drei unterschiedliche Fälle differenziert erfasst und somit kann es möglich sein, dass SoS in mehren der Spalten gezählt werden müssen. Z.B. würde ein Schüler, der "nicht in Deutschland geboren" ist und bei dem "mindstens ein Elternteil nicht in Deutschland geboren" ist, aber die Verkehrssprache "Deutsch" in der Familie hat, in den ersten beiden Spalten erfasst werden.

:::info
Eine zu erfassende "Personen 1)"-Zuwanderungsgeschichte liegt dann und nur dann vor, wenn mindestens einer der Fälle in "Fallzählung 2)" erfüllt ist.\
Somit kann es durchaus sein, dass SuS keine deutsche Staatsbürgerschaft besitzen, aber auch nicht in diesem Beleg erfasst werden.
:::

![ASDPC_ZuwGeschi_Kontrolle](/bilder/wiki/asdpc-zuwgeschi-kontrolle-0aaef788.png)

Nach getaner Arbeit sind die Kontrollzahlen manuell unter "Summe der Schüler mit Zuwanderungsgeschichte" zu bestätigen.

<a id="Internatsplätze"></a>
<a id="Internatspl.C3.A4tze"></a>

##### Internatsplätze

Mögliche und tatsächlich belegte Internatsplätze Ihrer Schule sind über diesen Beleg zu erfassen.

![ASDPC_Internat](/bilder/wiki/asdpc-internat-2e507d26.png)

Im Dropdown-Menü kann angewählt werden, ob es "Keine Internatsplätze" gibt oder wie die Geschlechterausrichtung des Internats gestaltet ist.

<a id="Wohnorte"></a>

##### Wohnorte

Hier werden die Wohnorte mit Postleitzahl und Wohnort nach Klassen und Teilklassen wie in der KLD323 gesetzt erfasst.

![ASDPC_Wohnorte](/bilder/wiki/asdpc-wohnorte-9074506c.png)

Wie schon bei anderen Belegen werden SuS mit allen übereinstimmenden Merkmalen zu einer Gruppe im Feld unterhalt der Auswahlliste zusammengefasst. Hier sind eine Postleitzahl aus NRW und dann ein dazugehörender Wohnort zu wählen.

:::info
Wird die Postleitzahl geändert bzw. gewählt wird der Wohnort nicht automatisch mit gesetzt. Dieser muss anschließend aus dem Dropdown-Menü angewählt werden.
:::

Ein Wohnort außerhalb von NRW - etwa in einem anderen Bundesland oder einem von ASDPC erfassten Nachbar-Ausland Deutschlands - wird über die entsprechenden Schlüssel am Ende der Postleitzahlenliste gewählt.

![ASDPC_WohnorteAuswahl](/bilder/wiki/asdpc-wohnorteauswahl-63909cf7.png)

Um die Auswahl der möglichen Wohnorte einzuschränken kann über "Wohnorte auswählen" eine Einschränkung auf einen Regierungsbezirk und dann auf einen Kreis durchgeführt werden.

Um diese Einschränkung rückgängig zu machen, steht das Feld "Auswahl zurücksetzen" zur Verfügung.

<a id="Altersstruktur"></a>

##### Altersstruktur

Die SuS werden wieder nach Klassen und Teilklassen, wie in der KLD323 gesetzt, erfasst. Hierbei sind folgende SuS gemeinsam als Gruppe unterhalb der (Teil-)klassenauswahl zu erfassen:

![Bild_2022-01-03_104947](/bilder/wiki/bild-2022-01-03-104947-1dd79bdf.png)

Jede Gruppe besteht aus SuS mit gleichem Geburtsjahr und gleicher Staatsangehörigkeit. Damit ergibt sich, dass ausländische SuS als eigene Gruppe mit der jeweiligen Staatsangehörigkeit gesondert zur Erfassung angelegt werden.

In der Kopfzeile sind wieder die "Schülersummen" manuell einzutragen und zu bestätigen.

![ASDPC_Schülersummen_Kontrolle](/bilder/wiki/asdpc-schuelersummen-kontrolle-52a19247.png)

<a id="Deutschfördergruppen"></a>
<a id="Deutschf.C3.B6rdergruppen"></a>

##### Deutschfördergruppen

Über diesen Beleg werden Deutschfördergruppen erfasst.

:::danger
Hier müssen alle Fördergruppen erfasst werden, die nach BASS 13-63 Nr. 3 (Integration und Deutschförderung neu zugewanderter Schülerinnen und Schüler) eingerichtet wurden und zwar unabhängig davon, wie diese an einer Schule genannt werden.\

Deutschördergruppen, die nicht nach BASS 13-63 Nr. 3 eingerichtet wurden, dürfen hier auch nicht erfasst werden.
:::

Der entsprechende Erlass kann hier nachgelesen werden: [BASS 13-63 Nr. 3](https://bass.schul-welt.de/18431.htm).

Grundlegend sind alle Fördergruppen zu berücksichtigen, die für neu zugewanderte SuS eingerichtet wurden.

Der Handreichung des Ministeriums ist zu entnehmen:

*Neu zugewandert im Sinne Erlasses 13-63 Nr. 3 sind Schülerinnen und Schüler,*

• *die erstmals eine deutsche Schule besuchen und noch nicht über hinreichende Deutschkenntnisse verfügen, um dem Unterricht zu folgen, oder*

• *die bei einem Wechsel der Schulstufe (von der Primarstufe zur Sekundarstufe I oder von der Sekundarstufe I zur Sekundarstufe II) oder der Schule aufgrund ihrer kurzen Verweildauer in der abgebenden Schule die notwendigen Deutschkenntnisse noch nicht ausreichend haben erwerben können.*

![ASDPC_Deutschfördergruppen](/bilder/wiki/asdpc-deutschfoerdergruppen-1c12e146.png)

Hier sind die eingerichteten Deutschfördergruppen nach Zahl der Gruppen und Zahl der Teilnehmer einzutragen, die Deutschförderklassen werden aus der KLD323 übernommen.

:::info
Die \*-Anmerkungen im Beleg verweisen für Details auf die entsprechenden Sektionen in der BASS 13-63 Nr. 3.
:::

<a id="Weitere_&quot;Weitere_Belege&quot;"></a>
<a id="Weitere_.22Weitere_Belege.22"></a>

##### Weitere "Weitere Belege"

Mitunter sind noch weitere "Weitere Belege" in Ihrer Statistik auszufüllen oder hier aufgeführte werden in einem bestimmten Jahr nicht (weiter) erhoben. Ob und welche dies sind, hängt vom Schuljahr beziehungsweise der Schulform Ihrer Schule ab.

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1343) · [Statistik mit ASDPC Haupterhebung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC+Haupterhebung&oldid=5313)
