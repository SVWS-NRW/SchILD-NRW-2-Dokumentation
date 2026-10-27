---
title: "Hochschreibungsalgorithmus"
wiki_title: "Hochschreibungsalgorithmus"
wiki_page_id: 622
wiki_revision: 2414
---

# Hochschreibungsalgorithmus

Zunächst muss unterschieden werden, wie die Klassen versetzt werden. Die Auswahl des "Modells" richtet sich dabei nach der Vorgabe der Schule.

**Verbleib-Modell**: Hierbei handelt es sich um ein Modell, bei der die Schüler immer in der gleichen Klasse bleiben, d.h. nach einem Schuljahreswechsel sind sie weiterhin in der gleichen Klasse, nur mit einem anderen Jahrgang. Diese Modell kommt z.B. an Montessori-Schulen und oft auch an BKs vor, die früher mit IBIS gearbeitet haben (diese BKs benutzen dann oft im Klassennamen das jeweilige Jahr, in dem die Schüler in die Klasse eingetreten sind, was dann aber mit der Zeit zu einer sehr umfangreichen Klassenliste führt). Bei diesem Modell ist bei einer Klasse als Folgeklasse sie selbst eingetragen.

**Wechsel-Modell**: Bei diesem Modell wechseln die Schüler (sofern sie versetzt werden) in eine andere (höhere) Klasse, dieses Modell ist der Standard bei allen Sek-I- und Sek-II-Schulen im allgemeinbildenden Bereich (aber auch bei vielen BKs, die schon länger mit SchILD arbeiten).

Weiterhin wird im Folgenden unterschieden, ob die Schule das "Folgejahrgangs-Modell" verwendet. Dies bedeutet, dass in der Jahrgangstabelle jedem Jahrgang (außer den Abschlussjahrgängen) ein Folgejahrgang zugewiesen wird. Wenn das Folgejahrgangs-Modell verwendet wird, muss es konsequent eingerichtet werden, d.h. allen Jahrgängen (außer den Abschlussjahrgängen) muss dann zwingend ein Folgejahrgang zugeordnet werden.

Wichtig: Wenn bei mindestens einem Jahrgang ein Folgejahrgang ermittelt wird, benutzt das Programm grundsätzlich das Folgejahrgangs-Modell.

Im Folgenden wird oft die Bezeichnung "im aktuellen Halbjahr" o.ä. benutzt. Bei einem Schuljahreswechsel "mit visueller Kontrolle" ist das sinngemäß zu ersetzen durch "der aktuell vom Benutzer gewählte Eintrag".

Beispiel: Wenn der Benutzer interaktiv eine andere Folgeklasse wählt als im akt. Halbjahr eingetragen, so ist dieser aktualisierte Wert gemeint.

Hauptkriterium für den Schuljahreswechsel ist der Eintrag bei "Versetzungsvermerk"

**Versetzungvermerk=Abschluss**

Beim Schüler wird der Status auf "Abschluss" gesetzt, ein evtl. Eintrag einer Folgeklasse hat keinen Einfluss.

**Versetzungsvermerk=Versetzt**

Hier muss zwischen dem verwendeten Klassen-Modell unterschieden werden

<a id="Wechsel-Modell"></a>

## Wechsel-Modell

Es wird zuerst beim aktuellen Lernabschnittsdatensatz geprüft, ob eine Folgeklasse eingetragen ist. Wenn nicht (kommt eigentlich nur bei Schulen vor, die von IBIS übernommen wurden, spätestens im nächsten Schuljahr sollte im akt. Abschnitt eine Folgeklasse vorhanden sein), wird in der Klassentabelle nachgeschaut, ob dort eine Folgeklasse eingetragen ist.

Wichtig: Wenn auf diesem Weg keine Folgeklasse gefunden wird, geht das Programm davon aus, dass der Eintrag "Versetzt" falsch ist, und ändert diesen auf "Abschluss".

Falls das Folgejahrgangs-Modell nicht verwendet wird, ermittelt der Algorithmus den Folgejahrgang aus dem Jahrgang, der bei der Folgeklasse eingetragen ist.

Wenn dagegen das Folgejahrgangs-Modell verwendet wird, wird in der Jahrgangstabelle der Folgejahrgang des aktuellen Jahrganges ermittelt.

Wichtig: Wenn kein Folgejahrgang ermittelt werden kann, geht das Programm wiederum davon aus, dass der Eintrag "Versetzt" falsch ist, und ändert diesen auf "Abschluss".

Wenn kein Folgejahrgang gefunden wird (weil der Schüler eigentlich schon im Abschlussjahrgang ist), aber eine Folgeklasse eingetragen ist (z.B. die gleiche wie bisher), dann greift die o.a. Regel: Wenn kein Folgejahrgang ermittelt werden kann, geht das Programm wiederum davon aus, dass der Eintrag "Versetzt" falsch ist, und ändert diesen auf "Abschluss" nicht, vielmehr behält der Schüler den aktuellen Jahrgang, der Versetzungsvermerk wird nicht geändert.

<a id="Verbleib-Modell"></a>

## Verbleib-Modell

Bei diesem Modell wird geprüft, ob eine Folgeklasse im akt. Abschnitt eingetragen ist (die dann i.d.R. die gleiche Klasse ist). Wenn dort kein Eintrag vorhanden ist, wird eine Folgeklasse aus der Klassentabelle genommen.

Wichtig: Eine Korrektur eines falsch gesetzten Versetzungsvermerkes auf "Abschluss" ist hier nicht möglich, da auf diesem Weg immer eine Folgeklasse gefunden wird.

Der Folgejahrgang kann nicht aus der Folgeklasse ermittelt werden (in der Klassentabelle steht dann i.d.R. der Jahrgang drin, mit dem ein Schüler in die Klasse eintritt), er wird wie folgt ermittelt:

Wenn das Folgejahrgangsmodell verwendet wird, wird in der Jahrgangstabelle der Folgejahrgang zum akt. Jahrgang gesucht.

Wenn das Folgejahrgangsmodell nicht verwendet wird, prüft das Programm in der Jahrgangstabelle, ob der auf den aktuellen Jahrgang des Schülers folgende Jahrgang die gleiche Gliederung hat wie die des Schülers. Nur wenn die Gliederungen gleich sind, wird dieser Jahrgang als Folgejahrgang akzeptiert. Dies setzt voraus, dass die Jahrgangstabelle korrekt sortiert ist (innerhalb einer Gliederung muss eine aufsteigende Sortierung vorhanden sein)!

Wichtig: Wenn so kein Folgejahrgang gefunden wird, geht das Programm davon aus, dass der Eintrag "Versetzt" falsch ist, und ändert diesen auf "Abschluss".

------------------------------------------------------------------------

**Versetzugsvermerk=Nicht versetzt** (oder analoge Einträge wie "Nicht versetzt, mit Nachprüfung")

Der Jahrgang des Schülers bleibt gleich.

Der Schüler bleibt in der aktuellen Klasse, falls nicht folgende Bedingung erfüllt ist:

Im akt. Halbjahr ist als Folgeklasse eine andere Klasse als die aktuelle Klasse eingetragen. Wenn diese Folgeklasse den gleichen Jahrgang hat wie die aktuelle, wird diese Folgeklasse verwendet, ansonsten wird als Folgeklasse die aktuelle Klasse genommen.

------------------------------------------------------------------------

---

Quelle: [Hochschreibungsalgorithmus – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Hochschreibungsalgorithmus&oldid=2414) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Hochschreibungsalgorithmus&action=history)
