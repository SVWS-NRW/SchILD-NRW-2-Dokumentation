---
title: "MA2LBV / MA2: Abrechnung erstellen und ausgeben"
---

# Abrechnung erstellen und ausgeben

## Zeitraum und Daten wählen

Beim ersten Start legen Sie den Startmonat eines **sechsmonatigen Abrechnungszeitraums** fest. Für die Abrechnungsdaten bestehen drei Wege:

- Eine unterstützte Abrechnungsdatei mit bereits enthaltenen Mehrarbeitsstunden importieren.
- Lehrkraftdaten aus SchILD übernehmen und die vergütbaren Stunden und Merkmale anschließend ergänzen.
- Die benötigten Daten vollständig manuell erfassen.

Eine vorhandene Datei wählen Sie über den Pfeil neben **Abrechnung → Abrechnungsdatei festlegen**. Anschließend lesen Sie die Datei über **Abrechnung** ein und kontrollieren die angezeigten Werte.

## Änderungsmitteilungen erzeugen

1. Markieren Sie die betreffende Lehrkraft und die gewünschten Monatsspalten.
2. Öffnen Sie **LBV-Export**.
3. Entscheiden Sie, ob die Angaben nur auf Richtigkeit geprüft, als PDF gespeichert oder zusätzlich gedruckt werden sollen.
4. Kontrollieren Sie den Hinweiseintrag zum Ergebnis. Über dessen Kontextmenü lässt sich die erzeugte PDF anzeigen.

Die Ausgaben liegen im Unterordner `pdf` des Programmverzeichnisses. Für mehrere Lehrkräfte markieren Sie die betreffenden Zeilen und verwenden **LBV-Export (alle markierten Zeilen)**. Dabei entsteht für jede Lehrkraft eine separate Datei.

Die am Bildschirm bearbeiteten Abrechnungsdaten werden als verschlüsselte `.MAA`-Dateien im Unterordner `ma` gespeichert. Die allgemeine Exportfunktion kann die dargestellten Daten außerdem in andere Ausgabeformate überführen.

:::danger Abrechnungszeitraum wechseln
**Datei → Abrechnungszeitraum zuordnen** ordnet den angezeigten Lehrkräften einen neuen sechsmonatigen Zeitraum zu. Dabei werden die bisherigen vergütbaren Stunden, Merkmale und Hinweise gelöscht. Sichern beziehungsweise archivieren Sie den abgeschlossenen Vorgang, bevor Sie diese Funktion verwenden.
:::

Die Versionshinweise zu 3.2.3.2 beschreiben die Umbenennung von MA2LBV in MA2 und die Entfernung des ausgelaufenen Förderanlasses „Nachholen und Ankommen nach Corona“. Ältere Abbildungen und Anleitungen können daher andere Bezeichnungen oder Auswahlmöglichkeiten zeigen.

Quelle: [Bedienungsanleitung MA2, Druckstand 18.03.2024](https://www.svws.nrw.de/system/files/media/document/file/ma2lbv_anleitung.pdf), Seiten 12–20; [Versionshinweise](https://www.svws.nrw.de/system/files/media/document/file/ma2pdf_versionsgeschichte.pdf), Version 3.2.3.2.
