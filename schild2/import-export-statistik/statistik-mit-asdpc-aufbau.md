---
title: "Statistik mit ASDPC-Aufbau"
wiki_title: "Statistik mit ASDPC-Aufbau"
wiki_page_id: 1337
wiki_revision: 5254
---

# Statistik mit ASDPC-Aufbau

------------------------------------------------------------------------

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

## Abschnitte "Extras"

![ASDPC_Extras](/bilder/wiki/asdpc-extras-bc4281c9.png)

- *ASDPC Datenbank reorganisieren*
- *dienstliche Dokumente bzw. Dateien entschlüsseln* - wird Ihnen per Email mitgeteilt, dass entsprechende Dateien vorliegen, können diese nach dem Download hier entschlüsselt werden (z.B. für Mithilfe bei Fahndungen der Polizei).
- *Schlüsselverwaltung* - verwalten Sie die Schlüssel von ASDPC: [Schlüsselmanagement](/schild2/import-export-statistik/statistik-mit-asdpc-schluesselmanagement)

<a id="Abschnitt_&quot;Optionen&quot;"></a>
<a id="Abschnitt_.22Optionen.22"></a>

## Abschnitt "Optionen"

![ASDPC_Optionen](/bilder/wiki/asdpc-optionen-b494ae3a.png)

- *Optionen*
  - *Verzeichnisse* - Wählen Sie die Speicherorte für die Hauptdatenbank (ASDPC.mdb) sowie die benötigten weiteren Daten. Nutzen Sie ASDPC in einer Netzwerkumgebung ist es wichtig, diese Pfade korrekt zu nutzen. Lesen Sie hierzu die gesonderte Anleitung [ASDPC in einer Netzwerkumgebung nutzen](https://schulverwaltungsprogramme.msb.nrw.de/download/Anleitung-ASDPC_in_einer_Netzwerkumgebung_nutzen.pdf).
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

## Abschnitt "Hilfe"

![ASDPC_Hilfe](/bilder/wiki/asdpc-hilfe-939f203f.png)

- *Hilfe*
  - *Inhalt...* - Öffnet das ausführliche Hilfeverzeichnis von ASDPC, in dem Sie über einen Index Informationen zu nahezu allen Aspekten finden können (Belege, Hinweise, und vieles mehr).
  - *Suchen in Hilfe* - Öffnet von der Hilfe oben nicht den Index, sondern direkt das Suchfeld für einen schnellen Zugriff.
  - *Eintragungshilfen/Schlüsseltabellen* - öffnet eine Auswahl, mit der die *Schlüsseltabellen* oder *Eintragungshilfen* Ihrer Schulform direkt aus ASDPC im Browser geöffnet werden.
  - *Update ausführen* - Hier kann ein Update von ASDPC ausgeführt werden. Siehe hierzu [Updaten von ASDPC](/schild2/import-export-statistik/statistik-mit-asdpc-technik#Updaten_von_ASDPC).
  - *Schulverzeichnis* - Öffnet das Verzeichnis mit allen Schulen in NRW der aktuell verwendeten SCHULVER.MDB.
  - *Beratungspaket für IT.NRW* - sollte es technische Probleme geben, bei denen IT.NRW Sie um ihre aktuelle Umgebung bittet, werden automatisch Konfigurationsinformationen von ASDPC zusammengestellt, die IT.NRW bei einem Supportkontakt zur Verfügung gestellt werden.
  - *Info* - zeigt Daten zur Dateiversion von ASDPC und der verwendeten Daten. Diese sehen Sie auch direkt im Startbildschirm.

![ASDPC_Inhaltsverzeichnis](/bilder/wiki/asdpc-inhaltsverzeichnis-7a33b862.png)

Zum Vergrößern klicken.

------------------------------------------------------------------------

---

Quelle: [Statistik mit ASDPC-Aufbau – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC-Aufbau&oldid=5254) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC-Aufbau&action=history)
