---
title: "S1Plan erstmals starten"
---

# S1Plan erstmals starten

Nach der Erstinstallation erscheint beim Programmstart zunächst ein Hinweis-fenster für die Ersteinrichtung des Programms:

![S1P-001-Ersteinrichtung](/bilder/tools/s1plan/s1p-001-ersteinrichtung.jpg)

Nach Klick auf „OK“ ist im Fenster mit der Zugangskontrolle der Benutzerna-men „S1PAdmin“ und das Passwort „SchILD-NRW 2“ einzugeben. Schließen Sie dieses Fenster mit Klick auf „Anmelden“. Wählen Sie danach das Schuljahr (zum Beispiel 2016, Lernabschnitt 1 für 1. Halbjahr im Schuljahr 2016/17). Im nächsten Fenster wird darauf hingewiesen, dass noch keine Verbindung zur SchILD-NRW 2-Datenbank hergestellt ist.

Dies geschieht im nächsten Fenster

![S1P-002-Zugriffskonfiguration](/bilder/tools/s1plan/s1p-002-zugriffskonfiguration.jpg)

Den SchILD-NRW 2-Zugriff können Sie über

![S1P-003-Schild-Zugriff](/bilder/tools/s1plan/s1p-003-schild-zugriff.jpg)

und Auswahl der zugehörigen Datenbank

![S1P-004-Auswahl_DB](/bilder/tools/s1plan/s1p-004-auswahl-db.jpg)

steuern.

Wenn im oberen Fenster „SchILD-NRW 2 UDL-Datei(\*.UDL) gewählt wurde, kann im unteren Fenster die entsprechende UDL-Datei ausgewählt werden. Beach-ten Sie dabei, dass bei Verwendung der SchILD-NRW 2-Standarddatenbank (schild2000n.mdb) der Zugriff über die MDB-Datei erfolgen muss, weil zur SchILD-NRW 2-Standarddatenbank keine UDL-Datei existiert.

Über ![S1P-005-Verbindung_testen](/bilder/tools/s1plan/s1p-005-verbindung-testen.jpg) erkennt man, ob die Verbindung erfolgreich ist.

Es empfiehlt sich, im folgenden Fenster

![S1P-006-Zugriffsinfo](/bilder/tools/s1plan/s1p-006-zugriffsinfo.jpg)

Direkt die Stammdaten abzugleichen. Dies wird nach kurzer Zeit vom Pro-gramm bestätigt.

Verlassen Sie das SchILD-NRW 2-Zugriffs-Fenster durch Klick auf ![S1P-007-speichern](/bilder/tools/s1plan/s1p-007-speichern.jpg).

Als nächstes können ein oder mehrere Kursprofile festgelegt werden.

Im folgenden Beispiel wurde ein Kursprofil für den Jahrgang 08 und den Kurs-arten AGGT, PUT, WPI und WPII ausgewählt. Die Benutzer BN1 und BN2 (siehe oberes Bild zur SchILD-NRW 2-Zugriffskonfiguration) dürfen dieses Profil verwenden und bearbeiten:

![S1P-008-Kursprofil festlegen](/bilder/tools/s1plan/s1p-008-kursprofil-festlegen.jpg)

Hier wurde „Wunschspalten“ nicht angeklickt, weil im Bereich WPI Schüler-wünsche nicht zugelassen sein sollten. Das Profil wird zweckmäßig in einem Unterordner „Profile“ von S1Plan ge-speichert. Als sinnvoller Name bietet sich „06-WPI-WPII-AG-PUT“ an. Als Namensendung wird automatisch „.kpp“ vergeben.

Durch Klick auf ![S1P-009-wählen](/bilder/tools/s1plan/s1p-009-wahlen.jpg) wird das Programm (mit zunächst leeren Fens-tern) gestartet:

![S1P-011-Übersicht](/bilder/tools/s1plan/s1p-011-ubersicht.jpg)

:::info
Falls Beim Klicken auf die obere Menüleiste die ersten Zeilen in den darunter liegenden Fenstern überdeckt werden sollten, wird durch Klick auf das rechts oben stehende Symbol ![S1P-010-Aufklappsymbol](/bilder/tools/s1plan/s1p-010-aufklappsymbol.jpg) die Fensteranordnung korrekt eingestellt.
:::

[Weiter zu Einrichtung von Kursen](/hilfe/zusatzprogramme/s1plan-einrichtung-von-kursen)

Quelle: [S1PLAN:Erster Programmstart – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=S1PLAN%3AErster+Programmstart&oldid=4028)

## Datenbankzugriff und Ersteinrichtung

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 7–12](https://www.svws.nrw.de/system/files/media/document/file/s1plan_anleitung.pdf#page=7).

Installation

5. Führen Sie einen Stammdatenabgleich aus (Lehrkräfte / Schüler / Fä-

cher etc.).

6. Legen Sie das Kursprofil fest (Kursart(en) / Jahrgang bzw. Jahrgän-

ge).

(z.B. "AGGT / alle" : Verwaltung der Arbeitsgemeinschaften für alle

Jahrgänge)

7. Importieren Sie bereits gespeicherte Daten aus SchILD (optional).

Wenn in SchILD-NRW bereits Kursdaten eingegeben sein sollten,

so rufen Sie den Menüpunkt:

### Abgleich: Kurse / SchILD-Kurse (Alt+A)

auf und klicken auf "SchILD-Import"

Hinweis:

Erst wenn die Ersteinrichtung abgeschlossen ist, erfolgt der eigentliche Pro-

grammstart.

S1Plan speichert Daten in einer SQLite-Datenbank (*.S1PDB) ab.

Geben Sie nach Klick auf „Weiter“ ggf. Benutzerinformationen an und klicken Sie wie-

derum auf „Weiter“.

Im folgenden Fenster finden Sie eine voreingestellte Pfadangabe zum Installationsort

des Programms. Ändern Sie ggf. den Pfad nach Ihren Programmeinstellungen zu

SchILD-NRW ab. Auf jeden Fall sollte S1Plan in einem Unterordner von SchILD-NRW

installiert werden.

Klicken Sie danach auf „Weiter“ und führen Sie die Installation zu Ende.

### 3.2 Erster Programmstart

Nach der Erstinstallation erscheint beim Programmstart zunächst ein Hinweisfenster für

die Ersteinrichtung des Programms:

Erster Programmstart

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 8](/bilder/pdf-anleitungen/s1plan/seite-08-bild-01.png)

Nach Klick auf „OK“ sind im Fenster mit der Zugangskontrolle der Benutzernamen

„S1PAdmin“ und das Passwort „schild“ einzugeben. Schließen Sie dieses Fenster mit

Klick auf „Anmelden“.

Wählen Sie danach das Schuljahr (z.B. 2016, Lernabschnitt 1 für 1. Halbjahr im Schul-

jahr 2016/17).

Im nächsten Fenster wird darauf hingewiesen, dass noch keine Verbindung zur

SchILD-Datenbank hergestellt ist. Dies geschieht im nächsten Fenster

Erster Programmstart

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/s1plan/seite-09-bild-01.png)

Den Schild-Zugriff können Sie über

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/s1plan/seite-09-bild-02.png)

und Auswahl der zugehörigen Datenbank

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/s1plan/seite-09-bild-03.png)

steuern.

Wenn im oberen Fenster „SchILDNRW UDL-Datei(*.UDL) gewählt wurde, kann im un-

teren Fenster die entsprechende UDL-Datei ausgewählt werden. Beachten Sie dabei,

dass bei Verwendung der Schild-Standarddatenbank (schild2000n.mdb) der Zugriff

über die MDB-Datei erfolgen muss, weil zur Schild-Standarddatenbank keine UDL-Da-

tei existiert.

Erster Programmstart

Über erkennt man, ob die Verbindung erfolgreich ist. Es empfiehlt sich,

im folgenden Fenster

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/s1plan/seite-10-bild-02.png)

direkt die Stammdaten abzugleichen. Dies wird nach kurzer Zeit vom Programm bestä-

tigt.

Verlassen Sie das SchILD-Zugriffs-Fenster durch Klick auf

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/s1plan/seite-10-bild-03.png)

.

Als Nächstes können ein oder mehrere Kursprofile festgelegt werden.

Im folgenden Beispiel wurde ein Kursprofil für den Jahrgang 08 mit Kursarten

AGGT, PUT, WPI und WPII ausgewählt. Die Benutzer BN1 und BN2 (siehe oberes Bild

zur SchILD-Zugriffskonfiguration) dürfen dieses Profil verwenden und bearbeiten:

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/s1plan/seite-10-bild-05.png)

Erster Programmstart

Hier wurde „Wunschspalten“ nicht angeklickt, weil im Bereich WPI Schülerwünsche

nicht zugelassen sein sollten.

Das Profil wird zweckmäßig in einem Unterordner „Profile“ von S1Plan gespeichert.

Als sinnvoller Name bietet sich „06-WPI-WPII-AG-PUT“ an. Als Namensendung wird

automatisch „.kpp“ vergeben.

Durch Klick auf

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/s1plan/seite-11-bild-01.png)

wird das Programm (mit zunächst leeren Fenstern) gestartet:

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/s1plan/seite-11-bild-02.png)

Hinweis:

Falls beim Klicken auf die obere Menüleiste die ersten Zeilen in den darun-

ter liegenden Fenstern überdeckt werden sollten, wird durch Klick auf das

rechts oben stehende Symbol die Fensteranordnung korrekt eingestellt.

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/s1plan/seite-11-bild-04.png)

Erster Programmstart

![3.2 Erster Programmstart – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/s1plan/seite-12-bild-01.png)
