---
title: "Statistik mit ASDPC-Schluesselmanagement"
---

# Statistik mit ASDPC-Schluesselmanagement

<a id="Allgemeine_Informationen"></a>

## Allgemeine Informationen

Die einzulesenden Vorgabedaten sowie die abzugebende Statistik sind mit einem asynchronen Schlüsselverfahren verschlüsselt. Hierzu müssen Sie zwei Schlüsseldateien besitzen:

1.  einen **öffentlichen** Schlüssel, mit dem Dateien **ver**schlüsselt werden können.
2.  den **privaten** Schlüssel, mit dem Sie verschlüsselte Dateien **ent**schlüsseln können.

Beide Schlüsseldateien haben das folgende Format:

SXXXXXX_JJJJMMTT_SSMMSS.xxx

Wobei "SXXXXXX" Ihre Schulnummer ist, "JJJJMMTT_SSMMSS" ist das Datum mit Uhrzeit, wann der Schlüssel erstellt wurde. Die Endung .xxx ist ".pub" für den öffentlichen Schlüssel ("public") und ".sec" für den privaten Schlüssel ("secure"). Zum Beispiel wäre ein öffentlicher Schlüssel S123456_20200102_122344.pub von der Schule "123456" am 02.01.2020 um 12:23:44 erstellt worden.

- Senden Sie immer Ihren aktuellsten öffentlichen Schlüssel (.pub) als E-Mail-Anhang an schluessel\[PUNKT\]schule\[AT\]it.nrw.de.
- Halten Sie Ihren privaten Schlüssel (.sec) geheim und geben Sie ihn nicht weiter! Schicken Sie ihn *nicht* an IT.NRW.

![Schaubild_Schluessel](/bilder/schild2/import-export-statistik/schaubild-schluessel.png)

Der öffentliche Schlüssel wird standardmäßig im Verzeichnis \ASDPC32\ASD\SCHLUESSEL gespeichert, haben Sie ASDPC in C:\Programme installiert, wären die Schlüssel somit bei C:\Programme\ASDPC32\ASD\SCHLUESSEL zu finden.

:::info
Es empfiehlt sich, das Schlüsselpaar separat z.B. auf einer externen Sicherungsfestplatte oder einem beschrifteten USB-Stick zu speichern und sicher, etwa im Tresor, zu lagern.
:::

<a id="Neu_Erzeugen,_Einlesen_und_Sichern_von_existierenden_Schlüsseln"></a>
<a id="Neu_Erzeugen.2C_Einlesen_und_Sichern_von_existierenden_Schl.C3.BCsseln"></a>

## Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln

Starten Sie ASDPC nach einer Erst- oder Neuinstallation, werden Sie auf das Fehlen von Schlüsseln hingewiesen:

![ASDPCSchluesselerstellung](/bilder/schild2/import-export-statistik/asdpcschluesselerstellung.jpg)

Es gibt hier zwei Möglichkeiten:

1.  Lesen Sie ein existierendes Schlüsselpaar von ihrem Rechner oder anderen Datenträger ein.
2.  Erstellen Sie ein neues Schlüsselpaar.

:::warning
Wenn Sie ein neues Schlüsselpaar erstellen, sind eventuell vorhandene alte Schlüsseldateien nicht mehr gültig! Sollten Sie schon Schlüssel haben, klicken Sie hier auf "Nein".
:::

Um die Schlüsselverwaltung zu erreichen

- starten Sie ASDPC
- Dann starten Sie die Haupterhebung über das Menü "Anwendung starten" ➥ "Erhebung Amtliche Schuldaten (ASDPC)"

![ASDPCErhebungStarten](/bilder/schild2/import-export-statistik/asdpcerhebungstarten.jpg)

- Wählen Sie nun den Menüpunkt "Extras" und dann "Schlüsselverwaltung" an
- Hier haben Sie nun die Option, Schlüssel zu
  - "Erzeugen",
  - "Schlüssel speichern" (nach C:\Programme\ASDPC32\ASD\SCHLUESSEL) oder
  - "gespeicherte Schlüssel einlesen"

Um einen Schlüssel zu erzeugen, benötigen Sie die ASD-Signatur Ihrer Schule. Diese ist im geschützten Bereich des [Bildungsportals](http://www.schulministerium.nrw.de/BiPo/SVW) abzurufen.

![ASDPCSchluesseASDSIg](/bilder/schild2/import-export-statistik/asdpcschluesseasdsig.jpg)

Haben Sie einen Schlüssel erzeugt, werden Sie aufgefordert, diesen über schluessel\[PUNKT\]schule\[AT\]it.nrw.de an IT.NRW zu senden. Bitte denken Sie daran, nur den öffentlichen (.pub) und niemals den privaten Schlüssel (.sec) zu versenden.

![ASDPCSchluesselversendung](/bilder/schild2/import-export-statistik/asdpcschluesselversendung.jpg)

Hier im Beispiel geht hervor, dass diese Schlüssel am 09.09.2021 um 10:55:53 erzeugt wurden.

:::info
Über "Extras" in der aktuellen Haupterhebung haben Sie auch in einem laufenden Schuljahr Zugriff auf die Funktion "dienstliche Dokumente bzw. Dateien entschlüsseln". Diese Funktion hat mit der amtlichen Schulstatistik nichts zu tun, sondern wird genutzt, um der Schule Dateien über den gesicherten Bereich des Bildungsportals zukommen zu lassen. In einem solchen Fall werden Sie per Email über das Vorliegen solcher Dateien informiert.
:::

<a id="Mögliche_Fehler_bei_Ver-_und_Entschlüsselung"></a>
<a id="M.C3.B6gliche_Fehler_bei_Ver-_und_Entschl.C3.BCsselung"></a>

## Mögliche Fehler bei Ver- und Entschlüsselung

1.  Aus Sicht von IT.NRW ist der aktuellste Schlüssel immer der zuletzt zugeschickte. Wurde Ihr aktueller öffentlicher Schlüssel (".pub") IT.NRW korrekt zugeschickt? Im Dateinamen der heruntergeladenen Vorgabedaten ist der Zeitpunkt codiert, wann Ihr Schlüssel erstellt wurde, hier können Sie also überprüfen, ob IT.NRW über die gleichen Schlüssel verfügt wie Ihre Schule. Die Vorgabedaten könnten im Dateinamen etwa eine solche Folge behinhalten: "\_20210603_091136" - damit geht hervor, dass IT.NRW einen Schlüssel vom 03.06.2021 09:11:36 vorliegen hatte.
2.  Lädt man Dateien, z.B. Vorgabedaten, mehrfach herunter, fügt Windows automatisch eine Nummerierung an. Datei.jpg wird nach einem zweiten und dritten Herunterladen somit zu "Datei.jpg", "Datei (1).jpg" und "Datei (2).jpg". Die Zahlen, Klammern und das Leerzeichen müssen somit entfernt werden, bevor die Datei korrekt entschlüsselt werden kann.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1335) · [Statistik mit ASDPC-Schluesselmanagement – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Statistik+mit+ASDPC-Schluesselmanagement&oldid=5292)
