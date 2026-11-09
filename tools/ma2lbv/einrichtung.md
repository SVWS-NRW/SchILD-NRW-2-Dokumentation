---
title: "MA2LBV / MA2: Einrichtung und Datenbankzugriff"
---

# Einrichtung und Datenbankzugriff

Das früher **MA2LBV** genannte Programm heißt seit Version 3.2 **MA2**. Die Bezeichnung der Tools-Rubrik bleibt zur Orientierung erhalten. Die Anleitung beschreibt sowohl den Import aus SchILD-NRW 2 als auch den Betrieb mit externen oder manuell erfassten Abrechnungsdaten.

## Ersteinrichtung

Nach der Installation werden die Formulardaten der Schule, die Programmeinstellungen und gegebenenfalls die Verbindung zur SchILD-NRW 2-Datenbank festgelegt. Der Benutzer **MA2Admin** ist für die administrative Einrichtung vorgesehen. Die Anleitung nennt für die Auslieferung das Startkennwort `schild`; das Kennwort lässt sich ändern.

Über **Einstellungen** tragen Sie unter anderem Schule beziehungsweise Dienststelle, Schulnummer und die übrigen nicht personenbezogenen Formulardaten ein.

## SchILD-NRW 2-Zugriff konfigurieren

1. Öffnen Sie aus den allgemeinen Einstellungen den Dialog für **SchILD-NRW 2-Zugriff / Benutzerdaten**.
2. Wählen Sie die passende Datenbankverbindung.
3. Bei der SchILD-NRW 2-Standarddatenbank `schild2000n.mdb` wird direkt die MDB-Datei verwendet. Für diese Standarddatenbank gibt es nach der Anleitung keine eigene UDL-Datei.
4. Bei einer eingerichteten UDL-Verbindung wählen Sie die passende `.UDL`-Datei. Für eine Serverdatenbank können zusätzlich Datenbank-Zugangsdaten erforderlich sein.
5. Prüfen Sie die Verbindung über **Verbindung testen**.

Für den Import von Lehrkraftdaten benötigt ein verwendeter SchILD-NRW 2-Benutzer das Recht, Lehrkraftdaten zu lesen. Nur **MA2Admin** kann im Modul den Dialog zur Konfiguration der Verbindung und der externen Benutzer aufrufen.

Bei SchILDzentral wird das Modul aus der SchILDzentral-Anwendung gestartet. Eine dort abgelegte Programmdatei lässt sich nicht unabhängig davon direkt aufrufen; die Einrichtung der zentralen Umgebung ist von der Einrichtung einer gewöhnlichen SchILD-NRW 2-Installation zu unterscheiden.

Quelle: [Bedienungsanleitung MA2, Druckstand 18.03.2024](/dateien/pdf/ma2lbv_anleitung.pdf), Seiten 4–12 und 20–25; [Versionshinweise](/dateien/pdf/ma2pdf_versionsgeschichte.pdf), Version 3.2.3.2.

## Systembeschreibung und Installation

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 4–11](/dateien/pdf/ma2lbv_anleitung.pdf#page=4).

### 1 Vorbemerkung

![1 Vorbemerkung – Abbildung aus der Originalanleitung, Seite 4](/bilder/pdf-anleitungen/ma2/seite-04-bild-01.png)

Das IT-Programm MA2 (vormals MA2LBV) erleichtert das Ausfüllen von Formularen für

Änderungsmitteilungen an das Landesamt für Besoldung und Versorgung (LBV) in

NRW.

MA2 bietet Schnittstellen zur Verfügung, um Mehrarbeitsdaten zu importieren. Diese

beinhalten Name, Vorname, Geburtsdatum, LBV-Nummer, Vergütungsschlüssel und

Angaben über vergütbare Vertretungsstunden, die nach einer Plausibilitätsprüfung in

die entsprechenden Formulare übertragen und ausgedruckt werden.

Neu ab Version 3.2:

- Aufgrund vieler Anfragen haben wir das Fachverfahren "MA2LBV" in "MA2"

umbenannt.

- Die Benutzerführung wurde überarbeitet und den anderen SchILD-Tools an-

gepasst.

- Damit ein Benutzer Daten aus SchILD-NRW bzw. SchILDzentral importieren

kann, muss er entweder Admin-Rechte besitzen oder der Benutzer muss

das Recht besitzen, lesend auf Lehrkraftdaten zu zugreifen.

- Da das Landesprogramm "Nachholen und Ankommen nach Corona" aus-

gelaufen ist, wurde diese Fördermöglichkeit aus dem Modul "MA2" gestri-

chen. Der alleinige verbleibende Anlass ist die angeordnete Mehrarbeit zur

Sicherung der Unterrichtsversorgung.

Die MA2 - Internetpräsenz befindet sich auf den

Schulverwaltungsseiten NRW:

https://www.svws.nrw.de ► Downloads ► MA2

![1 Vorbemerkung – Abbildung aus der Originalanleitung, Seite 5](/bilder/pdf-anleitungen/ma2/seite-05-bild-01.png)

Hier finden Sie neben aktuellen Hinweisen auch Downloadmöglichkeiten für Program-

minstallationen und notwendige Updates.

- Beachten Sie unbedingt die Ausfüllanleitung des LBV für Änderungsmitteilungen.
- Für MA2 gibt es ein Anwenderforum (als Unterforum des SchILD-NRW-Anwender-

forums):

https://schulverwaltungsinfos.nrw.de/svws/forum/viewforum.php?f=25

- Unterstützung bei Problemen:
- Sie sollten regelmäßig - nicht nur bei Fragen oder Hinweisen - das MA2-

Anwenderforum aufsuchen.

- MA2 ist Teil des Supportkonzeptes des MSB. Das bedeutet, dass jeder Schule ein

Fachberater zugeordnet ist, der bei speziellen, insbesondere technischen Proble-

men, die sich nicht durch Nutzung der Online-Hilfen lösen lassen, für Ihre Fragen zur

Verfügung steht. Sie finden Ihren persönlichen Fachberater, wenn Sie im Internet

auf der Seite https://www.svws.nrw.de/service/fachberatersuche Ihre Schulnummer

eingeben.

- Auch bei MA2 besteht die Möglichkeit einer Fernwartung.

Gehen Sie wie folgt vor:

- Vereinbaren Sie einen Termin (ub@schulorga.de).
- Stellen Sie eine Verbindung mit dem Internet her.
- Laden und starten Sie das Fernwartungstool.

Hinweise:

- Sollte auf Ihrem PC bereits die Software „TeamViewer“ installiert sein, so benö-

tigen Sie das Fernwartungstool nicht.

- Seit geraumer Zeit wird das Fernwartungstool (Dateiname: „FW.exe“) bei der

Installation mit ausgeliefert und befindet sich im selben Verzeichnis wie die Pro-

grammdatei.

Systembeschreibung

### 2 Systembeschreibung

Das Programm MA2:

- Ermöglicht die Erfassung und den Import der erforderlichen Stammdaten

der Lehrkräfte einer Schule, die für die Speicherung und den Ausdruck von

Änderungsmitteilungen an das LBV notwendig sind.

- Speichert die Arbeitsdaten lokal verschlüsselt (AES 256).
- Stellt ein Verfahrensverzeichnis als Kontrollinstrument für den Schutz perso-

nenbezogener Daten zur Verfügung. Dieses Verzeichnis kann für die An-

wendung MA2 aus dem Internet geladen werden und ist soweit möglich vor-

ausgefüllt. Bei Rückfragen wenden Sie sich bitte an den für Ihre Schule be-

stellten Datenschutzbeauftragten, den Sie (schulformübergreifend) beim

Schulamt Ihrer Stadt oder Ihres Kreises erreichen.

Download : Verfahrensverzeichnis Schule (Format: Gezippte MS-Word-Da-

tei)

Hinweise:

- MA2 ist lauffähig unter MS-Windows ab der Version 7 (Windows 7, Win-

dows 8, Windows 10, Windows 11).

- MA2 ist für den Betrieb in einem Terminalserverumfeld ausgelegt.

### 3 Programminstallation

### SchILD-NRW

Das MA2-Installationspaket erhalten Sie im Portal Schulverwaltung NRW im Be-

### reich „Downloads MA2“

Laden Sie das Installationspaket MA2-Setup.exe herunter und starten Sie durch einen

Doppelklick die Installation:

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 8](/bilder/pdf-anleitungen/ma2/seite-08-bild-01.png)

Mit dem Begrüßungsbildschirm starten Sie

den Installationsprozess.

Klicken Sie auf die Schaltfläche „Weiter“,

um die Installation fortzusetzen.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 8](/bilder/pdf-anleitungen/ma2/seite-08-bild-02.png)

Nach dem Begrüßungsbildschirm werden

Sie über einige Installationshinweise und

Kontaktmöglichkeiten informiert.

Klicken Sie auf die Schaltfläche „Weiter“,

um die Installation fortzusetzen.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 8](/bilder/pdf-anleitungen/ma2/seite-08-bild-03.png)

Im folgenden Dialog können Sie Informatio-

nen wie Name und Organisation hinterle-

gen.

Bestätigen Sie Ihre Eingaben anschließend

mit der Schaltfläche „Weiter“.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/ma2/seite-09-bild-01.png)

Das Programm erfragt im nächsten Schritt,

unter welchem Pfad die Installation durchge-

führt werden soll.

Standardmäßig wird das Programm unter

„C:\\SchILD-NRW\\MA2“ installiert.

Wenn Sie einen anderen Zielordner wählen,

so müssen Sie für diesen Ordner die

entsprechenden Schreibrechte besitzen.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/ma2/seite-09-bild-02.png)

Nachdem der Installationspfad mit „Weiter“

bestätigt wurde, fragt das Programm

anschließend nach dem Eintrag im Win-

dows-Start-Menü.

Vorgeschlagen wird der Ordner „MA2", in

welchem das Programm nach der Installati-

on gefunden und gestartet werden kann.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/ma2/seite-09-bild-03.png)

Im nächsten Schritt können Sie festlegen,

ob Sie eine Verknüpfung zum Programm di-

rekt auf dem Desktop haben möchten,

und/oder eine Verknüpfung in der Schnell-

startleiste angelegt werden soll.

Treffen Sie eine Auswahl und bestätigen

Sie diese erneut mit der Schaltfläche

„Weiter“.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/ma2/seite-10-bild-01.png)

Nun folgt die Zusammenfassung Ihrer getä-

tigten Eingaben während der letzten Schrit-

te.

Sollten Sie hier Fehleingaben feststellen,

können Sie mit der Schaltfläche „Zurück“ die

entsprechende Stelle im Installationsassis-

tenten aufrufen, um dort die gewünschte Än-

derung durchzuführen.

Mit der Schaltfläche „Installieren“ können

Sie die eigentliche Installation gemäß Ihren

Eintragungen starten.

![reich „Downloads MA2“ – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/ma2/seite-10-bild-02.png)

Nach der erfolgreichen Installation können

Sie – wie im links abgebildeten Fenster zu

sehen – den Installationsassistenten mit der

Schaltfläche „Fertigstellen“ schließen.

Zuvor haben Sie noch die Option, das Pro-

gramm direkt nach Beendigung des Installa-

tions-Assistenten zu starten.

Hinweis: Über die Systemsteuerung kann das Programm wieder komplett

deinstalliert werden.

### SchILDzentral

- Verwenden Sie nicht das Installationspaket MA2-Setup.exe!
- Laden Sie stattdessen das Zip-Archiv (MA2 -Setup.zip) mit den neuesten

Dateien aus dem Internet herunter und entpacken Sie das Paket.

- Fügen Sie der Datei „SchildExtMod.ini“ im SchILDzentral-Verzeichnis einen

Eintrag hinzu. Z.B.

[Ma2]

Exename=Ma2.exe

Menuetext=Mehrarbeitsabrechnung an das LBV (MA2) starten

Schulverzeichnis=1

Verschluesseln=1

- Kopieren Sie die Datei „MA2.exe“ (siehe Zip-Archiv MA2-Setup.zip) entwe-

der parallel zu SchILDzentral.exe oder in einem anderen Ordner ihrer Wahl,

wobei Sie dann den Parameter „Exename=“ anpassen müssen.

Beispiel: „Exename=c:\\Schild-Zentral\\Module\\MA2.exe“

- Kopieren Sie alle Dateien aus dem \\Vorlagen- Ordner des Zip-Archivs in

den \\Vorlagen-Ordner von SchILDzentral.

- Kopieren Sie alle Dateien aus dem \\Hilfe- Ordner des Zip-Archivs in den

\\Hilfe\\Module-Ordner von SchILDzentral.

- MA2.exe kann nicht direkt aus dem SchILDzentral-Systemordner aufgerufen

werden, sondern nur aus der SchILDzentral-Anwendung heraus!

## Updates, Einstellungen und Zugriff auf SchILD-NRW 2

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 18–25](/dateien/pdf/ma2lbv_anleitung.pdf#page=18).

Updates durchführen

### 5 Sonstige Aktionen

### 5.1 Updates durchführen

Es gibt in unregelmäßigen Abständen Updates für MA2, die die Hinweise und Rück-

meldungen der Anwenderinnen und Anwender, sowie Aktualisierungen des LBV auf-

nehmen. Schauen Sie daher bitte in regelmäßigen Abständen im Info-Menü „? ► Info“

nach, ob ein Programm-Update vorliegt.

![5.1 Updates durchführen – Abbildung aus der Originalanleitung, Seite 18](/bilder/pdf-anleitungen/ma2/seite-18-bild-01.png)

![5.1 Updates durchführen – Abbildung aus der Originalanleitung, Seite 18](/bilder/pdf-anleitungen/ma2/seite-18-bild-02.png)

Klicken Sie auf „Update?", um zu prüfen, ob auf dem Internetserver von MA2 ein Upda-

tepaket vorliegt.

Updates durchführen

![5.1 Updates durchführen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/ma2/seite-19-bild-01.png)

und anschließend auf „Start“:

![5.1 Updates durchführen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/ma2/seite-19-bild-02.png)

Wenn ein neues Programmupdate vorliegt, so wird dies angezeigt. Klicken Sie auf

weiter, um den Updatevorgang zu starten.

Hinweise:

- Auf den Schulverwaltungsseiten NRW können Sie sich durch einen Klick auf

Versionshinweise die gesamte Versionshistorie anzeigen lassen.

- Hier finden Sie auch ein ZIP-Paket, das die jeweils neuesten Programm-

und Datendateien enthält.

- Die oben beschriebene automatische Update-Möglichkeit steht nur auf PCs

zur Verfügung, die einen FTP-Zugang zum Internet haben.

Updates durchführen

- Wird Ihre Schule über den Schulträger von einem externen IT-Dienstleister

betreut, wird dieser Ihnen mitteilen, wie Updates eingespielt werden.

### 5.2 Einstellungen

Klicken Sie auf das Symbol „Einstellungen“ ( ), um notwendige Programmparame-

ter für MA2 festzulegen. Hierzu gehören:

- Formulardaten (z.B. Angaben zur Schule)
- Konfigurationsmöglichkeiten für den Zugriff auf die SchILD-Datenbank

und die Programmbenutzer

und

- Einstellungen, die das Design des Programmfensters betreffen, sowie Mög-

lichkeiten zur Datenfilterung und der automatischen Setzung von Abrech-

nungsmerkmalen („A“ bzw. „V“), wenn sich diese aus dem Kontext ergeben.

Hier ein Beispiel für Formulardaten:

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/ma2/seite-20-bild-03.png)

Einstellungen

Und die Berücksichtigung der Formulardaten im ausgedruckten Formular:

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/ma2/seite-21-bild-01.png)

bzw.:

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/ma2/seite-21-bild-02.png)

Hinweise:

- Beachten Sie, dass das LBV in seiner Ausfüllanleitung für die Änderungs-

mitteilungen klare Vorgaben macht, wer die Mitteilungen unterschreiben und

die sachliche Richtigkeit bestätigen darf.

- Darstellung

Im Bereich Darstellung haben Sie verschiedene Möglichkeiten, die Darstel-

lung der Informationen am Bildschirm ihren Bedürfnissen anzupassen. Die

meisten Optionen sollten selbsterklärend sein. Einige Möglichkeiten sollen

ein wenig ausführlicher erläutert werden:

- Design:

Mit der Auswahl eines Design ändert sich das Layout der Bildschirm-

dialog grundsätzlich. Es stehen eine Reihe von Layouts zur Verfügung,

die sich an Office- oder Windows-Designs orientieren.

Einstellungen

- Symbole:

Die im Programm verwendeten Symbole liegen in drei verschiedenen

Ausprägungen vor:

- Farbig

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 22](/bilder/pdf-anleitungen/ma2/seite-22-bild-01.png)

- Office

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 22](/bilder/pdf-anleitungen/ma2/seite-22-bild-02.png)

- Monochrom

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 22](/bilder/pdf-anleitungen/ma2/seite-22-bild-03.png)

- Hilfedarstellung:

![5.2 Einstellungen – Abbildung aus der Originalanleitung, Seite 22](/bilder/pdf-anleitungen/ma2/seite-22-bild-04.png)

- Sie können sich diese Hilfeinformationen als klassische Win-

dowshilfe anzeigen lassen oder als HTML-Hilfe in Ihrem Stan-

dard-Internetbrowser. Die zweite Option setzt eine Online-Ver-

bindung voraus.

- Besonders dann, wenn die Anwendung von einem Netzlaufwerk

gestartet wird, blockiert das Windows-Betriebssystem aus Si-

cherheitsgründen die Anzeige der klassischen Windowshilfe. In

diesen Fall wählen Sie die Browser-Option.

SchILD-Zugriff / Benutzerdaten

### 5.3 SchILD-Zugriff / Benutzerdaten

Daten von Lehrkräften können aus einer SchILD-Datenbank importiert werden. Um auf

diese Daten zugreifen zu können, muss der Zugriff auf die SchILD-Datenbank konfigu-

riert werden.

Den zugehörigen Dialog erreichen Sie vom Dialog für die allgemeinen Einstellungen

.

Hier lassen sich zudem die Benutzerdaten für die externen Benutzer konfigurieren.

### Schild-Zugriff

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 23](/bilder/pdf-anleitungen/ma2/seite-23-bild-01.png)

Den Schild-Zugriff können Sie über

SchILD-Zugriff / Benutzerdaten

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 24](/bilder/pdf-anleitungen/ma2/seite-24-bild-01.png)

und die Auswahl der zugehörigen Datenbank

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 24](/bilder/pdf-anleitungen/ma2/seite-24-bild-02.png)

steuern.

Wenn im oberen Fenster „SchILDNRW UDL-Datei(*.UDL) gewählt wurde, kann im un-

teren Fenster die entsprechende UDL-Datei ausgewählt werden. Beachten Sie dabei,

dass bei Verwendung der Schild-Standarddatenbank (schild2000n.mdb) der Zugriff

über die MDB-Datei erfolgen muss, weil zur Schild-Standarddatenbank keine UDL-Da-

tei existiert.

Über "Verbindung testen" erkennt man, ob die Verbindung erfolgreich ist.

### Benutzerdaten

Das Programm verwaltet insgesamt vier externe Benutzerzugänge. Der wichtigste ist

der Benutzer mit dem Login-Name "MA2Admin" (Eingangskennwort "schild"). Der Lo-

gin-Name kann nicht geändert werden, wohl aber das Kennwort. Die anderen Benut-

zerdaten (beim Programmstart: Login-Name: "BN1", ... , "BN3"; Start-Kennwort jeweils:

"schild") sind hinsichtlich Login-Name und Kennwort durch den Benutzer "MA2Admin"

frei konfigurierbar.

Hinweise:

- Sie können sich auch mit einem SchILD-Benutzer im Programm "MA2" an-

melden. Um Lehrkraftdaten aus SchILD nach MA2 importieren zu können,

muss dieser SchILD-Benutzer das Recht haben, Lehrkraftdaten lesen zu

dürfen (siehe Benutzerverwaltung SchILD).

- Die Einstellungen für die Benutzerdaten und die SchILD-Datenbank werden

verschlüsselt im MA2-Programmverzeichnis ("MA2.Ini") abgelegt.

SchILD-Zugriff / Benutzerdaten

- Nur der Benutzer mit dem Login-Name "MA2Admin" kann diesen Dialog

aufrufen und den SchILD-Zugriff sowie die Benutzerdaten bearbeiten.

- Für den Zugriff auf Serverdatenbanken müssen Zugangsdaten für den Ser-

ver angegeben werden. Diese Daten können im Bereich "Datenbankbenut-

zer" hinterlegt werden:

![Benutzerdaten – Abbildung aus der Originalanleitung, Seite 25](/bilder/pdf-anleitungen/ma2/seite-25-bild-01.png)

## Installationshinweise der Versionsdokumentation

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 1–2](/dateien/pdf/ma2pdf_versionsgeschichte.pdf#page=1).

Dieser Abschnitt gibt die Hinweise der dokumentierten Programmausgabe wieder.

![Installationshinweise der Versionsdokumentation – Abbildung aus der Originalanleitung, Seite 1](/bilder/pdf-anleitungen/ma2-versionshinweise/seite-01-bild-01.jpg)

### SchILD-Zusatzmodul MA2

### Mehrarbeitsmitteilung an das LBV

### 1. Installationshinweise

- SchILD-NRW Laden Sie das Installationspaket aus dem Internet herunter und speichern die Datei ma2_setup.exe in ein o leeres Unterverzeichnis (z.B. c:\\temp). Führen Sie die Datei ma2_setup.Exe aus (z.B. durch "Doppelklicken"). o Nach der Installation und dem ersten Programmstart werden Sie nach Benutzerdaten gefragt. Diese sind: o Benutzername: MA2Admin o Passwort: schild o Erstkonfiguration o 1. Melden sie sich als Benutzer "MA2Admin" an (Das Startkennwort für "MA2Admin" lautet "Schild"). 2. Geben Sie die Formulardaten für Ihre Schule ein und konfigurieren Sie die sonstigen Einstellungen. 3. Konfigurieren Sie den SchILD-Zugriff und testen Sie die Verbindung. 4. Importieren Sie Daten aus SchILD oder über die allgemeine Schnittstelle. Erst wenn die Ersteinrichtung abgeschlossen ist, erfolgt der eigentliche Programmstart. Hinweis:
- Der Benutzer „MA2Admin“ hat nur administrative Aufgaben. Seine Aufgabe ist lediglich, die Verbindung zur SchILD-Datenbank zu konfigurieren.
- Einen Einblick in die Mehrarbeitsdaten bekommt dieser Benutzer nicht!
- Unter SchILDzentral wird der Benutzer „MA2Admin“ nicht benötigt.
- SchILDzentral Laden Sie das Zip-Archiv (ma2_setup.zip) mit den neuesten Dateien aus dem Internet herunter und o entpacken Sie das Paket. Kopieren Sie die ausführbare Datei MA2.exe in das Systemverzeichnis von SchILDzentral. o Kopieren Sie alle Dateien aus dem \\Vorlagen- Ordner des Zip-Archivs in den Ordner „\\Vorlagen“ von o SchILDzentral. MA2.exe kann nicht direkt aus dem SchILDzentral-Systemordner aufgerufen werden, sondern nur aus der o SchILDzentral-Anwendung heraus! Fügen Sie der Datei „SchildExtMod.ini“ im SchILDzentral-Verzeichnis einen Eintrag hinzu. Z.B. o [MA2] Exename=MA2.exe Menuetext=Mehrarbeitsabrechnung an das LBV (MA2) starten Schulverzeichnis=1 Verschluesseln=1 Kopieren Sie die Datei „MA2.exe“ (siehe Zip-Archiv Ma2_setup.zip) entweder parallel zu SchILDzentral.exe o oder in einem anderen Ordner ihrer Wahl, wobei Sie dann den Parameter „Exename=“ anpassen müssen. Beispiel: „Exename=c:\\Schild-Zentral\\Module\\MA2.exe“ Die doppelte Benutzerdatenabfrage (SchILD und Modul) entfällt. o Kopieren Sie die Vorlagen „LBV-LAA-Vorlage.pdf“ und „LBV-Vorlage.pdf“ aus dem Zip-Archiv in den o Vorlagenordner von SchILDzentral Kopieren Sie die Datei „MA2.chm“ aus dem Zip-Archiv in den Ordner „Hilfe\\Module\\“ von SchILDzentral. o Z.B.: c:\\SchILD-Zentral\\Hilfe\\Module\\MA2.chm Kopieren Sie die Datei „Ausfuellanleitung.pdf“ in das gleiche Verzeichnis. o

### 2. Support

- Die Internetpräsenz dieser Anwendung finden Sie auf den Schulverwaltungsseiten NRW: Hier finden Sie neben aktuellen Hinweisen auch Downloadmöglichkeiten für Programminstallationen und notwendige Updates - Sie sollten regelmäßig - nicht nur bei Fragen oder Hinweisen - das Anwenderforum aufsuchen. - Diese Anwendung ist Teil des Supportkonzeptes des MSW. D.h. Jeder Schule ist ein Fachberater zugeordnet, der bei speziellen, insbesondere technischen Problemen, die sich nicht durch Nutzung der Online-Hilfen lösen lassen, für Ihre Fragen zur Verfügung steht. Sie finden Ihren persönlichen Fachberater, wenn Sie diesen Link anklicken und auf der Seite einfach Ihre Schulnummer eingeben. - Die Anwendung unterstützt die Fernwartungsmöglichkeiten von „Schulverwaltung NRW“.

### 3. Versionsänderungen:

3.2.3.2 - Release: 09.04.2024 - Aufgrund vieler Anfragen haben wir das Fachverfahren "MA2LBV" in "MA2" umbenannt. - Die Benutzerführung wurde überarbeitet und den anderen SchILD-Tools angepasst. - Das aktuelle LBV-Mitteilungsformular wurde in die Setup-Pakete aufgenommen, ebenso die neue Ausfüllanleitung. - Da das Landesprogramm "Nachholen und Ankommen nach Corona" ausgelaufen ist, wurde diese Fördermöglichkeit aus dem Modul "MA2" gestrichen. Der alleinige verbleibende Anlass ist die angeordnete Mehrarbeit zur Sicherung der Unterrichtsversorgung. - Damit ein Benutzer Daten aus SchILD-NRW bzw. SchILDzentral importieren kann, muss er entweder Admin- Rechte besitzen oder der Benutzer muss das Recht besitzen, lesend auf Lehrkraftdaten zu zugreifen. - Darüber hinaus wurden verschiedene kleinere Hinweise und Wünsche aus dem SchILD-Forum aufgenommen.

3.1.0.0 (als Test-Version) - Release: 25.02.2023 - Das Drucken von Änderungsmitteilungen war bisher nur mithilfe eines auf dem PC installierten PDF-Readers, wie z.B. dem Acrobat Reader, möglich. Der Grund hierfür sind im PDF implementierte Programmroutinen, die u.a. das Druckbild um einen Barcode ergänzen und Gitterlinien entfernen, um die Scan-Genauigkeit zu erhöhen. Diese Programmroutinen werden jedoch nur ausgeführt, wenn der Druck vom Acrobat Reader aus gestartet wird. Das bedeutet: Um eine Änderungsmitteilung aus MA2LBV heraus zu drucken, startet das Programm MA2LBV im Hintergrund den Acrobat Reader und weist diesem die entsprechende PDF-Datei zum Öffnen und Drucken zu. Dieses Verfahren ist nicht standardisiert und führt mitunter nicht zum gewünschten Ergebnis. - Die neue Version von MA2LBV bildet diese PDF-Programmroutinen selbstständig nach, sodass der Umweg über den Acrobat Reader nicht mehr notwendig ist. Die hiermit erzeugten Ausdrucke wurden im Vorfeld dem LBV zur Prüfung vorgelegt und sind mittlerweile genehmigt. - In den Einstellungen des MA2LBV -Programms können Sie auswählen, ob der Ausdruck wie gewohnt über den Acrobat Reader erfolgen soll oder direkt aus dem Programm heraus. - Bei einer Änderungsmitteilung müssen Sie angeben, ob die Mittel aus dem Topf "Unterrichtssicherung (SdU)" oder "Aufholen und Ankommen nach Corona (AAC)" bezahlt werden sollen. Wenn Sie hier keine Auswahl treffen, markiert das Programm die Option "SdU", da dies die Standardauswahl sein dürfte. - Darüber hinaus wurden verschiedene kleinere Hinweise und Wünsche aus dem SchILD-Forum aufgenommen. - Diese Version von MA2LBV (3.1.0.0) wird als Vorabversion zum Testen bereitgestellt. Wenn Sie also Hinweise, Wünsche etc. haben sollten, teilen Sie diese gerne im SchILD-Forum mit oder schreiben eine Mail an ub@schulorga.de 3.0.1.0 - Release: 13.01.2022 - Kleinere Änderungen und Ergänzungen (z.B. Auswahl neuer Abrechnungszeiträume)

3.0.0.0 - Release: 16.12.2021 - Unterstützung der Mehrarbeitsabrechnung von Bestandslehrkräften aus Mitteln des Landesprogramms „Ankommen und Aufholen nach Corona“ siehe Kapitel „Ankommen und Aufholen nach Corona“ in der Bedienungsanleitung. - Kleinere Änderungen und Ergänzungen

2.9.4.0 - Release: 14.11.2020 - HDDPI-Unterstützung - Es stehen drei verschiedene Symbol-Bibliotheken zur Auswahl durch den Benutzer zur Verfügung (siehe Einstellungen). - Wahlmöglichkeit ob die Hilfeanzeige als Windows-Hilfe oder als Browser-Hilfe angezeigt wird (siehe Einstellungen). - Kleinere Änderungen und Ergänzungen - Fehlerkorrekturen

2.9.3.0 - Release: 19.02.2020 - Anpassungen an das aktuelle Formular des LBV (LBV(A/Bes/Bes)23.02.2019.pdf / Stand 23.02.2019)
