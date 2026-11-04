# Zeugnislayout konfigurieren

Über eine separate Konfigurationsdatei kann auch das Layout des Ankreuzzeugnisses angepasst werden, ohne dass die Vorlage selbst verändert werden muss. Diese Datei heißt „AnkreuzzeugnisEinstellungen.ini“ und muss sich im gleichen Verzeichnis wie die Zeugnisvorlage befinden. Wenn diese Datei vorhanden ist, wird sie auch im Report-Explorer angezeigt.

![Abbildung zu Anhang 2: Layout des Ankreuzzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 36](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-36-bild-069.png)

Wenn ein Doppelklick auf den Dateinamen ausgeführt wird, öffnet sich der Windows- Editor, damit kann dann die Datei bearbeitet werden. Hinweis: Bitte speichern Sie die Datei, wenn Sie Änderungen gemacht haben.

Der Inhalt der Datei sieht z.B. so aus:

![Abbildung zu Anhang 2: Layout des Ankreuzzeugnisses konfigurieren aus der PDF-Anleitung auf Seite 36](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-36-bild-070.png)

Die Datei ist in mehrere „Blöcke“ unterteilt, die jeweils eine Überschrift in eckigen Klammern haben. Wichtig: Diese Überschriften dürfen nicht verändert werden. Die einzelnen Blöcke haben einen oder mehrere Optionen, die nachfolgend beschrieben sind.

## `[Fachgruppenreihenfolge]`

Hier können Sie festlegen, in welcher Reihenfolge die einzelnen Fächergruppen bei der Ausgabe des Ankreuzzeugnisses erscheinen sollen. Hinweis: Die Kompetenzbeschreibungen für das Arbeits- und Sozialverhalten und eine evtl. vorhandene zusätzliche Zeugnisrubrik (siehe Kapitel 3.2) erscheinen im Zeugnisausdruck immer am Anfang vor den „echten“ Fächern.

Der Eintrag „Englisch“ gilt stellvertretend für alle Fremdsprachen, also auch z.B. für muttersprachlichen Unterricht in Türkisch.

Wichtig: Es dürfen nur die vorgegebenen Bezeichnungen verwendet werden (deren Reihenfolge kann aber verändert werden). Beispiel für korrekte Schreibweise: KunstMusik

Beispiel für falsche Schreibweise (da in separaten Zeilen) Kunst Musik

## `[Optionen]`

In diesem Block können weitere Optionen eingestellt werden. Falls eine Option nicht verwendet werden soll, kann dem jeweiligen Text ein Semikolon vorangestellt werden (Beispiel „Duplex“ in obiger Abbildung). Die einzelnen Einträge haben folgende Bedeutung:

## Duplex

Über diese Option kann ein doppelseitiger Druck aktiviert werden (sofern der verwendete Drucker dies unterstützt). Als Vorgabe wird dabei die Seite „an der langen Seite“ gedreht (gleichbedeutend mit „Duplex=Vertikal“). Bei manchen Druckern kann es aber evtl. notwendig sein, stattdessen „Duplex=Horizontal“ zu verwenden, falls das Ergebnis mit der Option „Duplex“ oder „Duplex=Vertikal“ nicht zufriedenstellend ist.

## MitJahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird zusätzlich zu der Angabe, welcher Klasse sein Kind besucht, auch der Jahrgang mit ausgegeben (also z.B. „Bärenklasse, Jahrgang 03“). Dies hat aber nur Auswirkungen, wenn sich das Kind im Jahrgang 03 oder 04 befindet, im Jahrgang E1, E2 und E3 hat diese Option keine Auswirkung, da automatisch das Schulbesuchsjahr mit ausgegeben wird.

## Blocksatz

Im Ankreuzzeugnis können neben den Kompetenzbeschreibungen zusätzlich auch zu jedem Fach Bemerkungstexte ausgeben werden, sofern diese beim jeweiligen Kind eingetragen wurden. Wenn die Option „Blocksatz“ aktiviert ist (also ohne vorangestelltes Semikolon) werden die Textfelder im Zeugnis als Blocksatz ausgegeben, ansonsten werden Sie linksbündig formatiert.

## Linien

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden im Zeugnis die einzelnen Kompetenztexte durch eine horizontale Linie getrennt:

![Abbildung zu Linien aus der PDF-Anleitung auf Seite 38](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-38-bild-071.png)

```ini
SchriftgroesseBemerkungen=11
```

Hier kann die Schriftgröße für die Bemerkungstexte festgelegt werden (z.B.
 `SchriftgroesseBemerkungen=11`).

```ini
NotenAbJahrgang=03
```

Über diesen Eintrag kann festgelegt werden, ab welchem Jahrgang (E1, E2, 03, 04) die Notenfelder auf dem Zeugnis angezeigt werden, Vorgabe ist Jahrgang 03.

## Zusammenhalten

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) werden die einzelnen Fächer auf dem Zeugnis zusammengehalten, es wird also kein automatischer Zeilenumbruch innerhalb eines Faches eingefügt, falls die Angaben nicht mehr vollständig auf eine Seite passen. Falls dieser Eintrag deaktiviert ist, werden bei einem Seitenumbruch die Spaltenüberschriften auf der neuen Seite erneut ausgegeben (sofern das für das betreffende Fach aktiviert ist, s.u.).

## Folgejahrgang

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird im „Versetzungstext“ anstelle der Folgeklasse der Folgejahrgang ausgegeben. Dies betrifft aber nur die Folgejahrgänge 03 und 04.

Beispiel: Folgejahrgang deaktiviert „..wird zum 01.08.2018' in die Klasse 03A versetzt.“

Folgejahrgang aktiviert „..wird zum 01.08.2018 in den Jahrgang 03 versetzt.“

## Vorname

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird der Vorname des jeweiligen Kindes im Kopfbereich jedes „Fachblockes“ ausgegeben. Beispiel:

![Abbildung zu Vorname aus der PDF-Anleitung auf Seite 39](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-39-bild-072.png)

## Kopfhoehe

Hier kann die Höhe des „Fachkopfes“ festgelegt werden (in mm). Der Wert hängt von der Textlänge der verwendeten „Kompetenzstufen“ ab und muss experimentell ermittelt werden. Vorgabe ist „Kopfhoehe=30“.

![Abbildung zu Kopfhoehe aus der PDF-Anleitung auf Seite 40](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-40-bild-073.png)

## Zeilenhoehe

Hier kann die Höhe einer „Ankreuz-Zeile“ (in mm) eingestellt werden, gültige Werte sind 4 oder 5. Die Schriftgröße wird automatisch angepasst. Hinweis: Wenn die betreffende Kompetenzbeschreibung nicht in eine Zeile passt, erfolgt ein automatischer Umbruch, dadurch wird natürlich mehr Platz als der eingestellte Wert benötigt.

## FachKopfSichtbarE1

## FachKopfSichtbarE2

## FachKopfSichtbar03

## FachKopfSichtbar04

Wenn keine individuellen Angaben gemacht werden, werden die Texte für die Kompetenzstufen bei jedem „Fachkopf“ ausgegeben (siehe Abbildung oben). Dadurch wird natürlich relativ viel Platz verbraucht. Über die Optionen „FachKopfSichtbarE1=“ usw. kann für jeden Jahrgang individuell festgelegt werden, bei welchen Fächern der Kopf bzw. die Kompetenzstufen ausgegeben werden sollen. Dies sollte bei den Fächern der Fall sein, die auf einer Seite als erste erscheinen. Da dies aber von mehreren Faktoren abhängt (Reihenfolge der Fächer, Anzahl der Kompetenzbeschreibungen pro Fach, Höhe des Fachkopfes, „Zusammenhalten“ der einzelnen Fächer usw.), kann nicht automatisch entschieden werden, bei welchen Fächern die Texte für die Kompetenzstufen ausgegeben werden sollen. Zudem kann die Anzahl der Kompetenzbeschreibungen bei den einzelnen Jahrgängen sehr unterschiedlich sein. Daher kann über die Optionen „FachKopfSichtbarE1=“ usw. für jeden Jahrgang separat festgelegt werden, bei welchen Fächern der Kopf ausgegeben werden soll. Dabei sind die betreffenden Fachkürzel, getrennt durch Semikolon, anzugeben. Welche dies sind, muss für jeden Jahrgang experimentell festgelegt werden. Das sollte natürlich erst dann geschehen, wenn endgültig festgelegt ist, welche Kompetenzbeschreibungen für die einzelnen Fächer zur Verfügung stehen sollen und in welcher Reihenfolge die Fächer auf dem Zeugnis ausgegeben werden.

Beispiel:

```ini
FachKopfSichtbarE1=D;E;M;SP;MU
```

Im Jahrgang E1 wird der Fachkopf bei den Fächern Deutsch, Englisch, Mathematik, Sport und Musik ausgegeben.

Hinweis: Wenn die betreffende Option deaktiviert wird (durch vorangestelltes Semikolon) wird der Kopf für alle Fächer ausgegeben.

## ASVSeite2

Wenn diese Option aktiviert ist (also ohne vorangestelltes Semikolon) wird der Bereich für „Arbeits- und Sozialverhalten“ erst auf der zweiten Seite dargestellt, d.h. auf der ersten Seite befinden sich nur der Schulname und die persönlichen Angaben (Name, Klasse usw.) des betreffenden Kindes.

## FächerAufNeuerSeite

Wenn diese Option aktiviert ist, werden die Kompetenzbeschreibungen der „echten“ Fächer (also alles außer „Arbeits- und Sozialverhalten“ und einm optionalen, frei definierbaren „Fach“) auf einer neuen Seite ausgegeben. Hinweis: Wenn Sie eine möglichst platzsparende Ausgabe erzielen möchten, sollten Sie die Optionen „Zusammenhalten“, „ASVSeite2“ und „FächerAufNeuerSeite“ deaktivieren.

## Unterschrift

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

Als Ausgabe erfolgt nur „Klassenleitung“ keine Vor- oder Nachnamen..

## UnterschriftMitStVertr

Über diesen Eintrag kann man festlegen ob der/die stellvertretende Klassenlehrer/in im Unterschriftenfeld zusätzlich zur Klassenlehrerin angezeigt werden soll.

```ini
UnterschriftMitStVertr=ja
```

Stellvertretender Klassenlehrer/in wird angezeigt.

```ini
UnterschriftMitStVertr=nein
```

Stellvertretender Klassenlehrer/in wird nicht angezeigt.

## FachPosition

Über diesen Eintrag kann die vertikale Position der Fächerbezeichnungen im Zeugnis festgelegt werden, gültige Einträge sind

```ini
FachPosition=Oben
```

und

```ini
Fachposition=Mitte
```

Wenn nichts angegeben ist, wird „FachPosition=Mitte“ (d.h. in der Mitte des Kopfbereiches) verwendet. Im Zeugnis sieht das dann so aus:

![Abbildung zu FachPosition aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-074.png)

```ini
FachPostion=Oben
```

![Abbildung zu FachPosition aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-075.png)

## Ankreuzsymbol

Über diesen Eintrag kann das „Ankreuzsymbol“ festgelegt werden. Gültige Einträge sind

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-076.png)

```ini
Ankreuzsymbol=C
```

Es wird ein „Check-Häkchen“ angezeigt.

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-077.png)

```ini
Ankreuzsymbol=X
```

Es wird ein „Kreuzchen“ angezeigt.

## SchulleitungText

Über diesen Eintrag kann ein individueller Text definiert werden, der anstelle des Namens der Schulleiterin oder des Schulleiters ausgegeben wird. Beispiel

```ini
SchulleitungText=Schulleitung/Vertretung
```

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-078.png)

Wenn der Eintrag fehlt, werden die bei den Schuldaten hinterlegten Angaben verwendet.

![Abbildung zu SchulleitungText aus der PDF-Anleitung auf Seite 42](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-42-bild-079.png)

## PositionSchulleitungText

Über diesen Eintrag kann festgelegt werden, wo das Unterschriftsfeld für die Schulleitung angezeigt wird, gültige Einträge sind „L“ (links) und „R“ (rechts). Das Unterschriftsfeld für die Klassenleitung wird auf der jeweils gegenüber liegenden Seite angezeigt. Beispiel:

```ini
PositionSchulleitungText=R
```

## ASVText

Über diesen Eintrag kann die Überschrift für das Arbeits- und Sozialverhalten definiert werden. Falls der Eintrag fehlt, wird „Arbeits- und Sozialverhalten“ ausgegeben. Beispiel:

```ini
ASVText=Arbeitsverhalten
```

Hinweis: Falls der Eintrag vorhanden ist, aber kein Text zugewiesen ist (also

```ini
ASVText=), wird keine Überschrift ausgegeben.
```

## LELSText

Über diesen Eintrag kann die Überschrift für „Lernentwicklung und Leistungsstand“ definiert werden. Falls der Eintrag fehlt, wird „Aussagen über die Lernentwicklung und den Leistungsstand“ ausgegeben. Beispiel:

```ini
LELSText=Leistungsstand in den Fächern
```

Hinweis: Falls der Eintrag vorhanden ist, aber kein Text zugewiesen ist (also

```ini
LELSText=), wird keine Überschrift ausgegeben.
```

## BemerkungText

Über diesen Eintrag kann die Überschrift für weitere fachbezogene Bemerkungen festgelegt werden. Beispiel:

```ini
BemerkungText=Bemerkungen
```

![Abbildung zu BemerkungText aus der PDF-Anleitung auf Seite 43](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-43-bild-080.png)

Hinweis: Falls der Eintrag fehlt, wird keine Überschrift ausgegeben. Wenn er aber vorhanden ist, aber keine fachbezogene Bemerkung eingegeben wurde, hängt es von dem Eintrag „BemerkungLeerText“ (s.u.) ab, ob die Überschrift ausgegeben wird.

## BemerkungLeerText

Über diesen Eintrag kann festgelegt werden, welcher Text ausgegeben werden soll, wenn keine fachbezogene Bemerkung vorhanden ist. Beispiel:

```ini
BemerkungLeerText=-keine-
```

![Abbildung zu BemerkungLeerText aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-081.png)

Hinweis: Der Eintrag wird nur berücksichtigt, wenn auch eine Überschrift für die fachbezogene Bemerkung vorhanden ist (s.o.).

## DeutschNotenEinzeln

Wenn dieser Eintrag vorhanden ist (bzw. nicht über ein Semikolon am Anfang auskommentiert ist), so werden Noten für die Fächergruppe „Deutsch“ nicht als „Block“ ausgegeben, sondern direkt unter den Kompetenzbeschreibungen des jeweiligen Faches:

![Abbildung zu DeutschNotenEinzeln aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-082.png)

Hinweis: Falls für das eigentliche Fach „Deutsch“ keine Kompetenzbeschreibungen vorhanden sind, erscheint die Note direkt unterhalb der Fach-Überschrift:

![Abbildung zu DeutschNotenEinzeln aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-083.png)

In diesem Fall sollte daher die Option „DeutschNoteEinzeln“ nicht verwendet werden. Dann werden die Noten blockweise ausgegeben:

![Abbildung zu DeutschNotenEinzeln aus der PDF-Anleitung auf Seite 44](/bilder/zeugnisse/pdf-anleitungen/ankreuzzeugnisse-erstellen/seite-44-bild-084.png)

[Originalanleitung als PDF](/dateien/pdf/Grundschule_Ankreuzzeugnisse_mit_SchILD2.pdf)
