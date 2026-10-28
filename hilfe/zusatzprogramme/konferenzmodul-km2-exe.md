---
title: "Konferenzmodul KM2.exe"
---

# Konferenzmodul KM2.exe

![Km2-logo](/bilder/tools/km2/km2-logo.png)

<a id="Vorbemerkung"></a>

## Vorbemerkung

![KM2_LeistungsUebersicht_Bsp_01](/bilder/tools/km2/km2-leistungsuebersicht-bsp-01.png)

- **KM<sup>2</sup>** ist eine Erweiterung von SchILD-NRW und findet seinen Einsatz bei der Durchführung von Notenkonferenzen.
- Das Konferenzmodul **KM<sup>2</sup>** ist ein eigenständiges Programm und kann getrennt von Schild-NRW gestartet werden, es wird keinerlei Installation benötigt, lediglich ein Zugriff auf die Datenbank muss existieren. Gleichwohl wird auch ein Grundinstallationspaket verfügbar sein.
- **KM<sup>2</sup>** listet alle Leistungsdaten einer Lerngruppe in tabellarischer Form auf.
- Die Anordnung der Leistungsdaten ist für den Benutzer frei wählbar.
- Einzelne Schülerdaten können mit Hilfe einer **Lupenfunktion** besonders hervorgehoben werden.

![KM2_SchuelerLupe_Bsp_01](/bilder/tools/km2/km2-schuelerlupe-bsp-01.png)

- Leistungsdatenänderungen können direkt in die SchILD-Datenbank zurückgeschrieben werden, wobei diese Änderungen gesondert protokolliert werden.
- **KM<sup>2</sup>** implementiert ein zusätzliches Verfahren

<!-- -->

- zur Verwaltung von Bemerkungen zum "**Arbeits- und Sozialverhalten**".
- zur Verwaltung von **fachbezogenen Kompetenzen**.

<a id="Videoanleitungen"></a>

## Videoanleitungen

Für die Installation und die ersten Schritte gibt es drei kurze Videoanleitungen:\

- [Installation des Programms](http://www.svws.nrw.de/uploads/media/videos/installation.swf)
- [Erste Schritte mit KM2](http://www.svws.nrw.de/uploads/media/videos/erste_schritte.swf)
- [Fächerauswahl mit KM2](http://www.svws.nrw.de/uploads/media/videos/fachauswahl.swf)

Bitte beachten Sie, dass sich die Anleitungen u.U. auf eine ältere Version beziehen können.

<a id="Installation"></a>

## Installation

**KM<sup>2</sup>** ist ähnlich wie SchILD-NRW eine Anwendung für MS-Windows. Das Grundinstallationspaket erhalten Sie im SchILD-NRW Portal:

|  |
|----|
| **→ Startseite → Downloads → [Schild Tools](https://www.svws.nrw.de/download/schild-tools)** |

Nach dem Download des Installationspaketes starten Sie die Installation (z.B. durch einen Doppelklick auf die Datei **KM2-Setup.exe**).

Eine ausführliche Beschreibung des Installationsprozesses erhalten Sie → **hier**

<a id="Einstellungen"></a>

## Einstellungen

![KM2ParameterFestlegen](/bilder/tools/km2/km2parameterfestlegen.png)

Alle Einstellungen für **KM<sup>2</sup>** werden im Dialog „Parameter festlegen" vorgenommen.

Dieser Dialog besteht aus den beiden Registern „Allgemein" und „Administration":

![KM2ParameterRegister](/bilder/tools/km2/km2parameterregister.png)

- Alle **sensiblen Einstellungen** (z.B. Passwort des Administrators, Datenbankverbindungsdaten, etc.) werden auf der Registerseite „**Administration**" vorgenommen und die vom Admin definierten SchILD-Verbindungsdaten für alle Benutzer, die das Programm **KM<sup>2</sup>** benutzen. Mit anderen Worten: Der *normale Benutzer* kann die SchILD-Verbindungsdaten nicht ändern.
- Alle anderen Parameter werden auf der Seite „Allgemein" vorgenommen und sind benutzerspezifisch.

<a id="Administration"></a>

### Administration

- Siehe → **[**KM<sup>2</sup>** - Parameter - Administration](/hilfe/zusatzprogramme/km2-parameter-administration)**

<a id="Allgemein"></a>

### Allgemein

- Siehe → **[**KM<sup>2</sup>** - Parameter - Allgemein](/hilfe/zusatzprogramme/km2-parameter-allgemein)**

<a id="Benutzerverwaltung"></a>

## Benutzerverwaltung

siehe [Benutzerverwaltung](/administration/benutzer-einstellungen/benutzerverwaltung)

<a id="Modulbenutzung"></a>

## Modulbenutzung

siehe [Modulbenutzung](/hilfe/zusatzprogramme/modulbenutzung)

<a id="Programm_-_Updates"></a>

## Programm - Updates

siehe [KM2-Programmupdate](/hilfe/zusatzprogramme/km2-programmupdate)

<a id="Zusätzliche_Hinweise"></a>
<a id="Zus.C3.A4tzliche_Hinweise"></a>

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

- Die Datei **KM2_Admin.INI** enthält die SchILD-Verbindungsdaten in verschlüsselter Form
- Alle anderen Dateien enthalten die Benutzerdaten (z.B. enthält die Datei LEH_KM2.Ini die Konfigurationsparameter des (SchILD-)Benutzers LEH)

<!-- -->

- Der Ordner **Prot** enthält Protokolldaten im HTML-Format. Für jede Klasse wird eine Protokolldatei angelegt.
- Der Ordner **Temp** wird temporär für Dateien benötigt, die vom Programm KM2 selbst erzeugt werden. Diese Dateien können nach Programmende wieder gelöscht werden.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-529) · [Konferenzmodul KM2.exe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Konferenzmodul+KM2.exe&oldid=5507)
