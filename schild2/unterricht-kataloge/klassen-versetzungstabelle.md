---
title: "Klassen und Versetzungstabelle"
---

<a id="klassen-versetzungstabelle"></a>

# Klassen und Versetzungstabelle

In der Klassen-/Versetzungstabelle werden alle Klassen, die in Schild-NRW Schülergruppen aufnehmen sollen, angelegt. Wie in allen Katalogen gibt es auch hier eine Benutzerdefinierte Sortierung und ein Merkmal für die Sichtbarkeit, damit Klassen, die zwar noch Schüler (Abgänger) enthalten, aber gegebenenfalls nicht mehr benötigt werden, ausgeblendet werden können.

Hinter dem Karteireiter **Details** verbergen sich dann alle Einstellungen, die zu jeder Klasse vorgenommen werden können.

:::danger
Bei Grundschulen wurde die Darstellung von Statistikjahrgang auf Jahrgang und Parallelität angepasst. Bitte entnehmen Sie weitere Beispiel diesem Artikel: **[Tabelle der Jahrgänge in Grundschulen](/schild2/unterricht-kataloge/jg-tabelle-gs "JG-Tabelle-GS")**.
:::

![Klassen-Versetzungstabelle](/bilder/schild2/unterricht-kataloge/klassen-versetzungstabelle.jpg)

**Schul-Interne Bezeichnung**

Das interne Klassenkürzel muss eindeutig sein und kann beliebig vergeben werden.

**Statistik-Bezeichnung**

Auch die Statistikbezeichnung muss eindeutig sein. Diese kann von der Internen Bezeichnung abweichen und ist für den Export nach ASDPC32 gedacht. Beim Import in ASDPC32 werden dabei die ersten beiden Stellen der Klassenbezeichnung als Jahrgangsangabe interpretiert. Der dritte Buchstabe dient zur Erstellung der Parallelität. Es ist also zu empfehlen, die Statistikbezeichnung nach dem Muster zum Beispiel 01A zu vergeben, damit in der KLD der Statistik diese Klasse direkt mit dem Jahrgang 1E und der Parallelität A angelegt wird.

**Jahrgang**

Geben Sie hier den Jahrgang der Klasse oder den Jahrgang, der in der Klasse am häufigsten vorkommt, ein.

**zusätzliche Beschreibung**

Hier kann ein beliebiger Text eingetragen werden, der zum Beispiel auf Reports genutzt werden kann.

**Teilstandort**

Besitzt die Schule mehrere Standorte, so werden diese unter [Schuldaten einrichten](/einstieg/erste-schritte/schule-bearbeiten) mit aufsteigenden Buchstaben angelegt. Hier sollte der Teilstandort eingegeben werden, an dem die Klasse hauptsächlich unterrichtet wird. Der Teilstandort wird an die KLD mit der Sim.txt übermittelt.

**Sichtbar**

Regelt die Sichtbarkeit der Klasse bei der Arbeit mit Schild-NRW.

**Noteneingabe gesperrt**

Durch diesen Haken kann die Noteneingabe für eine Klasse komplett gesperrt werden. Ist der Haken gesetzt, kann kein Berechtigter Noten in den Leistungsdaten der Schüler in dieser Klasse verändern. Auch der Import der Noten aus dem Notenmodul wird dann nicht angenommen. (Der Haken "Noteneingabe gesperrt" unter [Schuldaten einrichten](/einstieg/erste-schritte/schule-bearbeiten) bewirkt das Gleiche nur für alle Klassen auf einmal.)

:::danger
**Wichtig:**

Die folgenden Einträge werden von Schild-NRW genutzt, um bei der Versetzung diese Angaben in den neuen Lernabschnitt (unter akt. Halbjahr/Abschnitt) einzutragen!
:::

**Folge-Klasse**

Tragen Sie hier eine Folgeklasse ein, wenn bei der Versetzung alle Schüler in diese versetzt werden sollen. Dabei wählt Schild-NRW dann auch den Jahrgang der Folgeklasse für die Versetzung aus. Ist keine Folgeklasse eingetragen, so verbleiben die Schüler in der Klasse bei der Versetzung. Schild-NRW versucht in diesem Fall den Folgejahrgang aus der Tabelle [Statistikjahrgänge einrichten](/schild2/unterricht-kataloge/statistik-jahrgaenge) zu bestimmen, wenn hier das "+"-Zeichen bei *Chronologisch* gesetzt ist. Im letzten Jahrgang der Schule bleiben die Folgeklassen-Einträge leer.

**Vorgänger-Klasse**

Hier sollte, wenn möglich die Vorgängerklasse eingetragen werden. Dies ist zum Beispiel wichtig bei der Blockungsplanung in Kurs42, damit bei der Planung für das Folgeschuljahr per Programm entschieden werden kann, welche Klasse im Schuljahr davor relevant war.

**Klassenlehrer und stellv. Klassenlehrer**

Tragen Sie hier die Klassenlehrer ein. Bitte stören Sie sich nicht an der Bezeichnung stellv. Klassenlehrer, wenn Sie an Ihrer Schule Teams haben. Dies kann auf Formularen trotzdem korrekt dargestellt werden. Die Klassenlehrer können nach einer Änderung mit dem Gruppenprozesse [Klassenlehrer aktualisieren](/schild2/gruppenprozesse/klassenlehrer-aktualisieren) bei den Schülern eingetragen werden.

**Klassenart**

Dies ist die Klassenart, die bei der Statistik an ASDPC32 in die KLD übermittelt werden soll. Bitte informieren Sie sich in den Schlüsselverzeichnissen von IT.NRW, was dort eingetragen werden muss.

**Schulgliederung**

Hier wird der Bildungsgang eingetragen, in dem sich die Schüler der Klasse befinden. In Berufkollegs ist das die Anlage, bei vielen weiterführenden Schulen ist das einfach der Eintrag "\*\*\* Standard für diese Schulform". In neu gegründeten Schulen können hier auber auch unterschiedliche Einträge stehen, zum Beispiel "R7 Realschulzweig auslaufend" oder Ähnliches.

**Prüfungsordnung** Hier kann die Prüfungsordnung der Schüler in der Klasse eingetragen werden.

**Organisationsform** Dieser Eintrag wird auch an die Statistik übermittelt. Bitte beachten Sie, dass die Organisationsform "Teilnahme am offenen Ganztag" bei den Schülern individuell eingetragen werden muss, da unter Umständen nicht alle Schüler der Klasse dort teilnehmen.

:::tip
**Aktuelle Angaben in Schülerdaten übernehmen**

Diese Schaltfläche kann dazu genutzt werden, die Angaben der Klasse auf die zugehörigen Schüler zu übertragen. Dies kann auch für zurückliegende Abschnitte geschehen. Dieser Menüpunkt ist bei Datenimporten aus anderen Schulverwaltungsprogrammen sehr hilfreich!
:::

[Versetzung jahrgangsübergreifender Klassen](/schild2/versetzung/versetzungstabelle-bei-jahrgangsuebergreifenden-klassen)

------------------------------------------------------------------------

---

Quelle: [Klassen-/Versetzungstabelle – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Klassen-%2FVersetzungstabelle&oldid=5741)
