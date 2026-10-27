---
title: "Benutzerverwaltung Useradmn.exe"
wiki_title: "Benutzerverwaltung Useradmn.exe"
wiki_page_id: 524
wiki_revision: 5740
---

# Benutzerverwaltung Useradmn.exe

Die externe Benutzerverwaltung

Die Benutzerverwaltung ist ein Programm außerhalb von SchILD. MMit diesem Programmbaustein werden für jeden SchILD-Anwender die jeweiligen Benutzerrechte ("Kompetenzen") festgelegt. Grundsätzlich sollte gelten: Ohne Benutzerkennung kein Datenbankzugang! Erst nach Einrichtung der Benutzerverwaltung sollte SchILD aufgerufen werden.

In Schild-NRW ruft man über das Menü **"Extras \>\> Benutzerverwaltung"** das Programm Benutzerverwaltung auf. Dies gelingt jedoch nur, wenn man die passenden Rechter zur Nutzung der Benutzerverwaltung hat (z.B. als Administrator). Das Programm kann auch gesondert gestartet werden, indem man im Hauptinstallationsverzeichnis von Schild-NRW die Datei "Useradm.exe" ausführt. In beiden Fällen muss man sich für den Zugriff nochmals als berechtigter Nutzer anmelden. Hierzu werden Benutzername und Passwort erfragt. Ein Aufruf ohne Kennwortschutz ist unzulässig.

![UserAdmn](/bilder/wiki/useradmn-2a9b6bee.png)

Die Benutzerverwaltung ist zu nutzen, um Benutzerberechtigungen und Benutzerkennwörter in die Datenbank zu übernehmen. Hier können auch neue Passwörter vergeben werden, wenn ein Nutzer seine Zugangsdaten vergessen hat.

Außer dem Administrator muss mindestens ein Benutzer mit Login-Name und Kennwort (und seinen „Kompetenzen“) angelegt sein, um den Vorgaben gerecht zu werden.

Für jeden SchILD-User werden nach Aktivierung des + Schalters Name (auch ausgeschrieben), Login-Name (Benutzername, bei Lehrern unbedingt das Lehrerkürzel) und ein zugehöriges Kennwort (bei „Kennwort ändern“) eingetragen. Der Benutzer ist zudem einer Benutzergruppe zuzuordnen, erst dann kann das Häkchen zur Bestätigung der Eingaben aktiviert werden. Die Änderung des Kennworts ist für den angemeldeten Benutzer in SchILD auch im Menü **"Extras \>\> Kennwort ändern"** möglich. Insbesondere wenn Lehrer gruppenweise über die **Schaltfläche "Alle Lehrkräfte Übernehmen"** in die Benutzerverwaltung importiert wurden, wobei als **Erstkennwort das Lehrerkürzel** genommen wird, sollten baldigst neue Kennwörter vergeben werden.

Die Rechte (Kompetenzen) der Benutzergruppen werden über die **Schaltfläche „Benutzergruppen bearbeiten“** durch Häkchen festgelegt. Die Rechte einer Benutzergruppe gelten für alle Mitglieder dieser Gruppe, jeder Benutzer bekommt aber sein eigenes Kennwort. In diesem Fenster kann auch eine neue Benutzergruppe hinter „Bezeichnung“ definiert werden. In der Benutzerverwaltung gibt es getrennte Berechtigungen für „Schülerdaten exportieren“ und „Lehrerdaten exportieren“ (nach dem Klick auf den Schalter „Benutzergruppen bearbeiten“ werden im gleichnamigen Fenster unter den „Kompetenzen“ bei Import/Export diese Rechte jeweils mit Häkchen aktiviert). Ebenso sollte abgewogen werden, ob Lehrer nur „Standard-Formulare drucken“ (unter Kompetenzen/Berichte) oder auch „Alle Formulare drucken“ dürfen.

Datenschutz sollte ernstgenommen werden. Es wäre unverantwortlich und auch nicht zulässig, wenn Lehrer und Schulsekretärin nur mit einem ENTER-Klick (admin ohne Benutzer-Kennwort) SchILD aufrufen könnten. Also erst alle Berechtigungen in der Benutzerverwaltung regeln!

![Benutzergruppen](/bilder/wiki/benutzergruppen-55ff3316.png)

Eine spezielle Funktion hat die **Schaltfläche "DB-Version zurücksetzen"**. Bei Updates werden in Schild-NRW oft neue Felder oder Tabellen angelegt. Kommt es nun genau zu diesem Zeitpunkt zu einen Stromausfall oder einem Netzwerkfehler, so kann es sein, dass die Schild-Datenbank beim nächsten Aufruf nicht startet, weil eines der neuen Felder nicht gefunden wird. Schild-NRW bricht dann den Startvorgang ab. Da man dann nicht mehr an der DB arbeiten kann, hat man auch keine Möglichkeit diese Felder von Schild-NRW anlegen zu lassen. Öffnen Sie in einem solchen Fall die externe Benutzerverwaltung und klicken Sie auf den Button "DB-Version zurücksetzen". Beim nächsten Start von Schild-NRW wird die Update-Routine dann erneut ausgeführt!

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-524) · [Benutzerverwaltung Useradmn.exe – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Benutzerverwaltung+Useradmn.exe&oldid=5740)
