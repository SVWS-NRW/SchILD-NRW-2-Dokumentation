---
title: "Serienbrief Nichtversetzte"
wiki_title: "Serienbrief Nichtversetzte"
wiki_page_id: 1408
wiki_revision: 5863
---

# Serienbrief Nichtversetzte

Der *Serienbrief Nichtversetzte* ist dafür vorgesehen, dass Schülerinnen und Schüler vor den Sommerferien ein Anschreiben erhalten, welches über die Nichtversetzung und mögliche Nachprüfungsfächer informiert. Damit jede Schülerin und jeder Schüler das korrekte Anschreiben erhält, analysiert der Serienbrief die Schulform, die Gliederung, den Jahrgang, das Versetzungskürzel, die Wiederholung und die Verweildauer.

<a id="Filtern_der_nichtversetzten_Schülerinnen_und_Schüler"></a>
<a id="Filtern_der_nichtversetzten_Sch.C3.BClerinnen_und_Sch.C3.BCler"></a>

## Filtern der nichtversetzten Schülerinnen und Schüler

Rufen Sie *Filter I ➜ Lernabschnitt / Leistungsdaten* auf. Wählen Sie dort die Versetzungsvermerke *Nichtversetzt* und *N.v., Nachprüfung möglich* auf. In manchen Fällen ist auch der Versetzungsvermerk *Abschluss* hinzuzunehmen.

Es werden daraufhin alle Schülerinnen und Schüler gefiltert, die ein Anschreiben erhalten sollen.

<a id="RTF-Anschreiben_anpassen"></a>

## RTF-Anschreiben anpassen

![Rtf-Dokumente](/bilder/wiki/rtf-dokumente-bcd3de75.png)
RTF-Dokumente

Im Ordner *Serienbriefe* finden sie den Unterordner *RTF-Serienbriefvorlagen ➜ Nichtversetzung*. Dieser enthält alle schulformspezifischen Anschreiben an nichtversetzte Schülerinnen und Schüler. Die Dateinamen enthalten verschiedene Informationen:

- Schulform oder Schulgliederung (z.B. GY)
- Jahrgangsbereich (z.B. 07-10)
- NV (nicht versetzt)
- NP (Nachprüfungsmöglichkeit)
- SV (Schulformwechsel)
- GW (Gliederungswechsel)
- SV (Schule verlassen)
- VJ (Brief an volljährige)

Jeder Brief kann inhaltlich in einem RTF-Editor (z.B. WordPad) an die eigenen Bedürfnisse angepasst werden. Die RTF-Editoren unterscheiden sich teils deutlich in der Menge des RTF-Codes, der erzeugt wird. Es ist zu empfehlen, hier auf einen sparsamen RTF-Editoren zurückzugreifen. Sie können RTF-Dokumente auch im Reportdesigner öffnen, bearbeiten und speichern.

<a id="Serienbrief_Nichtversetzte"></a>

## Serienbrief Nichtversetzte

![Nichtversetzung_Beispiel](/bilder/wiki/nichtversetzung-beispiel-1f09bad9.png)
Beispiel-Brief

Wenn der Serienbrief aufgerufen wird, analysiert dieser schülerspezifisch die Bedingungen der Nichtversetzung und die Folgen. Anhand des Analyseergebnisses wird das passende RTF-Dokument aufgerufen. Enthält das Dokument Abfragefelder zur Text- oder Datumseingabe, so werden diese einmalig abgefragt. In den RTF-Dokumenten sind hierzu entsprechende Platzhalter zu setzen. Solange identische Platzhalter verwendet werden, erfolgt die Abfrage auch in anderen RTF-Dokumenten nicht erneut. Möchte man in anderen RTF-Dokumenten andere Text- oder Datumseingaben vornehmen, so sind dort Platzhalter zu verwenden, die sich unterscheiden. Als Beispiel sei hier eine Schule genannt, welche die schriftlichen Nachprüfungen der SI und der SII an unterschiedlichen Tagen plant. Hier kann in den RTF-Dokumenten der SI der Platzhalter `$Eingabe|Datum|GY-07-10-NP: schriftliches Nachprüfungsdatum$` und in RTF-Dokumenten der SII der Platzhalter `$Eingabe|Datum|GY-EF-NP: schriftliches Nachprüfungsdatum$` hinterlegt werden. In diesem Fall erfolgen zwei gesonderte Abfragen des Datums für die RTF-Dokumente, da sich die Platzhalter unterscheiden.

Der Programmcode kann unter *Berechnungen* in der Ansicht *Verwendete Module* in der Prozedur *RtfNichtversetztAutomatischLaden* eingesehen werden. Der Code ist so strukturiert, dass individuelle Anpassungen leicht vorgenommen werden können. Hier können auch die Dateinamen der RTF-Dokumente definiert und sonderfälle hinterlegt werden.

<a id="Weitere_Informationen"></a>

## Weitere Informationen

Bei den Serienbrief handelt es sich um einen erweiterten Serienbrief an Erzieher. Damit der Serienbrief unterschiedliche RTF-Dokumente schülerindividuell einlesen kann, muss der Parameter *rtfLaden* den Wert *nein* haben, was der Voreinstellung entspricht. Andernfalls würden keine RTF-Dokumente schülerindividuell automatisch geladen, sondern ein einzelnes RTF-Dokument über ein Auswahlfenster geladen, so wie dies bei einem normalen Serienbrief der Fall wäre.

Der Serienbrief analysiert keine Abschlüsse, welche durch eine Nachprüfung erreicht werden könnten. Wenn ein Brieftext Informationen zu Nachprüfungsmöglichkeiten enthalten soll, so sind Texte mit Auswahlfeldern zu empfehlen, welche nach dem Ausdruck manuell angekreuzt werden können (siehe RTF-Dokumente der EF am Gymnasium).

An dieser Stelle kann zudem eine Excel-Übersicht und eine LibreCalc-Übersicht heruntergeladen werden, welche die Konstellationen der Nichtversetzung an den einzelnen Schulformen und Gliederungen zeigt. Die Dateien enthalten zudem eine Übersicht darüber, welcher Serienbrief in welcher Konstellation geladen wird.

[LibreCalc - Schulform Jahrgang Nichtversetzte Matrix](/dateien/wiki/schulform-jahrgang-nichtversetzte-matrix-50c8e079.ods)

[Excel - Schulform Jahrgang Nichtversetzte Matrix](/dateien/wiki/schulform-jahrgang-nichtversetzte-matrix-90b9c252.xlsx)

---

Quelle: [Serienbrief Nichtversetzte – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Serienbrief+Nichtversetzte&oldid=5863) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Serienbrief+Nichtversetzte&action=history)
