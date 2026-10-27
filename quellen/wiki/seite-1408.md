---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Serienbrief Nichtversetzte"
---

# Serienbrief Nichtversetzte

Gesicherte Wiki-Seite · Namensraum 0 · Version 5863 · Stand 2024-05-16.

[Lesbaren Artikel öffnen](/zeugnisse/sekundarstufen/serienbrief-nichtversetzte) · [Originaldaten herunterladen](/dateien/quellen/seite-1408.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Der ''Serienbrief Nichtversetzte'' ist dafür vorgesehen, dass Schülerinnen und Schüler vor den Sommerferien ein Anschreiben erhalten, welches über die Nichtversetzung und mögliche Nachprüfungsfächer informiert. Damit jede Schülerin und jeder Schüler das korrekte Anschreiben erhält, analysiert der Serienbrief die Schulform, die Gliederung, den Jahrgang, das Versetzungskürzel, die Wiederholung und die Verweildauer.

==Filtern der nichtversetzten Schülerinnen und Schüler==
Rufen Sie ''Filter I ➜ Lernabschnitt / Leistungsdaten'' auf. Wählen Sie dort die Versetzungsvermerke ''Nichtversetzt'' und ''N.v., Nachprüfung möglich'' auf. In manchen Fällen ist auch der Versetzungsvermerk ''Abschluss'' hinzuzunehmen.

Es werden daraufhin alle Schülerinnen und Schüler gefiltert, die ein Anschreiben erhalten sollen.

==RTF-Anschreiben anpassen==
[[Datei:Rtf-Dokumente.png|thumb|hochkant=0.5|RTF-Dokumente]]
Im Ordner ''Serienbriefe'' finden sie den Unterordner ''RTF-Serienbriefvorlagen ➜ Nichtversetzung''. Dieser enthält alle schulformspezifischen Anschreiben an nichtversetzte Schülerinnen und Schüler. Die Dateinamen enthalten verschiedene Informationen:

* Schulform oder Schulgliederung (z.B. GY)
* Jahrgangsbereich (z.B. 07-10)
* NV (nicht versetzt)
* NP (Nachprüfungsmöglichkeit)
* SV (Schulformwechsel)
* GW (Gliederungswechsel)
* SV (Schule verlassen)
* VJ (Brief an volljährige)

Jeder Brief kann inhaltlich in einem RTF-Editor (z.B. WordPad) an die eigenen Bedürfnisse angepasst werden. Die RTF-Editoren unterscheiden sich teils deutlich in der Menge des RTF-Codes, der erzeugt wird. Es ist zu empfehlen, hier auf einen sparsamen RTF-Editoren zurückzugreifen. Sie können RTF-Dokumente auch im Reportdesigner öffnen, bearbeiten und speichern.

==Serienbrief Nichtversetzte==
[[Datei:Nichtversetzung_Beispiel.png|thumb|hochkant=0.7|Beispiel-Brief]]
Wenn der Serienbrief aufgerufen wird, analysiert dieser schülerspezifisch die Bedingungen der Nichtversetzung und die Folgen. Anhand des Analyseergebnisses wird das passende RTF-Dokument aufgerufen. Enthält das Dokument Abfragefelder zur Text- oder Datumseingabe, so werden diese einmalig abgefragt. In den RTF-Dokumenten sind hierzu entsprechende Platzhalter zu setzen. Solange identische Platzhalter verwendet werden, erfolgt die Abfrage auch in anderen RTF-Dokumenten nicht erneut. Möchte man in anderen RTF-Dokumenten andere Text- oder Datumseingaben vornehmen, so sind dort Platzhalter zu verwenden, die sich unterscheiden. Als Beispiel sei hier eine Schule genannt, welche die schriftlichen Nachprüfungen der SI und der SII an unterschiedlichen Tagen plant. Hier kann in den RTF-Dokumenten der SI der Platzhalter <code>$Eingabe|Datum|GY-07-10-NP: schriftliches Nachprüfungsdatum$</code> und in RTF-Dokumenten  der SII der Platzhalter <code>$Eingabe|Datum|GY-EF-NP: schriftliches Nachprüfungsdatum$</code> hinterlegt werden. In diesem Fall erfolgen zwei gesonderte Abfragen des Datums für die RTF-Dokumente, da sich die Platzhalter unterscheiden.

Der Programmcode kann unter ''Berechnungen'' in der Ansicht ''Verwendete Module'' in der Prozedur ''RtfNichtversetztAutomatischLaden'' eingesehen werden. Der Code ist so strukturiert, dass individuelle Anpassungen leicht vorgenommen werden können. Hier können auch die Dateinamen der RTF-Dokumente definiert und sonderfälle hinterlegt werden.

==Weitere Informationen==
Bei den Serienbrief handelt es sich um einen erweiterten Serienbrief an Erzieher. Damit der Serienbrief unterschiedliche RTF-Dokumente schülerindividuell einlesen kann, muss der Parameter ''rtfLaden'' den Wert ''nein'' haben, was der Voreinstellung entspricht. Andernfalls würden keine RTF-Dokumente schülerindividuell automatisch geladen, sondern ein einzelnes RTF-Dokument über ein Auswahlfenster geladen, so wie dies bei einem normalen Serienbrief der Fall wäre.

Der Serienbrief analysiert keine Abschlüsse, welche durch eine Nachprüfung erreicht werden könnten. Wenn ein Brieftext Informationen zu Nachprüfungsmöglichkeiten enthalten soll, so sind Texte mit Auswahlfeldern zu empfehlen, welche nach dem Ausdruck manuell angekreuzt werden können (siehe RTF-Dokumente der EF am Gymnasium).

An dieser Stelle kann zudem eine Excel-Übersicht und eine LibreCalc-Übersicht heruntergeladen werden, welche die Konstellationen der Nichtversetzung an den einzelnen Schulformen und Gliederungen zeigt. Die Dateien enthalten zudem eine Übersicht darüber, welcher Serienbrief in welcher Konstellation geladen wird.

[[Medium:Schulform_Jahrgang_Nichtversetzte_Matrix.ods|LibreCalc - Schulform Jahrgang Nichtversetzte Matrix]]

[[Medium:Schulform_Jahrgang_Nichtversetzte_Matrix.xlsx|Excel - Schulform Jahrgang Nichtversetzte Matrix]]
```
