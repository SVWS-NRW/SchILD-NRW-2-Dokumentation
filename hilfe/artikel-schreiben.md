---
title: Artikel schreiben und bearbeiten
---

# Artikel schreiben und bearbeiten

Schreiben Sie so, dass auch Personen ohne Vorkenntnisse den beschriebenen Arbeitsschritt verstehen. Diese Hinweise gelten für neue Artikel und für die Überarbeitung bestehender Texte. Kopierbare Bausteine finden Sie unter [Markdown und Gestaltung](/hilfe/markdown-und-gestaltung).

Den Weg vom Bearbeiten bis zum geprüften Änderungsvorschlag erläutern [Mit VS Code im Browser bearbeiten](/hilfe/vscode-editor) und [Mit dem GitHub-Editor bearbeiten](/hilfe/github-editor). Einen Überblick bietet [An der Dokumentation mitarbeiten](/hilfe/mitarbeiten).

## Eine klare Aufgabe beschreiben

Titel benennen das Thema oder die Aufgabe. Menünamen bleiben kurz und sind auch ohne Kenntnis alter Wiki-Bezeichnungen verständlich. Verwenden Sie keine Klammerzusätze, Datumsstände, Tutorialnummern oder bloßen Dateinamen im Titel. Notwendige Rechtsgrundlagen, Bildungsgangdetails und technische Bezeichnungen gehören in den Artikeltext. Funktionsnamen der RAP-Referenz bleiben unverändert.

Ein Artikel behandelt eine erkennbare Aufgabe oder einen klar abgegrenzten Gegenstand. Sagen Sie zu Beginn, wobei er hilft und welche Voraussetzungen tatsächlich nötig sind. Verwenden Sie genaue Begriffe und übernehmen Sie die sichtbaren Bezeichnungen aus dem dokumentierten Programm.

Erhalten Sie bei Überarbeitungen die fachlichen Einzelheiten, Einschränkungen, Beispiele, Tabellen, Bilder und Bildunterschriften. Sprachliche Vereinfachungen sind möglich; fachliche Änderungen müssen sich begründen lassen. Erfinden Sie keine Voraussetzungen, Programmfunktionen, Parameter oder Ergebnisse. Benennen Sie offene Fragen im Änderungsvorschlag.

Legen Sie nur Abschnitte mit Inhalt an. Leere Überschriften, Auslassungspunkte oder Füllsätze helfen den Lesenden nicht. Ein kurzer Artikel braucht nicht dieselben Abschnitte wie eine ausführliche Anleitung.

## Den passenden Artikelaufbau wählen

| Artikeltyp | Geeigneter Aufbau | Beispiel |
| --- | --- | --- |
| Arbeitsanleitung | Ziel, belegte Voraussetzungen, nummerierte Schritte, erkennbares Ergebnis und bekannte Probleme | Reports installieren oder Noten eingeben |
| Programmreferenz | Zweck und Aufruf, Felder und Schaltflächen, Wirkungen und Besonderheiten, passende Anleitungen | Ein Fenster oder einen Karteireiter erklären |
| RAP-Funktionsreferenz | Beschreibung, vorhandene Signatur, belegte Parameter, Rückgabewerte und Beispiele | Eine RAP-Funktion nachschlagen |
| Themenübersicht | Einstieg in das Thema, sinnvolle Reihenfolge, Sonderfälle und Links zu den Detailartikeln | Die Arbeitsschritte eines Themenbereichs erschließen |

### Arbeitsanleitungen

1. Erklären Sie das Ziel in ein bis zwei Sätzen.
2. Nennen Sie nur belegte Voraussetzungen, etwa ein benötigtes Reportpaket oder Zugriffsrechte auf ein Arbeitsverzeichnis.
3. Beschreiben Sie die Handlungsschritte in ihrer tatsächlichen Reihenfolge. Zusammengehörige Auswahl und Bestätigung dürfen in einem Schritt stehen.
4. Stellen Sie einen wichtigen Hinweis vor den Schritt, bei dem eine Fehlbedienung Folgen hätte. Erklären Sie eine nötige Rückstellung direkt beim betreffenden Schritt.
5. Beschreiben Sie, woran das erfolgreiche Ergebnis zu erkennen ist. Wiederholen Sie dabei nicht bloß den letzten Arbeitsschritt.
6. Verknüpfen Sie bekannte Probleme mit konkreten Fundstellen oder Handlungsmöglichkeiten. Vermeiden Sie spekulative Fehlerlisten.

Ein zusammengehöriger Arbeitsablauf soll sich ohne ständiges Springen zwischen Seiten nachvollziehen lassen. Weiterführende Artikel dürfen gezielt verlinkt werden; umfangreiche Hintergrundinformationen müssen nicht in mehreren Anleitungen wiederholt werden.

### Programmreferenzen

Verwenden Sie die Namen aus der Programmoberfläche. Für mehrere Felder oder Schaltflächen eignet sich eine Tabelle mit „Bezeichnung“, „Bedeutung“ und bei Bedarf „Besonderheit“.

Nehmen Sie Schulform-, Versions- oder Berechtigungsunterschiede nur auf, wenn sie belegt sind. Verlinken Sie vollständige Arbeitsabläufe, statt sie in jedem Referenzartikel erneut zu erklären.

### RAP-Funktionsreferenzen

Erhalten Sie Signaturen, Bezeichner und Code wörtlich. Beschreiben Sie Parameter mit Name, Typ und Bedeutung, soweit diese Angaben vorliegen. Bei einer Prozedur darf kein Rückgabewert erfunden werden; dokumentierte `var`-Ausgaben gehören zu den Parametern. Aus fehlenden Angaben lässt sich nicht ableiten, dass eine Funktion keine Parameter oder keinen Rückgabewert hat.

Schreiben Sie Pascal-Beispiele in Codeblöcke und die Erläuterungen außerhalb des Codes. Erklären Sie beabsichtigte Codekorrekturen im Änderungsvorschlag. Bezeichnen Sie ein Beispiel nur dann als „getestet“ oder „ausgeführt“, wenn es tatsächlich in der passenden Laufzeit geprüft wurde.

### Themenübersichten

Beantworten Sie zuerst „Wo beginne ich?“. Verbinden Sie die Detailartikel zu einem nachvollziehbaren Weg und bieten Sie danach Zugänge zu Sonderfällen an. Zusammenfassende Aussagen müssen aus den verlinkten Fachartikeln belegbar sein.

Nicht jede Übersicht braucht Bilder. Bildschirmabbildungen können dort stehen, wo sie einen konkreten Arbeitsschritt erklären.

## Einheitlich schreiben

- Sprechen Sie Leserinnen und Leser mit „Sie“ an. Schreiben Sie kurz und aktiv: „Wählen Sie …“, „Öffnen Sie …“.
- Verwenden Sie im Fließtext „SchILD-NRW“ mit der passenden Programmbezeichnung, „Schülerinnen und Schüler“, „Lehrkräfte“ und „E-Mail“. Sichtbare Programmbezeichnungen bleiben unverändert, auch wenn sie davon abweichen.
- Zeichnen Sie Schaltflächen und Feldnamen **fett** aus. Schreiben Sie Menüpfade einheitlich, zum Beispiel **Verwaltung → Einstellungen → Interne Texte**.
- Setzen Sie Dateinamen, Verzeichnisse, Konfigurationsschlüssel und Codebezeichner in Inline-Code, etwa `Zeugniseinstellungen.ini` oder `ZeugnisMitRand=J`.
- Unterscheiden Sie zwischen dem „Report“ als Vorlage und der „Ausgabe“ beziehungsweise „PDF-Ausgabe“ als erzeugtem Dokument. Nennen Sie abweichende Bezeichnungen des Programms ausdrücklich.
- Beschriften Sie Links mit ihrem Zielinhalt. „Installation vorbereiten“ sagt mehr aus als „hier klicken“.
- Wählen Sie einen Titel, der die Aufgabe oder den Gegenstand beschreibt. Ein Menüpunkt darf kürzer heißen. Zusätze wie „(Tutorial)“ sind dafür nicht nötig.

## Überschriften, Tabellen und Hinweise einsetzen

Verwenden Sie genau einen Seitentitel mit `#`. Gliedern Sie darunter mit `##` und `###`, ohne Ebenen zu überspringen. Die rechte Übersicht „Auf dieser Seite“ entsteht aus den Überschriften; sie muss nicht von Hand gepflegt werden.

Bevorzugen Sie Markdown-Listen, Markdown-Tabellen und die vorhandenen Hinweisboxen. Tabellen eignen sich für vergleichbare, strukturierte Angaben. Verwenden Sie sie nicht als Rahmen für Fließtext oder Beispiele. Verbundene Zellen und aufwendige Zellinhalte sollten nach Möglichkeit in eine verständlichere Struktur aufgelöst werden.

Nutzen Sie Hinweise gezielt: einen Tipp für eine Arbeitserleichterung, einen Hinweis für eine Einordnung und eine Warnung für eine konkrete mögliche Fehlerfolge. Der eigentliche Arbeitsablauf muss auch außerhalb der Kästen verständlich bleiben.

HTML ist nur nötig, wenn Markdown die erforderliche Darstellung nicht abbildet oder eine bestehende Sprungmarke erhalten werden muss. Führen Sie keine eigenen Farben, Inline-Stile oder dekorativen Symbole pro Artikel ein. Die gemeinsame Gestaltung sorgt auch für die Darstellung auf kleinen Bildschirmen sowie im hellen und dunklen Modus.

## Bilder und Dateien auswählen

Ein Bild soll zeigen, was für den beschriebenen Schritt wichtig ist. Beschriften Sie die entscheidenden Elemente, statt lediglich den Dateinamen zu wiederholen. Ein Alternativtext beschreibt den sichtbaren Inhalt; die Bildunterschrift erläutert dessen Bedeutung im Ablauf.

Verwenden Sie gut lesbare, passend zugeschnittene Screenshots mit möglichst einheitlichem Erscheinungsbild. Persönliche Daten müssen anonymisiert sein. Erhalten Sie vorhandene Bildunterschriften und den Zugang zum Originalbild, wenn eine Abbildung weiterhin verwendet wird.

Nutzen Sie vorhandene Abbildungen aus dem [Bilderkatalog](/bilder/), wenn sie zum beschriebenen Programmstand passen. Neue Bilder liegen unter `public/bilder/` im passenden Themenordner. Verwenden Sie aussagekräftige Dateinamen mit Kleinbuchstaben, Ziffern und Bindestrichen, ohne Leerzeichen oder Umlaute. Dokumente und andere Downloads liegen unter `public/dateien/`.

## Quellen und Geltungsbereich erhalten

Bei bereits übernommenen Fachartikeln bleiben vorhandene Quellenlinks und die Angaben `source_pageid` und `source_revision` erhalten. Sie kennzeichnen die Herkunft, nicht automatisch die fachliche Aktualität.

Geben Sie einen Programmstand oder einen schulformspezifischen Geltungsbereich an, wenn die Aussage davon abhängt und dieser Zusammenhang belegt ist. Kennzeichnen Sie frühere Verfahren als solche. Behandeln Sie ungeprüfte Angaben nicht als bestätigte aktuelle Programmfunktionen.

Erhalten Sie bestehende Artikeladressen und benötigte Abschnittsanker. Prüfen Sie bei einer neuen Überschrift, ob auf die bisherige Überschrift verlinkt wird. Eine sprachliche Verbesserung soll keine vorhandenen Zugänge unbrauchbar machen.

## Neue Artikel auffindbar machen

Ordnen Sie den Artikel einem passenden Themenbereich zu und verlinken Sie ihn in dessen Übersicht oder Menü. Der Speicherort allein erzeugt keinen Menüeintrag. Wo es sinnvoll ist, kann zusätzlich die Programmreferenz auf denselben Fachartikel verweisen; dafür ist keine zweite Kopie des Artikels nötig.

Veröffentlichte Seiten erscheinen automatisch unter [Alle Artikel A–Z](/hilfe/alle-artikel) und werden von der lokalen Suche erfasst. Die technischen Schritte für Dateien, Menüeinträge, lokale Vorschau und Pull Requests stehen unter [An der Dokumentation mitarbeiten](/hilfe/mitarbeiten).

## Vor dem Einreichen gegenlesen

Lesen Sie den Artikel in der Vorschau: Ist der Ablauf verständlich? Stimmen Begriffe, Bilder und Verweise? Sind fachliche Änderungen erkennbar und begründet? Bleiben Tabellen und Code auch auf einem kleinen Bildschirm nutzbar?

Beschreiben Sie im Pull Request kurz, was geändert wurde und worauf die fachlichen Angaben beruhen. Ein dauernder Vergleich mit früheren Artikelprüfsummen ist dafür nicht erforderlich.
