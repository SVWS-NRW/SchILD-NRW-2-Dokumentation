---
title: "UDL-Dateien unter 64-BIT"
wiki_title: "UDL-Dateien unter 64-BIT"
wiki_page_id: 1019
wiki_revision: 3933
---

# UDL-Dateien unter 64-BIT

:::warning
Das Hinzufügen von Registryeinträgen geschieht auf eigene Gefahr!\

Diese Schritte sind auch nur sinnvoll, wenn Sie oft mit wechselnden UDL-Dateien zu tun haben.
:::

Seit Windows 7 in der 64Bit-Variante erschienen ist, haben wir als Schild-NRW-User mit Access-Datenbanken das Problem, das der 32Bit-Microsoft-Jet-Treiber nicht mehr in der Liste der Datenbankprovider angezeigt wird, da dort nur noch die 64Bit-Treibe aufgeführt werden.

Bei der Erstellung von UDLs erweist sich das als besonders lästig, weil diese jetzt als Text-Datei angelegt werden müssen und dann auch noch als „unicode“ abgespeichert werden müssen und zu guter letzt muss auch noch die Dateiendung von „txt“ auf „udl“ geändert werden.

Aber dafür gibt es jetzt eine Lösung: Per Registry kann man einen Kontextmenü-Eintrag erzeugen, der Zugriff auf die 32-bit Treiberliste ermöglicht. Dazu importieren Sie einfach die verlinkte Registry-Datei. Danach sehen Sie bei Rechtsklick auf eine UDL-Datei einen neuen Menüeintrag Open32. Dort kann dann wieder ganz normal die Datenbank und der Provider ausgewählt werden!

Download: [Udlfile_open32_reg.zip](https://www.svws.nrw.de/mediawiki/images/0/00/Udlfile_open32_reg.zip)

------------------------------------------------------------------------

------------------------------------------------------------------------

---

Quelle: [UDL-Dateien unter 64-BIT – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=UDL-Dateien+unter+64-BIT&oldid=3933) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=UDL-Dateien+unter+64-BIT&action=history)
