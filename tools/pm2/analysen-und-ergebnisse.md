---
title: "PM2: Analyseverfahren und Ergebnisse"
---

# Analyseverfahren und Ergebnisse

PM2 unterscheidet drei Wege, Leistungsdaten für die Prognose auszuwählen. Entscheidend ist dabei auch, ob die Eingabedaten in der Analyse verändert werden können.

| Verfahren | Datenbasis und Bearbeitung |
| --- | --- |
| **Einzelanalyse** | Ein einzelnes Notenbild wird im Prognosedialog erfasst und berechnet. |
| **Klasse** | Die Leistungsdaten einer Klasse aus SchILD werden angezeigt. Der Lernabschnitt lässt sich auswählen; Fachnoten und E-/G-Niveaus sind in dieser Ansicht nicht direkt veränderbar. |
| **Datei** | Eine PM2-Notendatei wird eingelesen. Über **Bearbeiten** können die angezeigten Daten im Gitter bearbeitet werden. |

## Daten auswählen und prüfen

Bei der Klassenanalyse wählen Sie Klasse und Abschnitt. Fehlen Fächer, kontrollieren Sie unter **Einstellungen → Fachersetzungen** die Zuordnung der Unterrichtsfächer.

Eine PM2-Datei besitzt einen vorgegebenen Aufbau mit einer Kopfzeile und durch Semikolons getrennten Feldern. Auch leere Felder behalten ihre Trennzeichen. Die im Programmverzeichnis vorhandenen Beispieldateien im Unterordner `Dat` helfen, den erwarteten Aufbau zu prüfen.

## Prognose berechnen

Markieren Sie für eine gemeinsame Berechnung die gewünschten Zeilen und verwenden Sie **Berechnen (F5)**. Der Prognosedialog zeigt links die Leistungsdaten und rechts das Ergebnis. Bei einer Listenanalyse kann der Dialog für die ausgewählte Person auch mit **F2** oder der Leertaste geöffnet werden.

Lesen Sie das Ergebnis zusammen mit den zugrunde gelegten Fachzuordnungen und Hinweisen. Die Programmprognose ersetzt nicht die fachliche Prüfung durch die zuständige Lehrkraft. Die in der Anleitung erläuterten Rechtsstände und Beispielnoten sind nicht automatisch die für jeden Jahrgang aktuell anzuwendenden Voraussetzungen.

## Speichern und ausgeben

- **Strg+S** speichert die Prognosedaten bei der Analyse von SchILD- oder CSV-Leistungsdaten.
- **Strg+X** öffnet die allgemeine Ausgabe beziehungsweise den Export.
- **Strg+P** druckt die angezeigten Daten.
- Bei der Klassenanalyse können die Prognoseergebnisse der markierten Datensätze außerdem als Textdatei ausgegeben werden.

Die Versionshinweise führen für 1.8.3.0 eine Erweiterung zur Fachleistungsdifferenzierung in Biologie und Fehlerkorrekturen auf. Stimmen Oberfläche oder Auswertungsmöglichkeiten nicht mit einer älteren Wiki-Abbildung überein, vergleichen Sie deshalb den eingesetzten Programmstand mit den Versionshinweisen.

Quelle: [Bedienungsanleitung PM2, Druckstand 15.01.2024](https://www.svws.nrw.de/system/files/media/document/file/pm2_bedienungsanleitung_1.pdf), Kapitel 2–4 und 7, Seiten 9–23 und 30–33; [Versionshinweise](https://www.svws.nrw.de/system/files/media/document/file/pm2_versionsgeschichte.pdf), Version 1.8.3.0.
