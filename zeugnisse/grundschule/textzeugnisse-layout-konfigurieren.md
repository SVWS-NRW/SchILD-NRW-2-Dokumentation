# Zeugnislayout konfigurieren

Über eine separate Konfigurationsdatei kann das Layout des Textzeugnisses angepasst werden, ohne dass die Vorlage selbst verändert werden muss. Diese Datei heißt „GrundschulzeugnisEinstellungen.ini“ und muss sich im gleichen Verzeichnis wie die Zeugnisvorlage befinden. Wenn diese Datei vorhanden ist, wird sie auch im Report-Explorer angezeigt.

![Abbildung zu Anhang 2: Layout des Textzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-27-bild-043.png)

Wenn ein Doppelklick auf den Dateinamen ausgeführt wird, öffnet sich der Windows- Editor, damit kann dann die Datei bearbeitet werden. Hinweis: Bitte speichern Sie die Datei, wenn Sie Änderungen gemacht haben.

Der Inhalt der Datei sieht z.B. so aus:

![Abbildung zu Anhang 2: Layout des Textzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 27](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-27-bild-044.png)

Die Datei ist in mehrere „Blöcke“ unterteilt, die jeweils eine Überschrift in eckigen Klammern haben. Wichtig: Diese Überschriften dürfen nicht verändert werden.

Die einzelnen Blöcke haben einen oder mehrere Optionen, die nachfolgend beschrieben sind.

### `[Textzeugnisreihenfolge]`

Hier können Sie festlegen, in welcher Reihenfolge die einzelnen Fächergruppen bei der Ausgabe als Textzeugnis erscheinen sollen. Der Eintrag „Englisch“ gilt stellvertretend für alle Fremdsprachen, also auch z.B. für muttersprachlichen Unterricht in Türkisch.

Wichtig: Es dürfen nur die vorgegebenen Bezeichnungen verwendet werden (deren Reihenfolge kann aber verändert werden). Beispiel für korrekte Schreibweise: KunstMusik

Beispiel für falsche Schreibweise( da in separaten Zeilen) Kunst Musik

### `[Notenzeugnisreihenfolge_Links]`

Im 4. Jahrgang wird die Zeugnisvorlage automatisch zu einem Notenzeugnis (mit zwei Spalten für die Fächergruppen). Hier kann die Reihenfolge in der linken Spalte festgelegt werden. Ansonsten gelten die gleichen Anmerkungen wie für den Block [Textzeugnisreihenfolge].

### `[Notenzeugnisreihenfolge_Rechts]`

Hier kann die Reihenfolge der Fächergruppen in der rechten Spalte festgelegt werden. Wichtig: Eine Fächergruppe darf nicht in beiden Blöcken (für linke und rechte Spalte) vorkommen.

### `[Optionen]`

In diesem Block können weitere Optionen eingestellt werden. Falls eine Option nicht verwendet werden soll, kann dem jeweiligen Text ein Semikolon vorangestellt werden (Beispiel „Duplex“ in obiger Abbildung). Die einzelnen Einträge haben folgende Bedeutung:

### Duplex

Über diese Option kann ein doppelseitiger Druck aktiviert werden (sofern der verwendete Drucker dies unterstützt). Als Vorgabe wird dabei die Seite „an der langen Seite“ gedreht (gleichbedeutend mit „Duplex=Vertikal“). Bei manchen Druckern kann es aber evtl. notwendig sein, stattdessen „Duplex=Horizontal“ zu verwenden, falls das Ergebnis mit der Option „Duplex“ oder „Duplex=Vertikal“ nicht zufriedenstellend ist.

### MitJahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird zusätzlich zu der Angabe, welcher Klasse sein Kind besucht, auch der Jahrgang mit ausgegeben (also z.B. „Bärenklasse, Jahrgang 03“). Dies hat aber nur Auswirkungen, wenn sich das Kind im Jahrgang 03 oder 04 befindet, im Jahrgang E1, E2 und E3 hat diese Option keine Auswirkung, da automatisch das Schulbesuchsjahr mit ausgegeben wird.

### Blocksatz

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden die Textfelder im Zeugnis als Blocksatz ausgegeben, ansonsten werden Sie linksbündig formatiert.

```ini
SchriftgroesseBemerkungen=11
```

Hier kann die Schriftgröße für die Bemerkungstexte festgelegt werden (z.B.
 `SchriftgroesseBemerkungen=11`).

```ini
NotenAbJahrgang=03
```

Über diesen Eintrag kann festgelegt werden, ab welchem Jahrgang (E1, E2, 03, 04) die Notenfelder auf dem Zeugnis angezeigt werden, Vorgabe ist Jahrgang 03.

### Zusammenhalten

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden die einzelnen Fächer auf dem Zeugnis zusammengehalten, es wird also kein automatischer Zeilenumbruch innerhalb eines Faches eingefügt, falls die Angaben nicht mehr vollständig auf eine Seite passen. Das kann aber dazu führen, dass mehr Platz verbraucht wird, weil beim Druck die Bemerkungstexte zu einem Fach dann komplett auf die nächste Seite verschoben werden.

### ASVSeite2

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird der Bereich für „Arbeits- und Sozialverhalten“ erst auf der zweiten Seite dargestellt, d.h. auf der ersten Seite befinden sich nur der Schulname und die persönlichen Angaben (Name, Klasse usw.) des betreffenden Kindes.

### FächerAufNeuerSeite

Wenn diese Option aktiviert ist, werden die Kompetenzbeschreibungen der „echten“ Fächer (also alles außer „Arbeits- und Sozialverhalten“ und einm optionalen, frei definierbaren „Fach“) auf einer neuen Seite ausgegeben. Hinweis: Wenn Sie eine möglichst platzsparende Ausgabe erzielen möchten, sollten Sie die Optionen „Zusammenhalten“, „ASVSeite2“ und „FächerAufNeuerSeite“ deaktivieren.

### Folgejahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird im „Versetzungstext“ anstelle der Folgeklasse der Folgejahrgang ausgegeben. Dies betrifft aber nur die Folgejahrgänge 03 und 04.

Beispiel: Folgejahrgang deaktiviert „..wird zum 01.08.2018' in die Klasse 03A versetzt.“

Folgejahrgang aktiviert „..wird zum 01.08.2018 in den Jahrgang 03 versetzt.“

### Unterschrift

Über diesen Eintrag kann das „Namensformat“ bei den Unterschriften für Schulleitung und Klassenleitung festgelegt werden. Folgende Einträge sind möglich:

```ini
Unterschrift=VN
```

Die Ausgabe erfolgt als „Vorname Nachname“ (z.B. Monika Meyer, Klassenlehrerin)

```ini
Unterschrift=NV
```

Die Ausgabe erfolgt als „Nachname, Vorname“ (z.B. Meyer, Monika, Klassenlehrerin)

```ini
Unterschrift=N
```

Die Ausgabe erfolgt nur als Nachname (z.B. Meyer, Klassenlehrerin) Das ist auch die Vorgabe, wenn kein Eintrag gefunden wird.

```ini
Unterschrift=ON
```

Als Ausgabe erfolgt nur „Klassenleitung“ keine Vor- oder Nachnamen.

### UnterschriftMitStVertr

Über diesen Eintrag kann man festlegen ob der/die stellvertretende Klassenlehrer/in im Unterschriftenfeld zusätzlich zur Klassenlehrerin angezeigt werden soll.

```ini
UnterschriftMitStVertr=ja
```

Stellvertretender Klassenlehrer/in wird angezeigt.

```ini
UnterschriftMitStVertr=nein
```

Stellvertretender Klassenlehrer/in wird nicht angezeigt.

### SchulleitungText

Über diesen Eintrag kann ein individueller Text definiert werden, der anstelle des Namens der Schulleiterin oder des Schulleiters ausgegeben wird. Beispiel

```ini
SchulleitungText=Schulleitung/Vertretung
```

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 30](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-30-bild-045.png)

Wenn der Eintrag fehlt, werden die bei den Schuldaten hinterlegten Angaben verwendet.

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 31](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-31-bild-046.png)

### PositionSchulleitungText

Über diesen Eintrag kann festgelegt werden, wo das Unterschriftsfeld für die Schulleitung angezeigt wird, gültige Einträge sind „L“ (links) und „R“ (rechts). Das Unterschriftsfeld für die Klassenleitung wird auf der jeweils gegenüber liegenden Seite angezeigt. Beispiel:

```ini
PositionSchulleitungText=R
```

### ASVText

Über diesen Eintrag kann die Überschrift für das Arbeits- und Sozialverhalten definiert werden. Falls der Eintrag fehlt, wird „Arbeits- und Sozialverhalten“ ausgegeben. Beispiel:

```ini
ASVText=Arbeitsverhalten
```

Hinweis: Falls der Eintrag vorhanden ist, aber kein Text zugewiesen ist (also

```ini
ASVText=), wird keine Überschrift ausgegeben.
```

### LELSText

Über diesen Eintrag kann die Überschrift für „Lernentwicklung und Leistungsstand“ definiert werden. Falls der Eintrag fehlt, wird „Aussagen über die Lernentwicklung und den Leistungsstand“ ausgegeben. Beispiel:

```ini
LELSText=Leistungsstand in den Fächern
```

Hinweis: Falls der Eintrag vorhanden ist, aber kein Text zugewiesen ist (also

```ini
LELSText=), wird keine Überschrift ausgegeben.
```

### Jg4AufEinerSeite

Über diesen Eintrag kann gesteuert werden, dass das Notenzeugnis für den Jahrgang 04 auf einer Seite ausgegeben werden soll. Wenn diese Option aktiviert ist, hat das folgende Auswirkungen:

- Die Schriftgröße für die Bemerkungstexte wird automatisch auf 10 Punkte gesetzt.
- Der vertikale Abstand zwischen den einzelnen Fächern wird reduziert. Zusätzlich sind folgende Bedingungen zu beachten:
- Die Zeugnisbemerkungen dürfen max. 7 Zeilen umfassen.
- Es dürfen keine fachbezogenen Bemerkungen vorhanden sein.
- Eine ausführliche Erläuterung für die „Empfehlung zur Wahl der Schulformen in der Sekundarstufe I“ ist nicht möglich.

### NachnameInVersetzungsvermerk

Wenn dieser Eintrag vorhanden ist, wird auch der Nachname im Versetzungsvermerk ausgegeben ("Max Müller wird in die Klasse 03 versetzt")

### WiderspruchInEingangsphaseAusblenden

Wenn dieser Eintrag vorhanden ist, wird der Widerspruchshinweis auf der letzen Seite unten ("Gegen die Entscheidung, Max Müller nicht zu versetzen...") bei Schülern der Eingangsphase nicht ausgegeben.

### WiderspruchInHalbjahr1Ausblenden

Wenn dieser Eintrag vorhanden ist, wird der Widerspruchshinweis auf der letzen Seite unten ("Gegen die Entscheidung, Max Müller nicht zu versetzen...") im 1. Halbjahr nicht ausgegeben.

### SonderpaedagogeText

Wenn ein Kind zusätzlich sonderpädagogisch betreut wird und die entsprechende Betreuungsperson auch aus dem Zeugnis unterschreiben soll, so kann hier der Name festgelegt werden. Eine "Kind-bezogene" Verwaltung der Sonderpädogogen ist derzeit noch nicht möglich, falls es unterschiedliche Betreuungspersonen gibt, müssen die Zeugnisse getrennt (mit entsprechender Anpassung der Option "SonderpaedagogeText") ausgegeben werden.

### WiederbeginnUnterrichtJg4

Hier kann ein Text definiert werden, der im 2. Halbjahr des Jahrganges 04 bei "Wiederbeginn des Unterrichtes" ausgegeben werden soll. Beispiel: WiederbeginnUnterrichtJg4=Laut Mitteilung der aufnehmenden Schule"

### Noten2spaltigAbJahrgang

Hier kann festgelegt werden, ab welchem Jahrgang die Fächer und Noten 2spaltig ausgegeben werden. Wenn nicht eingetragen ist, erfolgt dies ab dem Jahrgang 04 Beispiel: Noten2spaltigAbJahrgang=03

### BemerkungenAufNeuerSeite

Wenn dieser Eintrag vorhanden ist, wird für die Bemerkungen, die hinter den Fächern und Noten ausgegeben werden, eine neue Seite erzeugt. Das betrifft z.B. allgemeine Zeugnisbemerkungen, Bemerkungen zur Versetzung, die Unterschriftsfelder usw.

[Originalanleitung als PDF](/dateien/pdf/Grundschule_Textzeugnisse_mit_SchILD2_Anleitung.pdf)
