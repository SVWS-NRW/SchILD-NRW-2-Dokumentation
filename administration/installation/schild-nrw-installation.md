---
title: "SchILD-NRW 2 installieren"
---

<a id="schild-nrw-installation"></a>

<a id="schild-nrw-installieren"></a>

# SchILD-NRW 2 installieren

Diese Anleitung führt durch die Installation von SchILD-NRW 2 und die Einrichtung des Datenbankzugriffs. SchILD-NRW 2 arbeitet direkt mit einer Datenbank. Hinweise zum Nachfolgeprogramm sind von den folgenden Installationsschritten zu unterscheiden.

Seit dem 31.10.25 steht der Nachfolger zur Verfügung:

[**SchILD-NRW 3 und SVWS-Server**](https://www.svws.nrw.de/svws-server-schild-nrw-3)

-\> zur [SchILD-NRW 3 Dokumentation](https://schild3.svws-nrw.de)

-\> zur [SVWS-Server Dokumentation](https://doku.svws-nrw.de)

Bitte wägen Sie ab, ob ein Umstieg auf SchILD-NRW 2 oder ein Umstieg der Datenhaltung von Access auf MS-SQL oder MySQL innerhalb Ihrer SchILD-NRW 2 Umgebung noch nötig ist.

Ggf. ist der Aufbau einer neuen Umgebung für SVWS-Server und SchILD-NRW 3 hier ressourcenschonender.

<a id="Einzelplatzinstallation"></a>

## Einzelplatzinstallation

In den folgenden Abschnitten erfahren Sie, wie SchILD-NRW 2 installiert werden kann. Vor der Installation sollten Sie die Systemvoraussetzungen prüfen. Als Betriebssysteme benötigen Sie Windows 10 oder höher. Die Bildschirmauflösung sollte mindestens 1024x768 betragen.

<a id="Download_der_Installationsdateien"></a>

### Download der Installationsdateien

Laden Sie von der Homepage die Dateien für das BasisSetup.exe und gegebenenfalls das aktuelle Update herunter.

[SchILD-NRW 2 Download](https://www.svws.nrw.de/schild-nrw-2/schild-nrw-2)

Die Installation auf einem Einzelplatzrechner erfolgt über die Datei Basissetup.exe, die im Downloadbereich von SchILD-NRW 2 erhältlich ist. Bitte beachten Sie, dass unter Umständen zusätzlich noch eine Updatedatei notwendig sein kann, um auf die neueste Version von SchILD-NRW 2 zu gelangen.

Führen Sie diese Installationsdateien aus und lassen Sie sich von dem Assistenten durch die Routine leiten. Bei der Installation ist zu beachten, dass Sie Administratorrechte auf dem Windowsrechner benötigen. Bitte vergewissern Sie sich, dass dies der Fall ist.

Durch die Besonderheiten, die durch den Schutz des „Programmverzeichnisses“ bei Windows 7 und Windows 10 zu beachten sind, empfehlen wir die Installation in das Verzeichnis C:\Schild-NRW. Der Installationsort kann auch verändert werden, bitte beachten Sie aber, dass Sie in dem gewählten Verzeichnis volle Zugriffsrechte haben.

<a id="Registrierung_der_ASDStatitsik.dll"></a>
<a id="Registrierung_der_Statitsik.dlls"></a>

### Registrierung der ASDStatitsik.dll

![Adminzugriff](/bilder/hilfe/probleme/adminzugriff.jpg)

*SchILD-NRW 2 als Administrator starten.*

Prüfen Sie nach der Installation in SchILD-NRW 2, ob der Statistikexport funktioniert. Dazu rufen Sie in SchILD-NRW 2 das Menü Schulverwaltung \> Statistik / amtliche Schuldaten \> Export (mit Modulen von IT-NRW) auf und wählen einen der angebotenen Exporte.

Sollten Sie eine Fehlermeldung [Fehler beim Aufruf der Statistik-DLL: Klasse nicht registriert](/hilfe/probleme/fehler-beim-export-der-statistikdateien-klasse-nicht-registriert) erhalten, so führen Sie das Programm SchILD-NRW 2 nochmals explizit mit der rechten Maustaste als Administrator aus.

![HilfebeiProblemen](/bilder/administration/installation/hilfebeiproblemen.jpg)

*Probleme beim Statistikexport beseitigen.*

Gehen Sie dann unter "Schulverwaltung \> Statistik / amtliche Schuldaten \> Hilfe bei Problemen". Klicken Sie dort die Schaltfläche "Dateien registrieren". Danach sollte die Fehlermeldung weg sein und der Export sollte möglich sein. Sollte der Button nicht anklickbar sein, so haben Sie keine Administratorenrechte auf dem PC!

Ein Video-Tutorial gibt es hier:

[Video ansehen](https://www.youtube-nocookie.com/embed/x0I1M7M5EMM)

<a id="Verbindung_zur_Datenbank"></a>

### Verbindung zur Datenbank

![Datenbankdatei](/bilder/administration/installation/datenbankdatei.jpg)

*schild2000n.mdb als Datenbankdatei*

Die Standarddatenbank liegt im Ordner DB der SchILD-NRW 2-Installation und hat den Namen Schild2000n.mdb. Diese Datenbank wird unter SchILD-NRW 2 unter der Bezeichnung `SchILD-Standarddatenbank` angeboten.

Wenn Sie bereits eine bestehende Datenbank aus einer anderen Installation besitzen, so kopieren Sie die Datei Schild2000n.mdb in den Ordner DB und überschreiben die leere Datenbank aus der Basis-Installation. Somit stehen Ihnen die Schülerdaten wieder zur Verfügung.

<a id="Verbindung_zu_mehreren_Datenbanken"></a>

### Verbindung zu mehreren Datenbanken

![UdlDateien](/bilder/administration/installation/udldateien.jpg)

*Mehrere Datenbanken*

Im Ordner UDL der SchILD-NRW 2-Installation befindet sich eine Datei Test-Hauptschule.udl. Sie können über diese UDL-Dateien beliebig viele Verbindungen zu weiteren Datenbanken aufbauen.

Wollen Sie, dass die Test-Hauptschule-Datenbank nicht zur Verfügung steht, so löschen Sie bitte die UDL-Datei oder benennen Sie die Dateiendung um. Für weitere Datenbanken kopieren Sie einfach die UDL-Datei und fügen Sie diese in den UDL-Ordner der SchILD-NRW 2-Installation ein. Benennen Sie die UDL-Datei nach Ihren Wünschen um. Der Dateiname der UDL-Datei bestimmt den Anzeigenamen der Datenbank, der später im Auswahldialog angezeigt wird.

Klicken Sie mit der rechten Maustaste auf die UDL-Datei und gehen Sie auf Eigenschaften \> Verbindung. Geben Sie durch Klick auf die drei Punkte den Dateipfad zur gewünschten weiteren Datenbank an.

Jetzt steht diese Datenbank beim Start von SchILD-NRW 2 zur Verfügung.

Unter Windows 7 (10) 64bit können die UDL-Dateien nicht mehr mit den Eigenschaften umgestellt werden.

Hier müssen Sie folgenden Text in eine normale Textdatei kopieren:

\[oledb\]\
; Everything after this line is an OLE DB initstring\
Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Program Files (x86)\SchILD-NRW\DB\RS_2012_HJ1.mdb;Persist Security Info=False\

Speichern Sie diese Textdatei mit dem Dateinamen.udl als UNICODE-Datei ab! Kopieren Sie diese Datei in den Ordner UDL der SchILD-NRW 2-Installation. Im Auswahlfenster wird Ihnen dann eine Datenbank angeboten, die den Namen der UDL-Datei trägt.

Diese Schritte sind nur notwendig, wenn Sie Zugriff auf mehrere Datenbanken haben wollen. Sollten Sie mit diesen Hinweisen nicht zurechtkommen, so kontaktieren Sie bitte Ihren Fachberater oder Ihren IT-Dienstleister.

<a id="Einrichten_der_Reportverwaltung"></a>

### Einrichten der Reportverwaltung

![Reportexplorer](/bilder/administration/installation/reportexplorer.jpg)

*Reportexplorer*

Starten Sie einmal SchILD-NRW 2 und gehen Sie auf die Druckausgabe \> Reportverwaltung starten. Dort wurden mit der Basis-Installation einige Reports mitgeliefert. Ein sehr umfangreiches Reportpaket können Sie auch von der SchILD-NRW 2-Homepage herunterladen:

\[[Reportsammlung für SchILD-NRW 2](https://www.svws.nrw.de/schild-nrw-2/reports-schild-nrw-2)\]

Entpacken Sie das ZIP-Paket nun im Ordner SchILD-NRW 2-Reports. Achten Sie darauf, dass die Ordnerstruktur der Reportverwaltung in diesem Ordner nachgebildet werden muss. Wichtig sind die Ordner Standard, Header_Footer, Standardtexte und Subreports. Alle anderen Ordner können frei benannt werden!

Die einzelnen Reports liegen dann als RTM-Dateien im Ordner SchILD-NRW 2-Reports und stehen dann in der Reportverwaltung zur Verfügung. Durch das Abspeichern der RTM-Dateien können Sie beliebige Reports für die SchILD-NRW 2-Benutzer zur Verfügung stellen.

Bitte beachten Sie, dass hier sehr viele Reports angeboten werden. Löschen Sie die nicht benötigten Formulare, damit die Reportverwaltung übersichtlich bleibt!

<a id="Schild-NRW_Module_und_Tools"></a>

<a id="schild-nrw-module-und-tools"></a>

### SchILD-NRW 2 Module und Tools

Sie können von der SchILD-NRW 2-Homepage auch noch zusätzliche Module für bestimmte Aufgaben herunterladen, die nicht alle Schulen immer benötigen. Bitte beachten Sie die jeweiligen Installationshinweise, die dort gegeben werden.

\[[Module und Tools für SchILD-NRW 2](https://www.svws.nrw.de/schild-nrw-2/tools-module)\]

<a id="Programm-Einstellungen"></a>

### Programm-Einstellungen

Die Benutzer von SchILD-NRW 2 können das Programm in den Einstellungen an ihre Bedürfnisse anpassen. Hierzu finden Sie weitere Informationen im Artikel zu den [Programmeinstellungen](/administration/benutzer-einstellungen/programm-einstellungen).

<a id="Einzelplatzinstallation_mit_Zugriff_von_einem_anderen_Rechner"></a>

## Einzelplatzinstallation mit Zugriff von einem anderen Rechner

Dieser Hilfeartikel beschreibt, wie Sie eine Installation von SchILD-NRW 2 auf einem PC durchführen können, um zusätzlich von einem anderen PC gemeinsam auf die SchILD-NRW 2-Datenbank zugreifen zu können.

Führen Sie zunächst an dem Rechner, der als "Mini-Server" dienen soll, eine SchILD-NRW 2 Einzelplatzinstallation durch (s.o.).

Stellen Sie sicher, dass dieser PC im Netzwerk erreichbar ist und geben Sie den Installationsordner von SchILD-NRW 2 im Netzwerk frei. Vollzugriff ist mindestens auf folgende Ordner unbedingt erforderlich: DB, Statistik, SchILD-NRW 2-Reports

Verbinden Sie auf dem Client, der Zugriff bekommen soll, ein Netzlaufwerk mit diesem Ordner. Das Netzlaufwerk sollte so eingerichtet sein, dass es beim Start des Rechners zur Verfügung steht. Stellen Sie anschließend eine Verknüpfung mit der Schild2000.exe aus dem Netzlaufwerk auf dem Desktop des Clients her.

Starten Sie die Anwendung SchILD-NRW 2 einmal auf jedem Client explizit mit der rechten Maustaste als Administrator und führen Sie die Schritte zur Registrierung der Statitsik.dlls einmal durch (Schulverwaltung \> Statistik amtl. Schuldaten \> Hilfe bei Problemen). Danach kann die Anwendung mit normalen Benutzer-Rechten gestartet werden. Der Zugriff auf SchILD-NRW 2 kann nur bei eingeschaltetem "Mini-Server" funktionieren!

<a id="Server-Installation_mit_Access-Datenbank"></a>

## Server-Installation mit Access-Datenbank

In allen Schulformen, die mit mehr als einem PC gleichzeitig an SchILD-NRW 2 arbeiten wollen, empfehlen wir eine Serverinstallation. Dieser Artikel beschreibt die notwendigen Installationsschritte für eine Serverinstallation mit Access-Datenbank.

Für den Betrieb von SchILD-NRW 2 mit einer Access-Datenbank ist es nicht von Bedeutung, ob Sie einen Windows-Server oder einen Linux-Server betreiben. Geben Sie einen Ordner auf dem Server für das Netzwerk frei! Führen Sie bei einem Windows-Server eine Basis-Installation in diesen Netzwerkordner durch. Wenn Sie einen Linux-Server betreiben, kopieren Sie die Dateien der Basis-Installation einfach in das freigegebene Samba-Verzeichnis. Stellen Sie sicher, dass die Benutzer der Clients im Verwaltungsbereich vollen Zugriff auf das SchILD-NRW 2-Verzeichnis haben. Vollzugriff ist mindestens auf folgende Ordner unbedingt erforderlich: DB, Statistik, SchILD-NRW 2-Reports

Empfohlen wird, auf den Verwaltungs-Clients ein Netzlaufwerk fest zu verbinden, das auf allen PCs den selben Buchstaben erhält. In SchILD-NRW 2 kann dann dieser Pfad unter Extras \> Programmeinstellungen \> globale Einstellungen verwendet werden, um für alle Benutzer die gewünschte Umgebung (zum Beispiel Reportverwaltung, Dokumentenverwaltung) zur Verfügung zu stellen. Erstellen Sie auf dem Desktop der Verwaltungs-PCs eine Verknüpung zur Anwendung Schild2000.exe aus dem Netzlaufwerk.

Starten Sie die Anwendung SchILD-NRW 2 einmal auf jedem Client explizit mit der rechten Maustaste als Administrator und führen Sie die Schritte zur [Registrierung der Statitsik.dlls](#Registrierung_der_Statitsik.dlls) einmal durch. Danach kann die Anwendung mit normalen Benutzerrechten gestartet werden.

Die Benutzer von SchILD-NRW 2 können das Programm in den Einstellungen an ihre Bedürfnisse anpassen. Hierzu finden Sie weitere Informationen im Artikel zu den [Programmeinstellungen](/administration/benutzer-einstellungen/programm-einstellungen).

<a id="Server-Installation_mit_Microsoft_SQL_Server-Datenbank"></a>

## Server-Installation mit Microsoft SQL Server-Datenbank

In allen Schulformen, die mit mehr als einem PC gleichzeitig an SchILD-NRW 2 arbeiten wollen, empfehlen wir eine Serverinstallation. Dieser Artikel beschreibt die notwendigen Installationsschritte für eine Serverinstallation mit MS SQL Server-Datenbank. Informationen zur Einrichtung und zur Inbetriebnahme des Datenbanksystems finden Sie hier. Grundsätzlich wird aber vorausgesetzt, dass bei einem Betrieb mit einem MS SQL Datenbankserver Kenntnisse über dieses Datenbanksystem vorhanden sind.

Lesen Sie sich zunächst die Schritte zur Installation von SchILD-NRW 2 im Kapitel [Server-Installation mit Access-Datenbank](#Server-Installation_mit_Access-Datenbank) durch, da die grundsätzliche Installation bei Verwendung einer MS SQL Server Datenbank gleich ist. Stellen Sie sicher, dass ein Server im Schulverwaltungsnetz über den Port, den Sie später verwenden wollen, erreichbar ist. Installieren Sie dort den MS SQL Server in der gewünschten Variante. Die kostenfreie SQL Server Express-Variante können Sie über Microsoft beziehen. Wir empfehlen MS SQL Server Express 2017 oder 2019. Installieren Sie ein Datenbanktool, mit dem Sie auf den Server zugreifen können, zum Beispiel Microsoft SQL Server Management Studio.

Legen Sie auf dem Server eine neue Datenbank an und spielen Sie das Script zum Anlegen der Tabellen und Felder von SchILD-NRW 2 ein. Das Script legt zudem einen Benutzer 'Administrator' ohne Passwort an, mit dem Sie sich zu Beginn an SchILD-NRW 2 anmelden können. Bitte beachten Sie, dass dieses Script aus einer älteren Version sein kann! Die leere Datenbank muss dann einmal mit der aktuellen Version von SchILD-NRW 2 gestartet werden, damit alle Tabellen und Felder vorhanden sind!

[Downloadlink zur MS SQL Server-Script-Datei als ZIP](/dateien/wiki/mssql-script-2021-02-22-44a64a7b.zip)

Richten Sie nun im SchILD-NRW 2-Unterverzeichnis 'UDL' eine UDL-Datei für den Zugriff auf den MS SQL Server ein. Kopieren Sie hierzu folgende Zeilen in eine Text-Datei und speichern Sie diese in Unicode-Kodierung mit der Dateiendung .udl ab!

\[oledb\]\
; Everything after this line is an OLE DB initstring\
Provider=SQLNCLI11.1;Persist Security Info=False;Initial Catalog=SchILD-NRW 2-DB;Data Source=SERVER\SQLEXPRESS\

Tragen Sie in der UDL Ihren Servernamen und Ihren Instanznamen ein!

Eventuell muss als Provider ein anderer Treiber verwendet werden. Alternativen wären SQLOLEDB oder MSOLEDBSQL.

Führen Sie dann das Programm SchILD_PWCryptneu.exe aus. Wählen Sie die UDL-Datei und geben Sie dort den Usernamen und das Passwort Ihres SQL Servers ein.

Starten Sie nun SchILD-NRW 2 und wählen Sie die Datenbank-UDL aus. Es sollten nun Tabellen und Felder angelegt werden. Schliesen Sie nun SchILD-NRW 2 und starten Sie SchILD-NRW 2 so oft neu, bis keine weiteren Tabellen angelegt werden.

Sie können nun Ihre Schule einrichten. Dies muss aber nur geschehen, wenn Sie eine neue Datenbank aufbauen wollen. Wenn Sie aus einer bestehenden Datenbank in diese MS SQL Server-Datenbank migrieren wollen, so können Sie diese Einrichtung abbrechen und den [Migrationsprozess mit Hilfe des Migrationstools](/administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren) vornehmen.

<a id="Server-Installation_mit_MySQL-_oder_MariaDB-Datenbank"></a>

## Server-Installation mit MySQL- oder MariaDB-Datenbank

In allen Schulformen, die mit mehr als einem PC gleichzeitig an SchILD-NRW 2 arbeiten wollen, empfehlen wir eine Serverinstallation. Dieser Artikel beschreibt die notwendigen Installationsschritte für eine Serverinstallation mit MySQL- oder MariaDB-Server-Datenbank.

Die Einrichtung eines MySQL-Zugriffs beziehungsweise MariaDB-Zugriffs funktioniert im Prinzip so, wie die in einer MS SQL Server-Umgebung. Ein Unterschied besteht jedoch darin, dass für den Zugriff auf die Datenbank an jedem Client ein ODBC Treiber (MySQL Connector/ODBC oder MariaDB Connector/ODBC) installiert und vorab eingerichtet werden muss. Dieser Treiber prüft die Zugriffsberechtigung auf die Datenbank. Zudem muss eine UDL-Datei in SchILD-NRW 2 hinterlegt werden, damit SchILD-NRW 2 die Datenbank findet. Die einzelnen Schritte werden hier erklärt.

Lesen Sie sich zunächst die Schritte zur Installation von SchILD-NRW 2 im Kapitel [Server-Installation mit Access-Datenbank](#Server-Installation_mit_Access-Datenbank) durch, da die grundsätzliche Installation bei Verwendung einer MySQL- oder MariaDB-Datenbankgleich ist.

<a id="Download_des_Servers_und_einer_Benutzeroberfläche"></a>
<a id="Download_des_Servers_und_einer_Benutzeroberfl.C3.A4che"></a>

### Download des Servers und einer Benutzeroberfläche

Stellen Sie sicher, dass ein Hardware-Server im Schulverwaltungsnetz über den Port, den Sie später verwenden wollen, erreichbar ist. Der Standard-Port ist 3306. Beachten Sie jedoch, dass die Firewall für diese Zugriffe geöffnet sein muss.

Installieren Sie zunächst einen Datenbankserver. Verwenden Sie hierzu wahlweise das Installationspaket MySQL Community Server von Oracle oder das Installationspaket MariaDB Server von MariaDB Org. Installieren Sie zudem eine passende Benutzeroberfläche, mit der Sie auf die Datenbank zugreifen können, zum Beispiel MySQL-Workbench oder HeidiSQL.

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

Legen Sie in MySQL oder MariaDB einen Datenbankuser an und sorgen Sie dafür dass dieser Benutzer volle Zugriffsrechte auf das Schema hat. Kontrollieren Sie auch, ob die Rechte für alle Zugriffsarten bestehen. Dieser Benutzer muss später in der UDL- beziehungsweise der SDBCFG-Datei verwendet werden (s.u.)!

<a id="Einspielen_des_Datenbank-Scripts"></a>

### Einspielen des Datenbank-Scripts

Spielen Sie nun das Script zum Anlegen der Tabellen und Felder von SchILD-NRW 2 ein. Das Script legt zudem in der Tabelle 'User' einen SchILD-NRW 2 Benutzer 'Administrator' ohne Passwort an, mit dem Sie sich zu Beginn an SchILD-NRW 2 anmelden können. Bitte beachten Sie, dass dieses Script für eine ältere SchILD-NRW 2 Version bestimmt sein sein kann, in der noch manche Tabellen für neuere SchILD-NRW 2-Versionen fehlen! Diese fehlenden Tabellen werden angelegt, sobald die Datenbank mit der aktuellen Version von SchILD-NRW 2 gestartet wird.

[Downloadlink zur MySQL-Script-Datei als ZIP](/dateien/wiki/mysql-script-2023-10-21-dadbda68.zip)

Öffnen Sie eine neue SQL-Abfrage. Stellen Sie sicher, dass das angelegte Schema verwendet wird (use 'schemaname'). Kopieren sie das Script in die Abfrage und führen Sie die Abfrage aus.

![MysqlConnector](/bilder/administration/installation/mysqlconnector.jpg)

*MySQL Connector*

<a id="Herunterladen_und_Einrichten_des_Connectors/ODBC"></a>
<a id="Herunterladen_und_Einrichten_des_Connectors.2FODBC"></a>

### Herunterladen und Einrichten des Connectors/ODBC

Laden Sie sich den MySQL Connector/ODBC in der älteren Version 5.1.13 in der 32Bit-Variante oder den MariaDB Connector/ODBC in der aktuellen Version 3.1 (Stand März 2022) herunter und installieren Sie diesen auf jedem Client, der eine Verbindung zur SchILD-NRW 2 Datenbank erhalten soll.

Richten Sie nun eine ODBC-Datenverbindung ein, indem Sie die Windows-ODBC32-Verwaltunng aufrufen (Windows-Taste drücken \> ODBC tippen \> ODBC Data Sources (32-bit) auswählen). Fügen Sie auf dem Reiter System-DNS eine Datenquelle hinzu und wählen Sie den MySQL ODBC 5.1 Unicode Driver oder den MariaDB ODBC-Treiber. Geben Sie der Datenquelle einen Namen. Achten Sie darauf, dass die Datenquelle auf jedem Client den gleichen Namen hat! Geben Sie die Verbindungsdaten zum Server ein. Wählen Sie dann das angelegt Scheme vom DB-Server aus.

Setzen Sie im Menü **Connection** das Auswahlhäkchen **enable automatic reconnect**.

Setzen Sie im Menü **Cursors/Results** das Auswahlhäkchen **Return matched rows instead of affected rows**.

Schließen Sie die Einrichtung ab. Dieser Schritt muss auch auf jedem Client gemacht werden, auf dem SchILD-NRW 2 genutzt werden soll!

<a id="Verbindung_zwischen_Schild-NRW_und_der_Datenbank_herstellen"></a>

<a id="verbindung-zwischen-schild-nrw-und-der-datenbank-herstellen"></a>

### Verbindung zwischen SchILD-NRW 2 und der Datenbank herstellen

Um die Verbidung zu der Datenbank mit SchILD-NRW 2 aufbauen zu können, benötigen Sie eine UDL-Datei, die im Unterordner UDL der SchILD-NRW 2-Installation liegen muss. Kopieren Sie folgende Zeilen in eine Text-Datei und speichern Sie diese in Unicode-Kodierung mit der Dateiendung UDL ab!

\[oledb\]\
; Everything after this line is an OLE DB initstring\
Provider=MSDASQL.1;Persist Security Info=False;Data Source=schild_nrw_db\

Data Source ist dabei der Name der ODBC32-Datenquelle, den Sie im Connector hinterlegt haben. Wichtig, die Datei muss mit dem UNICODE-Format des Windows-Editors abgespeichert werden! Notepad ++ zeigt bei dieser Datei UCS-2-BE-BOM an!

Führen Sie dann das Programm SchILD_PWCryptneu.exe aus. Wählen Sie die UDL-Datei und geben Sie dort den Usernamen und das Passwort Ihres Server-Users ein. Es wird dann eine DAT-Datei mit dem gleichen Namen gespeichert. Diese enthält die Zugangsdaten in verschlüsselter Form.

SchILD-NRW 2 kann nun gestartet werden und die eingerichtet Datenbank sollte zur Auswahl stehen. Bitte beachten Sie, dass das Program unter Umständen mehrmals hintereinander gestartet werden muss, bis die Meldung "Es werden nun Tabellen und Felder angelegt" nicht mehr erscheint! Je nach dem, wie alt das Script ist, mit dem die leere Datenbank erzeugt wurde, kann das einige Male geschehen.

Sie können nun Ihre Schule einrichten, sofern Sie zum ersten Mal mit SchILD-NRW 2 arbeiten. Wenn Sie aus einer bestehenden Datenbank in die MySQL-Datenbank oder MariaDB-Datenbank migrieren wollen, so können Sie die Einrichtung abbrechen und den [Migrationsprozess mit Hilfe des Migrationstools](/administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren) vornehmen.

Eine [Anleitung zur Installation und Einrichtung einer MySQL-Datenbank von Herrn Roß als PDF](/dateien/wiki/schildnrw-mysql-installation-3e4cc65d.pdf) gibt es in einer etwas älteren Version.

<a id="Die_Datei_ADMIN.INI_in_Serverumgebungen"></a>

## Die Datei ADMIN.INI in Serverumgebungen

Hier finden Systemadministratoren Anweisungen für Netzwerkumgebungen und Konfigurationsoptionen für SchILD-NRW 2 für bestimmte Serverumgebungen.

Über die Datei ADMIN.INI, die sich im Programmverzeichnis von SchILD-NRW 2 befindet, können je nach Systemumgebung verschiedene Zugriffspfade für externe Dateien, die von SchILD-NRW 2 benötigt werden, gesetzt werden. Dies eröffnet u.a. die Möglichkeit, bestimmte Dateien zentral zu verwalten und einen Nur-Lese-Zugriff zu ermöglichen. Die Datei ADMIN.INI ist wie folgt aufgebaut:

\[Administration\]\
AdminDir={AdminDir}\
GroupDir={GroupDir}\
PrivateDir={PrivateDir}\

Dabei sind {AdminDir}, {GroupDir}, und {PrivateDir} Platzhalter, an deren Stelle tatsächlich vorhandene Verzeichnisnamen eingetragen werden müssen (Details und Beispiele finden Sie weiter unten).

:::info
Falls die Datei ADMIN.INI fehlt, reagiert SchILD-NRW 2 so, als ob für Einträge die Standardeinstellungen (siehe unten) gelten.
:::

Im Folgenden werden die möglichen Einträge für AdminDir, GroupDir und PrivateDir beschrieben, anschließend finden Sie einige typische Konfigurationsbeispiele.

<a id="Der_Eintrag_AdminDir"></a>

### Der Eintrag AdminDir

Über den Eintrag `AdminDir={AdminDir}` kann dem Programm mitgeteilt werden, in welchem Verzeichnis sich die von SchILD-NRW 2 benötigten Datenbanken SchildIntern.mdb, Statkue.mdb, Schulver.mdb und ASDTabs.mdb befinden. Diese Dateien müssen sich im Verzeichnis \Keytabs unterhalb des hier eingetragenen Verzeichnisses befinden. Ist für AdminDir kein Eintrag vorhanden, so werden die Dateien im Verzeichnis \Keytabs unterhalb des Programmverzeichnisses gesucht. Dieser Eintrag wird nur sehr selten benötigt, zum Beispiel dann, wenn SchILD-NRW 2 in einer Terminalserver-Umgebung läuft.

Beispiel: Sie haben Eintrag `AdminDir=S:\Schild-Daten` in der Datei ADMIN.INI gemacht. In diesem Fall müssen sich die Dateien SchildIntern.mdb, Statkue.mdb, Schulver.mdb und ASDTabs.mdb im Verzeichnis S:\Schild-Daten\Keytabs befinden. Für das Verzeichnis S:\Schild-Daten\Keytabs wird in diesem Fall für alle Benutzer, die mit SchILD-NRW 2 arbeiten, nur ein Lesezugriff benötigt.

<a id="Der_Eintrag_GroupDir"></a>

### Der Eintrag GroupDir

Über den Eintrag `GroupDir={GroupDir}` kann dem Programm mitgeteilt werden, in welchem Verzeichnis sich die folgenden Dateien und Unterverzeichnisse befinden:

Schild.Ini

Floskeln.txt

Keytabs\Reports.mdb

Keytabs\ImpExp.mdb

\UDL

\DB

Beispiel: Sie haben den Eintrag `GroupDir=S:\Schild-Daten` in der Datei ADMIN.INI gemacht. In diesem Fall müssen sich die Dateien Schild.ini, Floskeln.txt im Verzeichnis S:\Schild-Daten befinden, die Dateien Reports.mdb und ImpExp.mdb im Verzeichnis S:\Schild-Daten\Keytabs befinden (bitte beachten). Das Verzeichnis S:\Schild-Daten\UDL ist nur dann notwendig, wenn Sie mit mehreren Datenbanken arbeiten (zum Beispiel eine für die Mittelstufe, eine für die Oberstufe), Ihre Datenbank sich nicht im Standard-Verzeichnis \DB befindet (s.u.) oder Sie nicht mit einer Access-Datenbank arbeiten (zum Beispiel Firebird, MySQL, MS-SQL-Express). Falls einer dieser Fälle zutrifft, benötigen Sie zum Zugriff auf die Datenbank(en) eine (oder mehrere) UDL-Datei(en), die die Verbindungsparameter enthält und die sich im Verzeichnis \UDL unterhalb des bei GroupDir eingetragenen Verzeichnisses befinden muss.

Wenn keiner dieser Fälle zutrifft, muss sich Ihre Datenbank Schild2000n.mdb im Verzeichnis \DB unterhalb des bei GroupDir eingetragenen Verzeichnisses befinden (im obigen Beispiel also im Verzeichnis S:\Schild-Daten\DB).

:::warning
Ist für GroupDir kein Eintrag vorhanden, so wird der Eintrag für AdminDir verwendet, ist auch dort nichts eingetragen, so wird das Programmverzeichnis von SchILD-NRW 2 angenommen (das heißt in diesem Falle müssen sich die Dateien Schild.Ini und Floskeln.txt im Programmverzeichnis, die Dateien Reports.mdb und ImpExp.mdb im Verzeichnis \Keytabs unterhalb des Programmverzeichnisses befinden, ebenso wie die Verzeichnisse \DB und \UDL (falls benötigt).
:::

Für den Verzeichnis-Eintrag bei GroupDir und dessen Unterverzeichnisse wird für alle Benutzer, die mit SchILD-NRW 2 arbeiten, ein Lese- und Schreib-Zugriff benötigt.

<a id="Der_Eintrag_PrivateDir"></a>

### Der Eintrag PrivateDir

Über den Eintrag `PrivateDir={PrivateDir}` kann ein Verzeichnis definiert werden, in dem exportierte Daten gespeichert werden. Dies hat den Vorteil, dass zum Beispiel die Dateien für die Word-Serienbrieferstellung für jeden Benutzer getrennt abgelegt werden, so dass die Dateien nicht gegenseitig überschrieben werden, wenn mehrere Benutzer gleichzeitig die Serienbriefe erstellen wollen. Beispiel: Sie haben folgenden Eintrag in der Datei ADMIN.INI gemacht `PrivateDir=C:\Meine Schild-Daten`. In diesem Fall werden exportierte Daten in das jeweilige lokale Verzeichnis "C:\Meine SchILD-NRW 2-Daten"gespeichert. Hinweis: Über den Eintrag `PrivateDir=<PRIVATE>` (genau so geschrieben, inkl. der Größer- und Kleiner-Zeichen) kann auf das Verzeichnis "C:\Dokumente und Einstellungen\\{Benutzername}" verwiesen werden.

Für den Verzeichnis-Eintrag bei PrivateDir und dessen Unterverzeichnisse wird für den jeweiligen Benutzer ein Lese- und Schreib-Zugriff benötigt.

<a id="Konfigurationsbeispiel_1:_Lokale_Installation"></a>

### Konfigurationsbeispiel 1: Lokale Installation

SchILD-NRW 2 wurde auf einem lokalen Rechner im Verzeichnis C:\Programme\SchILD-NRW installiert, die Zusatzdateien befinden sich in den folgenden "Standard-Verzeichnissen":

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

In diesem Fall kann die Datei ADMIN.INI weggelassen werden beziehungsweise enthält folgende Einträge:

\[Administration\]\
AdminDir=\
GroupDir=\
PrivateDir=\

<a id="Konfigurationsbeispiel_2:_Server-Installation"></a>

### Konfigurationsbeispiel 2: Server-Installation

SchILD-NRW 2 wurde auf einem Netzwerk-Server installiert (im Verzeichnis \\\Server\Programme\SchILD-NRW und wird auch von den jeweiligen Arbeitsstationen über das Netzwerk von diesem Verzeichnis aus gestartet). Die Datei ADMIN.INI enthält folgende Einträge:

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

SchILD-NRW 2 wurde auf einem Netzwerk-Server installiert (im Verzeichnis \\\Server\Programme\SchILD-NRW und wird auch von den jeweiligen Arbeitsstationen über das Netzwerk von diesem Verzeichnis aus gestartet). Das Programmverzeichnis ist aber schreibgeschützt. Daher müssen die Dateien, bei denen ein Schreibzugriff stattfinden kann, über einen Eintrag GroupDir= "umgeleitet" werden. Die Datei ADMIN.INI enthält dann zum Beispiel folgende Einträge:

\[Administration\]\
AdminDir=\
GroupDir=\\\Server\SchILD-Dateien\
PrivateDir=\

SchILD-NRW 2-Dateien In diesem Fall müssen sich die Zusatzdateien in den folgenden Verzeichnissen befinden.

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

Quelle: [SchILD-NRW 2 Installation – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Schild-NRW+Installation&oldid=6059)

## MySQL-Anbindung im dokumentierten Installationsbeispiel

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 2–13](/dateien/wiki/schildnrw-mysql-installation-3e4cc65d.pdf#page=2).

Das Beispiel von Martin Roß stammt aus Februar 2017. Es dokumentiert eine Installation mit MySQL und ODBC auf Windows Server 2016. Die darin genannten Versionen und Downloadpfade gehören zu diesem Beispiel.

### Vorbemerkung

Diese Installationsbeschreibung ist eine Aktualisierung der vorhandenen Installationsbeschreibungen, die auf dem Portal der Schulverwaltung-NRW heruntergeladen werden können:

https://www.svws.nrw.de/fileadmin/user_upload/Kurzanleitungen/KA11_Installation_Schild-NRW.pdf https://www.svws.nrw.de/uploads/media/SchILD-NRW_MySQL_5-1.pdf

Danke für die Installationsunterstützung durch die bestehenden Anleitungen z.B. von OStR Ralf Börger, für die Unterstützung des Forums sowie für die konkrete und schnelle Hilfe durch Herrn Pfotenhauer!

### Portal der Schulverwaltung-NRW

https://www.svws.nrw.de

Auf dem Portal finden Sie neben wichtigen Programmdateien, Updates und Dokumentationen auch ein gut geführtes Forum, das Sie über Veränderungen informiert und an das Sie Ihre Fragen richten können.

### Argumente für die Verwendung einer MySQL-Datenbank

SchILD-NRW verwendet in der Standardinstallation eine Access-Datenbank. Die Clients greifen dabei auf Dateiebene auf diese Access-Datenbank zu. Ein gleichzeitiger Zugriff mehrerer Clients ist dabei trotzdem möglich, jedoch auf maximal etwa 10 beschränkt.

Die Installation mit Anbindung an eine MySQL-Datenbank ist etwas aufwendiger, bietet aber im Netzwerk einen schnelleren Datenzugriff. Ein noch viel wichtigeres Argument ist die höhere Datensicherheit, da kein Zugriff auf Dateiebene nötig ist und die Datenbank selbst zusätzlich passwortgeschützt ist.

### Installationsumgebung der Server-Installation

SchILD-NRW läuft nur auf einer Windows-Plattform. Trotzdem eignet sich als Server auch eine Linux- Umgebung mit einem MySQL-Server, auf den dann die SchILD-NRW-Windows-Clients über das Netzwerk zugreifen können.

Grundlage der im hier beschriebenen Installation ist ein Microsoft Server 2016 Standard Edition (64bit).

### Installationsübersicht

1. Schritt: SchILD-NRW inklusive Update auf dem Server installieren 2. Schritt: MySQL-Server und Workbench installieren 3. Schritt: MySQL-Datenbank-Schema generieren 4. Schritt: MySQL ODBC-Treiber installieren und ODBC-Datenquelle einrichten 5. Schritt: UDL-Datei anlegen 6. Schritt: Datenbank-Authentifizierung in SchILD einrichten 7. Schritt: Benutzer anlegen 8. Schritt: Daten-Migration aus einer Access-Datenbank in die MySQL-Datenbank. 9. Schritt: SchILD-NRW auf den Clients installieren 10. Schritt: Automatisiertes Backup der Datenbank Anhang: Mögliche Fehlermeldungen

Die Installationsbeschreibung beinhaltet keine Installation weiterer Tools von SchILD-NRW. Diese müssen bei Bedarf zusätzlich installiert werden.

### 1. Schritt: SchILD-NRW inklusive Update auf dem Server installieren

Auf dem Portal der Schulverwaltung-NRW https://www.svws.nrw.de erhalten Sie unter Downloads &gt;&gt; Schild-NRW die Basisinstallationsdatei sowie das aktuelle Update (Version 2.0.16.3 oder aktueller).

Download-Link: https://www.svws.nrw.de/index.php?id=schildnrw

Starten Sie das Basissetup (SchILDBasisSetup.exe). Hier können Sie alle Hinweise und Fragen einfach bestätigen. Auf Wunsch kann das Installationsverzeichnis C:\\SchILD-NRW angepasst werden.

Starten Sie das Update (schildupdate_2_0_16_3.exe oder aktueller). Passen Sie auch hier gegebenenfalls das Installationsverzeichnis an.

### 2. Schritt: MySQL-Server und Workbench installieren

Auf der Seite https://dev.mysql.com/downloads/installer/ erhalten Sie den MySQL Installer (aktuell mysqlinstaller-community-5.7.17.0.msi, als Webinstaller oder als vollständiges MSI-Paket).

Der Installer beinhaltet unter anderem den MySQL Community Server sowie MySQL Workbench, ein grafisches Frontend-Tool für MySQL-Datenbanken. (Die Alternative MySQL GUI TOOLS wird nicht mehr weiterentwickelt.)

Direkte Download-Links: https://dev.mysql.com/downloads/file/?id=467605 (MSI Web Installer) https://dev.mysql.com/downloads/file/?id=467606 (MSI Gesamtpaket) (Der Installer ist eine 32-Bit-Anwendung, die aber die 32-Bit und 64-Bit-Variante von MySQL-Server installiert!)

Starten Sie die Installationsroutine (mysql-installer-community-5.7.17.0.msi oder aktueller). Wählen Sie unter Choosing a Setup Type die Option Server only, sofern Sie nur den MySQL-Server installieren möchten. Sofern Sie auch MySQL Workbench mitinstallieren möchten, wählen Sie die Option Custom (siehe Abb.).

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 3](/bilder/pdf-anleitungen/mysql-installation/seite-03-bild-01.jpg)

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 3](/bilder/pdf-anleitungen/mysql-installation/seite-03-bild-02.jpg)

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 4](/bilder/pdf-anleitungen/mysql-installation/seite-04-bild-01.jpg)

Ein Warnhinweis bezüglich des bereits bestehenden Installationspfades können Sie ignorieren. Unter Check Requirements müssen Sie unter Umständen durch einen Klick auf Execute benötigte Programme herunterladen und installieren lassen (im obigen Fall z.B. MS Visual C++ 2013 … ). Im Weiteren einfach dir Vorgaben bestätigen, bis Sie automatisch zur Konfigurationseinstellung gelangen (Type and Networking). Wählen Sie hier in der Auswahl Config Type den Eintrag Server Machine. Wählen Sie anschließend ein MySQL Root Passwort. MySQL User Accounts können später im 7. Schritt hinzugefügt werden.

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 4](/bilder/pdf-anleitungen/mysql-installation/seite-04-bild-02.jpg)

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 4](/bilder/pdf-anleitungen/mysql-installation/seite-04-bild-03.jpg)

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 4](/bilder/pdf-anleitungen/mysql-installation/seite-04-bild-04.jpg)

![2. Schritt: MySQL-Server und Workbench installieren – Abbildung aus der Originalanleitung, Seite 4](/bilder/pdf-anleitungen/mysql-installation/seite-04-bild-05.jpg)

War die Installation und die automatisch folgende Konfiguration nicht erfolgreich, dann starten Sie den MySQL-Installer erneut und wählen sie den Eintrag reconfigure.

### 3. Schritt: MySQL-Datenbank-Schema generieren

Es wird nun mithilfe eines MySQL-Skripts ein leeres MySQL-Datenbank-Schema mit den erforderlichen Tabellen und Spalten generiert.

Auf der Seite https://www.svws.nrw.de erhalten Sie unter Downloads &gt;&gt; Dokumentationen die Datei Schild_NRW_mySQL.zip.

Link: https://www.svws.nrw.de/index.php?id=dokumentationen

Kopieren Sie das in der Zip-Datei enthaltene MySQL-Skript Schild_NRW_mySQL_abV_x_x_x.sql in das Verzeichnis C:\\SchILD-NRW\\Vorlagen\\MySQL. Sofern das Unterverzeichnis MySQL nicht existiert, müssen Sie es per Hand erstellen.

Starten Sie das Programm Workbench, mit dem das Skript ausgeführt werden kann.

![3. Schritt: MySQL-Datenbank-Schema generieren – Abbildung aus der Originalanleitung, Seite 5](/bilder/pdf-anleitungen/mysql-installation/seite-05-bild-02.jpg)

![3. Schritt: MySQL-Datenbank-Schema generieren – Abbildung aus der Originalanleitung, Seite 5](/bilder/pdf-anleitungen/mysql-installation/seite-05-bild-01.jpg)

Mit einem Doppelklick auf „local instance MySQL57“ verbinden Sie sich mit dem MySQL-Server. Geben Sie dazu das Passwort ein, das Sie bei der Installation des MySQL-Servers gewählt haben.

Wählen Sie im Menü den Eintrag File &gt;&gt; Open SQL Skript, navigieren Sie zum Verzeichnis C:\\SchILD-NRW\\Vorlagen\\MySQL und wählen Sie dort die Skript-Datei Schild_NRW_mySQL_abV1_7_78_6.sql aus. Das Skript wird nun angezeigt.

Um das Skript auszuführen, klicken Sie auf das Blitzsymbol in er Symbolleiste über dem Skript. Im Bereich SCHEMAS wird nun das Schema schild_nrw angezeigt, dass durch das Skript erstellt wurde (eventuell die Ansicht aktualisieren oder MySQL Workbench neu starten).

Im Bereich MANAGEMENT können Sie bei Bedarf weitere MySQL-User einrichten oder bestehende User verwalten.

### 4. Schritt: MySQL ODBC-Treiber installieren und ODBC-Datenquelle einrichten

Als Schnittstelle zwischen SchILD-NRW und dem MySQL-Server fungiert der MySQL ODBC-Treiber. Da SchILD-NRW selbst nur als 32-Bit-Variante vorliegt, muss auch der MySQL-ODBC-Treiber als 32-Bit-Variante installiert werden!

ODBC-Treiber installieren: Laden Sie die 32-Bit-Variante des ODBC-Treibers herunter (das Forum empfiehlt die Version 5.1.13).

Download-Link: https://dev.mysql.com/downloads/connector/odbc/5.1.html

Bestätigen Sie bei der Installation einfach die Vorgaben.

Sofern Sie die Fehlermeldung „Error 1918…“ erhalten, fehlt auf dem Client die Software „Microsoft Visual „C++ 2010 x86 Redistributable“. Die Versionen „2008“ und „2013“ haben bei meinen Versuchen nicht funktioniert.

ODBC-Treiber mit MySQL Koppeln: Im nächsten Schritt muss der gerade installierte Treiber noch mit der MySQL-Datenbank gekoppelt werden. Führen Sie dazu auf dem Server folgende Datei aus:

C:\\Windows\\SysWOW64\\odbcad32.exe

Hinweis 1: Eine Datei mit gleichem Namen existiert auch im Verzeichnis C:\\Windows\\system32. Dabei handelt es sich aber um eine 64-bit-Variante, die für uns nicht relevant ist! Hinweis 2: Die Kopplung mit der Datenbank muss für jeden Benutzer durchgeführt werden, der SchILD-NRW ausführen möchte.

Erstellen Sie im Register Benutzer-DSN über Hinzufügen eine neue Datenquelle. Wählen Sie den zuvor installierten Treiber MySQL ODBC 5.1 Driver aus.

![4. Schritt: MySQL ODBC-Treiber installieren und ODBC-Datenquelle einrichten – Abbildung aus der Originalanleitung, Seite 6](/bilder/pdf-anleitungen/mysql-installation/seite-06-bild-01.jpg)

![4. Schritt: MySQL ODBC-Treiber installieren und ODBC-Datenquelle einrichten – Abbildung aus der Originalanleitung, Seite 6](/bilder/pdf-anleitungen/mysql-installation/seite-06-bild-03.jpg)

![4. Schritt: MySQL ODBC-Treiber installieren und ODBC-Datenquelle einrichten – Abbildung aus der Originalanleitung, Seite 6](/bilder/pdf-anleitungen/mysql-installation/seite-06-bild-02.jpg)

Nach einem Klick auf Fertig stellen erscheint ein Konfigurationsfenster für Verbindungseinstellungen. Im Feld Data Source Name wählen Sie einen Namen für die Verbindung. Dieser muss später auch bei den Clients eingetragen werden (siehe auch Schritt 5). Als TCP/IP Server tragen Sie localhost ein, sofern Sie sich am Server befinden. Bei der Einrichtung der Clients wird hier später der Name des Servers oder seine IP eingetragen. Als User tragen Sie „root“ ein zusammen mit dem zuvor vergebene root-Passwort des SQL-Servers. Als Database tragen Sie „schild_nrw“ ein, also den Namen des im 3. Schritt erstellten MySQL-Schemas. Unter Details setzen Sie im Register Metadata einen Haken Bei Don‘t use INFORMATION_SCHEMA for metadata sowie unter Curosrs/Results einen Haken bei Return matched rows instead ov affected rows. Testen Sie die Verbindung. Ist dieser Test erfolgreich, leeren Sie das Passwort-Feld und schließen Sie beide noch offenen Fenster mit OK.

### 5. Schritt: UDL-Datei (Universal Data Link) anlegen

Um von SchILD-NRW auf die MySQL-Datenbank zugreifen zu können, muss noch eine UDL-Datei erstellt werden. Erst dadurch erscheint die MySQL-Auswahl bei Starten von SchILD-NRW.

Wechseln Sie dazu in das Verzeichnis C:\\SchILD-NRW\\UDL.

Erstellen Sie in diesem Verzeichnis eine leere Textdatei und geben Sie ihr den Namen, unter dem diese Datenbank beim Start von SchiILD-NRW aufgelistet sein soll. Ändern Sie die Dateiendung von txt auf UDL (z.B. MySQL-Musterschule.UDL).

Eine leere Textdatei erstellen Sie, indem Sie im Dateimanager mit der rechten Maustaste auf einen leeren Bereich dieses Verzeichnisses klicken und im Kontextmenü den Eintrag Neu &gt;&gt; Textdokument wählen. Ändern Sie die Dateierweiterung von txt zu UDL (den Warnhinweis können Sie ignorieren). Wird die Dateiendung nicht angezeigt, wählen Sie im Dateimanager im Menü den Eintrag Ansicht &gt;&gt; Optionen &gt;&gt; Ordner- und Suchoptionen ändern. Entfernen Sie im Register Ansicht den Haken bei Erweiterungen bei bekannten Dateitypen ausblenden.

Ein Doppelklick auf die neu erstellte Datei würde diese mit dem 64-Bit OLE Core Service öffnen. Um Sie als 32-Bit-Version zu öffnen, die folgende Zeile im Dos-Fenster ausführen: (eine Zeile!)

C:\\Windows\\syswow64\\rundll32.exe “C:\\Program Files (x86)\\Common Files\\System\\Ole DB\\oledb32.dll”,OpenDSLFile C:\\SchILD-NRW\\UDL\\MySQL-Musterschule.UDL

Hinweis: Die obige Zeile einfach als Inhalt einer Textdatei speichern. Diese Datei dann z.B. UDL.bat nennen. Ein Doppelklick führt diese Befehlszeile dann aus. So spart man sich die lästige Eingabe.

Die vorherige Befehlszeile öffnet das Fenster Datenverknüpfungseigenschaften. Wählen Sie hier im Register Provider den Eintrag Microsoft OLE DB Provider for ODBC Drivers. Bestätigen Sie die Eingabe mit Weiter.

Im Register Verbindung tragen Sie im Feld Datenquellenname verwenden den im 4. Schritt vergebenen Namen Data Source Name für die Verbindung ein.

![5. Schritt: UDL-Datei (Universal Data Link) anlegen – Abbildung aus der Originalanleitung, Seite 7](/bilder/pdf-anleitungen/mysql-installation/seite-07-bild-01.jpg)

![5. Schritt: UDL-Datei (Universal Data Link) anlegen – Abbildung aus der Originalanleitung, Seite 7](/bilder/pdf-anleitungen/mysql-installation/seite-07-bild-02.jpg)

Geben Sie zum Testen der Datenverknüpfung Benutzername und Passwort des MySQL-Root-Users ein. Verläuft der Test positiv, leeren Sie unbedingt die Felder Benutzername und Passwort und übernehmen die Einstellungen mit OK. Öffnen Sie die Datei zur Sicherheit noch einmal mit einem Editor und überprüfen Sie, ob wirklich der Benutzername und das Passwort gelöscht waren.

### 6. Schritt: Datenbank-Authentifizierung in SchILD einrichten

Für den Zugriff auf die MySQL-Datenbank benötigt SchILD-NRW ein Kennwort. Dieses wird mithilfe des Programms SchILD_PWCryptneu.exe verschlüsselt in der SchILD-Benutzerverwaltung abgelegt.

Starten Sie die Datei C:\\SchILD-NRW\\SchILD-PWCryptneu.exe.

![6. Schritt: Datenbank-Authentifizierung in SchILD einrichten – Abbildung aus der Originalanleitung, Seite 8](/bilder/pdf-anleitungen/mysql-installation/seite-08-bild-01.jpg)

Verweisen Sie hier auf die im 5. Schritt erstellt UDL-Datei. Ein Klick auf Start legt das Passwort in der SchILD-NRW-Benutzerverwaltung ab. Sie finden nun unter C:\\SchILD-NRW\\UDL eine neu erstellte DAT- Datei.

Zum Test kann jetzt SchILD-NRW gestartet werden. Beim Start muss die neu erstellte MySQL-Datenbank ausgewählt werden. Es wurden die ersten 2-3 Startvorgänge in meinen Versuchen einige neue Felder und Tabellen angelegt. Danach öffnete sich SchILD-NRW ohne dieses Hinweisfenster.

Sollten Sie das root-Passwort der MySQL-Datenbank einmal ändern, müssen sie den zuvor beschriebenen Vorgang erneut durchführen, um auch SchILD-NRW das neue Passwort mitzuteilen.

### 7. Schritt: Benutzer anlegen

Leider lässt sich bei Verwendung einer MySQL-Datenbank mittels der Benutzerverwaltung von SchILD-NRW kein Benutzer anlegen oder verwalten. Dieses erledigen Sie stattdessen mit der Anwendung

C:\\SchILD-NRW\\UserAdmn.exe

Eine aktuelle Version dieses Tools finden Sie auch auf dem Portal https://www.svws.nrw.de unter Downloads &gt;&gt; Schild-NRW &gt;&gt; Tools Schild-NRW.

Starten Sie nun die Datei UserAdmn.exe. Nachdem Sie die Datenbank ausgewählt haben, für die Sie die Benutzer verwalten möchten, erscheint das Fenster Benutzer-Verwaltung. Eventuelle Fehlermeldungen klicken Sie weg.

![7. Schritt: Benutzer anlegen – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/mysql-installation/seite-09-bild-04.jpg)

![7. Schritt: Benutzer anlegen – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/mysql-installation/seite-09-bild-03.jpg)

Sofern noch nicht geschehen, müssen Sie zunächst unter Benutzergruppen bearbeiten Benutzergruppen definieren. Werden später Benutzer angelegt, werden sie diesen Benutzergruppen zugeordnet und erhalten damit die zuvor definierten Rechte dieser Benutzergruppe.

Legen Sie mindestens die Benutzergruppe Administratoren an mit ausreichenden Rechten an. Klicken Sie dazu unter Benutzergruppen bearbeiten auf das Pluszeichen . Schließen Sie anschließend das Fenster.

Legen Sie auch zumindest den Benutzer Administrator an. Klicken Sie dazu im Fenster Benutzer-Verwaltung auf das Pluszeichen . Hier können Sie nun auch die zuvor eingerichtete Benutzergruppe zuweisen.

### 8. Schritt: Daten-Migration aus einer Access-Datenbank in die MySQL-Datenbank

Im 3. Schritt wurde bereits eine MySQL-Datenbank-Schema erstellt. Damit haben wir eine leere Datenbank mit den erforderlichen Tabellen und Spalten.

Um sicherzustellen, dass dieses Datenbank-Schema auf dem neuesten Stand ist, starten Sie SchILD-NRW und wählen sie Ihre MySQL-Datenbank aus. Falls erforderlich werden nun automatisch einige Tabellen oder Spalten ergänzt. Das kann eine Weile dauern. Sie erhalten gegebenenfalls ein entsprechendes Hinweisfenster. Sie können in einem folgenden Schritt auch schon ihre Schulnummer eintragen.

![8. Schritt: Daten-Migration aus einer Access-Datenbank in die MySQL-Datenbank – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/mysql-installation/seite-09-bild-05.jpg)

Starten Sie SchILD-NRW so oft, bis Sie kein entsprechendes Hinweisfenster mehr erscheint.

Nun können die bestehenden Felder der MySQL-Datenbank mit den Inhalten Ihrer bestehenden Access- Datenbank gefüllt werden.

Zum Test sollten Sie zunächst die zu migrierende Access-Datenbank mit SchILD-NRW öffnen. Dazu muss unter C:\\SchILD-NRW\\UDL eine entsprechende UDL-Verknüpfung existieren. Ist dies nicht der Fall, wird die Access-Datenbank auch nicht beim Start von SchILD-NRW aufgelistet. In diesem Fall müssen Sie die UDL- Datei zunächst erstellen.

Wechseln Sie zum Erstellen einer UDL-Datei für die bestehende Access-Datenbank in das Verzeichnis C:\\SchILD-NRW\\UDL. Erstellen Sie z.B. von der Datei TestHauptschule_....UDL eine Kopie im selben Verzeichnis. Geben Sie dieser Datei einen passenden Namen, der auf die Access-Datenbank hinweist (z.B. access_alt.UDL). Öffnen Sie nun diese Datei mit einem Editor. Ändern Sie den Pfad in dieser Datei so, dass er auf ihre mdb-Access-Datenbank verweist. Speichern Sie Ihre Änderungen.

Wenn Sie nun SchILD-NRW öffnen sollte ihre alte Access-Datenbank aufgelistet sein. Prüfen Sie, ob sich diese ohne Fehlermeldungen starten lässt.

Starten Sie nun das Migrationstool. Sofern vorhanden, finden Sie es unter

C:\\SchILD-NRW\\SchildMigration.exe.

Eine aktuelle Version dieses Tools finden Sie ansonsten auch als Zip-Datei SchILD-Migration.zip auf dem Portal https://www.svws.nrw.de unter Downloads &gt;&gt; Schild-NRW &gt;&gt; Tools Schild-NRW.

Es öffnet sich das folgende Fenster:

![8. Schritt: Daten-Migration aus einer Access-Datenbank in die MySQL-Datenbank – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/mysql-installation/seite-10-bild-01.jpg)

In den beiden Feldern tragen Sie nun die Pfade zu den beiden UDL-Verknüpfungen der Access- Quelldatenbank sowie der MySQL-Zieldatenbank ein. Sie finden Sie im Verzeichnis C:\\SchILD-NRW\\UDL.

Sofern der Verbindungstest positiv verläuft, können Sie die Migration starten. Ein Hinweisfenster weist vor der Migration noch darauf hin, dass eventuelle Feldinhalte in der Zieldatenbank gelöscht werden. Bestätigen Sie dieses Hinweisfenster, um die Migration endgültig zu starten. Die Migration dauert nun eine Weile.

War die Migration erfolgreich, sollten Sie ihre Daten nun beim Starten von SchILD-NRW in Ihrer MySQL- Datenbank finden.

### 9. Schritt: SchILD-NRW auf den Clients installieren

Netzwerkfreigabe: Falls nicht bereits geschehen, erstellen Sie auf dem Server eine Netzwerkfreigabe des Verzeichnisses C:\\SchILD-NRW. Vergeben Sie mindestens Leseberechtigungen für das SchILD-NRW-Verzeichnis und Lese- und Schreibberechtigungen für die Unterverzeichnisse DB, Statistik und Schild-Reports.

Wechseln Sie nun zum Client und führen Sie die folgenden Schritte als Administrator oder als User mit Administrator-Rechten aus.

MySQL-ODBC-Treiber Installieren: Installieren und konfigurieren Sie auch auf dem Client wie oben im 4. Schritt beschrieben den MySQL ODBC-Treiber.

SchILD-NRW-Programmverknüpfung erstellen: Navigieren Sie in den Netzwerkfreigaben zum Freigabeverzeichnis …\\SchILD-NRW des Servers und suchen Sie dort die Anwendung SCHILD2000.exe. Erstellen Sie z.B. auf dem Desktop des Clients eine Verknüpfung zu dieser Anwendung und führen Sie es einmal aus, um den Zugriff auf die Datenbank zu testen.

Starten Sie nun auf dem Client SchILD-NRW und prüfen Sie den Zugriff auf die MySQL-Datenbank.

Client-Registrierung durchführen: Führen Sie an jedem Client die Registrierung der Statistik.dlls aus, damit die Exporte für die Statistikdateien (UVD.txt, SIM.txt und Lehrer.txt) funktionieren können.

Überprüfen Sie dazu zunächst, ob im Systemordner C:\\Windows\\SysWOW64 die beiden OCX-DLL-Dateien comctl32.ocx und comdlg32.ocx vorhanden sind. Fehlen sie, finden Sie diese unter

http://www.svws.nrw.de/index.php?id=statistik (Datei comctl_ocx_dll.zip)

Führen Sie nun SchILD-NRW als Administrator aus (siehe Abb., Rechtsklick auf die SchILD-Verknüpfung).

![9. Schritt: SchILD-NRW auf den Clients installieren – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/mysql-installation/seite-11-bild-01.jpg)

Hinweis: Erhalten Sie hier die Fehlermeldung „Fehler beim Zugriff auf die Datenbank“, haben Sie eventuell für den User „Administrator“ den OBCD-Treiber noch nicht mit MySQL gekoppelt. Führen Sie wie im 4.Schritt beschrieben die Kopplung des ODBC-Treiber mit MySQL durch, indem Sie die Datei odbcad32.exe als Administrator ausführen (Rechtsklick mit der Maus, „als Administrator ausführen“).

Öffnen Sie in SchILD-NRW den Menüpunkt

Schulverwaltung &gt; Statistik/amtliche Schuldaten &gt; Hilfe bei Problemen

Klicken Sie auf Dateien registrieren und prüfen Sie, ob alle nachfolgenden Hinweisfenster auf eine erfolgreiche Registrierung hinweisen.

Testen Sie nun noch, ob die Durchführung der Registrierung erfolgreich war.

Navigieren Sie dazu im Menü von SchILD-NRW auf

Schulverwaltung &gt; Statistik/amtliche Schuldaten&gt;Export …&gt;Schülerdaten(SIM),

Folgen Sie den Anweisungen und überprüfen Sie, ob die Datei sim.txt erstellt wird.

### Anhang: Mögliche Fehlermeldungen

Fehler:

![Anhang: Mögliche Fehlermeldungen – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/mysql-installation/seite-12-bild-04.jpg)

Lösung: Holen Sie wie im 4. Schritt beschrieben die Installation des ODBC-Treibers nach (32-bit-Variante!!). Im 4. Schritt wird auch beschrieben, wie der ODBC-Treiber mit der MySQL-Datenbank gekoppelt wird. Beachten Sie, dass die Kopplung für jeden User, der SchILD-NRW ausführen möchte, einzeln durchgeführt werden muss, also auch speziell für den Administrator!

![Anhang: Mögliche Fehlermeldungen – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/mysql-installation/seite-12-bild-01.jpg)

Fehler:

Lösung: Holen Sie die Installation von „C++ 2010 x86 Redistributable“ nach und wiederholen Sie anschließend die Installation des MySQL ODBC-Treibers. (Eventuell Neustart)

Fehler:

![Anhang: Mögliche Fehlermeldungen – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/mysql-installation/seite-12-bild-02.jpg)

Lösung: Bei Problemen mit der Anmeldung an die Datenbank wiederholen Sie Schritt 6.

Fehler:

![Anhang: Mögliche Fehlermeldungen – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/mysql-installation/seite-12-bild-03.jpg)

Lösung: Die Registrierung auf den Clients schlägt fehl, wenn unter C:\\Windows\\SysWow64 die beiden Dateien comctl32.ocx und comdlg32.ocx fehlen (siehe 9. Schritt)

### 10. Schritt: Automatisiertes Backup der Datenbank

Das Einrichten eines automatisierten MySQL-Dumps wird hier beschrieben:

http://www.olivergast.de/blog/2011/12/09/regelmasige-sicherung-von-mysql-datenbanken-unter-windows/
