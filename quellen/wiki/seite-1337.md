---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Statistik mit ASDPC-Aufbau"
---

# Statistik mit ASDPC-Aufbau

Gesicherte Wiki-Seite · Namensraum 0 · Version 5254 · Stand 2022-01-04.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/statistik-mit-asdpc-aufbau) · [Originaldaten herunterladen](/dateien/quellen/seite-1337.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC__

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]

----

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
** ''Update ausführen'' - Hier kann ein Update von ASDPC ausgeführt werden. Siehe hierzu [[Statistik_mit_ASDPC-Technik#Updaten_von_ASDPC|Updaten von ASDPC]]. 
** ''Schulverzeichnis'' - Öffnet das Verzeichnis mit allen Schulen in NRW der aktuell verwendeten SCHULVER.MDB. 
** ''Beratungspaket für IT.NRW'' - sollte es technische Probleme geben, bei denen IT.NRW Sie um ihre aktuelle Umgebung bittet, werden automatisch Konfigurationsinformationen von ASDPC zusammengestellt, die IT.NRW bei einem Supportkontakt zur Verfügung gestellt werden.
** ''Info'' - zeigt Daten zur Dateiversion von ASDPC und der verwendeten Daten. Diese sehen Sie auch direkt im Startbildschirm.

<div class="thumb"><div class="thumbinner" style="width:152px;">
[[File:ASDPC Inhaltsverzeichnis.png|border|150px]]<div class="thumbcaption">Zum Vergrößern klicken.</div></div></div>


----

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]
```
