---
title: "Access-Probleme unter Windows Server 2012 beheben"
---

<a id="access-datenbanken-und-windows-server-2012"></a>

# Access-Probleme unter Windows Server 2012 beheben

Diese historische Anleitung behandelt mögliche Schäden an gemeinsam genutzten Access-Datenbanken unter älteren Windows-Systemen. Die beschriebenen Änderungen betreffen die Dateiübertragung im Netzwerk und gehören zur technischen Betreuung der Installation.

:::warning
Dieser Artikel ist ein Hinweis auf eine Fehlerursache, wenn Sie mit Windows2012-Server arbeiten und Probleme beim Betrieb einer Access-Datenbank haben.\
:::

Seit einiger Zeit gibt es wohl ein Problem mit defekten Schild-NRW Access Datenbanken , welches im Zusammenhang mit SMB2 / SMB3 und Windows 7/8/Vista stehen könnte. Die Problematik scheint erst relevant zu werden, wenn viele Benutzer auf die Datenbank zugreifen.

Beschrieben ist das Problem hier: „Moved to Server 2012 getting Access Database Corruption“:

<http://social.technet.microsoft.com/Forums/windowsserver/en-US/7336d31b-6c24-468a-9c47-750244ae3a8c/moved-to-server-2012-getting-access-database-corruption>

Für Server 2008R2 und SMB2 scheint es noch einen Fix zu geben (für Server 2012 und SMB3 bisher nicht):

<http://support.microsoft.com/kb/2618096/en-us>

Ansonsten hat bei unseren Tests nur geholfen, auf SMB1 zurückzuschalten. Bei Server2012 geht dies über die Powershell:

<http://support.microsoft.com/kb/2696547/en-us> Veröffentlicht unter Allgemein \| Kommentare deaktiviert für Access Datenbanken und Windows Server 2012

------------------------------------------------------------------------

---

Quelle: [Access-Datenbanken und Windows-Server 2012 – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Access-Datenbanken+und+Windows-Server+2012&oldid=3931)
