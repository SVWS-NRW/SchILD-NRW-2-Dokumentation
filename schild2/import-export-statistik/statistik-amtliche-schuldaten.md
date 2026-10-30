---
title: "Amtliche Schulstatistik vorbereiten"
---

<a id="statistik-amtliche-schuldaten"></a>

# Amtliche Schulstatistik vorbereiten

Hier bereiten Sie die in SchILD gespeicherten Angaben für die amtliche Schulstatistik auf und geben sie für ASDPC aus. Die zusammenhängende Anleitung zu Vorbereitung, Erhebung und Fehlerprüfung finden Sie unter **Tools → ASDPC**.

Dieser Menüpunkt beinhaltet alle Vorgänge, die zur Bereitstellung der statistischen Daten für ASDPC32 notwendig sind.

Dazu werden die in Schild-NRW vorhandenen Daten in teilanonymisierter Form in eine Statistik-Datenbank entladen. (StatistikDB.MDB im Ordner Statistik der Schild-Installation.)

Teilanonymisiert heißt, dass die Schülerdaten hier noch mit einer Statistiknummer versehen werden, damit man später in Schild-NRW über diese Nummer den Datensatz wiederfinden kann, falls zum Beispiel Fehler gemeldet werden. Beim eigentlichen Export wird diese Nummer dann entfernt, so dass keine Rückverfolgung zu Ihren Daten mehr möglich ist.

Beim Aufruf der Prüfroutinen wird dann das Statistikmodul von IT.NRW aufgerufen. Bitte beachten Sie, dass es hier in Serverumgebungen sehr häufig zu Fehlermeldungen kommt, wenn die Installationsanleitung für den Schild-NRW-Client nicht beachtet wurde.


<a id="Daten_prüfen"></a>
<a id="Daten_pr.C3.BCfen"></a>

## Daten prüfen

<a id="Gesamtprüfung_der_Daten"></a>
<a id="Gesamtpr.C3.BCfung_der_Daten"></a>

#### Gesamtprüfung der Daten

Diese Option bewirkt zwei Abläufe in Schild-NRW. Zunächst werden alle relevanten Daten, wie oben erwähnt, in die StatistikDB.mdb entladen. Danach werden die Module von IT.NRW aufgerufen, die eine erste Fehlerprüfung über die Daten laufen lassen. Am Ende der Prüfung können Sie sich das Fehlerprotokoll als PDF ansehen. Dieses Protokoll kann über den nachfolgenden Menüpunkt jederzeit wieder aufgerufen werden.

<a id="Fehlerprotokoll_anzeigen"></a>

#### Fehlerprotokoll anzeigen

Wenn das Fehlerprotokoll in Form einer PDF-Datei erfolgreich im Ordner "Statistik" der Schild-NRW-Installation gespeichert wurde, können Sie es sich über diesen Menüpunkt aufrufen lassen.

Bitte beachten Sie, dass dafür ein PDF-Programm installiert sein muss!

In diesem Protokoll werden die Schüler mit Fehlernummern aufgelistet. Diese Schüler können Sie nun über das Fernglas durch Eingabe der Statistik_ID aufrufen. Oder man kann über [Menü Auswahl](/schild2/auswahl/auswahl) \> [Filter I](/schild2/auswahl/filter-i) \> [Statistikfehler finden](/schild2/auswahl/schueler-mit-statistik-fehlern-zeigen) gehen.

Bitte beachten Sie, dass diese Fehlerprüfung nur ein erster Versuch sein kann, grobe Fehler zu finden! Eine komplette Plausibilitätsprüfung, wie in ASDPC32, ist hier nicht möglich! Es lohnt sich deshalb manchmal auch, die Exportdateien trotz einiger Fehler zu erstellen!

------------------------------------------------------------------------

<a id="Export_(mit_Modulen_von_IT.NRW)"></a>
<a id="Export_.28mit_Modulen_von_IT.NRW.29"></a>

## Export (mit Modulen von IT.NRW)

Im Folgenden werden kurz die Schritte beschrieben, die die vier benötigten Exportdateien für ASDPC32 erstellen.

<a id="Schülerdaten_(SIM)"></a>
<a id="Sch.C3.BClerdaten_.28SIM.29"></a>

#### Schülerdaten (SIM)

Die Schülerdaten-Exportdatei SIM.txt wird bereitgestellt über Menü Schulverwaltung / Statistik / Export (IT-Module) / Schülerdaten (SIM). Im Fenster „Schülerzahlen für Statistik“ sollten Sie die Meldungen („Anzahl Schüler …“) mit OK bestätigen, ebenso „Daten erfolgreich bereitgestellt“. Im Fenster „Daten entladen nach" können Sie den Speicherort wählen (z.B. …\ASDPC32\ASD) und mit dem Schalter „Speichern“ ausführen. Im Fenster „Adressen“ wird die Info mit OK verlassen (Voraussetzung ist, dass unter Schulverwaltung/Schule bearbeiten bei Teilstandorte die nötigen Einträge vorhanden sind). Damit sollten die beiden Dateien SIM.txt und adressen.txt im Zielverzeichnis sein.

<a id="Lehrerdaten_(LID)"></a>
<a id="Lehrerdaten_.28LID.29"></a>

#### Lehrerdaten (LID)

Aus Schild können die Lehrerdaten exportiert werden über Schulverwaltung / Statistik / Export / Lehrerdaten (LID). Nach dem Laufband im Fenster „Export in LEHRER.TXT“ wird die Meldung „Daten erfolgreich für die Statistik …“ mit OK bestätigt. Im Fenster „Daten entladen nach…“ wird der vorgegebene „Dateiname“ lehrer.txt belassen und auf Speichern geklickt. Erscheint das Fensterchen „Datei existiert schon“ mit der Meldung „Die Datei C:\ASDPC32\ASD\lehrer.txt existiert schon. Wie soll vorgegangen werden?“, sollten Sie den Punkt im Kreis vor „Vorhandene Datei überschreiben“ Übernehmen (sonst falsche Zahlen!). Die andere Möglichkeit „An vorhandene Datei anhängen“ ist für Teil-Schulen wie Verbundschulen nützlich.

<a id="Unterrichtsverteilung_(UVD)"></a>
<a id="Unterrichtsverteilung_.28UVD.29"></a>

#### Unterrichtsverteilung (UVD)

Über Schulverwaltung / Statistik / Export / Unterrichtsverteilung (UVD) zeigt ein Laufband im Fensterchen „Export in UVD.TXT“ den Fortgang an. Sie sollten den vorgegebenen Exportdateinamen uvd.txt und den Zielpfad belassen und mit der Schaltfläche „Speichern“. Wird nur eine leere UVD.txt erstellt, sollten Sie die Schaltfläche „Stunden-Zusammenfassung berechnen“ bei "Lehrkräfte" anklicken, SchILD schließen und dann neu starten.

<a id="Abiturdaten_(ABI)"></a>
<a id="Abiturdaten_.28ABI.29"></a>

#### Abiturdaten (ABI)

<a id="Hilfe_bei_Problemen"></a>

## Hilfe bei Problemen

------------------------------------------------------------------------

---

Quelle: [Statistik / amtliche Schuldaten – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+%2F+amtliche+Schuldaten&oldid=2543)
