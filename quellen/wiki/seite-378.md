---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Statistik / amtliche Schuldaten"
---

# Statistik / amtliche Schuldaten

Gesicherte Wiki-Seite · Namensraum 0 · Version 2543 · Stand 2014-09-09.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/statistik-amtliche-schuldaten) · [Originaldaten herunterladen](/dateien/quellen/seite-378.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Dieser Menüpunkt beinhaltet alle Vorgänge, die zur Bereitstellung der statistischen Daten für ASDPC32 notwendig sind.

Dazu werden die in Schild-NRW vorhandenen Daten in teilanonymisierter Form in eine Statistik-Datenbank entladen.
(StatistikDB.MDB im Ordner Statistik der Schild-Installation.)

Teilanonymisiert heißt, dass die Schülerdaten hier noch mit einer Statistiknummer versehen werden, damit man später in Schild-NRW über diese Nummer den Datensatz wiederfinden kann, falls z.B. Fehler gemeldet werden.
Beim eigentlichen Export wird diese Nummer dann entfernt, so dass keine Rückverfolgung zu Ihren Daten mehr möglich ist.

Beim Aufruf der Prüfroutinen wird dann das Statistikmodul von IT.NRW aufgerufen.
Bitte beachten Sie, dass es hier in Serverumgebungen sehr häufig zu Fehlermeldungen kommt, wenn die Installationsanleitung für den Schild-NRW-Client nicht beachtet wurde.

http://www.svws.nrw.de/fileadmin/user_upload/Kurzanleitungen/KA11_Installation_Schild-NRW.pdf



== Daten prüfen ==

==== Gesamtprüfung der Daten ====

Diese Option bewirkt zwei Abläufe in Schild-NRW.
Zunächst werden alle relevanten Daten, wie oben erwähnt, in die StatistikDB.mdb entladen.
Danach werden die Module von IT.NRW aufgerufen, die eine erste Fehlerprüfung über die Daten laufen lassen.
Am Ende der Prüfung können Sie sich das Fehlerprotokoll als PDF ansehen.
Dieses Protokoll kann über den nachfolgenden Menüpunkt jederzeit wieder aufgerufen werden.


==== Fehlerprotokoll anzeigen ====

Wenn das Fehlerprotokoll in Form einer PDF-Datei erfolgreich im Ordner "Statistik" der Schild-NRW-Installation gespeichert wurde, kann man es sich über diesen Menüpunkt aufrufen lassen.

Bitte beachten Sie, dass dafür ein PDF-Programm installiert sein muss!

In diesem Protokoll werden die Schüler mit Fehlernummern aufgelistet.
Diese Schüler kann man nun über das Fernglas durch Eingabe der Statistik_ID aufrufen.
Oder man kann über [[Auswahl]] > [[Filter I]] > [[Schüler mit Statistik-Fehlern zeigen]] gehen.

Bitte beachten Sie, dass diese Fehlerprüfung nur ein erster Versuch sein kann, grobe Fehler zu finden!
Eine komplette Plausibilitätsprüfung, wie in ASDPC32, ist hier nicht möglich!
Es lohnt sich deshalb manchmal auch, die Exportdateien trotz einiger Fehler zu erstellen!

----


== Export (mit Modulen von IT.NRW) ==

Im Folgenden werden kurz die Schritte beschrieben, die die vier benötigten Exportdateien für ASDPC32 erstellen.

==== Schülerdaten (SIM) ====

Die Schülerdaten-Exportdatei SIM.txt wird bereitgestellt über Menü Schulverwaltung / Statistik / Export (IT-Module) / Schülerdaten (SIM). 
Im Fenster „Schülerzahlen für Statistik“ sollten Sie die Meldungen („Anzahl Schüler …“) mit OK bestätigen, ebenso „Daten erfolgreich bereitgestellt“.
Im Fenster „Daten entladen nach" können Sie den Speicherort wählen (z.B. …\ASDPC32\ASD) und mit dem Schalter „Speichern“ ausführen. 
Im Fenster „Adressen“ wird die Info mit OK verlassen (Voraussetzung ist, dass unter Schulverwaltung/Schule bearbeiten bei Teilstandorte die nötigen Einträge vorhanden sind). 
Damit sollten die beiden Dateien SIM.txt und adressen.txt im Zielverzeichnis sein.

==== Lehrerdaten (LID) ====

Aus Schild können die Lehrerdaten exportiert werden über Schulverwaltung / Statistik / Export / Lehrerdaten (LID). 
Nach dem Laufband im Fenster „Export in LEHRER.TXT“ wird die Meldung „Daten erfolgreich für die Statistik …“ mit OK bestätigt. 
Im Fenster „Daten entladen nach…“ wird der vorgegebene „Dateiname“ lehrer.txt belassen und auf Speichern geklickt. 
Erscheint das Fensterchen „Datei existiert schon“ mit der Meldung „Die Datei C:\ASDPC32\ASD\lehrer.txt existiert schon. Wie soll vorgegangen werden?“, sollten Sie den Punkt im Kreis vor „Vorhandene Datei überschreiben“ Übernehmen (sonst falsche Zahlen!). Die andere Möglichkeit „An vorhandene Datei anhängen“ ist für Teil-Schulen wie Verbundschulen nützlich.

==== Unterrichtsverteilung (UVD) ====

Über Schulverwaltung / Statistik / Export / Unterrichtsverteilung (UVD) zeigt ein Laufband im Fensterchen „Export in UVD.TXT“ den Fortgang an. Sie sollten den vorgegebenen Exportdateinamen uvd.txt und den Zielpfad belassen und mit der Schaltfläche „Speichern“. 
Wird nur eine leere UVD.txt erstellt, sollten Sie die Schaltfläche „Stunden-Zusammenfassung berechnen“ bei "Lehrkräfte" anklicken, SchILD schließen und dann neu starten.

==== Abiturdaten (ABI) ====


== Hilfe bei Problemen ==


----

[[#top|Zum Seitenanfang]]

[[Schulverwaltung|zurück zu Schulverwaltung]]
```
