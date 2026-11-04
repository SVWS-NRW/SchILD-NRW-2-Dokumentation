# Ankreuzkompetenzen im ASV

Die folgenden Optionen werden nur benötigt, falls das Zeugnis auch einen "Ankreuzbereich" für das Arbeits- und Sozialverhalten enthält. Es gibt nämlich Schulen, bei denen ASV im Jahrgang 04 nicht als Text, sondern als "Ankreuzkompetenzen" ausgegeben werden. Das Hybridzeugnis kann bei Vorhandensein solcher Daten diese auch ausgeben, das beschränkt sich aber nur auf ASV Kompetenzen, sollen Ankreuzkompetenzen anderer Fächer ausgegeben werden, so ist das Ankreuzzeugnis zu verwenden.

## KeineASVAKK

Fall diese Option vorhanden ist, werden trotz Vorhandensein von ASV- Ankreuzkompetenzen diese nicht auf dem Zeugnis ausgegeben. Es gibt Schulen, die diese Angaben stattdessen auf einen separaten Beiblatt zum Zeugnis ausgeben, dann sollen die ASV-Ankreuzkompetenzen im eigentlichen Zeugnis nicht ausgegeben werden.

## Kopfhoehe

Hier kann die Höhe des „Fachkopfes“ festgelegt werden (in mm). Der Wert hängt von der Textlänge der verwendeten „Kompetenzstufen“ ab und muss experimentell ermittelt werden. Vorgabe ist „Kopfhoehe=30“.

![Abbildung zu Kopfhoehe aus der PDF-Anleitung auf Seite 33](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-33-bild-047.png)

## Zeilenhoehe

Hier kann die Höhe einer „Ankreuz-Zeile“ (in mm) eingestellt werden, gültige Werte sind 4 oder 5. Die Schriftgröße wird automatisch angepasst. Hinweis: Wenn die betreffende Kompetenzbeschreibung nicht in eine Zeile passt, erfolgt ein automatischer Umbruch, dadurch wird natürlich mehr Platz als der eingestellte Wert benötigt.

## FachKopfSichtbarE1

## FachKopfSichtbarE2

## FachKopfSichtbar03

## FachKopfSichtbar04

Wenn keine individuellen Angaben gemacht werden, werden die Texte für die Kompetenzstufen bei jedem „Fachkopf“ ausgegeben (siehe Abbildung oben). Dadurch wird natürlich relativ viel Platz verbraucht. Über die Optionen „FachKopfSichtbarE1=“ usw. kann für jeden Jahrgang individuell festgelegt werden, bei welchen Fächern der Kopf bzw. die Kompetenzstufen ausgegeben werden sollen. Dies sollte bei den Fächern der Fall sein, die auf einer Seite als erste erscheinen. Da dies aber von mehreren Faktoren abhängt (Reihenfolge der Fächer, Anzahl der Kompetenzbeschreibungen pro Fach, Höhe des Fachkopfes, „Zusammenhalten“ der einzelnen Fächer usw.), kann nicht automatisch entschieden werden, bei welchen Fächern die Texte für die Kompetenzstufen ausgegeben werden sollen. Zudem kann die Anzahl der Kompetenzbeschreibungen bei den einzelnen Jahrgängen sehr unterschiedlich sein. Daher kann über die Optionen „FachKopfSichtbarE1=“ usw. für jeden Jahrgang separat festgelegt werden, bei welchen Fächern der Kopf ausgegeben werden soll. Dabei sind die betreffenden Fachkürzel, getrennt durch Semikolon, anzugeben. Welche dies sind, muss für jeden

Jahrgang experimentell festgelegt werden. Das sollte natürlich erst dann geschehen, wenn endgültig festgelegt ist, welche Kompetenzbeschreibungen für die einzelnen Fächer zur Verfügung stehen sollen und in welcher Reihenfolge die Fächer auf dem Zeugnis ausgegeben werden.

Beispiel:

```ini
FachKopfSichtbarE1=D;E;M;SP;MU
```

Im Jahrgang E1 wird der Fachkopf bei den Fächern Deutsch, Englisch, Mathematik, Sport und Musik ausgegeben.

## Ankreuzsymbol

Über diesen Eintrag kann das „Ankreuzsymbol“ festgelegt werden. Gültige Einträge sind

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 34](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-34-bild-048.png)

```ini
Ankreuzsymbol=C
```

Es wird ein „Check-Häkchen“ angezeigt.

![Abbildung zu Ankreuzsymbol aus der PDF-Anleitung auf Seite 34](/bilder/zeugnisse/pdf-anleitungen/textzeugnisse-erstellen/seite-34-bild-049.png)

```ini
Ankreuzsymbol=X
```

Es wird ein „Kreuzchen“ angezeigt.

Wichtig: Möglicherweise muss bei dieser Option ein speziell angepasstes Deckblatt (Schullogo, persönliche Angaben) verwendet werden. Bitte beachten Sie hierzu die Hinweise in Abschnitt 4.1.

[Originalanleitung als PDF](/dateien/pdf/Grundschule_Textzeugnisse_mit_SchILD2_Anleitung.pdf)
