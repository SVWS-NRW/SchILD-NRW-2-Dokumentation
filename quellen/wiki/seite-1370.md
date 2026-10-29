---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Schild-NRW-Daten in eine andere Datenbank übertragen (migrieren)"
---

# Schild-NRW-Daten in eine andere Datenbank übertragen (migrieren)

Gesicherte Wiki-Seite · Namensraum 0 · Version 5623 · Stand 2022-09-12.

[Lesbaren Artikel öffnen](/administration/datenbanken/schild-nrw-daten-in-eine-andere-datenbank-uebertragen-migrieren) · [Originaldaten herunterladen](/dateien/quellen/seite-1370.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Mit dem Migrationstool können Sie die Daten einer bestehenden Datenbank in eine andere Datenbank übertragen. So können Sie z.B. die Daten aus einer Access-Datenbank in eine neue Access-Datenbank oder eine SQL-Server-Datenbank übertragen. Mit dem Migrationstool erhalten Sie zudem ein Programm, welches Ihnen beim Erzeugen einer SDBCFG-Datei hilft. Diese Dateien sind für den Migrationsprozess notwendig.

[[Datei:Migrationstool.jpg|thumb|left|Mit dem Migrationstool können sie eine bestehende Datenbank in eine andere migrieren]]

<br clear=all>
Laden Sie sich das Migrationstool hier herunter: https://www.svws.nrw.de/download und entpaken Sie die Programmdaten der ZIP-Datei in ein beliebiges Verzeichnis. Sofern Sie in eine Access-Datenbank migrieren wollen, finden Sie eine leere, vorbereitete Datenbank im Ordner "Vorlagen". Kopieren Sie diese Datenbank in den Ordner "Zieldatei". Sofern Sie als Quelle eine Access-Datenbank verwenden, können Sie diese in den Ordner "Quelldatei" kopieren. Starten Sie anschließend das Programm 'SchILD_DBConfig.exe', mit dem Sie zwei SDBCFG-Konfigurationsdateien für den anschließenden Migrationsprozess erzeugen. Erstellen Sie eine SDBCFG-Konfigurationsdatei für die Quelldatenbank und eine für die Zieldatenbank.

[[Datei:DBConfigEXE.jpg|thumb|left|Beispiel: Access-Quelldatenbank]]
[[Datei:DBConfigEXE2.jpg|thumb|left|Beispiel: SQL-Zieldatenbank]]

<br clear=all>
Starten Sie anschließend das Migrationstool 'SchILDMigTool.exe'. Wählen Sie Konfigurationsdatei für die Quelldatenbank und für die Zieldatenbank. Testen Sie die Verbindung. Bei erfolgreicher Verbindung können Sie den Migrationsprozess starten.

[[Datei:Schildmig3EXE.jpg|thumb|left|Migrationsprozess starten]]

<br clear=all>
Am Ende der Migration wird ein Fehlerprotokoll ausgegeben. Hier kann es unter Umständen zu sehr vielen Meldungen kommen. Die verschiedenen Datenbanksysteme behandeln bestimmte Feldtypen ggf. alle unterschiedlich, das betrifft vor allem NULL-Werte. Ob ein Feld jedoch leer ist oder NULL sollte bei der Auswertung der Daten keinen Unterschied machen. Solche Fehler kann man ignorieren. Auch bei doppelten Facheintragungen kommt es oft zu Fehlern, wenn Schüler das gleiche Fach komplett identisch zweimal in einem Lernabschnitt haben. Auch hier kann man die Fehler ignorieren, weil das eigentlich nur eine Fehleintragung sein kann.
```
