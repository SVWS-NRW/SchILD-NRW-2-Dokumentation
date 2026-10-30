---
title: "Änderungshistorie von Kurs42"
---

<a id="kurs42-versionsgeschichte"></a>

# Änderungshistorie von Kurs42

<a id="09.04.2025_(Kursversion:_3.33.30.528,_Kurs-Notenprogramm:_2.11.12.99)"></a>
<a id="09.04.2025_.28Kursversion:_3.33.30.528.2C_Kurs-Notenprogramm:_2.11.12.99.29"></a>

## 09.04.2025 (Kursversion: 3.33.30.528, Kurs-Notenprogramm: 2.11.12.99)

- Unter Extras-\>Spezial können jetzt die Teilleistungen separat gelöscht werden. Evtl. existierende Noten bleiben erhalten.
- Beim Laden eines Schullogos im GIF-Format kam es zu einem Laufzeitfehler, nun behoben.
- Defaultwert für die verwendete Schild-Version ist nun Schild.2x.

<a id="19.03.2025_(Kursversion:_3.33.26.525,_Kurs-Notenprogramm:_2.11.12.98)"></a>
<a id="19.03.2025_.28Kursversion:_3.33.26.525.2C_Kurs-Notenprogramm:_2.11.12.98.29"></a>

## 19.03.2025 (Kursversion: 3.33.26.525, Kurs-Notenprogramm: 2.11.12.98)

- Der Export der gpu015.txt wurde noch einmal überarbeitet. Wenn ein Kurs mehrere Unterrichtsnummern (durch Tilde getrennt) enthält, wird beim Export für jede Unterrichtsnummer eine eigene Zeile erzeugt.
- Der Export der gpu017.txt wurde noch einmal überarbeitet. Als Beginn und das Ende einer Klausur wird nicht die angezeigte Bezeichnung der Stunde, sondern die absolute Stundenposition exportiert. Diese Änderung betrifft nur Schulen, deren Plan mit einer "nullten" Stunde beginnt.
- Der Export der gpu017.txt (Klausuren) wurde überarbeitet

In den Einstellungen (Im/Export, Kurse) gibt es in der Sektion "UNTIS" die neue Option "Text für Klausurexport". Dort kann man entweder nichts, dann ist alles so wie immer, einen beliebigen Text oder eine Maske mit Platzhaltern (und Text) eintragen. Es stehen die folgenden Platzhalter zur Verfügung:

1.%Fach% wird ersetzt durch Kurs.Fach

2\. %Kursart% wird ersetzt durch Kurs.Kursart

3\. %Lehrer% wird ersetzt durch Kurs.Lehrer

4\. %KursBez% wird ersetzt durch Kurs.Bezeichnung

5\. %Stufe%' wird ersetzt durch Kurs.Jahrgang / Blockgruppe.Jahrgang

6\. %ExportDatum% wird ersetzt durch das aktuelle Datum

7\. %Dauer% wird ersetzt durch die Klausurdauer in Minuten

Die Platzhalter 1 - 4 werden nur ausgewertet, wenn der Export kursweise (Option "gpu017.txt kursweise exportieren" ist aktiviert) erfolgt, die Punkte 5 - 7 auch bei schienenweisem Export. Punkt 5 gibt dann den Jahrgang der aktuellen Blockgruppe aus.

- Bug im Umwahldialog (Anzeige nicht verteilter Fächer) beseitigt.
- Im Dialog "Kurse bearbeiten" war das Datenfeld für die UNTIS-Unterrichtsnummern zu klein gewählt, nun behoben.
- Der Ex- und Import der UNTIS-Austauschdateien GPU015.txt und GPU017.txt wurde überarbeitet.
- Im Noteneingabedialog wurde die Vorschlagsnote falsch berechnet, nun behoben.
- Bei der Arbeit mit einer Schild3-DB kam es unter gewissen Umständen beim Zugriff auf die Fächertabelle in der DB zu einem Fehler, nun behoben.
- Im Dialog "Schüler intern bearbeiten" wurde das Geschlecht "d" (divers) nicht übernommen, nun behoben.
- Da auf der SVWS-Seite auf Github zu lesen ist, dass am 18. Oktober das Release v1.0.0 des SVWS-Servers mit Aufruf zum öffentlichen Betatest veröffentlicht werden soll, wurde in Kurs 42 die Abhängigkeit von der Einstellung "Betatest" entfernt. Bitte kontrollieren Sie sicherheitshalber unter Extras-\>Einstellungen, ob unter Allgemeines-\>Verwendete Schild-Version der für Sie zutreffende Wert eingetragen ist.
- Der Import von Klausuren aus XML-Dateien wurde überarbeitet, um Fehler, die durch fehlende Felder in Exporten externer Programme verursacht wurden, abzufangen.
- Der Import der Kurse.dat der Schild-NRW-Schnittstelle wurde überarbeitet.

<a id="01.10.2024_(Kursversion:_3.33.14.509,_Kurs-Notenprogramm:_2.11.12.98)"></a>
<a id="01.10.2024_.28Kursversion:_3.33.14.509.2C_Kurs-Notenprogramm:_2.11.12.98.29"></a>

## 01.10.2024 (Kursversion: 3.33.14.509, Kurs-Notenprogramm: 2.11.12.98)

- Der Import der Kurse.dat der Schild-NRW-Schnittstelle wurde überarbeitet.
- Überarbeitung des UNTIS-Datenaustausches:

\- Die Stundenzählung beim Export beginnt immer mit der Eins.

\- Beim Import der GPU002.TXT wird die U-Nr-Liste jetzt mit der Tilde als Separator angelegt.

\- Im Dialog "Kurse bearbeiten" kann man jetzt nicht nur die U.Nrn löschen, sondern auch erzeugen.

- UNTIS: Datenaustausch: Der Export der GPU010.TXT wurde um das Feld für die Schild-Id-Nummer ergänzt.
- Im CNF-Modul gab es einen Fehler in der Behandlung der Regel "Fixiere#Teilnehmer#aller#Alle Lks", nun behoben.
- Ein Bug in der Markierungsroutine im Blockungsdialog führte dazu, dass beim Blocken fixierte Kurse verdoppelt wurden, nun behoben.
- Betroffene Blockungen können repariert werden. Vorgehensweise:

\- Im Blockungsdialog mit der rechten Maustaste das lokale Menü aufrufen und "Alle Kurse entfixieren" wählen.

\- Im Dialog "Kurse bearbeiten" die Schienenzahl der betroffenen Kurse wieder von "2" auf "1" setzen.

\- Im Blockungsdialog alle bisher fixierten Kurse an der gewünschten Position neu fixieren.

Anschließend funktioniert das Blocken wie gewohnt.

- Unter gewissen Umständen kam es beim Laden vorhandener Blockungen zu einem Laufzeitfehler, nun behoben.
- Beim Versand von Reportausgaben per Email wurde ein falscher Dialog aufgerufen, nun behoben.

<a id="08.04.2024_(Kursversion:_3.33.7.501,_Kurs-Notenprogramm:_2.11.8.82)"></a>
<a id="08.04.2024_.28Kursversion:_3.33.7.501.2C_Kurs-Notenprogramm:_2.11.8.82.29"></a>

## 08.04.2024 (Kursversion: 3.33.7.501, Kurs-Notenprogramm: 2.11.8.82)

- Bei der Notenübernahme aus alten Notendateien wurden die Teilleistungen nicht korrekt dargestellt, nun behoben.
- Bei der Anmeldung an der Datenbank konnte das Programm in eine Endlosschleife laufen, nun behoben.
- Die Option zur Auswahl der Schild-Version (Schild 2.X oder Schild 3.X) ist in den Einstellungen jetzt immer freigeschaltet. Voreingestellt ist Schild 2.0.
- Bei der Beendigung des Einstellungsdialoges kam es zu einem Laufzeitfehler, nun behoben.
- Im Klausurblockungsdialog wurden die Facharbeitsschreiber nicht korrekt berücksichtigt, nun behoben.
- Die Textkodierung wurde nicht in den Einstellungen gespeichert, nun behoben
- Die Noteneingabe (Teilleistungen) wurde auf den alten Zustand zurückgesetzt.
- Noten: Der Fehler beim Start ("DefaultStyle nicht gefunden") wurde beseitigt.

<a id="30.11.2023_(Kursversion:_3.33.2.485,_Kurs-Notenprogramm:_2.11.8.82)"></a>
<a id="30.11.2023_.28Kursversion:_3.33.2.485.2C_Kurs-Notenprogramm:_2.11.8.82.29"></a>

## 30.11.2023 (Kursversion: 3.33.2.485, Kurs-Notenprogramm: 2.11.8.82)

- In den Datenquellen "Klausurschreiber" und "KlausurBetroffeneSchueler" wurde das Feld "Bemerkung" aus dem Datensatz "Schueler" hinzugefügt.
- Beim LuPO-Import wurde, falls in Q2.2 ein viertes Abiturfach als "mündlich" gekennzeichnet war, statt "AB4" die Kursart "GKM" vergeben. Das ist jetzt nicht mehr der Fall, allerdings muss der Benutzer, falls die Klausurplanung benutzt wird, daran denken, die Kursart "AB4" als "mündlich" zu kennzeichnen.
- Im Klausur-Terminplanungsdialog wurde die Zahl der Facharbeitsschreiber nicht korrekt ermittelt, nun behoben.
- Die Benutzeroberfläche von Kurs 42 hat sich etwas verändert. Bitte lesen Sie die Datei readme.md!
- Im Dialog "Kurse bearbeiten" gibt es jetzt eine Schaltfläche mit der Funktion "Kursstunden initialisieren". Im Dropdownmenü kann gewählt werden, ob auch die Kursstunden oder nur die Stunden des Kurslehrers initialisiert werden sollen.
- Unter "Datei" gibt es einen neuen Menüpunkt "Blockung entschlüsselt speichern". Der Menüpunkt ist nur sichtbar, wenn eine verschlüsselte Blockung im Format "Classic" geladen wird.
- Fehler beim Aufruf des Stundenrasters, nun behoben
- Datenpipeline "Umgebung" (enthält Informationen aus den Kurseinstellungen: TageProWoche, StundenProTag, StundenDauer, AWocheGerade, ErsteStunde, AbschnitteProSchuljahr) wieder aktiviert.
- Beim Beenden des automatischen Blockens kam es unter gewissen Umständen zu einem Laufzeitfehler, nun behoben.
- Beim Fachwahlimport aus LuPO wurde die Pseudo-Kursart "AT" im Fach Sport falsch interpretiert, nun behoben.

<a id="24.05.2023_(Kurs_Version:_3.32.02.450,_Kurs-Notenprogramm:_2.11.8.82)"></a>
<a id="24.05.2023_.28Kurs_Version:_3.32.02.450.2C_Kurs-Notenprogramm:_2.11.8.82.29"></a>

## 24.05.2023 (Kurs Version: 3.32.02.450, Kurs-Notenprogramm: 2.11.8.82)

- Beim Import von Reports, die die Komponente "Simplegrid" verwenden, konnte es zu Fehlern kommen, nun behoben.
- Überarbeitung der Kursfixierung im Blockungsraster. Kurse, die auf mehrere Schienen verteilt sind, können jetzt in einzelnen Schienen (teil-)fixiert werden.
- Die Fachwahlmatrix wurde überarbeitet. In den Schnittpunkten der Fach/Kursartkombinationen wird jetzt nur noch die Anzahl der SuS angegeben, die die jeweiligen Kombinationen gleichzeitig gewählt haben
- Die Ermittlung der nicht verteilten SuS wurde erneut überarbeitet. Falls eine Verteilung nicht möglich war, weil kein entsprechender Kurs eingerichtet ist, wird diese Information zusätzlich ausgegeben.
- Im Umwahldialog und beim Blocken wurden die nicht verteilten SuS nicht korrekt angezeigt, nun behoben.
- Kurs 42 stürzte beim Import einer LuPO-Datei ab, falls bei einem Fach mit Kursart LK die Abifach-Nummer fehlte oder ein Fach mit einer in der Blockung nicht vorhandenen Kursart importiert werden sollte. Diese Fehler werden jetzt protokolliert und der Import abgebrochen.
- Die Konferenzblockung wurde wieder freigeschaltet. Es können Blockungen für Fach- und Klassenkonferenzen erzeugt werden. Pro Klasse bzw. Fach wird ein Kurs eingerichtet. Die Unterrichtenden werden zu "Schülern" in diesen Pseudokursen. Auch für diese Konferenzblockungen stehen alle Möglichkeiten des Programmes zur Verfügung
- Bei der Berechnung der Klausurschreiberzahl in der Klausurplanung wurden die Facharbeitsschreiber nicht korrekt berücksichtigt, nun behoben.
- Im Dialog "Kurse bearbeiten" wurde bei einem neu angelegten Kurs das Schuljahr nicht korrekt erzeugt, nun behoben.
- Im Dialog "Kurse einrichten (ohne Fachwahlen)" wurde unter bestimmten Umständen die Kursart nicht erkannt, nun behoben.
- Beim Öffnen älterer Reports werden bestimmte Komponenten (SimpleGrid) wieder automatisch konvertiert.
- Beim Import von UNTIS-Dateien fehlte im Pfad das begrenzende Trennzeichen, nun behoben
- Im Dialog "Lehrer bearbeiten" kam es beim Export in eine Textdatei zu einem Laufzeitfehler, nun behoben.

<a id="27.01.2023_(Kurs_Version:_3.31.9.445,_Kurs-Notenprogramm:_2.11.8.82)"></a>
<a id="27.01.2023_.28Kurs_Version:_3.31.9.445.2C_Kurs-Notenprogramm:_2.11.8.82.29"></a>

## 27.01.2023 (Kurs Version: 3.31.9.445, Kurs-Notenprogramm: 2.11.8.82)

- Bug im Kursexport (Schulnummer) beseitigt
- Beim (zweiten) Druck eines Reports, der RAP-Code enthält, wurde die nicht zutreffende Fehlermeldung "raProgramInfo?" schon vorhanden ausgegeben, nun behoben
- Beim Fachwahlvergleich (DB/Blockung) wurden nicht zutreffende Fehlermeldungen ausgegeben, nun behoben.

<a id="20.01.2023_(Kurs_Version_3.31.8.443,_Kurs-Notenprogramm:_2.11.8.82)"></a>
<a id="20.01.2023_.28Kurs_Version_3.31.8.443.2C_Kurs-Notenprogramm:_2.11.8.82.29"></a>

## 20.01.2023 (Kurs Version 3.31.8.443, Kurs-Notenprogramm: 2.11.8.82)

- In der Klausurplanung wurden Facharbeitsschreiber nicht immer berücksichtigt, nun behoben
- Beim Im/Export von Textdateien, insbesondere von/nach UNTIS, wurde die Textcodierung nicht korrekt beachtet, nun behoben
- Die Schild-NRW-Schnittstelle wurde um den Teilleistungsimport erweitert
- Kleinere Anpassungsarbeiten für SchildZentral
- Im Klausurblockungsdialog wird eine Zelle auch automatisch selektiert, wenn sie mit der rechten Maustaste angeklickt wird.
- Kurs: Im Ladeprozess für Kursreports war eine Anpassungsroutine für ältere Reports deaktiviert, nun wieder aktiviert.

Dennoch sollten Reports, bei denen diese Anpassungen automatisch vorgenommen wurden (Die Anpassungen werden im Protokollfenster aufgelistet), unbedingt einmal gespeichert werden, da die Änderungen sonst verloren gehen.

- Noten: Die Notendateien wurden defaultmäßig im ZIP-Format gespeichert, was zu Problemen beim Import in Kurs führte. Die Default Einstellung ist jetzt wieder das "alte" Format; darüber hinaus kann im Noten-Optionsdialog das Dateiformat gewählt werde.
- Kurs und Noten: Um die oben geschilderten Probleme zu umgehen, wird beim Import von Notendateien das Format jetzt automatisch überprüft und die Laderoutine entsprechend angepasst.
- Beim Druck von Stundenplänen gab es Probleme, nun behoben.
- Beim Anlegen einer neuen Blockung aus SchildZentral wurden die Jahrgänge nicht korrekt angezeigt, nun behoben.
- Mit dem Kommandozeilenparameter -DEBUG: {0\|1} kann eine erweiterte Protokollierung ein- und ausgeschaltet werden.

<a id="07.12.2022_(Kurs_Version_3.31.0.436,_Kurs-Notenprogramm:_2.11.7.80)"></a>
<a id="07.12.2022_.28Kurs_Version_3.31.0.436.2C_Kurs-Notenprogramm:_2.11.7.80.29"></a>

## 07.12.2022 (Kurs Version 3.31.0.436, Kurs-Notenprogramm: 2.11.7.80)

- Die versehentlich deaktivierte RAP-Funktion "EditRichtext" steht jetzt wieder zur Verfügung.
- Die Auswertung der Einträge in der Datei Admin.ini von Schild-NRW wurde überarbeitet.
- Ab dieser Version von Kurs 42 kann ein Kommandozeilen-Parameter "-SCHILDUDL:" übergeben werden, der auf eine UDL-Datei verweist.

Der Aufruf hat die Form

`Kurs32.exe -SCHILDUDL: Pfad_zur_UDL-Datei\XYZ.UDL`

Dabei ist zu beachten, dass die Pfadangabe in Anführungszeichen eingeschlossen werden muss, falls Pfad oder Dateiname Leerzeichen enthalten.

Beispiel:

`Kurs32.exe -SCHILDUDL: "C:\Schild-NRW\UDL\Karl-Heinz Plum-Gymnasium.udl"`

Dadurch entfällt beim Verbindungsaufbau zur Schild-NRW-DB die Datenbankauswahl.

- Notendateien können jetzt in einem alternativen Format gespeichert werden. Dabei handelt es sich um Zip-Archive, die mehrere Textdateien enthalten. Durch die Verwendung dieses Formates wird der Datenaustausch erheblich erleichtert. Die Option muss in den Einstellungen auf der Seite "Im/Export, Kurse-\>Im- und Exporteinstellungen-\>Allgemein" gewählt werden.

Diese Dateien können von Kurs 42 und von dem neuen, mitgelieferten Notenprogramm gelesen und geschrieben werden. Das alte Notenprogramm kann diese Dateien nicht lesen. Die Notendateien im Zip-Format haben die Dateiendung .znot. Selbstverständlich funktioniert der Datenaustausch zwischen Kurs 42 und dem bisherigen Notenprogramm über das "alte" Format weiterhin.

An Rückmeldungen über das neue Notenprogramm bin ich sehr interessiert.

- Fehler beim Import von Textdateien, nun behoben.
- Beim Löschen von SoS aus der Blockung wurden die Klausurkurse nicht bereinigt, nun behoben.
- Beim Import der LuL aus Schild werden wieder alle LuL übernommen, auch wenn Sie nicht in der Benutzerverwaltung von Schild enthalten sind.
- Beim Blockungsexport nach Schild kam es zu einem Laufzeitfehler, falls externe SoS nach Schild exportiert werden sollten, nun behoben.
- Beim Export der Kurse und der Leistungsdaten wird die Schulnummer jetzt mit übertragen.
- Im Umwahldialog blieb der Individualplan leer, nun behoben.
- Der Emailversand von Reports funktioniert wieder.

Wichtig: Eine existierende ChilkatDelphi32.dll muss unbedingt durch die im Setup enthaltene Version ersetzt werden, allerdings erst, nachdem eine existierende Version gesichert wurde. Die wird benötigt, falls man zu einer älteren Version von Kurs 42 zurückkehren möchte.!

- In der Klausurplanung wurde in den Klausurschienen die existierende Liste der betroffenen Kurse nicht gelöscht, nun behoben.
- Der Stundenrasterdialog wurde überarbeitet.
- Beim Kursexport in die Schild-DB kam es unter gewissen Umständen zu einem Laufzeitfehler, nun behoben.
- Untis-Planimport überarbeitet. Vor dem Import wird abgefragt, ob die Kurslehrer überschrieben werden sollen.
- Fehler beim E-Mail-Versand von Reports beseitigt.
- Diese Version von Kurs 42 benötigt zum direkten Datenbankzugriff auf die Schild-DB nicht mehr die SchildUA.dll. Daraus ergibt sich (leider), dass der Export in die DB im Schnittstellenformat nur noch funktioniert, wenn explizit Textdateien erzeugt werden, die dann in Schild über die Textschnittstelle importiert werden müssen.
- Die Blockungen können jetzt neben dem klassischen Format (.blo) und in einer sqLite-DB (.sqblo) jetzt auch im Textformat in einer ZIP-Datei gespeichert werden. Diese Dateien haben die Endung .zblo und können wie normale ZIP-Dateien mit entsprechenden Tools geöffnet werden.

Das gewünschte Standardformat kann unter "Extras-\>Einstellungen-\>Allgemeines-\>Dateiformat" gewählt werden. Standard ist "Classic"

- Beim Export der gpu010.txt (UNTIS-Schülerdaten) kann jetzt optional statt der privaten die Schul-Email-Adresse exportiert werden. Die notwendige Einstellung muss unter "Extras-Einstellungen-\>Im/Export" vorgenommen werden.
- Neue Datenquelle "Umgebung", enthält Informationen aus den Kurseinstellungen (TageProWoche, StundenProTag, StundenDauer, AWocheGerade, ErsteStunde, AbschnitteProSchuljahr).
- Beim Export der Fächerliste in eine Textdatei wurde das Statitikkürzel nicht korrekt gefüllt, nun behoben.

Fehler bei"Schüler mit DB-Zugriff bearbeiten", nun behoben

- Beim Import einer Notendatei werden die Mahnungen übernommen
- In Noten 42 kann die Mahnungseingabe (über "Einstellungen") freigeschaltet werden.

22.03.2022 (Kurs-Version 3.30.8.407, Noten: 2.11.6.78)

- In der Datenquelle "Klausurschreiber" das Feld "Lehrer" hinzugefügt.
- Blockungen im sqLite-Format konnten nicht gepeichert werden, nun behoben
- In der Klausurplanung die Nachschreibe-Funktionalitä überarbeitet.

<a id="25.02.2022_(Kurs_Version_3.30.5.405,_Noten:_2.11.6.78)"></a>
<a id="25.02.2022_.28Kurs_Version_3.30.5.405.2C_Noten:_2.11.6.78.29"></a>

## 25.02.2022 (Kurs Version 3.30.5.405, Noten: 2.11.6.78)

- Im Fachwahldialog wurde nach dem Öffnen der erste Schüler nicht automatisch selektiert, nun behoben.
- Der CNF-Dialog wurde noch einmal überarbeitet: Die Ergebnisse und Regeln des aktuell gewählten Tabs werden in der Blockungsdatei gespeichert.
- In der Klausurplanung wurde eine Facharbeit nicht korrekt ausgewertet, nun behoben.
- In der Datenquelle "SchuelerKlausurtermine" das Feld "KlausurRaum" hinzugefügt
- Die Sat-Solver müssen im Unterverzeichnis "CNFSolver" des Programmverzeichnisses liegen, damit sie von Kurs 42 gefunden werden.
- Im Einstellungsdialog kann der gewünschte Solver ausgewählt werden. Zur Zeit stehen Cryptominisat5 und Kissat zur Verfügung.
- An gleicher Stelle können auch Parameter eingegeben werden, die in der Kommandozeile an den Solver übergeben werden.
- Die Facharbeiten werden bei der Klausurplanung jetzt korrekt berücksichtigt.
- In den Datenquellen "Kurse" und "Klausurkurse" wurde das Datenfeld "Facharbeiten" hinzugefügt.
- Der CNF-Solver ist jetzt standardmäßig integriert, muss allerdings über "Extras-\>Einstellungen-\>Allgemeines-\>CNF-Solver verwenden" aktiviert werden.
- Fehler (Bereichsüberschreitung) in der CNF-Blockung beseitigt.
- Beim Übertragen in den nächsten Abschnitt wird abgefragt, ob evtl. vorhandene UNTIS-Unterrichtsnummern gelöscht werden sollen.

<a id="07.02.2022_(Kurs_Version_3.30.0.400,_Noten:_2.11.6.78)"></a>
<a id="07.02.2022_.28Kurs_Version_3.30.0.400.2C_Noten:_2.11.6.78.29"></a>

## 07.02.2022 (Kurs Version 3.30.0.400, Noten: 2.11.6.78)

- Beim Export der Teilleistungen im Schnittstellenformat (Teilleistungen.dat) wurden nicht alle Teilleistungen exportiert, nun behoben.
- Die Probleme bei der Noteneingabe (z.B. Sortierung) wurden behoben
- Beim Anlegen eines neuen Kurses im Dialog "Kurse bearbeiten" wurde keine gültige Id-Nummer erzeugt, nun behoben.
- Fehler beim Export von Teilleistungen, nun behoben.
- Fehler bei der Erzeugung der Fachwahlmatrix, nun behoben.
- Fehler beim Export von Leistungsdaten mit Mahnung, nun behoben.

<a id="20.12.2021_(Kurs_Version:_3.28.9.393_,Noten:_2.11.6.78)"></a>
<a id="20.12.2021_.28Kurs_Version:_3.28.9.393_.2CNoten:_2.11.6.78.29"></a>

## 20.12.2021 (Kurs Version: 3.28.9.393 ,Noten: 2.11.6.78)

- Der Fachwahldialog wurde überarbeitet, weil die Funktion "Kursart in bestimmten Fächern wandeln" nicht korrekt funktionierte. Dieser Menüpunkt ist jetzt in das Kontextmenü der ausgewählten Schülerfächer gewandert. Ablauf:
- Gewünschte Schüler markieren
- Gegebenenfalls die Vereinigungsmenge der Fächer bilden
- Die gewünschten Fächer markieren
- Mit der rechten Maustaste das Kontextmenü aufrufen und die gewünschte Änderung auswählen
- Überarbeitung der Optik einiger Dialoge
- Überarbeitung der Abwahl von Klausurnachschreibern.

<a id="30.11.2021_(Kurs_Version:_3.28.8.391_,Noten:_2.11.5.75)"></a>
<a id="30.11.2021_.28Kurs_Version:_3.28.8.391_.2CNoten:_2.11.5.75.29"></a>

## 30.11.2021 (Kurs Version: 3.28.8.391 ,Noten: 2.11.5.75)

- Beim Export der GPU017.TXT und in einer Klausur-Datenquelle wurden Anfangs. und Endstunde der Klausuren nicht richtig dargestellt, nun behoben.
- Die Benutzeroberfläche wurde überarbeitet und einige Features von Windows 10 genutzt.
- Das separate Notenprogramm wurde überarbeitet. Wegen einiger Änderungen in der Dateistruktur von Kurs 42 können ältere Versionen von Noten 42 Notendateien, die mit diesem Snapshot erzeugt wurden, nicht lesen.
- Die im Dialog "Klausurtermine" eingegebenen Bemerkungen wurden nicht übernommen, nun behoben
- In der Schülerplänen wurden einige Stunden nicht angezeigt, nun behoben.

<a id="03.11.2021_(Kurs_Version:_3.28.5.390_,Noten:_2.11.5.75)"></a>
<a id="03.11.2021_.28Kurs_Version:_3.28.5.390_.2CNoten:_2.11.5.75.29"></a>

## 03.11.2021 (Kurs Version: 3.28.5.390 ,Noten: 2.11.5.75)

- Im Klausurplanungsdialog kann jetzt die Blockung zwischengesichert werden, ohne den Dialog zu verlassen
- Der Button "Klausuren pro Woche" war nicht aktiviert, nun behoben
- Die Blockungsdatei kann jetzt auch in einer SqLite-Datenbank gespeichert werden. Gesteuert wird das über Extras-\>Allgemeines-\>Format der Blockungsdatei. Kurs 42 kann beide Versionen lesen und schreiben, insbesondere also zwischen den Formaten übertragen.
- Im Hauptfenster der Anwendung gibt es auf der Symbolleiste jetzt einen Abschnitt "Klausuren". Darüber hinaus können weitere Abschnitte (Actionbars) hinzugefügt werden (Kontextmenü).
- Bei der Terminüberprüfung von Klausuren wurden die Nachschreibtermine nicht berücksichtigt, nun behoben.
- Die Darstellung von Kurs 42 kann jetzt beliebig skaliert werden. (Extras-\>Einstellungen-\>Allgemeines-\>Verschiedenes)
- Bei der Fehlerbereinigung der Fächer wurden Sortierung und Fachgruppe gelöscht, nun behoben
- In den Einstellungen kann unter "Allgemeines" festgelegt werden, ob beim Laden einer Blockung sofort die Fehlerbereinigung gestartet werden soll.
- Neuer Menüpunkt: Unter "Extras" kann geprüft werden, ob ein neuer Snapshot existiert.

<a id="03.09.2021_(Kurs_Version:_3.28.1.385_,Noten:_2.11.2.66)"></a>
<a id="03.09.2021_.28Kurs_Version:_3.28.1.385_.2CNoten:_2.11.2.66.29"></a>

## 03.09.2021 (Kurs Version: 3.28.1.385 ,Noten: 2.11.2.66)

- Im Dialog "Klausurtermine bearbeiten" können (auf Wunsch von Anwendern) Aufsichtslehrer und Klausurräume wieder getrennt über die Tastatur bzw. Dropdown-Listen eingegeben werden.
- Beim Laden einer Blockung wird automatisch eine Fehlerbereinigung durchgeführt.
- Bei der Klausurterminfestlegung können die Klausuren jetzt (wieder) in einer Pause beginnen und enden.
- Import der Leistungsdaten aus der Schild-NRW-Schnittstelle überarbeitet
- Unter Extras gibt es den neuen Menüpunkt "Dateisperrung zurücksetzen," mit dem eine ungültig gewordene Lockdatei gelöscht werden kann.
- Erweiterung im Dialog "Schüler manuell zuweisen": Hier können jetzt auch alle Schüler (nicht nur klassenweise) angezeigt werden,
- Vor dem Export der Blockung in die DB wird überprüft, ob es Unterschiede zwischen Schülern in der Blockung und der DB gibt.
- Diese Überprüfung kann auch unabhängig vom Export über "Extras \>Spezial\>Schülervergleich" gestartet werden.
- Bei der Prüfung der Schülermenge vor dem Export in die DB konnte es wegen einer unvollständigen Abfrage zu einem Speicherüberlauf kommen, nun behoben.

<a id="13.08.2021_(Kurs_Version:_3.27.12.382_,Noten:_2.11.2.66)"></a>
<a id="13.08.2021_.28Kurs_Version:_3.27.12.382_.2CNoten:_2.11.2.66.29"></a>

## 13.08.2021 (Kurs Version: 3.27.12.382 ,Noten: 2.11.2.66)

- Erweiterung der Fehlerbereinigung: "Karteileichen" in Kursen werden gefunden und gelöscht. In den Fällen, in denen Kurslisten nicht gedruckt werden können, sollten die Fehlerbereinigung aufgerufen werden.
- Neue Funktion Extras-\>Spezial-\>Facharbeit löschen. Gelegentlich konnte es vorkommen, dass bei Schülern fälschlicherweise Facharbeiten eingetragen waren, die mit dieser Funktion komplett gelöscht werden können.

<a id="10.06.2021_(Kurs_Version:_3.27.11.380_,Noten:_2.11.2.66)"></a>
<a id="10.06.2021_.28Kurs_Version:_3.27.11.380_.2CNoten:_2.11.2.66.29"></a>

## 10.06.2021 (Kurs Version: 3.27.11.380 ,Noten: 2.11.2.66)

- Beseitigung einiger Bugs (merkwürdige Kursbezeichnungen)
- im Auswahldialog für Kurse beim Report-Druck kann jetzt auf Kurse eines bestimmten Faches gefiltert werden
- Im Blockungsdialog kann die Anzahl der anzuzeigenden Zwischenergebnisse beschränkt werden (Standard ist 10)
- Überarbeitung und Erweiterung der Fehlerbereinigung

<a id="20.05.2021_(Kurs_Version:_3.27.10.376_,Noten:_2.11.2.66)"></a>
<a id="20.05.2021_.28Kurs_Version:_3.27.10.376_.2CNoten:_2.11.2.66.29"></a>

## 20.05.2021 (Kurs Version: 3.27.10.376 ,Noten: 2.11.2.66)

- Fehler im Fachwahldialog behoben
- Neue RAP-Funktion "NurSchuelerMitIndKursart(..)" filtert auf Kursteilnehmer mit z.B. AB4. Zurücksetzen mit Leerstring als Kursart.
- Anzeigeproblem beim automatischen Blocken (Nicht Verteilte) beseitigt
- Anpassung des Blockungsalgorithmus an sehr große Oberstufen
- "Klassen initialisieren" im Dialog "Kurse bearbeiten" funktionierte nicht, nun behoben
- Fehlerbereinigungsroutine erweitert
- Fehler im Dialog "Kurse bearbeiten" (... nicht im Editiermodus...) behoben.
- Beim Nachladen der Schüler wurde die Schul-Emailadresse nicht übernommen, nun behoben
- Beim Mailversand an Schüler wird die Schild-Einstellung (Schul-Email-Adresse verwenden) berücksichtigt.
- Format-Fehler bein Laden von FORQ-Schülern beseitigt

<a id="03.05.2021_(Kurs_Version:_3.27.8.374,_Noten:_2.11.2.66"></a>
<a id="03.05.2021_.28Kurs_Version:_3.27.8.374.2C_Noten:_2.11.2.66"></a>

## 03.05.2021 (Kurs Version: 3.27.8.374, Noten: 2.11.2.66

- Fehler bei der Noteneingabe beseitigt
- Im Umwahldialog werden nicht verteilte Schüler farblich gekennzeichnet
- Im Umwahldialog kann auf unverteilte Schüler einer bestimmten Kursart gefiltert werden
- Fehler bei der Anmeldung an Ms-SQLServer beseitigt
- Fehler beim Druck von Klausurübersichten beseitigt.
- Die Datenquelle "Blockung" enthält jetzt die Felder "Schuelerzahl", "Lehrerzahl" und "Externe"
- Der Versuch, eine Blockung auf einem nicht mehr vorhandenen Datenträger zu speichern, führt nicht mehr zum Absturz,
- Alle Tabellen- und Feldnamen auf Groß- und Kleinschreibung kontrolliert und, falls nötig, korrigiert.
- Fehler im Fachwahldialog (falsche Übernahme von Wahlen) behoben.

<a id="11.04.2021_(Kurs_Version:_3.27.6.372,_Noten:_2.11.2.66"></a>
<a id="11.04.2021_.28Kurs_Version:_3.27.6.372.2C_Noten:_2.11.2.66"></a>

## 11.04.2021 (Kurs Version: 3.27.6.372, Noten: 2.11.2.66

- Beim Aufruf der Stundenraster-Bearbeitung kam es zu einer Schutzverletzung, nun behoben.
- Beim Export über die Schild-NRW-Schnittstelle wurde ein Datum nicht korrekt übermittelt, nun behoben.
- In der Datenquelle "Blockplan" wurde der Lehrer nicht ausgegeben, nun behoben.
- Bei der Bearbeitung der Schülerliste wurden Sonderzeichen im Namen nicht korrekt übernommen, nun behoben.
- Im Fachwahldialog wurde bei der gruppenweisen Zuweisung von Fächern die Kursart überschrieben, nun behoben.
- Beim Schülerabgleich mit der Schild-DB kam es zu einer (unkritischen) Schutzverletzung, nun behoben.
- Die Sortierung nach Kursart im Blockungsdialog wurde noch einmal überarbeitet
- Beim Druck von Klausurübersichten kam es beim Druck der letzten Seite zu einer Schutzverletzung, nun behoben.

<a id="30.03.2021_(Kurs_Version:_3.27.4.372,_Noten:_2.11.2.66"></a>
<a id="30.03.2021_.28Kurs_Version:_3.27.4.372.2C_Noten:_2.11.2.66"></a>

## 30.03.2021 (Kurs Version: 3.27.4.372, Noten: 2.11.2.66

- Bei der Datenbankverbindung wurden einige Provider für MS-SqlServer nicht richtig erkannt, nun behoben.
- Im Dialog "Klausurblockung" wurde die Prüfung auf die Zahl der Klausuren pro Woche nicht korrekt ausgeführt, nun behoben.

<a id="28.03.2021_(Kurs_Version:_3.23.4.371,_Noten:_2.11.2.66"></a>
<a id="28.03.2021_.28Kurs_Version:_3.23.4.371.2C_Noten:_2.11.2.66"></a>

## 28.03.2021 (Kurs Version: 3.23.4.371, Noten: 2.11.2.66

- Bei der Datenbankverbindung wurden einige Provider für MS-SqlServer nicht richtig erkannt, nun behoben.
- Im Dialog "Klausurblockung" wurde die Prüfung auf die Zahl der Klausuren pro Woche nicht korrekt ausgeführt, nun behoben.

<a id="23.03.2021_(Kurs_Version:_3.27.1.371,_Noten:_2.11.2.66"></a>
<a id="23.03.2021_.28Kurs_Version:_3.27.1.371.2C_Noten:_2.11.2.66"></a>

## 23.03.2021 (Kurs Version: 3.27.1.371, Noten: 2.11.2.66

- Fehler beim Import von Notendateien, nun behoben
- Beim Auftreten eines Fehlers kann der Fehlerbericht per Mail an den Entwickler geschickt werden.
- Im Setup ist die Anwendung (GExpertsDebugWindow.exe) enthalten, die nach dem Start die von Kurs 42 erzeugten Debug-Meldungen ausgibt.

<a id="19.03.2021_(Kurs_Version:_3.27.0.371,_Noten:_2.11.2.66"></a>
<a id="19.03.2021_.28Kurs_Version:_3.27.0.371.2C_Noten:_2.11.2.66"></a>

## 19.03.2021 (Kurs Version: 3.27.0.371, Noten: 2.11.2.66

- Die nichtverteilten Fächer der Schüler wurden im Umwahldialog nicht angezeigt, nun behoben
- Der Stundenplanimport aus UNTIS wurde überarbeitet
- Fehler bei der Anzeige des Geschlechtes in einem Dialog, nun behoben
- Der Schüler-Datensatz wurde um das Feld "Gruppe" erweitert. Damit wird der Austausch mit dem Corona-Planer von Herrn Bartsch vereinfacht.
- Das Feld "Gruppe" gibt es jetzt auch in der Datenquelle "Kursteilnehmer". Im (Druck-)Listenauswahldialog kann als Sortierung jetzt auch Gruppe,Name,Vorname gewählt werden
- In den Schülerfachwahlen gibt es ein neues Feld "Facharbeit". Ein Fach, bei dem dieses Flag gesetzt ist, wird in allen Bereichen als mündliches Fach behandelt. Das boolesche Feld "Facharbeit" wird es zunächst in den Datenquellen "Kursteilnehmer" und "Fachwahl" geben. Das Flag "Facharbeit" wird im Dialog Fachwahlen durch Doppelklick auf ein Fach in der Liste der gewählten Fächer gesetzt bzw. gelöscht. Wenn das Flag gesetzt wird, kann in einem Eingabedialog das Thema der Facharbeit eingegeben werden. Zusätzlich ist die Felder "Facharbeit" und "Facharbeitsthema" in dem Text-Im/Export der Schülerwahlen enthalten.
- Im Dialog "Klausurblockung bearbeiten" kann festgelegt werden, od das Flag "Facharbeit" berücksichtigt wrrden soll oder nicht.
- Erweiterung der Klausurplanung: Dem Zusatztermin können jetzt direkt Schüler zugewiesen werden. Jeder Zusatztermin enthält genau einen Kurs, in den beliebige Schüler eingefügt (und auch wieder entfernt) werden können. Ansonsten verhält sich der Termin wie ein normaler Klausurtermin. Ich lade später noch einen Snapshot hoch. Die Zuordnung erfolgt im Dialog "Klausurtermin festlegen". Wenn ein Zusatztermin mit der rechten Maustaste angeklickt wird, enthält das Popup-Menü die zwei zusätzlichen Menüpunkte "Nachschreiber einfügen" und "Nachschreiber löschen". Nach der Auswahl der Nachschreiber öffnet sich ein weiterer Dialog, in dem jedem Schüler der Nachschreibekurs zugeordnet werden kann. Der Rest ist IMHO selbsterklärend. Existierende Zusatztermine müssen gelöscht und neu gesetzt werden, weil dabei erst ein Flag gesetzt wird, das die Schiene als Zusatztermin kennzeichnet
- Im Dialog "Klausurtermin bearbeiten" kann das Flag "Facharbeit berücksichtigen" gesetzt werden. Standard it "nicht berücksichtigen".
- Im Reportdesigner gibt es die zwei neuen RAP-Funktionen "NurZusatztermine" und "NurFacharbeiten", jeweils mit einem booleschen Wert als Parameter.
- Typischerweise setzt man die Option im Ereignis Report.onInitializeParameter und setzt sie in Report.Afterprint wieder zurück. Zwei Beispielreports, die die Benutzung demonstrieren, sind im Paket enthalten.
- In der Blockungsansicht gibt es im lokalen Menü der Schülerliste die Option "Alle Kurse drucken", mit der es möglich ist, alle Kurslisten zu drucken, in denen der selektierte Schüler vertreten ist.

<a id="24.02.2021_(Kurs_Version:_3.26.13.368,_Noten:_2.11.1.65"></a>
<a id="24.02.2021_.28Kurs_Version:_3.26.13.368.2C_Noten:_2.11.1.65"></a>

## 24.02.2021 (Kurs Version: 3.26.13.368, Noten: 2.11.1.65

- Bei der Klausurprüfung wurden Konflikte (Schüler mit mehr als x Klausuren pro Woche) nicht angezeigt, nun behoben.
- Im Umwahldialog werden die selektierten Schüler nun mit Systemfarben (in Abhängigkeit vom gewählten Windows-Style) markiert.
- Fehler beim Klausur Im/Export, nun behoben

<a id="21.02.2021_(Kurs_Version:_3.26.12.367,_Noten:_2.11.1.65"></a>
<a id="21.02.2021_.28Kurs_Version:_3.26.12.367.2C_Noten:_2.11.1.65"></a>

## 21.02.2021 (Kurs Version: 3.26.12.367, Noten: 2.11.1.65

- Sortierung noch einmal überarbeitet
- AB4 wurde bei neu einsetzenden Sprachen fälschlicherweise als schriftlich behandelt
- Überarbeitzung der Benutzeroberflächen
- Kopieren von Klausurblockungen berichtigt
- Lokales Menü in der Blockungsansicht überarbeitet
- Fehler im Einstellungsdialog beseitigt
- Umlautdarstellung im Schülerplan berichtigt
- Fehler beim Blockungsexport in MS-SQLServer, nun behoben
- Fehler beim Import von Blockungen, nun behoben

<a id="05.02.2021_(Kurs_Version:_3.26.8.367,_Noten:_2.11.1.65"></a>
<a id="05.02.2021_.28Kurs_Version:_3.26.8.367.2C_Noten:_2.11.1.65"></a>

## 05.02.2021 (Kurs Version: 3.26.8.367, Noten: 2.11.1.65

- Der Fachwahldialog konnte nicht aufgerufen werden, nun behoben.

<a id="03.02.2021_(Kurs_Version:_3.26.7.367,_Noten:_2.11.1.65"></a>
<a id="03.02.2021_.28Kurs_Version:_3.26.7.367.2C_Noten:_2.11.1.65"></a>

## 03.02.2021 (Kurs Version: 3.26.7.367, Noten: 2.11.1.65

- Die Buttonleiste im Klausurtermin-Dialog kann jetzt rechts oder links angedockt werden. Die Umscaltung erfolgt über das Kontextmenü
- Im gleichen Dialog wurden die gewählten Klausurstunden im Raster nicht mehr farbig unterlegt, nun behoben.
- Die Sortierung wurde überarbeitet. In der Vergleichsfunktion für Kurse nach Fächern gab es einen Fehler, nun behoben.
- Fehler beim Druck von Schülerwahlbögen (falsche Kurszuordnungen), nun behoben.
- In einigen Dialogen wurden Umlaute im Fensterrahmen falsch dargestellt, nun behoben
- Im Dialog "Blockung und Blockgruppe bearbeiten" wurden Änderungen am Flag "Folgeschuljahr" nicht übernommen, nun behoben.
- Die Funktion "Blockung in den nächsten Abschnitt übertragen" wurde in den Dialog "Blockung und Blockgruppe bearbeiten" verlagert.
- Die Speicherung der Systemeinstellungen erfolgt jetzt in JSON-Dateien. Über "Extras-\>Einstellungen aus der INI-Datei laden" können (und sollten) die bisherigen Einstellungen übernommen werden.
- In Extras-\>Einstellungen-\>Allgemeines sollte geprüft werden, ob die Option "Auf Datenbanken mit UDL zugreifen" aktiviert ist.
- Die Benutzeroberfläche wude etwas umstrukturiert. Aus dem Menüpunkt "Blockung" ist "Verwaltung" geworden. Darunter gibt es zwei Menüpunkte: "Schule" und "Blockung". Unter Blockung sind die Bearbeitung der Blockung und der Blockgruppe zusammengefasst, zudem sind dort jetzt auch die Funktionen "Blockung in den nächsten Abschnitt übertragen" und "Blockung in der Datenbank löschen" angesiedelt.

<a id="28.01.2021_(Kurs_Version:_3.26.3.367,_Noten:_2.11.1.65"></a>
<a id="28.01.2021_.28Kurs_Version:_3.26.3.367.2C_Noten:_2.11.1.65"></a>

## 28.01.2021 (Kurs Version: 3.26.3.367, Noten: 2.11.1.65

- Es gab Fehler im Umwahldialog (falsche Kurslisten) und beim Schülerabgleich mit der DB, nun behoben.

<a id="27.01.2021_(Kurs_Version:_3.26.2.367,_Noten:_2.11.1.65"></a>
<a id="27.01.2021_.28Kurs_Version:_3.26.2.367.2C_Noten:_2.11.1.65"></a>

## 27.01.2021 (Kurs Version: 3.26.2.367, Noten: 2.11.1.65

- Fehler beim Import von Notendateien, nun behoben.
- Bei der Sortierung der Kurse oder Fächer nach Kursart wird die Reihenfolge gewählt, die im Dialog "Zulässige Kursarten bearbeiten" für die Kursarten festgelegt wurde.

<a id="23.01.2021_(Kurs_Version:_3.24.19.366,_Noten:_2.10.7.60"></a>
<a id="23.01.2021_.28Kurs_Version:_3.24.19.366.2C_Noten:_2.10.7.60"></a>

## 23.01.2021 (Kurs Version: 3.24.19.366, Noten: 2.10.7.60

- Datenquelle "Fachwahlen" um das Feld "Bezeichnung" (des Faches) ergänzt.

<a id="20.01.2021_(Kurs_Version:_3.24.18.366,_Noten:_2.10.7.60"></a>
<a id="20.01.2021_.28Kurs_Version:_3.24.18.366.2C_Noten:_2.10.7.60"></a>

## 20.01.2021 (Kurs Version: 3.24.18.366, Noten: 2.10.7.60

- Der SQL-Cursor im Lehrer-Dialog wurde nach dem Lehrerimport aus der DB nicht zurückgesetzt, nun behoben.

<a id="15.12.2020_(Kurs_Version:_3.24.17.365,_Noten:_2.10.7.60"></a>
<a id="15.12.2020_.28Kurs_Version:_3.24.17.365.2C_Noten:_2.10.7.60"></a>

## 15.12.2020 (Kurs Version: 3.24.17.365, Noten: 2.10.7.60

- Die Sortierung im Listenauswahlfenster wird jetzt in Abhängigkeit von der Art der Liste gespeichert
- Das Raumkürzel für Kurse wurde auf 32 Zeichen erweitert.
- Im Kursblockungsdialog erfolgt jetzt auch vor dem Löschen einer Spalte eine Sicherungsabfrage.

<a id="08.12.2020_(Kurs_Version:_3.24.16.361,_Noten:_2.10.7.60"></a>
<a id="08.12.2020_.28Kurs_Version:_3.24.16.361.2C_Noten:_2.10.7.60"></a>

## 08.12.2020 (Kurs Version: 3.24.16.361, Noten: 2.10.7.60

- Im Umwahldialog kam es bei der Fachabwahl gelegentlich zu einem Fehler, nun behoben.

<a id="18.11.2020_(Kurs_Version:_3.24.15.360,_Noten:_2.10.7.60"></a>
<a id="18.11.2020_.28Kurs_Version:_3.24.15.360.2C_Noten:_2.10.7.60"></a>

## 18.11.2020 (Kurs Version: 3.24.15.360, Noten: 2.10.7.60

- Bei der Noteneingabe gab es bei der Eingabe von Teilnahmevermerken in die Einzelleistungen eine Fehlermeldung, nun behoben.

<a id="13.11.2020_(Kurs_Version:_3.24.14.360,_Noten:_2.10.6.60"></a>
<a id="13.11.2020_.28Kurs_Version:_3.24.14.360.2C_Noten:_2.10.6.60"></a>

## 13.11.2020 (Kurs Version: 3.24.14.360, Noten: 2.10.6.60

- Fehler beim Einlesen von Notendateien, nun behoben.

<a id="09.11.2020_(Kurs_Version:_3.24.13.360,_Noten:_2.10.6.60"></a>
<a id="09.11.2020_.28Kurs_Version:_3.24.13.360.2C_Noten:_2.10.6.60"></a>

## 09.11.2020 (Kurs Version: 3.24.13.360, Noten: 2.10.6.60

- Fehler bei der Noteneingabe (in beiden Programmen), nun behoben.
- StartTLS-Option wird jetzt an den Reportbuilder weiter gegeben.

<a id="31.10.2020_(Kurs_Version:_3.24.12.360,_Noten:_2.10.4.54"></a>
<a id="31.10.2020_.28Kurs_Version:_3.24.12.360.2C_Noten:_2.10.4.54"></a>

## 31.10.2020 (Kurs Version: 3.24.12.360, Noten: 2.10.4.54

- Die Terminnummer von Klausuren wurde nicht korrekt verwaltet, nun behoben.
- Überarbeitung des LuPO-Importes

<a id="30.09.2020_(Kurs_Version:_3.24.10.360,_Noten:_2.10.4.54"></a>
<a id="30.09.2020_.28Kurs_Version:_3.24.10.360.2C_Noten:_2.10.4.54"></a>

## 30.09.2020 (Kurs Version: 3.24.10.360, Noten: 2.10.4.54

- Über die Textexport-Schnittstelle können jetzt die Schüler-Individualpläne exportiert werden.
- Die Sortierung im Dialog "Kurse einrichten" berücklsichtigt jetzt die eingestellte Fächersortierung.

<a id="20.09.2020_(Kurs_Version:_3.24.9.358,_Noten:_2.10.4.54"></a>
<a id="20.09.2020_.28Kurs_Version:_3.24.9.358.2C_Noten:_2.10.4.54"></a>

## 20.09.2020 (Kurs Version: 3.24.9.358, Noten: 2.10.4.54

- Fehler bei der Kommunuikation zwischen Kurs 42 und Noten 42, nun behoben. Die Notendateien müssen möglicherweise neu erzeugt werden.
- Der Standardpfad für die Ausgabe von Notendateien war im Einstellungsdialog nicht sichtbar, nun behoben
- In Reports wurde die Schülerzahl bzw. die Zahl der männlichen bzw. mündlichen Schüler nicht oder fehlerhaft ausgegeben, nun behoben.
- Die Sortierung der Schüler in Noten 42 wurde korrigiert. Umlaute und "ß" werden korrekt berücksichtigt.

<a id="26.08.2020_(Kurs_Version:_3.24.4.353,_Noten:_2.10.2.50"></a>
<a id="26.08.2020_.28Kurs_Version:_3.24.4.353.2C_Noten:_2.10.2.50"></a>

## 26.08.2020 (Kurs Version: 3.24.4.353, Noten: 2.10.2.50

- In den Schülerdatensatz wird jetzt auch die externeId-Nummer sus Schild-NRW importiert. Diese externe Id-Nummer wird in dem UNTIS-Export (gpu010) als "Fremdschlüssel (ab Version 2012) " exportiert.

<!-- -->

- Bei der Sortierung nach Fächern im Report-Auswahldialog für Kurse wird jetzt auch die Kursnummer berücksichtigt..

<a id="16.07.2020_(Kurs_Version:_3.24.3.350,_Noten:_2.10.2.50"></a>
<a id="16.07.2020_.28Kurs_Version:_3.24.3.350.2C_Noten:_2.10.2.50"></a>

## 16.07.2020 (Kurs Version: 3.24.3.350, Noten: 2.10.2.50

- Beim Neuanlegen von Kursen wurden geänderte Werte nicht übernommen, nun behoben.

<!-- -->

- Die Anonymisierung einer Blockung wurde nach Hinweisen von Anwendern überarbeitet

<!-- -->

- Überarbeitung des Importdialoges für SAT-Ergebnisse

<a id="20.06.2020_(Kurs_Version:_3.24.1.350,_Noten:_2.10.2.50"></a>
<a id="20.06.2020_.28Kurs_Version:_3.24.1.350.2C_Noten:_2.10.2.50"></a>

## 20.06.2020 (Kurs Version: 3.24.1.350, Noten: 2.10.2.50

- Beim Import von Textblockungen wurde die Kodierung nicht beachtet, nun behonen.

<a id="08.06.2020_(Kurs_Version:_3.24.0.350,_Noten:_2.10.2.50"></a>
<a id="08.06.2020_.28Kurs_Version:_3.24.0.350.2C_Noten:_2.10.2.50"></a>

## 08.06.2020 (Kurs Version: 3.24.0.350, Noten: 2.10.2.50

- Beim Import aus Textdateien wurden die Fachwahlen verdoppelt, nun behoben.

<!-- -->

- Vor dem Textdateiimport werden existierende Kurse gelöscht.

<!-- -->

- Gelegentlich wurden in den Fachwahlen der Schüler Fächerfälschlicherweise als Koop-Fächer gekennzeichnet. Dieser Fehlerwird durch "Extras-\>Spezial-Fehlerbereinigung" beseitigt.

<!-- -->

- In dieser Version wurde ein neuer, alternativer Blockungsalgorithmus(Dank an Herrn Bartsch!) implementiert. Dieser Algorithmus kannüber "Extras-\>Einstellungen-\>Blocken-\>Blockungsalgorithmus neu"aktiviert oder deaktiviert werden. Dieser Algorithmus sollte als Beta-Version betrachtet und behandelt werden.

<a id="03.06.2020_(Kurs:_Version:_3.23.16.336,_Noten:_2.10.2.50"></a>
<a id="03.06.2020_.28Kurs:_Version:_3.23.16.336.2C_Noten:_2.10.2.50"></a>

## 03.06.2020 (Kurs: Version: 3.23.16.336, Noten: 2.10.2.50

- Überarbeitung des GPU017.TXT-Exportes für UNTIS

<a id="19.02.2020_(Kurs:_Version:_3.23.14.335,_Noten:_2.10.2.50"></a>
<a id="19.02.2020_.28Kurs:_Version:_3.23.14.335.2C_Noten:_2.10.2.50"></a>

## 19.02.2020 (Kurs: Version: 3.23.14.335, Noten: 2.10.2.50

- Im GPU017-Export werden jetzt auch Klausurräme und Aufsichten berücksichtigt.

<a id="29.01.2020_(Kurs:_Version:_3.23.13.335,_Noten:_2.10.2.50"></a>
<a id="29.01.2020_.28Kurs:_Version:_3.23.13.335.2C_Noten:_2.10.2.50"></a>

## 29.01.2020 (Kurs: Version: 3.23.13.335, Noten: 2.10.2.50

- Bei der Übertragung in den nächsten Abschnitt wurden die Klausurkurse nicht angepasst, nun behoben.
- Fehler beim Löschen von Blockungen mit mehreren Jahrgängen, nun behoben.
- Fehler in der internen Kursbearbeitung führte bei der Bearbeitung von Klausurblockungen zu Problemen (unvereilte Schüler), nun behoben.
- Fehler beim LuPO-Import, nun behoben.

<a id="13.01.2020_(Kurs:_Version:_3.23.8.333,_Noten:_2.10.2.50"></a>
<a id="13.01.2020_.28Kurs:_Version:_3.23.8.333.2C_Noten:_2.10.2.50"></a>

## 13.01.2020 (Kurs: Version: 3.23.8.333, Noten: 2.10.2.50

- Die Lockdateien werden beim Schließen einer Blockung gelöscht.

<!-- -->

- Die Blockungsdateien können jetzt optional verschlüsselt werden.
- Eine existierende Blockung verschlüsseln:

<!-- -->

- die Option 'Blockungsdatei verschlüsseln' deaktivieren

<!-- -->

- Unverschlüsselte Blockung laden

<!-- -->

- die Option 'Blockungsdatei verschlüsseln' wieder aktivieren

<!-- -->

- die Datei speichern und dabei ein Passwort vergeben

<!-- -->

- Beim Textexport der Schülerwahlen werden jetzt auch die Teilleistungen ex- und importiert.

<!-- -->

- Noten: In der Schülersicht wurden die Fächer nicht angezeigt, nun behoben.

<!-- -->

- Noten: Die Schülerliste wird wieder gemäß der Vorgabe sortiert.

<a id="09.01.2020_(Kurs:_Version:_3.23.7.332,_Noten:_2.10.1.50"></a>
<a id="09.01.2020_.28Kurs:_Version:_3.23.7.332.2C_Noten:_2.10.1.50"></a>

## 09.01.2020 (Kurs: Version: 3.23.7.332, Noten: 2.10.1.50

- Nach der Noteneingabe in Kurs 42 wurden die Änderungen nicht übernommen, nun behoben.

<a id="12.12.2019_(Kurs:_Version:_3.23.4.332,_Noten:_2.10.0.50"></a>
<a id="12.12.2019_.28Kurs:_Version:_3.23.4.332.2C_Noten:_2.10.0.50"></a>

## 12.12.2019 (Kurs: Version: 3.23.4.332, Noten: 2.10.0.50

- Fehler beim Import aus LuPO, nun behoben.
- Klausurkurspläne werden jetzt nach dem Klausur-Import korrekt initialisiert.

<a id="12.12.2019_(Kurs:_Version:_3.23.2.332,_Noten:_2.10.0.50"></a>
<a id="12.12.2019_.28Kurs:_Version:_3.23.2.332.2C_Noten:_2.10.0.50"></a>

## 12.12.2019 (Kurs: Version: 3.23.2.332, Noten: 2.10.0.50

- Fehler beim LuPO-Import, nun behoben.
- Fehler beim Blockungsimport aus der DB beseitigt.
- Textimport überarbeitet.

<a id="01.12.2019_(Kurs:_Version:_3.23.0.330,_Noten:_2.10.0.50"></a>
<a id="01.12.2019_.28Kurs:_Version:_3.23.0.330.2C_Noten:_2.10.0.50"></a>

## 01.12.2019 (Kurs: Version: 3.23.0.330, Noten: 2.10.0.50

- Fehler im Noten Im/Export von Kurs 42 und Noten 42 behoben
- Darstellungsfehler in Noten (Gesamtnote), nun behoben.
- Beim Import der Schülerdaten aus Schild-NRW wird die Einstellung "Vorzugsweise Schul-Emailadresse benutzen" ausgewertet.
- Die Lockdatei wird jetzt erst beim Schließen der Blockungsdatei gelöscht.

<a id="11.11.2019_(Kurs:_Version:_3.22.14.310,_Noten:_2.9.0.45"></a>
<a id="11.11.2019_.28Kurs:_Version:_3.22.14.310.2C_Noten:_2.9.0.45"></a>

## 11.11.2019 (Kurs: Version: 3.22.14.310, Noten: 2.9.0.45

- Fehler bei der Darstellung von Stundenrastern, nun behoben.
- Noten: Anpassung an die neue Passwortvergabe in Schild-NRW.

<a id="10.11.2019_(Kurs:_Version:_3.22.13.310"></a>
<a id="10.11.2019_.28Kurs:_Version:_3.22.13.310"></a>

## 10.11.2019 (Kurs: Version: 3.22.13.310

- Fehler beim Druck von Formularen mit Kurs- bzw. Schülerauswahl, nun behoben.
- Fehler beim Druck unverplanter Klausurschienen, nun behoben.

<a id="06.11.2019_(Kurs:_Version:_3.22.12.310"></a>
<a id="06.11.2019_.28Kurs:_Version:_3.22.12.310"></a>

## 06.11.2019 (Kurs: Version: 3.22.12.310

- Beim Druck von Klausurübersichten wurden unter bestimmten Umständen nicht alle Klausurschienen gedruckt, nun behoben.
- Im Dialog "Klausurtermine festlegen" gab es einen Darstellungsfehler, nun behoben.
- Die Funktionen zum Zugriff auf Stundenplandateien von SchildPlan/WinPlan wurden in eine Bibliothek (PlanLib3_SP1.dll) ausgelagert.

<a id="23.10.2019_(Kurs:_Version:_3.22.11.308"></a>
<a id="23.10.2019_.28Kurs:_Version:_3.22.11.308"></a>

## 23.10.2019 (Kurs: Version: 3.22.11.308

- Der Gruppen-EMail-Versand wurde erneut überarbeitet.
- Beim Export der Kurse wird jetzt die Schulnummer mit exportiert (wichtig für die Arbeit mit dem SAT-Solver von Herrn Bartsch).

<a id="16.10.2019_(Kurs:_Version:_3.22.10.308"></a>
<a id="16.10.2019_.28Kurs:_Version:_3.22.10.308"></a>

## 16.10.2019 (Kurs: Version: 3.22.10.308

- Fehler beim E-Mail-Versand: Es wurde nur an genau eine Adresse versandt, nun behoben
- Die SMTP-Einstellungen für den Port und SSL wurden nicht übernommen, nun behoben.
- Beim Import einer Textblockung wurde die Schulnummer nicht übernommen, nun behoben.
- Unter "Import aus Textdateien" steht nun ein weiterer Menüpunkt zur Verfügung, mit dem die Ergebnisse eines externen SAT-Blockungslaufes (nur Kurs- und Schienenbelegung) importiert werden können.

<a id="04.10.2019_(Kurs:_Version:_3.22.9.308"></a>
<a id="04.10.2019_.28Kurs:_Version:_3.22.9.308"></a>

## 04.10.2019 (Kurs: Version: 3.22.9.308

- Der E-Mail-Versand wurde überarbeitet. Bitte lesen Sie die überarbeitete Anleitung in "Hilfe\EMails_mit_der_Reportverwaltung_2019.pdf".

<a id="17.09.2019_(Kurs:_Version:_3.22.8.308"></a>
<a id="17.09.2019_.28Kurs:_Version:_3.22.8.308"></a>

## 17.09.2019 (Kurs: Version: 3.22.8.308

- Beim Laden der Lehrer aus der DB wird die EMail-Adresse in Abhängigkeit von der Einstellung in Schild-NRW (dienstliche/private) geladen.
- Beim Export der gpu017.txt (Klausuren) für UNTIS kann jetzt gewählt werden, ob beim Export eine Zeile pro Schiene (Standard) oder eine Zeile pro Kurs geschrieben werden soll. Die Einstellung kann unter Extras-\>Einstellungen-\>Im/Export,Kurse bearbeitet werden.
- Im Dialog "Kurse bearbeiten" kann jetzt die UNTIS-Unterrichtsnummer bearbeitet werden.

<a id="12.09.2019_(Kurs:_Version:_3.22.7.305"></a>
<a id="12.09.2019_.28Kurs:_Version:_3.22.7.305"></a>

## 12.09.2019 (Kurs: Version: 3.22.7.305

- Das EMail-Feld der Lehrer wird jetzt in Abhängigkeit von den Einstellungen in Schild-NRW gefüllt.

<a id="09.09.2019_(Kurs:_Version:_3.22.6.305"></a>
<a id="09.09.2019_.28Kurs:_Version:_3.22.6.305"></a>

## 09.09.2019 (Kurs: Version: 3.22.6.305

- Der Text-Im/Export der Jahrgangstabelle war fehlerhaft, nun behoben.

<a id="10.07.2019_(Kurs:_Version:_3.22.4.305"></a>
<a id="10.07.2019_.28Kurs:_Version:_3.22.4.305"></a>

## 10.07.2019 (Kurs: Version: 3.22.4.305

- Die Option "Dauer einer Unterrichtseinheit" wurde nicht gespeichert, nun behoben.
- Fehler beim Laden jahrgangsübergreifender Kurse, nun behoben.

<a id="05.06.2019_(Kurs:_Version:_3.22.3.305"></a>
<a id="05.06.2019_.28Kurs:_Version:_3.22.3.305"></a>

## 05.06.2019 (Kurs: Version: 3.22.3.305

- Beim Blocken wurde der bisher verwendete Algorithmus reaktiviert, d.h. Kurse werden auch gesetzt, wenn im Einrichtungsdialog ein zu niedriger Wert für die Parallelität gesetzt wurde.

<a id="29.03.2019_(Kurs:_Version:_3.22.1.302)"></a>
<a id="29.03.2019_.28Kurs:_Version:_3.22.1.302.29"></a>

## 29.03.2019 (Kurs: Version: 3.22.1.302)

- Der Export der Raumliste war fehlerhaft, nun behoben
- Im Umwahldialog wurden die Schüler mit Konflikten nicht mehr farbig unterlegt, nun behoben.
- Im Formularexplorer fehlten einige Schaltflächen, jetzt wieder vorhanden
- Im Blockungsdialog wurde die Option zur Einstellung der Anzahl paralleler Kurse pro Schiene entfernt, dafür wird jetzt die Angabe in der Spalte "parallel" im Kurs-Einrichtungsdialog ausgewertet.
- Die Kommunikation mit dem Internet wurde überarbeitet, die jetzt über die Bibliothek "ChilkatDelphi32.dll" abgewickelt wird. Nutzer des Setup-Archivs müssen bitte daran denken, diese Datei in das Programmverzeichnis zu kopieren.

<a id="21.02.2019_(Kurs:_Version:_3.21.3.300)"></a>
<a id="21.02.2019_.28Kurs:_Version:_3.21.3.300.29"></a>

## 21.02.2019 (Kurs: Version: 3.21.3.300)

- Beim Löschen der Blockung in der DB konnte es zu Fehlermeldungen kommen, nun behoben,
- Im Klausur-Terminplanungsdialg wird in der Liste der Klausuren jetzt angezeigt, ob die Klausur in der A oder B-Woche liegt.
- Im externen Notenmodul können jetzt schülerspezifische Bemerkungen eingetragen werden, die beim Import in die Blockung übernommen werden. (In der Schüleransicht Namen mit der rechten Maustaste anklicken)

<a id="17.01.2019_(Kurs:_Version_3.21.0.300)"></a>
<a id="17.01.2019_.28Kurs:_Version_3.21.0.300.29"></a>

## 17.01.2019 (Kurs: Version 3.21.0.300)

- Exportproblem 1: Kurse wurden wegen einer Falschbelegung eines Datenfeldes nicht angelegt, nun behoben.
- Exportproblem 2: Fehlerhafter Export der Teilleistungsarten: Bitte vor dem nächsten Export einmal Im/Export-\>Blockunngs-Grunddaten laden aufrufen und dann unter Extras-\>Einstellungen die Teilleistungsarten neu zuordnen.
- Klausurblockungen: Unter Klausuren-\>Klausurtermin festlegen können jetzt Beginn und Dauer (in Minuten) der Klausur separat angegeben werden. Bei der Übernahme der Daten wird geprüft, ob der Beginn in der ersten Stunde liegt und Beginn plus Dauer innerhalb der letzten Stunde liegt. In der Datenquelle "Klausurschienen" sind entsprechende Datenfelder ("Startzeit" und "Klausurdauer") enthalten.

<a id="09.01.2019_(Kurs:_Version_320.56.298)"></a>
<a id="09.01.2019_.28Kurs:_Version_320.56.298.29"></a>

## 09.01.2019 (Kurs: Version 320.56.298)

- Der Bereich der Konferenzblockung wurde überarbeitet. Unter Im/Export-\>Export in Textdateien können jetzt die Zuordnungsdateie Lehrer-\>Klassen und Lehrer-\>Fächer erzeugt werden.
- Fehler beim Export von Kursen (bei Verwendung einer Access-DB), nun behoben
- Fehler beim Export von Teilleistungen, nun behoben. In einigen Fällen wurde die schildinterne Tabelle der Teilleistunsarten verändert, so dass die Zuordnung fehlschlug. Abhilfe: Bei geöffneter Blockungsdatei unter Extras-\>Einstellungen einmal die Teilleistungsarten neu zuordnen.

<a id="28.12.2018_(Kurs:_Version_3.20.55.297)"></a>
<a id="28.12.2018_.28Kurs:_Version_3.20.55.297.29"></a>

## 28.12.2018 (Kurs: Version 3.20.55.297)

- Fehler im Datenaustausch durch Textdateien, nun behoben

<a id="05.12.2018_(Kurs:_Version_3.20.54.296)"></a>
<a id="05.12.2018_.28Kurs:_Version_3.20.54.296.29"></a>

## 05.12.2018 (Kurs: Version 3.20.54.296)

- Der Im- und Export von Textdateien wurde komplett überarbeitet.
- Die Feldnamen im Header sind in Doublequotes (") eingeschlossen.
- Daten vom Typ String werden ebenfalls in Doublequotes eingeschlossen
- Die Textdateien werden mit der in den Einstellungen festgelegten Kodierung erzeugt.
- Als Trennzeichen wird das im Betriebssystem (Systemsteuerung-\>Region) vereinbarte Listentrennzeichen verwendet.
- Diese Änderungen betreffen nicht die für den Austausch mit der Schild-NRW-Schnittstelle vorgesehenen Textdateien.

<a id="24.10.2018_(Kurs:_Version_3.20.52.295)"></a>
<a id="24.10.2018_.28Kurs:_Version_3.20.52.295.29"></a>

## 24.10.2018 (Kurs: Version 3.20.52.295)

- Die Kommunikationsbibliothek (schildUA.dll) wurde überarbeitet. Die im Zusammenhang mit Windows 7/Windows 10 aufgetretenen Probleme sind nach unseren Tests beseitigt.

<a id="01.10.2018_(Kurs:_Version_3.20.50.292)"></a>
<a id="01.10.2018_.28Kurs:_Version_3.20.50.292.29"></a>

## 01.10.2018 (Kurs: Version 3.20.50.292)

- Beseitigung eines Bugs im Klausurdruck

<a id="26.09.2018_(Kurs:_Version_3.20.49.292)"></a>
<a id="26.09.2018_.28Kurs:_Version_3.20.49.292.29"></a>

## 26.09.2018 (Kurs: Version 3.20.49.292)

- Die Datenquelle für die Klausurtermine war fehlerhaft, nun behoben.

<!-- -->

- Im Stundenraster wurden Eintragungen gelöscht, nun behoben.

<a id="10.09.2018_(Kurs:_Version_3.20.47.292)"></a>
<a id="10.09.2018_.28Kurs:_Version_3.20.47.292.29"></a>

## 10.09.2018 (Kurs: Version 3.20.47.292)

- Korrekturen im Einstellungsdialog.
- Überarbeitung des Lehrerimportes. Beim Import aus SchildZentral werden Doppelungen vermieden, außerdem werden alle Lehrer geladen, auch wenn sie in der DB nicht als Benutzer angelegt sind.

<a id="02.09.2018_(Kurs:_Version_3.20.46.292)"></a>
<a id="02.09.2018_.28Kurs:_Version_3.20.46.292.29"></a>

## 02.09.2018 (Kurs: Version 3.20.46.292)

- Beim Anlegen einer neuen Blockung kam es zu Fehlern (statkue.mdb nicht gefunden), nun behoben.

<a id="27.08.2018_(Kurs:_Version_3.20.45.292)"></a>
<a id="27.08.2018_.28Kurs:_Version_3.20.45.292.29"></a>

## 27.08.2018 (Kurs: Version 3.20.45.292)

- Im Zusammenhang mit Schildzentral kam es beim Lehrerimport zu Verdoppelungen, nun behoben.
- Im Einstellungsdialog waren die Exportarten (intern/über Dll) vertauscht, nun behoben.

<a id="23.08.2018_(Kurs:_Version_3.20.44.292"></a>
<a id="23.08.2018_.28Kurs:_Version_3.20.44.292"></a>

## 23.08.2018 (Kurs: Version 3.20.44.292

- Die Passwortanzeige und -eingabe für den E-Mail-Versand erfolgt wieder ohne Klartextanzeige.
- Im Druck-Auswahldialog für Kurse und Schüler funktionierte eine Sortierung nicht, nun behoben.

<a id="20.08.2018_(Kurs:_Version_3.20.43.292)"></a>
<a id="20.08.2018_.28Kurs:_Version_3.20.43.292.29"></a>

## 20.08.2018 (Kurs: Version 3.20.43.292)

- In der Datenpipeline 'Fachwahl' wurde das Feld 'IstSchriftlich' nicht gefüllt, nun behoben

<a id="16.08.2018_(Kurs:_Version_3.20.42.292)"></a>
<a id="16.08.2018_.28Kurs:_Version_3.20.42.292.29"></a>

## 16.08.2018 (Kurs: Version 3.20.42.292)

- Beseitigung kleiner Darstellungs- und Rechtschreibfehler

<a id="06.08.2018_(Kurs:_Version:_3.20.41.290"></a>
<a id="06.08.2018_.28Kurs:_Version:_3.20.41.290"></a>

## 06.08.2018 (Kurs: Version: 3.20.41.290

- Der Zugriff auf das Internet ist jetzt auch über einen Proxy-Server möglich. Die notwendigen Einstellungen müssen auf der Seite "Verzeichnisse und Internet" vorgenommen werden,

<a id="18.07.2018_(Kurs:_Version:_3.20.40.290)"></a>
<a id="18.07.2018_.28Kurs:_Version:_3.20.40.290.29"></a>

## 18.07.2018 (Kurs: Version: 3.20.40.290)

- Überarbeitung des Einstellungs-Dialoges
- In den Einstellungen für die Kurse gibt es jetzt die Möglichkeit,. eine Namensmaske vorzugeben. Die Platzhalter in der Maske haben die folgende Bedeutung:

1.  %Fachbez% wird durch das Fachkrz oder die Fachlangezeichnung ersetzt, je nach Wert von KursbezeichnerLang.
2.  %Kursart% wird durch die Kursart ersetzt
3.  %kursNr% wird durch die laufende Nr. des Kurse ersetzt (bei Kursen mit gleichem Fach und Kursart)

- Standardmaske ist '%Fachbez% %Kursart%%Kursnr%' und erzeugt die bekannten Kursbezeicher wie z.B. 'D GK1'.

<a id="25.06.2018_(Kurs:_Version:_3.20.38.287_(Snapshot)"></a>
<a id="25.06.2018_.28Kurs:_Version:_3.20.38.287_.28Snapshot.29"></a>

## 25.06.2018 (Kurs: Version: 3.20.38.287 (Snapshot)

- Auf Wunsch einiger Fachberater kann die Blockung anonymisiert werden (Extras-\>Spezial-\>Blockung anonymisieren)

<a id="16.05.2018_(Kurs:_Version_3.20.37.287,_Noten:_Version_2.8.2.34)"></a>
<a id="16.05.2018_.28Kurs:_Version_3.20.37.287.2C_Noten:_Version_2.8.2.34.29"></a>

## 16.05.2018 (Kurs: Version 3.20.37.287, Noten: Version 2.8.2.34)

- Beim Laden von Blockungen mit mehr als zwei Blockgruppen kam es zu einem Ladefehler, nun behoben.

<a id="26.04.2018_(Kurs:_Version_3.20.36.287,_Noten:_Version_2.8.2.34)"></a>
<a id="26.04.2018_.28Kurs:_Version_3.20.36.287.2C_Noten:_Version_2.8.2.34.29"></a>

## 26.04.2018 (Kurs: Version 3.20.36.287, Noten: Version 2.8.2.34)

- Beim Export in MSSQLServer-DBs kam es gelegentlich zu Problemen, nun behoben.

<a id="12.04.2018_(Kurs:_Version_3.20.34.287,_Noten:_Version_2.8.2.34)"></a>
<a id="12.04.2018_.28Kurs:_Version_3.20.34.287.2C_Noten:_Version_2.8.2.34.29"></a>

## 12.04.2018 (Kurs: Version 3.20.34.287, Noten: Version 2.8.2.34)

- Unter bestimmten Umständen konnte das Programm beim Blocken in eine Endlosschleife laufen, nun behoben

<a id="03.03.2018_(Kurs:_Version_3.20.33.286,_Noten:_Version_2.8.2.34)"></a>
<a id="03.03.2018_.28Kurs:_Version_3.20.33.286.2C_Noten:_Version_2.8.2.34.29"></a>

## 03.03.2018 (Kurs: Version 3.20.33.286, Noten: Version 2.8.2.34)

- Der Import von UNTIS-Plänen aus gpu001.txt und gpu002.txt wurde überarbeitet
- Fehler beim Druck von Blockplänen (Bei einzelnen Schienen wurden keine Kurse ausgegeben), nun behoben.
- Nach der Bearbeitung eines Kurses im Dialog 'Kurse bearbeiten' sprang der Datensatzzeiger immer zum ersten Datensatz, nun behoben.

<a id="17.02.2018_(Kurs:_Version_3.20.31.286,_Noten:_Version_2.8.2.34)"></a>
<a id="17.02.2018_.28Kurs:_Version_3.20.31.286.2C_Noten:_Version_2.8.2.34.29"></a>

## 17.02.2018 (Kurs: Version 3.20.31.286, Noten: Version 2.8.2.34)

- Der Schüler-Datensatz wurde erweitert und das Textfeld 'Bemerkung' hinzugefügt. Dieses Feld steht auch in den Datenquellen 'Schueler' und 'Kursteilnehmer' zur Verfügung.
- Beseitigung eines Fehlers im UNTIS-Im/Export
- Die notwendigen Einstellungen für den UNTIS-Im/Export können unter Extras-\>Einstellungen-\>Im/Export bearbeitet werden.
- Alle Textdateien werden mit der unter Extras-\>Einstellungen-\>Im/Export gewählten Kodierung erzeugt bzw. gelesen.
- Die Abschnittserhöhung funktioniert jetzt auch bei Weiterbildungskollegs mit Semesterbetrieb korrekt.

<a id="23.11.2017_(Kurs:_Version_3.20.27.286,_Noten:_Version_2.8.1.34)"></a>
<a id="23.11.2017_.28Kurs:_Version_3.20.27.286.2C_Noten:_Version_2.8.1.34.29"></a>

## 23.11.2017 (Kurs: Version 3.20.27.286, Noten: Version 2.8.1.34)

- Der Datenaustausch mit LuPO wurde überarbeitet. Es werden nur noch Fachwahlen mit Kursart GK, LK, VTF und PJK ausgetauscht, d.h. Fachwahlen in einer Blockung mit einer davon abweichenden Kursart (z.B. AGGT oder ZUV) werden nicht mehr abgewählt, wenn die entsprechenden Fachwahlen in LuPO fehlen. Ebenso werden beim Export nur die oben angegebenen Kursarten berücksichtigt.

<a id="05.07.2017_(Kurs:_Version_3.20.26.286,_Noten:_Version_2.8.1.34)"></a>
<a id="05.07.2017_.28Kurs:_Version_3.20.26.286.2C_Noten:_Version_2.8.1.34.29"></a>

## 05.07.2017 (Kurs: Version 3.20.26.286, Noten: Version 2.8.1.34)

- Fehler beim Export der Teilleistungen, nun behoben.

<a id="01.07.2017_(Kurs:_Version_3.20.25.286,_Noten:_Version_2.8.1.34)"></a>
<a id="01.07.2017_.28Kurs:_Version_3.20.25.286.2C_Noten:_Version_2.8.1.34.29"></a>

## 01.07.2017 (Kurs: Version 3.20.25.286, Noten: Version 2.8.1.34)

- Überarbeitung interner Funktionen (Verbesserung des Blockungsalgorithmus)
- Fehlerbereinigung im Im/Exportbereich

<a id="14.05.2017_(Kurs:_Version_3.20.24.286,_Noten:_Version_2.8.1.34)"></a>
<a id="14.05.2017_.28Kurs:_Version_3.20.24.286.2C_Noten:_Version_2.8.1.34.29"></a>

## 14.05.2017 (Kurs: Version 3.20.24.286, Noten: Version 2.8.1.34)

- Fehler beim Speichern/Laden von Blockungen, in denen alle Kurse gelöscht wurden, nun behoben.

<a id="18.04.2017_(Kurs:_Version_3.20.23.286,_Noten:_Version_2.8.1.34)"></a>
<a id="18.04.2017_.28Kurs:_Version_3.20.23.286.2C_Noten:_Version_2.8.1.34.29"></a>

## 18.04.2017 (Kurs: Version 3.20.23.286, Noten: Version 2.8.1.34)

- Fehler im Fachwahlexport für UNTIS behoben
- Beim Import aus GPU019.TXT wurden Schienen nicht korrekt angelegt, nun behoben
- Import aus LuPO: die Pseudo-Kursart "AT" wird in GKM mit Note "AT" umgesetzt

<a id="20.02.2017_(Kurs:_Version_3.20.21.285,_Noten:_Version_2.8.1.34)"></a>
<a id="20.02.2017_.28Kurs:_Version_3.20.21.285.2C_Noten:_Version_2.8.1.34.29"></a>

## 20.02.2017 (Kurs: Version 3.20.21.285, Noten: Version 2.8.1.34)

- Beim Laden einer Blockung konnte es zu einer Schutzverletzung kommen, nun behoben.
- Im Dialog "Klausurtermine" können nun Aufsichtslehrer und Klausurräume aus Dropdown-Listen ausgewählt werden. Wenn bei der Auswahl des Aufsichtslehrers die Strg-Taste gedrückt wird, wird die Aufsicht für die ganze Klausur übernommen.
- Im Dialog "Klausurtermine" werden durch Aufruf der Option "Klausurräume löschen" die Räume tatsächlich gelöscht und nicht durch die Kursräume ersetzt.

<a id="08.02.2017_(Kurs:_Version_3.20.20.285,_Noten:_Version_2.8.1.34)"></a>
<a id="08.02.2017_.28Kurs:_Version_3.20.20.285.2C_Noten:_Version_2.8.1.34.29"></a>

## 08.02.2017 (Kurs: Version 3.20.20.285, Noten: Version 2.8.1.34)

- Das Sortierungsfeld der Fächer wird beim Import aus dem DB-Feld 'SortierungS2' gefüllt.
- Die Sortierung der Kurse erfolgt einheitlich nach Kursart/Fachkürzel/Bezeichnung bzw. (je nach gewählter Option) nach Kursart/Fachsortierung/Bezeichnung.
- Im Klausurplanungsdialog werden die Klausurstunden in den kleinen Plänen farbig markiert.
- Beim Export der GPU015.TXT bleiben die Kursbezeichnungen unverändert.

<a id="10.01.2017_(Kurs:_Version_3.20.16.285,_Noten:_Version_2.8.1.34)"></a>
<a id="10.01.2017_.28Kurs:_Version_3.20.16.285.2C_Noten:_Version_2.8.1.34.29"></a>

## 10.01.2017 (Kurs: Version 3.20.16.285, Noten: Version 2.8.1.34)

- Im Dialog "Klausurtermine anzeigen" wurden nicht alle Klausurstunden angezeigt, nun behoben. Damit in vorhandenen Blockungen alle Stunden angezeigt werden, muss im Dialog "Klausurtermin festlegen" einmal die Funktion "Alle Termine neu berechnen" (erreichbar im lokalen Menü der Klausurenliste) ausgeführt werden.

<a id="31.12.2016_(Kurs:_Version_3.20.15.284,_Noten:_Version_2.8.1.34)"></a>
<a id="31.12.2016_.28Kurs:_Version_3.20.15.284.2C_Noten:_Version_2.8.1.34.29"></a>

## 31.12.2016 (Kurs: Version 3.20.15.284, Noten: Version 2.8.1.34)

- Anpassung an geänderte Prüfungsordnung (3. Fremdsprache)
- Kleine Anpassungsarbeiten im Bereich der Einstellungen.

<a id="17.09.2016_(Kurs:_Version_3.20.13.284,_Noten:_Version_2.8.1.34)"></a>
<a id="17.09.2016_.28Kurs:_Version_3.20.13.284.2C_Noten:_Version_2.8.1.34.29"></a>

## 17.09.2016 (Kurs: Version 3.20.13.284, Noten: Version 2.8.1.34)

- Überarbeitung des UNTIS-Planimportes über gpu001.txt. Ab sofort wird auch gpu002.txt ausgewertet, um A- und B-Wochenpläne importieren zu können. Unter Extras-\>Einstellungen-\>Im/Export kann festgelegt werden, durch welche Zeichenkette A- bzw. B-Woche identifiziert werden. Ausgewertet wird aus gpu002.txt das Feld \#12 (Gruppe).
- Beim Export der Kurse nach Schild-NRW wurde das Feld für die Stunden des Kursleiters mit einem falschen Wert gefüllt; nun behoben.

<a id="08.09.2016_(Kurs:_Version_3.20.12.284,_Noten:_Version_2.8.1.34)"></a>
<a id="08.09.2016_.28Kurs:_Version_3.20.12.284.2C_Noten:_Version_2.8.1.34.29"></a>

## 08.09.2016 (Kurs: Version 3.20.12.284, Noten: Version 2.8.1.34)

- Durch Aufruf der Klausurplanung konnten Schülerstundenpläne zerstört werden, nun behoben.
- Fehler beim Druck von Klausurübersichten beseitigt.

<a id="09.08.2016_(Kurs:_Version_3.20.8.284,_Noten:_Version_2.8.1.34)"></a>
<a id="09.08.2016_.28Kurs:_Version_3.20.8.284.2C_Noten:_Version_2.8.1.34.29"></a>

## 09.08.2016 (Kurs: Version 3.20.8.284, Noten: Version 2.8.1.34)

- Im Dialog "Kurse bearbeiten" wurde bei einer Änderung des Faches die Änderung nicht bei den Schülern übernommen, nun behoben.

<a id="15.06.2016_(Kurs:_Version_3.20.7.284,_Noten:_Version_2.8.1.34)"></a>
<a id="15.06.2016_.28Kurs:_Version_3.20.7.284.2C_Noten:_Version_2.8.1.34.29"></a>

## 15.06.2016 (Kurs: Version 3.20.7.284, Noten: Version 2.8.1.34)

- Durch einen internen Fehler wurde bei der Updateprüfung eine falsche URL verwendet, nun behoben.

<a id="19.05.2016_(Kurs:_Version_3.20.7.283,_Noten:_Version_2.8.1.34)"></a>
<a id="19.05.2016_.28Kurs:_Version_3.20.7.283.2C_Noten:_Version_2.8.1.34.29"></a>

## 19.05.2016 (Kurs: Version 3.20.7.283, Noten: Version 2.8.1.34)

- In Blockungen für die WBKs wurden die Kursarten nicht richtig angezeigt, nun behoben.
- Beim Raumplanimport wird nun auch die Option "Plan gilt jede Woche" berücksichtigt.

<a id="19.05.2016_(Kurs:_Version_3.20.6.283,_Noten:_Version_2.8.1.34)"></a>
<a id="19.05.2016_.28Kurs:_Version_3.20.6.283.2C_Noten:_Version_2.8.1.34.29"></a>

## 19.05.2016 (Kurs: Version 3.20.6.283, Noten: Version 2.8.1.34)

- Im Dialog "Kurse bearbeiten" das fehlende Feld "Schienen" ergänzt
- In den Einstellungen kann jetzt unter "Verschiedenes" festgelegt werden, ob die A-Woche im Plan die gerade oder ungerade Woche sein soll.

<a id="07.04.2016_(Kurs:_Version_3.20.5.283,_Noten:_Version_2.8.1.34)"></a>
<a id="07.04.2016_.28Kurs:_Version_3.20.5.283.2C_Noten:_Version_2.8.1.34.29"></a>

## 07.04.2016 (Kurs: Version 3.20.5.283, Noten: Version 2.8.1.34)

- Falls in eine Klausurblockung nach der Terminplanung Schienen eingefügt und Kurse verschoben wurden, kam es zu Stundenplan-Fehlanzeigen, nun behoben.
- Beim Direktimport aus einer LuPO-Datei wurden die Leistungen nicht korrekt importiert, nun behoben.
- Wenn als Schulform 'Weiterbildungskolleg' gewählt war, wurden die Kursarten nicht angezeigt, nun behoben.

<a id="12.02.2016_(Kurs:_Version_3.20.4.283,_Noten:_Version:_2.8.1.34)"></a>
<a id="12.02.2016_.28Kurs:_Version_3.20.4.283.2C_Noten:_Version:_2.8.1.34.29"></a>

## 12.02.2016 (Kurs: Version 3.20.4.283, Noten: Version: 2.8.1.34)

- Durch einen Fehler in der Reportkomponente wurde der Rap-Code, wenn ältere Reports bearbeitet und gespeichert wurden, nicht gespeichert. Der Fehler ist durch einen Bugfix des Lieferanten der Komponente nun behoben.
- Nach dem Anlegen einer neuen Blockung wurde unter Umständen das Blockungsfenster nicht dargestellt, nun behoben.

<a id="31.01.2016_(Kurs:_Version_3.20.2.283,_Noten:_Version:_2.8.1.34)"></a>
<a id="31.01.2016_.28Kurs:_Version_3.20.2.283.2C_Noten:_Version:_2.8.1.34.29"></a>

## 31.01.2016 (Kurs: Version 3.20.2.283, Noten: Version: 2.8.1.34)

- Dies ist das letzte Update der Versin 3 von Kurs 42. Die Folgeversion befindet sich in der Testphase und kann hier heruntergeladen werden.
- Beim Direktimport der Stundenpläne aus SchildPlan-Dateien wurden Räume nicht richtig gesetzt, nun behoben.
- Der Direkexport nach LuPO wurde wegen eines fehlenden Wertes abgebrochen, nun behoben.
- Im Dialog "Klausurtermine bearbeiten" ist jetzt zusätzlich der Export nach LibreOffice/OpenOffice Calc implementiert.
- Das Element dbCalc im Reportdesigner startete die Zählung bei der Einstellung 'laufender Zähler' fälschlicherweise mit Null, nun behoben.
- Die E-Mail-Einstellung (Indy/Mapi) wurde nicht richtig ausgewertet, nun behoben.
- Beim Export der Schülerpläne im XML-Format wird jetzt auch die Kopplungs-Id ( = Blockungskürzel) mit ausgegeben.

<a id="25.10.2015_(Kurs:_Version_3.19.18.282,_Noten:_Version:_2.8.1.34)"></a>
<a id="25.10.2015_.28Kurs:_Version_3.19.18.282.2C_Noten:_Version:_2.8.1.34.29"></a>

## 25.10.2015 (Kurs: Version 3.19.18.282, Noten: Version: 2.8.1.34)

- Beseitigung kleinerer Fehler.

<a id="28.09.2015_(Kurs:_Version_3.19.16.280,_Noten:_Version_2.7.15.32_)"></a>
<a id="28.09.2015_.28Kurs:_Version_3.19.16.280.2C_Noten:_Version_2.7.15.32_.29"></a>

## 28.09.2015 (Kurs: Version 3.19.16.280, Noten: Version 2.7.15.32 )

- Im Dialog 'Schüler intern bearbeiten' können jetzt Schüler hinzugefügt werden.
- In der Klausurblockung wurde die Anzahl der betroffenen Schüler in den klausurbetroffenen Kursen falsch berechnet, nun behoben.
- Die Liste der Klausurschreiber wird jetzt alphabetisch sortiert.
- Wenn beim Import aus LuPO Schüler neu angelegt werden, erhalten sie automatisch die Schulnummer der aufnehmenden Schule. Analoges gilt für andere Schülerimporte.
- Im Dialog 'Stundenraster bearbeiten' gibt es eine neue Schaltfläche ('Raster bereinigen'), die einige Probleme bei der Nutzung älterer Blockungsdateien mit Stundenplänen beseitigt.
- Initialisierungsfehler der Reportverwaltung beseitigt.
- Neu: Die Optik der Benutzeroberfläche kann über die Auswahl von Themen gestaltet werden. Im Programmverzeichnis von Kurs 42 wird dazu das Verzeichnis 'Styles' eingerichtet, das die verfügbaren GUI-Stildateien enthält.

<a id="27.08.2015_(Kurs_Version_3.19.3.280,_Noten:_Version_2.7.15.32_)"></a>
<a id="27.08.2015_.28Kurs_Version_3.19.3.280.2C_Noten:_Version_2.7.15.32_.29"></a>

## 27.08.2015 (Kurs Version 3.19.3.280, Noten: Version 2.7.15.32 )

- Die Klausurfilterung wirkt sich jetzt auch auf die Datenquelle 'SchuelerKlausurTermine aus. Der Filter muss in der Hauptdatenquelle 'Schueler' gesetzt werden.
- Im Dialog 'Stundenraster bearbeiten' werden jetzt für die Kurse die tatsächlichen Raumbelegungen angezeigt. Wird eine belegte Stunde mit der rechten Maustaste angeklickt, kann in einer Popup-Liste ein Raum ausgewählt und zugewiesen werden. Bei gleichzeitg gedrückter \<Strg\>-Taste oder bei gesetzer Option 'Kursplan gilt jede Woche' wird der Raum sowohl in der geraden als auch der ungeraden Woche zugewiesen (vorausgesetzt, die Stunde ist in beiden Varianten gesetzt).
- Die interne Raum- und Stundenplanverwaltung wurde komplett überarbeitet.
- Im Dialog 'Stundenraster bearbeiten' können jetzt auch die Stunden für Einzelkurse gesetzt werden.
- Die Menüpunkte 'Raumplan initialisieren' und die Funktion 'Kurspläne initialisieren' sind nicht mehr nötig und wurden deaktiviert.

<a id="09.08.2015_(Kurs_Version_3.19.0.280,_Noten:_Version_2.7.15.32_)"></a>
<a id="09.08.2015_.28Kurs_Version_3.19.0.280.2C_Noten:_Version_2.7.15.32_.29"></a>

## 09.08.2015 (Kurs Version 3.19.0.280, Noten: Version 2.7.15.32 )

- Eine besondere UDL-Verknüpfung für die Statistik-DB ist nicht mehr nötig, da ab sofort grundsätzlich auf die Stakue.mdb im Keytabs-Verzeichnis von Schild-NRW zugegriffen wird.
- Beim Untis-Export kann jetzt auch die gpu019.txt (enthält die Informationen über Schienen und Kurse) erzeugt werden. Aufruf über 'Im/Export-\>Untis Im/Export-\>Untis-Dateien einzeln exportieren-\>Schienen'.
- Die Im/Exportschnittstelle "Raumplan" wurde um das Feld 'Lehrer' ergänzt. Der Header enthält jetzt die Felde
- Kurs;"Tag";"Std";"Woche";"Raum";"Lehrer"
- Der Dialog "Kurse bearbeiten" wurde überarbeitet. In der Kursliste können Kurse mit gleichem Fach und gleicher Kursart per Drag-And-Drop in eine andere Reihenfolge gebracht werden.
- Der Dialog zum Anlegen einer neuen Blockung wurde überarbeitet.
- Beim Druck von Blockungrastern wurde unter gewissen Umständen die erste Schiene nicht gedruckt, nun behoben
- Der Ex- und Import von Blockungen aus bzw. in Textdateien wurde überarbeitet. Beim Export werden fünf Textdateien erzeugt:
- 1\. Blockplan.txt

Schiene;Kursbezeichnung;Fixiert

0;BI-LK1;1

0;D-LK1;1

0;E5-LK1;1

...

- 2\. Kurse.txt

KursId;Fach;Name;Lehrer;Std;Raum;Kursart

415;KU-PK;KU-PJK1;scs;90;E38;PJK

416;PA-PK;PA-PJK1;ste;90;U09;PJK

417;BI-PK;BI-PJK1;dab;90;E36;PJK

...

- 3\. Fachwahlen.txt

Name;Vorname;GebDat;Geschlecht;Fachkrz;Kursart;Note;FehlStd;UFehlStd

Pf\*;Niclas;15.01.1994;3;D;AB4;;0;0

Pf\*;Niclas;15.01.1994;3;M;LK2;;0;0

Pf\*;Niclas;15.01.1994;3;BI;LK1;;0;0

...

- 4\. Schueler.txt

Name;Vorname;GebDat;Geschlecht;Status;Klasse;Jahrgang;Schulnummer;E-Mail

Pf\*g;Niclas;15.01.1994;3;2;Q2;Q2;19xxxx;epfl\*@xxx.yyy

Pi\*;Isabel;18.04.1995;4;2;Q2;Q2;19xxxx;

...

- 5\. Kursbelegung.txt

Name;Vorname;GebDat;Geschlecht;Kursbezeichnung

Be\*;Carolin;23.03.1995;4;KU-PJK1

Ce\*;Cagdas-Haydar;03.02.1994;4;KU-PJK1

Gö\*;Alexander;08.07.1995;3;KU-PJK1

Sch\*;Max;04.04.1995;3;KU-PJK1

...

- Beim Import werden die vier Dateien erwartet

Blockplan.txt

Kurse.txt

Fachwahlen.txt

Kursbelegung.txt

- Da die Belegprüfung seit einiger Zeit ausschließlich über LuPO statfindet, wurden die alten Prüfroutinen entfernt. Damit ist auch die Bibliothek "AbiturBelegpruefung.dll" überflüssig geworden und kann gelöscht werden.

<a id="21.05.2015_(Kurs_Version_3.18.29.280,_Noten:_Version_2.7.14.32_)"></a>
<a id="21.05.2015_.28Kurs_Version_3.18.29.280.2C_Noten:_Version_2.7.14.32_.29"></a>

## 21.05.2015 (Kurs Version 3.18.29.280, Noten: Version 2.7.14.32 )

- Durch einen Fehler in der Verwaltung der zulässigen Kursarten gab es Probleme beim LuPO-Import und der Kursartanzeige, nun behoben.

<a id="18.05.2015_(Kurs_Version_3.18.28.280,_Noten:_Version_2.7.14.32_)"></a>
<a id="18.05.2015_.28Kurs_Version_3.18.28.280.2C_Noten:_Version_2.7.14.32_.29"></a>

## 18.05.2015 (Kurs Version 3.18.28.280, Noten: Version 2.7.14.32 )

- Fehler bei der Stundenplananzeige beseitigt.
- Beim Direktimport aus LuPO wurden bei neu angelegten Schülern nicht alle Fächer importiert, nun behoben.
- Beim Export nach Schild-NRW wurden unter gewissen Umständen die Fächer nicht exportiert, nun behoben.

<a id="02.04.2015_(Kurs_Version_3.18.24.276,_Noten:_Version_2.7.13.32_)"></a>
<a id="02.04.2015_.28Kurs_Version_3.18.24.276.2C_Noten:_Version_2.7.13.32_.29"></a>

## 02.04.2015 (Kurs Version 3.18.24.276, Noten: Version 2.7.13.32 )

- Der Dialog zur Eingabe des Stundenrasters wurde überarbeitet. Es wird je ein Raster für die geraden und ungeraden Wochen angezeigt. Die Schienen werden in einer Baumansicht links neben den Rastern dargestellt. Stunden werden gesetzt, indem per Drag-And-Drop eine Schiene auf das jeweilige Raster gezogen wird. Bei gleichzeitig gedrückter \<Strg\>:-Taste (oder wenn die Option "Plan gilt jede Woche" gesetzt ist) wird in beiden Rastern gesetzt. Stunden werden gelöscht, indem sie vom Raster zurück auf die zugehörige Schiene gezogen werden.
- Gesamtschulen: Beim Anlegen einer neuen Blockung können optional nur Schüler mit FORQ-Prognose berücksichtigt werden. Voraussetzung: Die Blockung wird für die zukünftige EF angelegt. In diesem Fall erscheint auf der letzten Seite des Dialoges eine Checkbox "Nur Schüler mit FORQ-Prognose laden".
- Bei der Klausurplanung werden jetzt auch Abiturklausuren berücksichtigt. Dazu muss im Dialog "Klausuren-\>Klausurblockung bearbeiten" das Flag "Abiturtermin" gesetzt werden. Damit alte Klausurblockungen angepasst werden können, müssen sie unter "Klausuren-\>Klausurtermin festlegen" neu berechnet werden. In der Datenquelle "Klausurtermine" ist das boolesche Feld "IstAbiturtermin" hinzugekommen.

<a id="04.03.2015_(Kurs_Version_3.18.20.276,_Noten:_Version_2.7.12.32)"></a>
<a id="04.03.2015_.28Kurs_Version_3.18.20.276.2C_Noten:_Version_2.7.12.32.29"></a>

## 04.03.2015 (Kurs Version 3.18.20.276, Noten: Version 2.7.12.32)

- Datenquelle Klausurkurse: 'Raum' wird zu 'Klausurraum'.
- Fehler beim Import von Koop-Fachwahlen behoben.

<a id="25.02.2015_(Kurs_Version_3.18.19.276,_Noten:_Version_2.7.12.32)"></a>
<a id="25.02.2015_.28Kurs_Version_3.18.19.276.2C_Noten:_Version_2.7.12.32.29"></a>

## 25.02.2015 (Kurs Version 3.18.19.276, Noten: Version 2.7.12.32)

- In Reports mit Haupdatenquelle 'Klausurtermine' kann, ähnlich wie bei Kursen und Schülern, eine Filterfunktion aufgerufen werden: Aufruf in 'ReportAfterOpenPipelines' durch 'FilterKlausuren', Zurücksetzen in 'ReportAfterPrint' durch 'ResetKlausurFilter'.
- In Reports, die als Haupdatenquelle 'Klausurschienen' haben, muss (sinnvollerweise in ReportBeforePrint) durch den Aufruf der Funktion 'KlausurterminWaehlen' der gewünschte Termin ausgewählt werden. In ReportAfterPrint muss durch den Aufruf von 'ResetKlausurTermin' die Datenquelle 'Klausurtermine' wieder für alle Termine freigegeben werden.
- Nachträglich in eine existierende Blockung eingefügte Kurse erhalten, wenn sie manuell in das Blockungsraster gesetzt werden, das Stundenraster der Schiene zugewiesen, in die sie gesetzt werden. Im Hauptfenster ist zum lokalen Menü der Baumansicht die Option hinzugekommen, einem Kurs das Stundenraster der übergeordneten Schiene zuweisen zu können.
- Neu: Export der Schülerstundenpläne im XML-Format. (Menüpunkt unter 'Stundenpläne').
- Neu: Export der Klausurtermine im XML-Format. (Menüpunkt unter 'Im/Export-\>Klausuren')
- Überarbeitung der Klausurplanung: Sicherheitsabfrage vor dem Löschen eines Klausurtermins. Falls ein Termin schon festgelegt wurde und nachträglich Kurse verschoben werden, wird der Klausurtemin automatisch aktualisiert.
- Für den Datenaustausch (Im/Export von Textdateien, UNTIS-Im/Export) kann jetzt ein Standardverzeichnis angegeben werden.
- Beim Import der Fachwahlen aus LuPO wird jetzt auch geprüft, ob alle Schüler aus der Blockung in der LuPO-Datei vorhanden sind, d.h. ob in LuPO gelöschte Schüler noch in der Blockung existieren.
- Die persönlichen Einstellungen werden jetzt im Roaming-Verzeichnis des Benutzers gespeichert. Die bisherigen Einstellungen werden automatisch an den neuen Speicherort &uumlbertragen.
- Wichtig: Änderungen in Report-Datenquellen

Datenquelle 'Kursteilnehmer': Feld 'Kursart' wird zu 'IndKursart'

Datenquelle 'Fachwahl': Feld 'Kursart' wird zu 'IndKursart'

Datenquelle 'SchuelerBlockplan': Feld 'Kursart' wird zu 'IndKursart'

Datenquelle 'Schueler': Feld 'FehlStd' wird zu 'GesFehlStd'

Datenquelle 'Schueler': Feld 'Unentsch' wird zu 'GesUnentsch'

- Existierende Reports werden beim Laden automatisch angepasst; Falls das nicht möglich ist, wird im Protokoll eine Hinweismeldung ausgegeben. Der Report muss einmal gespeichert werden, damit die Änderungen erhalten bleiben.
- Beim Export von UNTIS-Kursen kann eine existierende Unterrichtsnummer jetzt auf Wunsch überschrieben werden.
- Der Dialog 'Fachwahlen mit DB abgleichen' wurde überarbeitet.

<a id="16.12.2014_(Kurs_Version_3.18.14.276,_Noten:_Version_2.7.10.32)"></a>
<a id="16.12.2014_.28Kurs_Version_3.18.14.276.2C_Noten:_Version_2.7.10.32.29"></a>

## 16.12.2014 (Kurs Version 3.18.14.276, Noten: Version 2.7.10.32)

- Beim Export einer Koop-Blockung können jetzt die Schüler der Koop-Schulen als Externe in die DB übernommen werden.
- Beim Export der Notendateien kam es zu einer Schutzverletzung, nun behoben.
- Bei fehlender oder unvollständiger Einstellungsdatei gab es unter bestimmten Umständen beim Progrannstart eine Schutzverletzung, nun behoben.

<a id="28.11.2014_(Kurs_Version_3.18.13.276,_Noten:_Version_2.7.9.32)"></a>
<a id="28.11.2014_.28Kurs_Version_3.18.13.276.2C_Noten:_Version_2.7.9.32.29"></a>

## 28.11.2014 (Kurs Version 3.18.13.276, Noten: Version 2.7.9.32)

- In einer Blockungsdatei können jetzt beliebig viele Klausurblockungen verwaltet werden, so dass mehrere Klausurtermine festgelegt werden können. In eine neue Klausurblockung kann eine andere (in erster Linie ein früherer Termin) hineinkopiert werden.
- In der Klausurblockung wird jetzt der Klausurraum und der Aufsichtslehrer mit dem Kursraum und dem Kurslehrer vorbelegt. Im Termindialog kann diese Vorbelegung manuell ausgelöst werden.
- Die Datenpipelines wurden an die neue Situation angepasst.
- Der Import von UNTIS-Blockungen wurde überarbeitet. Insbesondere beim Import der GPU002.TXT (Unterrichte) kann jetzt festgelegt werden, ob der Abgleich über die Unterrichtsnummern oder über Fach, Kursart, Lehrer vorgenommen werden soll. Unter Im/Export-\>Klausuren ist der Export in die Untis-Datei GPU017.TXT hinzugekommen.
- Weiter können ganze Kurse nach erfolgter Blockung als Koop-Kurse deklariert werden (In der Baumansicht des Hauptfensters den Kurs mit der rechten Maustaste anklicken und "Bearbeiten" wählen).
- Kleine Anpassungen am Ausdruck im Klausurtermin-Dialog. (Anregungen von Herrn Maßmann)
- Neue Funktion 'Kalenderwoche' im Reportdesigner.
- Im Terminplanungsdialog kann durch Rechtsklick auf die Liste der Klausurschienen ein Dialog aufgerufen werden, in dem ein Zusatztermin festgelegt sowie die Klausurschiene gelöscht oder das Datum zurückgesetzt werden kann. Die Bezeichnung ist natürlich frei wählbar, allerdings ist es wenig sinnvoll, allen Zusatzterminen die gleiche Bezeichnung zuzuweisen. Damit der Termin auch auf Ausdrucken erscheint, wird ein (mehr oder weniger fiktiver) Kurs eingefügt. Die Anzahl der Zusatztermine ist beliebig. Der eigentliche Termin wird, wie üblich, durch anklicken des Termins und Betätigung des 'Start'-Buttons festgelegt. Die Ergebnisliste bleibt natürlich leer, da der Kurs keine Schüler enthält
- Im Klausurplanungsdialog wurde bisher im Prinzip nur der Inhalt der Ergebnisliste gedruckt. Das wurde jetzt durch ein frei gestaltbares Standardformular (ein Beispiel wird mitgeliefert) ersetzt.

<a id="29.08.2014_(Kurs_Version_3.17.16.275,_Noten:_Version_2.7.8.32)"></a>
<a id="29.08.2014_.28Kurs_Version_3.17.16.275.2C_Noten:_Version_2.7.8.32.29"></a>

## 29.08.2014 (Kurs Version 3.17.16.275, Noten: Version 2.7.8.32)

- In der Klausurterminfestlegung konnte die nullte Stunde nicht mehr ausgewählt werden, nun behoben.
- Sowohl Kurs als auch Noten können jetzt von einem Stick betrieben werden. Dazu ist es notwendig, in der Admin.ini im Programmverzeichnis folgende Einträge vorzunehmen:

\[Administration\]

KursDir=X:\Kurs 42-Arbeitsverzeichnis

NotenDir=X:\Noten 42-Arbeitsverzeichnis

Kursmobil=1

Notenmobil=1

- Das Arbeitsverzeichnis kann beliebig gewählt oder auch weggelassen (dann wird als Arbeitsverzeichnis das Programmverzeichnis verwendet) werden. Der Laufwerksbuchstabe im Pfad des jeweiligen Arbeitsverzeichnisses wird beim Programmstart auf den dem Stick zugewiesenen Laufwerksbuchstaben geändert.

<a id="13.08.2014_(Kurs:_Version_3.17.15.275,_Noten:_Version_2.7.7.32)"></a>
<a id="13.08.2014_.28Kurs:_Version_3.17.15.275.2C_Noten:_Version_2.7.7.32.29"></a>

## 13.08.2014 (Kurs: Version 3.17.15.275, Noten: Version 2.7.7.32)

- Textdatei-Import der Schüler um das Feld "E-Mail" ergänzt. Als Headerzeile wird

<!-- -->

- Name;Vorname;GebDat;Geschlecht;Status;Klasse;Jahrgang;Schulnummer;E-Mail

<!-- -->

- erwartet.

<a id="19.07.2014_(Kurs:_Version_3.17.14.275,_Noten:_Version_2.7.7.32)"></a>
<a id="19.07.2014_.28Kurs:_Version_3.17.14.275.2C_Noten:_Version_2.7.7.32.29"></a>

## 19.07.2014 (Kurs: Version 3.17.14.275, Noten: Version 2.7.7.32)

- Protokollausgabe beim LuPO-Import ergänzt.

<a id="18.05.2014_(Kurs:_Version_3.17.13.275,_Noten:_Version_2.7.7.32)"></a>
<a id="18.05.2014_.28Kurs:_Version_3.17.13.275.2C_Noten:_Version_2.7.7.32.29"></a>

## 18.05.2014 (Kurs: Version 3.17.13.275, Noten: Version 2.7.7.32)

- Speicherleck gefunden und beseitigt.
- Beim Import von UTF 8 - kodierten LuPO-Schnittstellendateien wird ein eventuell vorhandenes BOM (Byte Order Mark) berücksichtigt.
- Import von UNTIS-Schnittstellendateien verbessert.

<a id="10.04.2014_(Kurs:_Version_3.17.9.275,_Noten:_Version_2.7.7.32)"></a>
<a id="10.04.2014_.28Kurs:_Version_3.17.9.275.2C_Noten:_Version_2.7.7.32.29"></a>

## 10.04.2014 (Kurs: Version 3.17.9.275, Noten: Version 2.7.7.32)

- Im Fenster zur Klausurterminfestlegung wurden Anfangs- und Endstunde der Klausur falsch angezeigt, falls die Stundenzählung nicht mit Stunde 1 beginnt, nun behoben.
- Beim Öffnen von Notendateien wurde gelegentlich eine fehlende Notentabelle gemeldet, nun behoben.

<a id="27.03.2014_(Kurs:_Version_3.17.8.275,_Noten:_Version_2.7.4.32)"></a>
<a id="27.03.2014_.28Kurs:_Version_3.17.8.275.2C_Noten:_Version_2.7.4.32.29"></a>

## 27.03.2014 (Kurs: Version 3.17.8.275, Noten: Version 2.7.4.32)

- Untis-Export: Die Schüler-Vornamen können optional in voller Länge exportiert werden.
- Untis-Export: Beim Export der Unterrichtseinheiten kann die Startnummer für die Unterrichtsnummern vorgegeben werden.
- Untis-Export: Beim Kursexport kann optional der Kurslehrer mit exportiert werden.
- Die notwendigen Einstellungen müssen unter 'Extras-\>Einstellungen-\>Im/Export' vorgenommen werden.

<a id="16.03.2014_(Kurs:_Version_3.17.6.275,_Noten:_Version_2.7.3.32)"></a>
<a id="16.03.2014_.28Kurs:_Version_3.17.6.275.2C_Noten:_Version_2.7.3.32.29"></a>

## 16.03.2014 (Kurs: Version 3.17.6.275, Noten: Version 2.7.3.32)

- Fehler beim Direktexport von Gesamtschulblockungen nach LuPO beseitigt.
- Bei der Bestimmung der Schriftlichkeit von Fächern werden jetzt die neu einsetzenden Fremdsprachen berücksichtigt.
- Beim Import von Notendateien kam es zu einem Fehler ("zu wenig Arbeitsspeicher"), nun behoben.

<a id="24.02.2014_(Kurs:_Version_3.17.4.275,_Noten:_Version_2.7.3.32)"></a>
<a id="24.02.2014_.28Kurs:_Version_3.17.4.275.2C_Noten:_Version_2.7.3.32.29"></a>

## 24.02.2014 (Kurs: Version 3.17.4.275, Noten: Version 2.7.3.32)

- Bei der Funktion 'Blockung in der DB löschen' wird jetzt auch die Einstellung der Exportoption (DLL oder interne Routinen) berücksichtigt.
- Im Dialog zur Klausurterminfestlegung wir jetzt beim Start der erste belegte Klausurtermin (falls vorhanden) markiert. Der gleichzeitig auftretende Anzeigefehler wurde ebenfalls beseitigt
- Beim Export der Blockung werden Schüler mit Status 'Extern' in jedem Fall mit exportiert.

<a id="19.02.2014_(Kurs:_Version_3.17.2.275,_Noten:_Version_2.7.3.32)"></a>
<a id="19.02.2014_.28Kurs:_Version_3.17.2.275.2C_Noten:_Version_2.7.3.32.29"></a>

## 19.02.2014 (Kurs: Version 3.17.2.275, Noten: Version 2.7.3.32)

- Kurs 42: Der Klausurplanungsbereich wurde überarbeitet.
- Noten 42: Die (unnötige) Abhängigkeit von SchildUAneu.dll wurde beseitigt
- Das Plugin für die Plananzeige in Schild-NRW wurde überarbeitet, so dass eine Schutzverletzung bei der Plananzeige vermieden wird.

<a id="11.02.2014_(Kurs:_Version_3.17.1.275,_Noten:_Version_2.7.1.32)"></a>
<a id="11.02.2014_.28Kurs:_Version_3.17.1.275.2C_Noten:_Version_2.7.1.32.29"></a>

## 11.02.2014 (Kurs: Version 3.17.1.275, Noten: Version 2.7.1.32)

- Einige Bugs, die im Zuge der Umstellung auf Unicode entstanden, wurden beseitigt.

<a id="05.02.2014_(Kurs:_Version_3.17.0.275,_Noten:_Version_2.7.0.32)"></a>
<a id="05.02.2014_.28Kurs:_Version_3.17.0.275.2C_Noten:_Version_2.7.0.32.29"></a>

## 05.02.2014 (Kurs: Version 3.17.0.275, Noten: Version 2.7.0.32)

- Kurs 42 ist jetzt für die Verwendung von Unicode vorbereitet.

<a id="03.02.2014_(Kurs:_Version_3.16.2.272,_Noten:_Version_2.7.0.32)"></a>
<a id="03.02.2014_.28Kurs:_Version_3.16.2.272.2C_Noten:_Version_2.7.0.32.29"></a>

## 03.02.2014 (Kurs: Version 3.16.2.272, Noten: Version 2.7.0.32)

- In der Schülerauswahl beim Druck können jetzt alle Schüler markiert werden, die keinen Kurs belegt haben. Die Option erscheint durch Anklicken der Schülerliste mit der rechten Maustaste.
- Die Toolbars im Hauptfenster sind jetzt konfigurierbar. Durch Anklicken mit der rechten Maustaste erscheint ein lokales Menü, über das Toolbars ein- und ausgeblendet sowie Aktionen hinzugefügt werden können.

<a id="27.01.2014_(Kurs:_Version_3.16.1.272,_Noten:_Version_2.7.0.32)"></a>
<a id="27.01.2014_.28Kurs:_Version_3.16.1.272.2C_Noten:_Version_2.7.0.32.29"></a>

## 27.01.2014 (Kurs: Version 3.16.1.272, Noten: Version 2.7.0.32)

- Die Kursgrößenvorgaben wurden falsch zugeordnet, nun behoben
- Das Protokollfenster konnte unter gewissen Umständen mehrfach erzeugt werden, nun behoben
- Beim Import von LuPO-Fachwahlen wurden bereits vorhandene Fächer gelegentlich neu erzeugt, nun behoben

<a id="24.01.2014_(Kurs:_Version_3.16.0.272,_Noten:_Version_2.7.0.32)"></a>
<a id="24.01.2014_.28Kurs:_Version_3.16.0.272.2C_Noten:_Version_2.7.0.32.29"></a>

## 24.01.2014 (Kurs: Version 3.16.0.272, Noten: Version 2.7.0.32)

- Kurs 42/Noten 42: Im Noteneingabe-Dialog wird die Spalte der Endnote bei fehlendem Eintrag eingefärbt (Vorgabe: rot). Die Farbe kann unter Extras-\>Einstellungen-\>Farben angepasst werden.
- Kurs 42: Beim Export von UNTIS-Dif-Dateien wird jetzt, falls schon geblockt wurde, in GPU015.TXT die tatsächliche Kursbelegung der Schüler ausgegeben.

<a id="10.12.2013_(Kurs:_Version_3.15.14.271,_Noten:_Version_2.6.33.31)"></a>
<a id="10.12.2013_.28Kurs:_Version_3.15.14.271.2C_Noten:_Version_2.6.33.31.29"></a>

## 10.12.2013 (Kurs: Version 3.15.14.271, Noten: Version 2.6.33.31)

- Fehler in der Fächerbearbeitung beseitigt
- Die Menüstruktur wurde verändert; einige Menüpunkte aus dem "Spezial"-Bereich wurden in logisch sinnvollere Bereiche verlagert.
- Die in der Blockung gespeicherten Fächer können jetzt auch ohne DB-Zugriff bearbeitet werden.
- Das Kursplugin brachte unter gewissen Umständen Schild-NRW zum Absturz, nun behoben.

<a id="04.12.2013_(Kurs:_Version_3.15.12.271,_Noten:_Version_2.6.33.31)"></a>
<a id="04.12.2013_.28Kurs:_Version_3.15.12.271.2C_Noten:_Version_2.6.33.31.29"></a>

## 04.12.2013 (Kurs: Version 3.15.12.271, Noten: Version 2.6.33.31)

- In Kurs 42 und Noten 42 können jetzt auch bei den Teilleistungen Teilnahmevermerke und "Pseudonoten" ("NB", "NE" etc.) verwendet werden.
- Bei der Verwendung von JPEG-Bildern als Logo konnte es zu Fehlern beim Lesen einer Blockung kommen, nun behoben.
- Beim Raumeintrag im Dialog "Kurse bearbeiten" wurde ein falscher Raum übernommen, nun behoben.

<a id="23.11.2013_(Kurs:_Version_3.15.10.271,_Noten:_Version_2.6.32.31)"></a>
<a id="23.11.2013_.28Kurs:_Version_3.15.10.271.2C_Noten:_Version_2.6.32.31.29"></a>

## 23.11.2013 (Kurs: Version 3.15.10.271, Noten: Version 2.6.32.31)

- In Kurs 42 wurde das korrekte Arbeitsverzeichnis nicht gefunden, nun behoben.

<a id="17.11.2013_(Kurs:_Version_3.15.9.271,_Noten:_Version_2.6.32.31)"></a>
<a id="17.11.2013_.28Kurs:_Version_3.15.9.271.2C_Noten:_Version_2.6.32.31.29"></a>

## 17.11.2013 (Kurs: Version 3.15.9.271, Noten: Version 2.6.32.31)

- Noten: Bein Druck von Reports wurde die Datenpipeline nicht korrekt initialisiert; nun behoben.

<a id="17.11.2013_(Kurs:_Version_3.15.9.271,_Noten:_Version_2.6.31.31)"></a>
<a id="17.11.2013_.28Kurs:_Version_3.15.9.271.2C_Noten:_Version_2.6.31.31.29"></a>

## 17.11.2013 (Kurs: Version 3.15.9.271, Noten: Version 2.6.31.31)

- Im Klausurplanungsbereich wurden die Kursgrößen nicht korrekt angezeigt, nun behoben.

<a id="13.11.2013_(Kurs:_Version_3.15.7.271,_Noten:_Version_2.6.31.31)"></a>
<a id="13.11.2013_.28Kurs:_Version_3.15.7.271.2C_Noten:_Version_2.6.31.31.29"></a>

## 13.11.2013 (Kurs: Version 3.15.7.271, Noten: Version 2.6.31.31)

- Beim E-Mail-Versand über MAPI kam es zu einer (unberechtigten) Fehlermeldung, nun behoben.

<a id="17.10.2013_(Kurs:_Version_3.15.6.271,_Noten:_Version_2.6.31.31)"></a>
<a id="17.10.2013_.28Kurs:_Version_3.15.6.271.2C_Noten:_Version_2.6.31.31.29"></a>

## 17.10.2013 (Kurs: Version 3.15.6.271, Noten: Version 2.6.31.31)

- Beim Blocken kam es zu einem Stream-Lesefehler, nun behoben.
- Beim Drucken kam es zu einer Schutzverletzung bei der Verwendung von SimpleGrids, nun behoben.
- Die Übertragung der Systemeinstellungen aus der Registry in die Ini-Datei wurde überarbeitet.
- Die Speicherorte für die Einstellungsdateien sind für
- o Systemeinstellungen: Das in der Datei 'Admin.ini' unter 'AdminDir' eingestellte Verzeichnis. Falls der Eintrag fehlt, wird das Programmverzeichnis verwendet
- o Persönliche Einstellungen: Das Verzeichnis 'Eigene Dokumente' des Benutzers.
- Der Dateiname ist, um Verwechslungen mit der Noten-Einstellungsdatei zu vermeiden, in beiden Fällen 'Kurseinstellungen.ini'.
- Beim Arbeitsverzeichnis (AdminDir=...) ist zu beachten, dass bei einer Server-Installation unbedingt der UNC-Pfad eingetragen werden muss.

<a id="06.10.2013_(Kurs:_Version_3.15.2.271,_Noten:_Version_2.6.31.31)"></a>
<a id="06.10.2013_.28Kurs:_Version_3.15.2.271.2C_Noten:_Version_2.6.31.31.29"></a>

## 06.10.2013 (Kurs: Version 3.15.2.271, Noten: Version 2.6.31.31)

- Der Direktexport nach LuPO wurde überarbeitet, so dass jetzt auch Abwahlen in die LuPO-Datei übertragen werden
- Beim Gruppen-E-Mail-Versand wurde der Betreff nicht korrekt übernommen, nun behoben.
- Der Dialog "Blockung bearbeiten" wurde überarbeitet, so dass jetzt die kompletten Angaben zur Schule (inklusive Logo) nachgeladen werden können. Die Abschnittsbezeichnungen können im Dialog jetzt bearbeitert werden.
- Beim Anlegen einer neuen Blockungsdatei wird das Schullogo mit übernommen.
- In ReadDateTime können jetzt auch Datums- und Zeitwerte als Vorgabe gesetzt werden. Wenn ein Wert nicht initialisiert wird (also gleich Null ist), wird das aktuelle Datum (und Uhrzeit) verwendet.
- Beispiel:
- T1:=StrToDatetime('07:55');
- ReadDateTime('Wiederbeginn des Unterrichts', D, T1, T2, False);
- ...
- Label8.Caption:='Wiederbeginn des Unterrichts: ' + DateToStr(D) + ' um ' + copy(TimeToStr(T1),1,5) + ' Uhr';

<a id="12.09.2013_(Kurs:_Version_3.15.1.270,_Noten:_Version_2.6.31.31)"></a>
<a id="12.09.2013_.28Kurs:_Version_3.15.1.270.2C_Noten:_Version_2.6.31.31.29"></a>

## 12.09.2013 (Kurs: Version 3.15.1.270, Noten: Version 2.6.31.31)

- Alle Einstellungen werden jetzt in Ini-Dateien gespeichert. Über 'Extras-\>Optionen Registry-\>Inifile' können die Einstellungen aus der Registry in die Ini-Dateien übernommen werden.
- Der Im- und Export von Klausurblockungen führte zu Schutzverletzungen, nun behoben.
- Der Im- und Export von Notendateien führte zu Schutzverletzungen, nun behoben.
- Die Kurspläne werden automatisch auf die Klausurkurse übertragen, wenn der Klausurblockungsdialog geschlossen wird. Darüber hinaus gibt es jetzt im Dialog 'Klausurtermine festlegen' eine Schaltfläche 'Kurspläne aktualisieren', die genau diese Funktion auslöst. Damit können Änderungen in der Stundenplanung sofort auf die Klausurkurse übertragen werden.
- Im Dialog 'Kurse bearbeiten' wird nach der Betätigung der Schaltfläche 'Kurspläne initialisieren' ein Warnhinweis ausgegeben und der Vorgang kann abgebrochen werden.

<a id="02.09.2013_(Kurs:_Version_3.15.0.270,_Noten:_Version_2.6.30.31)"></a>
<a id="02.09.2013_.28Kurs:_Version_3.15.0.270.2C_Noten:_Version_2.6.30.31.29"></a>

## 02.09.2013 (Kurs: Version 3.15.0.270, Noten: Version 2.6.30.31)

- Die Klausurblockungen wurden nicht automatisch gespeichert, nun behoben
- Überarbeitung des Stundenplanimportes aus WinPlan.
- Neue Funktionen: Unter 'Im/Export-\>Untis Im/Export' können jetzt sowohl die für den Datenaustausch mit UNTIS notwendigen DIF-Dateien erzeugt als auch eine mit UNTIS erzeugte Blockung eingelesen werden. Von Kurs 42 werden die Dateien
- o gpu002.txt (Unterricht, d.h. Kurse)
- o gpu010.txt (Schüler)
- o gpu015.txt (Fachwahlen)
- exportiert. Beim Import werden die beiden vom UNTIS-Kursmodul erzeugten Dateien
- o gpu015.txt (Fachwahlen)
- o gpu019.txt (Unterrichtsfolge)
- erwartet.
- Im Dialog 'Kurse einrichten (ohne Fachwahl)' wurden Einträge fälschlicherweise mehrfach angelegt, nun behoben.
- Beim Setup wird jetzt nach dem Arbeitsverzeichnis gefragt, in dem die Einstellungen gespeichert werden sollen. Kurs 42 bezieht die Information über dieses Arbeitsverzeichnis aus der Datei Admin.ini, die im Programmverzeichnis erwartet wird. Die Datei ist identisch aufgebaut wie die Admin.ini von Schild-NRW:
- \[Administration\]
- AdminDir=Hier_steht_der_Pfad_zum_Einstellungsverzeichnis
- Wenn Admin.ini nicht existiert oder AdminDir ein Leerstring ist, wird als Verzeichnis für die Einstellungen das Programmverzeichnis verwendet. Bei einem Einsatz im Netzwerk sollte ein UNC-Pfad eingetragen werden.

<a id="24.06.2013_(Kurs:_Version_3.14.3.264,_Noten:_Version_2.6.28.28)"></a>
<a id="24.06.2013_.28Kurs:_Version_3.14.3.264.2C_Noten:_Version_2.6.28.28.29"></a>

## 24.06.2013 (Kurs: Version 3.14.3.264, Noten: Version 2.6.28.28)

- Kurs 42 benötigt als Systemvoraussetzung mindestens Windows XP SP1, d.h. für Windows 3.1, Win95, Win98, Win2000 wird die Lauffähigkeit von Kurs 42 nicht mehr garantiert!
- Wenn alle Kurse gelöscht wurden, kam es beim erneuten Laden der Blockungsdatei zu einem Laufzeitfehler, nun behoben.
- Fachwahlen können jetzt direkt aus LuPO-Dateien importiert bzw. in LuPO-Datein exportiert werden. Die Fachwahlen können nur dann vollständig exportiert werden, wenn alle Fächer in der LuPO-Datei existieren, anderenfalls wird eine Fehlermeldung ausgegeben und die Fachwahl nicht exportiert.
- Im Umwahldialog können jetzt die Schüler, die keinen bzw. mindestens einen Kurs in einer bestimmten Schiene belegt haben, farbig markiert werden:
- o \<Strg\>\<Linke Maustaste\>in die erste Spalte des Kursgitters zeigt die Schüler, die keinen Kurs in der Schiene belegt haben.
- o \<Umsch\>\<Linke Maustaste\>in die erste Spalte des Kursgitters zeigt die Schüler, die mindestens einen Kurs in der Schiene belegt haben.
- Die Markierung bleibt erhalten, solange die Maustaste gedrückt ist.
- Beim Blocken merkt sich Kurs jetzt auch Zwischenergebnisse, die in einer Liste im Blockungsdialog angezeigt werden. Durch Anklicken eines Eintrages wird das Ergebnis in das Blockungsraster übernommen. Die Zwischenergebnisse können gespeichert und wieder geladen werden. Die Zwischenergebnis-Dateien sind immer an die Blockungsdatei gebunden und werden entsprechend benannt. Zu der Blockung 'Abi_2015_Versuch_1.blo' gehören dann die Ergebnisdateien 'Abi_2015_Versuch_1_0.blerg', 'Abi_2015_Versuch_1_1.blerg'...'Abi_2015_Versuch_1_4711.blerg'.
- Falls in einer bereits geblockten Datei erneut die Fachwahleingabe geöffnet wurde, konnten eingegebene Noten verloren gehen, nun behoben.
- Im Umwahldialog bleibt beim Setzen nicht verteilter Schüler der zuletzt gewählte Schüler selektiert.
- Wenn im Dialog 'Bearbeiten-\>Blockung bearbeiten' das Schuljahr bzw. der Schuljahresabschnitt erhöht wird, wird die Blockung komplett in den neuen Abschnitt übertragen.
- Die systemweiten Einstellungen werden jetzt im Verzeichnis users\public\documents in der Datei 'einstellungen.ini' gespeichert. Vorhandene Einstellungen werden an diesen Ort übertragen.

<a id="08.03.2013_(Kurs:_Version_3.12.27.261,_Noten:_Version_2.6.28.28)"></a>
<a id="08.03.2013_.28Kurs:_Version_3.12.27.261.2C_Noten:_Version_2.6.28.28.29"></a>

## 08.03.2013 (Kurs: Version 3.12.27.261, Noten: Version 2.6.28.28)

- In Kurs 42 konnte es beim Laden von Blockungen, die eine PNG-Graphik eingebunden hatten, zu einem Ladefehler kommen, nun behoben.

<a id="05.03.2013_(Kurs:_Version_3.12.26.261,_Noten:_Version_2.6.28.28)"></a>
<a id="05.03.2013_.28Kurs:_Version_3.12.26.261.2C_Noten:_Version_2.6.28.28.29"></a>

## 05.03.2013 (Kurs: Version 3.12.26.261, Noten: Version 2.6.28.28)

- Kleinere Anpassungsarbeiten und Bugfixes

<a id="01.02.2013_(Kurs:_Version_3.12.20.260,_Noten:_Version_2.6.28.28)"></a>
<a id="01.02.2013_.28Kurs:_Version_3.12.20.260.2C_Noten:_Version_2.6.28.28.29"></a>

## 01.02.2013 (Kurs: Version 3.12.20.260, Noten: Version 2.6.28.28)

- E-Mail-Versand (Gruppen-E-Mails) überarbeitet. Der Versand funktioniert jetzt mit Mapi (Standard-Mailclient) und Indy (direkter Versand)
- Fehler in der Noteneingabe (Plausibilitätsprüfung der Fehlstunden) beseitigt..

<a id="17.01.2013_(Kurs:_Version_3.12.18.260,_Noten:_Version_2.6.26.27)"></a>
<a id="17.01.2013_.28Kurs:_Version_3.12.18.260.2C_Noten:_Version_2.6.26.27.29"></a>

## 17.01.2013 (Kurs: Version 3.12.18.260, Noten: Version 2.6.26.27)

- Problem beim Export der Teilleistungen beseitigt.
- Problem im Bereich der Klausurblockungen beseitigt.
- Neue Funktion (Extras-\>Backup wiederherstellen): Hiermit kann eine der automatisch erzeugten Backup-Kopien wiederhergestellt werden.

<a id="07.12.2012_(Kurs:_Version_3.12.15.260,_Noten:_Version_2.6.26.27)"></a>
<a id="07.12.2012_.28Kurs:_Version_3.12.15.260.2C_Noten:_Version_2.6.26.27.29"></a>

## 07.12.2012 (Kurs: Version 3.12.15.260, Noten: Version 2.6.26.27)

- Die Klausurplanung wurde in vielen Details überarbeitet.
- in Kurs 42 wurde der Export der Klausur- und SoMi-Noten implementiert. Dieser Export funktioniert zur Zeit nur, wenn unter Extras-\>Einstellungen-\>Verschiedenes die Option 'Export mit internen Routinen' aktiviert ist. Damit der Export alter Blockungsdateien funktioniert, muss vor einem Export zunächst die Lehrertabelle aktualisiert werden: Bearbeiten-\>Lehrerliste bearbeiten-\>Lehrer aus DB laden, Änderungen übernehmen. Nach dem Export sollte die Blockung unbedingt gespeichert werden, weil in der Blockung Informationen gespeichert werden, die für eine eventuelle spätere Aktualisierung nötig sind. Der Export funktioniert logischerweise erst mit einer Schild-Version \>= 2.0.2.5.
- Beim Versand der Notendateien per Email wird, falls im Anwendungsverzeichnis des Benutzers (Users\Benutzername\Appdata\Roaming\Kurs 42) die Datei 'NotenBegleitText.txt' gefunden wird, der Inhalt dieser Datei als Mailbody verwendet.
- Die Systemverzeichnisse können über Hilfe-\>Systemverzeichnisse angezeigt und mit dem Windows-Explorer auch direkt angesteuert werden.
- Das Auswahlmenü für den Druck wurde verändert, so dass neben den drei Optionen 'Vorschau', 'Drucker' und 'Email' jetzt 'Report-Vorgabe' angeboten wird, so dass das Ausgabemedium gewählt werden kann, das in den Report-Eigenschaften als 'Devicetype' eingegtragen ist.

<a id="18.09.2012_(Kurs:_Version_3.11.27.258,_Noten:_Version_2.6.23.27)"></a>
<a id="18.09.2012_.28Kurs:_Version_3.11.27.258.2C_Noten:_Version_2.6.23.27.29"></a>

## 18.09.2012 (Kurs: Version 3.11.27.258, Noten: Version 2.6.23.27)

- Bei älteren Reports funktionierte die Vorschauansicht im Designer nicht, nun behoben. Grund war, dass die Eigenschaft Report.Previewformsettings.SinglePageOnly nicht gesetzt war. Das wird nun beim Laden eines Reports vom Programm korrigiert.
- Im Klausurblockungsdialog werden im Blockungsbaum, wenn bei gedrückter 'Strg'-Taste ein Kurs angeklickt wird, alle Kurse mit gleichem Fach und Lehrer farbig (hellblau) unterlegt.
- Im Klausurblockungsdialog werden bei den Kursen auch die Lehrer angezeigt
- Im Im Klausurplanungsdialog wurde die Anzeige des Stundenplanes verbessert. Ein Mausklick auf ein nicht leeres Stundenfeld zeigt die betroffenen Kurse.
- In der Datenquelle 'Individualplan1' sind die Felder G_KursartInd und U_KursartInd hinzugekommen, die die individuelle Kursart des Schülers enthalten.
- Im Klausur-Planungsdialog wird jetzt die Gültigkeit des Planes richtig berücksichtigt. Die Plandarstellung kann zwischen gerader- und ungerader Woche umgeschaltet werden.
- Im 'Sichern als' - Dialog für Blockungsdateien wird als Dateiname jetzt der Blockungsname vorgeschlagen. Analoges gilt für den Reportexplorer.
- Einige Datenquellen wurden nicht richtig initialisiert, nun behoben.
- Beim Laden von Formularen, die die Komponente 'TSimpleGrid' verwendeten, kam es zu einer Fehlermeldung, nun behoben.
- Die Datenquellen für die Ausdrucke der Klausurtermine wurden nicht korrekt initialisiert, nun behoben.
- Der Klausurplanungsdialog zeigt nun die Pläne für gerade und ungerade Wochen nebeneinander.
- Bei Umwahlen werden jetzt auch die Klausurblockungen aktualisiert.
- Beim Laden von Klausurblockungen kam es zu Fehlern, nun behoben, ebenso die Nichtübereinstimmung der Dateinamensendung (KLB bzw. KBL)
- Der Druck der Ergebnisse der Klausur-Terminsuche erfolgt jetzt in einem (sehr einfachen) Report.
- Beim Druck war im Druckdialog immer die Option "Archivdruck" mit Ausgabegerät "PDF" gesetzt. Bei einem neuen Report wird diese Option weiterhin defaultmäßig gesetzt, kan aber durch Veränderung der ernsprechenden Option im Report später deaktiviert werden.
- Das Drag-And-Drop-Verhalten des Formularexplorers wurde erweitert, so dass jetzt Dateien auch (z.B.) in den Windows-Explorer gezogen werden können. Der umgekehrte Weg funktionierte schon immer,
- Die Aufsichtsbelegung wurde dahingehend verändert, dass der Kurslehrer bei der Festlegung der Klausurtermine nur dann als Aufsichtslehrer eingetragen wird, wenn er am Klausurtermin in den betroffenen Stunden tatsächlich Unterricht im Kurs hat, anderenfalls steht dort nur '=='. Die freien Aufsichten müssen dann natürlich im Termindialog oder extern festgelegt werden.
- Der Dialog 'Fächer bearbeiten' wurde modifiziert, so dass, wenn Fächer von der linken Seite (Schild-NRW) nach rechts (Blockung) gezogen werden, geprüft wird, ob es bereits ein Fach mit gleicher ID-Nummer in der Blockung gibt. Nach Rückfrage kann das existierende Fach (Kürzel, Bezeichnung, Fachgruppe) überschrieben werden.

<a id="21.07.2012_(Kurs:_Version_3.11.16.258,_Noten:_Version_2.6.23.27)"></a>
<a id="21.07.2012_.28Kurs:_Version_3.11.16.258.2C_Noten:_Version_2.6.23.27.29"></a>

## 21.07.2012 (Kurs: Version 3.11.16.258, Noten: Version 2.6.23.27)

- Der Datei-Öffnungsdialog für Unterberichte berücksichtigt jetzt auch die neue Dateiendung '\*.rtk'.
- Beim E-Mail-Versand kann jetzt (Extras-\>Einstellungen-\>E-Mail) zwischen internen Routinen und dem Versand über den Standard-E-Mail-Client gewählt werden.
- Beim wiederholten Export von Blockungen kam es zu Schutzverletzungen, nun behoben.

<a id="17.06.2012_(Kurs:_Version_3.11.11.258,_Noten:_Version_2.6.23.27)"></a>
<a id="17.06.2012_.28Kurs:_Version_3.11.11.258.2C_Noten:_Version_2.6.23.27.29"></a>

## 17.06.2012 (Kurs: Version 3.11.11.258, Noten: Version 2.6.23.27)

- Der Notenimport wurde überarbeitet. "Umwahlen" (Änderung der Kursart) finden nicht mehr (oder nur auf Wusch) statt.
- Der Speicherort für die Einstellungen (bei der Speicherung in Ini-Dateien) wurde geändert. Die persönlichen Einstellungen speichert Kurs 42 jetzt in c:\Users\BenutzerLoginName\AppData\Roaming\Kurs 42\Einstellungen.ini und die globalen Einstellungen in c:\ProgramData\Kurs 42\Einstellungen.ini. Die bisherigen Einstellungen können durch umkopieren der bisherigen Ini-Dateien in diese Verzeichnisse (und Umbenennung) übernommen werden.

<a id="03.05.2012_(Kurs:_Version_3.11.8.258,_Noten:_Version_2.6.23.27)"></a>
<a id="03.05.2012_.28Kurs:_Version_3.11.8.258.2C_Noten:_Version_2.6.23.27.29"></a>

## 03.05.2012 (Kurs: Version 3.11.8.258, Noten: Version 2.6.23.27)

- Beim Import der von LuPO erzeugten Leistungsdaten kam es zu einem Fehler, nun behoben.

---

Quelle: [Kurs42:Versionsgeschichte – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Kurs42%3AVersionsgeschichte&oldid=6010)
