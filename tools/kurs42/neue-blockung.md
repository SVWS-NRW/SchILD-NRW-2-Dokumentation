---
title: "Kurs42: Neue Blockung erstellen"
---

# Neue Blockung erstellen

Vor dem Anlegen einer Blockung müssen die benötigten Schülerdaten in SchILD-NRW 2 und die Fachwahlen in LuPO vorbereitet sein. Für die Erstellung aus der SchILD-NRW 2-Datenbank werden entsprechende Benutzerrechte benötigt.

## Blockungsdatei anlegen

1. Öffnen Sie **Datei → Neue Kursblockung** und wählen Sie die SchILD-NRW 2-Datenbank aus.
2. Übernehmen Sie die Verbindung und geben Sie bei Bedarf die benötigte Datenbankkennung ein.
3. Vergeben Sie eine eindeutige Blockungsbezeichnung und wählen Sie das **zu planende Halbjahr**.
4. Legen Sie die Schülergruppe fest, für die die Blockung erzeugt wird, und kontrollieren Sie die Prüfungsordnung.
5. Importieren Sie die Fachwahlen aus der passenden LuPO-Datei. Prüfen Sie dabei den gewählten Abschnitt.

Die Jahrgangs- und Jahresbeispiele des Handbuchs beziehen sich auf dessen Stand. Übernehmen Sie deren konkrete Jahreszahlen oder eine frühere G8-Klassenfolge nicht ungeprüft für Ihre eigene Planung.

## Kurse vorbereiten und blocken

Unter **Bearbeiten → Kurse einrichten** legen Sie die benötigte Kursanzahl pro Fach fest. Das Programm kann Vorschläge machen; diese müssen zur tatsächlichen Kursorganisation der Schule passen. Ohne diesen Schritt lässt sich nach der Anleitung keine Blockung aufbauen.

Unter **Bearbeiten → Kurse bearbeiten** ergänzen Sie bei Bedarf Lehrkräfte und Räume. Dafür müssen die zugehörigen Listen vorhanden sein. Kontrollieren Sie außerdem die Kursarten und Stundenangaben.

Die **Fachwahlmatrix** unter **Wahlen** hilft einzuschätzen, welche Kurse parallel gesetzt werden können. Anschließend können zunächst einzelne Kurse manuell platziert und weitere Zuordnungen durch die Blockungsverfahren ergänzt werden.

## Arbeitsstände sichern

Speichern Sie nach dem Import und nach wesentlichen Änderungen. Verwenden Sie für Varianten unterschiedliche Dateinamen, damit sich frühere Blockungsstände wieder öffnen lassen. Ein Fachwahlimport ist noch keine fertige Blockung: Nach Änderungen müssen gegebenenfalls noch nicht verteilte Schülerinnen und Schüler zugeordnet werden.

Quelle: [Handbuch SchILD-NRW 2–LuPO–Kurs42, 22. Auflage, Mai 2022](/dateien/pdf/handbuch-schild-lupo-kurs42-22.auflage.pdf), Kapitel 5, Seiten 42–74.

## Blockung nach Bedarf von Hand oder mit dem Solver bearbeiten

![Von Fachwahlen zur geprüften Blockung](/bilder/pdf-anleitungen/kurs42/blockung.svg)

Beim manuellen Blocken setzen Sie zunächst Kurse mit wenigen zulässigen Schienen. Prüfen Sie nach jeder Zuordnung, welche Fachwahlen dadurch nicht mehr erfüllt werden können. Fixieren Sie nur die Kurse oder Zuordnungen, die erhalten bleiben müssen. Jede zusätzliche Fixierung verkleinert den Lösungsraum.

Beim halbautomatischen Blocken geben Sie die vorbereiteten Schienen und Fixierungen vor und lassen Kurs42 die verbleibenden Zuordnungen berechnen. Vergleichen Sie mehrere Ergebnisse anhand der offenen Wahlen, der Größe paralleler Kurse und der verbleibenden Kollisionen. Wenn die Klassenverbände für bestimmte Fächer erhalten bleiben sollen, prüfen Sie zunächst die Klassenbezeichnungen der zukünftigen EF. Ordnen und fixieren Sie die entsprechenden Kurse vor dem Rechenlauf.

Wenn die vorhandenen Varianten keine brauchbare Lösung liefern, können Sie den CNF-Solver unter **Extras → Einstellungen → Allgemeines** aktivieren. Kontrollieren Sie beim Start insbesondere die übernommenen Fixierungen und die gewählten Grenzwerte. Übernehmen Sie ein geeignetes Ergebnis aus der Ergebnisansicht in das Blockungsfenster. Prüfen Sie anschließend die tatsächliche Schienenreihenfolge erneut, da die Ergebnisübernahme die vorgegebenen Schienennummern nicht unbedingt beibehält. [Kapitel 5.4 des Handbuchs](/dateien/pdf/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=52)

## Umwahlen, Kurslisten und Stundenraster

- Verwenden Sie nach abgeschlossener Blockung den **Umwahldialog**. Prüfen Sie dort, welche Kurse mit der gewünschten Wahl zusammenpassen und welche Verschiebungen erforderlich sind. Kontrollieren Sie offene Wahlen und rot markierte Schienen. Geben Sie fachliche Änderungen anschließend an LuPO zurück.
- Drucken Sie Kurslisten über **Datei → Formularexplorer** oder für einzelne Kurse und Schienen über deren Kontextmenü. Prüfen Sie vor der Ausgabe die Kurszuordnung und die Lehrkraft.
- Öffnen Sie **Stundenplan → Stundenraster bearbeiten**. Setzen Sie die Stunden der Schienen im Wochenraster. Bei einem zweiwöchigen Plan prüfen Sie beide Wochenansichten. Hinterlegen Sie Stammräume und ändern Sie einzelne Stunden bei Bedarf im Raumraster. Kontrollieren Sie Überschneidungen von Lehrkräften und Räumen sowie unterschiedliche Stundenumfänge von Kursen in derselben Schiene.
- Zeigen Sie die Schülerstundenpläne an und prüfen Sie die Belegung exemplarisch. Stellen Sie beim Export über **DB-Zugriff** den richtigen Zielabschnitt ein. Prüfen Sie die Einstellung zum Ersetzen einer bereits gespeicherten Blockung und sichern Sie den bisherigen Stand vor dem Export. Kontrollieren Sie anschließend Protokoll und Leistungsdaten im Zielabschnitt.

Die Ausgabe der Listen, das Wochenraster und der Export werden in [Kapitel 6 und 7](/dateien/pdf/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=75) beschrieben. Die [Menüübersicht zu Kurs42](/dateien/pdf/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=158) erläutert die Befehle nach Menübereichen.
