---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: KM2 - Parameter - Administration"
---

# KM2 - Parameter - Administration

Gesicherte Wiki-Seite · Namensraum 0 · Version 2983 · Stand 2015-04-16.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/km2-parameter-administration) · [Originaldaten herunterladen](/dateien/quellen/seite-572.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
[[Bild:Km2_parameter_admin.png|right|300px]]
Die Einstellungen für den Administrator gliedern sich in zwei Bereiche:

* die Festlegung der Parameter für den '''Datenzugriff auf „SchILD-NRW"''' (Punkte '''<span style="background-color:yellow">(1)</span>''' bis '''<span style="background-color:yellow">(5)</span>''' und
* die Festlegung des Admin-Passwortes (Punkt '''<span style="background-color:yellow">(6)</span>''')

==Datenzugriff==
* '''<span style="background-color:yellow">(1)</span>''': Der Zugriff auf SchILD kann mit Hilfe einer UDL-Datei erfolgen ('''[http://msdn.microsoft.com/de-de/library/aa301691%28v=vs.71%29.aspx UDL]'''= '''U'''niversal '''D'''ata '''L'''ink):<br>Wenn das Programm SchILD selbst mit Hilfe einer UDL-Datei auf seine Datenbank zugreift, so können Sie diese Konfigurationsdatei auch für das Programm KM2 benutzen. Wählen Sie die entsprechende UDL-Datei mit Hilfe von '''<span style="background-color:yellow">(3)</span>''' aus.<br>'''Hinweis''': Die UDL –Dateien für den Start von SchILD befinden sich im UDL-Ordner (z.B. c:\Program Files (x86)\SchILD-NRW\UDL\).
* '''<span style="background-color:yellow">(2)</span>''': Sollten sich Ihre SchILD-Daten in einer MDB-Datei befinden (Microsoft-Access-Format), was der Standardinstallation entspricht (z.B. c:\Program Files (x86)\SchILD-NRW\DB\SchILD2000n.mdb), so können Sie mit Hilfe von '''<span style="background-color:yellow">(3)</span>''' die MDB-Datei direkt auswählen.
* '''<span style="background-color:yellow">(4)</span>''': Wenn sich Ihre SchILD-Daten nicht in einer MDB-Datei befinden, sondern z.B. in einer SQL-Datenbank, so müssen Sie ggf. den Benutzernamen und das zugehörige Passwort hinterlegen, damit KM2 auf die Daten zugreifen kann. <br> '''Hinweis''': Der von SchILD-NRW implementierte Mechanismus (Erzeugen einer zusätzlichen Datei, in der die Zugangsdaten verschlüsselt abgespeichert sind) wird von KM2 nicht unterstützt. Die Zugangsdaten werden in einer Konfigurationsdatei zusammen mit anderen sensiblen Daten gespeichert, die entsprechend verschlüsselt wird.
* '''<span style="background-color:yellow">(5)</span>''': Mit der Schaltfläche "Verbindung testen" versucht das Programm auf der Basis der eingegebenen Parameter die SchILD-Datenbank zu öffnen. Ist dieser Vorgang erfolgreich, wird eine entsprechende Meldung angezeigt, und es werden zusätzlich einige Daten eingelesen, wie zum Beispiel die Liste der SchILD-Unterrichtsfächer.
[[Bild:Km2_verbindung_testen.png|right|300px]]
*'''<span style="background-color:yellow">(6)</span>''': KM2 verwaltet den Benutzer "Administrator":
:* Benutzername: "Administrator"
:* Login-Name: "Admin"
:* Startpasswort "schild"

siehe auch [[Benutzerverwaltung]]

[[Kategorie:Konferenzmodul KM2]]
```
