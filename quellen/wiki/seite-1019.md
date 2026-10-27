---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: UDL-Dateien unter 64-BIT"
---

# UDL-Dateien unter 64-BIT

Gesicherte Wiki-Seite · Namensraum 0 · Version 3933 · Stand 2016-11-07.

[Lesbaren Artikel öffnen](/administration/installation/udl-dateien-unter-64-bit) · [Originaldaten herunterladen](/dateien/quellen/seite-1019.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{{Wichtig| Das Hinzufügen von Registryeinträgen geschieht auf eigene Gefahr!
Diese Schritte sind auch nur sinnvoll, wenn Sie oft mit wechselnden UDL-Dateien zu tun haben.}}

Seit Windows 7 in der 64Bit-Variante erschienen ist, haben wir als Schild-NRW-User mit Access-Datenbanken das Problem, das der 32Bit-Microsoft-Jet-Treiber nicht mehr in der Liste der Datenbankprovider angezeigt wird, da dort nur noch die 64Bit-Treibe aufgeführt werden.

Bei der Erstellung von UDLs erweist sich das als besonders lästig, weil diese jetzt als Text-Datei angelegt werden müssen und dann auch noch als „unicode“ abgespeichert werden müssen und zu guter letzt muss auch noch die Dateiendung von „txt“ auf „udl“ geändert werden.

Aber dafür gibt es jetzt eine Lösung:
Per Registry kann man einen Kontextmenü-Eintrag erzeugen, der Zugriff auf die 32-bit Treiberliste ermöglicht. Dazu importieren Sie einfach die verlinkte Registry-Datei. Danach sehen Sie bei Rechtsklick auf eine UDL-Datei einen neuen Menüeintrag Open32.
Dort kann dann wieder ganz normal die Datenbank und der Provider ausgewählt werden!

Download:   [https://www.svws.nrw.de/mediawiki/images/0/00/Udlfile_open32_reg.zip Udlfile_open32_reg.zip]

----
----
[[Schild-NRW Wiki:Aktuelle Ereignisse|Zurück zu Aktuelle Ereignisse]]
```
