---
title: "Schild-NRW Installation"
wiki_title: "Schild-NRW Installation"
wiki_page_id: 1362
wiki_revision: 6059
---

# Schild-NRW Installation

Seit dem 31.10.25 steht der Nachfolger zur Verfügung: 

[**Schild-NRW 3 und SVWS-Server**](https://www.svws.nrw.de/)

-\> zum [Schild3-Wiki](https://schulverwaltungsinfos.nrw.de/svws/wiki/)

-\> zur [SVWS-Server Dokumentation](https://doku.svws-nrw.de)

Bitte wägen Sie ab, ob ein Umstieg auf Schild 2 oder ein Umstieg der Datenhaltung von Access auf MS-SQL oder MySQL innerhalb Ihrer Schild-NRW 2 Umgebung noch nötig ist.

Ggf. ist der Aufbau einer neun Umgebung für SVWS-Server und Schild-NRW 3 hier ressourcenschonender.

<a id="Einzelplatzinstallation"></a>

## Einzelplatzinstallation

In den Folgenden Artikeln erfahren Sie, wie Schild-NRW installiert werden kann. Vor der Installation sollten Sie die Systemvoraussetzungen prüfen. Als Betriebssysteme benötigen Sie Windows 10 oder höher. Die Bildschirmauflösung sollte mindestens 1024x768 betragen.

<a id="Download_der_Installationsdateien"></a>

### Download der Installationsdateien

Laden Sie von der Homepage die Dateien für das BasisSetup.exe und evtl. das aktuelle Update herunter.

[Schild.NRW Download](https://www.svws.nrw.de/download/schild-nrw/schild-nrw-download)

Die Installation auf einem Einzelplatzrechner erfolgt über die Datei Basissetup.exe, die im Downloadbereich von Schild-NRW erhältlich ist. Bitte beachten Sie, dass u.U. zusätzlich noch eine Updatedatei notwendig sein kann, um auf die neueste Version von Schild-NRW zu gelangen.

Führen Sie diese Installationsdateien aus und lassen Sie sich von dem Assistenten durch die Routine leiten. Bei der Installation ist zu beachten, dass Sie Administratorrechte auf dem Windowsrechner benötigen. Bitte vergewissern Sie sich, dass dies der Fall ist.

Durch die Besonderheiten, die durch den Schutz des „Programmverzeichnisses“ bei Windows 7 und Windows 10 zu beachten sind, empfehlen wir die Installation in das Verzeichnis C:\Schild-NRW. Der Installationsort kann auch verändert werden, bitte beachten Sie aber, dass Sie in dem gewählten Verzeichnis volle Zugriffsrechte haben.

<a id="Registrierung_der_ASDStatitsik.dll"></a>
<a id="Registrierung_der_Statitsik.dlls"></a>

### Registrierung der ASDStatitsik.dll

![Adminzugriff](/bilder/wiki/adminzugriff-bcfaa136.jpg)
Schild-NRW als Administrator starten.

Prüfen Sie nach der Installation in Schild-NRW, ob der Statistikexport funktioniert. Dazu rufen Sie in Schild-NRW das Menü Schulverwaltun \> Statistik / amtliche Schuldaten \> Export (mit Modulen von IT-NRW) auf und wählen einen der angebotenen Exporte.

Sollten Sie eine Fehlermeldung [Fehler beim Aufruf der Statistik-DLL: Klasse nicht registriert](/hilfe/probleme/fehler-beim-export-der-statistikdateien-klasse-nicht-registriert) erhalten, so führen Sie das Programm Schild-NRW nochmals explizit mit der rechten Maustaste als Administrator aus.

![HilfebeiProblemen](/bilder/wiki/hilfebeiproblemen-9fb4d013.jpg)
Probleme beim Statistikexport beseitigen.

Gehen Sie dann unter "Schulverwaltung \> Statistik / amtliche Schuldaten \> Hilfe bei Problemen". Klicken Sie dort die Schaltfläche "Dateien registrieren". Danach sollte die Fehlermeldung weg sein und der Export sollte möglich sein. Sollte der Button nicht anklickbar sein, so haben Sie keine Administratorenrechte auf dem PC!

Ein Video-Tutorial gibt es hier:

[Video ansehen](https://www.youtube-nocookie.com/embed/x0I1M7M5EMM)

<a id="Verbindung_zur_Datenbank"></a>

### Verbindung zur Datenbank

![Datenbankdatei](/bilder/wiki/datenbankdatei-efc922f3.jpg)
schild2000n.mdb als Datenbankdatei

Die Standarddatenbank liegt im Ordner DB der Schild-Installation und hat den Namen Schild2000n.mdb. Diese Datenbank wird unter Schild-NRW als Schild-Standarddatenbank angeboten.

Wenn Sie bereits eine bestehende Datenbank aus einer anderen Installation besitzen, so kopieren Sie die Datei Schild2000n.mdb in den Ordner DB und überschreiben die leere Datenbank aus der Basis-Installation. Somit stehen Ihnen die Schülerdaten wieder zur Verfügung.

<a id="Verbindung_zu_mehreren_Datenbanken"></a>

### Verbindung zu mehreren Datenbanken

![UdlDateien](/bilder/wiki/udldateien-4c98e4fd.jpg)
Mehrere Datenbanken

Im Ordner UDL der Schild-Installation befindet sich eine Datei Test-Hauptschule.udl. Sie können über diese UDL-Dateien beliebig viele Verbindungen zu weiteren Datenbanken aufbauen.

Wollen Sie, dass die Test-Hauptschule-Datenbank nicht zur Verfügung steht, so löschen Sie bitte die UDL-Datei oder benennen Sie die Dateiendung um. Für weitere Datenbanken kopieren Sie einfach die UDL-Datei und fügen Sie diese in den UDL-Ordner der Schild-Installation ein. Benennen Sie die UDL-Datei nach Ihren Wünschen um. Der Dateiname der UDL-Datei bestimmt den Anzeigenamen der Datenbank, der später im Auswahldialog angezeigt wird.

Klicken Sie mit der rechten Maustaste auf die UDL-Datei und gehen Sie auf Eigenschaften \> Verbindung. Geben Sie durch Klick auf die drei Punkte den Dateipfad zur gewünschten weiteren Datenbank an.

Jetzt steht diese Datenbank beim Start von Schild zur Verfügung.

Unter Windows 7 (10) 64bit können die UDL-Dateien nicht mehr mit den Eigenschaften umgestellt werden.

Hier müssen Sie folgenden Text in eine normale Textdatei kopieren:

\[oledb\]\
; Everything after this line is an OLE DB initstring\
Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Program Files (x86)\SchILD-NRW\DB\RS_2012_HJ1.mdb;Persist Security Info=False\

Speichern Sie diese Textdatei mit dem Dateinamen.udl als UNICODE-Datei ab! Kopieren Sie diese Datei in den Ordner UDL der Schild-Installation. Im Auswahlfenster wird Ihnen dann eine Datenbank angeboten, die den Namen der UDL-Datei trägt.

Diese Schritte sind nur notwendig, wenn Sie Zugriff auf mehrere Datenbanken haben wollen. Sollten Sie mit diesen Hinweisen nicht zurechtkommen, so kontaktieren Sie bitte Ihren Fachberater oder Ihren IT-Dienstleister.

<a id="Einrichten_der_Reportverwaltung"></a>

### Einrichten der Reportverwaltung

![Reportexplorer](/bilder/wiki/reportexplorer-0f25c092.jpg)
Reportexplorer

Starten Sie einmal Schild-NRW und gehen Sie auf die Druckausgabe \> Reportverwaltung starten. Dort wurden mit der Basis-Installation einige Reports mitgeliefert. Ein sehr umfangreiches Reportpaket können Sie auch von der Schild-NRW-Homepage herunterladen:

\[[Schild-NRW-Reportsammlung](https://www.svws.nrw.de/download/schild-nrw/schild-nrw-reports/reportsammlungen)\]

Entpacken Sie das ZIP-Paket nun im Ordner Schild-Reports. Achten Sie darauf, dass die Ordnerstruktur der Reportverwaltung in diesem Ordner nachgebildet werden muss. Wichtig sind die Ordner Standard, Header_Footer, Standardtexte und Subreports. Alle anderen Ordner können frei benannt werden!

Die einzelnen Reports liegen dann als RTM-Dateien im Ordner Schild-Reports und stehen dann in der Reportverwaltung zur Verfügung. Durch das Abspeichern der RTM-Dateien können Sie beliebige Reports für die Schild-Benutzer zur Verfügung stellen.

Bitte beachten Sie, dass hier sehr viele Reports angeboten werden. Löschen Sie die nicht benötigten Formulare, damit die Reportverwaltung übersichtlich bleibt!

<a id="Schild-NRW_Module_und_Tools"></a>

### Schild-NRW Module und Tools

Sie können von der Schild-NRW-Homepage auch noch zusätzliche Module für bestimmte Aufgaben herunterladen, die nicht alle Schulen immer benötigen. Bitte beachten Sie die jeweiligen Installationshinweise, die dort gegeben werden.

\[[Schild-NRW Module/Tools](https://www.svws.nrw.de/download/schild-tools)\]

<a id="Programm-Einstellungen"></a>

### Programm-Einstellungen

Die Benutzer von Schild-NRW können das Programm in den Einstellungen an ihre Bedürfnisse anpassen. Hierzu finden Sie weitere Informationen im Artikel zu den [Programm-Einstellungen](/administration/benutzer-einstellungen/programm-einstellungen).

<a id="Einzelplatzinstallation_mit_Zugriff_von_einem_anderen_Rechner"></a>

## Einzelplatzinstallation mit Zugriff von einem anderen Rechner

Dieser Hilfeartikel beschreibt, wie Sie eine Installation von Schild-NRW auf einem PC durchführen können, um zusätzlich von einem anderen PC gemeinsam auf die Schild-NRW-Datenbank zugreifen zu können.

Führen Sie zunächst an dem Rechner, der als "Mini-Server" dienen soll, eine Schild-NRW Einzelplatzinstallation durch (s.o.).

Stellen Sie sicher, dass dieser PC im Netzwerk erreichbar ist und geben Sie den Installationsordner von Schild-NRW im Netzwerk frei. Vollzugriff ist mindestens auf folgende Ordner unbedingt erforderlich: DB, Statistik, Schild-Reports

Verbinden Sie auf dem Client, der Zugriff bekommen soll, ein Netzlaufwerk mit diesem Ordner. Das Netzlaufwerk sollte so eingerichtet sein, dass es beim Start des Rechners zur Verfügung steht. Stellen Sie anschließend eine Verknüpfung mit der Schild2000.exe aus dem Netzlaufwerk auf dem Desktop des Clients her.

Starten Sie die Anwendung Schild-NRW einmal auf jedem Client explizit mit der rechten Maustaste als Administrator und führen Sie die Schritte zur Registrierung der Statitsik.dlls einmal durch (Schulverwaltung \> Statistik amtl. Schuldaten \> Hilfe bei Problemen). Danach kann die Anwendung mit normalen User-Rechten gestartet werden. Der Zugriff auf Schild-NRW kann nur bei eingeschaltetem "Mini-Server" funktionieren!

<a id="Server-Installation_mit_Access-Datenbank"></a>

## Server-Installation mit Access-Datenbank

In allen Schulformen, die mit mehr als einem PC gleichzeitig an Schild-NRW arbeiten wollen, empfehlen wir eine Serverinstallation. Dieser Artikel beschreibt die notwendigen Installationsschritte für eine Serverinstallation mit Access-Datenbank.

Für den Betrieb von Schild-NRW mit einer Access-Datenbank ist es nicht von Bedeutung, ob Sie einen Windows-Server oder einen Linux-Server betreiben. Geben Sie einen Ordner auf dem Server für das Netzwerk frei! Führen Sie bei einem Windows-Server eine Basis-Installation in diesen Netzwerkordner durch. Wenn Sie einen Linux-Server betreiben, kopieren Sie die Dateien der Basis-Installation einfach in das freigegebene Samba-Verzeichnis. Stellen Sie sicher, dass die User der Clients im Verwaltungsbereich vollen Zugriff auf das Schild-NRW-Verzeichnis haben. Vollzugriff ist mindestens auf folgende Ordner unbedingt erforderlich: DB, Statistik, Schild-Reports

Empfohlen wird, auf den Verwaltungs-Clients ein Netzlaufwerk fest zu verbinden, das auf allen PCs den selben Buchstaben erhält. In Schild-NRW kann dann dieser Pfad unter Extras \> Programmeinstellungen \> globale Einstellungen verwendet werden, um für alle User die gewünschte Umgebung (z.B. Reportverwaltung, Dokumentenverwaltung) zur Verfügung zu stellen. Erstellen Sie auf dem Desktop der Verwaltungs-PCs eine Verknüpung zur Anwendung Schild2000.exe aus dem Netzlaufwerk.

Starten Sie die Anwendung Schild-NRW einmal auf jedem Client explizit mit der rechten Maustaste als Administrator und führen Sie die Schritte zur [Registrierung der Statitsik.dlls](#Registrierung_der_Statitsik.dlls) einmal durch. Danach kann die Anwendung mit normalen Benutzerrechten gestartet werden.

Die Benutzer von Schild-NRW können das Programm in den Einstellungen an ihre Bedürfnisse anpassen. Hierzu finden Sie weitere Informationen im Artikel zu den [Programm-Einstellungen](/administration/benutzer-einstellungen/programm-einstellungen).

<a id="Server-Installation_mit_Microsoft_SQL_Server-Datenbank"></a>

## Server-Installation mit Microsoft SQL Server-Datenbank

In allen Schulformen, die mit mehr als einem PC gleichzeitig an Schild-NRW arbeiten wollen, empfehlen wir eine Serverinstallation. Dieser Artikel beschreibt die notwendigen Installationsschritte für eine Serverinstallation mit MS SQL Server-Datenbank. Informationen zur Einrichtung und zur Inbetriebnahme des Datenbanksystems finden Sie hier. Grundsätzlich wird aber vorausgesetzt, dass bei einem Betrieb mit einem MS SQL Datenbankserver Kenntnisse über dieses Datenbanksystem vorhanden sind.

Lesen Sie sich zunächst die Schritte zur Installation von Schild-NRW im Kapitel [Server-Installation mit Access-Datenbank](#Server-Installation_mit_Access-Datenbank) durch, da die grundsätzliche Installation bei Verwendung einer MS SQL Server Datenbank gleich ist. Stellen Sie sicher, dass ein Server im Schulverwaltungsnetz über den Port, den Sie später verwenden wollen, erreichbar ist. Installieren Sie dort den MS SQL Server in der gewünschten Variante. Die kostenfreie SQL Server Express-Variante können Sie über Microsoft beziehen. Wir empfehlen MS SQL Server Express 2017 oder 2019. Installieren Sie ein Datenbanktool, mit dem Sie auf den Server zugreifen können, z.B. Microsoft SQL Server Management Studio.

Legen Sie auf dem Server eine neue Datenbank an und spielen Sie das Script zum Anlegen der Tabellen und Felder von Schild-NRW ein. Das Script legt zudem einen User 'Administrator' ohne Passwort an, mit dem Sie sich zu Beginn an Schild-NRW anmelden können. Bitte beachten Sie, dass dieses Script aus einer älteren Version sein kann! Die leere Datenbank muss dann einmal mit der aktuellen Version von Schild-NRW gestartet werden, damit alle Tabellen und Felder vorhanden sind!

[Downloadlink zur MS SQL Server-Script-Datei als ZIP](/dateien/wiki/mssql-script-2021-02-22-44a64a7b.zip)

Richten Sie nun im Schild-NRW-Unterverzeichnis 'UDL' eine UDL-Datei für den Zugriff auf den MS SQL Server ein. Kopieren Sie hierzu folgende Zeilen in eine Text-Datei und speichern Sie diese in Unicode-Kodierung mit der Dateiendung .udl ab!

\[oledb\]\
; Everything after this line is an OLE DB initstring\
Provider=SQLNCLI11.1;Persist Security Info=False;Initial Catalog=Schild-NRW-DB;Data Source=SERVER\SQLEXPRESS\

Tragen Sie in der UDL Ihren Servernamen und Ihren Instanznamen ein!

Eventuell muss als Provider ein anderer Treiber verwendet werden. Alternativen wären SQLOLEDB oder MSOLEDBSQL.

Führen Sie dann das Programm SchILD_PWCryptneu.exe aus. Wählen Sie die UDL-Datei und geben Sie dort den Usernamen und das Passwort Ihres SQL Servers ein.

Starten Sie nun Schild-NRW und wählen Sie die Datenbank-UDL aus. Es sollten nun Tabellen und Felder angelegt werden. Schliesen Sie nun Schild-NRW und starten Sie Schild-NRW so oft neu, bis keine weiteren Tabellen angelegt werden.

Sie können nun Ihre Schule einrichten. Dies muss aber nur geschehen, wenn Sie eine neue Datenbank aufbauen wollen. Wenn Sie aus einer bestehenden Datenbank in diese MS SQL Server-Datenbank migrieren wollen, so können Sie diese Einrichtung abbrechen und den [Migrationsprozess mit Hilfe des Migrationstools](/administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren) vornehmen.

<a id="Server-Installation_mit_MySQL-_oder_MariaDB-Datenbank"></a>

## Server-Installation mit MySQL- oder MariaDB-Datenbank

In allen Schulformen, die mit mehr als einem PC gleichzeitig an Schild-NRW arbeiten wollen, empfehlen wir eine Serverinstallation. Dieser Artikel beschreibt die notwendigen Installationsschritte für eine Serverinstallation mit MySQL- oder MariaDB-Server-Datenbank.

Die Einrichtung eines MySQL-Zugriffs bzw. MariaDB-Zugriffs funktioniert im Prinzip so, wie die in einer MS SQL Server-Umgebung. Ein Unterschied besteht jedoch darin, dass für den Zugriff auf die Datenbank an jedem Client ein ODBC Treiber (MySQL Connector/ODBC oder MariaDB Connector/ODBC) installiert und vorab eingerichtet werden muss. Dieser Treiber prüft die Zugriffsberechtigung auf die Datenbank. Zudem muss eine UDL-Datei in Schild-NRW hinterlegt werden, damit Schild-NRW die Datenbank findet. Die einzelnen Schritte werden hier erklärt.

Lesen Sie sich zunächst die Schritte zur Installation von Schild-NRW im Kapitel [Server-Installation mit Access-Datenbank](#Server-Installation_mit_Access-Datenbank) durch, da die grundsätzliche Installation bei Verwendung einer MySQL- oder MariaDB-Datenbankgleich ist.

<a id="Download_des_Servers_und_einer_Benutzeroberfläche"></a>
<a id="Download_des_Servers_und_einer_Benutzeroberfl.C3.A4che"></a>

### Download des Servers und einer Benutzeroberfläche

Stellen Sie sicher, dass ein Hardware-Server im Schulverwaltungsnetz über den Port, den Sie später verwenden wollen, erreichbar ist. Der Standard-Port ist 3306. Beachten Sie jedoch, dass die Firewall für diese Zugriffe geöffnet sein muss.

Installieren Sie zunächst einen Datenbankserver. Verwenden Sie hierzu wahlweise das Installationspaket MySQL Community Server von Oracle oder das Installationspaket MariaDB Server von MariaDB Org. Installieren Sie zudem eine passende Benutzeroberfläche, mit der Sie auf die Datenbank zugreifen können, z.B. MySQL-Workbench oder HeidiSQL.

:::warning
Sofern ein Unix-Server verwendet wird, muss die mySQL-Einstellung in der my.cnf "lower_case_table_names=1" hinzugefügt werden, da es andernfalls Probleme bei manchen Tabellen mit der Groß- und Kleinschreibung geben kann.

\# Remove case sensitive in table names\
lower_case_table_names=1
:::

<a id="Einrichten_eines_Schemas"></a>

### Einrichten eines Schemas

Legen Sie auf dem Server eine neue Datenbank (Schema) an:

Zeichensatz UTF8\
Collation UTF8_bin

Legen Sie in MySQL oder MariaDB einen Datenbankuser an und sorgen Sie dafür dass dieser User volle Zugriffsrechte auf das Schema hat. Kontrollieren Sie auch, ob die Rechte für alle Zugriffsarten bestehen. Dieser User muss später in der UDL- bzw. der SDBCFG-Datei verwendet werden (s.u.)!

<a id="Einspielen_des_Datenbank-Scripts"></a>

### Einspielen des Datenbank-Scripts

Spielen Sie nun das Script zum Anlegen der Tabellen und Felder von Schild-NRW ein. Das Script legt zudem in der Tabelle 'User' einen Schild-NRW Benutzer 'Administrator' ohne Passwort an, mit dem Sie sich zu Beginn an Schild-NRW anmelden können. Bitte beachten Sie, dass dieses Script für eine ältere Schild-NRW Version bestimmt sein sein kann, in der noch manche Tabellen für neuere Schild-Versionen fehlen! Diese fehlenden Tabellen werden angelegt, sobald die Datenbank mit der aktuellen Version von Schild-NRW gestartet wird.

[Downloadlink zur MySQL-Script-Datei als ZIP](/dateien/wiki/mysql-script-2023-10-21-dadbda68.zip)

Öffnen Sie eine neue SQL-Abfrage. Stellen Sie sicher, dass das angelegte Schema verwendet wird (use 'schemaname'). Kopieren sie das Script in die Abfrage und führen Sie die Abfrage aus.

![MysqlConnector](/bilder/wiki/mysqlconnector-9ff6960c.jpg)
MySQL Connector

<a id="Herunterladen_und_Einrichten_des_Connectors/ODBC"></a>
<a id="Herunterladen_und_Einrichten_des_Connectors.2FODBC"></a>

### Herunterladen und Einrichten des Connectors/ODBC

Laden Sie sich den MySQL Connector/ODBC in der älteren Version 5.1.13 in der 32Bit-Variante oder den MariaDB Connector/ODBC in der aktuellen Version 3.1 (Stand März 2022) herunter und installieren Sie diesen auf jedem Client, der eine Verbindung zur Schild-NRW Datenbank erhalten soll.

Richten Sie nun eine ODBC-Datenverbindung ein, indem Sie die Windows-ODBC32-Verwaltunng aufrufen (Windows-Taste drücken \> ODBC tippen \> ODBC Data Sources (32-bit) auswählen). Fügen Sie auf dem Reiter System-DNS eine Datenquelle hinzu und wählen Sie den MySQL ODBC 5.1 Unicode Driver oder den MariaDB ODBC-Treiber. Geben Sie der Datenquelle einen Namen. Achten Sie darauf, dass die Datenquelle auf jedem Client den gleichen Namen hat! Geben Sie die Verbindungsdaten zum Server ein. Wählen Sie dann das angelegt Scheme vom DB-Server aus.

Setzen Sie im Menü **Connection** das Auswahlhäkchen **enable automatic reconnect**.

Setzen Sie im Menü **Cursors/Results** das Auswahlhäkchen **Return matched rows instead of affected rows**.

Schließen Sie die Einrichtung ab. Dieser Schritt muss auch auf jedem Client gemacht werden, auf dem Schild-NRW genutzt werden soll!

<a id="Verbindung_zwischen_Schild-NRW_und_der_Datenbank_herstellen"></a>

### Verbindung zwischen Schild-NRW und der Datenbank herstellen

Um die Verbidung zu der Datenbank mit Schild-NRW2.0 aufbauen zu können, benötigen Sie eine UDL-Datei, die im Unterordner UDL der Schild-NRW-Installation liegen muss. Kopieren Sie folgende Zeilen in eine Text-Datei und speichern Sie diese in Unicode-Kodierung mit der Dateiendung UDL ab!

\[oledb\]\
; Everything after this line is an OLE DB initstring\
Provider=MSDASQL.1;Persist Security Info=False;Data Source=schild_nrw_db\

Data Source ist dabei der Name der ODBC32-Datenquelle, den Sie im Connector hinterlegt haben. Wichtig, die Datei muss mit dem UNICODE-Format des Windows-Editors abgespeichert werden! Notepad ++ zeigt bei dieser Datei UCS-2-BE-BOM an!

Führen Sie dann das Programm SchILD_PWCryptneu.exe aus. Wählen Sie die UDL-Datei und geben Sie dort den Usernamen und das Passwort Ihres Server-Users ein. Es wird dann eine DAT-Datei mit dem gleichen Namen gespeichert. Diese enthält die Zugangsdaten in verschlüsselter Form.

Schild-NRW kann nun gestartet werden und die eingerichtet Datenbank sollte zur Auswahl stehen. Bitte beachten Sie, dass das Program u.U. mehrmals hintereinander gestartet werden muss, bis die Meldung "Es werden nun Tabellen und Felder angelegt" nicht mehr erscheint! Je nach dem, wie alt das Script ist, mit dem die leere Datenbank erzeugt wurde, kann das einige Male geschehen.

Sie können nun Ihre Schule einrichten, sofern Sie zum ersten Mal mit Schild-NRW arbeiten. Wenn Sie aus einer bestehenden Datenbank in die MySQL-Datenbank oder MariaDB-Datenbank migrieren wollen, so können Sie die Einrichtung abbrechen und den [Migrationsprozess mit Hilfe des Migrationstools](/administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren) vornehmen.

Eine [Anleitung zur Installation und Einrichtung einer MySQL-Datenbank von Herrn Roß als PDF](/dateien/wiki/schildnrw-mysql-installation-3e4cc65d.pdf) gibt es in einer etwas älteren Version.

<a id="Die_Datei_ADMIN.INI_in_Serverumgebungen"></a>

## Die Datei ADMIN.INI in Serverumgebungen

Hier finden Systemadministratoren Anweisungen für Netzwerkumgebungen und Konfigurationsoptionen für Schild-NRW für bestimmte Serverumgebungen.

Über die Datei ADMIN.INI, die sich im Programmverzeichnis von SchILD-NRW befindet, können je nach Systemumgebung verschiedene Zugriffspfade für externe Dateien, die von SchILD-NRW benötigt werden, gesetzt werden. Dies eröffnet u.a. die Möglichkeit, bestimmte Dateien zentral zu verwalten und einen Nur-Lese-Zugriff zu ermöglichen. Die Datei ADMIN.INI ist wie folgt aufgebaut:

\[Administration\]\
AdminDir={AdminDir}\
GroupDir={GroupDir}\
PrivateDir={PrivateDir}\

Dabei sind {AdminDir}, {GroupDir}, und {PrivateDir} Platzhalter, an deren Stelle tatsächlich vorhandene Verzeichnisnamen eingetragen werden müssen (Details und Beispiele finden Sie weiter unten).

:::info
Falls die Datei ADMIN.INI fehlt, reagiert SchILD-NRW so, als ob für Einträge die Standardeinstellungen (siehe unten) gelten.
:::

Im Folgenden werden die möglichen Einträge für AdminDir, GroupDir und PrivateDir beschrieben, anschließend finden Sie einige typische Konfigurationsbeispiele.

<a id="Der_Eintrag_AdminDir"></a>

### Der Eintrag AdminDir

Über den Eintrag `AdminDir={AdminDir}` kann dem Programm mitgeteilt werden, in welchem Verzeichnis sich die von SchILD-NRW benötigten Datenbanken SchildIntern.mdb, Statkue.mdb, Schulver.mdb und ASDTabs.mdb befinden. Diese Dateien müssen sich im Verzeichnis \Keytabs unterhalb des hier eingetragenen Verzeichnisses befinden. Ist für AdminDir kein Eintrag vorhanden, so werden die Dateien im Verzeichnis \Keytabs unterhalb des Programmverzeichnisses gesucht. Dieser Eintrag wird nur sehr selten benötigt, z.B. dann, wenn SchILD-NRW in einer Terminalserver-Umgebung läuft.

Beispiel: Sie haben Eintrag `AdminDir=S:\Schild-Daten` in der Datei ADMIN.INI gemacht. In diesem Fall müssen sich die Dateien SchildIntern.mdb, Statkue.mdb, Schulver.mdb und ASDTabs.mdb im Verzeichnis S:\Schild-Daten\Keytabs befinden. Für das Verzeichnis S:\Schild-Daten\Keytabs wird in diesem Fall für alle Benutzer, die mit SchILD-NRW arbeiten, nur ein Lesezugriff benötigt.

<a id="Der_Eintrag_GroupDir"></a>

### Der Eintrag GroupDir

Über den Eintrag `GroupDir={GroupDir}` kann dem Programm mitgeteilt werden, in welchem Verzeichnis sich die folgenden Dateien und Unterverzeichnisse befinden:

Schild.Ini

Floskeln.txt

Keytabs\Reports.mdb

Keytabs\ImpExp.mdb

\UDL

\DB

Beispiel: Sie haben den Eintrag `GroupDir=S:\Schild-Daten` in der Datei ADMIN.INI gemacht. In diesem Fall müssen sich die Dateien Schild.ini, Floskeln.txt im Verzeichnis S:\Schild-Daten befinden, die Dateien Reports.mdb und ImpExp.mdb im Verzeichnis S:\Schild-Daten\Keytabs befinden (bitte beachten). Das Verzeichnis S:\Schild-Daten\UDL ist nur dann notwendig, wenn Sie mit mehreren Datenbanken arbeiten (z.B. eine für die Mittelstufe, eine für die Oberstufe), Ihre Datenbank sich nicht im Standard-Verzeichnis \DB befindet (s.u.) oder Sie nicht mit einer Access-Datenbank arbeiten (z.B. Firebird, MySQL, MS-SQL-Express). Falls einer dieser Fälle zutrifft, benötigen Sie zum Zugriff auf die Datenbank(en) eine (oder mehrere) UDL-Datei(en), die die Verbindungsparameter enthält und die sich im Verzeichnis \UDL unterhalb des bei GroupDir eingetragenen Verzeichnisses befinden muss.

Wenn keiner dieser Fälle zutrifft, muss sich Ihre Datenbank Schild2000n.mdb im Verzeichnis \DB unterhalb des bei GroupDir eingetragenen Verzeichnisses befinden (im obigen Beispiel also im Verzeichnis S:\Schild-Daten\DB).

:::warning
Ist für GroupDir kein Eintrag vorhanden, so wird der Eintrag für AdminDir verwendet, ist auch dort nichts eingetragen, so wird das Programmverzeichnis von SchILD-NRW angenommen (d.h. in diesem Falle müssen sich die Dateien Schild.Ini und Floskeln.txt im Programmverzeichnis, die Dateien Reports.mdb und ImpExp.mdb im Verzeichnis \Keytabs unterhalb des Programmverzeichnisses befinden, ebenso wie die Verzeichnisse \DB und \UDL (falls benötigt).
:::

Für den Verzeichnis-Eintrag bei GroupDir und dessen Unterverzeichnisse wird für alle Benutzer, die mit SchILD-NRW arbeiten, ein Lese- und Schreib-Zugriff benötigt.

<a id="Der_Eintrag_PrivateDir"></a>

### Der Eintrag PrivateDir

Über den Eintrag `PrivateDir={PrivateDir}` kann ein Verzeichnis definiert werden, in dem exportierte Daten gespeichert werden. Dies hat den Vorteil, dass z.B. die Dateien für die Word-Serienbrieferstellung für jeden Benutzer getrennt abgelegt werden, so dass die Dateien nicht gegenseitig überschrieben werden, wenn mehrere Benutzer gleichzeitig die Serienbriefe erstellen wollen. Beispiel: Sie haben folgenden Eintrag in der Datei ADMIN.INI gemacht `PrivateDir=C:\Meine Schild-Daten`. In diesem Fall werden exportierte Daten in das jeweilige lokale Verzeichnis "C:\Meine Schild-Daten"gespeichert. Hinweis: Über den Eintrag `PrivateDir=<PRIVATE>` (genau so geschrieben, inkl. der Größer- und Kleiner-Zeichen) kann auf das Verzeichnis "C:\Dokumente und Einstellungen\\{Benutzername}" verwiesen werden.

Für den Verzeichnis-Eintrag bei PrivateDir und dessen Unterverzeichnisse wird für den jeweiligen Benutzer ein Lese- und Schreib-Zugriff benötigt.

<a id="Konfigurationsbeispiel_1:_Lokale_Installation"></a>

### Konfigurationsbeispiel 1: Lokale Installation

SchILD-NRW wurde auf einem lokalen Rechner im Verzeichnis C:\Programme\SchILD-NRW installiert, die Zusatzdateien befinden sich in den folgenden "Standard-Verzeichnissen":

C:\Programme\SchILD-NRW\Keytabs\SchildIntern.mdb

C:\Programme\SchILD-NRW\Keytabs\Statkue.mdb

C:\Programme\SchILD-NRW\Keytabs\Schulver.mdb

C:\Programme\SchILD-NRW\Keytabs\ASDTabs.mdb

C:\Programme\SchILD-NRW\Schild.Ini

C:\Programme\SchILD-NRW\Floskeln.txt

C:\Programme\SchILD-NRW\Keytabs\Reports.mdb

C:\Programme\SchILD-NRW\Keytabs\ImpExp.mdb

C:\Programme\SchILD-NRW\UDL (falls notwendig)

C:\Programme\SchILD-NRW\DB\SchILD2000n.mdb

In diesem Fall kann die Datei ADMIN.INI weggelassen werden bzw. enthält folgende Einträge:

\[Administration\]\
AdminDir=\
GroupDir=\
PrivateDir=\

<a id="Konfigurationsbeispiel_2:_Server-Installation"></a>

### Konfigurationsbeispiel 2: Server-Installation

SchILD-NRW wurde auf einem Netzwerk-Server installiert (im Verzeichnis \\\Server\Programme\SchILD-NRW und wird auch von den jeweiligen Arbeitsstationen über das Netzwerk von diesem Verzeichnis aus gestartet). Die Datei ADMIN.INI enthält folgende Einträge:

\[Administration\]\
AdminDir=\
GroupDir=\
PrivateDir=\

In diesem Fall müssen sich die Zusatzdateien in den folgenden "Standard-Verzeichnissen" befinden:

\\\Server\Programme\SchILD-NRW\Keytabs\SchildIntern.mdb

\\\Server\Programme\SchILD-NRW\Keytabs\Statkue.mdb

\\\Server\Programme\SchILD-NRW\Keytabs\ASDTabs.mdb

\\\Server\Programme\SchILD-NRW\Keytabs\Schulver.mdb

\\\Server\Programme\SchILD-NRW\Schild.Ini

\\\Server\Programme\SchILD-NRW\Floskeln.txt

\\\Server\Programme\SchILD-NRW\Keytabs\Reports.mdb

\\\Server\Programme\SchILD-NRW\Keytabs\ImpExp.mdb

\\\Server\Programme\SchILD-NRW\UDL (falls notwendig)

\\\Server\Programme\SchILD-NRW\DB\SchILD2000n.mdb

Diese Konfiguration entspricht also einer lokalen Installation, mit dem einzigen Unterschied, dass das Programm nicht von der lokalen Festplatte, sondern von einem Server-Laufwerk aus gestartet wird, und dass exportierte Daten lokal (in C:\Dokumente und Einstellungen\\) gespeichert werden. Der Nachteil ist aber, dass alle Benutzer einen Schreibzugriff auf das Programmverzeichnis benötigen.

<a id="Konfigurationsbeispiel_3:_Server-Installation_mit_schreibgeschütztem_Programmverzeichnis"></a>
<a id="Konfigurationsbeispiel_3:_Server-Installation_mit_schreibgesch.C3.BCtztem_Programmverzeichnis"></a>

### Konfigurationsbeispiel 3: Server-Installation mit schreibgeschütztem Programmverzeichnis

SchILD-NRW wurde auf einem Netzwerk-Server installiert (im Verzeichnis \\\Server\Programme\SchILD-NRW und wird auch von den jeweiligen Arbeitsstationen über das Netzwerk von diesem Verzeichnis aus gestartet). Das Programmverzeichnis ist aber schreibgeschützt. Daher müssen die Dateien, bei denen ein Schreibzugriff stattfinden kann, über einen Eintrag GroupDir= "umgeleitet" werden. Die Datei ADMIN.INI enthält dann z.B. folgende Einträge:

\[Administration\]\
AdminDir=\
GroupDir=\\\Server\SchILD-Dateien\
PrivateDir=\

SchILD-Dateien In diesem Fall müssen sich die Zusatzdateien in den folgenden Verzeichnissen befinden.

\\\Server\SchILD-Dateien\Keytabs\SchildIntern.mdb

\\\Server\SchILD-Dateien\Keytabs\Statkue.mdb

\\\Server\SchILD-Dateien\Keytabs\ASDTabs.mdb

\\\Server\SchILD-Dateien\Keytabs\Schulver.mdb

\\\Server\SchILD-Dateien\Schild.Ini

\\\Server\SchILD-Dateien\Floskeln.txt

\\\Server\SchILD-Dateien\Keytabs\Reports.mdb

\\\Server\SchILD-Dateien\Keytabs\ImpExp.mdb

\\\Server\SchILD-Dateien\UDL (falls notwendig)

\\\Server\SchILD-Dateien\DB\SchILD2000n.mdb

Auf das Verzeichnis \\\Server\SchILD-Dateien wird für alle Nutzer ein Schreib- und Leserecht benötigt.

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1362) · [Schild-NRW Installation – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Schild-NRW+Installation&oldid=6059)
