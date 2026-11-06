---
title: "PM2 installieren"
---

# PM2 installieren

**Installation**\
Die erforderlichen Dateien finden sich auf der Seite "Schulverwaltung NRW": <https://www.svws.nrw.de/download/schild-tools>. Dabei gibt es die Möglichkeiten ein ausführbares Setup-Programm auszuwählen, oder aber ein ZIP-Archiv mit allen aktuellen Programmdateien. Weiterhin können Sie zwei pdf-Dokumente einsehen:

Versionshinweise
Dieses Dokument enthält neben Hinweisen zur Installation, Support auch die Versionshistorie

Bedienungsanleitung
Ausführliche Anleitung

An dieser Stelle soll die Vorgehensweise für das Setup-Programm erläutert werden.

Nach dem Ausführen der Datei PM2-Setup_1_4_6_0.exe mittels Doppelklick erscheint folgendes Fenster:

![PM2_Setup_01](/bilder/tools/pm2/pm2-setup-01.png)

**Information**

In diesem Fenster finden sich Installationshinweise, Informationen zum Support sowie die Versionsgeschichte des Programms. Nach Klick auf "Weiter" erscheint das nächste Bild.

![PM2_Setup_02](/bilder/tools/pm2/pm2-setup-02.png)

**Benutzerinformation**\
Hier können Angaben zum Benutzer und der Organisation eingetragen werden. Die Eingabe der Daten wird mit einem Klick auf "Weiter" bestätigt.

![PM2_Setup_03](/bilder/tools/pm2/pm2-setup-03.png)

**Ziel-Ordner wählen**\
Standard ist die Installation in einem Unterorder "PM2" des SchILD-NRW 2-Ordners. Wenn ein anderer Ordner verwendet werden soll, muss sichergestellt sein, dass entsprechende Schreibrechte vorhanden sind. Das Programm erkennt, ob der Ordner bereits vorhanden ist und bittet um die Bestätigung, dass der Ordner dennoch verwendet werden soll. Wiederum werden die Eingaben mit Klick auf "Weiter" bestätigt.

![PM2_Setup_04](/bilder/tools/pm2/pm2-setup-04.png)

**Startmenü-Ordner wählen**\
Standard ist die Einrichtung eines eigenen Ordners "PM2" im Start-Menü. Die Einbindung in einen bestehenden Ordner (zum Beispiel SchILD-NRW 2) ist ebenfalls möglich. Bestätigung erfolgt durch Klick auf "Weiter".

![PM2_Setup_05](/bilder/tools/pm2/pm2-setup-05.png)

**Zusätzliche Aufgaben auswählen**\
Optional gibt es die Möglichkeiten, für Prognos ein Desktop-Symbol zu erstellen und/oder ein Symbol in der Schnellstartleiste. Der Klick auf "Weiter" führt dann zum vorletzten Bild.

![PM2_Setup_06](/bilder/tools/pm2/pm2-setup-06.png)

**Bereit zur Installation**\
Die unter den Punkten "Benutzerinformation", "Ziel-Ordner" und "Startmenü-Ordner" erfassten Eingaben werden angezeigt. Mittels Klick auf "Zurück" können diese geändert werden. Die Installation erfolgt mittels Klick auf "Installieren".

![PM2_Setup_07](/bilder/tools/pm2/pm2-setup-07.png)

**Ende der Installation**\
Zum Abschluss meldet Prognos die erfolgreiche Installation und bietet gleichzeitig die Möglichkeit, das Programm nach dem Fertigstellen sofort zu starten.

Quelle: [Prognos:Installation – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Prognos%3AInstallation&oldid=5511)

## Installationshinweise aus der Versionsdokumentation

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 1–2](https://www.svws.nrw.de/system/files/media/document/file/pm2_versionsgeschichte.pdf#page=1).

Dieser Abschnitt gibt die Hinweise der dokumentierten Programmausgabe wieder.

### SchILD-Zusatzmodul PM2

### Prognoseberechnungen für SchILD-NRW

### 1. Installationshinweise

- SchILD-NRW
- Laden Sie das Installationspaket aus dem Internet herunter und speichern die Datei PM2-Setup.exe in ein leeres Unterverzeichnis (z.B. c:\\temp). - Führen Sie die Datei PM2-Setup.exe aus (z.B. durch "Doppelklicken"). - Nach der Installation und dem ersten Programmstart werden Sie nach Benutzerdaten gefragt. Diese sind:
- Benutzername: PM2Admin
- Passwort: schild - Erstkonfiguration 1. Geben Sie die sonstigen Einstellungen ein (Einstellungen werden benutzerspezifisch gespeichert). 2. Konfigurieren Sie den SchILD-Zugriff und testen Sie die Verbindung.

Erst wenn die Ersteinrichtung abgeschlossen ist, erfolgt der eigentliche Programmstart.

- SchILDZentral
- Installation durch den zuständigen IT-Dienstleister der Schule
- Laden Sie das Zip-Archiv (PM2 -Setup.zip) mit den neuesten Dateien aus dem Internet herunter und entpacken Sie das Paket.
- Kopieren Sie die ausführbare Datei PM2.exe in das Systemverzeichnis von SchILDzentral.
- Kopieren Sie alle Dateien aus dem Ordner „\\Vorlagen\\“ des Zip-Archivs in den Ordner „\\Vorlagen\\“ von SchILDzentral.
- Kopieren Sie alle Dateien aus dem Ordner „\\Reports\\“ des Zip-Archivs in den Ordner „\\Vorlagen\\Reports\\PM2“ von SchILDzentral.
- PM2.exe kann nicht direkt aus dem SchILDzentral-Systemordner aufgerufen werden, sondern nur aus der SchILDzentral-Anwendung heraus!

### 2. Support

- Die Internetpräsenz dieser Anwendung finden Sie auf den Schulverwaltungsseiten NRW: Hier finden Sie neben aktuellen Hinweisen auch Downloadmöglichkeiten für Programminstallationen und notwendige Updates - Sie sollten regelmäßig - nicht nur bei Fragen oder Hinweisen - das Anwenderforum aufsuchen. - Diese Anwendung ist Teil des Supportkonzeptes des MSB. D.h. Jeder Schule ist ein Fachberater zugeordnet, der bei speziellen, insbesondere technischen Problemen, die sich nicht durch Nutzung der Online-Hilfen lösen lassen, für Ihre Fragen zur Verfügung steht. Sie finden Ihren persönlichen Fachberater, wenn Sie diesen Link anklicken und auf der Seite einfach Ihre Schulnummer eingeben. - Die Anwendung unterstützt die Fernwartungsmöglichkeiten von „Schulverwaltung NRW“.

### 3. Versionsänderungen:

1.8.3.0 - Release: 26.05.2025 als Beta-Version - APO-SI 20: FLD in Biologie ist möglich - Fehlerkorrekturen - Konsolidierung des UI 1.8.2.0 - Release: 26.01.2024 als Beta-Version - Fehlerkorrekturen (z.B.: Berücksichtigung von Ersatzfächern) - Konsolidierung des UI 1.8.1.0 - Release: 20.12.2024 als Beta-Version - Fehlerkorrekturen - Konsolidierung des UI

1.8.0.0 - Release: 13.10.2024 - Fehlerkorrekturen - Konsolidierung des UI 1.7.8.51 - Release: 24.01.2024 - Korrektur zweier Fehler-Hinweise aus dem SchILD-Forum:

- https://schulverwaltungsinfos.nrw.de/svws/forum/viewtopic.php?t=6366
- https://schulverwaltungsinfos.nrw.de/svws/forum/viewtopic.php?t=6338 1.7.8.4 - Release: 17.01.2024 - Neue Spalte „SchILD“ am rechten Rand in der Klassenansicht: Hier wird immer die Prognose / der Abschluss ausgegeben, wie er zurzeit in der SchILD-Datenbank gespeichert ist. Hierdurch können Veränderungen besser hervorgehoben werden. - Berücksichtigung von Fehlerhinweisen aus dem SchILD-Forum 1.7.8.3 - Release: 14.01.2024 - Berücksichtigung von Fehlerhinweisen und Wünschen aus dem SchILD-Forum - Beseitigung eines Fehlers beim Speichern von Prognosen/Abschlüssen in der SchILD-DB - Beseitigung sonstiger kleiner Fehler 1.7.8.2 - Release: 07.01.2024 - Fehlerbeseitigung 1.7.8.0 - Release: 07.12.2023 - Ein Fehler bei der Neuanmeldung eines Benutzers wurde beseitigt. Die Benutzerrolle dieses neu angemeldeten Users wurde nicht richtig initialisiert. - Ein Fehler bei der Speicherung von Datensatzänderungen wurde beseitigt. So wurde ein Benutzer beim Klassenwechsel oder beim Wechsel der Notendatei nicht gefragt, ob Änderungen an der aktuellen Notendatei zuvor gespeichert werden sollen. - Sonstige kleinere Fehler wurden korrigiert. 1.7.7.0 (als Beta-Version) - Release: 06.11.2023 - Die Vorprüfungen bei der Abschlussberechnung wurden überarbeitet. So wird z.B. eine fehlende FLD in D oder CH/PH erst im 2. Halbjahr angemahnt. - Fehler beim Speichern / Öffnen von passwortgeschützten PM2-Notendateien beseitigt. - Erweiterte Abteilungsverwaltung: siehe PM2-Rollenkonzept - Die Rolle des Benutzers „PM2Admin“ wird im User-Interface deutlicher hervorgehoben. - Die Prognoseberechnung von Schülern des 10. Jahrganges hat als Mindestergebnis nicht mehr „OA“, sondern „ESA“ (siehe APO-SI 05 §40 (3))

1.7.5.0 (als Beta-Version)

- Release: 26.10.2023 - Der Dialog zum Auswählen eines Lernabschnitts wurde geändert: „Schuljahr“ und „Abschnitt“ sind keine „Spin- Edit-Controls“ mehr, sondern zeigen nur noch den gewählten Lernabschnitt an. Gewählt wird der Lernabschnitt über den neuen Button „Lernabschnitt“. PM2 überprüft zunächst die Rolle, die der in PM2 angemeldete SchILD-Benutzer inne hat: Admin, SL, sSL, AL, KL oder sKL und zeigt nur die Lernabschnitte an, in denen der SchILD-Benutzer „eine Rolle spielt“ oder in der Vergangenheit gespielt hat. Sollte ein SchILD-Benutzer in einem Lernabschnitt keine Rolle spielen, wird dieser Lernabschnitt gar nicht erst zur Anzeige gebracht, z.B. eine neu eine angestellte Lehrkraft. Spielt die Lehrkraft in keinem SchILD-Lernabschnitt eine Rolle, so ist für diese Lehrkraft nur noch die Bearbeitung von PM2- Notendateien oder die Einzelanalyse möglich, jedoch keine Bearbeitung von SchILD-Klassen. Nach der Auswahl eines Lernabschnitts, wird eine Klassenauswahl angezeigt. Es werden jedoch nur die Klassen angezeigt, in denen die Lehrkraft zumindest ein Leserecht auf Grund ihrer Funktionalität besitzt.
