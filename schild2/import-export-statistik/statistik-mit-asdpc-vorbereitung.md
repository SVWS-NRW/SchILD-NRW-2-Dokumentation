---
title: "Statistik mit ASDPC Vorbereitung"
wiki_title: "Statistik mit ASDPC Vorbereitung"
wiki_page_id: 1342
wiki_revision: 5308
---

# Statistik mit ASDPC Vorbereitung

<a id="Vorbereitung_der_Statistik"></a>

## Vorbereitung der Statistik

<a id="Sammeln_der_notwendigen_Ressourcen_und_Updates"></a>

### Sammeln der notwendigen Ressourcen und Updates

:::danger
Wurde ASDPC schon in den letzten Jahren genutzt oder wurde nicht direkt vor Beginn der Statisik die aktuellste Version installiert, sind direkt vor jeder Statistik das Hauptprogramm und die verwendeten Daten zu updaten.\
Auch in der laufenden Statistik kann es vorkommen, dass eine neue Version bereitgestellt wird, die überarbeitet wurde.
:::

Schauen Sie hierzu bitte bei Bedarf in das Kapitel [Updaten von ASDPC](/schild2/import-export-statistik/statistik-mit-asdpc-technik#Updaten_von_ASDPC).

Sofern Sie SchILD NRW nutzen, führen Sie auch hier bitte das Update aus, da beide Programme zusammen für die Statistik genutzt werden können. Eventuell kann es sinnvoll sein, auch andere Schulverwaltungsprogramme zu updaten.

![SchILD_Update](/bilder/wiki/schild-update-ba525f0f.png)

Sofern es eine aktuellere Version von SchILD gibt, wird diese nun heruntergeladen und installiert.

<a id="Export_aus_SchILD_NRW_und_anderen_Schulverwaltungsprogrammen"></a>

#### Export aus SchILD NRW und anderen Schulverwaltungsprogrammen

:::info
Bereinigen Sie so viele Fehler wie möglich in ihren Verwaltungsprogrammen *vor* dem Datenexport, damit diese Fehler in einem Arbeitsgang auch zukünftig bereinigt sind. Es empfiehlt sich, diese Bereinigung routinemäßig und vor der Statistik durchzuführen. Ein möglicher Zeitpunkt wäre, einige Wochen nach Schuljahresbeginn wenn Neuaufnahmen, Klassen- und Kurswechsel usw. abgeschlossen sind, auf Statistikfehler zu prüfen.
:::

![SchILD_Gesamtprüfung](/bilder/wiki/schild-gesamtpruefung-4c0cde75.png)

SchILD findet nicht alle Fehler die ASDPC erzeugen könnte, jedoch lassen sich viele Fehleinträge in den Statisikfeldern - per Standard in SchILD sind diese grün eingefärbt - schon im Vorfeld finden. Wurde eine Gesamtprüfung durchgeführt, lassen sich die Fehler über "Schulverwaltung" ➥ "Statistik/amtliche Schuldaten" ➥ "Fehlerprotokol" anzeigen.

Führen Sie nach Abschluss dieser Arbeiten den Export in die in ASDPC einzulesenden Dateien durch.

![SchILD_Export](/bilder/wiki/schild-export-999a5812.png)

Je nach Schulform und wie Sie arbeiten, könnte es sinnvoll sein, unterschiedliche Dateien zu erzeugen:

- SIM.TXT - Enthält die Schülerdaten.
- LEHRER.TXT - Enthält die Lehrerdaten und Daten zum zeitlichen Einsatz, soweit sie in SchILD gepflegt werden.
- UVD.TXT - Enthält die Daten zur Unterrichtsverteilung.
- ABI.TXT - Daten zum eventuellen Abitur.

:::info
Bei den Daten zu Lehrkräften und der Unterrichtsverteilung kann ein weiteres, externes Programm zur Unterrichtsplanung und Verwaltung der Lehrkräfte verwendet werden, so dass diese Daten nicht zusätzlich in SchILD eingepflegt werden (z.B. Untis usw.); auch aus diesen lässt sich in der Regel exportieren. In kleinen Systemen, z.B. Grund- oder Förderschulen, wird die UVD eventuell an einer Magnettafel erstellt. Auch in einem solchen Fall kann es sinnvoller sein, diese direkt in ASDPC einzugeben und nicht in SchILD zu pflegen.
:::

:::warning
Werden SchILD und ASDPC in einer Netzwerkumgebung eingesetzt, ist darauf zu achten, welche .dlls bzw. .mds (etwa die SCHULVER.mdb) mit den aktuellen Daten registriert sind und wo diese gespeichert sind, damit SchILD und ASDPC immer die gleichen, aktuellen Grundlagen nutzen! Konsultieren Sie in diesem Fall bitte die entsprechenden Dokumentationen von SchILD und ASDPC!
:::

<a id="Sammeln_der_Ressourcen"></a>

#### Sammeln der Ressourcen

Laden Sie sich nun die jeweils auf das aktuelle Jahr der Statistik angepasste Material herunter:

1.  Die aktuelle [ToDo-Liste](/quellen/fehlende-downloads#asdpc32-to-do-liste-pdf), die von IT.NRW gepflegt wird. Entlang dieser kann der Arbeitsstand verfolgt werden.
2.  Die aktuellen [Eintragungshilfen nach Schulform Eintragungshilfen (Lang) nach Schulform](https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D90). Änderungen zum letzten Jahr sind in Gelb deutlich hervorgehoben (Streichungen bzw. Neuerungen).
3.  Die aktuellen [Schlüsseltabellen nach Schulform](https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D89). In ihnen werden die von ASDPC genutzten Kurzschlüssel erläutert; es finden sich auch hier Hinweise und in Gelb hervorgehobene Änderungen zum Vorjahr.

:::info
Die Eintragungshilfen und Schlüsseltabellen für Ihre Schulform können auch direkt aus ASDPC aufgerufen und somit ohne Suchen im Browser angezeigt werden. Wählen Sie hierzu "Hilfe" ➥ "Eintragungshilfen/Schlüsseltabellen" in ASDPC an.
:::

Prüfen Sie nun in Ihren Schulverwaltungsprogrammen, SchILD NRW, Untis usw., wenn von dort die Lehrerdaten/Unterrichtsverteilung exportiert werden sollen, ob Ihre Daten so fehlerfrei wie möglich sind.

SchILD NRW bietet eine Gesamtprüfung der Daten an, die schon viele Eintragungsfehler im Vorfeld findet.

:::info
Nun ist alles bereit! ✅
:::


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1342) · [Statistik mit ASDPC Vorbereitung – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC+Vorbereitung&oldid=5308)
