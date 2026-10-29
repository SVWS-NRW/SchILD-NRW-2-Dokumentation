---
title: "MA2LBV / MA2: Einrichtung und Datenbankzugriff"
---

# Einrichtung und Datenbankzugriff

Das früher **MA2LBV** genannte Programm heißt seit Version 3.2 **MA2**. Die Bezeichnung der Tools-Rubrik bleibt zur Orientierung erhalten. Die Anleitung beschreibt sowohl den Import aus SchILD als auch den Betrieb mit externen oder manuell erfassten Abrechnungsdaten.

## Ersteinrichtung

Nach der Installation werden die Formulardaten der Schule, die Programmeinstellungen und gegebenenfalls die Verbindung zur SchILD-Datenbank festgelegt. Der Benutzer **MA2Admin** ist für die administrative Einrichtung vorgesehen. Die Anleitung nennt für die Auslieferung das Startkennwort `schild`; das Kennwort lässt sich ändern.

Über **Einstellungen** tragen Sie unter anderem Schule beziehungsweise Dienststelle, Schulnummer und die übrigen nicht personenbezogenen Formulardaten ein.

## SchILD-Zugriff konfigurieren

1. Öffnen Sie aus den allgemeinen Einstellungen den Dialog für **SchILD-Zugriff / Benutzerdaten**.
2. Wählen Sie die passende Datenbankverbindung.
3. Bei der SchILD-Standarddatenbank `schild2000n.mdb` wird direkt die MDB-Datei verwendet. Für diese Standarddatenbank gibt es nach der Anleitung keine eigene UDL-Datei.
4. Bei einer eingerichteten UDL-Verbindung wählen Sie die passende `.UDL`-Datei. Für eine Serverdatenbank können zusätzlich Datenbank-Zugangsdaten erforderlich sein.
5. Prüfen Sie die Verbindung über **Verbindung testen**.

Für den Import von Lehrkraftdaten benötigt ein verwendeter SchILD-Benutzer das Recht, Lehrkraftdaten zu lesen. Nur **MA2Admin** kann im Modul den Dialog zur Konfiguration der Verbindung und der externen Benutzer aufrufen.

Bei SchILDzentral wird das Modul aus der SchILDzentral-Anwendung gestartet. Eine dort abgelegte Programmdatei lässt sich nicht unabhängig davon direkt aufrufen; die Einrichtung der zentralen Umgebung ist von der Einrichtung einer gewöhnlichen SchILD2-Installation zu unterscheiden.

Quelle: [Bedienungsanleitung MA2, Druckstand 18.03.2024](https://www.svws.nrw.de/system/files/media/document/file/ma2lbv_anleitung.pdf), Seiten 4–12 und 20–25; [Versionshinweise](https://www.svws.nrw.de/system/files/media/document/file/ma2pdf_versionsgeschichte.pdf), Version 3.2.3.2.
