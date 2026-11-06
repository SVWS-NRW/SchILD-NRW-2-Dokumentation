---
title: "Das Konferenzmodul KM2 kennenlernen"
---

# Das Konferenzmodul KM2 kennenlernen

![Km2-logo](/bilder/tools/km2/km2-logo.png)

## Vorbemerkung

![KM2_LeistungsUebersicht_Bsp_01](/bilder/tools/km2/km2-leistungsuebersicht-bsp-01.png)

- **KM²** ist eine Erweiterung von SchILD-NRW 2 und findet seinen Einsatz bei der Durchführung von Notenkonferenzen.
- Das Konferenzmodul **KM²** ist ein eigenständiges Programm und kann getrennt von SchILD-NRW 2 gestartet werden, es wird keinerlei Installation benötigt, lediglich ein Zugriff auf die Datenbank muss existieren. Gleichwohl wird auch ein Grundinstallationspaket verfügbar sein.
- **KM²** listet alle Leistungsdaten einer Lerngruppe in tabellarischer Form auf.
- Die Anordnung der Leistungsdaten ist für den Benutzer frei wählbar.
- Einzelne Schülerdaten können mit Hilfe einer **Lupenfunktion** besonders hervorgehoben werden.

![KM2_SchuelerLupe_Bsp_01](/bilder/tools/km2/km2-schuelerlupe-bsp-01.png)

- Leistungsdatenänderungen können direkt in die SchILD-NRW 2-Datenbank zurückgeschrieben werden, wobei diese Änderungen gesondert protokolliert werden.
- **KM²** implementiert ein zusätzliches Verfahren

<!-- -->

- zur Verwaltung von Bemerkungen zum "**Arbeits- und Sozialverhalten**".
- zur Verwaltung von **fachbezogenen Kompetenzen**.

## Videoanleitungen

Für die Installation und die ersten Schritte gibt es drei kurze Videoanleitungen:\

- [Installation des Programms](http://www.svws.nrw.de/uploads/media/videos/installation.swf)
- [Erste Schritte mit KM2](http://www.svws.nrw.de/uploads/media/videos/erste_schritte.swf)
- [Fächerauswahl mit KM2](http://www.svws.nrw.de/uploads/media/videos/fachauswahl.swf)

Bitte beachten Sie, dass sich die Anleitungen unter Umständen auf eine ältere Version beziehen können.

## Installation

**KM²** ist ähnlich wie SchILD-NRW 2 eine Anwendung für MS-Windows. Das Grundinstallationspaket erhalten Sie im SchILD-NRW 2 Portal:

|  |
|----|
| **→ Startseite → Downloads → [SchILD-NRW 2 Tools](https://www.svws.nrw.de/download/schild-tools)** |

Nach dem Download des Installationspaketes starten Sie die Installation (zum Beispiel durch einen Doppelklick auf die Datei **KM2-Setup.exe**).

Eine ausführliche Beschreibung des Installationsprozesses erhalten Sie → **hier**

## Einstellungen

![KM2ParameterFestlegen](/bilder/tools/km2/km2parameterfestlegen.png)

Alle Einstellungen für **KM²** werden im Dialog „Parameter festlegen" vorgenommen.

Dieser Dialog besteht aus den beiden Registern „Allgemein" und „Administration":

![KM2ParameterRegister](/bilder/tools/km2/km2parameterregister.png)

- Alle **sensiblen Einstellungen** (zum Beispiel Passwort des Administrators, Datenbankverbindungsdaten, etc.) werden auf der Registerseite „**Administration**" vorgenommen und die vom Admin definierten SchILD-NRW 2-Verbindungsdaten für alle Benutzer, die das Programm **KM²** benutzen. Mit anderen Worten: Der *normale Benutzer* kann die SchILD-NRW 2-Verbindungsdaten nicht ändern.
- Alle anderen Parameter werden auf der Seite „Allgemein" vorgenommen und sind benutzerspezifisch.

### Administration

- Siehe → **[Datenbank und Administration](/hilfe/zusatzprogramme/km2-parameter-administration)**

### Allgemein

- Siehe → **[Anzeige und Fächerauswahl](/hilfe/zusatzprogramme/km2-parameter-allgemein)**

## Benutzerverwaltung

siehe [Benutzerrechte in KM2](/administration/benutzer-einstellungen/benutzerverwaltung)

## Modulbenutzung

siehe [Mit KM2 in der Konferenz arbeiten](/hilfe/zusatzprogramme/modulbenutzung)

## Programm - Updates

siehe [KM2 aktualisieren](/hilfe/zusatzprogramme/km2-programmupdate)

## Zusätzliche Hinweise

Bei der Installation des Programms (genauer beim ersten Aufruf von KM2) wird eine Unterordnerstruktur erzeugt:

\KM2\\

\Bilder\\

\Ini\\

\Prot\\

\Temp\\

- Im Ordner **Bilder** legen Sie bitte alle Schüler-Bilddateien ab. Bilder von Schülern können beim Aufruf der Schülerlupe angezeigt werden.
- Im Ordner **Ini** werden vom Programm erzeugte Konfigurationsdateien gespeichert

<!-- -->

- Die Datei **KM2_Admin.INI** enthält die SchILD-NRW 2-Verbindungsdaten in verschlüsselter Form
- Alle anderen Dateien enthalten die Benutzerdaten (zum Beispiel enthält die Datei LEH_KM2.Ini die Konfigurationsparameter des (SchILD-NRW 2-)Benutzers LEH)

<!-- -->

- Der Ordner **Prot** enthält Protokolldaten im HTML-Format. Für jede Klasse wird eine Protokolldatei angelegt.
- Der Ordner **Temp** wird temporär für Dateien benötigt, die vom Programm KM2 selbst erzeugt werden. Diese Dateien können nach Programmende wieder gelöscht werden.

Quelle: [Konferenzmodul KM2.exe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Konferenzmodul+KM2.exe&oldid=5507)
