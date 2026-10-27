---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Statistik mit ASDPC-Technik"
---

# Statistik mit ASDPC-Technik

Gesicherte Wiki-Seite · Namensraum 0 · Version 5307 · Stand 2022-01-19.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/statistik-mit-asdpc-technik) · [Originaldaten herunterladen](/dateien/quellen/seite-1336.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC___

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]

----

===Erstinstallation===

{{Achtung|ASDPC benötigt zur Installation zwingend Administratorrechte. Kontaktieren Sie bei Bedarf Ihren zuständigen Hardware-/Softwareverwalter bzw. Dienstleister.<br><br>
Eine Installation auf anderen Betriebssystemen als MS Windows wird nicht unterstützt.}}

Die Grundinstallation und eventuelle Updates sind unter diesem Link herunterzuladen: https://www.svws.nrw.de/download/asdpc32

Hier ist der Direktlink zur [https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D86 Grundinstallation].

[[File:ASDPC Download.png|500px]]

Laden Sie ASDPC herunter.

Wenn Sie nicht gefragt werden, wo die Datei gespeichert werden soll, wird sie von Windows üblicherweise im "Download"-Ordner gespeichert.

Öffen Sie den Windows Explorer und wählen Sie "Downloads" an.

[[File:ASDPC Download Programm.png|x350px]]

Dort können Sie die Installationsdatei an einen anderen Ort kopieren oder direkt ausführen.

Nun müssen Sie einen Ort wählen, an den die eigentlichen Installationsdateien entpackt werden sollen:

[[File:ASDPC Extract.png|300px]]

Im Grunde ist es nicht wichtig, welchen Installationspfad Sie nutzen. Für das Beispiel wurden die Dateien in den Ordner C:\ASDPC32 entpackt.

Sofern Sie nicht ein Konto mit Administrationsrechten haben beziehungsweise nicht auf das Laufwerk schreiben dürfen, können Sie mit der rechten Maustaste auf die Datei klicken und "Als Administrator ausführen" wählen:

[[File:ASDPC Installation Admin.png|x100px]]

Haben Sie keine Administratorenrechte, müssen Sie Ihren IT-Dienstleister beziehungsweise Ihre Supportperson hinzu ziehen.

Nun können Sie die eigentliche Installation starten. Gehen Sie in dem Ordner, den Sie gerade entpackt haben und klicken Sie auf "Setup.exe".

[[File:ASDPC Installation Admin2.png|x250px]]

Falls die Installation nicht komplett durchführbar ist, wählen Sie "Als Administrator ausführen" aus. Sollten Sie dies nicht dürfen, müssen Sie sich an Ihren IT-Support werden.

Klicken Sie bei der Installation von ASDPC nun immer auf die Felder, mit denen die Installation durchgeführt ist.

===Updaten von ASDPC===

Um ASDPC zu updaten können Sie hier [https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D91 ein eventuelles Update] herunterladen.

Speichern Sie hierzu die [https://schulverwaltungsprogramme.msb.nrw.de/download/asdupd.zip asdupd.zip] in Ihrer ASDPC-Installation im Ordner

:: ...\ASDPC32\update

In dem Beispiel hier wäre dies der Ordner "C:\ASDPC32\ASDPC32\update\". 

* Starten Sie dann ASDPC 
* und gehen Sie über "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)" in den Modus der Datenergebung. 
* Dort können Sie nun über "Hilfe" ➥ "Update ausführen" das Update anstoßen.

Es lässt sich auch von ASDPC heraus auf Updates prüfen:

[[File:ASDUpdate.jpg|400px]]

Unter dem folgenden Link finden Sie eine ausführliche Anleitung, wie die Dateien zu kopieren sind und wie das Update auszuführen ist: [https://schulverwaltungsprogramme.msb.nrw.de/download/ASDPC_Updatehinweis.pdf Anleitung].

Wenn Sie den Link zum Update aufrufen und etwas herunterscrollen, finden sich auch typische Problemsituationen mit ihren Lösungen, die im Zusammenhang mit dem Update auftreten können.

{{Achtung|Bitte beachten Sie, dass vor oder während der Statistik noch weitere Updates mit Fehlerkorrekturen erscheinen können. Prüfen Sie bitte vor der Arbeit, ob Sie mit der neuesten Version von ASDPC32 arbeiten.}}

Denken Sie auch daran zu prüfen, ob Ihre Schulverwaltungsprogramme - z.B. SchILD NRW - geupdated werden können.

===Schlüsselmanagement===

::[[Statistik_mit_ASDPC-Schluesselmanagement|Schlüsselmanagement]]

====Allgemeine Informationen====


::[[Statistik_mit_ASDPC-Schluesselmanagement#Allgemeine Informationen|Allgemeine Informationen]]

====Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln====

::[[Statistik_mit_ASDPC-Schluesselmanagement#Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln|Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln]]

====Mögliche Fehler bei Ver- und Entschlüsselung====

::[[Statistik_mit_ASDPC-Schluesselmanagement#Mögliche Fehler bei Ver- und Entschlüsselung|Mögliche Fehler bei Ver- und Entschlüsselung]]

===Das Programm ASDPC===

Startet man ASDPC, öffnet sich ein Fenster mit Informationen zum Stand von ASDPC, dem Stand der Schlüsseltabellen, Hinweisen zur Statistik des aktuellen Schuljahres und einem Link auf die ToDo-Liste zur Haupterhebung des aktuellen Jahres.

<div class="thumb"><div class="thumbinner" style="width:402px;">
[[File:ASDPC-Startinformationen.jpg|border|400px]]<div class="thumbcaption">Zum Vergrößern klicken.</div></div></div>

Um die aktuelle Haupterhebung zu starten, wählen Sie "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)".

[[File:ASDPCErhebungStarten.jpg|400px]]

Hier muss bei der Erstinstallation die Schule eingerichtet werden. Stellen Sie alle bearbeitbaren Felder korrekt ein, grundlegende Daten der Schule werden in einem der nächsten Schritte über die '''Vorgabedaten''' importiert werden.

[[File:ASDPCSchuldaten.jpg|400px]]

Haben Sie einmal den Modus "Erhebung Amtliche Schuldaten (ASDPC)" aufgerufen, bietet Ihnen ASDPC nun folgende Menüs an: 

[[File:ASDPC_HE_Menu.png|400px]]

* ''Datei'' - Hier kann der Modus "Erhebung Amtliche Schuldaten (ASDPC)" über "Schließen" verlassen werden.
* ''Erhebung'' - Hier kann die aktuelle [[Statistik_mit_ASDPC#Die_Haupterhebung|Haupterhebung]] gestartet werden.

====Abschnitte "Extras"====

[[File:ASDPC Extras.png|x200px]]

* ''ASDPC Datenbank reorganisieren''
* ''dienstliche Dokumente bzw. Dateien entschlüsseln'' - wird Ihnen per Email mitgeteilt, dass entsprechende Dateien vorliegen, können diese nach dem Download hier entschlüsselt werden (z.B. für Mithilfe bei Fahndungen der Polizei).
* ''Schlüsselverwaltung'' - verwalten Sie die Schlüssel von ASDPC: [[Statistik_mit_ASDPC-Schluesselmanagement|Schlüsselmanagement]]

====Abschnitt "Optionen"====

[[File:ASDPC_Optionen.png|400px]]

* ''Optionen''
** ''Verzeichnisse'' - Wählen Sie die Speicherorte für die Hauptdatenbank (ASDPC.mdb) sowie die benötigten weiteren Daten. Nutzen Sie ASDPC in einer Netzwerkumgebung ist es wichtig, diese Pfade korrekt zu nutzen. Lesen Sie hierzu die gesonderte Anleitung [https://schulverwaltungsprogramme.msb.nrw.de/download/Anleitung-ASDPC_in_einer_Netzwerkumgebung_nutzen.pdf ASDPC in einer Netzwerkumgebung nutzen].
** ''Daten bei Programmstart sichern'' - Bestätigen Sie mit einem Haken, wenn automatisch eine Sicherung beim Start von ASDPC angelegt werden soll. Sie finden die Sicherung im ASDPC-Installationsverzeichnis \ASD\sicherungen, also bei einer Installation auf Laufwerk C: z.B. bei C:\ASDPC32\ASD\Sicherungen.
** ''Unterrichtseinheiten in Minuten'' - wird diese Option aktiviert, werden alle Angaben in der Unterrichtsverteilung (UVD) und den Lehrerdaten (LID) in Minuteneinheiten umgerechnet, d.h. sie werden mit 45 multipliziert, um der Standard-Einheitendauer zu entsprechend. '''Vorsicht''': die Umrechnung gilt für ''künftige'' Importe der UVD.TXT, LEHRER.TXT und EXTERN.DAT. Das Einlesen von Abteilungsdaten oder Sicherungen kann zu Umrechnungsproblemen führen. Sollte weiterhin später wieder auf das Stundenmodell zurückgeschaltet werden, kann es zu Rundungsverlusten kommen.
** ''Farbeinstellung (Rotschwäche)'' - ASDPC kann hier einen barrierefreien Modus für Rotschwäche geschaltet werden.

[[File:ASDPC_Verzeichnisse.png|400px]]

{{Hinweis|Sichern Sie die Ergebnisse Ihrer Arbeit. Eine Sicherung kann auch von der Haupterhebung aus manuell angestoßen werden. Im Fenster der ''Haupterhebung'' steht dies unter "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" zur Verfügung. Über jenes Menü kann eine Sicherung auch wieder eingelesen werden.}}

{{Wichtig|Eine Sicherung einzuspielen überschreibt den aktuellen Arbeitsstand mit dem der Sicherung.}}

====Abschnitt "Hilfe"====

[[File:ASDPC Hilfe.png|400px]]

* ''Hilfe''
** ''Inhalt...'' - Öffnet das ausführliche Hilfeverzeichnis von ASDPC, in dem Sie über einen Index Informationen zu nahezu allen Aspekten finden können (Belege, Hinweise, und vieles mehr).
** ''Suchen in Hilfe'' - Öffnet von der Hilfe oben nicht den Index, sondern direkt das Suchfeld für einen schnellen Zugriff.
** ''Eintragungshilfen/Schlüsseltabellen'' - öffnet eine Auswahl, mit der die ''Schlüsseltabellen'' oder ''Eintragungshilfen'' Ihrer Schulform direkt aus ASDPC im Browser geöffnet werden.
** ''Update ausführen'' - Hier kann ein Update von ASDPC ausgeführt werden. Siehe hierzu das Kapitel [[Statistik_mit_ASDPC-Technik#Updaten_von_ASDPC|Update von ASDPC]]. 
** ''Schulverzeichnis'' - Öffnet das Verzeichnis mit allen Schulen in NRW der aktuell verwendeten SCHULVER.MDB. 
** ''Beratungspaket für IT.NRW'' - sollte es technische Probleme geben, bei denen IT.NRW Sie um ihre aktuelle Umgebung bittet, werden automatisch Konfigurationsinformationen von ASDPC zusammengestellt, die IT.NRW bei einem Supportkontakt zur Verfügung gestellt werden.
** ''Info'' - zeigt Daten zur Dateiversion von ASDPC und der verwendeten Daten. Diese sehen Sie auch direkt im Startbildschirm.

<div class="thumb"><div class="thumbinner" style="width:152px;">
[[File:ASDPC Inhaltsverzeichnis.png|border|150px]]<div class="thumbcaption">Zum Vergrößern klicken.</div></div></div>



[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]
```
