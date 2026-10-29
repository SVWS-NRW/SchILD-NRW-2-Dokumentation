---
title: "Änderungshistorie von LuPO"
---

<a id="lupo-versionsgeschichte"></a>

# Änderungshistorie von LuPO

<a id="Version_2.1.8.1"></a>

## Version 2.1.8.1

Im Ausdruck wird nun auch statt APO-GOSt(B)10/G8 die neue Bezeichnung APO-GOSt(B)10 ausgegeben.

<a id="Version_2.1.7.3"></a>

## Version 2.1.7.3

Bei den neuen Belegprüfungen nach APO-GOSt § 8 (5) Satz 2 und APO-GOSt VV 8.5.3 wird nun auch das Häkchen "2. Fremdsprache in Sek. I manuell geprüft" berücksichtigt.

<a id="Version_2.1.7.2"></a>

## Version 2.1.7.2

In LuPO (und SchILD) wurde die APO-GOSt(B)10/G8 in APO-GOSt(B)10 umbenannt, um Verwirrungen zu vermeiden.

<a id="Version_2.1.7.1"></a>

## Version 2.1.7.1

- LuPO konnte noch keine Fremdsprachen ab Klasse 7 und ab Klasse 9 auswerten (Rückkehr GY zu G9 mit Änderung der Sprachenfolge in allen Schulformen). Dies wurde nun ergänzt.
- Es wurde eine neue Belegprüfung hinzugefügt, welche die Belegung nach APO-GOSt § 8 (5) Satz 2 und APO-GOSt VV 8.5.3 prüft.

<a id="Version_2.1.6.2"></a>

## Version 2.1.6.2

- Bei den Fremdsprachen funktionierte die Belegungssperre nicht immer korrekt, wenn unter Datenbearbeitung \> Fächer das Auswahlfeld „Eingabe bei Fremdsprachen aus SI nur erlauben, wenn auch eine Sprachenfolge eingetragen ist.“ aktiviert war. Diese Funktion wurde überarbeitet.
- Beim Import von Schüler- und Laufbahndaten über die Schild-NRW Schnittstelle wird nun gefragt, ob die privaten oder die schulischen E-Mail-Adressen importiert werden sollen. Voraussetzung ist natürlich, dass in Schild der passende Export vorgenommen wurde.
- Der E-Mail-Versand mit dem internen E-Mail-Client wurde unter Umständen auf dem falschen Port gesendet.
- Beim Öffnen von Lupo-Dateien werden nun die Benutzerkennwörter gehasht. Nach diesem Prozess können die Lupo-Dateien von älteren Lupo-Versionen nicht mehr geöffnet werden.
- Bei den Schülern können nun erweiterte Geschlechtsangaben gemacht werden
- Es ist jetzt eine Seriendruckverschickung der Wahlbögen möglich. Dazu folgende Hinweise: Diese Funktion konnte nicht ausgiebig getestet. Bei den Grundeinstellungen gibt es jetzt getrennte Schalter für die Eingabe der Mail-Texte für die Wahlbögen und die Beratungsdateien.
- Wenn kein SMTP-Server eingetragen ist, erfolgt der Mailversand über MAPI
- Bei der Ausgabe von Wahlbögen (Druckausgabe: Beratungsbögen mit erneuter /ohne erneute Prüfung) erscheint nun der ein Dialog.
- Wenn „als Serienmail versenden“ gewählt wird, muss ein Verzeichnis angegeben werden, in das die PDF-Wahlbögen zwischengespeichert werden.
- Unter Datenbearbeitung Schüler können nun nachträglich die Schild-IDs eingetragen und geändert werden.
- Es gab eine exotische Sonderkonstellationen von Sprachenbeginn und Sprachenfolge, bei welchen Fehlermeldungen nicht ausgelöst wurden.
- Wenn man Schüler gefiltert hatte und anschließend bei den gefilterten Schülern die Belegung geändert hatte, so konnte es zu Fehlern kommen, wenn die geänderte Belegung die eigentliche Filterbedingung aufhob.

<a id="Version_2.1.4.5"></a>

## Version 2.1.4.5

- Bei manchen Belegungen der Fächer Geschichte und Sozialwissenschaften in Zusammenhang mit Zusatzkursen kam es zu einer falschen Fehlermeldung. Dies ist nun behoben.
- Bei einer Belegungsprüfung der fortgeführten Fremdsprachen wurde anstatt des ASD-Kürzels das schulinterne Kürzel ausgewertet. Dies führte immer dann zu Problemen, wenn das schulinterne Kürzel nicht mit dem ASD-Buchstaben des Sprachenfaches begann. Dies ist nun behoben.
- Die Schaltfläche „Konflikte ermitteln“ hat nicht alle Fälle korrekt ermittelt. Dies ist nun behoben.

<a id="Version_2.1.4.0"></a>

## Version 2.1.4.0

- Wenn ein naturwissenschaftliches Fach als bilinguales Fach belegt wurde, funktionierte die Schwerpunktprüfung nicht korrekt. Nun behoben.
- Bei einem Wechsel von einem bilingualen Zweig in den Regelzweig konnte das Fach nicht als Abiturfach angewählt werden, da eine durchgehende Belegung abgeprüft wurde. Nun wird das Abiturfeld freigegeben, sobald eine Kurswahl in Q2.2 getätigt wird. Damit können nun auch in solchen Fällen Abiturfächer gewählt werden.
- Das Fach Islamische Religionslehre steht nun in neuen LuPO-Vorlagedateien zur Verfügung.
- In Verbindung mit nicht zulässigen Fächerkombinationen konnte in bestimmten Konstellationen die Kursart AT in Sport nicht gewählt werden. Nun behoben.
- Es gibt nun zwei Ebenen der Datensicherung innerhalb einer Lupo-Datei. Zum einen gibt es einen Basissicherung, welche die Original-(Schild)-Daten enthält, sofern welche existieren und mit dem Initialexport an die Lupo-Datei übergeben wurden. Mit der Basissicherung kann man immer wieder den ursprünglichen Zustand nach einem Initialexport/ import herstellen. Diese Basissicherung kann nicht überschrieben werden.
- Zusätzlich kann man eine Belegung /Noten zwischensichern und die Sicherung wieder abrufen. Die Sicherung und das Zurückspielen von Belegungen und Noten erfolgt auf den Reitern „Laufbahnplanung“ und „Abiturberechnung“ getrennt.
- Die Anzeige, ob Basisdaten aus Schild vorliegen, wurde ausdifferenziert. Es gibt nun quadratische und dreieckige Markierungen auf dem Belegungs- und Abiturreiter. Die dreieckigen Marker weisen darauf hin, dass es eine Fachbelegung in der Basissicherung gibt. Ein quadratischer Marker weist darauf hin, dass es zusätzlich eine Note in der Basissicherung gibt.
- Bei den drei Gruppenprozessen „Hochschreiben von…“ wurden nicht alle Fächer hochgeschrieben. Nun behoben.
- In der Schülerversion konnten gesperrte Zellen überschrieben werden, wenn die Funktion „Hochschreiben von… bis…“ verwendet wurde. Dies ist nun nicht mehr möglich.
- In den Fächern Geschichte und Sozialwissenschaften konnten Kurse ohne Fehlermeldung belegt werden, auch wenn das Folgekursprinzip nicht befolgt wurde. Nun kommt eine Fehlermeldung.
- Im erweiterten Filter kann nun wieder nach Klassen gefiltert werden.
- Die automatische Komprimierung führt immer dann zu Problemen, wenn die komprimierte Lupo-Datei im Explorer umbenannt wird. Die Ursache liegt darin, dass die komprimierte Lupo-Datei eine Container-Datei ist, welche die eigentliche Lupo-Datei beherbergt. Unterscheidet sich der Name der Containerdatei von dem Namen der Lupo-Datei, so scheitert das Öffnen der Datei. Um das Problem zu vermeiden, steht die Komprimierung einer lup-Lehrerdatei in eine Container-Datei nicht mehr zur Verfügung. Bei intensiver Arbeit mit der Lupo-Datenbank kann jedoch die Dateigröße beträchtlich wachsen, auch wenn eigentlich kaum Daten in der Datenbank enthalten sind. Aus diesem Grund gibt es nun einen Menüpunkt „Datei/Datei komprimieren“. Hierbei wird „heiße Luft“ aus der Datei entfernt, so dass die Dateigröße beträchtlich verringert werden kann. Bei diesem Prozess wird die eigentliche Datei jedoch nicht in eine Container-Datei umgewandelt, sondern nur bereinigt.
- Schülerdateien können hingegen nach wie vor komprimiert erzeugt und versendet werden.
- Es ist nun ein E-Mail-Versand der Schülerdateien direkt aus Lupo heraus ohne externes E-Mail-Programm möglich. Hierzu müssen in den Grundeinstellungen Angaben zum SMTP-Server hinterlegt werden. Fehlen diese Angaben, wird nach wie vor versucht, ein externes E-Mail-Programm zu starten. (Hinweis: Eine E-Mail-App wie z.B. Windows Mail reicht hierzu leider nicht).
- Unter Datenbearbeitung/Beratungslehrer können darüber hinaus differenzierte E-Mail-Adressen, SMTP-Benutzernamen und Passwörter hinterlegt werden, so dass ein individueller Versand vom/zum Beratungslehrer möglich ist. Voraussetzung ist, dass die E-Mail-Adressen auf den gleichen SMTP-Server zugreifen, der in den Grundeinstellungen hinterlegt ist. Die Kennwörter werden in diese Menüfenster über das Kontextmenü geändert.
- Diese neue Funktionalität macht die Auslieferung zweier zusätzlicher Dateien notwendig.
- Beim Versand zu Adressen von Google trat ein Fehler aufgrund einer vorangestellten „SMTP“ Zeichenkette auf. Diese wurde nun gelöscht, in der Hoffnung, dass damit das Problem behoben ist und andere Provider trotzdem beliefert werden können. Bei Verwendung des internen E-Mail-Versandes sollte das Problem ohnehin nicht auftreten.

<a id="Version_2.1.2.6"></a>

## Version 2.1.2.6

- Es wurden noch einige kleinere Fehler in den Algorithmen behoben.

<a id="Version_2.1.2.1"></a>

## Version 2.1.2.1

- Projektkurse können nun wahlweise zwei- oder dreistündig angelegt werden.
- Vokalpraktische Kurse und instrumentalpraktische Kurse erhalten nun getrennte ASD-Kürzel VO und IN.
- Neue Prüfung von neu einsetzenden Fremdsprachen, die nun in Q2.2 mündlich belegt werden müssen, sofern sie nicht drittes Abiturfach sind.
- Die neue Version unterstützt nur noch die APO-GOSt (B). Ältere LuPO-Dateien nach APO-GOSt (A) und (C) sollten nicht mit dieser Version geöffnet werden.
- Die Religionsprüfung und die Markierung von Religionskursen wurden an den aktuellen Stand angepasst.
- Die Markierung von Geschichts- und Sozialwissenschaftskursen wurde an den aktuellen Stand angepasst.
- Projektkurse sind nun zum Halbjahr abwählbar.
- Abgewählte Projektkurse werden bei der Kurszählung nicht berücksichtigt.
- Stunden von Projektkursen, die als besondere Lernleistung eingebracht werden, werden nun bei den Wochenstundensummen berücksichtigt.
- Bei Sportkursen kann nun ein AT (Attest) als Kursart eingetragen werden, wenn das Häkchen „Sportbefreit“ markiert wurde.
- Bei der Belegprüfung von Sport kann damit die lückenlose Belegung geprüft werden.
- Der Markieralgorithmus berücksichtigt nun auch Sportkurse mit ASD-Kürzel S4 und S3.
- In manchen Sonderfällen hat LuPO neu einsetzende Fremdsprachen nicht sicher erkannt. Nun behoben.
- In manchen Sonderfällen hat LuPO die Belegung einer zweiten Fremdsprache nicht korrekt geprüft. Nun behoben.
- Neue Fehlermeldung, wenn eine neu einsetzende Fremdsprache als Leistungskurs gewählt wird.
- Die Prüfungen zum naturwissenschaftlichen Schwerpunkt bzw. zum Sprachenschwerpunkt wurden ausgeschärft.
- Die Prüfungen zum bilingualen Bildungsgang wurden ausgeschärft.
- Im Beratungsbogen erscheint nun wieder der Schulkopf.
- Der Import von DAT-Dateien wurde optimiert.
- Der erweiterte Filter „Laufbahnfehler vorhanden“ berücksichtigt nun keine Bemerkungen mehr.
- Der Gruppenprozess Belegung sichern / zurückspielen funktionierte nicht richtig. Nun behoben.
- Beim „erweiterten Filter“ gibt es nun bei den Fächern die Möglichkeit, eine ODER- bzw. UND-Bedingung zu wählen.
- Es gibt einen neuen Gruppenprozess "Laufbahnprüfung durchführen".
- Die automatische und manuelle Auswahl der eingeschalteten Prüf-Algorithmen ist nun besser nachvollziehbar.

<a id="Version_2.0.3.10"></a>

## Version 2.0.3.10

- Bei der Ausgabe des Beratungsbogens wurden Bemerkungen und Angaben zu evtl. noch vorhandenen Beratungsfehlern und nicht berücksichtigt, nun korrigiert.
- Wenn bei einem Projektkurs das Leitfach „Religion“ (insbesondere ER) eingetragen war, wurde ein Belegungsfehler ausgegeben, nun korrigiert.
- In der Schülerversion konnte der Beratungsbogen nicht gedruckt werden, nun korrigiert.

<a id="Version_2.0.3.9"></a>

## Version 2.0.3.9

- Die Anordnung der Schaltflächen wurde für ein übersichtlicheres Layout und eine schnellere Bedienung verändert.
- Das Menü wurde in Anlehnung an Schild angepasst.
- Es gibt im Menüpunkt "Auswahl" erweiterte Möglichkeiten, auf Schülergruppen zu filtern.
- Es wurden Möglichkeiten hinzugefügt, Daten an Excel zu übergeben.
- Die gruppenweise Änderung von Schülerdaten ist nun leichter über eine Optionsschaltfläche möglich.
- Auf dem Abiturreiter wurden Fremdsprachen vereinzelt fehlerhaft markiert. Hier wurde der Algorithmus korrigiert. Auch die Berücksichtigung bilingualer Fächer wurde optimiert.
- Auf dem Abiturreiter wurde im Bereich der Fremdsprachen bei fehlerhafter manueller Markierung keine Fehlermeldung ausgegeben. Dies wurde korrigiert.
- HINWEIS: Die Markierung von Religionslehre/Philosophie entspricht noch nicht dem aktuellen Stand, da es von Seiten des MSW kurzfristig abermals zu einer Änderung kommen wird und zeitnahe Umprogrammierarbeiten anstehen werden.
- Beim Import der Sprachenfolge kam es vereinzelt zu Problemen. Dies wurde behoben.

<a id="Version_2.0.2.18"></a>

## Version 2.0.2.18

- Einige Fehler bei WBKs wurden behoben.

<a id="Version_2.0.2.15"></a>

## Version 2.0.2.15

- Einige Fehler im Zusammenhang mit neu einsetzenden Fremdsprachen wurden behoben.

<a id="Version_2.0.2.14"></a>

## Version 2.0.2.14

- Bei der Erzeugung von Schülerdateien stehen jetzt zusätzliche Optionen zur Einschränkung von Änderungen zur Verfügung.
- Wahlen in ausgegrauten Feldern können nur noch in der Lehrerversion gelöscht werden.
- Bei der Auswertung nach Fach wurden keine LKs angezeigt, nun behoben.
- WBKs: Es wurden zwei Probleme bei den Sprachenfolgen behoben.

<a id="Version_2.0.2.12"></a>

## Version 2.0.2.12

- Beim Export im Schnittstellenformat kann jetzt auch eine UTF8-Kodierung gewählt werden.

<a id="Version_2.0.2.11"></a>

## Version 2.0.2.11

- Korrektur eines Fehlers bei der Religionsprüfung.

<a id="Version_2.0.2.9"></a>

## Version 2.0.2.9

- Korrektur eines Fehlers bei der Belegung von L8.

<a id="Version_2.0.2.8"></a>

## Version 2.0.2.8

- Rückkehr zur "alten" Philosophieprüfung bei Schülern ohne Religion. Wenn Philosophie und eine weitere Gesellschaftswissenschaft Abiturfächer sind. so muss kein weiteres Ersatzfach für Religionslehre belegt werden.
- Nach neuer KMK-Vereinbarung wird nun bei der Berechnung der Einzelergebnisse bei einer mündlichen Prüfung im ersten bis dritten Fach nicht mehr abgerundet, sondern gerundet.
- Neue Prüfung der musischen Ersatzfächer. Es darf maximal ein musisches Ersatzfach belegt werden. Es dürfen maximal zwei aufeinanderfolgende Kurse des gewählten musischen Ersatzfaches belegt werden.
- Neue Prüfung auf inhaltsgleiche Fächer.
- Verbesserte Kontrolle des Folgekursprinzips.
- Das Löschen von Kursen in ausgegrauten Feldern ist nun möglich.
- In manchen Fällen wurden neueinsetzenden Fremdsprachen fehlerhaft erkannt und behandelt. Bei dem Import von Daten des Halbjahres Q2.2 und der Kontrolle der Belegung in Q2.2 kam es dadurch zu Fehlern. Dieser Fehler wurde behoben.
- Die Sprachenfolge wird nur noch bei einem Initialimport eingelesen.
- Bei einem Import von Schülerdaten ist der Import von Sprachenfolgen nun optional.
- Schülervornamen dürfen nun maximal 50 Zeichen anstatt 30 Zeichen lang sein.
- Kleinerer Fehler beim Datenimport und bei der Reportausgabe wurden behoben
- Kleinere funktionale Verbesserungen

<a id="Version_2.0.1.45"></a>

## Version 2.0.1.45

- Der Prüfungsalgorithmus für die APO-WBK ist aus dem Beta-Status.
- Beim Import aus Textdateien wurde die neu einsetzende Fremdsprache im letzten Abschnitt der Qualifikationsphase auf GKM gesetzt, dieser Fehler wurde behoben.
- Abitur an Weiterbildungskollegs: Defizitüberschreitung wurde in manchen Fällen nicht bemängelt, nun korrigiert.

<a id="Version_2.0.1.43"></a>

## Version 2.0.1.43

- Der Prüfungsalgorithmus für die APO-GOST ist aus dem Beta-Status.
- In der Version 2.0 wird in der Lehrerversion bei eingeschalteter Prüfung der Gesamtlaufbahn nun ein weiterer Reiter „Abiturberechnung“ eingeblendet. Hier können Noten zur prognostischen Beratung einge"geben werden, wobei Lupo die Berechnungen der Gesamtqualifikation und der Abiturergebnisse vornimmt. Dieser Vorschlag kann dann als Grundlage für ein Beratungsgespräch gesehen werden.
- Vorhandene Laufbahnen und Noten können aus Schild-NRW importiert werden. Solche importierten Noten werden mit einem kleinen Viereck im Raster gekennzeichnet.

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1373) · [Lupo:Versionsgeschichte – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Lupo%3AVersionsgeschichte&oldid=6009)
