---
title: "Externes Notenmodul unter Ubuntu einrichten"
---

<a id="einrichtung-des-enm-moduls-unter-ubuntu-18-04"></a>

# Externes Notenmodul unter Ubuntu einrichten

Das Externe Notenmodul kann auch unter Ubuntu ausgeführt werden.

Starten Sie zur Einrichtung ein Terminal.

Geben Sie dort folgende Befehle ein.

` Sudo apt get update `

`Sudo apt get install wine `

`Sudo apt get install winwtricks`

Laden Sie sich das ZIP-Paket von der Homepage herunter: <https://www.svws.nrw.de/download/schild-module>

Entpacken Sie das Paket in den wine-Ordner: Hier im Beispiel \$HOME/.wine/drive_c/Schild-NRW/ENM/

Starten Sie das Notenmodul mit dem Befehl:

`wine $HOME/.wine/drive_c/SchILD-NRW/ENM/ENM.exe`

![ENM_wine](/bilder/administration/installation/enm-wine.jpg)

---

Quelle: [Einrichtung des ENM-Moduls unter Ubuntu 18.04 – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Einrichtung+des+ENM-Moduls+unter+Ubuntu+18.04&oldid=4609)
