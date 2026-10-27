---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Statistik mit ASDPC Haupterhebung"
---

# Statistik mit ASDPC Haupterhebung

Gesicherte Wiki-Seite · Namensraum 0 · Version 5313 · Stand 2022-01-22.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/statistik-mit-asdpc-haupterhebung) · [Originaldaten herunterladen](/dateien/quellen/seite-1343.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC__

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]

==Die Haupterhebung==

Aus den Eintragungshilfen des Ministeriums folgt:

{{Wichtig|Die Erhebung bezieht sich auf die Kalenderwoche, in die der 15. Oktober fällt.}}

{{Hinweis|Falls der 15. Oktober in eine Kalenderwoche mit einem oder mehreren schulfreien Tagen fällt, ist für die Erhebung von einer Kalenderwoche mit regulärem Schulbetrieb auszugehen.<br><br>

Im Rahmen der Klassendaten (KLD) müssen somit alle Schülerinnen und Schüler erfasst werden, die in dieser Kalenderwoche an der Schule angemeldet sind. Im Bereich der Unterrichtsdaten (UVD) muss der geplante Unterricht für diese Kalenderwoche erfasst werden.}}


Starten Sie ASDPC. Starten Sie über "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)". 

Im Übersichtsbildschirm mit den Schuldaten lässt sich nun über "Erhebung" ➥ "Haupterhebung JAHR" ebendiese Haupterhebung starten.

[[File:ASDPC Haupterhebung Starten.png|x150px]]

Je nachdem, ob in Ihrer Schule schon Vorgabedaten vorhanden sind oder ob schon an der Statistik gearbeitet wurde, erscheinen andere statistische Zusammenfassungen. In der Statistik hier im Beispiel wurden noch keine Daten eingelesen.

[[File:ASDPC HE Hauptfenster.png|400px]]

===Die Menüoptionen in der Haupterhebung===

Es ist nun zu sehen, dass sich das Menü in der Kopfzeile verändert hat. Diese Einträge sollen nun erläutert werden.


====Datei ➥ Import====

[[File:ASDPC Import.png|400px]]

Hier können von anderen Programmen erstellte Daten eingelesen werden, z.B. von SchILD NRW. Je nach Schulform können eventuell auch weitere Dateien eingelesen werden.

Hier sind die Daten in der Reihenfolge des Menüs einzulesen. Daher es müssen zuerst die Schuldaten über die Vorgabedaten eingelesen werden, dann die Daten zu SuS, dann Lehrkraftdaten und schließlich die Unterrichtsverteilung. Dass Daten erfolgreich importiert wurden, bedeutet jedoch nicht, dass diese fehlerfrei sind. Bitte prüfen Sie an dieser Stelle schon von ASDPC gemeldete Unstimmigkeiten und beseitigen Sie diese in Ihrem Schulverwaltsprogramm und nehmen Sie dann einen erneuten Import vor.

Diese Daten können importiert werden

* Vorgabedaten
* Schülerdaten (SIM.TXT)
* Lehrerdaten (Lehrer.txt)
* Die Unterrichtsverteilung (UVD.TXT)
* Eventuell weitere Daten

{{Hinweis|Die Vorgabedaten müssen zu Beginn der Statistik im gesicherten Bereich des Bildungsportals heruntergeladen werden.}}

{{Wichtig|Das Einlesen ist für die "Adressen" und den Beleg "SCD012" (Ausnahme: Grundschulen) verpflichtend!}}

Die Vorgabedaten enthalten u.a. die Adresse der Schule. Ändert sich diese, ist dies zeitnah über das Bildungsportal anzuzeigen. Weiterhin enthalten die Vorgabedaten den Beleg SCD012 (Vorjahresschüler). Die Vorgabedaten werden zum Ende der Sommerferien jedes Schuljahr über das Bildungsportal bereitgestellt.

Das Einlesen der Lehrerdaten ist optional. In ihnen finden sich auch eventuell noch fehlende Lehreridentnummern (LID). 

Zum Einlesen müssen die passenden Dateien gewählt werden. Vom Standard bietet ASDPC den Ordner "Eingang" im ASDPC-Installationsverzeichnis an. Hat man die von anderen Programmen exportierten Daten oder die Vorgabedaten in einem anderen Verzeichnis abgelegt, lassen sich die Dateien dort finden. Hier im Beispiel lassen sich noch verschlüsselte oder schon unverschlüsselte Vorgabedaten anwählen.

[[File:ASDPC Import Vorgabedaten.png|500px]]

Fragt ASDPC, ob vor dem Import eine Sicherung der Daten durchgeführt werden sollte, bietet es sich an, diesen Dialog mit "Ja" zu bestätigen. Bei Problemen mit der Entschlüsselung der Vorgabedaten prüfen Sie bitte zuerst, ob Sie die gleichen Schlüssel wie IT.NRW verwenden oder ob die Dateinamen 100% korrekt geschrieben sind. Mehr Thema Verschlüsselung finden Sie im Kapitel [[Statistik_mit_ASDPC-Schluesselmanagement|Schlüsselmanagement]].

{{Wichtig|Der Import von Daten überschreibt den aktuellen Stand dieser Daten. Vor einem (erneuten) Import während der Statistik sollte somit eine Datensicherung über "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" angelegt werden. Wird eine Sicherung eingelesen, wird der aktuelle Arbeitsstand mit dem in der Sicherung ersetzt.}}

{{Hinweis|Die ''Abteilungsdaten'' werden benötigt, wenn mehrere Personen - eventuell auch an unterschiedlichen Standorten mit unterschiedlichen Datenträgern - an der Statistik arbeiten. Über diesen Import ist das Zusammenführen dieser Daten möglich. Ist ein solches verteiltes Arbeiten bei Ihnen nicht der Fall bzw. die Abteilungen sind digital vernetzt, muss hier nichts eingelesen werden.}}

====Datei ➥ Export====

[[File:ASDPC Export.png|300px]]

'''Abteilungsdaten''': Bei Anwahl dieser Option öffnet sich ein Hinweis darauf, dass Klassenbezeichnungen der Abteilungen eindeutig sein müssen und ein Dialogfeld, in dem ein Speicherort und der Name einer .txt-Datei gewählt werden können. Dieser Name ist frei zu vergeben und sollte die Abteilung sowie das Datum eindeutig angeben.

'''Daten für IT.NRW''': Wenn Ihre Statistik getaner Arbeit komplett fertig ist, kann das Ergebnis über den Export für IT.NRW (verschlüsselt) ausgeben werden, um diese an IT.NRW zu mailen. Sie müssen hier auch wieder die vierstellige ASD-Signatur der Schule angeben. Es muss zuvor eine Gesamtprüfung der Daten durchgeführt worden sein und die Daten müssen frei von ''Harten Fehlern'' sein.

{{Hinweis|Das genaue Vorgehen wird im Kapitel [[Statistik_mit_ASDPC#Bereitstellung_der_Daten|Bereitstellung der Daten]] behandelt.}} 

'''Daten für den Schulträger''': Haben Sie mit dem Schulträger die Absprache, dass dieser Statistikdaten erhält, können diese hier (unverschlüsselt) gespeichert werden. Auch hier kann ein Dateiname für eine .txt-Datei frei vergeben werden.

====Datei ➥ Drucken====

[[File:ASDPC Drucken.png|x300px]]

Über dieses Menü können alle ''Belege'' gesammelt oder einzeln ausgedruckt werden, diese können zur Weiterbearbeitung, der Archivierung oder der Weitergabe an den Schulträger dienen. Weiterhin sind die Belege als ''Leerbelege'' in ihrer unausgefüllten Form ausdruckbar.

Auch der Druck der ''Schlüsseltabellen'' und die Fehlerbeschreibung kann über dieses Menu angestoßen werden. Dies ist möglicherweise praktisch, die die Schlüsseltabellen in Teilen in Bezug auf bestimmte Belege gedruckt werden können. Unter dem Bereich ''Prüfung'' bei den Schlüsseltabellen sind die Ergebnisse der Prüfung ausdruckbar.

====Datei ➥ Daten löschen====

Sollte es aufgrund fehlerhafter Daten einfacher sein, eine große Menge Daten direkt zu löschen und neu zu importieren/einzugeben, ist das über das Menü "Datei" ➥ "Daten löschen" anwählbar.

[[File:ASDPC Daten löschen.png|350px]]

Die zu löschenden Datensätze werden über die Checkboxen ausgewählt. Sollte es notwendig sein, können über die oberste Option alle Daten gelöscht werden.

{{Achtung|Es empfiehlt sich, vor einem Löschvorgang eine Sicherung anzufertigen, da später doch benötigte, aber gelöschte Daten nur über eine vorherige Sicherung wiederhergestellt werden können.}}

====Datei ➥ Sicherung====

[[File:ASDPC Sicherung.png|400px]]

Hier kann eine Sicherung über "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" angestoßen werden. Diese wird als MSACCESS Datenbank (.mdb) in den Ordner ASD\sicherungen gespeichert, jedoch kann auch ein beliebiger anderer Ordner angewählt werden. Das Dateinamenformat ist DATUM_ZÄHLER.MBD. So wäre der Vorschlag für die zweite Sicherung am 20.10.2021 der Name "20211020_2_SICHERUNG.MDB". Dieser kann davon abgesehen auch frei gewählt werden.

Über '''Gesicherte Daten aus Datenbank einlesen''' öffnet sich ein Dialogfeld, über welches eine ebensolche MSACCESS-Datei (.mdb) angewählt werden kann.

{{Wichtig|Das Einlesen von Datensätzen aus einer Sicherung überschreibt den aktuellen Stand in ASDPC.}}

====Datei ➥ Schließen====

Über das Feld '''Schließen''' wird die Haupterhebung des aktuellen Jahres verlassen und ASPDC kehrt zur Schulübersicht zurück.


====Belege====

Unter dieser Option verbergen sich die Belege von ASDPC, in dem die Daten der Statistik erfasst werden. Hinweise zur eigentlichen Erfassung der Daten erhalten Sie im folgenden Kapitel zur DURCHFÜRHUNG DER STATISIK. An dieser Stelle ist grundlegend zu vermerken, dass die Belege der Reihenfolge von oben nach unten abgearbeitet werden.

[[File:ASDPC Belege.png|400px]]

Die Belege "SCD011" und "Weitere Belege" können noch weitere Unterbelege beinhalten, die ebenfalls in ihrer Menüreihenfolge abgearbeitet werden.

====Extras====

Der Menüeintrag "Extras" ist wie im identisch zum übergeordneten Menü [[Statistik_mit_ASDPC-Aufbau#Abschnitte_.22Extras.22|"Extras"]] in ASDPC.

[[File:ASDPC Extras.png|x200px]]

====Prüfen====

[[File:ASDPC Prüfen.png|x200px]]

Nach der Dateneingabe in den Belegen können die Daten innerhalb der Belege geprüft werden. Mit der Option "Prüfen" ➥ "Gesamtprüfung" werden alle Belege und vor allem die Daten untereinander über die Belege hinweg geprüft. Daher muss bei Änderungen immer eine Gesamtprüfung durchgeführt werden.

{{Wichtig|Vor dem Abschicken an IT.NRW muss eine Gesamtprüfung und Auswertung des Fehlerpotokolls durchgeführt werden.}}

Über "Prüfen" ➥ "Prüfbericht" können Sie sich die Fehler mit oder ohne Beschreibungen anzeigen lassen, auch ein Ausdruck ist hier nun möglich. Der Prüfbericht kann drei Arten von Fehlern beinhalten: 
* Harte Fehler (rot markiert): Ein Fehlerbericht kann nur ''ohne'' Harte Fehler abgeschickt werden. Diese müssen bereinigt werden. Beispiele für Harte Fehler wären etwa falsche Schlüssel wie nicht existierende Staatsangehörigkeiten, Klassen ohne Bildungsgang oder mehr ausländische SuS in einer Klasse als es SuS gibt.
* Muss-Fehler (orange markiert): Der Prüfbericht kann abgeschickt werden, wenn er M-Fehler enthält. Sie treten auf, wenn wie bei den Harten Fehlern eigentlich unlogische Eintragungen auftreten, z.B. ein BK-Schüler mit Herkunft "Grundschule". Bilden diese aber die Realität ab und wurde der Einzelfall ausdrücklich von der Schulaufsicht genehmigt, muss der Fehler nicht korrigiert werden. Alle Muss-Fehler müssen einzeln geprüft werden.
* Hinweise (gelb markiert): Ein Hinweis macht auf eventuelle Fehler aufmerksam, die geprüft werden müssen. Bilden die Eintragungen den Sachverhalt an Ihrer Schule korrekt ab, kann er belassen werden.

{{Achtung|Zusammenfassend:<br>
''Harte Fehler'' müssen entfernt werden.<br>
''Muss-Fehler'' müssen minimiert werden, nach Absprache mit der Schulaufsicht können sie u.U. bleiben.<br>
''Hinweise'' sind zu prüfen. Das Ziel hier ist nicht aufgrund von künstlichen Eintragungen die Fehlerzahl niedrig zu halten, sondern den Ist-Zustand an Ihrer Schule so zutreffend wie möglich abzubilden.}}

{{Hinweis|Im vorherigen Bildschirm erlaubt "Optionen" ➥ "Rotschwäche" eine Anpassung der Farbdarstellungen.}}

====Hilfe====

Die Hilfe ist identisch zum übergeordneten Menü [[Statistik_mit_ASDPC-Aufbau#Abschnitt_.22Hilfe.22|"Hilfe"]]. Die Hilfe kann von jedem Beleg aus aufgerufen werden.

===Durchführung der Haupterhebung===

[[File:Schaubild ASDPC2.png|400px]]

Nachdem Sie die [[Statistik_mit_ASDPC#Vorbereitung_der_Statistik|Statistik vorbereitet]] haben, können Sie damit beginnen, Ihren Daten einzulesen. Beginnen Sie mit den Vorgabedaten. Die weiteren Daten, SIM.TXT, Lehrer.TXT etc. können eventuell aus Schulverwaltungsprogrammen wie SchILD NRW oder Untis usw. erstellt werden.

* Einlesen der Vorgabedaten
* SIM.txt
* Lehrer.txt
* UVD.txt - dies ist an kleinen Schulen eventuell nicht notwendig; liegt die UVD ohnehin digital vor, etwa weil ein online-Vertretungsplan genutzt wird oder weil zeitabhängige Lehrerdaten in SchILD erfasst werden, kann diese aber auch eingelesen werden.
* ABI.txt - an Grundschulen usw. i.d.R. nicht notwendig. ;)

[[File:ASDPC Belege in der HE.png|400px]]

{{Hinweis|Achten Sie darauf, schon beim Import auftretende Fehler in den Schulverwaltungsprogrammen zu bereinigen und dann erneut von dort einen Export für einen neuen Import in ASDPC zu starten, damit diese Fehler in Folgejahren nicht erneut auftreten und Ihre Daten konsistent sind.}}

Nun sind die Belege mit so vielen Daten befüllt, wie im Schulverwaltungsprogramm erfasst sind. Nun können die ''Belege in ASDPC der Reihe nach'' bearbeitet werden.

====Aufbau der Belege am Beispiel der LID123====

Bei Belegen in ASDPC findet sich wieder eine Menüleiste, die Punkte entsprechen denen im Kapitel [[Statistik_mit_ASDPC-Aufbau|"Aufbau"]]  ausgeführt. 

Über '''Datei''' lassen sich Daten für den Beleg ''importieren'', der Beleg lässt sich ''drucken'' und ''schließen''.

Unter '''Bearbeiten''' können alle Datensätze des Belegs auf einmal ausgewählt werden. Weiterhin kann hier ein ''Kommentar'' zum Beleg sowie Kontaktdaten für IT.NRW eingegeben werden, um eventuelle Rückfragen zu beschleunigen.

[[File:ASDPC B Kommentar.png|400px]]

Unter '''Prüfen''' lässt sich einmal der aktuelle ''Satz'' und der komplette ''Beleg'' prüfen. Ebenso lässt sich hier der gesamte Prüfbericht aufrufen oder der Fehler des aktuellen Satzes anzeigen.

[[File:ASDPC B Prüfen.png|x300px]]

Schlussendlich lässt sich über "Bearbeiten" ➥ "Stichtag" der Stichtag für die Abgabe abrufen.

{{Wichtig|Der Stichtag ist einzuhalten. Bei absehbaren Verzögerungen kontaktieren Sie bitte rechtzeitig den zuständigen Fachberater!}}

Über dem Beleg selbst finden Sie die Kopfzeile des Belegs mit seinen Steuerelementen.

[[File:ASDPC B Übersicht.png|x300px]]

Wenn der Mauszeiger über einem Steuerelement gehalten wird, erscheint eine Popup-Information zur Funktion des Steuerelements. Hier im Beispiel sehen wir, dass die Tür oben links den Beleg "LID123 schließen" wird.

Der Reihenfolge nach, beginnend links, bedeuten die Schaltflächen:
* zum ersten Satz
* einen Satz zurück
* einen Satz vor
* zum letzten Satz


* einen neuen Satz einfügen
* ein aktuelles Einfügen abbrechen
* den aktuellen Satz löschen


* den aktuellen Satz kopieren
* Wähle die Sandardsortierung - falls eine andere Sortierung gewählt wurde
* Link zu den Eintragungshilfen/Schlüsseltabellen für ihre Schulform


* Filterliste einblenden - hier kann einen Filterzeile oberhalb der Datensätze eingeblendet werden, um schnell nach bestimmten Einträgen zu suchen
* Comboboxen für Filter ein/ausschalten
* Filter ausschalten


* Drucken


* Fehler - wurde schon auf Fehler geprüft, kann hier die Fehlerliste angezeigt werden. Im Beispiel sehen wir, dass es ''gelbe Hinweise'' gibt, die zu prüfen wären.


* Über "Identnummer aus Vorgabedaten anzeigen" kann nach Anwahl der Vorgabedatendatei die zu diesem Satz gehörende LID angezeigt werden.

[[File:ASDPC B Beispielfehler.png|x350px]]

Hier im Beispiel sehen wir, dass der Hinweis darauf aufmerksam macht, die Schule habe keine Lehramtsanwärter! Ist dies jedoch in der Tat so, kann dieser Umstand unkorrigiert bleiben, da er die aktuelle Realität an der Schule abbildet. Ansonsten wären die LAA nachzutragen. Harte Fehler sind immer zu beseitigen, Muss-Fehler sind zu beseitigen oder für jeden Einzelfall mit der Schulaufsicht abzuklären.

Unterhalb der Steuerleiste befinden sich die Datensätze. Diese können mit einem Klick in den Datensatz bearbeitet werden.

[[File:ASDPC B Daten zu Satz.png|x300px]]

Klickt man auf das jeweilige Kopffeld einer Spalte, wird nach dieser Spalte sortiert. Die Sortierung kann mit einem Klick auf ''Standardsortierung'' wieder aufgehoben werden.

Unter den Datensätzen - die lassen sich rechts mit einem Balken scrollen - befinden sich in der Fußleiste weitere mit diesem Datensatz verknüpfte Felder. Hier in diesem Fall der Lehrerdaten LID123 sind dies die Lehrämter, Ausbildung, Fächer, Mehr- und Minderleistung und Nichtunterrichtliche Tätigkeiten.

Bei diesen Informationen können wieder neue Datensätze angelegt werden. Bei einem Klick auf das Symbol "Datensatz anlegen" erscheint unterhalb ein leerer Datensatz, in dem per Dropdown-Menü alle von der Statistik vorgesehenen Einträge ausgewählt werden können.

[[File:ASDPC B Satzdetails.png|x300px]]

Fehlerhafte oder aus Versehen leer erzeugte unbenötigte Sätze lassen sich über das entsprechende Symbol wieder entfernen. 

{{Hinweis|Bei Unklarheiten kann ein Blick in die Schlüsseltabellen und Eintragungshilfen helfen.}}

Hier in der LID123 sind nun alle Daten zu den Lehrkräften einzutragen. Wurden die Daten zu Rechtsverhältnis, Beschäftigungsart, den Pflichtstunden und den zeitabhängigen Daten sauber in den Schulverwaltungsprogrammen erfasst und über die Lehrerdaten und die UVD importiert, wurde schon sehr viel Arbeit an dieser Stelle im Vorfeld geleistet.

{{Wichtig|Wurden die Daten in einem Beleg komplett importiert, nachgetragen und korrigiert, ist im Beleg eine ''Prüfung des Belegs'' über "Prüfen" ➥ "Beleg prüfen" durchzuführen. Wurden hierauf Korrekturen vorgenommen, sollten die Daten erneut geprüft werden.<br>
Wurde in einem Beleg nachträglich etwas geändert, ist es empfehlenswert, direkt noch einmal eine ''Gesamtprüfung'' außerhalb des Belegs durchzuführen.}}

Wurde der Beleg komplett abgearbeitet, wird er über "Beleg schließen" verlassen. Nun kann mit dem Folgebeleg weitergearbeitet werden.

{{Achtung|Wurde viel geschafft, empfiehlt es sich, eine Sicherung zu erstellen.}}

====Beleg: KLD323 - Klassendaten====

Wie im vorherigen Beleg findet sich die Kopfzeile mit den allgemeinen Steuerelementen. Besonders zu beachten ist hier jedoch die Schaltfläche **Schülerzahlen**, in der die korrekten Summen noch einmal als Kontrolle manuell einzugeben sind.

Beim Beleg KLD323 werden die Daten zu den Klassen erfasst.

[[File:ASDPC KLD1.png|500px]]

Hierbei wird eine Klasse bei Bedarf über mehrere Zeilen abgebildet, welche die unterschiedlichen Möglichkeiten als **Teilklassen** erfasst. Die erste Spalte ordnet der jeweiligen Teilklasse einen Standort zu.

In der zweiten Spalte (410) wird ein Jahrgang gesetzt. Die dritte Spalte (411) erfasst die Parallelität. Hieraus setzen sich die Klasse zusammen: Aus Jahrgang 05 und Parallelität A wird die 05A, aus Jahrgang 05 und Parallelität die 05B und so weiter. Eine homogene Klasse wird somit nur von einer Zeile repräsentiert, hier im Beispiel wäre dies etwa die 05B.

{{Achtung|Jede abweichende Kombination aus "Jahrgang" und "Parallelität" bedeutet für ASDPC eine neue Klasse.<br><br>
'''Hierbei ist unbedingt zu beachten, dass das nachträgliche Eintragen und Löschen von Klassen in der KLD323 Inkonsistenzen in KLD und UVD erzeugen kann.'''<br>
'''Sollte dies notwendig werden, müssen über "Prüfen" ➥ "Abgleich KLD → UVD" und "Abgleich UVD → KLD" in den jeweiligen Belegen die Klassenkürzel angepasst werden.'''}}

In der folgenden Spalte (413) werden die unterschiedlichen Teilklassen von Mischklassen (daher TKM 413) erfasst. Hier im Beispiel wäre dies die Klasse 05A, in welcher 26 SuS ohne Förderschwerpunkt (Zeile 1), zwei Schüler mit dem Förderschwerpunkt "LB" (Zeile 2) und einer mit dem Förderschwerpunkt "SG" (Zeile 3) erfasst sind.

In den folgenden Spalten sind oft die möglichen Felder per Dropdown-Eintrag auszuwählen, wobei bei der Menüauswahl der Schlüssel zu einer wörtlichen Ausformulierung aufgelöst wird.

* Schulgliederung (420) - Bleibt für "Standard für diese Schulform" leer.
* Klassenart (431) - z.B. "RK" für "Regelklasse".
* Organisationsform (435) - z.B. "2" für Teilnahme am gebundenen Ganztag.
* Jahrgang für diese Teilklasse (440)
* Es folgen die möglichen Förderschwerpunkte 1 (4441) und 2 (4412), sowie der Schalter bei einem Anspruch auf "intensivpädagogische Förderung bei Schwerstbehinderung" (442).
* Reformpädagogik (443) - für "ohne" bleibt der Eintrag leer.
* Lehrkraft (450) der Teilklasse - ggf. ist hier bei mehreren Teilklassen die gleiche Lehrkraft mehrfach einzutragen.

{{Wichtig|Für weitere Beispiele und aktuelle - und sich ggf. über die Jahre ändernde! - Eintragungskonventionen konsultieren Sie die für Ihre Schulform geltenden Eintragungshilfe des aktuellen Schuljahres.}}

Es folgt die Erfassung der Gesamtschüler/innenzahlen. Hierbei erfasst ASDPC immer zuerst alle SuS (510) und dann die **davon** weiblichen (510W). Diese Eintragung wiederholt sich in den Spalten 870 und 870W für die ausländischen SuS. 

Unten im Fuß des Belegs wird für jede Klasse die **schulische Herkunft** der jeweiligen Teilnehmer/innen erfasst. Hierbei wird für alle SuS mit gemeinsamen Daten eine Zeile angelegt. Der erste Eintrag ist hier die Schulnummer (609), dann folgt die Schulform (610) dieser Schule und die Art (611) der Herkunft. In der Grundschule findet noch eine Unterscheidung nach den Grundschulempfehlungen (611A) statt. Es erfolgt dann eine Erfassung der Gesamtzahlen (612) mit "Davon weiblich" (14) und dann die Aufschlüsselung, wer Ausländer-/in ist (613 und 613W) für diesen Eintrag.

{{Hinweis|Bei der Art würden bei einer weiterführenden Schule in Jahrgang 05 diverse Grundschulen erscheinen, von denen die SuS zusammengekommen sind, die dann noch nach den Empfehlungen aufgeschlüsselt werden. In Jahrgang 06 und aufwärts werden die meisten SuS von der eigenen Schule per Wiederholung oder Versetzung erfasst werden und nur Schulwechsler würden von einer anderen Schule kommen.}}

{{Hinweis|In den Fußfeldern können neue Einträge jeweils oben links mit dem entsprechenden Symbol erstellt, ausgewählte Zeilen auch gelöscht bzw. kopiert werden.}}

Rechts neben der "Herkunft der Schüler-/innen" werden die Auslandsherkünfte der SuS in dem zugehörigen Eintrag links weiter aufgeschlüsselt. Hier sind die Staatsangehörigkeit (810), die Gesamtzahl (811) und wieder "Davon weiblich" (811W) zu erfassen.

Schlussendlich können Einträge für die "Betreuung" mit einer Art (970) angelegt werden, auch hier wird wieder eine Gesamtzahl (971) erfasst.

====Beleg: UVD223 - Unterrichtsverteilung====

Bei der Unterrichtsverteilung wird pro Zeile ein Unterricht erfasst.

{{Achtung|In Optionen ➥ Unterrichtseinheiten in Minuten kann zwischen dem 45-Minuten-Modell und der Abrechnung in Minuteneinheiten für die UVD und die LID123 umgeschaltet werden. Hin- und Herschalten kann jedoch zu Rundungsfehlern führen, so dass ein Umschalten eine gründliche Überlegung erfordert.}}

[[File:ASDPC UVD1.png|400px]]

Für den einfachsten Fall, dass alle SuS einer Klasse an einer Unterrichtseinheit teilnehmen, sind in der Zeile ein Jahrgang (110) und eine Parallelität (111) zu wählen. Der Bildungsgang bleibt bei fast allen Schulformen als "Standard für diese Schulform" leer; bei Gymnasien ist er auszufüllen (G8, G9, Aufbaugymnasium). Die Art der Gruppe (112) bleibt ebenfalls leer.

Es fehlen noch das Fach (121) und die Lehrkraft (130), die aus dem Dropdown-Menü ausgewählt werden. 

Zusätzliche Teilnehmer (140 und 141) sind nicht einzutragen, da ASDPC davon ausgeht, dass alle SuS der Klasse an diesen Unterrichten teilnehmen.

{{Hinweis|Über den ''Bildungsgang'' lassen sich Unterrichte mit angeschlossenen Bildungsgängen und Bildungszweigen abbilden. So würde eine Gesamtschule mit einem angeschlossenen gymnasialen Bildungszweig eine Klasse hier als Bildungsgang "GY" anlegen.}}

Mit den Folgezeilen "Team-Teaching" und "Schüler-Folgezeile" lassen sich viele in der Realität vorhandenen Konstrukte abbilden. 

[[File:UVD 3.png|x300px]]

Hat man eine leere UVD vor sich, kann mit dem Symbol "Satz einfügen" eine neue Zeile eingefügt werden, die dann über die erste Spalte "Zeilenart" auf "H - Hauptteile", "F- Schüler-Folgezeile" oder "T - Team-Teaching" gesetzt werden kann. Möchte man eine Zeile in einer existierenden UVD-Tabelle anlegen, so gelingt dies über das Menü "Folgezeilen". 

In der Abbildung oben ist zu sehen, dass sich beim Team-Teachung lediglich eine neue Lehrkraft mit dann entsprechender Stundenzahl eintragen lässt. Alle anderen Einträge sind ausgegraut und wie die Hauptzeile. 

Bei der Schüler-Folgezeile lassen sich ein neuer Jahrgang, Bildungsgang, eine Art der Gruppe, ein Fach und weitere TeilnehmerInnen auswählen.

[[File:UVD 4.png|x300px]]

Die Abbildung oben zeigt zwei Beispiele:

1. Die ''Hauptzeile'' H 0159 hat eine ''Folgezeile'' F 0159. In der Hauptzeile findet im Jahrgang 07 vierstündig Sport bei Lehrkraft L10 mit 14 Teilnehmern statt (7 davon weiblich). In ''diesem'' Sportkurs befindet sich eine weitere Gruppe aus dem Jahrgang 06 fünf weitere Teilnehmer (davon 3 weiblich). Felder, die in Folgezeilen nicht gesetzt werden können, sind ausgegraut - in Folgezeilen lassen sich also keine Parallelität, keine weiteren Wochenstunden oder neue Lehrkräfte setzen.<br>
Es lassen sich nach Bedarf weitere Folgezeilen hinzufügen.

Über Folgezeilen lässt sich z.B. gemeinsamer Unterricht von unterschiedlichen Bildungsgängen abbilden. Hier wären dann bei ansonsten identischen Hauptzeile und Folgezeilen unterschiedliche Bildungsgänge und Arten der Gruppe (112) einzutragen; am Ende stünden dann die jeweiligen Teilnehmendenzahlen.

2. Die ''Hauptzeile'' H 0162 wird von einer ''Team-Teaching-Zeile'' T 0162 gefolgt. Hier lassen sich weitere Lehrkräfte mit einer Stundenzahl setzen. Alle andere Felder sind ausgegraut und nicht veränderbar, da am Unterricht der Hauptzeile ansonsten nichts verändert wird.<br>
Es lassen sich nach Bedarf weitere Team-Teaching-Zeilen hinzufügen.

Folgezeilen und Team-Teaching-Zeilen lassen sich auch kombinieren, etwa um abzubilden, dass ein Unterricht mit Gruppen aus unterschiedlichen Jahrgängen (teilweise) von mehreren Lehrkräften durchgeführt wird.

Über die Spalte Schüler anderer Schulen (109) lassen sich Teilnehmende über Hauptzeilen oder Folgezeilen als externe SuS kenntlich machen.

Bilingualer Unterricht wird über die Spalte 160 erfasst. Hier ist die Sprache einzutragen ("F", "E" usw.).

Gemischtkonfessioneller Religionsunterricht wird über zwei Hauptzeilen erfasst, da die Fächer eigenständig erhalten bleiben und die evangelischen bzw. katholischen Lehrkräfte im Wechsel unterrichten. Ein solcher Unterricht muss zuvor durch die Schulaufsicht genehmigt werden.

{{Hinweis|Weitere angepasste Beispiele und Konventionen finden sich in den Eintragungshilfen für das aktuelle Jahr.}}

====Beleg: SCD011 - Religionszugehörigkeiten====

In diesem Beleg werden jahrgangsweise die Religionszugehörigkeiten und Abmeldungen vom Religionsunterricht erfasst.

[[File:ASDPC SCD011.png|600px]]

{{Hinweis|Beachten Sie bitte hierzu die aktuellen Eintragungshilfen.<br>
So sind z.B. nur Mitglieder der Evangelischen Kirche als "evangelisch" zu erfassen. SuS die zu einer Evangelischen Freikirche gehören, sind als "Andere" zu erfassen. Weiterhin ist festgelegt, welche Orthodoxen Kirchen unter "Orthodox" einzutragen sind und welche getrennt zu erfassen sind.}}

====Beleg: SCD012 - Abgänger====

In diesem Beleg werden die SuS erfasst, welche die Schule '''am Ende des abgelaufenen Schuljahres''' nach '''Beendigung ihrer Vollschulzeitpflicht''' verlassen haben. D.h. geht es darum, die regulär abgehenden SuS zu erfassen.

''Nicht'' zu erfassen sind SuS, die
* an der Schule verbleiben
* vor dem Erreichen der Vollzeitschulpflicht die Schule verlassen
* '''vor dem Ende des laufenden Schuljahres''' die Schule ohne Abschluss verließen (z.B. Wechsler mit einem Überweisungzeugnis)

Weiterhin zu erfassen sind SuS, die 1. '''vor dem Ende des Schuljahres''' zur Schule kamen, dann 2. '''die Vollschulzeitpflicht beendeten''' und 3. '''nach dem Ende des Schuljahres''' die Schule wieder verließen.

{{Wichtig|Es ist zwingend erforderlich, dass die Vorgabedaten ''vor'' jeder Bearbeitung oder dem Import von Daten aus Schulverwaltungssoftware eingelesen werden.<br><br>
'''Hierbei sind die Vorgabedaten auf ihre Richtigkeit zu prüfen.'''}}

Aufgrund der Tatsache, dass Vorgabedaten nur die ''abschlussrelevanten Jahrgänge'' ab Jahrgang 09 enthalten, kann es passieren, dass ein Schüler oder eine Schülerin die Schule nach Erreichen der Vollschulzeitpflicht in einem niedrigeren, z.B. 08, Jahrgang verlässt. Dieser niedrigere Jahrgang wäre somit händisch nachzutragen.

[[File:ASDPC SCD012.png|600px]]

Die grünen Einträge sind vorgegeben und können nicht verändert werden.

Fehlende Bildungsgänge sind nachzutragen, hierbei ist im Feld "Bemerkungen" einzutragen, wieso sie im Vorjahr nicht berücksichtigt waren.

Im Block rechts unten sind wie bei den Klassendaten KLD jeweils die SuS zeilenweise zu erfassen, deren die Abschlussart (61A), Geburtsjahr (61B) und Staatsangehörigkeit (61C) gemein sind, abschließend sind die jeweiligen Anzahlen nach Gesamt (62) und weiblich (62W) aufzuführen.

Es ist zu beachten, dass SuS, die neben einer anderen Staatsangehörigkeit auch die Deutsche besitzen nicht als Ausländer gemeldet werden. Bei SuS ohne deutscher, aber dafür mehrerer anderer Staatsangehörigkeiten ist die "effektive Staatsangehörigkeit" zu melden, d.h. die, mit der sich am meisten identifiziert wird - als Indizien hierfür können Wohnsitz, Geburtsort und bisherige
Lebensführung der betroffenen Schülerinnen und Schüler herangezogen werden.

{{Hinweis|Es ist jeweils der höchste erreichte Abschluss einzutragen, selbst wenn er in einem vorherigen Jahrgang erworben wurde.}}

Um Rückfragen zu vermeiden empfiehlt es sich, die Gesamtzahlen zu vergleichen und eventuelle Differenzen im Feld "Bemerkungen" zu erläutern.

====Weitere Belege====

Hier finden sich diverse Belege für weitere Daten. Manche der Belege werden nur für passende Schulformen angezeigt.

[[File:ASDPC Weitere Belege.png|400px]]

=====Abiturprüfungsergebnisse=====

[[File:ASDPC Abitur.png|x150px]]

In diesem Beleg sind die Abiturprüfungsergebnisse einzulesen. Diese Daten können über die von SchILD NRW erzeugte ABI.txt eingelesen werden. Es ist zu beachten, dass bei "Bild.-Gang" von Gymnasien bzw. von Gesamtschulen mit entsprechenden Bildungsgängen G8 bzw. G9 einzutragen ist. Eine Automatik ist bei einer passenden Schulform unter "Bearbeiten" anwählbar.

Zum Ende der Bearbeitung sind wie bei vorherigen Belegen über die gelben Schaltflächen in der Kopfzeile die Daten mit "Schülersummen" und dem Beleg "SCD012" abzugleichen.

=====Zuwanderungsgeschichte=====

In diesem Beleg wird die Zuwanderungsgeschichte von SuS klassenweise erfasst. Hierbei ist zu beachten, dass im rechten Bereich zwei unterschiedliche Zählweisen verwendet werden:

[[File:ASDPC ZuwGeschi.png|600px]]

* Personen 1): Hier wird jede Person nur einmal gezählt, d.h. es handelt sich um die Summe der SuS, die irgendeine Zuwanderungsgeschichte haben
* Fallzählung 2): Hier werden drei unterschiedliche Fälle differenziert erfasst und somit kann es möglich sein, dass SoS in mehren der Spalten gezählt werden müssen. Z.B. würde ein Schüler, der "nicht in Deutschland geboren" ist und bei dem "mindstens ein Elternteil nicht in Deutschland geboren" ist, aber die Verkehrssprache "Deutsch" in der Familie hat, in den ersten beiden Spalten erfasst werden.

{{Hinweis|Eine zu erfassende "Personen 1)"-Zuwanderungsgeschichte liegt dann und nur dann vor, wenn mindestens einer der Fälle in "Fallzählung 2)" erfüllt ist.<br>
Somit kann es durchaus sein, dass SuS keine deutsche Staatsbürgerschaft besitzen, aber auch nicht in diesem Beleg erfasst werden.}}

[[File:ASDPC ZuwGeschi Kontrolle.png|500px]]

Nach getaner Arbeit sind die Kontrollzahlen manuell unter "Summe der Schüler mit Zuwanderungsgeschichte" zu bestätigen.

=====Internatsplätze=====

Mögliche und tatsächlich belegte Internatsplätze Ihrer Schule sind über diesen Beleg zu erfassen.

[[File:ASDPC Internat.png|500px]]

Im Dropdown-Menü kann angewählt werden, ob es "Keine Internatsplätze" gibt oder wie die Geschlechterausrichtung des Internats gestaltet ist.

=====Wohnorte=====

Hier werden die Wohnorte mit Postleitzahl und Wohnort nach Klassen und Teilklassen wie in der KLD323 gesetzt erfasst. 

[[File:ASDPC Wohnorte.png|500px]]

Wie schon bei anderen Belegen werden SuS mit allen übereinstimmenden Merkmalen zu einer Gruppe im Feld unterhalt der Auswahlliste zusammengefasst. Hier sind eine Postleitzahl aus NRW und dann ein dazugehörender Wohnort zu wählen. 

{{Hinweis|Wird die Postleitzahl geändert bzw. gewählt wird der Wohnort nicht automatisch mit gesetzt. Dieser muss anschließend aus dem Dropdown-Menü angewählt werden.}}

Ein Wohnort außerhalb von NRW - etwa in einem anderen Bundesland oder einem von ASDPC erfassten Nachbar-Ausland Deutschlands - wird über die entsprechenden Schlüssel am Ende der Postleitzahlenliste gewählt.

[[File:ASDPC WohnorteAuswahl.png|500px]]

Um die Auswahl der möglichen Wohnorte einzuschränken kann über "Wohnorte auswählen" eine Einschränkung auf einen Regierungsbezirk und dann auf einen Kreis durchgeführt werden.

Um diese Einschränkung rückgängig zu machen, steht das Feld "Auswahl zurücksetzen" zur Verfügung.

=====Altersstruktur=====

Die SuS werden wieder nach Klassen und Teilklassen, wie in der KLD323 gesetzt, erfasst. Hierbei sind folgende SuS gemeinsam als Gruppe unterhalb der (Teil-)klassenauswahl zu erfassen:

[[File:Bild 2022-01-03 104947.png|500px]]

Jede Gruppe besteht aus SuS mit gleichem Geburtsjahr und gleicher Staatsangehörigkeit. Damit ergibt sich, dass ausländische SuS als eigene Gruppe mit der jeweiligen Staatsangehörigkeit gesondert zur Erfassung angelegt werden.

In der Kopfzeile sind wieder die "Schülersummen" manuell einzutragen und zu bestätigen.

[[File:ASDPC Schülersummen Kontrolle.png|500px]]

=====Deutschfördergruppen=====

Über diesen Beleg werden Deutschfördergruppen erfasst.

{{Achtung|Hier müssen alle Fördergruppen erfasst werden, die nach BASS 13-63 Nr. 3 (Integration
und Deutschförderung neu zugewanderter Schülerinnen und Schüler) eingerichtet wurden und zwar unabhängig davon, wie diese an einer Schule genannt werden.<br><br>
Deutschördergruppen, die nicht nach BASS 13-63 Nr. 3 eingerichtet wurden, dürfen hier auch nicht erfasst werden.}}

Der entsprechende Erlass kann hier nachgelesen werden: [https://bass.schul-welt.de/18431.htm BASS 13-63 Nr. 3].

Grundlegend sind alle Fördergruppen zu berücksichtigen, die für neu zugewanderte SuS eingerichtet wurden.

Der Handreichung des Ministeriums ist zu entnehmen: 

:''Neu zugewandert im Sinne Erlasses 13-63 Nr. 3 sind Schülerinnen und Schüler,''

::• ''die erstmals eine deutsche Schule besuchen und noch nicht über hinreichende Deutschkenntnisse verfügen, um dem Unterricht zu folgen, oder''

::• ''die bei einem Wechsel der Schulstufe (von der Primarstufe zur Sekundarstufe I oder von der Sekundarstufe I zur Sekundarstufe II) oder der Schule aufgrund ihrer kurzen Verweildauer in der abgebenden Schule die notwendigen Deutschkenntnisse noch nicht ausreichend haben erwerben können.''


[[File:ASDPC Deutschfördergruppen.png|500px]]

Hier sind die eingerichteten Deutschfördergruppen nach Zahl der Gruppen und Zahl der Teilnehmer einzutragen, die Deutschförderklassen werden aus der KLD323 übernommen.

{{Hinweis|Die *-Anmerkungen im Beleg verweisen für Details auf die entsprechenden Sektionen in der BASS 13-63 Nr. 3.}}

=====Weitere "Weitere Belege"=====

Mitunter sind noch weitere "Weitere Belege" in Ihrer Statistik auszufüllen oder hier aufgeführte werden in einem bestimmten Jahr nicht (weiter) erhoben. Ob und welche dies sind, hängt vom Schuljahr beziehungsweise der Schulform Ihrer Schule ab.

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]
```
