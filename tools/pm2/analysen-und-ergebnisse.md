---
title: "PM2: Analyseverfahren und Ergebnisse"
---

# Analyseverfahren und Ergebnisse

PM2 unterscheidet drei Wege, Leistungsdaten für die Prognose auszuwählen. Entscheidend ist dabei auch, ob die Eingabedaten in der Analyse verändert werden können.

| Verfahren | Datenbasis und Bearbeitung |
| --- | --- |
| **Einzelanalyse** | Ein einzelnes Notenbild wird im Prognosedialog erfasst und berechnet. |
| **Klasse** | Die Leistungsdaten einer Klasse aus SchILD-NRW 2 werden angezeigt. Der Lernabschnitt lässt sich auswählen; Fachnoten und E-/G-Niveaus sind in dieser Ansicht nicht direkt veränderbar. |
| **Datei** | Eine PM2-Notendatei wird eingelesen. Über **Bearbeiten** können die angezeigten Daten im Gitter bearbeitet werden. |

## Daten auswählen und prüfen

Bei der Klassenanalyse wählen Sie Klasse und Abschnitt. Fehlen Fächer, kontrollieren Sie unter **Einstellungen → Fachersetzungen** die Zuordnung der Unterrichtsfächer.

Eine PM2-Datei besitzt einen vorgegebenen Aufbau mit einer Kopfzeile und durch Semikolons getrennten Feldern. Auch leere Felder behalten ihre Trennzeichen. Die im Programmverzeichnis vorhandenen Beispieldateien im Unterordner `Dat` helfen, den erwarteten Aufbau zu prüfen.

## Prognose berechnen

Markieren Sie für eine gemeinsame Berechnung die gewünschten Zeilen und verwenden Sie **Berechnen (F5)**. Der Prognosedialog zeigt links die Leistungsdaten und rechts das Ergebnis. Bei einer Listenanalyse kann der Dialog für die ausgewählte Person auch mit **F2** oder der Leertaste geöffnet werden.

Lesen Sie das Ergebnis zusammen mit den zugrunde gelegten Fachzuordnungen und Hinweisen. Die Programmprognose ersetzt nicht die fachliche Prüfung durch die zuständige Lehrkraft. Die in der Anleitung erläuterten Rechtsstände und Beispielnoten sind nicht automatisch die für jeden Jahrgang aktuell anzuwendenden Voraussetzungen.

## Speichern und ausgeben

- **Strg+S** speichert die Prognosedaten bei der Analyse von SchILD-NRW 2- oder CSV-Leistungsdaten.
- **Strg+X** öffnet die allgemeine Ausgabe beziehungsweise den Export.
- **Strg+P** druckt die angezeigten Daten.
- Bei der Klassenanalyse können die Prognoseergebnisse der markierten Datensätze außerdem als Textdatei ausgegeben werden.

Die Versionshinweise führen für 1.8.3.0 eine Erweiterung zur Fachleistungsdifferenzierung in Biologie und Fehlerkorrekturen auf. Stimmen Oberfläche oder Auswertungsmöglichkeiten nicht mit einer älteren Wiki-Abbildung überein, vergleichen Sie deshalb den eingesetzten Programmstand mit den Versionshinweisen.

Quelle: [Bedienungsanleitung PM2, Druckstand 15.01.2024](/dateien/pdf/pm2_bedienungsanleitung_1.pdf), Kapitel 2–4 und 7, Seiten 9–23 und 30–33; [Versionshinweise](/dateien/pdf/pm2_versionsgeschichte.pdf), Version 1.8.3.0.

## Analysewege, Dialog, Ergebnis und Berechnung

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 9–26](/dateien/pdf/pm2_bedienungsanleitung_1.pdf#page=9).

### 2 Prognoseverfahren

PM2 unterscheidet drei verschiedene Verfahren, um Notenbilder zu analysieren, mit

dem Ziel, Prognosen / Abschlüsse zu berechnen:

1. Einzelanalyse : Eingabe eines einzelnen Notenbildes und anschließende Berechnung der Prognose. 2. Klassenanalyse : Auswahl einer SchILD-Klasse einer Schilddatenbank und anschließende Analyse der Notenbilder des aktuellen Lernabschnitts. 3. Auswahl einer PM2-Datei mit Leistungsdaten und anschließender Analyse der Notenbilder.

![2 Prognoseverfahren – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/pm2/seite-09-bild-01.png)

### 2.1 Einzelanalyse

![2.1 Einzelanalyse – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/pm2/seite-09-bild-02.png)

Analyse eines einzelnen Notenbildes.

Klicken Sie auf Einzelanalyse, um den Prognosedialog aufzurufen.

### 2.2 Analyse von SchILD-Daten

![2.2 Analyse von SchILD-Daten – Abbildung aus der Originalanleitung, Seite 9](/bilder/pdf-anleitungen/pm2/seite-09-bild-03.png)

Analyse der Daten einer SchILD-Klasse.

Klicken Sie auf die Schaltfläche "Klasse"

Analyse von SchILD-Daten

![2.2 Analyse von SchILD-Daten – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/pm2/seite-10-bild-01.png)

und wählen eine Klasse aus.

![2.2 Analyse von SchILD-Daten – Abbildung aus der Originalanleitung, Seite 10](/bilder/pdf-anleitungen/pm2/seite-10-bild-02.png)

Alle Leistungsdaten des aktuellen Lernabschnitts der gewählten Klasse werden ange-

zeigt.

Hinweis:

- Sollten einige Unterrichtsfächer nicht angezeigt werden, so stimmt unter Umständen die Zuordnung der Unterrichtsfächer noch nicht. Siehe Einstellungen ►Fachersetzungen

Analyse von SchILD-Daten

### Optionen

![Optionen – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/pm2/seite-11-bild-01.png)

Wählen Sie einen Lernabschnitt, auf dem sich die angezeigten Leis-

tungsdaten beziehen.

![Optionen – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/pm2/seite-11-bild-02.png)

Berechnen einer Abschlussprognose auf der Basis der vorhande-

nen Leistungsdaten.

Wenn Sie die Prognosen von mehreren Schülern bestimmen wollen,

so markieren Sie die Datensätze in der ersten Spalte

Taste: F5

![Optionen – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/pm2/seite-11-bild-03.png)

Prognosedaten speichern

Taste: Strg + S

Hinweis: Fachnoten und Fachniveaus (E/G) können bei der

Analyse von SchILD-Daten nicht verändert werden!

![Optionen – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/pm2/seite-11-bild-05.png)

Export der Leistungsdaten in verschiedene Dateiformate

Taste: Strg + X

![Optionen – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/pm2/seite-11-bild-06.png)

Export der Prognoseergebnisse aller markierten Datensätze in eine

Textdatei

Taste: Strg + Alt + X

![Optionen – Abbildung aus der Originalanleitung, Seite 11](/bilder/pdf-anleitungen/pm2/seite-11-bild-07.png)

Ausgabe der im Fenster angezeigten Leistungsdaten an einen Dru-

cker.

Taste: Strg + P

Analyse von SchILD-Daten

### Anzeige

![Anzeige – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/pm2/seite-12-bild-01.png)

Klicken Sie auf

- "Leere Spalten", um alle Spalten auszublenden, die keine Leistungsdaten enthalten
- "Prognosefenster", um das Fenster Prognose-Dialog permanent anzuzeigen

Hinweis: Wenn diese Option nicht aktiviert ist, können Sie den Prognose-Dialog für die markierte Zeile mit Hilfe der Taste "F2" (alternativ: Leertaste) anzeigen lassen.

- "Farbmodus", um die Farbdarstellung zu aktivieren (siehe auch "Einstellungen ► Allgemein 27 ")
- "Suchen", um einen Suchdialog am unteren Rand der Listenansicht anzuzeigen

![Anzeige – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/pm2/seite-12-bild-03.png)

- "Autofilter", um die Anzeige auf bestimmte Attribute einzugrenzen

![Anzeige – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/pm2/seite-12-bild-04.png)

### 2.3 Analyse von PM2-Notendateien

![2.3 Analyse von PM2-Notendateien – Abbildung aus der Originalanleitung, Seite 12](/bilder/pdf-anleitungen/pm2/seite-12-bild-05.png)

Analyse der Notenbilder aus einer PM2-Datei

Klicken Sie auf die Schaltfläche "Datei"

Analyse von PM2-Notendateien

![2.3 Analyse von PM2-Notendateien – Abbildung aus der Originalanleitung, Seite 13](/bilder/pdf-anleitungen/pm2/seite-13-bild-01.png)

und wählen eine PM2-Datei mit Leistungsdaten aus.

![2.3 Analyse von PM2-Notendateien – Abbildung aus der Originalanleitung, Seite 13](/bilder/pdf-anleitungen/pm2/seite-13-bild-02.png)

Alle Leistungsdaten der gewählten PM2-Notendatei werden angezeigt.

Hinweis:

Analyse von PM2-Notendateien

- Die PM2-Datei mit dem Leistungsdaten hat einen vorgegebenen festen Aufbau: Die erste Zeile enthält eine Header-Zeile mit den Bezeichnungen der einzelnen "Spalten". Die einzelnen Bezeichnungen in der Header-Zeile müssen mit einem Trennzeichen (";") getrennt sein. Danach folgen die Datenzeilen. Bei leeren Feldern muss dennoch das Trennzeichen (";") ausgegeben werden, d.h. jede Zeile muss exakt die Anzahl der erwarteten Trennzeichen enthalten. Sollte ein Textfeld das Trennzeichen (";") enthalten, wird es in der Exportdatei durch Anführungszeichen begrenzt. ID;Name;Vorname;D-Niv;D-Note;E-Niv;E-Note;M-Niv;M- Note;LBNW-Note;BI-Note;CH-Niv;CH-Note;PH-Niv;PH- Note;GL-Note;EK-Note;GE-Note;PK-Note;LBAL-Note;AT- Note;AW-Note;AH-Note;RePP-Note;SP-Note;KU-Note;MU- Note;TX-Note;WPU-Fach;WPU-Note;EF1-Fach;EF1-Note;EF2-Fach;EF2-Note;EF3-Fach;EF3-Note;Prognose; 1;Baier;Hanne;E;3;E;3;G;3- ;;;N;4;E;4;;;2;;3;3;;;2;3;;;;AL;3;Latein;4;;;;;MSA;

Die 1. Schülerin Baier, Hanne belegt im obigen Beispiel das Fach Deutsch und Englisch auf E-Niveau mit jeweils der Note "3", das Fach Mathematik belegt Sie auf G-Niveau mit der Note "3-" usw. Im Unterordner ("\\Dat") befinden sich drei PM2-Dateien mit Beispieldaten.

### Optionen

![Optionen – Abbildung aus der Originalanleitung, Seite 14](/bilder/pdf-anleitungen/pm2/seite-11-bild-02.png)

Berechnen einer Abschlussprognose auf der Basis der vorhande-

nen Leistungsdaten

Wenn Sie die Prognosen von mehreren Schülern bestimmen wollen,

so markieren Sie die Datensätze in der ersten Spalte

Taste: F5

![Optionen – Abbildung aus der Originalanleitung, Seite 14](/bilder/pdf-anleitungen/pm2/seite-11-bild-03.png)

Prognosedaten speichern

Taste: Strg + S

Analyse von PM2-Notendateien

![Optionen – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/pm2/seite-11-bild-05.png)

Export der Leistungsdaten in verschiedene Dateiformate

Taste: Strg + X

![Optionen – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/pm2/seite-15-bild-02.png)

Export aller Prognoseergebnisse in eine Textdatei

![Optionen – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/pm2/seite-11-bild-07.png)

Ausgabe der im Fenster angezeigten Leistungsdaten an einen Dru-

cker.

Taste: Strg + P

![Optionen – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/pm2/seite-15-bild-04.png)

Drucken von Formularen, die mit dem Report-Explorer erzeugt wur-

den

### Anzeige

![Anzeige – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/pm2/seite-15-bild-05.png)

Klicken Sie auf

- "Leere Spalten", um alle Spalten auszublenden, die keine Leistungsdaten enthalten
- "Prognosefenster", um das Fenster Prognose-Dialog permanent anzuzeigen
- Hinweis: Wenn diese Option nicht aktiviert ist, können Sie den Prognose-Dialog für die markierte Zeile mit Hilfe der Taste "F2" (alternativ: Leertaste) anzeigen lassen.
- "Farbmodus", um die Farbdarstellung zu aktivieren (siehe auch "Einstellungen ► Allgemein 27 ")

Analyse von PM2-Notendateien

- "Suchen", um einen Suchdialog am unteren Rand der Listenansicht anzuzeigen

![Anzeige – Abbildung aus der Originalanleitung, Seite 16](/bilder/pdf-anleitungen/pm2/seite-12-bild-03.png)

- "Autofilter", um die Anzeige auf bestimmte Attribute einzugrenzen

![Anzeige – Abbildung aus der Originalanleitung, Seite 16](/bilder/pdf-anleitungen/pm2/seite-12-bild-04.png)

- "Bearbeiten", um direkt alle angezeigten Namen, Fachniveaus, Noten, etc. im Gitter bearbeiten zu können.
- Hinweis: Mit der Taste "Einfg" können Sie eine neue Zeile einfügen. Die Taste "Entf" löscht die gerade markierte Zeile.

### 3 Der Prognose-Dialog

Der Prognose-Dialog ist der zentrale Teil von PM2.

Die folgende Abbildung zeigt diesen Dialog für einen Schüler aus der PM2-Beispielda-

tei "Notenbeispiele.csv":

![3 Der Prognose-Dialog – Abbildung aus der Originalanleitung, Seite 17](/bilder/pdf-anleitungen/pm2/seite-17-bild-01.png)

Die Darstellung ist zweigeteilt:

1. Auf der linken Seite sind die Leistungsdaten und 2. Auf der rechten Seite das Prognoseergebnis.

### Abschlussberechnung

![Abschlussberechnung – Abbildung aus der Originalanleitung, Seite 17](/bilder/pdf-anleitungen/pm2/seite-17-bild-02.png)

Die Berechnung der Prognose wird gestartet durch einen Klick auf die

Schaltfläche "Berechnen" (alternativ: Taste: F5).

1. Der Algorithmus prüft zunächst, ob das Notenbild die Anforderungen für ESA erfüllt, dann EESA, MSA und schließlich MSAQ. 2. Sollten bei der Überprüfung eines Abschlusses / einer Berechtigung die

Mindestanforderungen nicht erfüllt sein, wird in einem weiteren Schritt über-

prüft, ob vorhandene Notendefizite tolerierbar sind ober im Falle von MSA /

MSAQ eine Ausgleichsregelung zum Tragen kommt.

3. Wenn ein Abschluss nicht erreicht wird, werden Nachprüfungsmöglichkeiten untersucht und ggf. die Nachprüfungsfächer angezeigt.

### Informationen zu bestimmten Abschlüssen

Wenn lediglich Informationen zu bestimmten Abschlüssen angezeigt werden sollen, so

klickt man auf den Pfeil neben der Schaltfläche "Berechnen":

![Informationen zu bestimmten Abschlüssen – Abbildung aus der Originalanleitung, Seite 18](/bilder/pdf-anleitungen/pm2/seite-18-bild-01.png)

- Strg+1: Zeigt Informationen zum ESA an
- Strg+E: Zeigt Informationen zum EESA an
- Strg+M: Zeigt Informationen zum MSA (Fachoberschulreife) an
- Strg+Q: Zeigt Informationen zum MSAQ an

Hinweis: Die Leistungsdatenanzeige ändert sich, wenn lediglich Informationen zu

bestimmten Abschlüssen angezeigt werden. Zusätzlich werden vier Spalten (Fächer-

gruppe (Grp.) / Defizite (D.) / Ausgleichsfach (A.) / Nachtprüfungsfach (NP.)) angezeigt:

![Informationen zu bestimmten Abschlüssen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/pm2/seite-19-bild-01.png)

### Optionen

![Optionen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/pm2/seite-19-bild-02.png)

Export der Daten in verschiedene Dateiformate

Taste: Strg + X

![Optionen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/pm2/seite-11-bild-07.png)

Ausgabe der im Fenster angezeigten Daten an einen Drucker.

Taste: Strg + P

![Optionen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/pm2/seite-19-bild-04.png)

Prognosedaten speichern

Taste: Strg + S

Hinweis: Schaltfläche wird nur angezeigt bei der Analyse von SchILD-

oder CSV-Leistungsdaten

![Optionen – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/pm2/seite-19-bild-05.png)

Vorherigen Datensatz anzeigen

Hinweis: Schaltfläche wird nur angezeigt bei der Analyse von SchILD-

oder CSV-Leistungsdaten

![Optionen – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/pm2/seite-20-bild-01.png)

Nächsten Datensatz anzeigen

Hinweis: Schaltfläche wird nur angezeigt bei der Analyse von SchILD-

oder CSV-Leistungsdaten

![Optionen – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/pm2/seite-20-bild-02.png)

SchILD - Leistungsdatenübersicht

Taste: Strg + L

Hinweis: Schaltfläche wird nur angezeigt bei der Analyse von SchILD-

Leistungsdaten

![Optionen – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/pm2/seite-20-bild-03.png)

Anzeige der rechtlichen Grundlagen zum jeweils erreichten Ab-

schluss

Taste: F1

### Anzeige

![Anzeige – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/pm2/seite-20-bild-04.png)

Sie können die Anzeige reduzieren:

- Aktivieren Sie "Leere Zeilen", um nur die Zeilen anzuzeigen, bei denen eine Note vergeben worden ist.
- Farbdarstellung ein / aus
- Notenschnelleingabe aktivieren / deaktivieren
- Deaktivieren "Prognose ausführlich", um die Anzeige des Prognoseergebnisses auf das Wesentliche zu konzentrieren.
- Analyse von Nachprüfungsmöglichkeiten ausführlich / knapp dokumentieren

### 4 Das Prognoseergebnis

Am Ende der Bestimmung einer Prognose bzw. eines Abschlusses steht das Progno-

seergebnis.

Wie so ein Ergebnis zu lesen ist, soll an dem folgenden Beispiel erläutert werden:

![4 Das Prognoseergebnis – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/pm2/seite-21-bild-01.png)

Zeile Erläuterung

1-3 Metadaten zum Schüler (Name, Zeitstempel, allgemeine Hinweise)

6-14 Überprüfung ob ein EESA (Erweiterter Erster Schulabschluss am Ende der Klasse 10) erreicht werden kann

8-11 Zuordnungen der benoteten Fächer zu den Fachgruppen 1 und 2

9 "D(E): 3-&gt;2": Die Note im E-Kurs im Fach Deutsch wird um eine Notenstufe gesenkt Analog im Fach Englisch und Mathematik ("E(E):3-&gt;2", "M(E): 4-&gt;3") Die zusätzliche Fremdsprache (Latein) wird hinsichtlich der EESA-Überprüfung ignoriert ("Ignoriere Latein")

10 In der Fächergruppe 1 befinden sich die Fächer Deutsch, Mathematik, Lernbereich Naturwissenschaft, sowie der Lernbereich Arbeitslehre (Die Noten werden jeweils in Klammern mit angegeben)

11 In der Fächergruppe 2 befinden sich die Fächer Englisch, das WPU-Fach, Gesellschaftslehre, Religion bzw. Praktische Philosophie und Sport (Die Noten werden jeweils in Klammern mit angegeben)

12 Überprüfung, ob die Mindestanforderungen für den EESA erfüllt sind. Die Mindestanforderung werden überprüft: Alle Fächer der Fächergruppe 1 und der Fächergruppe 2 müssen mindestens mit der Note "ausreichend" bewertet worden sein. PM2 stellt fest, dass dies der Fall ist! Also ist die Überprüfung auf EESA abgeschlossen.

14 =&gt; EESA gem. APO-SI §41(1) Die Überprüfung auf EESA, die mit Zeile 6 begann ist abgeschlossen. Der Schüler wird voraussichtlich den Abschluss EESA erreichen, da er die Voraussetzung gemäß §41 Absatz 1 der APO-SI erfüllt.

16-24 Analog zu den Zeilen 6-14 - Jetzt aber für MSA: Überprüfung ob ein MSA (Mittlerer Schulabschluss (Fachoberschulreife)) erreicht werden kann

18-21 Zuordnungen der benoteten Fächer zu den Fachgruppen 1 und 2

19 Zusätzliches E-Niv-Fach wird als G-Niv-Fach gewertet: M(E,4) -&gt; M(G,3) bzw. M: E(4) -&gt; G(3)

20 Zuordnung der benoteten Fächer zur Fächergruppe 1

21 Zuordnung der benoteten Fächer zur Fächergruppe 2

22 Überprüfung, ob die Mindestanforderungen für den MSA erfüllt sind. Die Mindestanforderung werden überprüft:

- Unterricht in 2 Fächern auf E-Niveau (2xE),
- FG1: E-Niv-Fächer mindestens "ausreichend" und G-Niv-Fächer mindestens "befriedigend", Wahlpflichtfach mindestens "ausreichend"
- FG2: E-Niv-Fächer mindestens "ausreichend" und G-Niv-Fächer mindestens "befriedigend", andere Fächer: mindestens 2 x "befriedigend", ansonsten mindestens "ausreichend" PM2 stellt fest, dass dies der Fall ist! Also ist die Überprüfung auf MSA abgeschlossen.

24 =&gt; MSA gem. APO-SI §42(3) Die Überprüfung auf MSA, die mit Zeile 16 begann ist abgeschlossen. Der Schüler wird voraussichtlich den Abschluss MSA erreichen, da er die Voraussetzung gemäß §42 Absatz 3 der APO-SI erfüllt.

26-37 Analog zu den Zeilen 16-24 - Jetzt aber für MSAQ: Überprüfung ob ein MSAQ (Mittlerer Schulabschluss - Fachoberschulreife, mit der Berechtigung für die gymnasiale Oberstufe) erreicht werden kann.

28-30 Zuordnung der benoteten Fächer zu den Fächergruppen 1 und 2.

31 Überprüfung der Fächer hinsichtlich von Defiziten. Ausgabe der Fächer mit einem Notendefizit.

32 PM2 stellt fest, dass die Note "ausreichend" in M(E) den Mindestanforderungen nicht genügt.

33 PM2 stellt fest, dass der Abschluss MSAQ nicht erreicht wird.

34 PM2 überprüft, ob eine Ausgleichsregelung geltend gemacht werden kann.

35 PM2 stellt fest, dass es für das Defizit in Mathematik keinen Ausgleich gibt.

37 PM2 stellt abschließend fest, dass der Abschluss MSAQ nicht erreicht wird und dass es auch keine Nachprüfungsmöglichkeit gibt. Hinweis: Eine Nachprüfung in WPU ist nicht zielführend, denn eine Nachprüfung ist nur zum Erwerb eines Abschlusses möglich, nicht aber um eine Ausgleichsregelung zu erreichen (Keine Nachprüfung zum Zwecke des Ausgleichs).

### 5 Der Prognose-Algorithmus

Grundsätzliche arbeitet der Prognose-Algorithmus wie folgt:

Der Algorithmus prüft zunächst, ob das Notenbild die Anforderungen für ESA erfüllt,

dann EESA, MSA und schließlich MSAQ.

![5 Der Prognose-Algorithmus – Abbildung aus der Originalanleitung, Seite 24](/bilder/pdf-anleitungen/pm2/seite-24-bild-01.png)

Hierbei werden für jeden Abschluss / Berechtigung (ESA, EESA, MSA, MSAQ), die

folgenden Arbeitsschritte durchgeführt:

1. Zunächst werden für den zu überprüfenden Abschluss / für die zu überprüfende Berechtigung die Fächergruppen FG1 und FG2 gebildet. Bsp. Abschluss EESA: FG1: D, M, LBNW, LBAL und FG2: E, WPU und alle anderen benoteten Fächer 2. Als nächstes werden je nach Abschluss / Berechtigung Vorarbeiten durchgeführt. Beispiel: Was ist mit zusätzlichen E-Niv-Unterricht? 3. Es folgt die Überprüfung, ob ein Abschluss überhaupt möglich ist. Beispiel MSA: Hat der Schüler nur ein E-Niv-Fach erübrigen sich alle weiteren Untersuchungen des Notenbildes. 4. Anschließend wird getestet, ob die Mindestanforderungen erfüllt werden. Ist dies der Fall, so ist der Abschluss / die Berechtigung erreicht.

5. Wenn die Mindestanforderungen nicht erfüllt werden, muss überprüft werden, ob vorhandene Notendefizite tolerierbar sind. Ist dies der Fall, so ist der Abschluss / die Berechtigung ebenfalls erreicht, andernfalls ist der Abschluss / die Berechtigung nicht erreicht. Bei der Überprüfung von MSA und MSAQ spielen die Ausgleichsregelungen eine wichtige Rolle. Bei ESA / EESA gibt es solche Ausgleichsregelungen nicht.

![5 Der Prognose-Algorithmus – Abbildung aus der Originalanleitung, Seite 25](/bilder/pdf-anleitungen/pm2/seite-25-bild-01.png)

Hinweis: Die Fächergruppen, die Bedingungen für zusätzliche E-Niv-Fächer, die

Ausschlussbedingungen und die Mindestanforderungen sowie die tolerierbaren also

möglichen Defizite sind für jede Abschlussart im Anhang tabellarisch aufgeführt

(ESA / EESA / MSA / MSAQ ). 59 61 65 68

Sollte ein Abschluss / Berechtigung nicht erreicht werden, schließt sich eine Überprü-

fung von Nachprüfungsmöglichkeiten an:

![5 Der Prognose-Algorithmus – Abbildung aus der Originalanleitung, Seite 26](/bilder/pdf-anleitungen/pm2/seite-26-bild-01.png)

Hinweis: Die rechtlichen Bedingungen für Nachprüfungen zum Erwerb von Ab-

schlüssen und Berechtigungen befinden sich im Anhang .

## Einstellungen, Fachersetzungen, Export und Reports

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 27–36](/dateien/pdf/pm2_bedienungsanleitung_1.pdf#page=27).

### 6 Einstellungen

![6 Einstellungen – Abbildung aus der Originalanleitung, Seite 27](/bilder/pdf-anleitungen/pm2/seite-27-bild-01.png)

Klicken Sie auf die Schaltfläche "Einstellungen", um den Dialog für die

verschiedenen Einstellungsmöglichkeiten aufzurufen.

Der Dialog besteht aus zwei Registerseiten:

1. Allgemeine Einstellungen 2. Fachersetzungen

### 6.1 Allgemein

Auf dieser Registerseite können Sie

- festlegen, ob Löschvorgänge und Gruppenprozesse vom Programmbenutzer bestätigt werden müssen
- das Bildschirmdesign und den Schriftstil festlegen
- Farben für den Zeilenwechsel und den Markierungsbalken in Listendarstellungen definieren
- sowie Farben festlegen
- für die Fachgruppen (HF=Hauptfächer, NW=Naturwissenschaften, GL=Gesellschaftslehre, usw.),
- für Fächer auf E-Niveau und G-Niveau,
- und die bei den Abschlüssen gebildeten Fächergruppen FG1 und FG2.

Allgemein

![6.1 Allgemein – Abbildung aus der Originalanleitung, Seite 28](/bilder/pdf-anleitungen/pm2/seite-28-bild-01.png)

### 6.2 Fachersetzungen

PM2 verwaltet eine Liste von Unterrichtsfächern (Kürzel, Gruppe, Bezeichnung). Diese

Fachbezeichnungen sind nicht veränderlich. Sollten Sie in SchILD andere Fachbe-

zeichnungen verwenden, so müssen Sie diese Fächer den PM2-Fächern zuordnen.

Im unteren Beispiel wurden drei Zuordnungen vorgenommen:

1. Das SchILD-Fach "E5" wurde dem PM2-Fach "E" zugeordnet 2. Das SchILD-Fach "NW" wurde dem PM2-Fach "Bi" zugeordnet 3. Die drei SchILD-Fächer "ER", "KR", "PP" wurde dem PM2-Fach "RePP" zugeordnet Sollten Sie weitere benotete Fächer hinzufügen wollen, so stehen Ihnen die drei Erwei-

terungsfächer "EF1" ... "EF3" zur Verfügung. Im Beispiel wurde das SchILD-Fach

"BWV" dem PM2-Fach "EF1" zugeordnet.

Fachersetzungen

![6.2 Fachersetzungen – Abbildung aus der Originalanleitung, Seite 29](/bilder/pdf-anleitungen/pm2/seite-29-bild-01.png)

Export

### 7 Anhang

### 7.1 Export

![7.1 Export – Abbildung aus der Originalanleitung, Seite 30](/bilder/pdf-anleitungen/pm2/seite-30-bild-01.png)

Die Leistungs- und Prognose/Abschlussdaten lassen sich in andere Datei-

formate exportieren.

Wählen Sie beim Export ggf. ein Dateiformat und einen Dateipfad für den Speicherort.

Dies ist sowohl durch Direkteingabe bei „Dateiname“ oder durch den Dateiauswahl-

dialog über die Schaltfläche „Datei“ möglich.

![7.1 Export – Abbildung aus der Originalanleitung, Seite 30](/bilder/pdf-anleitungen/pm2/seite-30-bild-02.png)

### 7.2 Ergebnisse

![7.2 Ergebnisse – Abbildung aus der Originalanleitung, Seite 30](/bilder/pdf-anleitungen/pm2/seite-30-bild-03.png)

Mit Hilfe dieser Option können Sie die Prognoseergebnisse in eine einfa-

che unformatierte Textdatei schreiben. Markieren Sie einen oder mehrere Schüler und

klicken Sie auf "Ergebnisse". Es öffnet sich ein Editorfenster mit allen Prognoseergeb-

nissen:

Ergebnisse

![7.2 Ergebnisse – Abbildung aus der Originalanleitung, Seite 31](/bilder/pdf-anleitungen/pm2/seite-31-bild-01.png)

### 7.3 Drucken

![7.3 Drucken – Abbildung aus der Originalanleitung, Seite 31](/bilder/pdf-anleitungen/pm2/seite-31-bild-02.png)

Beim Drucken sind der Formulardruck mit dem Report-Explorer und ein

einfacher Listendruck zu unterscheiden. Beim einfachen Listendruck werden die

Leistungsdaten, so wie sie am Bildschirm angezeigt werden, direkt an einem Drucker

ausgegeben, während der Formulardruck vielfältige Gestaltungsmöglichkeiten eröffnet.

Informationen zum Drucken mit Hilfe des Report-Explorers finden Sie hier .

Drucken

### Einfacher Listendruck

Zunächst öffnet sich ein Dialog für die Druckeinstellungen:

![Einfacher Listendruck – Abbildung aus der Originalanleitung, Seite 32](/bilder/pdf-anleitungen/pm2/seite-32-bild-01.png)

Klicken Sie anschließend auf "OK" um eine Druckvorschau am Bildschirm anzuzeigen:

Drucken

![Einfacher Listendruck – Abbildung aus der Originalanleitung, Seite 33](/bilder/pdf-anleitungen/pm2/seite-33-bild-01.png)

Ein Klick auf „Drucken“ leitet Sie zur Druckeinrichtung weiter:

![Einfacher Listendruck – Abbildung aus der Originalanleitung, Seite 33](/bilder/pdf-anleitungen/pm2/seite-33-bild-02.png)

Report-Explorer

### 7.4 Report-Explorer

In PM2 ist die Report-Komponente zur Gestaltung und zum Ausdrucken von Leistungs-

und Prognosedatendaten eingebunden worden.

![7.4 Report-Explorer – Abbildung aus der Originalanleitung, Seite 34](/bilder/pdf-anleitungen/pm2/seite-34-bild-01.png)

Nach einem Klick auf "Formulardruck" wird der folgende Bildschirmdialog angezeigt:

![7.4 Report-Explorer – Abbildung aus der Originalanleitung, Seite 34](/bilder/pdf-anleitungen/pm2/seite-34-bild-02.png)

Auf jeder Registerseite kann

![7.4 Report-Explorer – Abbildung aus der Originalanleitung, Seite 34](/bilder/pdf-anleitungen/pm2/seite-34-bild-03.png)

1. die Druckausgabe mit der aktuell ausgewählten Reportdatei gestartet werden, 2. der Reportdesigner gestartet werden, 3. eine neue Reportdatei angelegt werden oder 4. eine zuvor mit dem Designer erstellte Reportdatei ausgewählt werden.

Unter dem Menübereich befindet sich eine Liste der Schüler auf die sich der Ausdruck

bezieht.

Zwei Reportvorlagen werden bei der Installation von PM2 mit ausgeliefert:

Report-Explorer

1. Mit "PrognoseMitteilung.rPM2" lassen sich Prognosemitteilungen ausdrucken:

![7.4 Report-Explorer – Abbildung aus der Originalanleitung, Seite 35](/bilder/pdf-anleitungen/pm2/seite-35-bild-01.png)

Report-Explorer

2. Mit "PM2_Report.rPM2" lässt sich das Prognoseergebnis und die Leis-

tungsdaten eines Schülers ausdrucken:

![7.4 Report-Explorer – Abbildung aus der Originalanleitung, Seite 36](/bilder/pdf-anleitungen/pm2/seite-36-bild-01.png)

Hinweise:

- Um sich zu informieren, welche Datenquellen und Datenfelder für die Bearbeitung von Reports zur Verfügung stehen, ist es hilfreich den Reportdesigner mit einem der beiden oben genannten Reportvorlagen zu starten. Sollten Sie bereits Erfahrung mit dem Bearbeiten von SchILD-Reports besitzen, dürfte Ihnen das Erstellen und Bearbeiten von PM2-Reports keine Probleme bereiten. Siehe auch: https://wiki.svws.nrw.de/mediawiki/index.php?title=Reporting .
- Im Dateiordner "\\Vorlagen" befinden sich die Report-Datei PM2_rpt.Vorlage. Immer wenn eine neue Report-Datei angelegt wird, wird in dieser neuen Datei diese Vorlage (sozusagen als Schablone) gespeichert.

## Ansicht, Rollen und Tastaturkürzel

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 43–54](/dateien/pdf/pm2_bedienungsanleitung_1.pdf#page=43).

Startparameter

OhneSchild

Mit diesen drei Parameter wird PM2 direkt ohne Anmeldedialog gestartet und die No-

tendatei "c:\\SP_Testumgebung\\PM2\\Referenzen\\dat\\Referenzen.pm2l" eingelesen und

angezeigt.

### 7.8 Übersicht

![7.8 Übersicht – Abbildung aus der Originalanleitung, Seite 43](/bilder/pdf-anleitungen/pm2/seite-43-bild-01.png)

Wenn Sie eine Aufsummierung der berechneten Prognosen / Abschlüsse

benötigen, so klicken Sie auf "Übersicht".

Sie erhalten einen dreigeteilten Dialog:

![7.8 Übersicht – Abbildung aus der Originalanleitung, Seite 43](/bilder/pdf-anleitungen/pm2/seite-43-bild-02.png)

Übersicht

1. Oben links sehen Sie die Prognosesummen

2. Rechts daneben, eine Schülerliste die zu der jeweils markierten Prognose gehört

(Name, Prognose, Nachprüfungsmöglichkeiten)

3. Eine grafische Aufbereitung der Summendaten.

### 7.9 Rollenkonzept

Um Prognosen und Abschlüsse zu berechnen und gegebenenfalls in die SchILD-Da-

tenbank zurückzuspeichern, ist eine vorherige Anmeldung in PM2 als Benutzer mit ei-

nem gültigen Benutzernamen und einem Kennwort erforderlich. PM2 unterscheidet da-

bei zwischen internen und externen Benutzern:

- Intern ist nur der Benutzer mit dem Login-Namen "PM2Admin" zulässig. PM2Admin verwendet das Startkennwort "Schild". Dieser Benutzer besitzt administrative Befugnisse und kann die Zugangsdaten des internen Benutzers festlegen sowie den SchILD-Zugriff konfigurieren.
- Externe Benutzer sind SchILD-Benutzer. Es werden nur Benutzer akzeptiert, die in SchILD Administrationsrechte besitzen oder bestimmte Funktionen in SchILD wahrnehmen.
- Das PM2-Rollenkonzept ist an die spezifischen Anforderungen einer GE/SK angepasst:
- Rolle KL/sKL:
- Darf die Daten seiner Klasse aufrufen.
- Darf die Prognosen berechnen, jedoch nur im aktuellen Lernabschnitt.
- Darf keine Noten ändern.
- Trägt die Lernbereichsnoten nach Rücksprache mit den zuständigen Lehrkräften für LBAL und LBNW ein.
- Erstellt einen ersten Prognose-Vorschlag für die Beratungs- bzw. Zeugniskonferenzen.
- Rolle AL:
- Darf die Leistungsdaten seiner Klassen aufrufen.
- Darf die Prognosen berechnen.
- Darf auch die Noten ändern, jedoch nur im aktuellen Lernabschnitt.
- Rolle Admin:
- Darf alle Klassen, Lernabschnitte, Noten und Prognosen lesen und verändern.

Rollenkonzept

- Rolle SL/sSL:
- Wie Admin, jedoch nur lesen. Um das Rollenkonzept insbesondere für die ALs in PM2 umzusetzen, unterstützt PM2

die in SchILD abbildbaren Klassengruppen/Abteilungen.

Hinweise:

- Das Anmeldeverfahren mit Zugehörigkeit zur Gruppe "Prognose" wird nicht mehr unterstützt.
- Der Benutzer "Admin" bzw. ein Benutzer aus der Gruppe "Administrator" sollte sich in PM2 nach Möglichkeit nicht anmelden, um potenzielle SchILD- Datenbestandprobleme bzw. Verluste zu vermeiden. Dies gilt grundsätzlich für alle Module und insbesondere bei der Anmeldung an SchILD selbst.
- In SchILDzentral wird der Benutzer "PM2Admin" nicht unterstützt und kann sich in PM2 auch nicht anmelden. In einer SchILDzentral-Umgebung kann das Modul PM2 nur aus der Anwendung SchILDzentral heraus gestartet werden und die Konfiguration des PM2-Moduls (wie auch aller anderen Module) wird durch SchILDzentral geregelt.

### 1. Beispiel: Rolle Abteilungsleitung

In der folgenden Abbildung einer SchILD-Beispieldatenbank ist die Abteilung mit der

Bezeichnung "ABT 2" und der Abteilungsleitung (oder dem Koordinator) "BART" dar-

gestellt. Der Klassengruppe/Abteilung "ABT 2" wurden die Klassen "9a, ..., 9d, 10a, ... ,

10d" zugeordnet (siehe Abbildung).

Rollenkonzept

![1. Beispiel: Rolle Abteilungsleitung – Abbildung aus der Originalanleitung, Seite 46](/bilder/pdf-anleitungen/pm2/seite-46-bild-01.png)

SchILD: Abteilungen Dialog

Wichtig:

- Der Abteilungsleiter oder Koordinator "BART" ist innerhalb von SchILD eine Lehrkraft. Dies allein schon deswegen, weil die Auswahlliste für den Koordinator nur Personen auflistet, die zur Gruppe "Lehrer" gehören.
- Um in PM2 als Abteilungsleiter erkannt zu werden, muss der Benutzer "BART" in der SchILD-Benutzerverwaltung aufgeführt sein.
- Dieser Benutzer mit dem Nachnamen "Barta" hat den Login-Namen "BART" und nicht etwa "ABT_2".

Rollenkonzept

![1. Beispiel: Rolle Abteilungsleitung – Abbildung aus der Originalanleitung, Seite 47](/bilder/pdf-anleitungen/pm2/seite-47-bild-01.png)

SchILD: Benutzerverwaltung

In Prognose-Modul PM2 meldet sich demnach der Benutzer "BART" an:

![1. Beispiel: Rolle Abteilungsleitung – Abbildung aus der Originalanleitung, Seite 47](/bilder/pdf-anleitungen/pm2/seite-47-bild-02.png)

PM2: Login-Dialog für "BART"

und bekommt Zugang zu all seinen Klassen 9a ,..., 9d, 10a ,..., 10d (siehe folgende

Abb.)

Rollenkonzept

![1. Beispiel: Rolle Abteilungsleitung – Abbildung aus der Originalanleitung, Seite 48](/bilder/pdf-anleitungen/pm2/seite-48-bild-01.png)

Klassenauswahlliste für "BART" für den Lernabschnitt 2020.1

In der Statuszeile kann man erkennen, welche Rolle dem Benutzer mit dem Login-Na-

men "BART" und dem Benutzer-Nachnamen "Barta" von PM2 zugeordnet worden ist.

In diesem Fall "AL" (=Abteilungsleitung):

![1. Beispiel: Rolle Abteilungsleitung – Abbildung aus der Originalanleitung, Seite 48](/bilder/pdf-anleitungen/pm2/seite-48-bild-02.png)

Diese Informationen werden auch auf der Informationsseite von PM2 gespiegelt:

![1. Beispiel: Rolle Abteilungsleitung – Abbildung aus der Originalanleitung, Seite 48](/bilder/pdf-anleitungen/pm2/seite-48-bild-03.png)

PM2 - Informationsseite

Rollenkonzept

### Erweiterte Abteilungsverwaltung

Diese "Bedingung", dass Koordinatoren von Abteilungen notwendigerweise aus der

Gruppe "Lehrer" kommen müssen, kann man in PM2 ab der Version 1.7.7.0 umgehen

(siehe Abb.):

![Erweiterte Abteilungsverwaltung – Abbildung aus der Originalanleitung, Seite 49](/bilder/pdf-anleitungen/pm2/seite-49-bild-02.png)

PM2 - Abteilungserweiterung

Für einen PM2-Benutzer mit Administratorrechten gibt es die Möglichkeit in den Ein-

stellungen, die Abteilungskoordinatoren auf eines oder mehrere Benutzerkonten zu er-

weitern. Rufen Sie hierzu den Dialog für die Programmeinstellungen auf und klicken auf

die Registerseite "Abteilungen". PM2 liest aus SchILD alle Abteilungsdaten und listet

diese am Bildschirm. Wichtig sind die Spalten "PM2-AL" und "n.b.". Wenn der Abtei-

lungsleiter "BART" es gewohnt ist, sich in SchILD oder in einem der SchILD-Module

mit dem Login-Namen "Abt_1" anzumelden, so tragen Sie in der Spalte mit dem Spal-

tentitel "PM2-AL" und der ersten Zeile "Abt_1" ein und speichern Sie die Änderungen.

Bei der Anmeldung mit der Login-Kennung "Abt_1" wird geprüft, ob "Abt_1" als Koor-

dinator bei einer Abteilung eingetragen ist oder der zugeordnete Koordinator innerhalb

von SchILD in der 3. Spalte.

Hinweis:

Rollenkonzept

- Es können auch mehrere Login-Kennungen eingetragen werden, jeweils durch ein Komma getrennt.
- Sollte einmal der zuständige Abteilungsleiter bei einer Zeugniskonferenz verhindert sein, so kann über diesen Mechanismus ein anderer Programmbenutzer mit den selben PM2-Rechten ausgestattet werden.

![Erweiterte Abteilungsverwaltung – Abbildung aus der Originalanleitung, Seite 50](/bilder/pdf-anleitungen/pm2/seite-50-bild-01.png)

### Abteilungen unberücksichtigt lassen

Sollte eine in SchILD eingetragene Abteilung in PM2 nicht berücksichtigt werden, so

können Sie durch einen Klick in der Spalte "n.b." ("nicht berücksichtigen") erzwingen,

dass bei der Ermittlung der Benutzer-Rollen, diese Abteilung unberücksichtigt bleibt.

Rollenkonzept

### 2. Beispiel: Rolle Stellv. Klassenleitung

In der Klassenauswahlliste im Lernabschnitt 2020.1 kann man erkennen, das "BRIS"

stellvertretender Klassenlehrer in der Klasse "9c" war. In der SchILD-Benutzerverwal-

tung ist zu erkennen, dass "BRIS" bereits SchILD-Benutzer ist, den Nachnamen "Brist-

dol" besitzt und zur Gruppe "Lehrer" gehört.

![2. Beispiel: Rolle Stellv. Klassenleitung – Abbildung aus der Originalanleitung, Seite 51](/bilder/pdf-anleitungen/pm2/seite-51-bild-02.png)

SchILD: Dialog für die Bearbeitung von Programmbenutzern

Meldet sich "BRIS" in PM2 an und klickt auf "Lerngruppen", so erhält er die folgende

Auswahlliste:

![2. Beispiel: Rolle Stellv. Klassenleitung – Abbildung aus der Originalanleitung, Seite 51](/bilder/pdf-anleitungen/pm2/seite-51-bild-03.png)

Benutzer "BRIS": Auswahlliste Lernabschnitte

Rollenkonzept

PM2 hat dem Benutzer "BRIS" offensichtlich die Rolle "KL" bzw. "sKL2" zugewiesen.

Wird der zweite Eintrag ausgewählt, also der Lernabschnitt "2019.4", so erscheint der

folgende Dialog:

![2. Beispiel: Rolle Stellv. Klassenleitung – Abbildung aus der Originalanleitung, Seite 52](/bilder/pdf-anleitungen/pm2/seite-52-bild-01.png)

PM2 hat festgestellt, dass für den Benutzer "BRIS" in der Rolle "sKL" einzig die Klasse

"9c" zur "Auswahl" steht. Da dieser Lernabschnitt in der Vergangenheit liegt, bestehen

für "BRIS" lediglich Leserechte.

![2. Beispiel: Rolle Stellv. Klassenleitung – Abbildung aus der Originalanleitung, Seite 52](/bilder/pdf-anleitungen/pm2/seite-52-bild-02.png)

Anmelden kann sich erst einmal jeder SchILD-Benutzer. Ist für einen Benutzer jedoch

keine der obigen Rollen zuweisbar, bleibt in PM2 nur der Zugriff auf PM2-Notendateien

ohne Zugriff auf SchILD.

Rollenkonzept

![2. Beispiel: Rolle Stellv. Klassenleitung – Abbildung aus der Originalanleitung, Seite 53](/bilder/pdf-anleitungen/pm2/seite-53-bild-01.png)

Dies wird auch in der reduzierten Auswahl der Benutzeroptionen deutlich:

![2. Beispiel: Rolle Stellv. Klassenleitung – Abbildung aus der Originalanleitung, Seite 53](/bilder/pdf-anleitungen/pm2/seite-53-bild-02.png)

Tastaturkürzel

### 7.10 Tastaturkürzel

### Klassenanalyse

### Kürzel Funktion

F8 Ansichtsoptionen für die Klassenanalyse konfigurieren Strg+B Bearbeiten in der Klassenübersicht aktivieren / deaktivieren (nur im Dateimodus) Alt+F1 Bedienungsanleitung Alt+B Benutzerdaten lesen und Anzeige anpassen Strg+A Datensätze markieren: Alle (siehe linke Spalte in der Klassenübersicht) Strg+K Datensätze markieren: Keinen (siehe linke Spalte in der Klassenübersicht) Strg+U Datensätze markieren: Markierungen umkehren (siehe linke Spalte in der Klassenübersicht) F11 Einstellungen des PM2-Moduls bearbeiten Strg+Alt+E Einzelanalyse – leeres Notenbild F3 Einzelanalyse – markierter Datensatz Strg+X Export der Klassenübersicht in verschiedene Dateiformate (z.B. MS-Excel) Strg+Alt+X Export der Prognoseergebnisse aller markierten Schüler in eine Textdatei Strg+F Farbmodus aktivieren F6 Festlegen der Parameter für die Berechnung einer Prognose Strg+Alt+P Formulardruck (z.B. Prognosemitteilungen) Strg+I Import (z.B. CSV-Dateien) Strg+Alt+F1 Informationen zum PM2-Modul Strg+J JSON-Export Strg+P Klassenübersicht drucken Strg+L Leerspalten ausblenden Strg+Alt+D Notenbilder einer PM2-Notendatei anzeigen (= Dateimodus) Strg+Alt+K Notenbilder einer SchILD-Klasse anzeigen (=SchILD-Modus) Strg+Alt+A Notensammeländerungen Strg+Alt+R Prognose als Referenzwert übernehmen (nur bei entsprechenden Rechten, nur im Dateimodus) F5 Prognose berechnen Strg+E Prognoseergebnis anzeigen (zeigt am rechten Bildschirmrand die Berechnungsergebnisse an) F7 Prognoseübersicht Strg+G Prüfungsergebnisse beider Prüfungsordnungen werden gleichzeitig dargestellt: ja/nein Alt+Z SchILD-Zugriff bearbeiten

## Änderungen der dokumentierten Programmstände

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 3–6](/dateien/pdf/pm2_versionsgeschichte.pdf#page=3).

Dieser Abschnitt gibt die Hinweise der dokumentierten Programmausgabe wieder.

- Neu: Suchen &amp; Ersetzen – Dialog im Modus „PM2-Notendateien.

1.7.4.1 (als Beta-Version) - Release: 02.10.2023 - Korrigiert: Import von Leistungsdaten - Sonstige kleinere Fehler wurden korrigiert.

1.7.4.0 - Release: 01.10.2023 - Erweiterung: PM2 startet jetzt mit einem Splashscreen, denn erst kommt das Benutzer-Login und noch ein oder zwei Dialoge, je nach Konfiguration und dann erst das PM2-Hauptformular. - Die Überprüfung der Lernbereichsnoten für NW und ggf. für AL – die es schon immer gab – ist in den allgemeinen „PreCheck-Bereich“ übernommen worden. - Sonstige kleinere Fehler wurden korrigiert. 1.7.3.0 - Release: 30.09.2023 - Korrigiert: Einlesen von SchILD-Daten: Das Programm stellte nicht um auf die richtige APO. - Mehrere zusätzliche Vorprüfungen der Notenbilder hinsichtlich der Verträglichkeit mit der jeweils gültigen APO-SI - Sonstige kleinere Fehler wurden korrigiert. 1.7.2.0 - Release: 27.09.2023 - Überarbeitung der Rücksicherung von Daten (insbesondere von Einzelnoten) in die SchILD-DB. War bei der alten Version nicht möglich. Hier konnte nur die Prognose und das Berechnungsergebnis (sowie LBNW und LBAL) in der SchILD-DB gespeichert werden. Habe ich auch mit SchILDzentral getestet. - Sonstige kleinere Fehler wurden korrigiert. 1.7.1.0 - Release: 26.09.2023 - Fehlerkorrektur 1.7.0.0 - Release: 26.09.2023 - Umsetzungen der MSB-Empfehlungen - Die Zugangsberechtigungen wurde funktionsbezogen geändert: KL, ÀL, SL (siehe Benutzerhandbuch). Die jeweiligen (SchILD-) Benutzerrechte werden explizit am Bildschirm ausgebgeben:

- Unter Hilfe &gt; Informationen
- In der Statusleiste des Hauptformulars - Die Validierungsergebnisse der Eingaben wurden optisch „aufgehübscht“ - Das Programm liest die Fremdsprachen aus der SchILD-DB, akzeptiert aber auch weiterhin manuelle Eingaben durch den Benutzer - In der Einzelanalyse eines SchILD-Schülers wurden einige zusätzliche Elemente aufgenommen:
- Schüler-Foto
- Schülername
- Tabellarische Auflistung der bisher vergebenen Prognosen - In der Klassenanalyse einer SchILD-Klasse:
- Sind die Fächer, an denen der Schüler NICHT teilgenommen hat, durch ein „-“ gesperrt.
- Ähnlich wie im Konferenzmodul, werden zusätzliche Angaben zum gerade selektierten Fach (z.B. Fachlehrer, Kursbezeichnung, etc. gelistet, - Fehlerbeseitigung 1.6.4.2 - Release: 06.09.2023 - Umsetzungen der MSB-Empfehlungen - Fehlerbeseitigung 1.6.0.0 - Release: 21.08.2023 - Überarbeitung nach ersten Vorführungen im MSB

1.5.0.0 - Release: 12.06.2023 - Unterstützung der Änderungen in der APO-SI 05 / APO-SI 20 - Überarbeitete Darstellung der Berechnungsergebnisse - Unterstützung der „Günstiger-Prüfung“ durch eine vergleichende Ansicht der Berechnungsergebnisse - Neues kontrastreichere Design-Verfahren - Fehlerbeseitigung 1.4.5.0 - Release: 05.12.2020 - Kleinere Anpassungen 1.4.4.0 - Release: 23.11.2020 - Anpassungen beim JSON-Export 1.4.3.0 - Release: 15.11.2020 - Fehlerbeseitigung 1.4.2.1 - Release: 04.11.2020 - Fehlerbeseitigung 1.4.2.0 - Release: 02.11.2020 - JSON-Export: „E“ wird als "istFremdsprache":true exportiert - Fehlerbeseitigung 1.4.1.0 - Release: 30.09.2020 - Bei „Datei speichern unter …“ werden ab dieser Version keine Dateien mit der Endung „csv“ erzeugt, sondern mit der Dateiendung „pml“. Darüber hinaus können diese Dateien jetzt auch verschlüsselt werden. Verschlüsselte Notendateien haben die Endung „pmc“. Bei „Datei öffnen“ besteht die Möglichkeit, sowohl unverschlüsselte als auch verschlüsselte Notendateien wieder einzulesen. Hinweis: Exportdateien die mit dem Befehl „Standard-Export“ erzeugt worden sind, können nicht wieder als Notendateien eingelesen werden. - JSON-Export - Fehlerbeseitigung 1.4.0.0 - Release: 24.09.2020 - HDDPI-Unterstützung - Es stehen drei verschiedene Symbol-Bibliotheken zur Auswahl durch den Benutzer zur Verfügung (siehe Einstellungen). - Der Schieberegler für die Textskalierung wurde in allen Dialogen nach unten rechts platziert. - Wahlmöglichkeit ob die Hilfeanzeige als Windows-Hilfe oder als Browser-Hilfe angezeigt wird (siehe Einstellungen). - Fehlerbeseitigung 1.3.1.2 - Release: 04.06.2020 - Fehlerbeseitigung 1.3.1.1 - Release: 26.05.2020 - Sondergelungen APO-SI - Fehlerbeseitigung 1.2.1.0 - Release: 24.02.2020 - Fehlerbeseitigung 1.1.3.0 - Release: 04.11.2019 - Fehlerbeseitigung

1.1.1.0 - Release: 28.10.2019 - Einzelanalyse: Notenbilder lassen sich getrennt speichern und wieder einlesen. - Die Berechnungsreihenfolge lässt sich einstellen: Bisher wurde zuerst das Erreichen des HA überprüft, dann ggf. MSA und abschließend MSAQ. Diese Reihenfolge lässt sich in den Einstellungen umdrehen. - Der Programmstart erfolgt normalerweise mit der Benutzerabfrage: „Einzelanalyse, SchILD-Analyse oder Import csv- Notendatei?“. Diese Abfrage lässt sich umgehen, wenn in den Einstellungen ein Startwert für die Analyseart gewählt wird (siehe auch „Startparameter“ in der Hilfedatei bzw. Anleitung). - Fehlerbeseitigung 1.1.0.0 - Release: 11.10.2019 - Anpassungen an die Vierte Verordnung zur Änderung der APO S I und der VVzAPO-SI. Alle Änderungen hinsichtlich der Abschlussberechnungen befinden sich in der Hilfedatei und der Bedienungsanleitung (siehe „Anhang\\Rechtliche Grundlagen“) - In der Klassenübersicht kann das Prognoseergebnis wahlweise am rechten Fensterrand ein- und ausgeblendet werden. - Es wird eine csv-Datei mitausgeliefert, in der sich eine Vielzahl von fiktiven Notenbildern befinden, einschließlich der hieraus resultierenden Prognosen. Tipp: Laden Sie die csv-Datei „Notenbeispiele.csv“ aus dem PM2-Installationsunterordner „\\Dat\\“ und markieren Sie die Option „Prognoseergebnis“ im Register „Prognose“. - Fehlerbeseitigung 0.9.9.8 - Release: 27.06.2019 - Fehlerbeseitigung 0.9.9.7 - Release: 26.06.2019 - Fehlerbeseitigung: Abgeschlossene Fächer bleiben unberücksichtigt 0.9.9.6 - Release: 24.05.2019 - Prognoseübersicht: Aggregation der Prognosen / Abschlüsse - Formulardruck: Mit Hilfe des Report-Explorers können Formulare und Listen gedruckt werden. 0.9.9.1 - Release: 11.04.2019 - Fehlerbeseitigung im Zusammenhang mit SchILDzentral:

- Speichern von Einstellungen
- Wichtiger Hinweis für SchILDzentral User: Die Zugriffs-Schnittstelle (SchILDUAzentral.dll) muss die Versionsnummer 2.1.0.14 (vom 29.03.2019) oder neuer haben. 0.9.8.0 - Release: 28.01.2019 - Berücksichtigung von implizit vergebenen Benutzerechten - Fehlerbeseitigung beim Speichern von Leistungsdaten 0.9.7.1 - Release: 08.01.2019 - Anmeldedialog: Neue Schaltfläche: Ohne SchILD-Zugriff starten - Anpassung an SchILDzentral 0.9.7.0 - Release: 27.11.2018 - Bei der Analyse von Notenbildern aus SchILD wird eine zusätzliche Spalte mit Fachinformationen angezeigt - Die Parameter (Allgemeine Einstellungen / Fachersetzungen) lassen sich in Profildateien speichern und laden. - Fehlerbeseitigung 0.9.6.6 - Release: 08.10.2018 - Optimierung der Ausgleichsanzeige bei MSA-Q

0.9.6.5 - Release: 14.09.2018 - Parameter: „OhneSchILD“ Wenn dieser Parameter gesetzt wird, ist nur die Einzelanalyse eines Notenbildes oder die Analyse von Notenbildern aus einer csv-Datei möglich. Der Zugriff auf die Leistungsdaten innerhalb einer SchILD- Datei ist nicht möglich. Durch einen Doppelklick auf die Datei "PM2_ohne_Schild_starten.bat" (siehe PM2-Installationsordner) wird PM2.exe automatisch mit dem Startparameter "OhneSchILD" gestartet. 0.9.6.3 - Release: 02.07.2018 - Fehlerbeseitigung im Zusammenhang mit der FLD in Ch/Ph 0.9.6.2 - Release: 12.06.2018 - Fehlerbeseitigung 0.9.6.1 - Release: 07.06.2018 - Fehlerbeseitigung 0.9.5.0 - Release: 28.05.2018 - Fehlerbeseitigung 0.9.4.0 - Release: 25.05.2018 - Fehlerbeseitigung 0.9.3.1 - Release: 18.05.2018 - Änderung der Update-Routine: Dieses Release kann nicht über die in PM2 implementierte Update-Routine aktualisiert werden. Benutzen Sie die Grundinstallation oder das ZIP-Paket - Fehlerbeseitigung 0.9.1.0 - Release: 08.05.2018 - Kompaktere Darstellung der Prognoseergebnisse - Fehlerbeseitigung („Keine Nachprüfung zum Zwecke des Ausgleichs“) 0.9.0.1 - 1. Test-Release

### 4. Kontakt:

Referat 135

IT-Unterstützung von Verfahren Kompetenzzentrum Web-Anwendungen

Ministerium für Schule und Bildung Nordrhein-Westfalen Völklinger Str. 49

40221 Düsseldorf

## Rechtsübersichten der Handbuchausgabe

Die Originalanleitung enthält einen [Vergleich der damaligen Regelungen](/dateien/pdf/pm2_bedienungsanleitung_1.pdf#page=4) und einen [Anhang mit Rechtsgrundlagen, Abschlussübersichten und Nachprüfungen](/dateien/pdf/pm2_bedienungsanleitung_1.pdf#page=55). Diese Abschnitte dokumentieren den Rechtsstand der Handbuchausgabe.
