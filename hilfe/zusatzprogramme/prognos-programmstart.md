---
title: "PM2 erstmals starten"
---

<a id="prognos-programmstart"></a>

# PM2 erstmals starten

Beim ersten Programmstart erscheint folgendes Informationsfenster:

![PM2_Erststart_01](/bilder/tools/pm2/pm2-erststart-01.png)

Nach einem Klick kann der erste Programmstart mittels der hier aufgeführten Benutzerdaten fortgesetzt werden:

Benutzername: **PM2Admin**\
Passwort: **SchILD-NRW 2**

Als nächstes erscheint der Hinweis, das Startkennwort für den Benutzer **PM2Admin** zu ändern.

Zuerst sollte allerdings der SchILD-NRW 2-Zugriff eingestellt werden, das Menü ändert sich, je nachdem, ob udl oder mdb ausgewählt wird.

Zugriff über udl:

![PM2_Erststart_02](/bilder/tools/pm2/pm2-erststart-02.png)

Zugriff über mdb:

![PM2_Erststart_03](/bilder/tools/pm2/pm2-erststart-03.png)

Als dritte mögliche Option ist der Zugriff über SchildZentral möglich.

Nach Auswahl der entsprechenden Datei, dem Ändern des PM2Admin-Passwortes und der Eintragung mindestens eines Benutzers kann die Verbindung zur Datenbank getestet werden. Das Passwort für den PM2-Admin muss dabei Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten!

Als nächstes erscheint das Fenster **Einstellungen**:

![PM2_Erststart_04](/bilder/tools/pm2/pm2-erststart-04.png)

Zu diesem Zeitpunkt müssen hier aber noch keine Einstellungen vorgenommen werden. Nach "Speichern" erscheint der Hinweis, dass man sich einem als SchILD-NRW 2-Benutzer mit Administrationsrechten anmelden muss, um PM2 für den Zugriff auf SchILD-NRW 2 zu autorisieren.

Danach erscheint, wie bei jedem weiteren Programmstart, das folgende Fenster:

![PM2_Erststart_05](/bilder/tools/pm2/pm2-erststart-05.png)

Quelle: [Prognos:Programmstart – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Prognos%3AProgrammstart&oldid=5339)

## SchILD-Zugriff, Benutzerdaten und Startparameter

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 37–42](https://www.svws.nrw.de/system/files/media/document/file/pm2_bedienungsanleitung_1.pdf#page=37).

Report-Explorer

- Die Reportdatei wird im Ordner "\\Reports" des Installationsordners gespeichert. PM2-Reports haben die Dateierweiterung "rPM2"
- Prognosemitteilungen an die Erziehungsberechtigten lassen sich nur im Analysemodus "SchILD" ausdrucken und nicht im Modus "PM2-Notendatei".

### 7.5 SchILD-Zugriff / Benutzerdaten

Um auf SchILD-Daten zugreifen zu können, muss der Zugriff auf die SchILD-Datenbank

konfiguriert werden.

Den zugehörigen Dialog erreichen Sie als Benutzer "PM2Admin" auf der Registerseite

"SchILD".

Hier lassen sich zudem die Benutzerdaten der internen Benutzer konfigurieren.

### Schild-Zugriff

Klicken Sie auf die Schaltfläche "SchILD-Zugriff",

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 37](/bilder/pdf-anleitungen/pm2/seite-37-bild-01.png)

um den zugehörigen Konfigurationsdialog anzuzeigen:

SchILD-Zugriff / Benutzerdaten

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 38](/bilder/pdf-anleitungen/pm2/seite-38-bild-01.png)

Den Schild-Zugriff können Sie über

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 38](/bilder/pdf-anleitungen/pm2/seite-38-bild-02.png)

und die Auswahl der zugehörigen Datenbank

![Schild-Zugriff – Abbildung aus der Originalanleitung, Seite 38](/bilder/pdf-anleitungen/pm2/seite-38-bild-03.png)

steuern.

Wenn im oberen Fenster "SchILD-NRW UDL-Datei(*.UDL) gewählt wurde, kann im un-

teren Fenster die entsprechende UDL-Datei ausgewählt werden. Beachten Sie dabei,

dass bei Verwendung der Schild-Standarddatenbank (schild2000n.mdb) der Zugriff

über die MDB-Datei erfolgen muss, weil zur Schild-Standarddatenbank keine UDL-Da-

tei existiert.

Über "Verbindung testen" erkennt man, ob die Verbindung erfolgreich ist.

SchILD-Zugriff / Benutzerdaten

### Benutzerdaten

Das Programm verwaltet insgesamt vier interne Benutzerzugänge . Der Wichtigste

ist der Benutzer mit dem Login-Namen "PM2Admin" (Eingangskennwort "schild"). Der

Login-Name kann nicht geändert werden, wohl aber das Kennwort. Die anderen Benut-

zerdaten (beim Programmstart: Login-Name: "BN1", ... , "BN3"; Kennwort: "schild")

sind hinsichtlich Login-Name und Kennwort frei konfigurierbar.

Hinweise:

- Die Einstellungen für die internen Benutzerdaten und die SchILD-Datenbank werden verschlüsselt im PM2-Programmverzeichnis ("PM2.Ini") abgelegt.
- Nur der Benutzer mit dem Login-Namen "PM2Admin" kann diesen Dialog aufrufen und den SchILD-Zugriff sowie die Benutzerdaten bearbeiten.
- Für den Zugriff auf Serverdatenbanken müssen grundsätzlich Zugangsdaten für den Server angegeben werden. Diese Daten können im Bereich "Datenbankbenutzer" hinterlegt werden:

![Benutzerdaten – Abbildung aus der Originalanleitung, Seite 39](/bilder/pdf-anleitungen/pm2/seite-39-bild-02.png)

### 7.6 Programm-Update

Es gibt in unregelmäßigen Abständen Updates für PM2, die die Hinweise und Rück-

meldungen der Anwenderinnen und Anwender aufnehmen. Schauen Sie daher bitte in

regelmäßigen Abständen im Info-Menü "Hilfe ► Update" nach, ob ein Programm-Up-

date vorliegt.

Programm-Update

![7.6 Programm-Update – Abbildung aus der Originalanleitung, Seite 40](/bilder/pdf-anleitungen/pm2/seite-40-bild-01.png)

Klicken Sie auf "Update?", um zu prüfen, ob auf dem Internetserver von PM2 ein Upda-

tepaket vorliegt.

![7.6 Programm-Update – Abbildung aus der Originalanleitung, Seite 40](/bilder/pdf-anleitungen/pm2/seite-40-bild-02.png)

und anschließend auf "Start":

Wenn ein neues Programmupdate vorliegt, so wird dies angezeigt. Klicken Sie auf

"Weiter", um den Updatevorgang zu starten.

Hinweise:

- Auf den Schulverwaltungsseiten NRW können Sie sich durch einen Klick auf Versionshinweise die gesamte Versionshistorie anzeigen lassen.
- Hier finden Sie auch ein ZIP-Paket, das die jeweils neuesten Programm- und Datendateien enthält.
- Die oben beschriebene automatische Update-Möglichkeit steht nur auf PCs zur Verfügung, die einen FTP-Zugang zum Internet haben.

Programm-Update

- Wird Ihre Schule über den Schulträger von einem externen IT-Dienstleister betreut, wird dieser Ihnen mitteilen, wie Updates eingespielt werden.

### 7.7 Startparameter

Die folgenden Startparameter können beim Aufruf von PM2.exe gesetzt werden:

- BN= Vorbelegung des Login-Namens beim Anmeldedialog.
- PW= Vorbelegung des Passwortes beim Anmeldedialog.

Hinweis: Verwenden Sie diesen Parameter nur, wenn Sie sicher sind, dass keine unberechtigten Personen auf Ihren PC bzw. auf die Startparameter zugreifen können.

- OHNESCHILD Wenn dieser Parameter gesetzt wird, ist nur die Einzelanalyse eines Notenbildes oder die Analyse von Notenbildern aus einer PM2-Notendatei möglich. Der Zugriff auf die Leistungsdaten innerhalb einer SchILD-Datei ist nicht möglich. Es erfolgt keine Kennwortabfrage.

Hinweis: Durch einen Doppelklick auf die Datei "PM2_ohne_Schild_starten.bat" (siehe PM2-Installationsordner) wird PM2.exe automatisch mit dem Startparameter "OHNESCHILD" gestartet.

- NOUPDATE Der Menüpunkt "Update?" wird ausgeblendet. Automatische Updates aus dem Programm heraus sind nicht möglich.
- MODUS= Vorauswahl eines Prognoseverfahrens: MODUS=E: PM2 wird im Modus "Einzelanalyse " gestartet MODUS=D: PM2 wird im Modus "Analyse von PM2-Notendateien " gestartet (d.h. es wird direkt ein Dialog zur Auswahl einer PM2-Notendatei angezeigt) MODUS=K: PM2 wird im Modus "Analyse von SchILD-Daten " gestartet (d.h. es wird direkt ein Dialog zur Auswahl einer SchILD-Klasse angezeigt).
- Datei= Wenn beim Start des PM2-Programms direkt die Notenbilder einer csv-Datei angezeigt werden sollen, so übergeben Sie hier den vollständigen Dateinamen. Beispiel:

Startparameter

- Durch "Datei=C:\\PM2\\Beispiele\\Noten.pm2l" werden beim Programmstart direkt die Notenbilder der Datei "C:\\PM2\\Beispiele\\Noten\\pm2l" angezeigt.
- Durch "Datei={SV}\\Dat\\Noten.pm2l" werden beim Programmstart zunächst der Platzhalter {SV} ausgewertet (siehe Startparameter SV=) und dann der vollständige Dateipfad zur Notendatei gebildet.
- KLASSE= Wenn beim Start des PM2-Programms direkt die Notenbilder einer bestimmten SchILD-Klasse angezeigt werden sollen, so übergeben Sie hier die Klassenbezeichnung. Beispiel: Durch "KLASSE=10a" werden beim Programmstart direkt die Notenbilder der Klasse 10a aus der Schilddatenbank angezeigt.

Hinweis: Zuvor muss natürlich die Verbindung zur SchILD-Datenbank konfiguriert worden sein.

- SV= Standardmäßig verwendet PM2 eine Verzeichnisstruktur unterhalb von PM2.exe. Durch den Parameter "SV=" können Sie PM2 veranlassen ein anderes Verzeichnis zu verwenden. Beispiel: Durch den Aufruf von "PM2.exe SV=C:\\Daten\\Schulverzeichnis" verwendet PM2.exe als Datenverzeichnis für die Schule "C:\\Daten\\Schulverzeichnis\\PM2".

Hinweis: Der Unterordner "\\PM2" wird automatisch hinzugefügt.

### Konfigurationsdatei

Anstatt diese Parameter direkt als Startparameter zu übergeben, können Sie auch in

eine Konfigurationsdatei verwendet werden. Diese Konfigurationsdatei hat die Be-

zeichnung "PM2.cfg" und muss sich im selben Verzeichnis wie die Programmdatei

"PM2.exe" befinden.

Hier ein Beispiel:

Modus=D

Datei=c:\\SP_Testumgebung\\PM2\\Referenzen\\dat\\Referenzen.pm2l
