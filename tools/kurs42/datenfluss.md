---
title: "Kurs42: Zusammenspiel mit SchILD-NRW 2 und LuPO"
---

<a id="zusammenspiel-mit-schild-und-lupo"></a>

# Zusammenspiel mit SchILD-NRW 2 und LuPO

SchILD-NRW 2, LuPO und Kurs42 bearbeiten unterschiedliche Teile der Oberstufenplanung. Diese Anleitung erklärt, welche Daten zwischen den Programmen ausgetauscht werden und in welcher Reihenfolge die Arbeitsschritte zusammenpassen.

| Programm | Aufgabe |
| --- | --- |
| **SchILD-NRW 2** | Verwaltet Stammdaten und sammelt die Leistungsdaten der einzelnen Laufbahnabschnitte. |
| **LuPO** | Plant und prüft die gesamte Oberstufenlaufbahn einschließlich der Fachwahlen zukünftiger Halbjahre. |
| **Kurs42** | Organisiert die Kurse und ihre Blockung für ein bestimmtes Schulhalbjahr. |

## Daten in der passenden Richtung übertragen

1. Bereiten Sie Stammdaten, Sprachenfolge und die benötigten Kataloge in SchILD-NRW 2 vor.
2. Erzeugen beziehungsweise aktualisieren Sie die LuPO-Datei und prüfen Sie die Fachwahlen.
3. Übernehmen Sie die Fachwahlen des zu planenden Halbjahres aus LuPO nach Kurs42.
4. Erstellen oder bearbeiten Sie die Blockung und ordnen Sie die Schülerinnen und Schüler den Kursen zu.
5. Wenn Umwahlen in Kurs42 vorgenommen wurden, gleichen Sie den betroffenen Abschnitt wieder mit LuPO ab. Änderungen in LuPO müssen gegebenenfalls für spätere Halbjahre fortgeschrieben werden.
6. Übertragen Sie die fertige Kursbelegung zu den vorgesehenen Arbeitszeitpunkten nach SchILD-NRW 2.

## Zuständigkeiten festlegen

Eine laufende Beratung oder Blockungsbearbeitung benötigt nicht bei jedem Arbeitsschritt einen schreibenden Zugriff auf die SchILD-NRW 2-Datenbank. Das Erzeugen einer neuen Blockung aus SchILD-NRW 2 und die Rückübertragung nach SchILD-NRW 2 benötigen dagegen die passenden Berechtigungen.

Legen Sie fest, wer Importe, Exporte und Sicherungen ausführt. So wird vermieden, dass unterschiedliche Arbeitsstände unbemerkt gegeneinander übertragen werden. Insbesondere vor der Statistik und der Zeugnisvorbereitung müssen die in SchILD-NRW 2 benötigten Kursbelegungen den richtigen Halbjahresstand haben.

Weiter: [Neue Blockung erstellen](/tools/kurs42/neue-blockung) oder [Halbjahreswechsel vorbereiten](/tools/kurs42/halbjahreswechsel).

Quelle: [Handbuch SchILD-NRW 2–LuPO–Kurs42, 22. Auflage, Mai 2022](https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf), Kapitel 3–4, Seiten 11–41.

## Vorbereitung für die Oberstufenplanung

![Datenfluss von den Stammdaten bis zur Kursbelegung](/bilder/pdf-anleitungen/kurs42/datenfluss.svg)

1. Prüfen Sie [Statistikjahrgänge](/schild2/unterricht-kataloge/statistik-jahrgaenge) und [Versetzungstabelle](/schild2/unterricht-kataloge/klassen-versetzungstabelle). Die künftige Jahrgangsstufe muss im Zielabschnitt eindeutig erkennbar sein.
2. Kontrollieren Sie die [Unterrichtsfächer](/schild2/unterricht-kataloge/unterrichtsfaecher) der Oberstufe. Fachkürzel und Kursarten müssen beim Austausch zusammenpassen. Richten Sie Vertiefungsfächer und Projektkurse mit den vorgesehenen Kursarten ein.
3. Prüfen Sie die [Sprachenfolge](/schild2/schueler/laufbahninfo) vor dem Export. Bei neu aufgenommenen Schülerinnen und Schülern ergänzen Sie auch die bisher belegten Fremdsprachen und ihre Belegungszeiträume.
4. Erzeugen Sie in SchILD-NRW 2 den [Initial-Export für LuPO](/schild2/import-export-statistik/export-fuer-lupo). Prüfen Sie danach in LuPO, ob die richtigen Personen, Fächer und Laufbahnabschnitte enthalten sind.
5. Öffnen Sie in Kurs42 **Extras → Einstellungen**. Prüfen Sie die Einstellungen für Datenbankzugriff, Im- und Export, Kursbezeichnungen, Stundenzeiten und Druckvorlagen. Die Maske `%Fachbez%-%Kursart%%Kursnr%` ergibt beispielsweise `D-GK1`.
6. Legen Sie Arbeitsverzeichnisse und Schreibrechte für die Blockungs- und LuPO-Dateien fest. Verwenden Sie beim Wechsel zwischen mehreren Arbeitsplätzen denselben vereinbarten Datenstand und sichern Sie die Dateien vor einem Abgleich.

Die Abfolge und der Erstexport stehen in [Kapitel 3 und 4 des Handbuchs](https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=11). Das Netzwerkbeispiel in [Kapitel 18](https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=172) zeigt, wie gemeinsame Programm- und Datenverzeichnisse organisiert werden.

## Zusammenarbeit mit einer Partnerschule und Notenerfassung

Kennzeichnen Sie Kurse an einer Partnerschule und halten Sie die Zuordnung zu den eigenen Schülerinnen und Schülern nachvollziehbar. Stimmen Sie die benötigten Schüler- und Kurslisten sowie die Rückgabe der Noten mit der Partnerschule ab. Prüfen Sie im aktuellen Halbjahr, ob der Unterricht als extern erfasst ist. [Kapitel 14](https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=153) zeigt einen Arbeitsablauf und ein Formular für den Austausch.

Die Kursblockung legt die Belegungen fest. Übertragen Sie diese vor der Notenerfassung in den passenden Lernabschnitt und kontrollieren Sie die Zuordnungen. Das Handbuch unterscheidet die [Notenerfassung in Kurs42 und in SchILD-NRW 2](https://www.svws.nrw.de/system/files/media/document/file/handbuch-schild-lupo-kurs42-22.auflage.pdf#page=156). Für den Austausch von Leistungsdaten nutzen Sie die Anleitung zum [externen Notenmodul](/zeugnisse/vorbereitung/externes-notenmodul).
