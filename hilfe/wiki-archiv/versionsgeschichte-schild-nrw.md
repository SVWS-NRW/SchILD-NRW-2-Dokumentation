---
title: "Versionsgeschichte Schild-NRW"
---

# Versionsgeschichte Schild-NRW


<a id="Version_2.0.36.4_vom_18.08.2026"></a>

## Version 2.0.36.4 vom 18.08.2026

<a id="Schulformunabhängige_Änderungen"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen"></a>

### Schulformunabhängige Änderungen

In der statkue.mdb wurde eine nichtunterrichtliche Tätigkeit ergänzt.

<a id="Version_2.0.36.2_vom_30.07.2026"></a>

## Version 2.0.36.2 vom 30.07.2026

<a id="Schulformunabhängige_Änderungen_2"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_2"></a>

### Schulformunabhängige Änderungen

In der statkue.mdb und schulver.mdb wurden fehlende Einträge ergänzt.

Die Dateien ASDStatistik.dll und ASDTABS.MDB, die für den Export der Statistikdaten und für die Gesamtprüfung notwendig sind, wurden aktualisiert.

<a id="Version_2.0.35.2_vom_15.08.2025"></a>

## Version 2.0.35.2 vom 15.08.2025

<a id="Schulformunabhängige_Änderungen_3"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_3"></a>

### Schulformunabhängige Änderungen

- In der statkue.mdb und schulver.mdb wurden fehlende Einträge ergänzt.
- Im Reportexplorer kann jetzt nach Reportvorlagen gesucht werden.
- Über Filter I können nun auch im Reiter Lernabschnitt/ Leistungsdaten SuS gefiltert werden, bei denen ein Sonderpädagogen eingetragen ist.

<a id="Sekundarstufe_II"></a>

### Sekundarstufe II

Die Abitur-Gruppenprozesse sind jetzt wieder verfügbar, wenn alle SuS in der aktuellen Auswahl in der Q1 oder Q2 (bzw. in einem gleichbedeutenden Jahrgang) sind.

<a id="Gesamtschulen_und_Sekundarschulen"></a>

### Gesamtschulen und Sekundarschulen

- die Niveaustufen im Fach Biologie flossen nicht korrekt in die Prognoseberechnung ein. Dies ist nun korrigiert.

<a id="Berufskolleg"></a>

### Berufskolleg

- die Gliederungen A17, A18 und A19 stehen nun unter Schulverwaltung/Eigene Schule zur Verfügung.

<a id="Version_2.0.34.24_vom_06.05.2025"></a>

## Version 2.0.34.24 vom 06.05.2025

<a id="Schulformunabhängige_Änderungen_4"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_4"></a>

### Schulformunabhängige Änderungen

- Der BAN-Export wurde den Anforderungen entsprechend angepasst. Nähere Hinweise zum Export für das BAN-Portal finden Sie hier:

[https://wiki.svws.nrw.de/mediawiki/index.php?title=Export_f%C3%BCr_BAN-Portal](/schild2/import-export-statistik/export-fuer-ban-portal)

- Wird eine Klasse im Klassenkatalog neu angelegt, aber der Prozess abgebrochen, so entstehen Fehleinträge im Klassenkatalog (Klassen mit Kürzel \$\$\$\$). Diese Fehleinträge können nun über die Option "Extras/Automatische Prozesse ausführen" gelöscht werden.
- In den Programmeinstellungen steht jetzt für den E-Mail-Versand die Option "E-Mails an mehrere Empfänger immer einzeln versenden" zur Verfügung. Wenn diese Option aktiviert ist, wird eine E-Mail, die an mehrere Empfänger adressiert ist, nicht als "Sammel-E-Mail" verschickt, sondern für jeden Empfänger als eine Einzel-E-Mail.
- In der statkue.mdb und schulver.mdb wurden fehlende Einträge ergänzt. Insbesondere kann nun die Abgangsart R (Ohne Abschluss) für Abgänger aus der Deutschförderung ausgewählt werden.
- Beim Filter I wird nun im Reiter Lernabschnitt/Leistungsdaten für das Feld Abschluss auch das Kürzel der Prüfungsordnung angezeigt.
- Es steht nun ein Gruppenprozess "Alle Vornamen anpassen" zur Verfügung. Durch diesen Prozess wird der Rufname in das Feld "Alle Vornamen" übertragen, sofern das Feld "Alle Vornamen" nicht leer ist und der Rufname dort noch nicht vorhanden ist. Dies ist eine Vorbereitung für den Umstieg nach SchILD3. Nähere Informationen finden Sie im SchILD-NRW3 Wiki:

<https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Alle_Vornamen_anpassen_(Gruppenprozesse_Allgemein)>

Hinweis: Die Einträge der Vornamen können auch nach dem Umstieg angepasst werden, sofern eine Korrektur notwendig ist.

- Im Reiter Einwilligungen wird eine Ergebnis-Spalte angezeigt, um die Option "Abgefragt" und "Zustimmung" auszuwerten.

<a id="Gymnasium"></a>

### Gymnasium

Für die Jahrgangsstufen EF, Q1 und Q2 war die Ansicht im ZP10 Reiter fehlerhaft. Dies ist nun korrigiert.

<a id="Reportdesigner"></a>

### Reportdesigner

In der Pipeline "SchildUmgebung" wurden neue Datenfelder definiert, um das in der Reporting eingestellte Schuljahr und Halbjahr einfacher ausdrucken zu können. Möchte man z.B. einen Leistungsbericht aus "2023/24 2. Hj." drucken, so kann diese Information mit den neuen Datenfeldern bequem ausgegeben werden.

<a id="Version_2.0.34.16_vom_29.01.2025"></a>

## Version 2.0.34.16 vom 29.01.2025

<a id="Schulformunabhängige_Änderungen_5"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_5"></a>

### Schulformunabhängige Änderungen

- Beim Import der Datei SchuelerVermerke.dat kam es zu fehlerhaften Einträgen, wenn Schüler in der Importdatei aufgelistet wurden, die nicht in der SchILD-Datenbank vorhanden vorhanden waren. Dieser Bug ist nun behoben.
- Ein Bug beim Import der SchuelerFehlstunden.dat wurde korrigiert.

<a id="Sekundarstufe_II_2"></a>

### Sekundarstufe II

- Der Reiter ZP10 ist nun ab dem Jahrgang 10.2 durchgehend sichtbar. Somit können auch nachträglich Noten ergänzt oder geändert werden. Der Reiter für die zentralen Prüfungen am Ende der Einführungsphase wurde abgeschafft. Da es sich bei diesen Prüfungen lediglich um eine Klausur handelt, können die Noten als Teilleistung des jeweiligen Faches eingetragen werden. Es wird empfohlen, den Export der ZP10-Ergebnisse über den Report aus der Basissammlung zu generieren.

<a id="Gesamtschulen_und_Sekundarschulen_2"></a>

### Gesamtschulen und Sekundarschulen

- Die überarbeitete Prognoseberechnung aus PM2 wurde in SchILD integriert.

<a id="Berufskolleg_2"></a>

### Berufskolleg

- Der Import der Datei SchuelerAdressen.dat erzeugte bei der Aktualisierung eines Betreuerdatensatzes eine Fehlermeldung. Dies ist nun korrigiert.

<a id="Version_2.0.34.2_vom_06.08.2024"></a>

## Version 2.0.34.2 vom 06.08.2024

<a id="Schulformunabhängige_Änderungen_6"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_6"></a>

### Schulformunabhängige Änderungen

- In der statkue.mdb und schulver.mdb wurden fehlende Einträge ergänzt.
- Die Dateien ASDStatistik.dll und ASDTABS.MDB, die für den Export der Statistikdaten und für die Gesamtprüfung notwendig sind, wurden aktualisiert.

<a id="Gesamtschule"></a>

### Gesamtschule

- Für die Jahrgangsstufe 09 wurde der Eintrag im Feld "Vers.-Vermerk" korrigiert. Nach der Versetzungsberechnung wird der Wert nun auf "Versetzt" gesetzt, sofern der Schüler mindestens den Abschluss ESA erreicht hat.

<a id="Gymnasium_2"></a>

### Gymnasium

- Die Berechnung der Sprachenfolge wurde für den Jahrgang 10 korrigiert.

<a id="Berufskolleg_3"></a>

### Berufskolleg

- Für die Gliederungen B08, B09 und B10 wird nun im Reiter aktuelles Halbjahr der Default-Wert für das Feld "Fachpraktischer Anteil ausreichend" auf "Ja" gesetzt.
- Für die Gliederungen B08, B09 und B10 wurden folgende Bugs bei der Abschlussberechnung behoben:

\- Die Berechnung für die vorläufige Abschlussnote Reiter BK-Abschluss wurde korrigiert.

\- Die Abschlussberechnung im Reite BK-Abschluss wurde korrigiert.

- Für die Abschlussart 4G unter Schulbesuch/Entlassung von eigener Schule wurde im Feld EntlassartText eine falsche Entlassfloskel gespeichert. Dadurch wurde beispielsweise im Schülerstammblatt ein falscher Text als Entlassart ausgegeben. Dies ist nun korrigiert.

<a id="Version_2.0.33.8_vom_31.05.2024"></a>

## Version 2.0.33.8 vom 31.05.2024

<a id="Gymnasium/_Gesamtschule"></a>
<a id="Gymnasium.2F_Gesamtschule"></a>

### Gymnasium/ Gesamtschule

- Eintragungen im Feld Versetzungsvermerk und Abschluss, die nach der Versetzungsberechnung im aktuellen Halbjahr gesetzt werden, wurden für den Jahrgang 10 korrigiert.

<a id="Berufskolleg_4"></a>

### Berufskolleg

- Unter Schulbesuch fehlten bei Art des Abschlusses die Auswahloptionen. Dieser Bug ist nun behoben.
- Der BAN-Export wurde angepasst. Der Eintrag der ASD-Kürzel für Abschlüsse, die im BAN-Portal nicht erhoben werden, bleiben nun leer.

<a id="Version_2.0.33.6_vom_23.05.2024"></a>

## Version 2.0.33.6 vom 23.05.2024

<a id="Schulformunabhängige_Änderungen_7"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_7"></a>

### Schulformunabhängige Änderungen

- Ein Bug, der bei dem Hinzufügen von Zeugnisbemerkungen über eine Gruppenprozess hinsichtlich der Namensersetzung auftrat, wurde korrigiert.
- Bei der Abschlussberechnung/ Versetzungsberechnung für die Jahrgänge 6 bis 9 wurden seit dem letzten Update für die Fächer M, D und E (ZP10-Fächer) keine Nachprüfungsmöglichkeiten angeboten. Dies ist nun korrigiert.
- In der schulver.mdb wurden neu gegründeten Schulen für das Schuljahr 2024/25 ergänzt.

Hinweis: Hier wird in den Sommerferien eine weitere Aktualisierung erwartet.

- Fehlende Kursarten in der Datei "Hauptkursarten.txt" führten dazu, dass mangelhafte Leistungen im ersten Halbjahr nicht automatisch im zweiten Halbjahr gemahnt wurden. Die Datei wird mit dem Update erneut ausgerollt.

<a id="Berufskolleg/Weiterbildungskolleg"></a>
<a id="Berufskolleg.2FWeiterbildungskolleg"></a>

### Berufskolleg/Weiterbildungskolleg

- Das Feld "Klassenart" ist nun auch für die Schulform WBK unter Individualdaten I sichtbar. Diese Anpassung ist auf Änderungen in der kommenden Haupterhebung zurückzuführen. Nähere Hinweise finden Sie hier: <https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D86>
- Beim Abitur wurde ein Detail bei der Prüfung der fortgeführten Fremdsprache und der neu einsetzenden Fremdsprache überarbeitet.

<a id="Vorbereitung_zur_kommenden_Haupterhebung_der_amtlichen_Schuldaten"></a>

### Vorbereitung zur kommenden Haupterhebung der amtlichen Schuldaten

- Änderungen zum Vorjahr, die aus der Schulmail vom 17.04.24 hervorgehen, wurden bereits in SchILD eingepflegt. Informationen zu den Anpassungen finden Sie hier:

<https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D86>

Hinweis: Der Eintrag "*Deutschförderklasse (gemäß BASS 13-63 Nr. 3, Nummer 3.5.1)*" unter Klassenart wurde ersetzt durch "*Deutschförderklasse – auslaufend (gemäß BASS 13-63 Nr. 3, Nummer 3.5.1)*". Dieser Eintrag muss bis zum nächsten Update gemäß der Vorgaben aus der Schulmail vom 17.04.24 angepasst werden.

<a id="Version_2.0.33.4_vom_10.04.2024"></a>

## Version 2.0.33.4 vom 10.04.2024

<a id="Berufskolleg_5"></a>

### Berufskolleg

Beim BAN-Export wurde bei fehlendem Abschlusseintrag im Reiter aktuelles Halbjahr "Kein Abschluss" in die Exportdatei eingetragen. Nun wird für diesen Fall der Eintrag "Höchster allgemeinbildender Abschluss" aus dem Reiter Schulbesuch exportiert.

<a id="Version_2.0.33.2_vom_08.04.2024"></a>

## Version 2.0.33.2 vom 08.04.2024

<a id="Schulformunabhängige_Änderungen_8"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_8"></a>

### Schulformunabhängige Änderungen

- Es steht nun ein Export zur Verfügung, um Schülerinnen und Schüler im BAN-Portal anzumelden. Eine Anleitung finden Sie hier: [https://wiki.svws.nrw.de/mediawiki/index.php?title=Export_f%C3%BCr_BAN-Portal](/schild2/import-export-statistik/export-fuer-ban-portal)
- Die Ersetzung der Platzhalter bei der Floskeleingabe wurde überarbeitet. Es kann nun angegeben werden, dass der Vorname nach einer festgelegten Anzahl erneut im Floskeltext genannt wird.

<a id="Gymnasium_3"></a>

### Gymnasium

- Beim Ausführen einiger ZP10-Gruppenprozesse kam es zu einer Fehlermeldung. Dies ist nun korrigiert.
- Versetzungs- und Abschlussberechnungen für den Jahrgang 10 wurden geprüft und angepasst.

<a id="Gesamtschulen_und_Sekundarschulen_3"></a>

### Gesamtschulen und Sekundarschulen

- Der ZP10 Reiter bleibt nun auch für die Folgejahrgänge EF - Q2 sichtbar.
- Die Spalte ZP10 wurde aus Redundanzgründen aus dem akt. Halbjahr entfernt.
- Ein Bug bezüglich eines Spezialfalls in der Sprachenfolge, der im Zusammenhang mit der Abiturberechnung aufgetreten ist, wurde behoben.
- Ein Bug im Abitur-Gruppenprozess in Zusammenhang mit bilingualem Unterricht wurde korrigiert.

<a id="Förderschulen"></a>
<a id="F.C3.B6rderschulen"></a>

### Förderschulen

Für Primarstufen an Förderschulen steht nun ein Notenexport für das GS-Notenmodul zur Verfügung.

<a id="Weiterbildungskolleg"></a>

### Weiterbildungskolleg

- Beim Semesterwechsel über die Schaltfläche "Schulverwaltung/Schule bearbeiten/ Semesterwechsel durchführen" wurde die Schule nicht ins neue Semester übertragen. Dies ist nun korrigiert.

<a id="Berufskolleg_6"></a>

### Berufskolleg

- Für den Abschluss B08 (Kinderpflege) wurde ein Bug bei der Abschlussprüfung behoben.

<a id="Version_2.0.32.8_vom_14.01.2024"></a>

## Version 2.0.32.8 vom 14.01.2024

<a id="Schulformunabhängige_Änderungen_9"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_9"></a>

### Schulformunabhängige Änderungen

- Das Versenden von Mails über die Liste "Erzieher mit schulinternen Funktionen" führte zu einer Fehlermeldung. Dies ist nun behoben.
- Beim Excel-Export von Schülerdaten können nun auch Angaben zum stellvertretenden Klassenlehrer exportiert werden.
- Beim Export von Schülerbasisdaten über die Schnittstelle Schild-NRW wird nun für den Eintrag divers das Kürzel "d" statt "5" und für den Eintrag Ohne Angabe das Kürzel "o" statt "6" exportiert.
- Beim Excel-Export von Schülerdaten kann nun auch ein Ausgabewert für divers definiert werden.
- Für die Datenquelle „Wahlpflichtbereich“ wurde ein Ereignis hinzugefügt, sodass nun auch Ankreuzkompetenzen für diese Fächergruppe über einen Report geladen werden können.

<a id="Gesamtschulen_und_Sekundarschulen_4"></a>

### Gesamtschulen und Sekundarschulen

- Die überarbeitete Prognoseberechnung aus PM2 wurde in SchILD integriert.
- Wenn von der Prognoseberechnung das Ergebnis „MSAQ“ ermittelt wurde, so wurde dies nicht korrekt in der Datenbank gespeichert, nun behoben.
- Das Ergebnis der Abschlussberechnung im Reiter aktuelles Halbjahr wurde als html-Quelltext abgebildet. Dies ist nun korrigiert

<a id="Grundschulen"></a>

### Grundschulen

- Es ist jetzt auch möglich, die Bemerkungen für die Übergangsempfehlung Jg. 05 über die Schnittstelle SchILD-NRW zu exportieren und zu importieren.

<a id="Förderschulen_2"></a>
<a id="F.C3.B6rderschulen_2"></a>

### Förderschulen

- An Förderschulen kann nun auch für die Jahrgangsstufen 01 bis 04 die Prüfungsordnung AOSF eingetragen werden.

<a id="Version_2.0.32.2_vom_03.11.2023"></a>

## Version 2.0.32.2 vom 03.11.2023

<a id="Schulformunabhängige_Änderungen_10"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_10"></a>

### Schulformunabhängige Änderungen

- Beim Excel-Export von Daten der Erziehungsberechtigten kann nun auch die zugehörige Schüler_ID, sowie die Staatsangehörigkeit exportiert werden.
- Das Fenster für den "Report-Schnellzugriff" kann jetzt über die Tastenkombination \<Strg\>\<Alt\>P angezeigt werden.
- Beim Gruppenprozess "Individualdaten ändern" wurde auf dem Karteireiter "Lernabschnitte" in den Auswahllisten für Klassenlehrer und stv. Klassenlehrer nur die Nachnamen angezeigt. Das konnte bei Namensgleichheit zu falschen Zuordnungen führen. Es werden jetzt bei der Auswahl Nach- und Vorname sowie das Kürzel angezeigt.
- Beim Gruppenprozess "Individualdaten ändern" kann auf dem Karteireiter "Lernabschnitte" jetzt auch ein Sonderpädagoge gruppenweise zugeordnet werden.
- Der Mailversand an zu vielen Adressaten führt zum Verweigern des E-Mail-Dienstes. Über einen Eintrag in der Datei „Admin.ini“ (im Programmverzeichnis) kann nun die Anzahl der Empfänger einer Mail begrenzt werden. Beim Überschreiten der angegebenen Empfängeranzahl erfolgt der Mailversand über mehrere E-Mails mit gleichem Inhalt.

Eintrag in der Admin.ini:

\[Email\]

MaxEmails=100

<a id="Gesamtschulen"></a>

### Gesamtschulen

- In der APO-SI gab es Änderungen für Schülerinnen und Schüler der Gesamt- und (teil)-integrierten Sekundarschulen, die ab dem 01.08.2020 in die Jahrgangsstufe 5 übergegangen sind. Um dies in SchILD abzubilden wurde die Prüfungsordnung APO-SI 20 in SchILD eingepflegt. Die "neue" Prüfungsordnung muss wie folgt für die Jahrgangsstufe 5 bis 8 eingetragen werden:
  - Öffnen Sie unter Schulverwaltung die Klassen-/Versetzungstabellen.
  - Ändern Sie hier die Prüfungsordnung für alle Klassen der Jahrgangsstufen 5 bis 8. Wählen Sie für jede Klasse die Option "Aktuelle Angaben in Schülerdaten übernehmen" aus, sodass die Prüfungsordnung APO-SI 20 auch bei den Schülern hinterlegt ist.

<a id="Gymnasium_4"></a>

### Gymnasium

- Die Bezeichnung der Prüfungsordnung für die Oberstufe wurde geändert von APO-GOSt(B)10/G8 nach APO-GOSt(B)10.

<a id="Grundschule"></a>

### Grundschule

- Das Initialkennwort zum Bearbeiteten der Notendateien kann nun auch ohne Mailversand erstellt und als Liste exportiert werden (Unter Schulverwaltung/Lehrkräfte; dann rechte Maustaste).

<a id="MariaDB_und_MySQL-Datenbanken"></a>

### MariaDB und MySQL-Datenbanken

- Datenbank-Tabellen wurden bezüglich Groß- und Kleinschreibung angepasst.

<a id="Version_2.0.31.2_vom_04.08.2023"></a>

## Version 2.0.31.2 vom 04.08.2023

<a id="Schulformunabhängige_Änderungen_11"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_11"></a>

### Schulformunabhängige Änderungen

- In der statkue.mdb und schulver.mdb wurden fehlende Einträge ergänzt.
- Die Datei ASDStatistik.dll von IT-NRW, die für den Export der Statistikdaten und die Gesamtprüfung zuständig ist, wurde aktualisiert.
- Unter Schulverwaltung -\> schülerspezifische Kursarten ist nun der zur Kursart gehörige Statistikschlüssel sichtbar. Dies erleichtert die richtige Wahl der Kursart, die der Schlüsseltabelle entnommen werden kann. Sollte die Bezeichnung einer Kursart nicht zum Schlüssel bzw. Kürzel passen, muss die Kursart einmal gelöscht und anschließend wieder hinzugefügt werden. Eine detaillierte Beschreibung findet man hier: <https://schulverwaltungsinfos.nrw.de/svws/forum/viewtopic.php?p=34398#p34398>
- In diesem Zusammenhang sei darauf hingewiesen, dass sich einige Kursbezeichnungen geändert haben. So wird an Gymnasien beispielsweise die Bezeichnung F3 in anderem Zusammenhang genutzt. An Hauptschulen werden nun anstatt der Kursarten E und G die Bezeichnungen E_H und G_H verwendet. Die genauen Kursartenschlüssel können der Schlüsseltabelle von ASDPC entnommen werden (<https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm>). Diese Schlüssel müssen in der Schülerspezifischen Kurstabelle von Schild hinterlegt sein und verwendet werden.
- Da es gelegentlich vorkommt, dass über den Schnittstellenimport versehentlich veraltete ".dat-Dateien" in SchILD importiert werden, erscheint nun vor dem eigentlichen Import ein Hinweisfenster, sofern die entsprechende Importdatei nicht das aktuelle Tagesdatum hat.

<a id="Gymnasium_5"></a>

### Gymnasium

- Versetzungs- und Abschlussberechnungen für die EF wurden geprüft und angepasst. Hier wurden in bestimmten Konstellationen ausreichende Noten mit Mahnhaken in der Berechnung ignoriert.

<a id="Berufskolleg_7"></a>

### Berufskolleg

- Fehlerhafte Abschlussberechnungen wurden korrigiert.
- In der Gliederung B08 erlangen die SuS i.d.R. ausreichende Leistungen im fachpraktischen Teil. Daher wird nun beim Holen der Fächer der Wert für das Feld "Fachpraktischer Anteil ausreichend" auf "Ja" gesetzt.

<a id="Version_2.0.30.6_vom_04.06.2023"></a>

## Version 2.0.30.6 vom 04.06.2023

<a id="Gesamtschulen_2"></a>

### Gesamtschulen

- Für Schülerinnen und Schüler der Jahrgangsstufe 10, die den EESA nicht erreicht haben, wurde dennoch der Abschluss EESA eingetragen. Dies ist nun behoben.

<a id="Berufskolleg_8"></a>

### Berufskolleg

- Für die Gliederungen B06, B07 und B08 wurde ESA anstatt EESA als erreichter Abschluss berechnet. Dies ist nun behoben.
- Bei den Gliederungen B08, B09 und B10 konnte der Abschluss MSAQ nicht manuell ausgewählt werden. Dies ist nun behoben.

<a id="Version_2.0.30.2_vom_26.05.2023"></a>

## Version 2.0.30.2 vom 26.05.2023

<a id="Grundschulen_2"></a>

### Grundschulen

- an manchen Grundschulen wurden beim Export von Notendateien für das GS Notenmodul die Kompetenzen zum Arbeits- und Sozialverhalten nicht exportiert. In diesen forderte das Notenmodul die User auch bei jedem Start dazu auf, ein Kennwort zu vergeben. Der Fehler wurde bereinigt.

<a id="Version_2.0.30.2_vom_25.05.2023"></a>

## Version 2.0.30.2 vom 25.05.2023

<a id="Schulformunabhängige_Änderungen_12"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_12"></a>

### Schulformunabhängige Änderungen

- Die Abschlussbezeichnungen wurden gemäß den Vorgaben vom Ministerium angepasst:
  Hauptschulabschluss → Erster Schulabschluss (ESA)
  Hauptschulabschluss nach Klasse 10 → Erweiterer Erster Schulabschluss (EESA)
  Fachoberschulreife → Mittlerer Schulabschluss (MSA)
- Wenn E-Mails an alle Erzieher einer Schülergruppe versendet und eine Kopie dieser E-Mail in die Dokumentenverwaltung gespeichert werden sollte, wurden diese Kopien bei einigen Schülern falsch zugeordnet. Dies ist nun behoben.
- Beim Import von Teilleistungen über die Schnittstelle Schild-NRW wurden in der Spalte "Lehrkräfte" leer Einträge fehlerhaft übernommen. Dies ist nun behoben.
- Für im Halbjahr zurückgestufte SuS wurde beim Datenexport für Lernplattformen auch Fächer exportiert, die vor der Zurückstufung belegt wurden. Dies ist nun behoben.
- Im Filter I kann nun auch nach dem Anmeldedatum gefiltert werden.

<a id="Version_2.0.29.10"></a>

## Version 2.0.29.10

<a id="Schulformunabhängige_Änderungen_13"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_13"></a>

### Schulformunabhängige Änderungen

- An manchen Schulen erhält SchILD keinen Internet-Zugriff auf die Dateien für das Hinweisfenster, welche Schild hier herunterlädt:

<https://www.svws.nrw.de/uploads/media/schildinfo.inf>

[https://www.svws.nrw.de/uploads/media/schildinfo.rtf](https://www.svws.nrw.de/uploads/media/schildinfo.rtf)

Hierdurch kommt es zu einem extrem verzögerten Start, der durch einen Timeout nach 30s gekennzeichnet ist. In der Beta-Version 2.0.29.5 wurde die Timeout-Zeit auf 2 Sekunden reduziert. Auf diese Weise sollte bei den betroffenen Schulen SchILD zumindest nur unmerklich langsamer starten. Im Hauptverzeichnis von SchILD kann eine Admin.ini angelegt werden, mit der die Timeout-Zeit vergrößert werden kann. Zudem kann über einen weiteren Schalter das Erzeugen einer Protokolldatei aktiviert werden, welche im Fehlerfall das Ereignis protokolliert. Diese Protokolldatei trägt den Namen "SchildDownloadErrors.log" und wird im Verzeichnis C:\Users\\\<Benutzername\>\Dokuments gespeichert. Unter diesem Pfad werden auch die schildinfo.inf und schildinfo.rtf abgelegt, wenn SchILD die Dateien erfolgreich abrufen konnte. Die Benutzer benötigen hierzu Zugriffsrechte auf dieses Verzeichnis. Von dem Phänomen betroffene Schulen können in der Regel ebenfalls den Programmpunkt "Hilfe ➜ Auf Update prüfen" nicht erfolgreich ausführen. Die Einträge in der Admin.ini müssen wie folgt aussehen:

\[Programm\]\
HttpConnectTimeout=\<Zeit in Sekunden\>\
LogHttpErrors=1\

SchILD-zentral-Kunden können in der Admin.ini zudem den Download mit folgendem Eintrag ganz unterbinden:

\[Programm\]\
InfoVerzeichnis=-\

Hinweis: Hinter dem Gleichheitszeichen muss ein Minuszeichen stehen!

SchILD-zentral-Kunden können zudem das Verzeichnis für die schildinfo.inf und schildinfo.rtf anpassen:

\[Programm\]\
InfoVerzeichnis=\<Verzeichnis der Dateien schildinfo.inf und schildinfo.rtf\>\

Die beiden Dateien schildinfo.inf und schildinfo.rtf liegen auch auf der Webseite von ribeka, die Provider von SchILDzentral können die Dateien von dort herunterladen und in ein lokales Verzeichnis legen. Dann wird statt eines „echten“ Downloads einfach die Datei aus dem angegebene Verzeichnis gelesen.

- Der neue Hinweis "Keine Internet-Verbindung" wurde im Programm immer dann ausgegeben, wenn die Datei "schildinfo.inf" nicht heruntergeladen werden konnte. Da dies nicht zwingend bedeutete, dass keine Internet-Verbindung existierte, wurde nun diese missverständliche Information zu "Informationsdatei konnte nicht heruntergeladen werden" geändert.
- Wenn SchILD über eine Remote-Desktop-Verbindung gestartet wird, stehen auf dem RD-Server auch die auf dem lokalen Rechner installierten „weitergeleiteten“ Drucker zur Verfügung. Es trat aber das Problem auf, dass der (lokale) Standarddrucker unter bestimmten Bedingungen nicht korrekt als Standard erkannt wurde. Das Problem ist nun behoben.

<a id="Gesamtschulen_3"></a>

## Gesamtschulen

- Für die Jahrgangsstufe 9 kann nun auch "ohne Abschluss" im Reiter "Akt. Quartal" ausgewählt werden.

<a id="Berufskolleg_9"></a>

## Berufskolleg

- Zur Vorbereitung eines Verfahrens zum Antrag der Energiepreispauschale für Schülerinnen und Schüler steht nun ein Datenaustausch zur Verfügung. Weitere Informationen zum Verfahren erhalten die Schulen zu einem späteren Zeitpunkt. Der Datenaustausch gehört zur technischen Vorbereitung.
- Beim Gruppenprozess „Leistungsdaten in Abiturbereich holen“ wurden in seltenen Fällen nicht alle Schülerinnen und Schüler berücksichtigt, sofern sich der Gruppenprozess auf Schüler aus unterschiedlichen Gliederungen bezog. Dies ist nun behoben.

<a id="Reportdesigner_2"></a>

## Reportdesigner

- In der Datenquelle Lernabschnitte ist ein neues Datenfeld "AbteilungBezeichnung“ verfügbar.
- Wenn in einem Report im ReportAfterPrint-Ereignis die Funktion NurErzieherMitAnschreiben(true) verwendet wurde, lief der Reportgenerator beim Ausdruck mit Archivierung in eine Endlosschleife. Der Fehler konnte nur durch eine Anpassung des Reportdesigners abgefangen werden. Die Funktion NurErzieherMitAnschreiben wird nun nach Beenden des Reports automatisch zurückgesetzt und darf im ReportAfterprint-Ereignis nicht mehr aufgerufen werden. Reports aus der Serienbriefsammlung wurden entsprechend angepasst.

<a id="Version_2.0.29.4"></a>

## Version 2.0.29.4

<a id="Schulformunabhängige_Änderungen_14"></a>
<a id="Schulformunabh.C3.A4ngige_.C3.84nderungen_14"></a>

### Schulformunabhängige Änderungen

- Das neue Hinweisfenster (v. 2.0.29.2) konnte die Neuigkeiten bei Nutzung eines Proxy-Servers nicht abrufen und anzeigen. Dadurch war der Start von Schild verzögert. Diese Version berücksichtigt nun auch das Vorhandensein eines Proxys. Die Angaben zum Proxy können auf zwei Arten übergeben werden. Zum einen kann eine Admin.ini im Hauptverzeichnis von SchILD-NRW angelegt werden, welche Informationen zum Proxy enthalt. Falls es keine Admin.ini gibt oder diese keine Informationen zum Proxy enthält, versucht SchILD die im System hinterlegten Einstellungen auszulesen, sofern diese vorhanden sind. Die Admin.ini muss folgenden Eintrag enthalten:

\[Proxy\]\
Server=\<IP des Proxys\>\
Port=\<Port des Proxys\>\

- Der E-Mail-Versand über Office-Server funktionierte seit dem letzten Update nicht meht. Durch den Austausch der ChilkatDelphi32.dll (v. 9.5.0.93) im Hauptverzeichnis wird dieses Problem behoben.
- Durch das Entfernen des Auswahlfeldes zum Masernimpfschutz bei Lehrkräften kam es zu einer Fehlermeldung, wenn eine neue Lehrkraft angelegt werden sollte. Nun behoben.

<a id="Version_2.0.29.2"></a>

## Version 2.0.29.2

<a id="Schulform_unabhängige_Änderungen"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen"></a>

### Schulform unabhängige Änderungen

- Beim Start von SchILD-NRW werden nun Hinweise zu Updates und anderen Neuigkeiten gegeben, sofern welche vorliegen. Voraussetzung für diese Hinweise ist eine bestehende Internetverbindung.

Beim Start überprüft Schild zunächst, ob neue Hinweise vorliegen. Hierzu lädt Schild eine kleine Informationsdatei herunter und wertet das enthaltene Datum aus. Diese Informationsdatei wird hier heruntergeladen: <https://www.svws.nrw.de/uploads/media/schildinfo.inf>

Ist das Datum neuer als bisher, wird eine rtf-Datei nachgeladen und in Schild angezeigt. Die rtf-Datei liegt hier: [https://www.svws.nrw.de/uploads/media/schildinfo.rtf](https://www.svws.nrw.de/uploads/media/schildinfo.rtf)

- Das Auswahlfeld "Masernschutzimpfung" wurde aus Datenschutzgründen bei den Lehrkräften entfernt.

<a id="Reportdesigner_3"></a>

### Reportdesigner

- Die Datenquelle "Informatik" für die SI wurde wieder entfernt.
- Die berechneten Adress-Memofelder der Datenpipeline Schüler und Erzieher im Reportdesigner wurden an das dritte Geschlecht angepasst.

<a id="Grundschule_2"></a>

### Grundschule

- Der Export der Notendateien wurde beschleunigt.

<a id="Berufskolleg_10"></a>

### Berufskolleg

- Im Reiter Schulbesuch wurden Bezeichnungen für den höchsten allgemeinbildenden Abschluss angepasst.

<a id="Version_2.0.28.6"></a>

## Version 2.0.28.6

<a id="Schulform_unabhängige_Änderungen_2"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_2"></a>

### Schulform unabhängige Änderungen

- In der statkue.mdb und schulver.mdb wurden fehlende Einträge ergänzt.
- Die schülerspezifischen Kursarten wurden auf die neuen Bezeichnunngen von IT-NRW angepasst (insbesondere die neue Kursart F3).
- Straßennamen werden nun wieder exportiert, wenn der Export in eine CSV- oder XLS-Datei erfolgen soll. Dies war zwischenzeitlich nicht möglich.
- Das Update enthält die neuste ASDStatistik.dll (Version 5.10.4 vom 09.08.2022), in welcher ein kleinerer Fehler bei der Gesamtprüfung in Schild bezüglich der Schulbesuchsjahre behoben wurde.
- Beim Fotoexport gab es eine Fehlermeldung, wenn die Dateinamen die IDs der Schülerinnen und Schüler enthalten sollten. Behoben.
- Der iServ-Export berücksichtigt nun auch Lehrerinnen und Lehrer, sowie Schülerinnen und Schüler ohne Unterricht. Schülerinnen und Schüler mit Löschvermerk werden nicht mehr exportiert. Lehrerinnen und Lehrer ohne Exportvermerk werden nicht mehr exportiert.
- Beim Löschen eines oder mehrerer Kurse gab es unter Umständen eine Fehlermeldung, obwohl die Kurse gelöscht wurden. Dies sollte nun behoben sein.

<a id="Berufskollegs"></a>

### Berufskollegs

- Abschlüsse an BKs können nun wieder ausgewählt werden. Dies war zwischenzeitlich nicht möglich.

<a id="Version_2.0.28.4"></a>

## Version 2.0.28.4

<a id="Schulform_unabhängige_Änderungen_3"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_3"></a>

### Schulform unabhängige Änderungen

- Die schildintern.mdb enthielt einen Fehler. Dieser führte dazu, dass eine Fehlermeldung angezeigt wurde, sobald der Filter I aufgerufen wurde.

<a id="Version_2.0.28.2"></a>

## Version 2.0.28.2

<a id="Schulform_unabhängige_Änderungen_4"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_4"></a>

### Schulform unabhängige Änderungen

- Es wurde eine aktuelle Statkue.mdb und eine aktuelle Schulver.mdb ausgeliefert.
- In der Statkue stehen nun auch die Fachrichtungen Medizintechnik, Augenoptik, Hörakustik, Ingenieurtechnik, Orthopädietechnik und Zahntechnik zur Verfügung.
- Zudem stehen die Lehrbefähigungen Ingenieurwissenschaften und Ingenieurtechnik, sowie Wirtschaft-Politik zur Verfügung.
- Die Fächertabellen wurden entsprechend der Statistikvorgaben angepasst.
- Ein Fehler, der beim Aufrufen der Lehrkräfte aufgetreten ist, wurde behoben.

<a id="Berufskollegs_2"></a>

### Berufskollegs

- Fehlerhafte Abschlussberechnung in B08, B09 und B10 korrigiert (Anlage B)

<a id="Gymnasiale_Oberstufe"></a>

### Gymnasiale Oberstufe

- Fehlerausgabe bei der Berechnung des Abiturgesamtergebnisses bei vorhandener besonderer Lernleistung mit null Punkten behoben.

<a id="Version_2.0.27.8"></a>

## Version 2.0.27.8

<a id="Schulform_unabhängige_Änderungen_5"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_5"></a>

### Schulform unabhängige Änderungen

- Es wurde unter den Daten zum Migrationshintergrund ein Merkmal "neu zugewandert" bereitgestellt. Dieses Merkmal kann im Zusammenhang mit dem Zuzugsjahr und der Staatsangehörigkeit genutzt werden, die aktuelle Lage abzubilden und Schülergruppen schnell zu filtern.
- Die Auswahl Hilfe-\>Versionsgeschichte zeigen verweist auf den Wiki-Eintrag zur Versionsgeschichte.

<!-- -->

- Der Export für die Lernplattform IServ wurde überarbeitet. Es werden nun auch Team-Teacher exportiert. Probleme beim Schließen des Exportfensters wurden behoben.
- Probleme bei der Auswahl mehrerer Einwilligungen unter dem Reiter „Lehrkräfte“ wurde behoben.
- Benutzerdefinierte Sortierungs-Einstellung wurde bei einigen Katalogen wieder ergänzt.
- Möglichkeit der Sortierung von Lernplattformen wurde entfernt.

<a id="Version_2.0.27.2"></a>

## Version 2.0.27.2

<a id="Schulform_unabhängige_Änderungen_6"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_6"></a>

### Schulform unabhängige Änderungen

- Es wurde ein Problem beim iServ-Export mit MySQL unter Linux behoben.
- Es wurde ein Problem beim iServ-Export in Zusammenhang mit MySQL und MS-SQL-Server behoben.
- Außerdem wurde die Statkue und die Schulver aktualisiert.
- In der Statkue steht nun wieder die Lehrbefähigung mit dem Schlüssel 1 zur Verfügung.
- In den Ferien gegründete Schulen sind nun auch verfügbar.
- Das Löschen von Fächern im Grupenprozess dauerte u.U. sehr lange. Nun behoben.
- Die Exporte für Lernplattformen wurden zusammengefasst und überarbeitet.
- Es steht nun auch ein Export für SDS (SchoolDataSync) zur Verfügung.
- Es wurde die Möglichkeit geschaffen, Lernplattformen und Zugangsdaten von Lehrkräften und Schüler\*innen zu verwalten. Näheres finden Sie hier: [https://wiki.svws.nrw.de/mediawiki/index.php?title=Lernplattformen](/schild2/unterricht-kataloge/lernplattformen)
- Es wurde eine Datenquelle Informatik für den Zeugnisdruck geschaffen, wenn man Informatik außerhalt der Fächergruppe Naturwissenschaften verwalten möchte. Dies ist aber optional.
- Bei den Lehrkräften gibt es nun auch die Möglichkeit Einwilligungen zu verwalten. In den Einwilligungen unter Schulverwaltung gibt es nun die Option „Personenart“.
- Der Reiter DSGVO wurde ein „Einwilligungen“ umbenannt. Hier können nun auch die Lernplattformen bei den Schülern und die Zustimmungen angelegt werden. (Auch per Gruppenprozess.)
- In der Benutzerverwaltung ist eine Berechtigung für den Reiter Einwilligungen geschaffen worden.

<a id="Reportausgabe"></a>

### Reportausgabe

- Reports, welche die Hauptpipeline „Erzieher“ verwenden, können nun auch automatisch in die Dokumentenverwaltung der Schülerinnen und Schüler archiviert werden. So können Dokumente, welche mit den neuen Serienbriefreports erstellt wurden, automatisiert archiviert werden.

<a id="Version_2.0.26.4"></a>

## Version 2.0.26.4

<a id="Schulform_unabhängige_Änderungen_7"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_7"></a>

### Schulform unabhängige Änderungen

- Es wurde nochmals die Statistik.dll ausgetauscht, die falsche Meldung, dass die Übergangsempfehlungen fehlen, ist damit behoben.

<a id="Version_2.0.26.2"></a>

## Version 2.0.26.2

<a id="Schulform_unabhängige_Änderungen_8"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_8"></a>

### Schulform unabhängige Änderungen

- Es steht eine neue Datei ASDStatistik.dll für die Statistik-Gesamtprüfung und die Erstellung der Dateien SIM.TXT, LID.TXT, UVD.TXT und ABI.TXT zur Verfügung.

<a id="Berufskollegs_3"></a>

### Berufskollegs

- Die Fachklassentabelle wurde um einige neue Fachklassen ergänzt.
- Für die Gliederung C13 wurde der Prüfungsalgorithmus umgesetzt.
- Für die Anlage E steht jetzt auch eine Zulassungsprüfung zur Verfügung.

<a id="Version_2.0.25.6"></a>

## Version 2.0.25.6

<a id="Schulform_unabhängige_Änderungen_9"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_9"></a>

### Schulform unabhängige Änderungen

- Beim iServ-Export der Schülerdaten wurden diese nicht in der UTF-8-Kodierung gespeichert, auch wenn diese Option aktiviert war. Dies ist nun korrigiert.
- Beim iServ-Export der Lehrerdaten stehen jetzt auch folgende Optionen für die Export-IDs zur Verfügung:
  1.  Ident-Nr. verwenden anstelle interner ID (falls vorhanden)
  2.  Suffix "L" anhängen (bei Verwendung der internen ID)

<a id="Berufskollegs_4"></a>

### Berufskollegs

- Im Algorithmus zur Abiturzulassung war die Defizitberechnung noch nicht auf die neuen Regeln angepasst, dies ist nun korrigiert.
- Für die Fachklasse „FS Sozialwesen/Motopädie“ (Schlüssel 108-00, Gliederung E03 und E04) wurde die Abschlussberechnung angepasst, es wird jetzt nur noch auf zwei Abschlussarbeiten geprüft, in anderen Fällen aber weiterhin auf drei.

<a id="Reportausgabe_2"></a>

### Reportausgabe

- In Reports mit der Hauptdatenquelle „Erzieher“, bei denen die Datenquelle „Schueler“ als Unterdatenquelle benutzt wird, stehen nun alle davon abhängigen weiteren Datenquellen zur Verfügung (z.B. „Lernabschnitte“).
- Wenn die Datenquelle „Klassen“ die Hauptdatenquelle eines Reports ist, können nun auch Serienmails an die Klassenlehrer verschickt werden.

<a id="Version_2.0.25.4"></a>

## Version 2.0.25.4

<a id="Schulform_unabhängige_Änderungen_10"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_10"></a>

### Schulform unabhängige Änderungen

- Der Sonderpädagoge, der in den Lernabschnittsdaten eingetragen ist, erhält nun eine Notendatei wie ein stellvertretender Klassenlehrer.
- Die Berechnung der Stunden bei den zeitabhängigen Daten wurde berichtigt, wenn Lehrkräfte als Zusatzkraft eingetragen sind.
- Das Feld Masern-Impfnachweis steht nun im Text-/Excel-Export zur Verfügung.
- Beim iServ-Export stehen jetzt zwei Optionen für die Generierung der Export-IDs zur Verfügung.
- Bei Änderung des Schüler-Namens oder des Geburtsdatums erfolgt nun ein entsprechender Hinweis, damit nicht diese Angaben versehentlich durch die einer anderen Person überschrieben werden.
- Beim Versenden von E-Mails per SMTP wurde unter bestimmten Bedingungen ein falscher SMTP-Port verwendet, nun korrigiert.

<a id="Berufskollegs_5"></a>

### Berufskollegs

- Der Algorithmus zur Abiturzulassung wurde auf die neueren Regeln angepasst. Es werden nun max. 40 Kurse eingebracht und die 0-Punkte-Regelungen sind implementiert.

<a id="Version_2.0.24.14"></a>

## Version 2.0.24.14

<a id="Schulform_unabhängige_Änderungen_11"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_11"></a>

### Schulform unabhängige Änderungen

- Der Logineo-Export erfolgte (trotz gegenteiliger Angabe in der == Versionsgeschichte) irrtümlicherweise doch noch über eine separate DLL. Das ist nun korrigiert, es wird keine DLL mehr benötigt.

<a id="Reportverwaltung"></a>

### Reportverwaltung

- Bei aktivierter Dokumentenverwaltung wurden bei bestimmten Sonderzeichen im Namen die PDFs nicht in dem korrekten Verzeichnis gespeichert, sondern in einem ohne die Sonderzeichen. Dies ist nun korrigiert.

<a id="Version_2.0.24.12"></a>

## Version 2.0.24.12

<a id="Schulform_unabhängige_Änderungen_12"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_12"></a>

### Schulform unabhängige Änderungen

- Ein Fehler in Filter I wurde korrigiert.
- In den Gruppenprozessen Platzhalter in Memofeldern ersetzen stehen nun auch die Förderschwerpunkte (ASD-Bezeichnung) mit \$FSP1\$ und \$FSP2\$ zur Verfügung.
- Die KAOA-Einträge wurden auf die aktuelle Version der Kataloge von MAGS und MSB geändert.
- In den Schnellfiltern für Klasse und Jahrgang funktioniert jetzt das Mausrad, außerdem wird die Größe des DropDown-Menüs gespeichert.
- Unter Extras \> Programm-Einstellungen \> Globale Einstellungen \> Dokumentenverwaltung kann nun ein Zielverzeichnis für den Zeugnisdruck angegeben werden.
- Wenn dies dort aktiviert ist, steht beim Druck eines DV-tauglichen Reports auch die Option Archivierung in Zeugnisverzeichnis zur Verfügung.
- Es werden dann einzelne PDFs mit dem Dateinamen Name_Vorname_Klasse.pdf erstellt.
- Unter Datenaustausch „Weitere Export“ wurden nun Exporte zusammengefasst.
- Dort steht nun auch ein iServ-Export zur Verfügung. Der Logineo-Export wurde in Schild-NRW integriert und muss nun nicht mehr als DLL im Programmverzeichnis sein.
- Beim Gruppenprozess „Zeugnisbemerkungen eintragen“ wird jetzt an bereits existierende Texte ein Leerzeichen angehängt, sofern dieser nicht mit der Kombination „Punkt + Leerzeichen“ endet.

<a id="Reportausgabe_3"></a>

### Reportausgabe

- Es können jetzt aus der Reportausgabe heraus auch Serien-Emails an Lehrer geschickt werden, d.h. wenn die Hauptdatenquelle des Reports "Lehrer" ist. Der betreffende Report muss die gleichen Bedingungen erfüllen wie ein Schüler-Report (Gruppierung, neue Seite/E-Mail bei Gruppenwechsel usw.).

<a id="Berufskollegs_6"></a>

### Berufskollegs

- Der Reiter KAOA wurde nun auch den BKs zur Verfügung gestellt.

<a id="Grundschulen_3"></a>

### Grundschulen

- Es wurde ein Fehler beim ASV-Import und MySQL-Datenbanken behoben.

<a id="Gymnasiale_Oberstufe_2"></a>

### Gymnasiale Oberstufe

- Es wurde ein Fehler im Zusammenhang mit Sport LK in der FHR-Berechnung korrigiert.

<a id="Version_2.0.24.6"></a>

## Version 2.0.24.6

<a id="Schulform_unabhängige_Änderungen_13"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_13"></a>

### Schulform unabhängige Änderungen

- Es würde eine Sicherheitslücke bei der Verwendung von Notenmodulen behoben. Bitte erstellen Sie mit dieser Version neuen Notendateien.
- Beim Erzeugen der Notendateien werden die Einstellungen für die Fehlstunden (siehe Einstellungen \> Globale Einstellungen \> Fächer, Noten) automatisch übernommen. Beim Noten-Export können Sie darüber hinaus steuern (siehe Ankreuzfeld: „Eingabe von Fehlstunden ermöglichen ( )“), ob im Notenmodul die Eingabe der Fehlzeiten grundsätzlich möglich ist und zwar unabhängig vom gewählten Fehlstunden-Modell.

<a id="Gesamtschule,_Sekundarschule"></a>
<a id="Gesamtschule.2C_Sekundarschule"></a>

### Gesamtschule, Sekundarschule

- Bei der Abschlussprognose wurde ein Fehler beim HA10 behoben, dort wurden weitere Fremdsprachen unter gewissen Umständen als Defizit nicht ignoriert.

<a id="Version_2.0.24.2"></a>

## Version 2.0.24.2

<a id="Schulform_unabhängige_Änderungen_14"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_14"></a>

### Schulform unabhängige Änderungen

- Für die Statistik stehen nun neue Einträge für Lehrer-Minderleistungen und -Mehrleistungen (wegen COVID-19) zur Verfügung.
- Beim Notenimport aus Excel-Dateien wurden nicht vorhanden Fächer bei den Schülern nicht automatisch angelegt (auch wenn das entsprechende Häkchen aktiviert war). Dies wurde korrigiert.

<a id="Gymnasien"></a>

### Gymnasien

- Beim Schuljahreswechsel kam es zu Problemen bei der Hochschreibung von Kursen, sofern mit dem Jahrgangswechsel auch ein Wechsel der Gliederung einherging (z.B. wegen Umstellung auf G9). Damit das in Zukunft nicht erneut auftritt, sollte jedem Jahrgang (außer den Abschlussjahrgängen) ein expliziter Folgejahrgang zugewiesen werden. Vor einem Schuljahreswechsel wird dies nun geprüft und ggf. eine entsprechende Meldung ausgegeben.

<a id="Schulen_mit_Sekundarstufe_I"></a>

### Schulen mit Sekundarstufe I

- Die Schlüsseltabellen und Systematik für die KAoA-Eingabe wurden nochmals überarbeitet.

<a id="Version_2.0.23.18"></a>

## Version 2.0.23.18

<a id="Schulform_unabhängige_Änderungen_15"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_15"></a>

### Schulform unabhängige Änderungen

- Beim Export für das externe Notenmodul wurde (sofern das entsprechende Häkchen aktiviert wurde) das nach dem alten Verfahren verschlüsselte Kennwort in die Notendatei geschrieben. Dies ist korrigiert, es wird nun das neue Hash-Verfahren verwendet.

<a id="Gesamtschulen_mit_Quartalsbetrieb"></a>

### Gesamtschulen mit Quartalsbetrieb

- Bei in der gymn. Oberstufe neu einsetzenden Fremdsprachen wurde das GeR-Niveau nicht korrekt berechnet, nun korrigiert.

<a id="Berufskollegs_7"></a>

### Berufskollegs

- Beim Holen der Fächer in den Bereich „BK-Abschluss“ wird nun auch das Feld „Fachpraktischer Anteil ausreichend“ berücksichtigt (nur bei einigen Gliederungen relevant).

<a id="Version_2.0.23.16"></a>

## Version 2.0.23.16

<a id="Reportausgabe_4"></a>

### Reportausgabe

- Ein Fehler in der Datenquelle „SchuelerDSGVOEinwilligung“ wurde behoben.

<a id="Version_2.0.23.14"></a>

## Version 2.0.23.14

<a id="Grundschulen_4"></a>

### Grundschulen

- Es wurden einige Fehler, die im Zusammenhang mit dem neuen „GS-Notenmodul“ aufgetreten sind, behoben.

<a id="Schulform_unabhängige_Änderungen_16"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_16"></a>

### Schulform unabhängige Änderungen

- Unter Individualdaten II gibt es nun einen Bereich Sprachförderung in dem Datumswerte von bis eingegeben werden können. Außerdem wird in den Leistungsdaten eine Spalte „Umfang“ eingeblendet, wenn der Schüler einen Lernstandsbericht erhält. Damit sollte der Druck von Lernstandsberichten nach den Vorgaben des MSB möglich sein.
- In den Lernabschnitten kann den Schülern nun eine Lehrkraft als Sonderpädagoge zugewiesen werden. In einem nächsten Schritt können diesen Lehrkräften dann die Schüler-/innnen in die Notendatei exportiert werden.
- In allen Schulen ist nun die Möglichkeit „Ankreuzberichte“ zu erstellen freigeschaltet worden. Dies ermöglicht es auch weiterführenden Schulen Berichte nach dem Muster der Ankreuzzeugnisse in der Grundschule zu drucken.

<a id="Berufskollegs_8"></a>

### Berufskollegs

- In den Gliederungen B08, B09 und B10 wurde das Feld „Fachpraktische Anteile Ausreichend“ eingefügt, welches nun bei der Versetzung auch ausgewertet wird.
- Aktuelle Schildintern.mdb aus dem Update wird benötigt!

<a id="Sekundarstufe_II_3"></a>

### Sekundarstufe II

- Die Datenquelle AbiturUebersicht wurde angepasst, es werden nun nur aktive Schüler mit Abiturzulassung gezählt.

<a id="Version_2.0.23.12"></a>

## Version 2.0.23.12

<a id="Schulform_unabhängige_Änderungen_17"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_17"></a>

### Schulform unabhängige Änderungen

- Es wurde bei den Schülern und Lehrern ein Feld zur Speicherung des Impfnachweises für die Masernschutzimpfung hinzugefügt.
- Es gab mit der Datenquelle „AbifaecherUebersicht“ bei einer MySQL-DB auf einem Linux-Server ein Problem mit der Groß/Kleinschreibung in der zugehörigen Abfrage.
- Reports mit selbstdefinierten Datenquellen funktionieren nun wieder.
- Die Berechnung der GeR-Niveaus in Sek1 und Sek2 wurde nochmals überarbeitet.
- In den Abiturberechnungen wurde die Verpflichtung zur Abweichungsprüfung für das kommende Abitur entfernt.
- Mailversand per SMTP. Das Fehlerprotokoll beim Mailversand wurde teilweise doppelt angezeigt. Die globalen Mail-Einstellungen wurden sofort beim Verbindungstest in SchILD-NRW aktualisiert, nicht aber die individuellen (Benutzername und Kennwort), ist nun korrigiert.

<a id="Version_2.0.23.10"></a>

## Version 2.0.23.10

<a id="Schulform_unabhängige_Änderungen_18"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_18"></a>

### Schulform unabhängige Änderungen

- Bei den Stammdaten der Schüler und Lehrkräfte gibt es nun ein Ankreuzhäkchen "Masern Impfnachweis". Bei den Schülern kann dies auch über den Gruppenprozess "Individualdaten ändern" gesetzt werden. Eine Filtermöglichkeit im Filter I besteht ebenso, außerdem ist das Feld in den Datenquellen "Schueler" und "Lehrer" verfügbar.

<a id="Version_2.0.23.8"></a>

## Version 2.0.23.8

<a id="Schulform_unabhängige_Änderungen_19"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_19"></a>

### Schulform unabhängige Änderungen

- Beim Import über die Schnittstelle wurden Leistungsdaten nicht korrekt übernommen.
- Es gab in manchen Datenbanken Probleme beim Anlegen der DSGVO-Einträge, dies sollte durch das Update bereinigt werden.
- Einzelne Abgeschlossene Fächer können nun auch in der SekI wieder gelöscht werden.
- Es erscheint nun eine Aufforderung sich beim Support zu melden, wenn eine FirebirdDB genutzt wird.
- Im Gruppenprozess „Kurse zuweisen mehrere“ gibt es nun einen Excel-Export.

<a id="Version_2.0.23.6"></a>

## Version 2.0.23.6

<a id="Schulform_unabhängige_Änderungen_20"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_20"></a>

### Schulform unabhängige Änderungen

- Beim Import über die Schnittstelle-NRW wurde ein weiterer Fehler beim Import der SchuelerLeistungsdaten.dat behoben.
- Die Reiter Übersicht SI, Übersicht SII, Übersicht Primarstufe und Gesamtübersicht wurden zu einem Reiter zusammengefast.
- Es stehen hier nun Filtermöglichkeiten zur Verfügung. Außerdem wurde die Geschwindigkeit beim Aufbau des Reiters verbessert.
- Es ist nun die Option „Serienmail an Erzieher aus der Reportverwaltung verschicken“ realisiert. Im Einzelnen funktioniert das wie folgt:
  - Die „Hauptdatenquelle“ des betreffenden Reports muss „Erzieher“ sein
  - Wenn das vom Programm erkannt wird, ändert sich automatisch das Verhalten der Datenquelle „Schueler“, diese funktioniert dann als „Unterdatenquelle“ zur DQ „Erzieher“
  - Wenn zu einer „Erzieheradresse“ zwei E-Mail-Adressen hinterlegt sind, werden auch zwei E-Mails erzeugt. Dieses Verhalten kann aber auch z.B. bei Anschreiben an die Erzieher genutzt werden, da dann alle Felder der DQ „Schueler“ genutzt werden können (und sogar alle von „Schueler“ abhängigen weiteren Datenquellen)
  - Damit die Serienmailfunktion verfügbar ist, muss bei den Gruppierungseigenschaften auch die Option „Email new file“ aktiviert sein.
- Es gibt nun eine Funktion „Informationelle Selbstauskunft für ausgewählten Schüler erstellen“. Diese kann durch einen Klick mit der rechten Maustaste auf einen Schüler im Schülercontainer aktiviert werden. Die Funktion speichert eine Excel-Datei im ausgewählten Ordner. Diese Datei enthält alle gespeicherten Daten und kann dem Schüler ausgedruckt oder ausgehändigt werden. Die Funktion ist an die Berechtigung „Schülerdaten exportieren“ gekoppelt.
- Es gibt nun eine neue Funktion Löschfristen prüfen im Menü Extras. Diese Funktion kann manuell aufgerufen werden. Ab dem 1.12. eines Kalenderjahres prüft Schild-NRW aber auch automatisch. Wenn eine Erinnerung an die Löschfristen nicht gewünscht wird, kann diese Meldung auch unterdrückt werden!
- Schild-NRW prüft nun, ob Daten vorhanden sind, die die 5 Jahres-, 10 Jahres- und 20 Jahresfristen überschreiten. Im Folgefenster könnten die Daten auch gesichtet werden. Nach erneuter Bestätigung werden die Daten dann gelöscht. Diese Funktion soll bei der Einhaltung der DSGVO behilflich sein.
- Der Bereich der Bemerkungen in den Leistungsdaten auf dem Reiter „akt Halbjahr/akt, Abschnitt“ wurde neu gestaltet. Die Buttons für Zeugnisbemerkungen, ASV und AUE sind weggefallen, dafür wurden eigene Reiter bereitgestellt.
- Zusätzlich wurden zwei neue Reiter für Bemerkungen geschaffen: Bemerkung Förderschwerpunkt und Individueller Versetzungsvermerk (nur 2. HJ). Mit diesen beiden Bemerkungen soll zukünftig der Zeugnisdruck besser gesteuert werden können. In den neuen Grundschulzeugnissen ist das bereits umgesetzt, dass hier eigene individuelle Bemerkungen eingegeben werden können, falls der Standardtext nicht gewünscht ist.
- Es gibt nun einen Reiter „DSGVO-Einwilligungen“. Unter Schulverwaltung \> DSGVO-Einwilligungen kann man die gewünschten Merkmale ergänzen. Die Einwilligung zum Foto wird beim Update automatisch an diese Stelle kopiert und der eingetragene Wert beim Schülerdatensatz übernommen. Beim Anlegen einer Einwilligung wird diese automatisch sofort bei allen Schülern ergänzt. Die Einwilligungen können auch mit Filter I gefiltert werden. Es steht auch ein Gruppenprozess zur Verfügung. Die Datenquelle für die Reporting heißt: SchuelerDSGVOEinwilligung. Die Spalte Schlüssel, wird in Schild-NRW um Einträge ergänzt werden, die später bestimmte Automatismen ermöglichen soll. Diese Werte werden also vom Programm vorgegeben. (zunächst nur FOTO, was die Beziehung zu diesem Merkmal herstellt)
- In der Benutzerverwaltung gibt es nun die Kompetenz „KAOA-Daten ändern“, hiermit kann eingestellt werden, ob User diese Daten ändern dürfen oder nicht.
- Es können ab jetzt auch Teilleistungen über die Schnittstelle Schild-NRW im- und exportiert werden.
- Bei der Bearbeitung von Kursen ist es jetzt nicht mehr möglich, sowohl einen Eintrag in der Spalte "Jahrgang" als auch in der Spalte "mehrere Jahrgänge" zu machen (es gilt jetzt "entweder/oder"). Der Jahrgangsbezug kann nachträglich nur noch über die rechte Maustaste verändert werden. Beim Hochschreiben in einen neuen Abschnitt wird bei Kursen, bei denen beide Spalten gefüllt sind, eine automatische Korrektur durchgeführt, dabei haben Einträge in der Spalte "mehrere Jahrgänge" Vorrang.
- Hinweis: Falls in der Spalte "mehrere Jahrgänge" Einträge enthalten sind, die betreffenden Jahrgänge aber nicht mehr existieren (weil gelöscht), so blieb bisher die Anzeige in der Kurstabelle leer. Das konnte zu schwer lokalisierbaren Problemen beim Hochschreiben führen. In solchen Fällen wird man nun durch "UNGÜLTIGE EINTRÄGE!" darauf hingewiesen, die Angaben zu korrigieren.

<a id="Reportausgabe_5"></a>

### Reportausgabe

- Es gibt zwei neue Datenquellen "SchuelerJahresuebersicht" und "SchuelerJahresuebersichtTeilleistungen“. Damit lassen sich relativ einfach Jahresübersichten der Leistungsdaten und der zugehörigen Teilleistungen erzeugen. Entsprechende Beispielreports gibt es im Supportforum oder auch im Schild-NRW-Wiki.
- Hinweis: Die Datenquellen enthalten Felder der Art "Note_1", "Note_2" usw. Die Zahl entspricht dabei dem jeweiligen Anschnitt, "Note_1" gibt also die Note im ersten Halbjahr/Quartal aus, "Note_4" die Note im vierten Quartal.
- Neue RAP-Funktion steht zur Verfügung: ***procedure AufFaecherFiltern(const fachliste: string);***
  - Ermöglicht eine Filterung in der Datenquelle „SchuelerJahresuebersicht“ auf bestimmte Fächer. Der Aufruf erfolgt typischerweise im Ereignis „ReportBeforPrint“
  - Es ist aber geplante, die Filterung auch auf andere Datenquellen zu erweitern
  - Parameter Fachliste: Durch Komma oder Semikolon getrennte Liste der schulinternen Fachkürzel
  - Hinweis: Komma oder Semikolon dürfen nicht vermischt werden, d.h. es dürfen nur Kommas oder nur Semikolons verwendet werden.
  - Beispiel: AufFaecherFiltern('D,E,M');

<a id="Sekundarstufe_I"></a>

### Sekundarstufe I

- Die KAOA-Daten wurde mit neuen Katalogen gefüllt, die mit dem MSB abgestimmt sind. Die jetzt zur Verfügung stehenden Kataloge stimmen mit den Angaben im BAN-Portal überein und sollen später zur Auswertung für das Monitoring genutzt werden können.
- Unter Extras \> „Alte“ KAOA-Daten umschlüsseln kann ein Prozess aufgerufen werden, der (soweit möglich) die alten Bezeichnungen in die neuen SBO-Bezeichnungen umschlüsselt.

<a id="Berufskollegs_9"></a>

### Berufskollegs

- Der Menüpunkt „Extras\>\>Duplikate abgleichen“ hat nun tatsächlich eine Abgleichfunktion. Der Vorgang ist wie folgt:
  - Es werden alle SuS angezeigt, die die Eigenschaft „Duplikat“ haben. Zu jedem Datensatz wird dann der „Originaldatensatz“ gesucht (anhand Name, Vorname, Geburtsdatum). Beim Aufklappen (über das kleine „+“ links in der Zeile) werden die gefundenen Unterschiede aufgelistet.
  - Welche Felder berücksichtigt werden, sind im Wesentlichen die Angaben zur Struktur innerhalb der Schule (Klasse, Fachklasse, Jahrgang usw.)
  - Wenn das Häkchen „Abgleich Duplikat\>Original durchführen automatisch aktivieren“ gesetzt ist, werden alle Abweichungen bei der anschließenden Übertragung an den Originaldatensatz berücksichtigt, man kann das aber auch manuell deaktivieren.
  - Über den Schalter „Eigenschaft „Duplikat“ entfernen“ kann bei solchen Datensätzen, bei denen kein „Original-Datensatz“ gefunden wurde, die Duplikats-Eigenschaft entfern werden. Es erscheint dann der folgende Hinweis: „Bei allen Duplikaten, zu denen kein Orginaldatensatz gefunden wurde, die Eigenschaft „Duplikat“ entfernen? Es kann dann gewählt werden, ob die Aktion ausgeführt werden soll.
  - Der eigentliche Abgleich (d.h. die Übertragung der markierten „Abweichungen“ in den Originaldatensatz) erfolgt über den Schalter „Angaben aus Duplikatsdatensatz in Originaldatensatz übertragen“. Dabei werden alle „aktivierten“ Abweichungen in den Originaldatensatz übernommen. Anschließend wird das Duplikat entfernt (d.h. Datensatz wird gelöscht).
  - Außerdem wurde der Duplikatsabgleich erweitert. Insbesondere werden jetzt auch die Angaben im Bereich "Schulbesuch\>\>Vor der Aufnahme besuchte Schule/...." gefüllt:
    - ***Schulform:*** Schulform der eigenen Schule
    - ***Name der Schule:*** Eigene Schule (muss aber im Katalog "Schulen in NRW" enthalten sein)
    - ***Allgemeine Herkunft:*** ursprüngliche Gliederung des Originaldatensatzes
    - ***Entlassen am:*** Entlassdatum aus dem Bereich "Entlassung von eigener Schule"
    - ***Entlassjahrgang:*** ursprünglicher Jahrgang des Originaldatensatzes
    - ***Fachklasse:*** ursprüngliche Fachklasse des Originaldatensatzes
    - ***Höchster allg.-bildender Abschluss:*** Abschluss an der eigenen Schule (allg.-bildender Teil), sofern dieser höher ist als der ursprünglich dort mal eingetragene Abschluss
    - automatische Übertragung der zuletzt besuchten Schule (also der Eintrag oben) und des an der eigenen Schule besuchten Bildungsgangs mit Abschluss in die Liste der besuchten Schulen (unten Karteireiter Schulbesuch)

<a id="Version_2.0.22.16"></a>

## Version 2.0.22.16

<a id="Schulform_unabhängige_Änderungen_21"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_21"></a>

### Schulform unabhängige Änderungen

- Beim Import über die Schnittstelle-Schild-NRW wurden die Kursbezeichnungen in den Leistungsdaten in manchen Fällen nicht importiert.
- Bei der Abschlussberechnung hat das Programm in sehr vielen Fällen immer den HA10 unter Schulbesuch eingetragen, obwohl auch andere (höhere) Abschlüsse erreicht wurden.
- Damit das schneller korrigiert werden kann wurde der Gruppenprozess „Individualdaten ändern“ so geändert, dass dieses Feld auch ohne Entlassjahrgang neu gesetzt werden kann.

<a id="Grundschulen_5"></a>

### Grundschulen

- An Grundschulen, wurde bei nicht versetzten Schülern in manchen Fällen die falsche Folgeklasse gewählt. Das wurde korrigiert.
- Es wurden die aktuellen Statistik-Dateien für die kommende Statistik eingespielt.

<a id="Gymnasium_6"></a>

### Gymnasium

- Schüler mit der Gliederung „Standard für diese Schulform“ müssen nun die Gliederung „G8“ erhalten. Die Jahrgänge 05 und 06 müssen die Gliederung „G9“ bekommen.
- Dies kann über den Gruppenprozess „Individualdaten ändern“ gemacht werden.

<a id="Version_2.0.22.12"></a>

## Version 2.0.22.12

<a id="Berufskollegs_10"></a>

### Berufskollegs

- Bei der Berechnung der FHR-Durchschnittsnote trat ein Fehler auf, wenn eine der Fächer mit fünf benotet war und ein Ausgleichsfach gefunden wurde. Dieser Fehler ist nun behoben.

<a id="Version_2.0.22.11"></a>

## Version 2.0.22.11

<a id="Schulformübergreifende_Änderungen"></a>
<a id="Schulform.C3.BCbergreifende_.C3.84nderungen"></a>

### Schulformübergreifende Änderungen

- Beim ENM-Export wird jetzt auch die Kurs_ID exportiert, um auch bei unterschiedlichen, aber gleichbenannten Kursen eine Unterscheidung im ENM machen zu können.
- Ein Fehler bei der Auto-Editfunktion wurde behoben.
- Der Migrationshintergrund wird nun beim Import über die Schnittstelle wieder korrekt importiert.
- Ein Fehler beim Import von Excel-Export-Vorlagen wurde behoben.

<a id="Grundschulen_6"></a>

### Grundschulen

- Beim Notenmodul-Export kann nun gewählt werden, ob ZP10-Daten, Fördermaßnahmen und Teilleistungen exportiert werden sollen. Die Verarbeitung der ZP10-Daten im Notenmodul ist in Entwicklung.
- Bei den Kompetenzbeschreibungen gibt es nun eine Spalte „Aktiv“. Bei „Kompetenzen f. Ankreuzzeugnisse“ auf dem Karteireiter „Akt. Halbjahr“ merkt sich das Programm nun, bei welchem Fach die Kompetenzliste ausgeklappt war und klappt sie dann bei einem Schülerwechsel automatisch bei diesem Fach wieder aus.

<a id="Reportausgabe_6"></a>

### Reportausgabe

- In Reports wird nun die Funktion „Email Settings \> Enabled“ ausgewertet. Damit kann man nun steuern, ob ein Report E-Mail-Versand unterstützt oder nicht.

<a id="Berufskollegs_11"></a>

### Berufskollegs

- Alle Gliederungen:
  - Die „BK-Abschluss-Fächer“ sind nun bearbeitbar, d.h. es können Fächer gelöscht oder hinzugefügt werden, außerdem wird der Fachlehrer angezeigt.
  - Der Algorithmus für das GeR-Niveau ist umgesetzt (auch als Gruppenprozess).
  - Wichtig: Bei den Sprachenfolgen wird nun „ab der Primarstufe“ gezählt, d.h. für eine neu einsetzende Fremdsprache muss der Jahrgang 11 verwendet werden (und nicht der Jahrgang 1, der bisher von einigen BKs für die neu einsetzenden FS verwendet wurde).
- Gliederung D01, Jg. 04
  - Es kann nun gewählt werden, ob die Daten für den Karteireiter BK-Abschluss aus dem akt. Halbjahr oder aus dem Abiturbereich geholt werden sollen.
- Gliederung A02
  - Der Abschluss-Algorithmus wurde komplett umgesetzt, bitte prüfen, ob das „Erscheinungsbild“ unten auf dem Karteireiter „BK-Abschluss“ korrekt ist. Das gilt auch für die übrigen Gliederungen (und die Spaltendarstellung der Fächer).
- Gliederungen B08-B10
  - Der Abschluss-Algorithmus ist umgesetzt. ***Wichtig:*** Da hier ja zwischen „G-„ und „E-Kurs“ unterschieden wird, wurden die Kursarten E und G in der Datei Statkue.mdb (Tabelle ZulKuArt) auch für das BK hinzugefügt (aktualisierte Datei ist im Download enthalten). Im Algorithmus wird folgendes abgefragt: Kursart beginnt mit „E“: E-Kurs, Sonst: G-Kurs
  - Abschlussberechnungen in der SGL A04 werden nun wie in der SGL A01 ausgeführt.
  - Die GeR-Niveaus werden nun auch am BK berechnet. ***Wichtig:*** Bei den Sprachenfolgen wird nun „ab der Primarstufe“ gezählt, d.h. für eine neu einsetzende Fremdsprache muss der Jahrgang 11 verwendet werden (und nicht der Jahrgang 1, der bisher von einigen BKs für die neu einsetzenden FS verwendet wurde).

<a id="Version_2.0.22.2"></a>

## Version 2.0.22.2

<a id="Schulformübergreifende_Änderungen_2"></a>
<a id="Schulform.C3.BCbergreifende_.C3.84nderungen_2"></a>

### Schulformübergreifende Änderungen

- Beim Export in die Notenmodule wurde ein Fehler korrigiert, so dass nun keine leeren Lehrerdateien mehr erzeugt werden.
- Die Übertragung von Kursen (beim Halbjahres- oder Schuljahreswechsel) wurde verbessert und beschleunigt, u.a. werden Kurse mit gleichen Namen und verschiedenen Lehrern nun als „verschieden“ erkannt.
- Es wurde ein Teamviewer-Quicksupport-Modul in der Version 14 mitgeliefert. Das Programm kann aus Schild-NRW heraus mit STRG-T gestartet werden.
- Der Import von Betrieben (bzw. Zuordnungen von Schülern zu Betrieben) über die „Schnittstelle SchILD-NRW“ wurde deutlich verbessert. Es wird jetzt anhand mehrerer Kriterien der „am besten passende Betrieb“ gesucht. Nur wenn kein solcher gefunden wird, erfolgt ein Neueintrag im Katalog „Allgemeine Adressen“.
- Bei der Einstellung „Autoedit-Funktion für Individualdaten deaktivieren“ kam es zu einer Fehlermeldung, wenn in ein Editierfeld ein Text eingegeben wurde, dies ist nun korrigiert.

<a id="Berufskollegs_12"></a>

### Berufskollegs

- In der Anlagen-D wird nun bei der Versetzung von Jahrgang 1 nach Jahrgang 2 das „kleine FHR“ geprüft und die Durchschnittsnote im akt. Abschnitt gespeichert.
- Die Datenquelle FachUebersicht wird nun auch an BKs korrekt gefüllt.

<a id="Gymnasiale_Oberstufe_3"></a>

### Gymnasiale Oberstufe

- Die Änderungen zur Berechnung des GER wurden eingefügt. Es wird nun der Durchschnitt aus zwei Abschnitten berücksichtigt.
- Es wurden noch einige kleinere Fehler bei den Prüfalgorithmen behoben.

<a id="Version_2.0.21.14"></a>

## Version 2.0.21.14

<a id="Schulformübergreifende_Änderungen_3"></a>
<a id="Schulform.C3.BCbergreifende_.C3.84nderungen_3"></a>

### Schulformübergreifende Änderungen

- In der Benutzerverwaltung wird jetzt das Kennwort eines Benutzers über die rechte Maustaste geändert.
- Wenn in der Benutzerverwaltung alle Lehrkräfte als Benutzer übernommen werden (Schalter „Alle Lehrkräfte übernehmen“), wird jetzt der Nachname als Benutzername übernommen, der Login-Name ist weiterhin das Kürzel.
- Import aus Notendateien: Es werden jetzt die korrekten Anzahlen für die importierten Zeugnis- und Teilleistungsnoten angezeigt.
- Bei der Erzeugung von Notendateien werden jetzt vorhandene Teilleistungsnoten exportiert.
- Beim Gruppenprozess „Zeugnisbemerkung zuweisen“ kam es zu Problemen, wenn der eingegebene Text mehr als einen „Platzhalter“ enthielt, nun korrigiert.
- Der Gruppenprozesse KAOA-Daten eingeben wurde korrigiert.
- Der Editor für die Floskeleingabe sollte sich nun an die Skalierung anpassen.

<a id="Gesamtschulen_4"></a>

### Gesamtschulen

- Beim neuen Prognosealgorithmus kam es zu Problemen, wenn ein Fach mit gleichem Statistik-Kürzel mehrfach vorkam. Der Algorithmus rechnet nun auch in diesem Fall korrekt.

<a id="Berufskollegs_13"></a>

### Berufskollegs

- Die Liste der „Abschlusshierarchien“ wurde ergänzt, so dass die Prüfung, ob der erzielte Abschluss höher ist als der eingebrachte Abschluss, korrekt funktionieren sollte.

<a id="Reportausgabe_7"></a>

### Reportausgabe

- Die Datenquelle „KlassenLehrer“ berücksichtigt jetzt auch das im Report-Explorer eingestellt Halbjahr. Gleiches gilt auch für die Datenquelle „Klassenlehrer_mit_Faechern“.
- In der Datenquelle „Zuweisungen“ wurde das Fachkürzel nicht korrekt ausgegeben, nun korrigiert.

<a id="Version_2.0.21.12"></a>

## Version 2.0.21.12

<a id="Schulformübergreifende_Änderungen_4"></a>
<a id="Schulform.C3.BCbergreifende_.C3.84nderungen_4"></a>

### Schulformübergreifende Änderungen

- Es wird nun ab Klasse 7 in den Sek1-Schulen ein KAOA-Reiter eingeblendet. Dieser kann in den Programmeinstellungen ausgeblendet werden. Die Merkmale des KAOA-Katalogs sind vom MSB vorgegeben.
- Der Katalog „Beschäftigungsarten“ wurde in allen Schulformen eingeblendet. Damit können diese unter „Weitere Adressen/Betriebe“ ergänzt werden. An der Schulform BK heißt der Katalog weiterhin „Berufe“.
- Fehler beim Import der Lehrkraefte.dat behoben.
- Die externe Benutzerverwaltung UserAdmn.exe kann nun auch mit dem neuen Passwortverfahren umgehen.
- Beim Import von Tendenznoten in Teilleistungen aus dem neuen ENM-Notenmodul wurde ein Problem behoben, das dazu führte, dass Tendenzen nicht importiert wurden.
- Es gibt nun unter Teilleistungen einen Gruppenprozess „Teilleitungen global zuweisen“.
- Dieser Prozess trägt bei der gewählten Schülermenge bei allen vorhandenen Fächern die gewählten Teilleistungsarten auf einmal ein.
- In der Reporting wurde in der Lehrerliste der Datenquelle Lehrkraefte auch unsichtbare Lehrkräfte angezeigt. Dies wurde geändert.
- In der Reporting wurde im Auswahldialog für die Kurse das Verhalten korrigiert. Wenn man auf „alle Kurse markieren“ klickt, werden diese nun auch gedruckt.
- Namensänderungen werden bei bestehenden Personengruppen nun beim Ausführen des Buttons „Datenabgleich“ aktualisiert.
- Es können unter Schulverwaltung \> Unterrichtsfächer nun mehrere Fächer markiert und gelöscht werden.
- Das Feld „Koop-Klasse“ wurde in der Klassen-/Versetzungs-Tabelle entfernt, da es für die Statistik nicht mehr benötigt wird.
- Für den LuPO-Export wird nun auch die Einstellung „schulische Mail-Adresse bevorzugen“ genutzt.
- In Inklusionszeugnissen soll manchmal in den Bemerkungen auch das Konferenzdatum ausgegeben werden. Aus diesem Grund kann nun der Platzhalter \$KONFERENZDATUM\$ in Floskeln verwendet werden.
- Wichtig: Da das Konferenzdatum i.d.R. erst nach den Bemerkungen eingetragen wird, erfolgt (anders als z.B. bei \$VORNAME\$) keine automatische Ersetzung des Platzhalters schon bei der Zuweisung einer Floskeln. Um den Platzhalter zu ersetzen, muss der Gruppenprozess „Noten, Zeugnisvorbereitung\>\>Platzhalter in Memo-Feldern ersetzen“ aufgerufen werden.

<a id="Sekundarschulen_und_Gesamtschulen"></a>

### Sekundarschulen und Gesamtschulen

- Bei eingetragener Gliederung „RH“ sollte nun die Abschlussberechnung so wie in den Gesamtschulen auch funktionieren.
- Es wurde nun der Prognose-Algorithmus von PM2 auch in Schild-NRW implementiert. Damit sollten unterschiedliche Berechnungen zwischen den beiden Programmen nicht mehr vorkommen. Ein einfacher „Planspiel-Modus“ steht auch zur Verfügung.

<a id="Gymnasium_7"></a>

### Gymnasium

- Die Versetzungsberechnung in der EF am GY8 wurde freigeschaltet.

<a id="Gymnasiale_Oberstufe_4"></a>

### Gymnasiale Oberstufe

- Wenn die Kursarten AB3, AB4, LK1 und LK2 per Gruppenprozess verändert werden, wird das nun auch in der Spalte „Abifach“ berücksichtigt.

<a id="Version_2.0.21.8"></a>

## Version 2.0.21.8

<a id="Statistik"></a>

### Statistik

- Es wird eine aktualisierte Version der Datei ASDTABS.MDB bereitgestellt. Diese enthält
- korrigierte Fehlermeldungen für die Statistik-Prüfung.

<a id="Reportausgabe_8"></a>

### Reportausgabe

- Bei den Erzieher-Adressen wurde das Feld PLZOrt nicht gefüllt, nun korrigiert.

<a id="Version_2.0.21.6"></a>

## Version 2.0.21.6

<a id="Schulformübergreifende_Änderungen_5"></a>
<a id="Schulform.C3.BCbergreifende_.C3.84nderungen_5"></a>

### Schulformübergreifende Änderungen

- Bei der Ausgabe von Lehrerreports, bei denen die interaktive Lehrerauswahl aktiviert ist, kam es zu einer Fehlermeldung, nun behoben.
- Beim Schulträgerexport („Datenaustausch\>\>Schnittstelle SchILD-NRW\>\>Export an Schulträger“) kann nun gewählt werden, ob nur die aktuelle Auswahl berücksichtigt werden soll oder alle Schüler (also auch solche mit Status „Abgänger“ oder „Abschluss“).

<a id="Gesamtschulen_5"></a>

### Gesamtschulen

- Beim Statistik-Export wurden E- und G-Kurse nicht mit dem korrekten Schlüsselwert exportiert, dies ist nun korrigiert.

<a id="Version_2.0.21.4"></a>

## Version 2.0.21.4

<a id="Reportausgabe_9"></a>

### Reportausgabe

- Bei der Reportausgabe wurden manche Angaben (z.B. Art der Erziehungsberechtigten,
- Telefonart) nicht mehr im Klartext ausgegeben. Dies ist nun durch ein alternatives
- Verfahren, die Daten in der Datenbank zu ermitteln, behoben.

<a id="Version_2.0.21.3"></a>

## Version 2.0.21.3

<a id="Schulform_unabhängige_Änderungen_22"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_22"></a>

### Schulform unabhängige Änderungen

- Bei bestimmten Betriebssystem-== Versionen (z.B. Windows 7 32-bit) kam es aus nicht geklärten Gründen zu Fehlermeldungen der Art „Application made attempt to free invalid or unknown memory block.“ Diese scheinen mit einer neuen Version des in SchILD verwendeten „Fehlerprotokollierers“ (Eurekalog) zusammenzuhängen. Daher wurde wieder auf die vorherige Version zurückgestellt.
- Über den Menüpunkt „Datenaustausch\>\>Schnittstelle SchILD-NRW\>\>Export an Schulträger“ können rudimentäre Stammdaten der Schüler (z.B. Name, Vorname, Adresse) exportiert und dem Schulträger für Auswertungen zur Verfügung gestellt werden. Der bisherige unverschlüsselte Export ist nun aus Sicherheitsgründen nicht mehr möglich, es wird nun eine mit Kennwort verschlüsselte Zip-Datei erstellt. Dabei stehen folgende Optionen zur Verfügung:
  - Daten verschlüsseln mit Standardkennwort (Entschlüsselung nur mit Schulträgermodul von SchILDzentral möglich)
  - Daten verschlüsseln mit individuellem Kennwort (muss mit Schulträger abgesprochen werden)
- Bei der ersten Option ist eine Entschlüsselung nur mit dem Schulträgermodul von SchILDzentral möglich, bei der zweiten Option kann ein eigenes Kennwort für die Verschlüsselung verwendet werden, das dann aber dem Schulträger mitgeteilt werden muss.
- Wichtig: Falls die Daten per E-Mail verschickt werden, sollte das Kennwort keinesfalls in der gleichen E-Mail mitgeteilt werden.

<a id="Version_2.0.21.1"></a>

## Version 2.0.21.1

<a id="Schulform_unabhängige_Änderungen_23"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_23"></a>

### Schulform unabhängige Änderungen

- Für die Schulstatistik wurde noch eine Ergänzung bei der Ausgabe von Betreuungsmaßnahmen gemacht, außerdem enthält das Update die aktuellen == Versionen der NRW-Schultabelle und des Statistik-Moduls von IT-NRW.
- Die Berechtigungen zur Eingabe/Änderung von Fördermaßnahmen wurden angepasst.
- Beim Halbjahreswechsel werden jetzt bei Epochalfächern neben der Note auch die Bemerkungen zum Fach (sofern vorhanden) übernommen.

<a id="Grundschulen_7"></a>

### Grundschulen

- In Kürze wird ein auf die Belange der Grundschulen zugeschnittenes „Grundschul-Notenmodul“ zur Verfügung stehen. In der aktuellen SchILD-Version können bereits Notendateien für dieses Modul erzeugt werden („Datenaustausch\>\>Externes Notenmodul“).

<a id="Berufskollegs_14"></a>

### Berufskollegs

- Die Versetzungsart „Versetzt, Anforderungen nicht erfüllt“ wurde beim Schuljahreswechsel nicht korrekt berücksichtigt, dies ist nun korrigiert.

<a id="Reportausgabe_10"></a>

### Reportausgabe

- In der Datenquelle „Schueler_zu_aktuellem_Betrieb“ wurden die Namen der Betreuer (im jeweiligen Betrieb) und der betreuenden Lehrkräfte nicht immer korrekt ausgegeben, dies ist nun korrigiert.

<a id="Version_2.0.20.2"></a>

## Version 2.0.20.2

<a id="Schulform_unabhängige_Änderungen_24"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_24"></a>

### Schulform unabhängige Änderungen

- Aus Sicherheitsgründen wurde die Speicherung der Benutzerpasswörter geändert. Die Passwörter werden ab jetzt auch noch in einem Hashwert hinterlegt, so dass der Klartext in Zukunft nicht mehr auszulesen ist. In einer kommenden Version, werden die alten Passwortfelder dann gelöscht.
- In der Updateroutine wurde eine Sicherheitslücke geschlossen, die es einem Angreifen unter gewissen Umständen ermöglichte eine Schadsoftware mit Admin-Rechten auszuführen.
- Bitte machen Sie vor dem Update eine Datensicherung.
- Im Reportexplorer werden nun auch INI-Dateien angezeigt. Diese Datei-Art kann in Reports verwendet werden, um zur Laufzeit einige Parameter zu ändern.
- In der Abteilung Migrationshintergrund (Indiv.-Daten II) steht nun das Feld „Ende Anschlussförderung“ zur Verfügung. Im Filter I steht das Feld auch zur Verfügung.
- Die Hilfstabellen wurden mit den aktuellen Schlüsseln für die Statistik 2018/19 versehen.

<a id="Schulform_Primus"></a>

### Schulform Primus

- Die Abschlussberechnung ab Klasse 9 wurde freigeschaltet.

<a id="Realschule_und_Hauptschule"></a>

### Realschule und Hauptschule

- Das Betreuungsmerkmal 6 steht ab jetzt auf Individual-Daten II zur Verfügung. Es muss aber vorher unter“ Schule bearbeiten“ eingerichtet werden.

<a id="Grundschulen_8"></a>

### Grundschulen

- Beim Zuordnen der Word-Zeugnisvorlagen kam es zu einer Zugriffverletzung. Das wurde behoben.

<a id="Version_2.0.19.3"></a>

## Version 2.0.19.3

<a id="Schulform_unabhängige_Änderungen_25"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_25"></a>

### Schulform unabhängige Änderungen

- Ein Fehler beim Import der Notendateien wurde behoben.
- Schulen, die das 2.0.19.2 Update ausgeführt haben benötigen nur die korrigierte Schild2000.exe.

<a id="Version_2.0.19.2"></a>

## Version 2.0.19.2

<a id="Schulform_unabhängige_Änderungen_26"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_26"></a>

### Schulform unabhängige Änderungen

- Beim Mail-Versand über SMTP erschien kein Dialog-Fenster. Die ist nun behoben. Außerdem wurde nochmal ein Update der Fleximailer-Komponente eingespielt.

<a id="Grundschulen_9"></a>

### Grundschulen

- Es ist nun möglich, Steuerdateien für Zeugnisse auch im Excel-Format zu erstellen. Dadurch ist es möglich, weitere Daten (insbesondere Noten und Bemerkungen zu Fächern) z \* exportieren, die dann im Seriendruck ausgegeben werden können.
- Wichtig: Falls vorhandene Word-Vorlagen verwendet werden sollen, so müssen diese zuvor an die Struktur der neuen Excel-Steuerdatei angepasst werden.

<a id="Reportverwaltung_2"></a>

### Reportverwaltung

- Bei Nutzung der Datenquelle „schriftliche Abiturfächer“ kam es zu einer Fehlermeldung, nun korrigiert.
- Die Datenquelle „SchuelerKlasse“ wurde in manchen Fällen nicht automatisch geöffnet, nun korrigiert.

<a id="Version_2.0.18.16"></a>

## Version 2.0.18.16

<a id="Schulform_unabhängige_Änderungen_27"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_27"></a>

### Schulform unabhängige Änderungen

- In einer internen Komponente ist ein Fehler bei der Sortierung der Fächer aufgetreten. Der Fehler führte dazu, dass die Sortierung auf Leistungsübersichten nicht mehr korrekt war. Das wurde korrigiert.

<a id="Version_2.0.18.15"></a>

## Version 2.0.18.15

<a id="Schulform_unabhängige_Änderungen_28"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_28"></a>

### Schulform unabhängige Änderungen

- Der Mailversand wurde nochmals angepasst. Es wurde ein Update der Fleximailer-Komponente eingespielt, welches einige Probleme im Umgang mit Outlook behebt.
- Der Mailversand ist nun in drei Optionen aufgeteilt:
  - Verwendung des Standardmailprogramms
    - Es wird das in Windows registrierte Mailprogramm aufgerufen.
    - Die neuen Komponenten sollten dabei auch die Funktionen des Extended MAPI beherrschen, d.h. es können mehrere Mails mit Anhängen auch BCC an Benutzer ohne zusätzliche Abfragen gesendet werden.
  - Verwendung des Standardmailprogramms mit Option „Simple MAPI verwenden“
    - Sollte aus irgendeinem Grund das Mailprogramm nicht funktionieren, so kann man versuchen, über die o.g. Funktion lediglich Simple-Mapi zu verwenden, damit können dann aber keine Anhänge an eine oder mehrere Personen versendet werden.
  - SMTP-Versand
    - Sollte es bei den oberen beiden Optionen immer noch Probleme geben, so empfehlen wir den Versand direkt über SMTP. Dazu müssen die Angaben zum Server (globale Einstellungen) und die individuellen Kontodaten (individuelle Einstellungen) für die Mailaccounts hinterlegt werden.
- In der Datenquelle Lernabschnitte wird jetzt bei der Auswahl der E-Mail-Adresse zu Schülern und Lehrern berücksichtigt, welche Einstellung (privat/dienstlich) bevorzugt genommen werden soll.

<a id="Gesamtschule_2"></a>

### Gesamtschule

- Bei der Ermittlung der Sprachenfolge sollte nun in der Gesamtschule im letzten Abschnitt der Q2 korrekt der 13. Jahrgang angegeben werden.

<a id="Gymnasium_8"></a>

### Gymnasium

- Es steht nun das Sprachniveau C1 zur Verfügung. Eine Berechnung dieses Niveaus erfolgt nicht.

<a id="Gymnasiale_Oberstufe_5"></a>

### Gymnasiale Oberstufe

- Bei der Zulassung zum Abitur werden nun die neuen Statistikkürzel zu Vokalpraktischen Kursen und Instrumentalpraktischen Kursen korrekt interpretiert.

<a id="Version_2.0.18.10"></a>

## Version 2.0.18.10

<a id="Schulform_unabhängige_Änderungen_29"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_29"></a>

### Schulform unabhängige Änderungen

- Es wurden einige Probleme im Mailversand behoben. Outlook2016 kann nun in Kombination mit Windows10 auch im neuesten Update verwendet werden.
- Beim Versand von Serienmails aus der Reporting und beim Versand von Notendateien, wird nun zu Kontrollzwecken die erste E-Mail angezeigt, wenn ein Standardmailprogramm genutzt wird. Alle weiteren E-Mails werden dann im Hintergrund versendet.
- Mailversand hatte Probleme bei Pfadangaben mit Leerzeichen. Die Notendateien wurden dann nicht als Anhang gesendet.
- Mailprogramme ohne Extended-MAPI-Unterstützung können nur Einzelmails versenden. (z.B. Mail in Windows 10). Es erscheint ein entsprechender Hinweis.

<a id="Grundschule_3"></a>

### Grundschule

- Es wurden erste Vorbereitungen für die Möglichkeit, Ankreuzzeugnisse zu erstellen, in Schild-NRW implementiert.
- Unter Schulverwaltung \> Stundentafeln wurde die Möglichkeit geschaffen, „Standardtafeln“ zu holen, die die Fächer der Ankreuzzeugnisse berücksichtigen. Dafür müssen eigene Stundentafeln vorher gelöscht werden.
- In der Klassen-/Versetzungstabelle befindet sich nun ein Haken „In dieser Klasse werden Ankreuzzeugnisse verwendet“. Ist dieser Haken gesetzt, so erscheint beim Schüler im akt. Halbjahr ein weiterer Reiter für die Liste der Kompetenzen mit den Ankreuzzeugnissen.
- Unter Schulverwaltung „Angaben für Ankreuzzeugnisse“ können dann die Kategorien mit einer Liste der Kompetenzen für jede Jahrgangsstufe erzeugt werden. Die Kompetenzstufen werden auf dem zweiten Reiter eingegeben.
- Sind diese Vorbereitungen gemacht, so lassen sich die Kompetenzen auf dem Reiter des Schülers holen und die Stufen 1-5 können eingegeben werden.
- Für diese Variante wird es im kommenden Jahr auch ein Lehrermodul geben.
- Es stehen auch Datenquellen für diese Kompetenzen zur Verfügung, welche in einem nächsten Schritt veröffentlicht werden.
- Unter dem Menüpunkt „Test“ gibt es nun einen Testexport für die XLS-Datei, die zukünftig den Word-Seriendruck für die Grundschulzeugnisse regeln soll. Es entsteht eine GSZeugnisExport.xls und diese wird im Programmverzeichnis abgelegt.

<a id="Version_2.0.18.3"></a>

## Version 2.0.18.3

<a id="Schulform_unabhängige_Änderungen_30"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_30"></a>

### Schulform unabhängige Änderungen

- Mailversand wurde im gesamten Programm umgestellt. Dazu liegt nun eine Datei namens Fleximailer.dll im Programmverzeichnis. Dieser Mailverkehr kann nun auch mit Microsoft-Outlook über das Extended MAPI-Verfahren kommunizieren. Dabei sollte es nun möglich sein, Anhänge über Outlook auch ohne Einzelbestätigung zu senden.
- Portable-Programme und Web-Mailer können über diese Schnittstelle nicht angesprochen werden. Es muss ein Standardmailprogramm in Windows registriert sein.
- Bitte kontrollieren Sie die Einstellungen zum Mailversand in Schild-NRW. Bei einigen Portangaben muss der Haken bei SSL-Verwenden deaktiviert werden!
- Bei Port 587 muss in der Regel SSL deaktiviert werden. Ob Ihr SMTP Server StartTLS aktiviert haben muss, probieren Sie bitte aus.
- Die RAP-Funktion „PickDatum“ funktioniert wieder.
- Es wurde das Feld Schueler\[Schul-Email\] bei den Schülern eingeführt. Hier soll die E-Mail-Adresse, die u.U. im pädagogischen System der Schule vergeben wird, verwaltet werden.
- Unter den globalen Einstellungen kann auch aktiviert werden, dass beim Mailversand diese Adresse genommen werden soll. Später soll diese Adresse auch importiert werden können, z.B. aus Logineo.
- Die Reportingdatenquelle LeistungsUebersicht verwendet nun auch die in Schild-NRW genutzte Sortierung.
- Im Gruppenprozess „Zeugnisse drucken und Schüler ausschulen“ wurde eine Fehlermeldung beseitigt.
- Im Gruppenprozess „Fehlstunden eingeben“ wird nun auch nach Name und Vorname sortiert.
- Die Auswahlliste „Zeugnisart“ im akt. Halbjahr wurde um die Art „Zieldifferentes Zeugnis (ZD)“ ergänzt.
- Mit der Lehrkräfte.dat wird nun auch die Anrede korrekt importiert.
- In der Sim.txt können nun auch Statistikbezeichnungen mit doppeltem Parallelitätskennzeichen (z.B. JUAA) übermittelt werden. So ist es möglich, mehr als 26 Kombinationen mit einem Jahrgang zu übermitteln.
- Im Dialog „Stundentafeln zuweisen“ lässt sich nun die Fenstergröße ändern.
- In der Datenquelle „Kursunterricht“ wurde ein Berechnungsfehler für die Kurszahlen behoben.
- Der Reportexplorer reagiert nun auch auf die in Schild-NRW eingestellte Skalierung.
- Der Menüpunkt „DB-Version zurücksetzen“ in der Benutzerverwaltung funktioniert wieder.
- Beim Notenversand ohne Kennwort wurde keine Notendatei angefügt. Es sollten zwar nur verschlüsselte Notendateien gesendet werden, aber dieser Fehler ist behoben.
- Bei den Betrieben / Adressen wurde ein Fehler behoben, der die Sichtbarkeitsumschaltung verhindert hat.

<a id="Berufskollegs_15"></a>

### Berufskollegs

- In den Bildungsgängen der A01 wurde auf dem Karteireiter BKAbschluss ein weiteres Feld eingeführt, das das Bestehen des IHK-Abschlusses mit Ja/Nein verwaltet.
- Wenn dieses Feld auf „Nein“ steht, wird dem Schüler bei der Berechnung der Abschlüsse zunächst der FOR nicht gegeben, auch wenn die Voraussetzungen erfüllt sind.
- Für die Bearbeitung des Feldes steht auch ein Gruppenprozess zur Verfügung.
- In der Anlage D01 wurde nun ein Berechnungsalgorithmus zur Abschlussberechnung des 4. Jahrgangs auf dem Reiter BKAbschluss hinterlegt. Eine Beschreibung finden Sie im Wiki im Artikel zu dem Reiter BKAbschluss.
- Die Reportingdatenquelle FHRFaecher verwendet jetzt die gliederungsbezogenen Einstellungen bei der Sortierung.
- Im Gruppenprozess „Versetzungsvermerk setzen“ steht nun auch die Spalte „Zeugnisart“ zur Verfügung.

<a id="Schulform_Primus_2"></a>

### Schulform Primus

- Die Kursart DK steht nun zur Verfügung. Auch können nun Primusdatenbanken über die Ersteinrichtung selbst eingerichtet werden.

<a id="Förderschulen_3"></a>
<a id="F.C3.B6rderschulen_3"></a>

### Förderschulen

- Es wurden einige Änderungen an dem Versetzungsalgorithmus gemacht. Es kann nun der Jahrgang der Klasse in der Klassen-/Versetzungstabelle leer bleiben. Die Folgejahrgänge werden chronologisch hochgeschrieben, wobei in den Primarjahrgängen die gleiche Reihenfolge genommen wird wie in der Grundschule. Förderschulen mit 11-jährigen Bildungsgängen müssen die Spalte Folgejahrgänge in den Statistikjahrgängen benutzen!

<a id="Gesamtschulen_6"></a>

### Gesamtschulen

- Die Sprachenfolge in der Q2 wird im Gruppenprozess nun wieder richtig mit 13 ermittelt.
- Im Gruppenprozess „Individualdaten ändern“ ist den Lernabschnitten nun auch das Feld „Abschluss ist Prognose“ enthalten.

<a id="Version_2.0.17.5"></a>

## Version 2.0.17.5

<a id="Schulform_unabhängige_Änderungen_31"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_31"></a>

### Schulform unabhängige Änderungen

- In einigen Datenbanken wurden Fächer mit leeren Fachkürzeln gefunden, was den Export von Notenmodulen verhindert hat. Dieser Fehler wurde abgefangen.

<a id="Berufskollegs_16"></a>

### Berufskollegs

- In MySQL-Datenbanken konnte in manchen Bildungsgängen die FHR-Durchschnittsnote nicht manuell eingetragen werden.

<a id="Gesamtschule_3"></a>

### Gesamtschule

- An der Gesamtschule wird beim Holen der Sprachenfolge nun 13 statt 12 eingetragen (bei Q2-Schülern)

<a id="Grundschulen_10"></a>

### Grundschulen

- Bei der Versetzung wurde der Jahrgang 03 versehentlich als Abschlussjahrgang ausgewiesen, dieses Problem wurde behoben.

<a id="Version_2.0.17.3"></a>

## Version 2.0.17.3

<a id="Schulform_unabhängige_Änderungen_32"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_32"></a>

### Schulform unabhängige Änderungen

- Es wurde ein Fehler bei der Übermittlung der Benutzerbezogenen Kennwörter beim Export in die Notenmodule behoben.

<a id="Version_2.0.17.2"></a>

## Version 2.0.17.2

<a id="Schulform_unabhängige_Änderungen_33"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_33"></a>

### Schulform unabhängige Änderungen

- Es werden eine neue ASDTABS.mdb und eine neue Statistik.dll mit ausgeliefert. Damit sollten einige Prüfungen (z.B. auf leere Konfession) mehr stattfinden. Außerdem wird dann auch dort auf die aktuell gültigen Klassenjahrgänge in der Statistikbezeichnung geprüft.
- Ein Problem im letzten Update bei MySQL-Datenbanken in der Anzeige der Leistungsdaten bei eingeschaltetem Fehlzeiten-Reiter wurde behoben.
- In einigen Fällen kam beim Export der Notendateien die Meldung „Operation kann bei geöffneter Datenmenge nicht ausgeführt werden“. Dieser Fehler wurde behoben.

<a id="Version_2.0.17.1"></a>

## Version 2.0.17.1

<a id="Grundschule_4"></a>

### Grundschule

- Es wurde ein automatischer Aufräumprozess für die kommende Statistik eingebaut. Dieser Prozess wird nach dem Update und danach einmal die Woche gestartet. Er kann auch über „Extras \> automatische Prozesse“ aufgerufen werden.
- Dieser Prozess durchsucht die Tabelle „Statistikjahrgänge“ und die „Klassen-/Versetzungstabelle“ nach ungültigen Einträgen für die Statistik. Es werden hier nur die Felder „ASD-Jahrgang“ und die Statistikbezeichnung der Klasse untersucht.
- Wenn der Prozess eine ungültige Bezeichnung findet, bietet er eine automatische Korrektur an. Dabei werden alle Jahrgänge, die nicht zum Schüler gehören, aus der Tabelle Statistikjahrgänge gelöscht und bei den Schülern in E1, E2, E3, 03 oder 04 gewandelt.
- Die Klassen-/Versetzungstabelle enthält nun nicht mehr die Felder „Statistik-Bez.“ und „Jahrgang“, sondern die Felder „Jahrgang“ und „Parallelität“, so wie in ASDPC32.
- Auch hier werden nun nur noch gültige Einträge für Klassen angeboten, JU,1E,2E,03 oder 04.
- Die „alte Eintragung“ „EP“ wird dann automatisch durch „JU“ ersetzt, so wie es in der kommenden Statistik gefordert wird.
- Einen falschen Klassenjahrgang in der Klassen-/Versetzungstabelle kann der Automatismus allerdings nicht erkennen! Wenn dort bei einer Jahrgangsbezogenen Klasse „EP“ eingetragen war, dann macht der Automatismus „JU“ aus dem Klassenjahrgang. Hier müsste dann manuell auf z.B. „1E“ geändert werden.
- Eine Prüfung auf eine eindeutige Kombination von Jahrgang und Parallelität wurde nun auch eingeführt. Es ist nun nicht mehr möglich, z.B. JUA zweimal zu vergeben.
- Das Feld „Klassenart“ aus den aktuellen Laufbahndaten wurde auf die Seite „Individual-Daten I“ geholt, damit es im aktuellen Abschnitt besser kontrolliert werden kann.

<a id="Berufskolleg_11"></a>

### Berufskolleg

- In der Anlage E wurde die Berechnung der Durchschnittsnote zur FHR angepasst. Es werden nun die Vornote und die Abschlussnote des schriftlichen FHR-Fachs in den Durschnitt eingebracht. Dabei kann man zwei Varianten wählen:
  1.  . Das Fach wird mit Vornote und Prüfungsnoten (ggf. mündlich) gefüllt, es werden dann beide Noten berücksichtigt.
  2.  Es wird eigens für die schriftliche Prüfung ein Fach eingeführt, dann bleibt hier die Vornote leer. Auch in diesem Fall werden ja dann beide Noten berücksichtigt.
- Außerdem wird geprüft, ob das FHR-Fach mit mindestens 4 abgeschlossen wurde.

<a id="Gymnasium_9"></a>

### Gymnasium

- Bei Schülern mit der Gliederung „GY9=Wiedereinrichter G9“ wird jetzt wieder der ZP10/Reiter in dem Jahrgang 10 eingeblendet.

<a id="Version_2.0.16.7"></a>

## Version 2.0.16.7

<a id="Gymnasiale_Oberstufe_6"></a>

### Gymnasiale Oberstufe

- Es wurde noch einige Fehler im Zulassungsalgorithmus behoben.
- Es wird nun erkannt, dass die neueinsetzende Fremdsprache in Q2.2 mündlich sein muss und auch bei AB4 mündlich ist.

<a id="Version_2.0.16.4"></a>

## Version 2.0.16.4

<a id="Firebird-Datenbanken"></a>

### Firebird-Datenbanken

- Beim Druck aus Firebird-Datenbanken kam es zu einem SQL-Error.

<a id="Berufskolleg_Abitur"></a>

### Berufskolleg Abitur

- Der Zulassungsalgorithmus in Anlage D hat die auftretenden Fehler nicht angezeigt. Das Protokoll wurde wieder aktiviert.

<a id="Schulform_unabhängige_Änderungen_34"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_34"></a>

### Schulform unabhängige Änderungen

- In der Klassen- / Versetzungstabelle wurde die Standardeinstellung bei „Auf Schülerdaten übertragen“ auf „nur aktueller Abschnitt“ gesetzt.
- Datenquelle SchuelerFHRFaecher: Beim Berufskolleg wurden die „gliederungs-spezifischen Einstellungen“ nicht berücksichtigt, nun korrigiert.

<a id="Version_2.0.16.3"></a>

## Version 2.0.16.3

<a id="Gymnasiale_Oberstufe_7"></a>

### Gymnasiale Oberstufe

- Änderungen zum Abituralgorithmus wurden eingepflegt. Der Lupo-Direkt-Export wurde korrigiert. Es sollten jetzt auch wieder alle Sprachenfolgen in der Lupo-Datei ankommen.
- In der Fächertabelle können nun Projektkurse als zwei- oder dreistündige Oberstufenkurse definiert werden.

<a id="Schulform_unabhängige_Änderungen_35"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_35"></a>

### Schulform unabhängige Änderungen

- Bei den Telefon-Nummern gibt es nun die Option „Für Weitergabe gesperrt". Wenn dieses Häkchen gesetzt ist, wird die betreffende Nummer z.B. nicht in Telefon-Listen ausgegeben.
- Bei den Grundschuldaten auf dem Karteireiter „Schulbesuch“ wurden die Durchschnitte nicht mit zwei Nachkommastellen angezeigt. Das wurde korrigiert.
- Beim Excel-Export in den Übersichten wurde der Jahrgang 05 nicht richtig exportiert.
- In der Datenquelle SchuelerKlasse wird bei der Lehrere-E-Mail-Adresse nun auch die Dienstmailadresse berücksichtigt.
- Beim Import von bestehenden Floskeln wird nun der Text aktualisiert.
- Die Elternsuche im „Fernglas“ wurde verbessert.
- Generierte Ausweisnummern können nun auch mehr als 10 Stellen haben.
- Fehlermeldungen beim Gruppenprozess „Fächer zuweisen (tabellarisch)“ wurden beseitigt.
- Teilleistungen können nun nicht mehr ohne „Art“ eingegeben werden.
- Beim Zuweisen von Textzeugnissen kann nun auch das ODT-Format gewählt werden, wenn Open-Office als Textverarbeitung eingestellt ist.
- Bei Schnittstellendateien in UTF8-Format wird nun auf BOM geprüft. Damit sollten alle Dateien mit und ohne BOM importiert werden.
- Schülerbilder, die kleiner sind als die eingestellte Skalierung werden nun auch importiert.
- Bei Eltern mit schulinterner Funktion wird nun die E-Mail-Adresse der zweiten Person auch korrekt übernommen.
- Im Filter I unter den Lernabschnittsdaten kann nun auch auf ASV gefiltert werden.

<a id="Gesamtschulen,_Sekundarschulen"></a>
<a id="Gesamtschulen.2C_Sekundarschulen"></a>

### Gesamtschulen, Sekundarschulen

- Es wurde eine PrognosLib.dll ins Hauptverzeichnis gespeichert.
- Wenn in Schild-NRW eine Prognose angestoßen ist, meldet Schild-NRW nun in einem Fenster beide Prognosen (Prognos und Schild-Intern). Sollten die Tests mit der Prognos.dll erfolgreich sein, kann diese eingeschaltet werden.

<a id="Version_2.0.15.9"></a>

## Version 2.0.15.9

<a id="Schulform_unabhängige_Änderungen_36"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_36"></a>

### Schulform unabhängige Änderungen

- Es wurde ein Problem beim Import der SchuelerLeistungsdaten.dat über die Schnittstelle-Schild-NRW behoben.

<a id="Version_2.0.15.8"></a>

## Version 2.0.15.8

<a id="Schulform_unabhängige_Änderungen_37"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_37"></a>

### Schulform unabhängige Änderungen

- Es wurde eine aktuelle Statkue.mdb und eine aktuelle Schulver.mdb ausgeliefert.
- Die ASDStatistik.dll wurde verbessert, es werden nun mehr Fehler angezeigt, die Probleme in ASDPC32 hervorrufen könnten. Bitte beachten Sie jedoch, dass die Prüfung auf Statistikfehler immer nur eine Vorprüfung sein kann. Es kann durchaus Sinn machen, die SIM.txt trotz angezeigter Fehler nach ASDPC32 zu transportieren und dort dann die eigentliche Fehlerprüfung laufen zu lassen.
- Die türkise Farbe für den Eintrag einer aufnehmenden Schule wurde auf alle Schulformen erweitert.
- In der Datenquelle FachUebersicht ist nun das Feld „Hochrechnung“ für die abgeschlossenen Fächer enthalten.
- Unter den Programmeinstellungen „Fächer“ gibt es nun die Option, das Summieren der fachbezogenen Fehlstunden in den Quartalen 1+2 bzw. 3+4 zu verhindern.
- Wird ein Schüler manuell in eine andere Klasse gesetzt, so wird nun auch die korrekte Folgeklasse eingetragen bzw. gelöscht.
- Es steht nun ein Gruppenprozess „Prüfungsnoten aus Teilleistungen holen“ zur Verfügung. Damit kann aus den Teilleistungen zu einem Fach eine Note für den Reiter ZP10 (BKAbschluss) geholt werden. Bei dem Prozess kann die Teilleistungsart ausgewählt werden.
- Es gibt nun einen Fehlzeitenimport/-export über die Schnittstelle. Die genaue Beschreibung wird in der Schnittstellenbeschreibung veröffentlicht. Damit ist es nun möglich die Tagesbezogenen Fehlzeiten extern zu erfassen und dann in Schild-NRW später zu importieren (oder anders herum).
- In Filter I können Auswahlkriterien nun auch mit Doppelklick übernommen werden. (zusätzlich zum „roten Pfeil“)

<a id="Realschule"></a>

### Realschule

- In Realschulen mit Bildungsgang „H“ wurde der GeR-Rechner angepasst. Außerdem wurde die Anzeige der Lernbereichsnoten HA10 korrigiert.

<a id="Grundschule_5"></a>

### Grundschule

- Wenn beim Schuljahreswechsel über Schulverwaltung \> Eigene Schule bearbeiten in der Visuellen Kontrolle eine Änderung auf „nicht versetzt“ gemacht wurde, konnte es bei diesen Schülern zu Problemen bei der Versetzung kommen. Der Fehler ist behoben.
- Bei der Versetzung mit Versetzungsvermerk „Verbleib in der Schuleingangsphase“ kam es zu einem Fehler bei den ersten Jahrgängen (Versetzung von E1 nach E3). Der Fehler ist behoben.

<a id="Version_2.0.15.6"></a>

## Version 2.0.15.6

<a id="Firebird-Datenbanken_2"></a>

### Firebird-Datenbanken

- Firebird unterstützt einige Befehle beim Ändern der Tabellenstruktur für die neue Floskelverwaltung nicht.
- Bitte führen Sie unter Firebird folgende Schritte aus:
  1.  Gehen Sie unter Schulverwaltung \> Floskeln bearbeiten … exportieren Sie die Floskeln.
  2.  Führen Sie unter Extras \> SQL-Befehle eingeben folgende Befehle hintereinander aus:
  3.  delete from Floskeln
  4.  alter table Floskeln drop Floskelgruppe
  5.  alter table Floskeln add Floskelgruppe varchar(10) not null
  6.  alter table Floskeln add constraint Floskeln_PK1 PRIMARY KEY (SchulnrEigner, Floskelgruppe, Kuerzel)\
      Falls sich der Primärschlüssel nicht anlegen lässt, kann es sein, dass noch der alte existiert, dann diesen mit alter table Floskeln drop constraint Floskeln_PK löschen und das Anlegen des neuen Primärschlüssels wiederholen.
  7.  Importieren Sie die Floskeln aus der Datei, die Sie exportiert haben.

<a id="Schulform_unabhängige_Änderungen_38"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_38"></a>

### Schulform unabhängige Änderungen

- Alle PlugIns (DLLs) wurden auf ein neues Verfahren umgestellt.
- Zukünftig müssen zusätzliche PlugIns nur als DLL im Hauptverzeichnis von Schild-NRW liegen. Die alten DLLs im Unterordner Schild-Plugins werden nicht mehr berücksichtigt. Die neuen DLLs werden mit dem Update ausgeliefert.
- Bei dem Gruppenprozess zum Löschen einzelner Fächer kann nun ausgewählt werden, ob geholte Fächer gelöscht werden sollen.
- Die Fehlstundensumme im Quartalsbetrieb wird nun als Summe aus den Quartalen 1+2 und 3+4 gerechnet!
- Bei der Erstellung der Notenmodule werden nun auch die neuen Floskelkategorien mit in das ENM exportiert. Dazu wird ein neues Notenmodul ExtNotMod3.exe ausgeliefert. Alte Notendateien können mit der == Version 3 nicht geöffnet werden!
- In der Übersicht Sek1 wird nun eine Spalte Summe-Jahres-Wstd ausgegeben. Dort werden die unterrichteten Einheiten pro Schuljahr gerechnet und können nach Excel exportiert werden.
- Die Floskelnummer (z.B. \#A11) wird nach dem ENTER wieder ersetzt.

<a id="Berufskollegs_17"></a>

### Berufskollegs

- In der Datenquelle AbiFaecher ist jetzt auch das Feld R_FA (Markierung der Facharbeit) enthalten.
- Auf dem Reiter BKAbschluss wurden nun die Abschlussberechnungen und Änderungen für die Gliederungen B06, B07,B08-B10, A12 und A13 umgesetzt.
- In der Statkue.mdb stehen neue Abgangsarten zur Verfügung.

<a id="Version_2.0.15.4"></a>

## Version 2.0.15.4

<a id="Schulform_unabhängige_Änderungen_39"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_39"></a>

### Schulform unabhängige Änderungen

- Bei einigen Datenbanken kam es nach dem Update auf 2.0.15.3 zu einer Fehlermeldung beim Start von Schild-NRW. (Listenindex überschreitet das Maximum)
- Diese Version behebt diesen Fehler, Sie müssen das Update nur in diesem Fall einmal manuell ausführen.

<a id="Version_2.0.15.3"></a>

## Version 2.0.15.3

<a id="Schulform_unabhängige_Änderungen_40"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_40"></a>

### Schulform unabhängige Änderungen

- Test der neuen ASDStatistik.dll: Die Prüfung der Daten im Hinblick auf die richtige Übertragung zu ASDPC32 mit der SIM.txt wird bis zur nächsten Erhebung weiter überarbeitet. Es wurde nun eine Überprüfung der Förderschwerpunkte und eine Überprüfung der Herkünfte wird nun weiter verbessert.
- Neue kategorisierte Floskeln: Mit dieser TestVersion wurden die Möglichkeiten, die Floskeln zu verwalten erweitert. Es können nun Floskelkategorien angelegt werden und auch Fächerfloskeln mit Jahrgang und Niveau vergeben werden. Eine Anleitung dazu finden Sie im WIKI. [Floskeln bearbeiten](/schild2/unterricht-kataloge/floskeln-bearbeiten)
- Die Benutzerverwaltung wurde in Schild-NRW integriert und muss nun nicht mehr als PlugIn aktiviert werden. Diese steht unter „Extras“ zur Verfügung.
- Es gibt nun eine Abfragemöglichkeit nach dem Straßennamen unter „Betriebe/weitere Adressen“
- Beim Ändern des Lehrerkürzels konnte es passieren, dass der Unterricht des Lehrers falsch eingetragen wurde.
- Bei der Suche mit dem Fernglas kann nun wieder der Doppelklick verwendet werden.
- In wenigen Fällen konnte es dazu kommen, dass die Spalten FSG und FSU im akt. Abschnitt nicht angezeigt wurden. Die Einblendung richtet sich nun ausschließlich nach der Einstellung unter den globalen Einstellungen.
- Das Feld PA-Nr (Personalaktennummer) wurde in die Reporting aufgenommen.
- Ein Fehler beim Mailversand wurde behoben, so dass der BCC-Versand wieder funktioniert.
- Es gibt nun eine Funktion (rechte Maustaste auf den Schülernamen) E-Mail an alle Lehrkräfte des ausgewählten Schülers senden. Diese Funktion bezieht sich immer nur auf einen Schüler!
- Beim Druck mit gleichzeitiger Archivierung konnte es zu einem Fehler kommen.
- Mails an Erzieher werden nun auch gesendet, wenn der erste Erzieher keine Mailadresse eingetragen hat.

<a id="Version_2.0.14.14"></a>

## Version 2.0.14.14

<a id="Schulform_unabhängige_Änderungen_41"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_41"></a>

### Schulform unabhängige Änderungen

- Für den Export nach GPC wurde das Feld PA-NR (Personalaktennummer) bei den Lehrer eingeführt.
- Unter „Datenaustausch“ steht nun ein JaNa-Export zur Verfügung für die Meldung der Nationalitäten nach Jahrgängen.
- Beim Druck mit gleichzeitiger Archivierung wurde ein Fehler behoben, so dass die Subreports jetzt auch beim zweiten Druck gefunden werden.
- Beim Doppelklick auf eine leere Fördermaßnahme kam es zu einem Fehler.
- Bei den Erzieher-Mails wird nun auch die zweite Mail-Adresse berücksichtigt.
- In der Wiedervorlage können bestimmte Meldungen nun vom Löschprozess ausgenommen werden.

<a id="Version_2.0.14.12"></a>

## Version 2.0.14.12

<a id="Sekundarschulen_und_Gesamtschulen_2"></a>

### Sekundarschulen und Gesamtschulen

- Änderungen in den Schulgliederungen unter Schulverwaltung \> Schule bearbeiten: Es wurden überflüssige und in der Statistik störende Gliederungen entfernt! Dadurch kann es sein, dass die bei Ihnen bisher eingestellte Gliederung (z.B. H\*\*) nicht mehr angezeigt wird. Wählen Sie bitte eine korrekte Gliederung aus (Im Beispiel H). Diese Gliederung muss bei allen Schülern per Gruppenprozess neu zugewiesen werden!!!
- In diesem Zuge sollten nun auch Verbundschulen mit den auslaufenden Bildungsgängen R und H einige Korrekturen bei den Berechnungen erhalten. Die Versetzungsberechnungen sollten nun korrekt und ab Klasse 6 ausgeführt werden können. Außerdem kann eine korrekte Prüfungsordnung bei diesen Schülern gewählt werden.

<a id="Schulform_unabhängige_Änderungen_42"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_42"></a>

### Schulform unabhängige Änderungen

- Zuweisungen für den Dialog „Schnellzugriff“ können nun auch aus anderen Ordnern gewählt werden. In diesem Fall wird in den Einstellungen der gesamte Dateipfad dargestellt.
- Unterordner in der Report-Explorer-Struktur bei den Subreports werden wieder gefunden.
- Klassenlehrer konnten Fördermaßnahmen immer löschen, das wurde nun auf die Benutzerrechte eingeschränkt.
- Wenn die Volljährigkeit eines Schülers erkannt wird, wird jetzt auch wieder automatisch der Eintrag „Schüler ist volljährig“ unter den Erziehern gemacht.
- In der Reporting wurde ein Feld Schuler\[ZSSchuleNRW\] eingeführt, welches auch bei Schulen außerhalb von NRW die Schulnummer der DB liefert.
- Bei Neuaufnahmen kam eine Fehlermeldung, wenn man die bisher besuchte Schule mit dem „roten Pfeil“ übernehmen wollte.
- Bei den bisher besuchten Schulen kann nun auch ein Abschluss gewählt werden.
- Bei der Suche mit dem Fernglas werden auch Schüler gefunden, die nicht in der Auswahl sind. Ab jetzt wird auch ein Klassen-/Jahrgangsfilter verändert, wenn man die Auswahl erweitern lassen will, damit der Schülerdatensatz angezeigt wird.
- Die Farben der Fächergruppen in den Einstellungen werden nun wieder korrekt angezeigt.
- Im Dialog „Infos über Datenquellen“ (Reporting) wurde noch 4 Datenquellen korrekt einsortiert.
- Die Funktion „Hilfe \> Auf Update prüfen“ steht ab sofort nur noch mit Admin-Rechten zur Verfügung.
- Ein Fehler in der Abfrage von Lehrer-Stammblättern (Reporting) wurde behoben.

<a id="Gymnasiale_Oberstufe_(z.T._auch_BK)"></a>
<a id="Gymnasiale_Oberstufe_.28z.T._auch_BK.29"></a>

### Gymnasiale Oberstufe (z.T. auch BK)

- Der Export der Schülerdaten für Lupo hatte einen falschen Ausgabedialog.
- Die Facharbeit kann am BK nun optional eingegeben werden, falls der Durchschnitt sich durch die Facharbeit verschlechtern würde. Außerdem wird die Facharbeit jetzt nicht mehr als Kurs gezählt.
- Es können nun optional auch in der Sprachenfolge die Jahrgänge 3 und 4 verwendet werden, falls der Schüler den Englisch-Unterricht der Grundschule dokumentiert haben möchte.
- Die Änderungen bei den GeR-Berechnungen (BASS) wurden berücksichtigt.

<a id="Grundschule_6"></a>

### Grundschule

- In der Klassen-/Versetzungstabelle wurde in der Übersichtstabelle der Jahrgang EP nicht angezeigt.

<a id="Berufskollegs_18"></a>

### Berufskollegs

- In der Tabelle Schulverwaltung \> Fachklassen können nun die neuen „Berufsebenen 1 bis 3“ zur Fachklasse nachgeladen werden. Hier stehen die Bezeichnungen für Schwerpunkt und Fachrichtungen für den Zeugnisdruck zur Verfügung. In den Datenquellen „Lernabschnitte“ und „Schueler“ gibt es nun Felder Berufsebene1…3 dazu.

<a id="Version_2.0.14.9"></a>

## Version 2.0.14.9

<a id="Schulform_unabhängige_Änderungen_43"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_43"></a>

### Schulform unabhängige Änderungen

- In der letzten Version wurden leider die Fehlstundensummen bei fachbezogener Erfassung bei allen Schülern durch das Ausführen des Gruppenprozesses oder des „Berechnen“-Buttons im akt. Halbjahr komplett gelöscht!
- Bitte ersetzen Sie die Schild2000.exe umgehend durch den aktuellen BugFIX!
- Wir bitten diese Unannehmlichkeiten zu entschuldigen.

<a id="Version_2.0.14.7"></a>

## Version 2.0.14.7

<a id="Schulform_unabhängige_Änderungen_44"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_44"></a>

### Schulform unabhängige Änderungen

- In einigen Umgebungen konnten die Reportverzeichnisse unter den Einstellungen nicht mehr verändert werden.
- Unter den Einstellungen konnten die Farben für die Fächergruppen nicht mehr eingestellt werden.
- Fehler bei den fachbezogenen Bemerkungen behoben.
- Bitte tauschen Sie die Schild2000.exe im Programmverzeichnis aus.

<a id="Version_2.0.14.2"></a>

## Version 2.0.14.2

<a id="Schulform_unabhängige_Änderungen_45"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_45"></a>

### Schulform unabhängige Änderungen

- Fehlermeldungen in Zusammenhang mit dem Karteireiter „Fehlzeiten“ wurden behoben.
- Meldung „Operation kann bei geschlossener Datenmenge…“ bei Aufruf der Versetzung behoben.
- Der Gruppenprozess „Fehlstundensummen automatisch berechnen“ löscht nun auch wieder vorhandene Einträge in „0“, wenn die Fehlstunden bei den Fächern auch in der Summe „0“ ergeben!
- Die neue Lehrer.txt aus ASDPC32 kann nun wieder in Schild-NRW importiert werden.
- Das Feld „Art des Abschlusses“ oder am BK „höchster allg Bild. Abschluss“ wird nun immer in die StatistikDB.mdb exportiert.
- Das Feld „Versetzung“ unter „Schulbesuch“ wird nun nur noch mit zulässigen Werten der berichtenden Schulform gefiltert!
- In der Funktion „Fenster auf Standarddrucker ausgeben“ wurde eine kleine „Sleep-Funktion“ eingebaut, so dass nur noch das Schild-NRW-Fenster auf dem Ausdruck erscheinen sollte.
- Im Excel-Export der Betriebe ist nun auch die Anrede des Betreuers enthalten.
- In der Druckausgabe kann nun zusätzlich gewählt werden, ob nur für die markierten (mehrere Schüler) gedruckt werden soll.
- Unter „Extras \> Programm-Einstellungen \> Report-Einstellungen \> Schnellzugriff“ kann nun ein schwebendes Fenster aktiviert werden, in dem zehn Reports festgelegt werden können, auf die man dann mit einem Klick zur Druckausgabe gelangt. Diese Reports können mit einer Beschriftung festgelegt werden. Dazu müssen diese aber im Ordner „Standard\Schnellzugriff“ liegen.
- Bei importierten Reports konnte es in Netzwerkumgebungen dazu kommen, dass diese Reports durch einen fremden Dateipfad sehr langsam starteten, dieses Verhalten sollte behoben sein.
- Es gibt in der Reporting eine neue Funktion „Textbreite“. Hier kann die Textbreite von z.B. Labels zur Laufzeit berechnet werden. Damit können z.B. Fußnoten besser platziert werden.
- Nähere Informationen in den RAP-Funktionen.
- Der Text der zuletzt besuchten Schule auf dem Reiter Schulbesuch wurde geändert in "Vor der Aufnahme besuchte Schule / Einrichtung /Sonstige Herkunftsarten".
- Beim Gruppenprozess „Fächer in Leistungsdaten neu sortieren“ werden nun auch die Fächer auf dem Reiter „BK-Abschluss“ berücksichtigt.
- Beim Import der Basisdaten über die Schnittstelle SchILD-NRW wird jetzt automatisch die Eigenschaft „Duplikat“ gesetzt, wenn zur Identifizierung des Schülers neben Name, Vorname und Geburtsdatum auch die Klasse (als Teil des Namens, getrennt durch \#) verwendet wird.
- Neuer Menüpunkt „Auswahl\>\>Papierkorb zeigen“. Darüber können nun viel einfacher die Schüler mit Löschmarkierung angezeigt werden.
- Neuer Eintrag im Schüler-Popup-Menü „Löschmarkierung aufheben“ (nur sichtbar, wenn eine Löschmarkierung vorhanden ist).
- Neue „Weitere Funktion“: Zusatzfunktion „Telefon-Nummern zeigen“. Wenn diese Funktion aktiviert ist, werden in einem „schwebenden“ Fenster die Telefon-Nummern des jeweils ausgewählten Schülers gezeigt.
- Neuer Gruppenprozess „Migrationshintergrund automatisch setzen“
- Beim Export von Fotos werden jetzt in den Dateinamen Umlaute korrekt ausgegeben.
- Wenn in einem Report die Schulnummer einer zuletzt besuchten Schule außerhalb NRWs ausgegeben wurde (Feld „LSSchulnr“), so wurde eine intern verwendete Pseudoschulnummer (200000+) angezeigt. Es gibt nun ein neues Feld „LSSchulnrNRW“, das die korrekte Schulnr. ausgibt (z.B. 980008 für eine Schule aus Baden-Württemberg). Für Herkunftsschulen aus NRW liefert sowohl „LSSchulnr“ als auch „LSSchulnrNRW“ den korrekten Wert.
- Es gibt nun eine Datenquelle „Schueler\>Lernabschnitte\>SchuelerFoerdermassnahmen“, mit der auch in die Dokumentenverwaltung gedruckt werden kann.
- Unter Filter I \> Lernabschnitte kann nun auch auf vorhandene Fördermaßnahmen gefiltert werden.
- Beim Import von Orten über die Schnittstelle wird nun geprüft, ob eine PLZ mit mehreren Ortsnamen existiert, es wird dann der korrekte Ortsname zugewiesen. Dazu müssen die verschiedenen Ortsnamen mit geschütztem Leerzeichen hinter der PLZ aber schon in der Datenbank existieren, diese werden beim Import nicht automatisch angelegt!
- Beim Abgleich der Daten in den Personengruppen wird nun nach dienstlicher und privater E-Mail-Adresse, wie in den Programmeinstellungen ausgewählt, abgeglichen.
- Im Menüpunkt „Info über Datenquellen“ gibt es nun einen Excel-Export.
- Die ReplaceText-Funktion in der Reporting ersetzt nun auch Unicode-Zeichen korrekt.
- Im Memofeld zu den Floskeln wird nun die Anzahl der Zeichen angezeigt.

<a id="Grundschule_7"></a>

### Grundschule

- In der Klassen-/Versetzungstabelle muss nun kein Jahrgang mehr bei den Klassen eingetragen werden. Die Versetzung kann aber trotzdem über „Schulverwaltung \> Schule bearbeiten“ durchgeführt werden.

<a id="Berufskollegs_19"></a>

### Berufskollegs

- BK-Abschluss: Beim Holen der Leistungsdaten wird nun in einem Fenster gefragt, aus welchem Abschnitt die Daten geholt werden sollen.
- In der Datenquelle „Lernabschnitte“ gibt es nun ein Feld DQR_Niveau.
- Abschlüsse in der Anlage A06 sollten nun wieder auch auf „akt. Halbjahr“ eingetragen werden.
- In der Anlage C03 werden nun wieder der berufsbildende Abschluss und das FHRs korrekt eingetragen.
- In einigen Fällen wurde das Datenfeld „Lernabschnitte \> Abschluss_B“ nicht mit der korrekten Prüfungsordnung gefüllt, dies wurde korrigiert.

<a id="Version_2.0.13.1"></a>

## Version 2.0.13.1

<a id="Schulform_unabhängige_Änderungen_46"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_46"></a>

### Schulform unabhängige Änderungen

- Neben den Leistungsdaten im akt. Abschnitt gibt es nun einen Karteireiter Fehlzeiten. Dort können Stundenbezogene Fehlzeiten mit Tagesdatum verwaltet werden.
- Näheres dazu im WIKI: [Fehlzeiten](/zeugnisse/vorbereitung/akt-halbjahr#Fehlzeiten)
- Über die globalen Programmeinstellungen (Karteireiter "Ansicht") kann jetzt eingestellt werden, ob der Reiter „Fehlzeiten“ im aktuellen Abschnitt gezeigt werden soll.
- Die Statistik.dll wurde erneuert, damit wird nun eine SIN.txt erstellt, die auch die neue „kürzere“ Erfassung des Migrationshintergrundes exportiert.
- Teilweise wurden Umlaute in von Schild-NRW versendeten Mails nicht korrekt dargestellt. Hier wurde eine Einstellung verändert.
- Bei Verwendung der Adjektive als Nationalitäten, kam es vor, dass falsche Adjektive angezeigt wurden.
- Beim Lupo-Export kam ein falsches Dialogfenster bei der Speicherort-Auswahl.
- Abgeschlossene und geholte Fächer werden nun bei der Berechnung der Sprachenfolge ignoriert.
- Eine Fehlermeldung beim Einfügen eines Erziehers wurde behoben.
- Filter I reagiert jetzt darauf, welche Variante zur Erfassung des Migrationshintergrundes man verwendet.
- Bei der Neuaufnahme von volljährigen Schülern wird nun auch der Eintrag bei den Erzieherdaten gemacht.
- Es gibt unter „Extras“ nun die Menüpunkte Transaktionsprotokoll verwenden und anzeigen.
- Ein Fehler beim Senden von Mails mit BCC wurde behoben.
- Die Sortierung der Betriebe in Reports wirkt sich nun auch auf das Versenden von Serien-Mails aus.
- Die neuen Fortschreibungsarten werden beim Gruppenweise ändern unter „Kursverwaltung“ nun angeboten.

<a id="Gymnasium_10"></a>

### Gymnasium

- Im Abiturbereich verschwand das PJK-Thema bei manuellen Änderungen, das wurde behoben.
- Berechnung der GeR-Referenzniveaus berücksichtigt in der Oberstufe nun die „4-„.
- Abitur: Der Zusatz „/(G8)“ wurde aus der Prüfungsordnung „Apo-GOST(B) entfernt, da er ja an Gesamtschulen unsinnig ist.

<a id="Berufskollegs_20"></a>

### Berufskollegs

- Abschlussberechnung FOS13-BK: Abschlussnoten werden nur eingetragen, wenn das Feld leer ist.
- Problem bei Übertragung der Noten aus BK-Abschluss in akt. Hj., wenn "AT" bei Sport gesetzt: Korrigiert.
- Neue Datenquellen für BK-Abschluss:
  1.  BKAbschlussFaecher_BB (berufsbezogen)
  2.  BKAbschlussFaecher_BUE (berufsübergreifend)
  3.  BKAbschlussFaecher_DIFF (Diffeenzierungsbereich)

<a id="Version_2.0.12.1"></a>

## Version 2.0.12.1

<a id="Schulform_unabhängige_Änderungen_47"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_47"></a>

### Schulform unabhängige Änderungen

- Über die globalen Programmeinstellungen (Karteireiter "Report-Einstellungen") kann jetzt eingestellt werden, ab welchem Alter die "Sie"-Anreden in Briefen verwendet werden sollen.
- Gruppenprozesse für Eingabe von Teilleistungen
- Für die Gruppenprozesse, die sich auf Teilleistungen beziehen, gibt es nun einen eigenen Karteireiter. Es gibt getrennte Gruppenprozesse für die Eingabe von Teilleistungen mit und ohne vorbereitete Einträge
- Beim Anlegen der Teilleistungen unter „Schulverwaltung \> Unterrichtsfächer“ funktionierte der „Minus„-Button nicht.
- In den globalen Programmeinstellungen kann nun gewählt werden, welche Eingabeart der Teilleistungen für die Lehrer zur Verfügung stehen soll:
  1.  Lehrer können Teilleistungen selbstständig anlegen
  2.  Lehrer können nur vom Admin vorbereitete Teilleistungen ausfüllen
- Im Filter I werden nun auf dem Karteireiter „Lernabschnitt/Leistungsdaten“ die Felder „Schuljahr“ und „Abschnitt“ mit den aktuellen Daten der Schule vorbelegt.
- In Filter I wurde das Merkmal „Gelöscht=NEIN“ nicht mehr vorbelegt, dies wurde wieder eingestellt.
- Die Schalter „Bemerkungen“ und „Zeugnisbemerkung“ wurden in der Farbe verändert. Wenn ein Inhalt hinterlegt ist, sieht man das nun an der blauen Farbe.
- Für die nächste Statistik müssen auch Berufskollegs und Weiterbildungskollegs zwingend Angabe zum Migrationshintergrund machen. Hierfür stehen allerdings allen Schulformen jetzt zwei Modi zur Verfügung:
  1.  Detallierte Eingaben zu Geburtsland, Zuzugsjahr, Geburtsland von Mutter und Vater, Verkehrssprache in der Familie (wie derzeit bei allgemein-bildenden Schulen)
  2.  Vereinfachte Eingabe, dabei werden nur die Angaben "Nicht in Deutschland geboren", "Mindestens ein Elternteil nicht in Deutschland geboren" und "Verkehrssprache in der Familie nicht Deutsch" verlangt (als "Ankreuzfelder")
- Wenn eine Schule die vereinfachte Eingabe nutzen möchte, so ist bei den globalen Programmeinstellungen die Option "Vereinfachte Eingabe für Zuwanderungsgeschichte verwenden" zu aktivieren. Bitte beachten Sie, dass eine Rückkehr zum detaillierten Modell nicht ohne Datenverlust möglich ist!

<a id="Berufskollegs_21"></a>

### Berufskollegs

- Bei der Herkunft XS auf dem Reiter Schulbesuch stehen nun alle Abschlüsse zur Verfügung, auch wenn XS als Schulform eingetragen ist.

<a id="Gymnasium_11"></a>

### Gymnasium

- Im Abiturbereich wurden noch einige Markierungsfehler in Zusammenhang mit bilingualen Fächern behoben.
- Die Möglichkeit, Hochrechnungen (z.B. für Abitur) durchzuführen, wurde entfernt. Dies kann über LuPO komfortabler gemacht werden.
- An Gesamtschulen wurden beim Gruppenprozess "Sprachenfolge aus Leistungsdaten ermitteln" in der Oberstufe falsche Jahrgänge eingetragen, nun korrigiert.

<a id="Gesamtschule_4"></a>

### Gesamtschule

- Beim Gruppenprozess „Sprachenfolge ermitteln“ erhielten Schüler der EF an den Gesamtschulen den Eintrag Jahrgang 10, dies wurde auf 11 korrigiert.

<a id="Reportausgabe_11"></a>

### Reportausgabe

- Ausgabe von Betrieben und Praktikumsadressen: \* Wenn bei einem Schüler mehrere Betriebe (oder Praktikumsadressen) eingetragen waren, so wurde in Reports nicht immer die gleiche Reihenfolge verwendet wie im Programm selbst. Dies ist nun korrigiert, die Reports geben die Adressen in der gleichen Reihenfolge aus wie in SchILD.
- Die Datenquelle SchuelerEinzelleistungen wurde in SchuelerTeilleistungen umbenannt. Dies muss in bestehenden Reports geändert werden.

<a id="Version_2.0.11.8"></a>

## Version 2.0.11.8

<a id="Schulform_unabhängige_Änderungen_48"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_48"></a>

### Schulform unabhängige Änderungen

- Im Filter I wurde die Auswahl der Jahrgänge nicht korrekt berücksichtigt, nun behoben.
- Im Filter I werden nun auf dem Karteireiter „Lernabschnitt/Leistungsdaten“ die Felder „Schuljahr“ und „Abschnitt“ mit den aktuellen Daten der Schule vorbelegt.

<a id="Berufskollegs_22"></a>

### Berufskollegs

- Im Fenster „Fachklassen bearbeiten“ wurde der Schreibschutz für das Feld „DQR-Niveau“ aufgehoben. Es ist jetzt möglich, in Fällen, in denen beim automatischen Abgleich kein DQR-Niveau gefunden wird, dieses manuell einzutragen.

<a id="Version_2.0.11.7"></a>

## Version 2.0.11.7

<a id="Schulform_unabhängige_Änderungen_49"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_49"></a>

### Schulform unabhängige Änderungen

- Die Buttons „Bemerkungen“ und „Zeugnisbemerkung“ wurden in der Farbe verändert. Wenn ein Inhalt hinterlegt ist, sieht man das nun an der blauen Farbe.
- Die Screenshotfunktion (Druckersymbol) wurde angepasst. Es werden nun wieder alle Elemente mit Daten gedruckt.
- In der „Gesamtübersicht“ können nun mit der Berechtigung Stammdaten zu ändern die Wertungshäkchen für „gewertet“ und „wiederholt“ verändert werden. Dies geschieht mit Doppelklick auf das entsprechende Feld.
- Die Programm-Einstellungen \> Global \> Report-Einstellungen und Report-Verzeichnisse wurden auf einen Reiter gelegt.
- Es ist unter Report-Verzeichnisse nun auch möglich, einen Pfad (UNC-Pfad) einzutippen.

<a id="Berufskollegs_23"></a>

### Berufskollegs

- In der neuen Statkue wurden durch die neue APO-BK viele Fachklassen als auslaufend markiert. Diese waren unter „Schulbesuch“ nun nicht mehr in der Herkunft auswählbar.
- Man kann nun alle auslaufenden Fachklassen auswählen, der Status der Fachklasse wird nun auch angezeigt.
- Der Versetzungsalgorithmus wurde angepasst, es sollten nun auch Klassen korrekt behandelt werden, in denen Schüler sind, die im letzten Jahrgang eines 3,5-jährigen Bildungsgangs sind (mit Restabschnitt=1). In solchen Fällen wurden alle Mitglieder dieser Klasse fälschlicherweise auf den Status „Abschluss“ gesetzt.

<a id="Gymnasium_12"></a>

### Gymnasium

- Es wurde ein Darstellungsfehler auf dem „ZK-Reiter“ behoben. Jetzt können wieder die Fächer angezeigt werden.

<a id="Reportverwaltung_3"></a>

### Reportverwaltung

- In der Datenquelle „KursSchueler“ wurden die Felder „ZieldifferentesLernen“, „Foerderschwerpunkt“ und „Foerderschwerpunkt2“ hinzugefügt.
- In der Datenquelle für die Schüler-Anrede wurde bei minderjährigen Schülern die Änderung zurückgenommen, damit bestehende Reports wieder funktionieren. Es steht nun unter Extras \> Programm-Einstellungen \> Report-Einstellungen eine Option zur Verfügung, wo die Ersetzung zu „Lieber/Liebe“ in der Anrede auf Wunsch eingeschaltet werden kann.
- Reporting: Das Datum „Ende der Eingliederung“ unter Migrationshintergrund steht nun in der Datenquelle Schueler zur Verfügung.

<a id="Version_2.0.11.5"></a>

## Version 2.0.11.5

<a id="Schulform_unabhängige_Änderungen_50"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_50"></a>

### Schulform unabhängige Änderungen

- Beim Abschnittswechsel über den Gruppenprozess konnte es passieren, dass die Schulbesuchsjahre nicht mehr angezeigt wurden.

<a id="Reportausgabe_12"></a>

### Reportausgabe

In der Datenquelle für die Schüler-Anrede wurde bei minderjährigen Schülern das Frau/Herr durch Liebe/Lieber ersetzt.

<a id="Weiterbildungskolleg_2"></a>

### Weiterbildungskolleg

- Bei der Markierung der Abiturfächer wurde die Berücksichtigung der Pflichtbindung geändert. Es werden aus aufeinanderfolgenden Kursen nun die zwei besten ausgewählt.

<a id="Version_2.0.11.4"></a>

## Version 2.0.11.4

<a id="Schulform_unabhängige_Änderungen_51"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_51"></a>

### Schulform unabhängige Änderungen

- Im externen Notenmodul gibt es nun einen Filter auf leere Noteneinträge.
- Die Ansicht „Infos über Datenquellen“ wurde korrigiert.
- Es gibt eine Möglichkeit Noten über Excel-Listen zu importieren:
- Wiki-Link zum Artikel Excel-Notendateien
- Die Datenquellen GSDaten_zu_Schueler und SchuelerGSDaten wurden korrigiert.
- Es steht nun eine Datenquelle für Teilleistungen zur Verfügung.
- Es steht ein Karteireiter Fördermaßnahmen zur Verfügung:
- Wiki-Link zum Artikel Fördermaßnahmen
- Der Menüpunkt „einzelnes abgeschlossenes Fach löschen“ ist nun wieder aktiviert.
- Bei der Versetzung wurden auch Klassen mit inaktiven Schülern auf korrekte Angaben geprüft, diese Prüfung wurde entfernt.
- Bei der Versetzung wurden „Wiederholer“ nicht (oder falsch) markiert.
- In einigen Fällen konnten Kurslehrer ihre Fehlstunden nicht eingeben.
- Bei den Lernabschnitten können jetzt das Beginn- und das End-Datum des betreffenden Abschnittes verwaltet werden. Diese können auch per Gruppenprozess gesetzt werden, bei der Übernahme in den neuen Abschnitt können die Daten auch mit eingetragen werden.
- Bei den FHR-Berechnungen werden keine Vertiefungskurse mehr aus den Leistungsdaten geholt.
- Der Gruppenprozess „Dokumentenverzeichnisse aufräumen“ steht nur noch bei eingeschalteter Dokumentenverwaltung zur Verfügung.
- Es gibt eine neue Reportingfunktion GeRNiveauAusFachKrz, mit der das Referenzniveau zum Fachkürzel aus der Sprachenfolge ermittelt werden kann.
- Beim Ausdruck der erreichten Abschlüsse wurden einige Abschlüsse nicht korrekt gedruckt.
- Vermerke können nun nach der Spalte „Datum“ sortiert werden.
- Namenszusätze konnten trotz fehlender Berechtigungen editiert werden.
- Die Schaltfläche „Erzieherdaten in Kopiervorlage übernehmen“ auf dem Reiter „Erziehungsberechtigte“ funktioniert wieder.
- Die Fortschreibungsart "Nur Definition, Jg. beibehalten" steht nun auch bei den Zusatzfunktionen (rechte Maustaste) und bei der Neuanlage eines Kurses zur Verfügung.
- Im Gruppenprozess „Kurse zuweisen (mehrere)“ ist das Gitter nun alternierend gefärbt.
- Bei den Teilstandorten kann nun ein Kürzel vergeben werden, welches auch in der Datenquelle „Schueler“ zur Verfügung steht.
- Es gibt nun drei "Pipelines" für Teilleistungsübersichten
- Teilleistungen_Header: Für den Header
- TabelleTeilleistungen_Noten: Für die Teilleistungsnoten
- Teilleistungen_SchuelerFaecher: Die "Hauptdatenquelle", die die Schülernamen und Fachbezeichnungen liefert. Nur wenn diese als Hauptdatenquelle des Reports verwendet wird, erscheint ein Dialog, in dem ausgewählt werden kann, welche Fächer und Teilleistungsarten berücksichtigt werden sollen.
- Wichtig: Es handelt sich um "Stand-Alone-Pipelines", die zwar die aktuelle Schülerauswahl berücksichtigen, ansonsten aber nicht mit anderen Pipelines kombiniert werden können.

<a id="Gymnasiale_Oberstufe_8"></a>

### Gymnasiale Oberstufe

- In der FHR-Berechnung kam es manchmal zu einer Punktdifferenz von einem Punkt.

<a id="Berufskollegs_24"></a>

### Berufskollegs

- In der neuen Statkue stehen die Gliederungen und Fachklassen der neuen APO-BK-15 zur Verfügung.
- Prüfungsordnungen und das Verhalten von Schild-NRW zur neuen APO-BK-15 werden noch angepasst.
- Bei den Fachklassen gibt es jetzt einen Schalter "DQR-Niveaus ermitteln". Dazu muss aber die aktuelle Schildintern.mdb verwendet werden. In der Datenquelle "Schueler" gibt es dazu auch ein Feld "DQR_Niveau".
- Das Holen der Leistungsdaten auf den Reiter „BKAbschluss“ für die Gliederung A03 sollte nun korrekt funktionieren.
- Die FHR-Berechnung berücksichtigte das Fach Didaktik und Methodik „DM“ nicht unter Gesellschaftslehre.
- In den Stundentafeln wird nun die Fachklassenbezeichnung in die Beschreibung übernommen.

<a id="Version_2.0.10.1"></a>

## Version 2.0.10.1

<a id="Schulform_unabhängige_Änderungen_52"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_52"></a>

### Schulform unabhängige Änderungen

- Beim Quartalswechsel wurden alle Schüler in manchen Datenbanken als Wiederholer gekennzeichnet.
- Dieser Fehler wurde behoben, sollte dies bei Ihnen der Fall gewesen sein, so können Sie den Wiederholer-Haken über den Gruppenprozess „Individualdaten ändern \> Lernabschnitte“ wieder entfernen lassen.
- Bei den Kursen steht jetzt eine weitere "Fortschreibungsart" zur Verfügung: "Nur Definition, Jg. beibehalten". Bei dieser Fortschreibungsart wird bei einem Schuljahreswechsel der Kurs weitergeführt (ohne Teilnehmer), der Jahrgang wird aber nicht erhöht. Dies ist z.B. dann nützlich, wenn ein Kurs immer nur für einen bestimmten Jahrgang angeboten wird.
- Hinweis: Die bisherige Fortschreibungsart "Nur Definition" wurde umbenannt in "Nur Definition, Jg. hochschreiben".
- Es besteht jetzt die Möglichkeit, Ausweisnummern (z.B. für Schülerausweise) automatisch zu generieren. Dazu kann bei den globalen Programmeinstellungen der "Beginn des Nummernbereiches für Ausweisnummern" eingetragen werden. Anschließend kann der Gruppenprozess "Allgemeines\>\>Ausweisnummern automatisch generieren" aufgerufen werden.
- In den Daten des Migrationshintergrundes kann nun ein Datum „Ende Eingliederungsphase“ gesetzt werden.
- Die Anzeige des „Containers“ wurde erneuert, Schüler können nun über das kleine Kästchen ausgewählt werden.
- Die Farben in den Übersichten funktionieren wieder.
- Beim Menüpunkt „Unterrichtsfächer“ kam bei der Funktion „Fach global ändern“ eine Fehlermeldung.
- Bei der Ausgabe der Warnungen trat ein Fehler mit Ersetzungen auf.
- In der Datenquelle „KlassenSchueler“ kamen auch gelöschte Schüler.
- Bei den „Unterrichtsfächern“ steht nun ein Button „Teilleistungsarten“ zur Verfügung. Damit kann zu jedem Fach eingestellt werden, welche Teilleistungen dort vergeben werden sollen. Mit dem Gruppenprozess „Teilleistungen aus Vorlage zuweisen“ können dann diese Teilleistungen in den Fächern eingetragen werden. Die Lehrer, die diese Teilleistungen dann eingeben müssen, finden dann die vorbereiteten Einträge schon vor.\
  ***Wichtig:*** Diese neuen Optionen setzen voraus, dass konkrete Einträge im Katalog der Teilleistungsarten vorliegen.\
  ***Beispiel:*** Wenn zwei Klausuren pro Abschnitt geschrieben werden, so müssen diese z.B. als "1. Klausur" und "2. Klausur" (oder "1. Klassenarbeit" und "2. Klassenarbeit") im Katalog der Teilleistungsarten eingetragen werden. Ein "globaler" Eintrag (z.B. nur "Klausur", der dann mehrmals verwendet wird) reicht nicht aus.
- Es steht nun auch ein Gruppenprozess „Teilleistungen löschen“ zur Verfügung.
- Es steht zusätzlich ein Gruppenprozess „Teilleistungen individuell zuweisen“ zur Verfügung.
- Es steht in den globalen Programmeinstellungen eine Option zur Verfügung, ob die private oder die dienstliche Mailadresse bei den Lehrern zur Versendung von Notendateien verwendet werden soll.
- Die Reporteinstellungen für "Auch Leistungsdaten ohne Noten laden" und "Religionslehre immer aufs Zeugnis" werden jetzt global bei den Programmeinstellungen (neuer Karteireiter "Report-Einstellungen") gemacht.
- Es gibt eine neue Reportfunktion "AlleFaecherLaden(Laden: Boolean);", mit der die Grundeinstellung "Auch Leistungsdaten ohne Noten laden" für einen Report geändert werden kann.
- Fachbezogene Bemerkungen werden nun auch wieder bei abgeschlossenen Fächern geholt.
- Bei der Fortschreibungsart „Nur Definition (…)“ haben Kopieren und Einfügen von Fächern mit Kurs nicht funktioniert.

<a id="Gymnasium_13"></a>

### Gymnasium

- An Gymnasien mit G9 wird nun das Referenzniveau der sonstigen Fremdsprachen in Klasse 10 richtig berechnet.
- Bei den FHR-Berechnungen wurden manchmal Noten statt Punkte geholt.

<a id="Weiterbildungskollegs"></a>

### Weiterbildungskollegs

- Einige Fehler bei den Abiturberechnungen und in der FHR-Berechnung wurden behoben.

<a id="Version_2.0.9.3"></a>

## Version 2.0.9.3

<a id="Schulform_unabhängige_Änderungen_53"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_53"></a>

### Schulform unabhängige Änderungen

- Beim Menüpunkt „Schulverwaltung \> Statistik / amtl. Schuldaten“ ein Menüpunkt „Hilfe bei Problemen“ wurde noch ein Merkmal „Meldungen zeigen“ ergänzt. Damit kann man sich die Meldungen des Betriebssystems anzeigen lassen, um bei Problemen besser reagieren zu können.
- Dieses Update brauchen Sie nur auszuführen, wenn Sie unter Windows 7 oder Windows 8 in einer Netzwerkumgebung immer noch die Fehlermeldung „Klasse nicht registriert“ beim Aufruf der Statistikfunktionen erhalten.

<a id="Version_2.0.9.2"></a>

## Version 2.0.9.2

<a id="Schulform_unabhängige_Änderungen_54"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_54"></a>

### Schulform unabhängige Änderungen

- Es wurde unter „Schulverwaltung \> Statistik / amtl. Schuldaten“ ein Menüpunkt „Hilfe bei Problemen“ eingeführt.
- Mit diesem Menüpunkt kann versucht werden, die Registrierung der Statistik.dll in Serverumgebungen durchzuführen.
- Sollte dies nicht funktionieren, müssen Sie sich an Ihren Systemadministrator wenden!
- Die ASDStatistik.dll wurde ausgetauscht, weil andere Minutenmodelle als 45min nicht in der UVD.txt ankamen.
- Bei Benutzung des neuen Feldes „Namenszusatz“ wurde die Anrede in der Reporting nicht korrekt generiert.
- Bei MySQL-Datenbanken funktionierte manchmal die GeR-Berechnung nicht.
- Die Faxnummer in der SchuelerZusatzdaten.dat (Schnittstelle Schild-NRW) wurde als berechnete Zahl importiert.
- Userrechte wurden korrigiert, wenn Abteilungsleiter fälschlicherweise Noten ändern (oder auch nicht ändern) konnten.
- In der Tabelle „Schulverwaltung \> Kurse“ können nun per rechter Maustaste die Angaben zum Kurs bei Schülern aktualisiert werden, was nach einem Import sinnvoll sein kann.
- Bei Schulform GY und „Wiedereinrichtern G9“ kam es u.U. zu Fehlern bei der Fortschreibung der Kurse.

<a id="Version_2.0.9.1"></a>

## Version 2.0.9.1

<a id="Schulform_unabhängige_Änderungen_55"></a>
<a id="Schulform_unabh.C3.A4ngige_.C3.84nderungen_55"></a>

### Schulform unabhängige Änderungen

- Mit dieser Version wird die alte Datenbankbasierte Reporting nun endgültig deaktiviert! Auch ein Umschalten auf die Reporting.dll vom Januar 2013 ist ab jetzt nicht mehr möglich. In Zukunft wird es mit einer Schild-NRW-Version auch immer eine feste Reporting-Version geben.
- Für die eigene Schule kann jetzt auch eine Web-Adresse eingegeben werden.
- Statistik.dll, Statkue.mdb, asdtabs.mdb und Schulver.mdb wurden auf den aktuellen Stand für die Statistik 2014/15 gebracht.
- Im Text-/Excelexport stehen nun auch AUE und ASV zur Verfügung.
- Der Mehrzeilenmodus unter „akt. Halbjahr“ funktioniert wieder.
- Der Gruppenprozess „Klassenunterrichte bearbeiten“ wurde beschleunigt.
- Es wurden Folgejahrgänge in der Tabelle der Statistikjahrgänge eingeführt. Diese werden beim Hochschreibungssalgorithmus berücksichtigt. Eine genauere Beschreibung folgt im WIKI: [Hochschreibungsalgorithmus](/schild2/versetzung/hochschreibungsalgorithmus)
- Es ist jetzt möglich, "Zusätze zum Nachnamen" bei den Schülern und Erziehern zu verwalten. Es gibt wohl Schulen, die solche Zusätze wie z.B. Markus "van den" Bruggen oder auch Alexander "Graf" Lambsdorf (die Zusätze sind in Hochkomma) in einem separaten Feld verwalten wollen. Es gab bisher schon ein Feld Zusatz, das aber eher für weitere Vornamen gedacht war, wobei das Feld aber auch oft für solche Zusätze zum Nachnamen benutzt wurde. Nun hat man eine eindeutige Zuordnung. Das Feld ist nicht direkt sichtbar (weil es vermutl. nicht so häufig benutzt wird), sondern ist über den Schalter links neben dem normalen Namensfeld verfügbar.
- Es gibt zwei neue Datenquellen in der Reporting:
  - Betriebe_zur_Schuelerauswahl: Liefert die Betriebe (in alphabet. Reihenfolge), die bei den Schülern der aktuellen Auswahl jeweils an erster Stelle bei "Allg. Adressen" stehen (und damit im Verständnis von SchILD die Betriebe sind, an denen die Schüler derzeit ausgebildet werden). Diese Datenquelle muss in einer Serienbriefvorlage die Hauptdatenquelle sein.
  - Schueler_zu_aktuellem_Betrieb: Liefert die Schüler (in alphabet. Reihenfolg, zzgl. Angaben zu Vertragsbeginn usw.), die dem jeweiligen Betrieb aus "Betriebe_zur_Schuelerauswahl" zugeordnet sind. Auch hier wird die aktuelle Schülerauswahl berücksichtigt.
    - Die Datenquelle Schueler_zu_aktuellem_Betrieb muss als Subreport zu Betriebe_zur_Schuelerauswahl verwendet werden.\
      ***Beispiel:*** Es wird in SchILD auf die Klasse AM05A gefiltert. Dann liefert Betriebe_zur_Schuelerauswahl nur solche, die bei den Schülern aus AM05A als erste in der Reihenfolge eingetragen sind.\
      Schueler_zu_aktuellem_Betrieb liefert dann nur die Schüler, die die AM05A besuchen und aktuell bei dem Betrieb ausgebildet werden. Wenn also Max Mustermann (Klasse AM05A) und Stefan Sonderling (Klasse AM05B) beide bei "Schmitz und Sohn" ausgebildet werden, wird "Schmitz und Sohn" bei Filterung in SchILD auf AM05A in Betriebe_zur_Schuelerauswahl erscheinen. Max Mustermann ist dann in Schueler_zu_aktuellem_Betrieb vorhanden, nicht aber Stefan Sonderling (weil in AM05B).
- Fachbezogene Bemerkungen werden nun auch bei Epochalfächern geholt.
- In der Klassen-/Versetzungstabelle gibt es an Hauptschulen, Sekundarschulen und Förderschulen nun das Feld „Kooperationsklasse“, dieses wird in der SIM.txt nun separat an die Statistik übergeben. Die Klassenart „Kooperationsklasse“ entfällt damit.
- Bei „Doppelte Nennung des Vornamens vermeiden“ in den Floskeln wurde ein Problem mit der Kleinschreibung behoben.

<a id="Berufskollegs_25"></a>

### Berufskollegs

- Die Gruppenprozesse für den Reiter „BK-Abschluss“ werden nun wieder aus der gefilterten Menge der Schüler bestimmt.
- Diese werden aber nur eingeblendet, wenn die Kombination aus Gliederung und Jahrgang eindeutig ist. Bei Mischklassen müssen also die Teile der Klasse gefiltert werden.
- Die Eintragungen der Statistik-Abschlüsse in Anlage A01 wurden korrigiert.

<a id="Sekundarschule"></a>

### Sekundarschule

- Die Abschluss-/Versetzungsberechnung für den Bildungsgang „Realschule auslaufend“ wurde nicht angestoßen. Dieser Fehler wurde behoben.

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1352) · [Versionsgeschichte Schild-NRW – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Versionsgeschichte+Schild-NRW&oldid=6074)
