---
title: "ENM-Notenmanager: Datenimport und Druck"
---

# Datenimport und Druck

## Leistungsdaten aus anderen Quellen einlesen

Der Notenmanager kann Leistungsdaten aus anderen Datenquellen übernehmen. Im Importdialog wird zunächst das passende Format gewählt. Danach folgen drei getrennte Schritte:

1. **Einlesen (F5)** lädt die Daten in die Importansicht.
2. **Überprüfen (F6)** kontrolliert die Zuordnung und die Eingaben.
3. **Übernehmen (F7)** schreibt die geprüften Werte in die Notendatei.

Bei **Aus Zwischenablage (Copy & Paste)** müssen die Spalten aus der Tabelle in der erwarteten Reihenfolge vorliegen; die Anleitung nennt mindestens **Name**, **Fach**, **Kurs** und **Note**.

Für **In Lerngruppe aus Zwischenablage (Copy & Paste)** wählen Sie vorher im Notenmanager die konkrete Lerngruppe. Kopieren Sie die Notenspalte aus der Tabelle und fügen Sie sie in der Importansicht ab der ersten passenden Zelle ein.

:::warning
Bei der Übernahme nur einer Notenspalte muss die Reihenfolge der Schülerinnen und Schüler in der Tabelle genau mit der Reihenfolge im Notenmanager übereinstimmen. Prüfen Sie die Zuordnung vor **Übernehmen**.
:::

## Listen drucken und Reports bearbeiten

Im **Report-Explorer** wählen Sie einen vorhandenen Report, starten den Designer oder legen eine neue Vorlage an. Markieren Sie die zu druckenden Datensätze in der ersten Spalte.

Die Register für Lerngruppen und Klassenleitung verwenden unterschiedliche Vorlagen. Das Register **Klassenleitung** ist nur sichtbar, wenn die Lehrkraft in SchILD-NRW 2 entsprechend zugeordnet wurde. Die Reportdateien liegen im Ordner `Reports`: Lerngruppen-Reports haben die Endung `.rLG`, Klassenleitungs-Reports `.rKL`.

Die Vorlage und der Ausdruck sind von der gespeicherten Notendatei zu unterscheiden. Für die Übernahme nach SchILD-NRW 2 muss weiterhin die bearbeitete Notendatei zurückgegeben werden.

Quelle: [Bedienungsanleitung ENM-Notenmanager, Druckstand 15.12.2020](/dateien/pdf/enm_bedienungsanleitung_2.pdf), Kapitel 9.1–9.2, Seiten 27–41.

## Report-Explorer, Datenimport, Wartung und Ausgabe

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 27–46](/dateien/pdf/enm_bedienungsanleitung_2.pdf#page=27).

Report-Explorer

### 9 Anhang

### 9.1 Report-Explorer

Im Notenmodul ist die Report-Komponente zur Gestaltung und zum Ausdrucken von

Leistungsdaten eingebunden worden.

![9.1 Report-Explorer – Abbildung aus der Originalanleitung, Seite 27](/bilder/pdf-anleitungen/enm/seite-27-bild-01.png)

Nach dem Aufruf des zugehörigen Dialogs wird ein Fenster mit einer oder zwei Regis-

terseiten angezeigt:

![9.1 Report-Explorer – Abbildung aus der Originalanleitung, Seite 27](/bilder/pdf-anleitungen/enm/seite-27-bild-02.png)

Auf jeder Registerseite kann

- eine zuvor mit dem Designer erstellte Reportdatei ausgewählt werden,
- der Reportdesigner gestartet werden,
- eine neue Reportdatei angelegt werden oder
- die Druckausgabe mit der aktuell ausgewählten Reportdatei gestartet wer-

den.

Report-Explorer

### 1. Leistungsdaten

Mit Hilfe des Registers „Leistungsdaten“ lassen sich Lerngruppen auswählen und

die zugehörigen Notenlisten gestalten und drucken. Die Lerngruppen lassen sich

durch einen Klick auf den Spaltenkopf umsortieren und / oder filtern. Es werden da-

bei nur die Schülerdaten gedruckt, die in der ersten Spalte markiert sind.

Es stehen vier Datenquellen zur Verfügung: „Lerngruppen“, "LerngruppenSchueler",

"SchuelerLeistungen und „LeistungenTeilleistungen“.

![1. Leistungsdaten – Abbildung aus der Originalanleitung, Seite 28](/bilder/pdf-anleitungen/enm/seite-28-bild-01.png)

Felder der Datenquelle „Lerngruppen“:

Feldname Bemerkung

Bezeichnung Bezeichnung der Lerngruppe ("Klasse/Jahrgang" + "FachKrz" + "KursBez")

KlasseJg Klassen oder ASD-Jahrgang der Lerngruppe

FachKrz Fachkürzel der Lerngruppe

KursKrz Kursbezeichnung der Lerngruppe

LehrerKrz Kürzel der Lehrkraft, die die Lerngruppe unterrichtet

Schuljahr Schuljahr, auf das sich die Leistungsdaten beziehen

Abschnitt Lernabschnitt, auf den sich die Leistungsdaten beziehen

NV_Schnitt Notenverteilung: Notendurchschnitt

NV_Sum Notenverteilung: Summe der Schüler und Schülerinnen

NV_Anz Notenverteilung: Summe der Schüler und Schülerinnen mit Noten

NV_N1 - NV_N6 Notenverteilung: Summe der Schüler und Schülerinnen mit Note 1,2,...,6

ZeigeWarnung Dieses Feld ist gleich "x", sofern Warnungen bearbeitet werden können.

Report-Explorer

ZeigeZuweisung Dieses Feld ist gleich "x", sofern Zuweisungen bearbeitet werden können.

ZeigeFehlstunden Dieses Feld ist gleich "x", sofern fachbezogene Fehlstunden bearbeitet werden können.

Felder der Datenquelle „LerngruppenSchueler“:

Feldname Bemerkung

NachnameVorname Nachname, Vorname des Schülers oder der Schülerin

VornameNachname Vorname und Nachname des Schülers oder der Schülerin

Vorname Vorname des Schülers oder der Schülerin

Nachname Nachname des Schülers oder der Schülerin

Klasse Klasse des Schülers oder der Schülerin

Felder der Datenquelle „SchuelerLeistungen“:

Feldname Bemerkung

Kursart Kursart (PUK, PUT, WP1, ...)

FachBez Unterrichtsfach

KursBez Kursbezeichnung

NotenKrz Notenkürzel

Punkte Note in Punkte umgerechnet

FSG Gesamtfehlstunden im Fach

FSU Unentschuldigte Gesamtfehlstunden im Fach

ASDJg ASD-Jahrgang des Schülers / der Schülerin

Zuweisung Kurszuweisung

Report-Explorer

Warnung Warnung / Mahnmerkmal (Ja/Nein)

Fachbemerkung Bemerkung zum Unterrichtsfach

Geändert Daten wurden geändert (Ja/Nein)

Felder der Datenquelle „LeistungenTeilleistungen“:

Feldname Bemerkung

NotenKrz Notenkürzel der Teilleistung

Bemerkung Bemerkung zur Teilleistung

Art Teilleistungsart (Bsp: SoMi, KA)

Geändert Daten wurden geändert (Ja/Nein)

### 2. Klassenleitung

![2. Klassenleitung – Abbildung aus der Originalanleitung, Seite 30](/bilder/pdf-anleitungen/enm/seite-30-bild-01.png)

Sollte die ENM-Lehrkraft eine Klassenleitung sein, so lassen sich darüber hinaus die

Daten der Klassenleitung (Lernbereichsnoten / Fehlzeiten / Bemerkungen) gestalten

und drucken. Die Liste mit den Schülerdaten lässt sich durch einen Klick auf den Spal-

tenkopf umsortieren und / oder filtern. Es werden dabei nur die Schülerdaten gedruckt,

die in der ersten Spalte markiert sind.

Report-Explorer

Drei Datenquellen stehen zur Verfügung: „Lerngruppen“, „LerngruppenSchueler“ und

„SchuelerAbschnittsdaten“.

![2. Klassenleitung – Abbildung aus der Originalanleitung, Seite 31](/bilder/pdf-anleitungen/enm/seite-31-bild-01.png)

Felder der Datenquelle „Lerngruppen“:

Feldname Bemerkung

Bezeichnung Bezeichnung der Lerngruppe (i.e. der Klasse)

LehrerKrz Kürzel der Lehrkraft

Schuljahr Schuljahr, auf das sich die Leistungsdaten beziehen

Abschnitt Abschnitt, auf den sich die Leistungsdaten beziehen

Felder der Datenquelle „LerngruppenSchueler“:

Feldname Bemerkung

NachnameVorname Nachname, Vorname des Schülers oder der Schülerin

VornameNachname Vorname und Nachname des Schülers oder der Schülerin

Vorname Vorname des Schülers oder der Schülerin

Nachname Nachname des Schülers oder der Schülerin

Klasse Klasse des Schülers oder der Schülerin

Felder der Datenquelle „SchuelerAbschnittsdaten“:

Feldname Bemerkung

ASDJg ASD-Jahrgang des Schülers / der Schülerin

FSG Gesamtfehlstunden

Report-Explorer

FSG Unentschuldigte Gesamtfehlstunden

Geändert Daten wurden geändert ('X')

Note_AL Lernbereichsnote Arbeitslehre

Note_NW Lernbereichsnote Naturwissenschaften

ASV_Bem Bemerkungen zum Arbeits- und Sozialverhalten

AuE_Bem Bemerkungen zum Außerunterrichtlichen Engagement

ZB_Bem Zeugnisbemerkung

ASV Bemerkungen zum Arbeits- und Sozialverhalten sind vorhanden (Ja/Nein)

AuE Bemerkungen zum Außerunterrichtlichen Engagement sind vorhanden (Ja/Nein)

ZB Zeugnisbemerkungen sind vorhanden (Ja/Nein)

Hier ein Beispiel für die Gestaltung einer einfachen Notenliste:

![2. Klassenleitung – Abbildung aus der Originalanleitung, Seite 32](/bilder/pdf-anleitungen/enm/seite-32-bild-01.png)

Report-Explorer

und in der Vorschau:

![2. Klassenleitung – Abbildung aus der Originalanleitung, Seite 33](/bilder/pdf-anleitungen/enm/seite-33-bild-01.png)

Hinweise:

- Die Registerseite "Klassenleitung" ist nur sichtbar, wenn die Lehrkraft als

Klassenleitung in einer Klasse in SchILD eingetragen wurde.

- Im Dateiordner "\\Vorlagen" befinden sich die beiden Dateien

### Klassenleitung-Vorlage.rKL

### Lerngruppen-Vorlage.rLG

Immer wenn eine neue Report-Datei angelegt wird, wird in dieser neuen Da-

tei eine der beiden Vorlagen (sozusagen als Schablone) gespeichert. Die

Vorlage "Lerngruppen-Vorlage.rLG" wird gespeichert, wenn der Designer

von der Registerseite "Lerngruppen" aus gestartet wird und die Vorlage

"Klassenleitung-Vorlage.rKL", wenn der Designer von der Registerseite

"Klassenleitung" aus gestartet wird.

- Die Reportdateien werden im Ordner "\\Reports" des Installationsordners

gespeichert. Lerngruppen-Reports haben die Dateierweiterung "rLG" und

Reports im Zusammenhang mit einer Klassenleitung die Dateierweiterung

"rKL".

Daten-Import

### 9.2 Daten-Import

Leistungsdaten können aus anderen Datenquellen in den Notenmanager übernommen

werden. Zu den Leistungsdaten die importiert werden können gehören:

- Noten,
- Punkte,
- Fehlzeiten,
- Warnungen,
- Zuweisungen,
- Fachbemerkungen,
- Teilleistungsnoten

Hinweis: Bemerkungen zu den jeweiligen Teilleistungsdaten können

nicht importiert werden.

Der Importdialog wird aus dem Hauptmenü heraus gestartet:

![9.2 Daten-Import – Abbildung aus der Originalanleitung, Seite 34](/bilder/pdf-anleitungen/enm/seite-34-bild-02.png)

Der Import verläuft immer in drei Schritten:

1. Einlesen der Daten aus einer Quelle (CSV-Datei oder über die Windows-

Zwischenablage)

2. Überprüfen der Daten

3. Übernahme der überprüften Daten in die Notendatei

Daten-Import

![9.2 Daten-Import – Abbildung aus der Originalanleitung, Seite 35](/bilder/pdf-anleitungen/enm/seite-35-bild-01.png)

Das Einlesen der Daten unterliegt einigen Importbedingungen:

- Daten können nur aus einer CSV-Datei oder über die Windows-Zwischen-

ablage importiert werden ("Copy &amp; Paste“).

- Die CSV-Datei benötigt entweder eine Headerzeile, oder Sie ordnen den

Feldern der Notendatei mit Hilfe eines eigenen Dialogs (siehe unten) die

Spalten der Importdatei zu.

Bei Verwendung einer Headerzeile können bzw. müssen die folgenden

Spaltentitel in beliebiger Reihenfolge vorkommen: "Klasse“, "Name“, "Nach-

name“, "Vorname“, "Fach“, "Kurs“, "Note“, "Pkte.“, "Art“, "FS“, "uFS“, "M.",

"FB", "Zuw." oder die Teilleistungsarten.

- Die Felder "Klasse", "Name" (bzw. "Nachname", "Vorname"), "Fach" sind

obligatorisch.

- Entweder ist das Feld "Name" enthalten (als Nachname + ´, ´ + Vorname)

oder die beiden Felder "Nachname" und "Vorname".

Daten-Import

- Wichtig: Durch den Import können keine neuen Datensätze in der Notenda-

tei angelegt werden. Der Import von Leistungsdaten setzt eine eindeutige

Identifikation der Import- und Leistungsdaten in der Notendatei voraus. Die-

se Identifikation erfolgt über die Feldwerte von "Klasse", "Name" und - so-

fern in der Importdatei vorhanden - über die Fachinformationen.

- Hinweis: Die Spaltenzuordnung (Notendatei, Importdatei) kann auch mit Hil-

fe eines eigenen Dialogs erfolgen. Klicken Sie hierzu auf "Spalten" und

ordnen den Feldern der Notendatei die Spalten der Importdatei zu.

![9.2 Daten-Import – Abbildung aus der Originalanleitung, Seite 36](/bilder/pdf-anleitungen/enm/seite-36-bild-01.png)

Mit "Speichern" und "Einlesen" lassen sich die Spaltenzuordnungen in Pro-

fildateien speichern und wieder einlesen.

- Beachten Sie die Option "Spaltenzuordnungen verwenden": Wenn Sie die-

se Option markieren, werden beim Import die Spaltenzuordnungswerte ver-

wendet, andernfalls die Informationen im Header.

Daten-Import

### CSV-Dateiimport

Wählen Sie als Importformat "Leistungsdaten im CSV-Format!"

Nach dem Einlesen der Daten (Taste F5 - Einlesen) wird versucht (Taste F6 - Prüfen),

eine eindeutige Zuordnung zu den Leistungsdaten herzustellen.

![CSV-Dateiimport – Abbildung aus der Originalanleitung, Seite 37](/bilder/pdf-anleitungen/enm/seite-37-bild-01.png)

Nur wenn dies möglich ist, können die Daten (Noten, Punkte, Fehlzeiten, Warnungen,

Zuweisungen, Fachbemerkungen, Teilleistungsnoten) in die Leistungsdatei übernom-

men werden (F7: Übernehmen).

Das Protokoll enthält eine ausführliche Dokumentation der einzelnen Importschritte:

Feldzuordnungen, Identifikationsfehler, Importfehler etc.

In der Spalte "Hinweis" werden die Überprüfungsergebnisse dokumentiert (siehe letzte

Abbildung):

Daten-Import

- Kann der Importdatensatz in der Notendatei identifiziert werden, so wird in

der Hinweisspalte "Gefunden" ausgegeben, andernfalls "Nicht gefunden".

- Daten, die importiert werden können, werden gelb unterlegt und der Daten-

satz wird in der ersten Spalte markiert.

- Die Darstellung der Daten wird erweitert auf "Importwert / Bereits gespei-

cherter Wert"

- Sind Fachbemerkungen gleich, so wird "*" als bereits gespeicherter Wert

ausgegeben.

- Wurde noch kein Wert gespeichert, so wird "-" ausgegeben.

### Copy &amp; Paste

Mit der Option "Copy &amp; Paste" haben Sie die Möglichkeit, Daten, die Sie aus Ihrer ex-

ternen Notenverwaltung in die Zwischenablage kopiert haben (Tastenkombination "Strg

+ C"), z.B. mit der Tastenkombination "Strg + V" zu importieren. Im folgenden Beispiel

sei die externe Notenverwaltung eine Tabelle in MS-Excel.

Grundsätzlich stehen Ihnen bei diesem Importverfahren zwei Vorgehensweisen zur Ver-

fügung. Bei der ersten Vorgehensweise importieren Sie neben den reinen Leistungs-

daten auch Schülerdaten (Name, Klasse, Angaben zum Fach), so dass der Datensatz

eindeutig identifiziert werden kann (Aktion "Prüfen (F6)"). Bei der zweiten Vorgehens-

weise werden die Daten einer bestimmten Lerngruppe in die Importansicht geladen

und Sie ergänzen z.B. via Copy &amp; Paste die Leistungsdaten oder z.B. die Fehlzeiten.

### 1. Vorgehensweise

Wählen Sie als Importformat "Vollständig aus Zwischenablage (Copy&amp;Paste)"

![1. Vorgehensweise – Abbildung aus der Originalanleitung, Seite 38](/bilder/pdf-anleitungen/enm/seite-38-bild-01.png)

Markieren Sie in MS-Excel den Bereich, den Sie importieren wollen (mindestens

die Spalten "Name", "Fach", "Kurs", "Note" – Bitte beachten Sie: In der Excel-Tabel-

le müssen die Spalten in der richtigen Reihenfolge vorliegen). Drücken die Tasten-

Daten-Import

kombination "Strg+C":

![1. Vorgehensweise – Abbildung aus der Originalanleitung, Seite 39](/bilder/pdf-anleitungen/enm/seite-39-bild-01.png)

Klicken Sie auf "Einlesen (F5)". Alle Daten aus der Zwischenablage gelesen und in

der Importansicht angezeigt:

![1. Vorgehensweise – Abbildung aus der Originalanleitung, Seite 39](/bilder/pdf-anleitungen/enm/seite-39-bild-02.png)

Klicken Sie auf "Überprüfen (F6)" und übernehmen bei Bedarf die Leistungsdaten in

die Notendatei "Übernehmen (F7)".

### 2. Vorgehensweise

Wählen Sie im Notenmanager eine bestimmte Lerngruppe (in dem nachfolgenden

Beispiel ist dies die Lerngruppe "06d - Kunst").

Wählen Sie als Importformat "In Lerngruppe aus Zwischenablage (Copy &amp; Pas-

te)"

Klicken Sie auf "Einlesen (F5)". Alle Schülerdaten der zuvor gefilterten Lerngruppe

Daten-Import

werden angezeigt:

![2. Vorgehensweise – Abbildung aus der Originalanleitung, Seite 40](/bilder/pdf-anleitungen/enm/seite-40-bild-01.png)

Markieren Sie in Excel die Notenspalte und drücken "Strg+C" (Achtung: Die Zeilen-

sortierung, also die Abfolge der Schülerdaten, muss identisch mit der im Notenma-

nager sein)!

![2. Vorgehensweise – Abbildung aus der Originalanleitung, Seite 40](/bilder/pdf-anleitungen/enm/seite-40-bild-02.png)

:

Markieren Sie im Notenmanager die linke obere Zelle in der Spalte "Note" und betä-

tigen die Tastenkombination "Strg+V".

![2. Vorgehensweise – Abbildung aus der Originalanleitung, Seite 40](/bilder/pdf-anleitungen/enm/seite-40-bild-03.png)

Daten-Import

Klicken Sie auf "Überprüfen (F6)" und übernehmen bei Bedarf die Leistungsdaten

(Übernehmen (F7).

### 9.3 Updates durchführen

Es gibt in unregelmäßigen Abständen Updates für das ENM-Notenmodul, die die Hin-

weise und Rückmeldungen der Anwenderinnen und Anwender aufnehmen. Schauen

Sie daher bitte in regelmäßigen Abständen unter „Hilfe ► Update“ nach, ob ein Pro-

gramm-Update vorliegt.

![9.3 Updates durchführen – Abbildung aus der Originalanleitung, Seite 41](/bilder/pdf-anleitungen/enm/seite-41-bild-01.png)

Klicken Sie auf "Start", um zu prüfen, ob ein Update vorliegt. Wenn ein neues Program-

mupdate vorliegt, so wird dies angezeigt. Klicken Sie auf weiter, um den Updatevor-

gang zu starten.

Hinweis:

- Auf den Schulverwaltungsseiten NRW können Sie sich durch einen Klick auf

Versionshinweise die gesamte Versionshistorie anzeigen lassen.

- Hier finden Sie auch ein ZIP-Paket, das die jeweils neuesten Programm-

und Datendateien enthält.

- Die oben beschriebene automatische Update-Möglichkeit steht nur auf PCs

zur Verfügung, die einen FTP-Zugang zum Internet haben.

- Wird Ihre Schule über den Schulträger von einem externen IT-Dienstleister

betreut, wird dieser Ihnen mitteilen, wie Updates eingespielt werden.

- Befindet sich das Modul in einer SchILDzentral - Umgebung, ist die automa-

tische Updatemöglichkeit deaktiviert.

Updates durchführen

### 9.4 Sonstige Aktionen

Aktion Beschreibung

Filter Filter dienen dazu die Ansicht der Leistungsdaten ihren Wünschen an-

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 42](/bilder/pdf-anleitungen/enm/seite-42-bild-01.png)

zupassen. Grundsätzlich lassen sich zwei verschiedene Filtermöglichkeiten unterscheiden:

- Filtern nach Lerngruppen
- Filtern nach verschiedenen Merkmalen wie Unterrichtsfach, Kursart, Klasse oder Kursbezeichnung.

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 42](/bilder/pdf-anleitungen/enm/seite-42-bild-02.png)

“Filter Gruppe“ öffnet eine Übersicht Ihrer Lerngruppen. Wählen Sie diejenige aus, auf die gefiltert werden soll (Tastenkombination "Strg+L").

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 42](/bilder/pdf-anleitungen/enm/seite-42-bild-03.png)

Auf eine Gruppe filtern können Sie auch durch einen Doppelklick auf eine Zeile in der Auflistung der Lerngruppen 14.

“Filter erstellen“: (Tastenkombination "Strg+F").

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 42](/bilder/pdf-anleitungen/enm/seite-42-bild-04.png)

Sonstige Aktionen

Wählen Sie im anschließenden Dialog einen Jahrgang, eine Klasse, ein Fach, einen Kurs oder eine Kursart. Klicken Sie auf "Filtern", um nur die Leistungsdaten anzuzeigen, die den Filterbedungen in allen Filter-Merkmalen entsprechen:

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 43](/bilder/pdf-anleitungen/enm/seite-43-bild-01.png)

Hinweis: Wenn Sie nur Datensätze angezeigt haben wollen, bei denen noch keine Note vergeben worden ist, so markieren Sie die Option "Nur Datensätze ohne Noteneintrag anzeigen". Sobald ein Filter aktiv ist, wird die Filterbedingung unterhalb der Lerngruppen ausgewiesen und optisch hervorgehoben:

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 43](/bilder/pdf-anleitungen/enm/seite-43-bild-03.png)

Im obigen Beispiel wurde auf einen Erweiterungskurs (Art = E) im Fach "Deutsch" (D) in der Klasse 10a gefiltert.

“Filter löschen“ setzt alle Filter zurück. Die Funktion "Filter löschen" kann durch einen Rechtsklick im Lerngrup-

penfenster oben links, einen Klick auf die Schaltfläche neben dem Filter-

angaben ( ) oder durch einen Klick auf "Filter löschen" im Hauptme-

nü (bzw. die Tastenkombination Strg+F12) ausgelöst werden.

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 43](/bilder/pdf-anleitungen/enm/seite-43-bild-05.png)

Sortierung Mit der Schaltfläche "Sortierung" können Sie die Reihenfolge der Leis-

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 43](/bilder/pdf-anleitungen/enm/seite-43-bild-06.png)

tungsdaten wählen. Vier Auswahlmöglichkeiten stehen zur Verfügung:

- Name, Fach
- Fach, Name
- Klasse, Name
- Klasse, Fach

Sonstige Aktionen

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 44](/bilder/pdf-anleitungen/enm/seite-44-bild-01.png)

Hinweis: Durch einen Klick auf einen Spaltentitel können Sie ebenfalls die Sortierung beeinflussen. Wenn Sie dabei die Umschalttaste gedrückt halten, wird die bisherige Sortierung erweitert. Im folgenden Beispiel wird zunächst auf die Klasse (Klick auf "Klasse"), als nächstes auf den Namen (Umschaltaste + Klick auf "Klasse") und als letztes auf die Kursart sortiert (Umschaltaste + Klick auf "Art")

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 44](/bilder/pdf-anleitungen/enm/seite-44-bild-03.png)

Zoom Zur leichteren Bedienung finden Sie in jedem Dialogfenster unten rechts

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 44](/bilder/pdf-anleitungen/enm/seite-44-bild-04.png)

ein Werkzeug, um die Schriftgröße anzupassen.

Sicherung Hier können Sie eine Sicherung Ihrer Notendatei erstellen bzw. eine vor-

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 44](/bilder/pdf-anleitungen/enm/seite-44-bild-05.png)

handene Sicherung wieder einlesen.

Eingabehilfe Mit der Noteneingabehilfe lassen sich Noten leichter eingeben.

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 44](/bilder/pdf-anleitungen/enm/seite-44-bild-06.png)

Beispiel: Schüler 1 "Ohnesorg" soll eine "2+" erhalten und Schüler 2 "Sorgenvoll" eine "4-" Klicken Sie in der Eingabehilfe "2+" und danach auf "4-". Nach der "2+" springt der Eingabefokus auf den zweiten Schüler und hier ist bereits die "4-" eingetragen

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 44](/bilder/pdf-anleitungen/enm/seite-44-bild-08.png)

Sonstige Aktionen

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 45](/bilder/pdf-anleitungen/enm/seite-45-bild-01.png)

Um die Sichtbarkeit der Spalten zu steuern, klicken Sie "Zusätze ► Spalten wählen"

![9.4 Sonstige Aktionen – Abbildung aus der Originalanleitung, Seite 45](/bilder/pdf-anleitungen/enm/seite-17-bild-02.png)

ENM-Notenmanager beenden.

Hinweis: Es gibt keine gesonderten Speicher-Button, da die Daten nach der Eingabe direkt in die Datenbank gespeichert werden.

### 9.5 Druck und Export

Die Leistungsdaten lassen sich an einen Drucker ausgeben oder in andere Dateifor-

mate exportieren.

![9.5 Druck und Export – Abbildung aus der Originalanleitung, Seite 45](/bilder/pdf-anleitungen/enm/seite-45-bild-05.png)

Beim Drucken sind der Formulardruck mit dem Report-Explorer und ein einfacher

Listendruck zu unterscheiden. Beim einfachen Listendruck werden die Leistungsda-

ten, so wie sie am Bildschirm angezeigt werden, direkt an einem Drucker ausgegeben,

während der Formulardruck vielfältige Gestaltungsmöglichkeiten eröffnet, wie z.B. die

Daten im Zusammenhang mit der Leistungsdatenverwaltung zu drucken.

Informationen zum Drucken mit Hilfe des Report-Explorers finden Sie hier .

Druck und Export

### Einfacher Listendruck

Beim Druck öffnet sich zunächst eine Vorschau. Erst ein Klick auf „Drucken“ in der

Druckvorschau, löst den Druckvorgang aus.

![Einfacher Listendruck – Abbildung aus der Originalanleitung, Seite 46](/bilder/pdf-anleitungen/enm/seite-46-bild-01.png)

### Export

Wählen Sie beim Export ein Dateiformat und einen Dateipfad für den Speicherort.

Dies ist sowohl durch Direkteingabe bei „Dateiname“ oder durch den Dateiauswahl-

dialog über die Schaltfläche „Datei“ möglich.

![Export – Abbildung aus der Originalanleitung, Seite 46](/bilder/pdf-anleitungen/enm/seite-46-bild-02.png)
