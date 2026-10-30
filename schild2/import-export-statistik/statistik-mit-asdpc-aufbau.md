---
title: "Programmaufbau von ASDPC"
---

<a id="statistik-mit-asdpc-aufbau"></a>

# Programmaufbau von ASDPC

Lernen Sie hier den Aufbau von ASDPC kennen: die Erhebungsbereiche, die Eingabeoberfläche und die zugehörigen Dateien. Diese Orientierung hilft Ihnen, die späteren Arbeitsschritte der Haupterhebung einzuordnen.

------------------------------------------------------------------------

Startet man ASDPC, öffnet sich ein Fenster mit Informationen zum Stand von ASDPC, dem Stand der Schlüsseltabellen, Hinweisen zur Statistik des aktuellen Schuljahres und einem Link auf die ToDo-Liste zur Haupterhebung des aktuellen Jahres.

![ASDPC-Startinformationen](/bilder/schild2/import-export-statistik/asdpc-startinformationen.jpg)

Zum Vergrößern klicken.

Um die aktuelle Haupterhebung zu starten, wählen Sie "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)".

![ASDPCErhebungStarten](/bilder/schild2/import-export-statistik/asdpcerhebungstarten.jpg)

Hier muss bei der Erstinstallation die Schule eingerichtet werden. Stellen Sie alle bearbeitbaren Felder korrekt ein, grundlegende Daten der Schule werden in einem der nächsten Schritte über die **Vorgabedaten** importiert werden.

![ASDPCSchuldaten](/bilder/schild2/import-export-statistik/asdpcschuldaten.jpg)

Haben Sie einmal den Modus "Erhebung Amtliche Schuldaten (ASDPC)" aufgerufen, bietet Ihnen ASDPC nun folgende Menüs an:

![ASDPC_HE_Menu](/bilder/schild2/import-export-statistik/asdpc-he-menu.png)

- *Datei* - Hier kann der Modus "Erhebung Amtliche Schuldaten (ASDPC)" über "Schließen" verlassen werden.
- *Erhebung* - Hier kann die aktuelle [Haupterhebung](/schild2/import-export-statistik/statistik-mit-asdpc#Die_Haupterhebung) gestartet werden.

<a id="Abschnitte_&quot;Extras&quot;"></a>
<a id="Abschnitte_.22Extras.22"></a>

## Abschnitte "Extras"

![ASDPC_Extras](/bilder/schild2/import-export-statistik/asdpc-extras.png)

- *ASDPC Datenbank reorganisieren*
- *dienstliche Dokumente beziehungsweise Dateien entschlüsseln* - wird Ihnen per Email mitgeteilt, dass entsprechende Dateien vorliegen, können diese nach dem Download hier entschlüsselt werden (zum Beispiel für Mithilfe bei Fahndungen der Polizei).
- *Schlüsselverwaltung* - verwalten Sie die Schlüssel von ASDPC: [Schlüsselverwaltung](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement)

<a id="Abschnitt_&quot;Optionen&quot;"></a>
<a id="Abschnitt_.22Optionen.22"></a>

## Abschnitt "Optionen"

![ASDPC_Optionen](/bilder/schild2/import-export-statistik/asdpc-optionen.png)

- *Optionen*
  - *Verzeichnisse* - Wählen Sie die Speicherorte für die Hauptdatenbank (ASDPC.mdb) sowie die benötigten weiteren Daten. Nutzen Sie ASDPC in einer Netzwerkumgebung ist es wichtig, diese Pfade korrekt zu nutzen.
  - *Daten bei Programmstart sichern* - Bestätigen Sie mit einem Haken, wenn automatisch eine Sicherung beim Start von ASDPC angelegt werden soll. Sie finden die Sicherung im ASDPC-Installationsverzeichnis \ASD\sicherungen, also bei einer Installation auf Laufwerk C: zum Beispiel bei C:\ASDPC32\ASD\Sicherungen.
  - *Unterrichtseinheiten in Minuten* - wird diese Option aktiviert, werden alle Angaben in der Unterrichtsverteilung (UVD) und den Lehrerdaten (LID) in Minuteneinheiten umgerechnet, das heißt sie werden mit 45 multipliziert, um der Standard-Einheitendauer zu entsprechend. **Vorsicht**: die Umrechnung gilt für *künftige* Importe der UVD.TXT, LEHRER.TXT und EXTERN.DAT. Das Einlesen von Abteilungsdaten oder Sicherungen kann zu Umrechnungsproblemen führen. Sollte weiterhin später wieder auf das Stundenmodell zurückgeschaltet werden, kann es zu Rundungsverlusten kommen.
  - *Farbeinstellung (Rotschwäche)* - ASDPC kann hier einen barrierefreien Modus für Rotschwäche geschaltet werden.

![ASDPC_Verzeichnisse](/bilder/schild2/import-export-statistik/asdpc-verzeichnisse.png)

:::info
Sichern Sie die Ergebnisse Ihrer Arbeit. Eine Sicherung kann auch von der Haupterhebung aus manuell angestoßen werden. Im Fenster der *Haupterhebung* steht dies unter "Datei" ➥ "Sicherung" ➥ "Datenbank sichern" zur Verfügung. Über jenes Menü kann eine Sicherung auch wieder eingelesen werden.
:::

:::warning
Eine Sicherung einzuspielen überschreibt den aktuellen Arbeitsstand mit dem der Sicherung.
:::

<a id="Abschnitt_&quot;Hilfe&quot;"></a>
<a id="Abschnitt_.22Hilfe.22"></a>

## Abschnitt "Hilfe"

![ASDPC_Hilfe](/bilder/schild2/import-export-statistik/asdpc-hilfe.png)

- *Hilfe*
  - *Inhalt...* - Öffnet das ausführliche Hilfeverzeichnis von ASDPC, in dem Sie über einen Index Informationen zu nahezu allen Aspekten finden können (Belege, Hinweise, und vieles mehr).
  - *Suchen in Hilfe* - Öffnet von der Hilfe oben nicht den Index, sondern direkt das Suchfeld für einen schnellen Zugriff.
  - *Eintragungshilfen/Schlüsseltabellen* - öffnet eine Auswahl, mit der die *Schlüsseltabellen* oder *Eintragungshilfen* Ihrer Schulform direkt aus ASDPC im Browser geöffnet werden.
  - *Update ausführen* - Hier kann ein Update von ASDPC ausgeführt werden. Siehe hierzu [Updaten von ASDPC](/schild2/import-export-statistik/statistik-mit-asdpc-technik#Updaten_von_ASDPC).
  - *Schulverzeichnis* - Öffnet das Verzeichnis mit allen Schulen in NRW der aktuell verwendeten SCHULVER.MDB.
  - *Beratungspaket für IT.NRW* - sollte es technische Probleme geben, bei denen IT.NRW Sie um ihre aktuelle Umgebung bittet, werden automatisch Konfigurationsinformationen von ASDPC zusammengestellt, die IT.NRW bei einem Supportkontakt zur Verfügung gestellt werden.
  - *Info* - zeigt Daten zur Dateiversion von ASDPC und der verwendeten Daten. Diese sehen Sie auch direkt im Startbildschirm.

![ASDPC_Inhaltsverzeichnis](/bilder/schild2/import-export-statistik/asdpc-inhaltsverzeichnis.png)

Zum Vergrößern klicken.

------------------------------------------------------------------------

---

Quelle: [Statistik mit ASDPC-Aufbau – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC-Aufbau&oldid=5254)
