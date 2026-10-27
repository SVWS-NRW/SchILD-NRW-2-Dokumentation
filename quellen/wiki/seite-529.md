---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Konferenzmodul KM2.exe"
---

# Konferenzmodul KM2.exe

Gesicherte Wiki-Seite · Namensraum 0 · Version 5507 · Stand 2022-03-16.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/konferenzmodul-km2-exe) · [Originaldaten herunterladen](/dateien/quellen/seite-529.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
[[Bild:Km2-logo.png ]]
== Vorbemerkung ==
[[Bild:KM2_LeistungsUebersicht_Bsp_01.png|thumb|400px]]

* '''KM<sup>2</sup>''' ist eine Erweiterung von SchILD-NRW und findet seinen Einsatz bei der Durchführung von Notenkonferenzen.
* Das Konferenzmodul '''KM<sup>2</sup>''' ist ein eigenständiges Programm und kann getrennt von Schild-NRW gestartet werden, es wird keinerlei Installation benötigt, lediglich ein Zugriff auf die Datenbank muss existieren. Gleichwohl wird auch ein Grundinstallationspaket verfügbar sein.
* '''KM<sup>2</sup>''' listet alle Leistungsdaten einer Lerngruppe in tabellarischer Form auf. 
* Die Anordnung der Leistungsdaten ist für den Benutzer frei wählbar.
* Einzelne Schülerdaten können mit Hilfe einer '''Lupenfunktion''' besonders hervorgehoben werden.
[[Bild:KM2_SchuelerLupe_Bsp_01.png|thumb|200px]]
* Leistungsdatenänderungen können direkt in die SchILD-Datenbank zurückgeschrieben werden, wobei diese Änderungen gesondert protokolliert werden.
* '''KM<sup>2</sup>''' implementiert ein zusätzliches Verfahren 
:* zur Verwaltung von Bemerkungen zum "'''Arbeits- und Sozialverhalten'''".
:* zur Verwaltung von '''fachbezogenen Kompetenzen'''.

== Videoanleitungen ==
Für die Installation und die ersten Schritte gibt es drei kurze Videoanleitungen:<br>

* [http://www.svws.nrw.de/uploads/media/videos/installation.swf Installation des Programms]
* [http://www.svws.nrw.de/uploads/media/videos/erste_schritte.swf Erste Schritte mit KM2]
* [http://www.svws.nrw.de/uploads/media/videos/fachauswahl.swf Fächerauswahl mit KM2]


Bitte beachten Sie, dass sich die Anleitungen u.U. auf eine ältere Version beziehen können.

== Installation ==
'''KM<sup>2</sup>''' ist ähnlich wie SchILD-NRW eine Anwendung für MS-Windows.
Das Grundinstallationspaket erhalten Sie im SchILD-NRW Portal:

{| class="wikitable"
|- style="background-color:yellow" 
| '''→ Startseite → Downloads → [https://www.svws.nrw.de/download/schild-tools Schild Tools]'''
|}

Nach dem Download des Installationspaketes starten Sie die Installation (z.B. durch einen Doppelklick auf die Datei '''KM2-Setup.exe''').

Eine ausführliche Beschreibung des Installationsprozesses erhalten Sie → '''[[KM2 - Installation|hier]]'''

== Einstellungen ==
[[Bild:KM2ParameterFestlegen.png]]

Alle Einstellungen für '''KM<sup>2</sup>''' werden im Dialog „Parameter festlegen" vorgenommen.

Dieser Dialog besteht aus den beiden Registern „Allgemein" und „Administration":

[[Image:KM2ParameterRegister.png]]

* Alle '''sensiblen Einstellungen''' (z.B. Passwort des Administrators, Datenbankverbindungsdaten, etc.) werden auf der Registerseite „'''Administration'''" vorgenommen und die vom Admin definierten SchILD-Verbindungsdaten für alle Benutzer, die das Programm '''KM<sup>2</sup>''' benutzen. Mit anderen Worten: Der ''normale Benutzer'' kann die SchILD-Verbindungsdaten nicht ändern.
* Alle anderen Parameter werden auf der Seite „Allgemein" vorgenommen und sind benutzerspezifisch.

=== Administration ===
* Siehe → '''[[KM2 - Parameter - Administration|'''KM<sup>2</sup>''' - Parameter - Administration]]'''

=== Allgemein ===
* Siehe → '''[[KM2 - Parameter - Allgemein|'''KM<sup>2</sup>''' - Parameter - Allgemein]]'''

== Benutzerverwaltung ==
siehe [[Benutzerverwaltung]]

== Modulbenutzung ==
siehe [[Modulbenutzung]]

== Programm - Updates ==
siehe [[KM2-Programmupdate]]

== Zusätzliche Hinweise ==
Bei der Installation des Programms (genauer beim ersten Aufruf von KM2) wird eine Unterordnerstruktur erzeugt:
:: \KM2\
::: \Bilder\
::: \Ini\
::: \Prot\
::: \Temp\

* Im Ordner '''Bilder''' legen Sie bitte alle Schüler-Bilddateien ab. Bilder von Schülern können beim Aufruf der Schülerlupe angezeigt werden.
* Im Ordner '''Ini''' werden vom Programm erzeugte Konfigurationsdateien gespeichert
:* Die Datei '''KM2_Admin.INI''' enthält die SchILD-Verbindungsdaten in verschlüsselter Form
:* Alle anderen Dateien enthalten die Benutzerdaten (z.B. enthält die Datei LEH_KM2.Ini die Konfigurationsparameter des (SchILD-)Benutzers LEH)
* Der Ordner '''Prot''' enthält Protokolldaten im HTML-Format. Für jede Klasse wird eine Protokolldatei angelegt.
* Der Ordner '''Temp''' wird temporär für Dateien benötigt, die vom Programm KM2 selbst erzeugt werden. Diese Dateien können nach Programmende wieder gelöscht werden.

[[Kategorie:Konferenzmodul KM2]]

----

[[Zusatzprogramme / Tools|Zurück zu Zusatzprogramme / Tools]]
```
