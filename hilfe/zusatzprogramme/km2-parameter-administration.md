---
title: "KM2 - Parameter - Administration"
wiki_title: "KM2 - Parameter - Administration"
wiki_page_id: 572
wiki_revision: 2983
---

# KM2 - Parameter - Administration

![Km2_parameter_admin](/bilder/wiki/km2-parameter-admin-94dfe50a.png)

Die Einstellungen für den Administrator gliedern sich in zwei Bereiche:

- die Festlegung der Parameter für den **Datenzugriff auf „SchILD-NRW"** (Punkte **(1)** bis **(5)** und
- die Festlegung des Admin-Passwortes (Punkt **(6)**)

<a id="Datenzugriff"></a>

## Datenzugriff

- **(1)**: Der Zugriff auf SchILD kann mit Hilfe einer UDL-Datei erfolgen (**[UDL](http://msdn.microsoft.com/de-de/library/aa301691%28v=vs.71%29.aspx)**= **U**niversal **D**ata **L**ink):\
  Wenn das Programm SchILD selbst mit Hilfe einer UDL-Datei auf seine Datenbank zugreift, so können Sie diese Konfigurationsdatei auch für das Programm KM2 benutzen. Wählen Sie die entsprechende UDL-Datei mit Hilfe von **(3)** aus.\
  **Hinweis**: Die UDL –Dateien für den Start von SchILD befinden sich im UDL-Ordner (z.B. c:\Program Files (x86)\SchILD-NRW\UDL\\).
- **(2)**: Sollten sich Ihre SchILD-Daten in einer MDB-Datei befinden (Microsoft-Access-Format), was der Standardinstallation entspricht (z.B. c:\Program Files (x86)\SchILD-NRW\DB\SchILD2000n.mdb), so können Sie mit Hilfe von **(3)** die MDB-Datei direkt auswählen.
- **(4)**: Wenn sich Ihre SchILD-Daten nicht in einer MDB-Datei befinden, sondern z.B. in einer SQL-Datenbank, so müssen Sie ggf. den Benutzernamen und das zugehörige Passwort hinterlegen, damit KM2 auf die Daten zugreifen kann.\
  **Hinweis**: Der von SchILD-NRW implementierte Mechanismus (Erzeugen einer zusätzlichen Datei, in der die Zugangsdaten verschlüsselt abgespeichert sind) wird von KM2 nicht unterstützt. Die Zugangsdaten werden in einer Konfigurationsdatei zusammen mit anderen sensiblen Daten gespeichert, die entsprechend verschlüsselt wird.
- **(5)**: Mit der Schaltfläche "Verbindung testen" versucht das Programm auf der Basis der eingegebenen Parameter die SchILD-Datenbank zu öffnen. Ist dieser Vorgang erfolgreich, wird eine entsprechende Meldung angezeigt, und es werden zusätzlich einige Daten eingelesen, wie zum Beispiel die Liste der SchILD-Unterrichtsfächer.

![Km2_verbindung_testen](/bilder/wiki/km2-verbindung-testen-e00595dc.png)

- **(6)**: KM2 verwaltet den Benutzer "Administrator":

<!-- -->

- Benutzername: "Administrator"
- Login-Name: "Admin"
- Startpasswort "schild"

siehe auch [Benutzerverwaltung](/administration/benutzer-einstellungen/benutzerverwaltung)

---

Quelle: [KM2 - Parameter - Administration – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=KM2+-+Parameter+-+Administration&oldid=2983) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=KM2+-+Parameter+-+Administration&action=history)
