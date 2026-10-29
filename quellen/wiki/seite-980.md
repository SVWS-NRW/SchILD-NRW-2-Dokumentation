---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Lupo:Erste Schritte in Lupo"
---

# Lupo:Erste Schritte in Lupo

Gesicherte Wiki-Seite · Namensraum 200 · Version 5550 · Stand 2022-04-29.

[Lesbaren Artikel öffnen](/tools/lupo/lupo-erste-schritte-in-lupo) · [Originaldaten herunterladen](/dateien/quellen/seite-980.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Die ersten Schritte in Lupo hängen davon ab, ob Sie mit Hilfe von Schild-NRW direkt eine Lupo-Datei erstellt haben, ob Sie Schnittstellen-Dateien für Lupo bereitgestellt haben oder ob Sie alle Eingaben in Lupo manuell durchführen wollen.

==Öffnen einer von Schild-NRW bereitgestellten Lupo-Datei==
[[Datei:Lupo_ersteinrichtung.png‎|thumb|Lupo-Dialog "Ersteinrichtung"]]Starten Sie Lupo und wählen Sie "Vorhandene Datei öffnen". Navigieren Sie zur gewünschten Lupo-Datei (Dateiendung "lup") und klicken Sie auf die Schaltfläche "Öffnen". Sie werden nun aufgefordet, einen Namen und ein Kennwort für den ersten Benutzer zu vergeben. Weitere Benutzer können Sie später über den Menüpunkt "Datenbearbeitung -> Beratungslehrer" anlegen.

[[Datei:Lupo_grundeinstellungen.png‎|thumb|Lupo-Dialog "Grundeinstellungen"]]Sie haben die Möglichkeit, den Schülerinnen und Schülern Ihrer Schule individuelle Schüler-Beratungsdateien zur Verfügung zu stellen. Die Schüler können so auf ihren heimischen PCs Laufbahnen durchspielen und die Wunschlaufbahn dem Beratungslehrer zur Verfügung stellen. Wenn die Schülerinnen und Schüler die Möglichkeit erhalten sollen, diese Schüler-Beratungsdateien per E-Mail an den Beratungslehrer zurückzusenden, so können Sie im Feld "E-Mail-Adresse zur Rücksendung der Beratungsdateien" eine E-Mail-Adresse hinterlegen. Die Eingabe einer E-Mail-Adresse ist optional. Sie kann auch später in Lupo über den Menüpunkt "Datenbearbeitung -> Grundeinstellungen" festgelegt werden.

Wenn Sie das Fenster "Ersteinrichtung" verlassen, werden Sie vom Programm automatisch zu den "Grundeinstellungen" weitergeleitet. Überprüfen Sie hier Ihre Schuldaten und nehmen Sie bei Bedarf Korrekturen vor.

== Neue Beratungsdatei anlegen ==
Die Kennwörter der einzelnen Benutzer können von jedem Benutzer geändert werden. Jeder Beratungslehrer fungiert somit als Administrator von Lupo. Öffnen Sie das Beratungsprogramm durch einen Doppelklick auf das Symbol und legen Sie eine neue Beratungsdatei an. Die Beratungsdatei sollte üblicherweise in demselben Ordner liegen, in dem sich auch der Ordner der Initial-Dateien befindet. Vergeben Sie einen Dateinamen und wählen Sie den Speicherpfad im entsprechenden Dialogfeld aus. Danach werden Sie aufgefordert, einen Benutzernamen, ein Kennwort und optional eine E-Mail-Adresse einzugeben. Die doppelte Kennworteingabe dient dazu, Tippfehler aufzudecken.

Über das Menü „Datenbearbeitung > Beratungslehrer“ können Sie weitere Benutzer hinzufügen. Bei jeder Schülerin und jedem Schüler wird festgehalten, welcher Benutzer sie/ihn beraten hat. Diese Funktion steht auch zur Verfügung, wenn Sie mit mehreren Benutzern im Netzwerk auf eine Beratungsdatei zugreifen. Der Beratungslehrer wird beim Ausdruck der Beratungsbögen mit ausgegeben. Jedem Benutzer kann optional ein eigenes Kennwort zugeteilt werden. Jeder angemeldete Benutzer kann sein persönliches Kennwort jederzeit im Menü „Datei > Kennwort ändern“ korrigieren, sofern er angemeldet ist.

Eine einmal angelegte Beratungsdatei können Sie später jederzeit über das Menü „Datei > Vorhandene Beratungsdatei öffnen“ laden, sofern Sie als Benutzer der Beratungsdatei eingerichtet sind und im Besitz des Kennworts sind.

== Import der Exportdateien aus SchILD-NRW (Initial-Import) ==
Sie können nun den Initial-Import über das Menü „Import > Import im Schnittstellenformat SchILD-NRW > Initial-Import“ starten. Dabei werden die Grundeinstellungen der Schule, die Fächer für die Oberstufe, nicht zulässige Fächerkombinationen, Fächerprofile und die Schülerdatensätze aus SchILD-NRW übertragen, sofern Sie an einem Gymnasium oder einer Gesamtschule arbeiten. Wählen Sie das Verzeichnis, in welchem Sie die Initial-Dateien aus SchILD-NRW abgelegt haben und schließen Sie mit OK ab. Nach dem Initial-Import stehen Ihnen also alle relevanten Daten zur Verfügung, die Sie für eine Beratung benötigen.

Nach dem Initial-Import fehlen an Weiterbildungskollegs die Schülerdaten. Diese müssen nach Präzisierungen in der Fächertabelle nachträglich eingelesen werden. An Weiterbildungskollegs werden durch einen Initial-Import nur Grundeinstellungen und Fächer importiert. Nach dem Import muss im Fächerdialog des Beratungstools unter anderem die Wochenstundenzahl der einzelnen Fächer in EF.1 und EF.2 festgelegt werden, erst danach können über "Import > Import im Schnittstellenformat SchILD-NRW > Import von Schülerdaten" die Schülerdaten importiert werden, welche sich im gleichen Initial-Verzeichnis befinden.

Grundsätzlich ist es auch möglich, über das Import-Menü Initial-Dateien in mehreren Schritten einzulesen. So können Sie z.B. zuerst über das Menü „Import > Einzeldateien importieren > Fächer“ lediglich die Fächer einlesen.Ändert sich der Fächerkanon der Schule oder die Schülermenge, so können Sie über das Menü „Import“ gezielt einzelne DAT-Dateien einlesen. Beim Import werden die Daten mit den bestehenden Daten verglichen. Auf mögliche Änderungen werden Sie aufmerksam gemacht, so dass Sie jederzeit die Kontrolle über Ihre Daten behalten. Denken Sie jedoch daran, dass zu löschende Fächer zu Datenverlusten bei bereits beratenen SuS führen können. Es empfiehlt sich daher, Fächer in LuPO vorerst nicht zu löschen, sondern alle Kontrollkästchen der nicht mehr benötigten Fächer im Fächerdialog zu deaktivieren Auf diese Weise können Sie mögliche Konflikte bei bestehenden Wahlen abfangen.

Es ist theoretisch auch möglich, alle benötigten Angaben ohne Initial-Import manuell einzugeben. Dies ist insbesondere für Schulen interessant, die keine Schulverwaltungssoftware besitzen. Es bietet sich dabei an, die benötigten Daten nicht einzeln einzutippen, sondern Listen eines Tabellenkalkulationsprogramms in das Importformat zu überführen. So können die Dateien „SchuelerBasisdaten.dat“, „SchuelerSprachenfolgen.dat“, „SchuelerZusatzdaten.dat“ und „Faecher.dat“ leicht erzeugt werden. Diese Dateien bilden die Grundlage für einen SchILD-NRW unabhängigen Initial-Import. Der Aufbau der DAT-Textdateien wird in der [[Schnittstellenbeschreibung|Schnittstellenbeschreibung]] erläutert. 

== Datenbearbeitung ==
=== Die Schulform entscheidet über den verwendeten Prüfalgorithmus ===
Es empfiehlt sich nach einem Initial-Import, unter „Datenbearbeitung > Grundeinstellungen“ die Daten der Schule zu überprüfen.

Die Korrektheit einer Fachwahl kann vom Programm nur dann richtig geprüft werden, wenn die passende Schulform eingestellt wurde. Die Wahlbedingungen der Gymnasien unterscheiden sich gravierend von denen der Weiterbildungskollegs. Achten Sie deshalb unbedingt auf die korrekte Auswahl der Schulform.

In diesem Dialogfeld können Sie zudem zentral eine Prüfungsordnung festlegen. Den Schülerinnen und Schülern wird diese Prüfungsordnung zugewiesen, sofern Ihnen nach dem Initial-Import noch keine gültige SII-Prüfungsordnung zugeschrieben wurde. Dies ist unter anderem dann der Fall, wenn die Daten aus der Sekundarstufe I stammen. Die zentrale Prüfungsordnung hat keinen Einfluss auf Schülerinnen und Schüler, denen bereits eine individuelle Prüfungsordnung gegeben wurde.

LuPO erkennt beim Initial-Import bilinguale Sachfächer. Die Sprachen dieser Sachfächer können Sie in diesem Dialog manuell ändern oder korrigieren. 

Für den Ausdruck der einzelnen Beratungsbögen werden das Beratungshalbjahr (EF.1, EF.2, Q1.1, Q1.2, Q2.1, Q2.2) und der Schulnamen herangezogen. Sie haben zudem die Möglichkeit, den Text im Kopf des Beratungsbogens und das Anschreiben in der E-Mail zu ändern.

Mit dem Auswahlfeld „Im Beratungsbogen alle Fächer ausgeben“ können Sie festlegen, ob im Beratungsbogen nur die gewählten Fächer oder ob auch die nicht gewählten Fächer erscheinen sollen. Während in der ersten Variante der Beratungsbogen übersichtlicher aussieht, können bei der zweiten Variante leichter Umwahlen in den Bogen eingetragen werden.

=== Schüler ===
[[Datei:Lupo_schueler_bearbeiten_1.png‎|thumb|Lupo-Dialog "Datenbearbeitung > Schüler"]]Unter dem Menüpunkt „Datenbearbeitung > Schüler“ können Sie SuS hinzufügen oder entfernen und die Daten der SuS ändern.

Sie haben zudem die Möglichkeit, bestimmte Merkmale klassen- oder gruppenweise zu vergeben. Um Schüler klassenweise zu filtern, können Sie z.B. mit Hilfe des Filter-Auswahlfeldes die gewünschte Klasse wählen. Es ist ebenfalls möglich, mehrere Schüler bei gedrückter STRG-Taste per Mausklick auszuwählen. Sie können auch eine "von-bis"-Auswahl treffen, indem sie bei gedrückter STRG-Taste auf den ersten Schüler klicken und anschließend bei gedrückter SHIFT-Taste auf den letzten Schüler klicken. Durch Klick auf das Auswahldreieck der "Optionen"-Schaltfläche gelangen Sie anschließend zu den Menüpunkten, die gruppenweise Veränderungen bei den Schülern herbeiführen. Hier können Sie den bilingualen Zweig festlegen, Beratungsbögen drucken, die Prüfungsordnung festlegen, eine Muttersprachenprüfung am Ende der Sekundarstufe I festlegen, das Datum der Beratung und des Rücklaufs eintragen und die Bezeichnung der Klasse anpassen.

Das Beratungsdatum und Rücklaufdatum können bequem mit einem Doppelklick in der entsprechenden Spalte erzeugt, oder manuell eingetragen werden.  Hat eine Schülerin oder ein Schüler eine Muttersprachenprüfung (auch Sprachpraktische Prüfung SPP) am Ende der Sekundarstufe I abgelegt und strebt eine Sprachpraktische Prüfung am Ende der EF an, so können Sie das Auswahlfeld SPP aktivieren. Hierdurch wird die zugehörige Sprachenprüfung im Fachwahldialog deaktiviert. 

Für SuS, die zum Zeitpunkt der Beratung ein Sport-Langzeitattest vorweisen und somit vom Sportunterricht phasenweise oder ganz befreit wurden, kann ebenfalls ein Marker gesetzt werden. Dieser Marker hat zur Folge, dass im Fach Sport eine weitere Kursart AT eingetragen werden kann. Eine Fachbelegung mit der Kursart "AT" wird bei der Berechnung der Stundensummen und in der Kurssummen nicht berücksichtigt. 

In diesem Dialog können Sie ebenfalls Schülergruppen filtern und die gefilterte Gruppe in einer Liste ausdrucken.

=== Fächerdialog für Gymnasien und Gesamtschulen ===
[[Datei:Lupo_faecher_bearbeiten.png‎|thumb|Lupo-Dialog "Datenbearbeitung > Fächer"]]Im Dialog „Datenbearbeitung > Fächer“ können Sie Fächer hinzufügen, entfernen und deaktivieren, Abiturfächer festsetzen, Unterrichtssprachen, Leitfächer und Fremdsprachenfächer einrichten sowie nicht mögliche Fächerkombinationen und Fächerprofile anlegen (siehe auch: [[Lupo:Vorbereitungen_in_Schild-NRW#Unterrichtsfächer_der_Oberstufe_festlegen_und_bearbeiten|Vorbereitungen in Schild-NRW > Unterrichtsfächer der Oberstufe festlegen und bearbeiten]]).

Sie können in diesem Dialog zu jeder Zeit Fachbezeichnungen oder fehlende Einträge korrigieren. Sollten Sie jedoch Fächer deaktivieren, so hat dies in der Regel auch Auswirkungen auf die Fachwahlen der SuS, sofern das Fach bereits gewählt wurde. Sie können sich jedoch die SuS mit Hilfe der Schaltfläche „Konflikte bei Schülern ermitteln“ ausgeben lassen, auf die die Änderung einen Einfluss genommen hat.

Deaktivieren Sie die Auswahlfelder von nicht mehr benötigten Fächern anstatt sie zu löschen, um Konflikte mit bestehenden Wahlen aufzudecken.Wird in dem Dialog ein Fach endgültig gelöscht, so gehen auch die entsprechenden Fachwahlen bei den Schülern verloren. Konflikte können dann nicht mehr ermittelt werden. Aus diesem Grund ist zu empfehlen, bei einem nicht mehr benötigten Fach die Auswahlfelder aller Halbjahre zu deaktivieren und nach Konflikten zu suchen. Wenn keine Konflikte angezeigt werden, können Sie das Fach gefahrlos löschen.

Es stehen in diesem Dialog Kontrollkästchen bereit, mit welchen Sie das Angebot von Zusatzkursen an Ihrer Schule einstellen können. Zudem können Sie mit einem weiteren Kontrollkästchen festlegen, ob nur die fortgeführten Fremdsprachen gewählt werden dürfen, für die auch eine Sprachenfolge aus der Sekundarstufe I eingetragen wurde. Dies ist dann sinnvoll, wenn Sie die Sprachenfolgen gepflegt haben und den Schülern die Eingabe überlassen wollen. Auf diese Weise verhindern Sie fehlerhafte Wahlen durch die Schüler, andererseits schränken Sie jedoch die Eingabemöglichkeiten bei fehlender Sprachenfolge ein.

Das Kontrollkästchen „Alle Feldinhalte anzeigen“ sollte nur im Notfall verwendet werden. In seltenen Fällen können fehlerhafte Eingaben durch den Benutzer zu fehlerhaften Initial-Dateien und damit zu unerwünschten Einstellungen im Fächerdialog führen (z.B. die Möglichkeit zur Belegung von Literatur in EF.1). Mit Hilfe des Kontrollkästchens „Alle Feldinhalte anzeigen“ können ausgeblendete Kontrollkästchen der Fächer sichtbar gemacht werden.

=== Fächerdialog für Weiterbildungskollegs ===
Der Fächerdialog für die Weiterbildungskollegs unterscheidet sich leicht von dem Dialog für die Gymnasien und Gesamtschulen. So sind keine Kontrollkästchen für Zusatzkurse sichtbar, da es solche an den Weiterbildungskollegs nicht gibt.

Da sich die Stundentafeln der unterschiedlichen Weiterbildungskollegs in den einzelnen Semestern der Einführungsphase in der Regel voneinander unterscheiden, existiert im Fächerdialog eine zusätzliche Schaltfläche „Wochenstunden und Schriftlichkeit in EF eingeben“. Über diese Schaltfläche gelangen Sie zu einem Unterdialog, in welchem Sie die Wochenstunden der einzelnen Fächer in den entsprechenden Halbjahren festlegen können. Die Festlegung hat Auswirkungen auf die Zählung der Stundensummen der gewählten Fächer. 

In diesem Dialog kann zudem für jedes Fach für jedes Halbjahr der Einführungsphase sowie für die gesamte Qualifikationsphase geregelt werden, ob das Fach schriftlich und mündlich angeboten wird oder ob es lediglich schriftlich belegt werden kann. Soll das gewünschte Fach lediglich schriftlich belegt werden können, so ist das entsprechende Kontrollfeld zu aktivieren. Legen Sie auch fest, um welche Kursart es sich bei den entsprechenden Fächern in der Einführungsphase handelt (PUT = Pflichtunterricht in Teilgruppen/-klassen, EF2-Einführung 2. Fremdsprache und VTF = Vertiefungsfächer).

{{top}}
{{back|Lupo:Vorbereitungen in Schild-NRW}}
{{forward|Lupo:Schülerdateien erzeugen}}
[[Category:LuPO]]
```
