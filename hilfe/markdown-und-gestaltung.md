---
title: Markdown und Gestaltung
---

# Markdown und Gestaltung

Diese Seite zeigt die Bausteine für die Dokumentation. Zu jedem Beispiel stehen der kopierbare Markdown-Code und die gerenderte Darstellung beieinander. Die inhaltlichen Regeln finden Sie unter [Artikel schreiben und bearbeiten](/hilfe/artikel-schreiben).

## Überschriften und Absätze

Eine Seite beginnt mit genau einem Titel erster Ebene: `# Mein Artikeltitel`. Darunter folgen `##` für Abschnitte und `###` für Unterabschnitte. Die rechte Gliederung zeigt die Ebenen zwei und drei an.

**Markdown:**

```markdown
### Beispielüberschrift

Dies ist ein Absatz.

Eine Leerzeile beginnt einen neuen Absatz.
```

**Darstellung:**

### Beispielüberschrift

Dies ist ein Absatz.

Eine Leerzeile beginnt einen neuen Absatz.

Mehrere leere Zeilen sind nicht nötig. Erzwingen Sie Zeilenumbrüche nur dort, wo sie zum Inhalt gehören, beispielsweise in einer Anschrift. Dafür kann ausnahmsweise `<br>` verwendet werden.

## Hervorhebungen und Bezeichner

**Markdown:**

```markdown
Wählen Sie **Öffnen**. Die Datei heißt `Zeugniseinstellungen.ini`.

*Dieser Satz ist kursiv hervorgehoben.*
```

**Darstellung:**

Wählen Sie **Öffnen**. Die Datei heißt `Zeugniseinstellungen.ini`.

*Dieser Satz ist kursiv hervorgehoben.*

Verwenden Sie Fettschrift für sichtbare Schaltflächen und Feldnamen, Inline-Code für Dateinamen, Einstellungen und Codebezeichner. Ein Menüpfad wird beispielsweise als **Verwaltung → Einstellungen → Interne Texte** geschrieben.

## Listen

Verwenden Sie nummerierte Listen für eine Reihenfolge und Aufzählungen für gleichrangige Angaben. Unterpunkte werden eingerückt.

**Markdown:**

```markdown
1. Öffnen Sie die Datei.
2. Prüfen Sie die Angaben.
   - Dateiname
   - Inhalt
3. Speichern Sie die Änderung.
```

**Darstellung:**

1. Öffnen Sie die Datei.
2. Prüfen Sie die Angaben.
   - Dateiname
   - Inhalt
3. Speichern Sie die Änderung.

## Links und Abschnittssprünge

**Markdown:**

```markdown
[Alle Artikel A–Z](/hilfe/alle-artikel)

[Zum Abschnitt Listen auf dieser Seite](#listen)

[SVWS-NRW auf GitHub](https://github.com/SVWS-NRW)
```

**Darstellung:**

[Alle Artikel A–Z](/hilfe/alle-artikel)

[Zum Abschnitt Listen auf dieser Seite](#listen)

[SVWS-NRW auf GitHub](https://github.com/SVWS-NRW)

Interne Links beginnen mit `/` und enthalten die Artikeladresse ohne `.md`. Einen Abschnitt erreichen Sie über dessen Sprungmarke nach `#`. Verwenden Sie die Adresse der tatsächlich gerenderten Überschrift; raten Sie die Schreibweise bei Sonderzeichen nicht. Bestehende Sprungmarken dürfen bei einer Umbenennung nicht verloren gehen.

## Bilder und Bildunterschriften

Das folgende Beispiel verwendet eine bereits vorhandene Abbildung. In der Artikeldatei beginnt der Bildpfad mit `/bilder/`; die Datei liegt im Repository unter `public/bilder/`.

**Markdown:**

```markdown
![Reportexplorer mit dem Zeugnisordner GymOb und markierter Zeugniseinstellungen.ini](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png)

*Die Datei Zeugniseinstellungen.ini liegt im zugehörigen Zeugnisordner.*

[Bild in Originalgröße öffnen](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png)
```

**Darstellung:**

![Reportexplorer mit dem Zeugnisordner GymOb und markierter Zeugniseinstellungen.ini](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png)

*Die Datei Zeugniseinstellungen.ini liegt im zugehörigen Zeugnisordner.*

[Bild in Originalgröße öffnen](/bilder/zeugnisformulare/zeugnisdruck-zeugniseinstellungen-ini.png)

Der Text in den eckigen Klammern ist der Alternativtext. Er beschreibt den Bildinhalt auch dann, wenn die Abbildung nicht angezeigt wird. Die Bildunterschrift darunter erklärt den Zusammenhang. Bilder werden an die verfügbare Breite angepasst; ein Textumfluss oder eine eigene Größenangabe ist normalerweise nicht nötig.

## Dateien zum Herunterladen

Verlinken Sie Downloads mit einer verständlichen Bezeichnung und nennen Sie das Format. Im Artikel steht `/dateien/`; im Repository liegt die Datei unter `public/dateien/`. Der Zusatz `{download}` kennzeichnet den Link als Dateidownload.

**Markdown:**

```markdown
[Beispieldatei: Matrix für Schulform und Jahrgang der Nichtversetzten (XLSX)](/dateien/serienbriefe/schulform-jahrgang-nichtversetzte-matrix.xlsx){download}
```

**Darstellung:**

[Beispieldatei: Matrix für Schulform und Jahrgang der Nichtversetzten (XLSX)](/dateien/serienbriefe/schulform-jahrgang-nichtversetzte-matrix.xlsx){download}

## Codeblöcke

Ein Codeblock beginnt und endet mit drei Backticks. Nach der öffnenden Begrenzung steht die Sprache, soweit sie bekannt ist: etwa `ini` für eine Einstellungsdatei oder `pascal` für Pascal- beziehungsweise RAP-Code. Leerzeichen und Zeilenumbrüche innerhalb des Blocks bleiben erhalten.

**Markdown:**

````markdown
```ini
ZeugnisMitRand=J
```
````

**Darstellung:**

```ini
ZeugnisMitRand=J
```

Soll ein Beispiel selbst drei Backticks zeigen, verwenden Sie außen vier Backticks – wie im Quelltext dieses Abschnitts. Eine farbige Darstellung von Code bedeutet nicht, dass das Beispiel auch im dokumentierten Programm ausgeführt oder fachlich geprüft wurde.

## Tabellen

Nutzen Sie Tabellen für strukturierte Angaben, nicht als Rahmen für längere Texte. Die Trennzeile unter der Kopfzeile ist erforderlich.

**Markdown:**

```markdown
| Einstellung | Wirkung |
| --- | --- |
| `ZeugnisMitRand=J` | Druckt das Zeugnis mit Rand. |
| `ZeugnisMitRand=N` | Druckt das Zeugnis ohne Rand. |
```

**Darstellung:**

| Einstellung | Wirkung |
| --- | --- |
| `ZeugnisMitRand=J` | Druckt das Zeugnis mit Rand. |
| `ZeugnisMitRand=N` | Druckt das Zeugnis ohne Rand. |

Markdown-Tabellen können keine verbundenen Zellen darstellen. Ordnen Sie solche Informationen möglichst in eigenständige Zeilen um. Längere Listen, Beispiele oder Erklärungen können außerhalb der Tabelle verständlicher sein. Verwenden Sie `<br>` innerhalb einer Zelle nur für notwendige inhaltliche Umbrüche.

Ein senkrechter Strich innerhalb einer Tabellenzelle benötigt einen einzelnen Backslash davor, damit er nicht als Spaltengrenze zählt. Das gilt auch innerhalb von Inline-Code.

**Markdown:**

```markdown
| Bezeichnung | Inhalt |
| --- | --- |
| Trennzeichen im Text | links \| rechts |
```

**Darstellung:**

| Bezeichnung | Inhalt |
| --- | --- |
| Trennzeichen im Text | links \| rechts |

### Breite Feldtabellen

Für Feldbeschreibungen steht ein gemeinsames Tabellenformat zur Verfügung. Verwenden Sie genau die sechs Überschriften „Spalte“, „Beschreibung“, „Header-Text“, „Datentyp“, „Darf leer sein?“ und „Bemerkung“. Daraus entstehen zentral einheitliche Spalten und ein per Tastatur bedienbarer Scrollbereich.

Für die zugehörige breitere Seitendarstellung wird im vorhandenen Seitenkopf die Angabe `pageClass: reference-tables` ergänzt. Verwenden Sie für solche Nachschlageartikel die vorhandene Schnittstellenbeschreibung als Vorlage, statt eigene Breiten oder Inline-Stile in den Artikel zu schreiben.

## Hinweisboxen

Ein Kasten beginnt mit `:::` und seinem Typ und endet mit `:::`. Titel, Farben und Icons werden zentral ergänzt. Schreiben Sie keine eigenen Bildicons oder Farbangaben in den Artikel. Der eigentliche Arbeitsablauf bleibt außerhalb der Kästen verständlich.

### Hinweis

**Markdown:**

```markdown
::: info
Dieser Hinweis ordnet eine Information ein.
:::
```

**Darstellung:**

::: info
Dieser Hinweis ordnet eine Information ein.
:::

### Tipp

**Markdown:**

```markdown
::: tip
Mit der Browsersuche können Sie einen Begriff auf der Seite finden.
:::
```

**Darstellung:**

::: tip
Mit der Browsersuche können Sie einen Begriff auf der Seite finden.
:::

### Wichtig

**Markdown:**

```markdown
::: warning
Ein wichtiger Hinweis gehört vor den betroffenen Arbeitsschritt.
:::
```

**Darstellung:**

::: warning
Ein wichtiger Hinweis gehört vor den betroffenen Arbeitsschritt.
:::

### Achtung

**Markdown:**

```markdown
::: danger
Benennen Sie eine konkrete Gefahr und erklären Sie, wie sie vermieden wird.
:::
```

**Darstellung:**

::: danger
Benennen Sie eine konkrete Gefahr und erklären Sie, wie sie vermieden wird.
:::

### Falsch und Richtig

Die besonderen Titel „Falsch“ und „Richtig“ kennzeichnen gegenübergestellte Beispiele.

**Markdown:**

```markdown
::: danger Falsch
Leere Abschnitte nur zur Vervollständigung einer Vorlage anlegen.
:::

::: tip Richtig
Nur Abschnitte aufnehmen, die tatsächlich Informationen enthalten.
:::
```

**Darstellung:**

::: danger Falsch
Leere Abschnitte nur zur Vervollständigung einer Vorlage anlegen.
:::

::: tip Richtig
Nur Abschnitte aufnehmen, die tatsächlich Informationen enthalten.
:::

### Beispiel

**Markdown:**

```markdown
::: example Eine vollständige Einstellung
`ZeugnisMitRand=J` besteht aus dem Optionsnamen und dem Wert.
:::
```

**Darstellung:**

::: example Eine vollständige Einstellung
`ZeugnisMitRand=J` besteht aus dem Optionsnamen und dem Wert.
:::

## Aufklappbare Abschnitte

Nutzen Sie aufklappbare Abschnitte für ergänzende Informationen. Notwendige Handlungsschritte gehören in den unmittelbar sichtbaren Text.

**Markdown:**

```markdown
::: details Zusätzliche Erläuterung
Dieser ergänzende Text wird beim Aufklappen sichtbar.
:::
```

**Darstellung:**

::: details Zusätzliche Erläuterung
Dieser ergänzende Text wird beim Aufklappen sichtbar.
:::

## Verschachtelte Boxen

Die äußere Begrenzung muss länger sein als die innere. Im folgenden Beispiel verwendet der äußere Abschnitt vier Doppelpunkte und der innere Tipp drei.

**Markdown:**

```markdown
:::: details Beispiel mit verschachteltem Tipp

::: tip
Der innere Tipp gehört zum aufklappbaren Abschnitt.
:::

::::
```

**Darstellung:**

:::: details Beispiel mit verschachteltem Tipp

::: tip
Der innere Tipp gehört zum aufklappbaren Abschnitt.
:::

::::

## Gemeinsame Gestaltung verwenden

Verwenden Sie die gezeigten Bausteine, statt pro Artikel eigene Farben, Spaltenlayouts oder CSS-Angaben einzuführen. Prüfen Sie längere Tabellen, Codeblöcke und Bilder auch bei schmalem Browserfenster. Erläuterungen zur Auswahl und zum Aufbau eines Artikels stehen unter [Artikel schreiben und bearbeiten](/hilfe/artikel-schreiben).
