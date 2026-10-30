---
title: "UDL-Dateien auf 64-Bit-Systemen öffnen"
---

<a id="udl-dateien-unter-64-bit"></a>

# UDL-Dateien auf 64-Bit-Systemen öffnen

Eine UDL-Datei beschreibt die Verbindung zu einer Datenbank. Diese Anleitung erläutert einen technischen Lösungsweg für den Zugriff auf 32-Bit-Datenbanktreiber unter einem 64-Bit-Windows. Er ist nur nötig, wenn Sie solche Verbindungsdateien bearbeiten müssen.

:::warning
Das Hinzufügen von Registryeinträgen geschieht auf eigene Gefahr!\

Diese Schritte sind auch nur sinnvoll, wenn Sie oft mit wechselnden UDL-Dateien zu tun haben.
:::

Seit Windows 7 in der 64Bit-Variante erschienen ist, haben wir als Schild-NRW-Benutzer mit Access-Datenbanken das Problem, das der 32Bit-Microsoft-Jet-Treiber nicht mehr in der Liste der Datenbankprovider angezeigt wird, da dort nur noch die 64Bit-Treibe aufgeführt werden.

Bei der Erstellung von UDLs erweist sich das als besonders lästig, weil diese jetzt als Text-Datei angelegt werden müssen und dann auch noch als „unicode“ abgespeichert werden müssen und zu guter letzt muss auch noch die Dateiendung von „txt“ auf „udl“ geändert werden.

Aber dafür gibt es jetzt eine Lösung: Per Registry können Sie einen Kontextmenü-Eintrag erzeugen, der Zugriff auf die 32-bit Treiberliste ermöglicht. Dazu importieren Sie einfach die verlinkte Registry-Datei. Danach sehen Sie bei Rechtsklick auf eine UDL-Datei einen neuen Menüeintrag Open32. Dort kann dann wieder ganz normal die Datenbank und der Provider ausgewählt werden!

Download: [Udlfile_open32_reg.zip](/dateien/wiki/udlfile-open32-reg-cb5cf3a2.zip)

------------------------------------------------------------------------

------------------------------------------------------------------------

---

Quelle: [UDL-Dateien unter 64-BIT – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UDL-Dateien+unter+64-BIT&oldid=3933)
