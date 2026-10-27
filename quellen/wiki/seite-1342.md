---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Statistik mit ASDPC Vorbereitung"
---

# Statistik mit ASDPC Vorbereitung

Gesicherte Wiki-Seite · Namensraum 0 · Version 5308 · Stand 2022-01-19.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/statistik-mit-asdpc-vorbereitung) · [Originaldaten herunterladen](/dateien/quellen/seite-1342.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC__

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]

==Vorbereitung der Statistik==

===Sammeln der notwendigen Ressourcen und Updates===

{{Achtung|Wurde ASDPC schon in den letzten Jahren genutzt oder wurde nicht direkt vor Beginn der Statisik die aktuellste Version installiert, sind direkt vor jeder Statistik das Hauptprogramm und die verwendeten Daten zu updaten.<br>Auch in der laufenden Statistik kann es vorkommen, dass eine neue Version bereitgestellt wird, die überarbeitet wurde.}}

Schauen Sie hierzu bitte bei Bedarf in das Kapitel [[Statistik_mit_ASDPC-Technik#Updaten_von_ASDPC|Updaten von ASDPC]].

Sofern Sie SchILD NRW nutzen, führen Sie auch hier bitte das Update aus, da beide Programme zusammen für die Statistik genutzt werden können. Eventuell kann es sinnvoll sein, auch andere Schulverwaltungsprogramme zu updaten.

[[File:SchILD Update.png|x200px]]

Sofern es eine aktuellere Version von SchILD gibt, wird diese nun heruntergeladen und installiert.

====Export aus SchILD NRW und anderen Schulverwaltungsprogrammen====

{{Hinweis|Bereinigen Sie so viele Fehler wie möglich in ihren Verwaltungsprogrammen ''vor'' dem Datenexport, damit diese Fehler in einem Arbeitsgang auch zukünftig bereinigt sind. Es empfiehlt sich, diese Bereinigung routinemäßig und vor der Statistik durchzuführen. Ein möglicher Zeitpunkt wäre, einige Wochen nach Schuljahresbeginn wenn Neuaufnahmen, Klassen- und Kurswechsel usw. abgeschlossen sind, auf Statistikfehler zu prüfen.}}

[[File:SchILD Gesamtprüfung.png|500px]]

SchILD findet nicht alle Fehler die ASDPC erzeugen könnte, jedoch lassen sich viele Fehleinträge in den Statisikfeldern - per Standard in SchILD sind diese grün eingefärbt - schon im Vorfeld finden. Wurde eine Gesamtprüfung durchgeführt, lassen sich die Fehler über "Schulverwaltung" ➥ "Statistik/amtliche Schuldaten" ➥ "Fehlerprotokol" anzeigen.

Führen Sie nach Abschluss dieser Arbeiten den Export in die in ASDPC einzulesenden Dateien durch.

[[File:SchILD Export.png|500px]]

Je nach Schulform und wie Sie arbeiten, könnte es sinnvoll sein, unterschiedliche Dateien zu erzeugen:
* SIM.TXT - Enthält die Schülerdaten.
* LEHRER.TXT - Enthält die Lehrerdaten und Daten zum zeitlichen Einsatz, soweit sie in SchILD gepflegt werden. 
* UVD.TXT - Enthält die Daten zur Unterrichtsverteilung.
* ABI.TXT - Daten zum eventuellen Abitur.

{{Hinweis|Bei den Daten zu Lehrkräften und der Unterrichtsverteilung kann ein weiteres, externes Programm zur Unterrichtsplanung und Verwaltung der Lehrkräfte verwendet werden, so dass diese Daten nicht zusätzlich in SchILD eingepflegt werden (z.B. Untis usw.); auch aus diesen lässt sich in der Regel exportieren.
In kleinen Systemen, z.B. Grund- oder Förderschulen, wird die UVD eventuell an einer Magnettafel erstellt. Auch in einem solchen Fall kann es sinnvoller sein, diese direkt in ASDPC einzugeben und nicht in SchILD zu pflegen.}}

{{Wichtig|Werden SchILD und ASDPC in einer Netzwerkumgebung eingesetzt, ist darauf zu achten, welche .dlls bzw. .mds (etwa die SCHULVER.mdb) mit den aktuellen Daten registriert sind und wo diese gespeichert sind, damit SchILD und ASDPC immer die gleichen, aktuellen Grundlagen nutzen! Konsultieren Sie in diesem Fall bitte die entsprechenden Dokumentationen von SchILD und ASDPC!}}

====Sammeln der Ressourcen====

Laden Sie sich nun die jeweils auf das aktuelle Jahr der Statistik angepasste Material herunter:
# Die aktuelle [https://schulverwaltungsprogramme.msb.nrw.de/schulen/ASDPC32%20To%20Do-Liste.pdf ToDo-Liste], die von IT.NRW gepflegt wird. Entlang dieser kann der Arbeitsstand verfolgt werden.
# Die aktuellen [https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D90 Eintragungshilfen nach Schulform Eintragungshilfen (Lang) nach Schulform]. Änderungen zum letzten Jahr sind in Gelb deutlich hervorgehoben (Streichungen bzw. Neuerungen).
# Die aktuellen [https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D89 Schlüsseltabellen nach Schulform]. In ihnen werden die von ASDPC genutzten Kurzschlüssel erläutert; es finden sich auch hier Hinweise und in Gelb hervorgehobene Änderungen zum Vorjahr.

{{Hinweis|Die Eintragungshilfen und Schlüsseltabellen für Ihre Schulform können auch direkt aus ASDPC aufgerufen und somit ohne Suchen im Browser angezeigt werden. Wählen Sie hierzu "Hilfe" ➥ "Eintragungshilfen/Schlüsseltabellen" in ASDPC an.}}

Prüfen Sie nun in Ihren Schulverwaltungsprogrammen, SchILD NRW, Untis usw., wenn von dort die Lehrerdaten/Unterrichtsverteilung exportiert werden sollen, ob Ihre Daten so fehlerfrei wie möglich sind.

SchILD NRW bietet eine Gesamtprüfung der Daten an, die schon viele Eintragungsfehler im Vorfeld findet.

{{Hinweis|Nun ist alles bereit! ✅}}

[[Statistik_mit_ASDPC|Zurück zur Hauptseite]]
```
