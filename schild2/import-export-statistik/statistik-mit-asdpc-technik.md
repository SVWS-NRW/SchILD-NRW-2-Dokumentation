---
title: "Statistik mit ASDPC-Technik"
wiki_title: "Statistik mit ASDPC-Technik"
wiki_page_id: 1336
wiki_revision: 5307
---

# Statistik mit ASDPC-Technik

\_

------------------------------------------------------------------------

<a id="Erstinstallation"></a>

## Erstinstallation

:::danger
ASDPC benötigt zur Installation zwingend Administratorrechte. Kontaktieren Sie bei Bedarf Ihren zuständigen Hardware-/Softwareverwalter bzw. Dienstleister.\

Eine Installation auf anderen Betriebssystemen als MS Windows wird nicht unterstützt.
:::

Die Grundinstallation und eventuelle Updates sind unter diesem Link herunterzuladen: <https://www.svws.nrw.de/download/asdpc32>

Hier ist der Direktlink zur [Grundinstallation](https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D86).

![ASDPC_Download](/bilder/wiki/asdpc-download-c47e9b44.png)

Laden Sie ASDPC herunter.

Wenn Sie nicht gefragt werden, wo die Datei gespeichert werden soll, wird sie von Windows üblicherweise im "Download"-Ordner gespeichert.

Öffen Sie den Windows Explorer und wählen Sie "Downloads" an.

![ASDPC_Download_Programm](/bilder/wiki/asdpc-download-programm-5c64b043.png)

Dort können Sie die Installationsdatei an einen anderen Ort kopieren oder direkt ausführen.

Nun müssen Sie einen Ort wählen, an den die eigentlichen Installationsdateien entpackt werden sollen:

![ASDPC_Extract](/bilder/wiki/asdpc-extract-e2e7ac68.png)

Im Grunde ist es nicht wichtig, welchen Installationspfad Sie nutzen. Für das Beispiel wurden die Dateien in den Ordner C:\ASDPC32 entpackt.

Sofern Sie nicht ein Konto mit Administrationsrechten haben beziehungsweise nicht auf das Laufwerk schreiben dürfen, können Sie mit der rechten Maustaste auf die Datei klicken und "Als Administrator ausführen" wählen:

![ASDPC_Installation_Admin](/bilder/wiki/asdpc-installation-admin-df967338.png)

Haben Sie keine Administratorenrechte, müssen Sie Ihren IT-Dienstleister beziehungsweise Ihre Supportperson hinzu ziehen.

Nun können Sie die eigentliche Installation starten. Gehen Sie in dem Ordner, den Sie gerade entpackt haben und klicken Sie auf "Setup.exe".

![ASDPC_Installation_Admin2](/bilder/wiki/asdpc-installation-admin2-b2098096.png)

Falls die Installation nicht komplett durchführbar ist, wählen Sie "Als Administrator ausführen" aus. Sollten Sie dies nicht dürfen, müssen Sie sich an Ihren IT-Support werden.

Klicken Sie bei der Installation von ASDPC nun immer auf die Felder, mit denen die Installation durchgeführt ist.

<a id="Updaten_von_ASDPC"></a>

## Updaten von ASDPC

Um ASDPC zu updaten können Sie hier [ein eventuelles Update](https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D91) herunterladen.

Speichern Sie hierzu die [asdupd.zip](/quellen/fehlende-downloads#asdupd-zip) in Ihrer ASDPC-Installation im Ordner

...\ASDPC32\update

In dem Beispiel hier wäre dies der Ordner "C:\ASDPC32\ASDPC32\update\\".

- Starten Sie dann ASDPC
- und gehen Sie über "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)" in den Modus der Datenergebung.
- Dort können Sie nun über "Hilfe" ➥ "Update ausführen" das Update anstoßen.

Es lässt sich auch von ASDPC heraus auf Updates prüfen:

![ASDUpdate](/bilder/wiki/asdupdate-cd5e457c.jpg)

Unter dem folgenden Link finden Sie eine ausführliche Anleitung, wie die Dateien zu kopieren sind und wie das Update auszuführen ist: [Anleitung](/quellen/fehlende-downloads#asdpc-updatehinweis-pdf).

Wenn Sie den Link zum Update aufrufen und etwas herunterscrollen, finden sich auch typische Problemsituationen mit ihren Lösungen, die im Zusammenhang mit dem Update auftreten können.

:::danger
Bitte beachten Sie, dass vor oder während der Statistik noch weitere Updates mit Fehlerkorrekturen erscheinen können. Prüfen Sie bitte vor der Arbeit, ob Sie mit der neuesten Version von ASDPC32 arbeiten.
:::

Denken Sie auch daran zu prüfen, ob Ihre Schulverwaltungsprogramme - z.B. SchILD NRW - geupdated werden können.

<a id="Schlüsselmanagement"></a>
<a id="Schl.C3.BCsselmanagement"></a>

## Schlüsselmanagement

[Schlüsselmanagement](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement)

<a id="Allgemeine_Informationen"></a>

### Allgemeine Informationen

[Allgemeine Informationen](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement#Allgemeine_Informationen)

<a id="Neu_Erzeugen,_Einlesen_und_Sichern_von_existierenden_Schlüsseln"></a>
<a id="Neu_Erzeugen.2C_Einlesen_und_Sichern_von_existierenden_Schl.C3.BCsseln"></a>

### Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln

[Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement#Neu_Erzeugen,_Einlesen_und_Sichern_von_existierenden_Schl%C3%BCsseln)

<a id="Mögliche_Fehler_bei_Ver-_und_Entschlüsselung"></a>
<a id="M.C3.B6gliche_Fehler_bei_Ver-_und_Entschl.C3.BCsselung"></a>

### Mögliche Fehler bei Ver- und Entschlüsselung

[Mögliche Fehler bei Ver- und Entschlüsselung](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement#M%C3%B6gliche_Fehler_bei_Ver-_und_Entschl%C3%BCsselung)

<a id="Das_Programm_ASDPC"></a>

## Das Programm ASDPC

Startet man ASDPC, öffnet sich ein Fenster mit Informationen zum Stand von ASDPC, dem Stand der Schlüsseltabellen, Hinweisen zur Statistik des aktuellen Schuljahres und einem Link auf die ToDo-Liste zur Haupterhebung des aktuellen Jahres.

![ASDPC-Startinformationen](/bilder/wiki/asdpc-startinformationen-cc3f7a4b.jpg)

Zum Vergrößern klicken.

Um die aktuelle Haupterhebung zu starten, wählen Sie "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)".

![ASDPCErhebungStarten](/bilder/wiki/asdpcerhebungstarten-c7312d17.jpg)

Hier muss bei der Erstinstallation die Schule eingerichtet werden. Stellen Sie alle bearbeitbaren Felder korrekt ein, grundlegende Daten der Schule werden in einem der nächsten Schritte über die **Vorgabedaten** importiert werden.

![ASDPCSchuldaten](/bilder/wiki/asdpcschuldaten-d92237d7.jpg)

Haben Sie einmal den Modus "Erhebung Amtliche Schuldaten (ASDPC)" aufgerufen, bietet Ihnen ASDPC nun folgende Menüs an:

![ASDPC_HE_Menu](/bilder/wiki/asdpc-he-menu-dda6b55e.png)

- *Datei* - Hier kann der Modus "Erhebung Amtliche Schuldaten (ASDPC)" über "Schließen" verlassen werden.
- *Erhebung* - Hier kann die aktuelle [Haupterhebung](/schild2/import-export-statistik/statistik-mit-asdpc#Die_Haupterhebung) gestartet werden.

<a id="Abschnitte_&quot;Extras&quot;"></a>
<a id="Abschnitte_.22Extras.22"></a>

### Abschnitte "Extras"

![ASDPC_Extras](/bilder/wiki/asdpc-extras-bc4281c9.png)

- *ASDPC Datenbank reorganisieren*
- *dienstliche Dokumente bzw. Dateien entschlüsseln* - wird Ihnen per Email mitgeteilt, dass entsprechende Dateien vorliegen, können diese nach dem Download hier entschlüsselt werden (z.B. für Mithilfe bei Fahndungen der Polizei).
- *Schlüsselverwaltung* - verwalten Sie die Schlüssel von ASDPC: [Schlüsselmanagement](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement)

<a id="Abschnitt_&quot;Optionen&quot;"></a>
<a id="Abschnitt_.22Optionen.22"></a>

### Abschnitt "Optionen"

![ASDPC_Optionen](/bilder/wiki/asdpc-optionen-b494ae3a.png)

- *Optionen*
  - *Verzeichnisse* - Wählen Sie die Speicherorte für die Hauptdatenbank (ASDPC.mdb) sowie die benötigten weiteren Daten. Nutzen Sie ASDPC in einer Netzwerkumgebung ist es wichtig, diese Pfade korrekt zu nutzen. Lesen Sie hierzu die gesonderte Anleitung [ASDPC in einer Netzwerkumgebung nutzen](/quellen/fehlende-downloads#anleitung-asdpc-in-einer-netzwerkumgebung-nutzen-pdf).
  - *Daten bei Programmstart sichern* - Bestätigen Sie mit einem Haken, wenn automatisch eine Sicherung beim Start von ASDPC angelegt werden soll. Sie finden die Sicherung im ASDPC-Installationsverzeichnis \ASD\sicherungen, also bei einer Installation auf Laufwerk C: z.B. bei C:\ASDPC32\ASD\Sicherungen.
  - *Unterrichtseinheiten in Minuten* - wird diese Option aktiviert, werden alle Angaben in der Unterrichtsverteilung (UVD) und den Lehrerdaten (LID) in Minuteneinheiten umgerechnet, d.h. sie werden mit 45 multipliziert, um der Standard-Einheitendauer zu entsprechend. **Vorsicht**: die Umrechnung gilt für *künftige* Importe der UVD.TXT, LEHRER.TXT und EXTERN.DAT. Das Einlesen von Abteilungsdaten oder Sicherungen kann zu Umrechnungsproblemen führen. Sollte weiterhin später wieder auf das Stundenmodell zurückgeschaltet werden, kann es zu Rundungsverlusten kommen.
  - *Farbeinstellung (Rotschwäche)* - ASDPC kann hier einen barrierefreien Modus für Rotschwäche geschaltet werden.

![ASDPC_Verzeichnisse](/bilder/wiki/asdpc-verzeichnisse-5321b389.png)

:::info
Sichern Sie die Ergebnisse Ihrer Arbeit. Eine Sicherung kann auch von der Haupterhebung aus manuell angestoßen werden. Im Fenster der *Haupterhebung* steht dies unter "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" zur Verfügung. Über jenes Menü kann eine Sicherung auch wieder eingelesen werden.
:::

:::warning
Eine Sicherung einzuspielen überschreibt den aktuellen Arbeitsstand mit dem der Sicherung.
:::

<a id="Abschnitt_&quot;Hilfe&quot;"></a>
<a id="Abschnitt_.22Hilfe.22"></a>

### Abschnitt "Hilfe"

![ASDPC_Hilfe](/bilder/wiki/asdpc-hilfe-939f203f.png)

- *Hilfe*
  - *Inhalt...* - Öffnet das ausführliche Hilfeverzeichnis von ASDPC, in dem Sie über einen Index Informationen zu nahezu allen Aspekten finden können (Belege, Hinweise, und vieles mehr).
  - *Suchen in Hilfe* - Öffnet von der Hilfe oben nicht den Index, sondern direkt das Suchfeld für einen schnellen Zugriff.
  - *Eintragungshilfen/Schlüsseltabellen* - öffnet eine Auswahl, mit der die *Schlüsseltabellen* oder *Eintragungshilfen* Ihrer Schulform direkt aus ASDPC im Browser geöffnet werden.
  - *Update ausführen* - Hier kann ein Update von ASDPC ausgeführt werden. Siehe hierzu das Kapitel [Update von ASDPC](#Updaten_von_ASDPC).
  - *Schulverzeichnis* - Öffnet das Verzeichnis mit allen Schulen in NRW der aktuell verwendeten SCHULVER.MDB.
  - *Beratungspaket für IT.NRW* - sollte es technische Probleme geben, bei denen IT.NRW Sie um ihre aktuelle Umgebung bittet, werden automatisch Konfigurationsinformationen von ASDPC zusammengestellt, die IT.NRW bei einem Supportkontakt zur Verfügung gestellt werden.
  - *Info* - zeigt Daten zur Dateiversion von ASDPC und der verwendeten Daten. Diese sehen Sie auch direkt im Startbildschirm.

![ASDPC_Inhaltsverzeichnis](/bilder/wiki/asdpc-inhaltsverzeichnis-7a33b862.png)

Zum Vergrößern klicken.


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1336) · [Statistik mit ASDPC-Technik – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC-Technik&oldid=5307)
