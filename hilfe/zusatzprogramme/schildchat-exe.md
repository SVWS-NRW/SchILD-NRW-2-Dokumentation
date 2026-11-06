---
title: "Nachrichten mit SchILDChat austauschen"
---

# Nachrichten mit SchILDChat austauschen

Das Chatmodul SchildChat.exe wird ab der SchILD-NRW 2-Version 2.0.14.2 unterstützt. Das Programm wird in den kommenden Versionen mit dem Update-Setup ausgeliefert und liegt im Programmverzeichnis von SchILD-NRW 2.

Beim ersten Aufruf des Chatmoduls wird im Installationsverzeichnis von SchILD-NRW 2 der Ordner Chat angelegt. Bei fehlenden Schreibrechten in einer Netzwerkumgebung muss dieser Ordner dann händisch angelegt werden. Dieser Ordner benötigt aber dann Lese-/Schreibberechtigung für alle SchILD-NRW 2-Benutzer auf Windows-Ebene, da dort eine Konfigurationsdatei für den Chat-Server gespeichert wird.

Das Programm kann nur von Benutzern mit Administror-Rechten in SchILD-NRW 2 gestartet werden. Ist das Modul unter den **[Programmeinstellungen](/administration/benutzer-einstellungen/programm-einstellungen)** aktiviert, so kann es unter **[Menü Extras](/administration/benutzer-einstellungen/extras)** \> Chatprogramm starten aufgerufen werden.

![Chat starten](/bilder/tools/weitere/chat-starten.jpg)

Auf dem SchILD-NRW 2-Admin-Rechner startet das Modul dann mit folgendem Fenster:

![Chatmodul01](/bilder/tools/weitere/chatmodul01.jpg)

## Reiter **Client**

Dies ist das eigentliche Chatfenster, es können Nachrichten gesendet (auch vom Client aus, also einem "normalen" SchILD-NRW 2-Benutzer). Dies kann zum Beispiel dazu genutzt werden, wenn der Admin ein Update ankündigt, eine Nachricht zu senden, wenn das Herunterfahren noch verschoben werden soll.

## Reiter **Admin**

![Chatmodul02](/bilder/tools/weitere/chatmodul02.jpg)

Auf dem Admin-Reiter kann der Chatserver gestartet werden! Bitte beachten Sie, dass alle Clients erst nach Ablauf des eingestellten Zeitintervalls zur Verfügung stehen.

Im unteren Grid kann der Administrator sehen, welche Clients in SchILD-NRW 2 angemeldet sind, und kann diese einzeln beenden.

:::danger
Bei Betätigung des Buttons wird SchILD-NRW 2 am Client **sofort** und ohne weitere Vorwarnung beendet!
:::

## Reiter **Status**

![Chatmodul03](/bilder/tools/weitere/chatmodul03.jpg)

Im Statusfenster können einige Meldungen gesehen werden, zum Beispiel über das Starten und Beenden des Servers und welche Clients sich am System angemeldet haben.

Außerdem steht eine Nachrichtenhistorie für die jeweilige Sitzung zur Verfügung.

Quelle: [SchildChat.exe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=SchildChat.exe&oldid=3752)
