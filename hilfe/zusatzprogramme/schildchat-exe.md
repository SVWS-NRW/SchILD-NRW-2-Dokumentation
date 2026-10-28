---
title: "SchildChat.exe"
---

# SchildChat.exe

Das Chatmodul SchildChat.exe wird ab der Schild-NRW-Version 2.0.14.2 unterstützt. Das Programm wird in den kommenden Versionen mit dem Update-Setup ausgeliefert und liegt im Programmverzeichnis von Schild-NRW.

Beim ersten Aufruf des Chatmoduls wird im Installationsverzeichnis von Schild-NRW der Ordner Chat angelegt. Bei fehlenden Schreibrechten in einer Netzwerkumgebung muss dieser Ordner dann händisch angelegt werden. Dieser Ordner benötigt aber dann Lese-/Schreibberechtigung für alle Schild-NRW-User auf Windows-Ebene, da dort eine Konfigurationsdatei für den Chat-Server gespeichert wird.

Das Programm kann nur von Usern mit Administror-Rechten in Schild-NRW gestartet werden. Ist das Modul unter den **[Programm-Einstellungen](/administration/benutzer-einstellungen/programm-einstellungen)** aktiviert, so kann es unter **[Extras](/administration/benutzer-einstellungen/extras)** \> Chatprogramm starten aufgerufen werden.

![Chat starten](/bilder/tools/weitere/chat-starten.jpg)

Auf dem Schild-NRW-Admin-Rechner startet das Modul dann mit folgendem Fenster:

![Chatmodul01](/bilder/tools/weitere/chatmodul01.jpg)

<a id="Reiter_Client"></a>

## Reiter **Client**

------------------------------------------------------------------------

Dies ist das eigentliche Chatfenster, es können Nachrichten gesendet (auch vom Client aus, also einem "normalen" Schild-NRW-Benutzer). Dies kann z.B. dazu genutzt werden, wenn der Admin ein Update ankündigt, eine Nachricht zu senden, wenn das Herunterfahren noch verschoben werden soll.

<a id="Reiter_Admin"></a>

## Reiter **Admin**

------------------------------------------------------------------------

![Chatmodul02](/bilder/tools/weitere/chatmodul02.jpg)

Auf dem Admin-Reiter kann der Chatserver gestartet werden! Bitte beachten Sie, dass alle Clients erst nach Ablauf des eingestellten Zeitintervalls zur Verfügung stehen.

Im unteren Grid kann der Administrator sehen, welche Clients in Schild-NRW angemeldet sind, und kann diese einzeln beenden.

:::danger
Bei Betätigung des Buttons wird Schild-NRW am Client **sofort** und ohne weitere Vorwarnung beendet!
:::

<a id="Reiter_Status"></a>

## Reiter **Status**

------------------------------------------------------------------------

![Chatmodul03](/bilder/tools/weitere/chatmodul03.jpg)

Im Statusfenster können einige Meldungen gesehen werden, z.B. über das Starten und Beenden des Servers und welche Clients sich am System angemeldet haben.

Außerdem steht eine Nachrichtenhistorie für die jeweilige Sitzung zur Verfügung.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-974) · [SchildChat.exe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchildChat.exe&oldid=3752)
