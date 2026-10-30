---
title: "Daten in eine andere Datenbank übertragen"
---

<a id="schild-nrw-daten-in-eine-andere-datenbank-ubertragen-migrieren"></a>

# Daten in eine andere Datenbank übertragen

Mit dem Migrationstool können Sie die Daten einer bestehenden Datenbank in eine andere Datenbank übertragen. So können Sie zum Beispiel die Daten aus einer Access-Datenbank in eine neue Access-Datenbank oder eine SQL-Server-Datenbank übertragen. Mit dem Migrationstool erhalten Sie zudem ein Programm, welches Ihnen beim Erzeugen einer SDBCFG-Datei hilft. Diese Dateien sind für den Migrationsprozess notwendig.

![Migrationstool](/bilder/administration/datenbanken/migrationstool.jpg)

*Mit dem Migrationstool können sie eine bestehende Datenbank in eine andere migrieren*

Laden Sie sich das Migrationstool hier herunter: <https://www.svws.nrw.de/download> und entpaken Sie die Programmdaten der ZIP-Datei in ein beliebiges Verzeichnis. Sofern Sie in eine Access-Datenbank migrieren wollen, finden Sie eine leere, vorbereitete Datenbank im Ordner "Vorlagen". Kopieren Sie diese Datenbank in den Ordner "Zieldatei". Sofern Sie als Quelle eine Access-Datenbank verwenden, können Sie diese in den Ordner "Quelldatei" kopieren. Starten Sie anschließend das Programm 'SchILD_DBConfig.exe', mit dem Sie zwei SDBCFG-Konfigurationsdateien für den anschließenden Migrationsprozess erzeugen. Erstellen Sie eine SDBCFG-Konfigurationsdatei für die Quelldatenbank und eine für die Zieldatenbank.

![DBConfigEXE](/bilder/administration/datenbanken/dbconfigexe.jpg)

*Beispiel: Access-Quelldatenbank*

![DBConfigEXE2](/bilder/administration/datenbanken/dbconfigexe2.jpg)

*Beispiel: SQL-Zieldatenbank*

Starten Sie anschließend das Migrationstool 'SchILDMigTool.exe'. Wählen Sie Konfigurationsdatei für die Quelldatenbank und für die Zieldatenbank. Testen Sie die Verbindung. Bei erfolgreicher Verbindung können Sie den Migrationsprozess starten.

![Schildmig3EXE](/bilder/administration/datenbanken/schildmig3exe.jpg)

*Migrationsprozess starten*

Am Ende der Migration wird ein Fehlerprotokoll ausgegeben. Hier kann es unter Umständen zu sehr vielen Meldungen kommen. Die verschiedenen Datenbanksysteme behandeln bestimmte Feldtypen gegebenenfalls alle unterschiedlich, das betrifft vor allem NULL-Werte. Ob ein Feld jedoch leer ist oder NULL sollte bei der Auswertung der Daten keinen Unterschied machen. Solche Fehler können Sie ignorieren. Auch bei doppelten Facheintragungen kommt es oft zu Fehlern, wenn Schüler das gleiche Fach komplett identisch zweimal in einem Lernabschnitt haben. Auch hier können Sie die Fehler ignorieren, weil das eigentlich nur eine Fehleintragung sein kann.

---

Quelle: [Schild-NRW-Daten in eine andere Datenbank übertragen (migrieren) – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Schild-NRW-Daten+in+eine+andere+Datenbank+%C3%BCbertragen+%28migrieren%29&oldid=5623)
