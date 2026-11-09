---
title: "Kurse in S1Plan einrichten und zuweisen"
---

# Kurse in S1Plan einrichten und zuweisen

Das Einrichten von Kursen kann auf zwei Wegen erfolgen. Falls in der angebundenen SchILD-NRW 2-Datenbank schon Kurse (mit oder ohne Schülerverteilung) vorhanden sind, können diese in S1Plan eingelesen werden. Falls noch keine Kurse in der SchILD-NRW 2-Datenbank vorliegen, können in S1Plan alle Kurse eingerichtet und hier auch eine Schülerverteilung vorgenommen werden. Im Folgenden wird davon ausgegangen, dass in der SchILD-NRW 2-Datenbank noch keine Kurse eingerichtet wurden (Fall A, siehe oben Seite 3).

## NEUEINRICHTUNG VON KURSEN IN S1PLAN (Beispiel: GY)

Am Beispiel einer 6. Jahrgangsstufe sollen folgende Kurse in S1Plan neu eingerichtet werden: Sprachenkurse L6-1, L6-2, F6-1 und F6-2 als WPI-Kurse Sport-AGs Fußball (1 Kurs), Handball (1 Kurs), Basketball (2 Kurse) und Volleyball (1 Kurs) mit Erst-, Zweit- und Drittwunsch der Schüler. Religionskurse/praktische Philosophie ER-1, ER-2 und PPL-1 als PUT-Kurse. Falls nach der Erstinstallation noch kein Kursprofil erstellt wurde, kann dies unter

![S1P-013-Kursprofil anlegen](/bilder/tools/s1plan/s1p-013-kursprofil-anlegen.jpg)

erfolgen.

## SPRACHENKURSE EINRICHTEN(KURSART WPI)

Als Kursprofil wird zunächst

![S1P-014-Kursprofil JG6](/bilder/tools/s1plan/s1p-014-kursprofil-jg6.jpg)

gewählt oder neu erzeugt.

Zunächst müssen die Kurse über

![S1P-015-Kurse anlegen](/bilder/tools/s1plan/s1p-015-kurse-anlegen.jpg)

selber eingerichtet werden.

Folgende Eingabeansicht ist (zumindest teilweise) zu füllen:

![S1P-016-Kursdateneingabe](/bilder/tools/s1plan/s1p-016-kursdateneingabe.jpg)

Die hier nicht eingetragenen Felder sind (zunächst) nicht zwingend zu füllen, insbesondere dann nicht, wenn die Lehrerzuordnung (Kursleitung und gegebenenfalls Zusatzkraft) (noch) nicht bekannt sind. Tag, Zeit und Ort sind bei WPI-Kursen verzichtbar, da diese Daten üblicherweise aus dem Stundenplan hervorgehen. Die Fortschreibungsart „Komplett“ ist hier sinnvoll, weil die Schüler den Kurs von Jahrgangsstufe 06 bis Jahrgangsstufe 09 besuchen. Nach Eintrag weiterer Kurse (durch Klick auf „+“) ergibt die Kursübersicht:

![S1P-017-Kursübersicht](/bilder/tools/s1plan/s1p-017-kursubersicht.jpg)

:::info
Die Nummer des Kurses (linke Spalte) ist fortlaufend und hängt davon ab, wie viele Kurse bisher eingerichtet wurden.
:::

## SCHÜLERZUWEISUNG ZU DEN KURSEN

Zunächst sollte der Schildabgleich über den Menüpunkt

![S1P-016-Stammdaten](/bilder/tools/s1plan/s1p-016-stammdaten.jpg)

vorgenommen werden. Dadurch werden die betreffenden Schüler aus SchILD-NRW 2 nach S1Plan geladen. Über den Menüpunkt

![S1P-019-Kurszuweisung-alle](/bilder/tools/s1plan/s1p-019-kurszuweisung-alle.jpg)

erreicht man das Fenster mit der Schülerliste der ausgewählten Jahrgänge:

![S1P-020-Kurszuweisung-alle](/bilder/tools/s1plan/s1p-020-kurszuweisung-alle.jpg)

:::info
Hier wurde „Schnellzuweisung“ markiert. Damit reicht zur Zuweisung ein Einfachklick in die Matrix. „Einzelzuweisung“ wurde gewählt, weil in diesem Bereich WPI jeder Schüler nur genau einen Kurs belegen kann.
:::

Mit Klick auf „Speichern“ wird das Fenster geschlossen.

Es erscheint nun wieder der Hauptbildschirm mit der Kurs- beziehungsweise Schülerübersicht:

![S1P-022-Übersichtsseite](/bilder/tools/s1plan/s1p-022-ubersichtsseite.jpg)

Hier gibt es (auch) die Möglichkeit, Zuweisungen einzelner Schüler zu ändern. Hierzu klicken Sie auf die Spalte „Zuw.“. Im rechten Fenster. Nun können Sie auf den Auswahlknopf klicken oder einen Buchstaben oder eine Zahl eingeben. Es werden dann die Kurse angezeigt, die aufgrund der Eingabe in Frage kommen. Es gibt jetzt noch die Möglichkeit, die Kurse zu fixieren. Dies geschieht sinnvollerweise über den entsprechenden Gruppenprozess „Kurswahlen fixieren“.

## EXPORT DER KURSWAHLEN NACH SchILD-NRW 2

Über den Menüpunkt

![S1P-021-Export nach SchILD-NRW 2](/bilder/tools/s1plan/s1p-021-export-nach-schild.jpg)

können die Kurswahlen nach SchILD-NRW 2 exportiert werden.

Das folgende Fenster

![S1P-023-Export-Fenster](/bilder/tools/s1plan/s1p-023-export-fenster.jpg)

gliedert sich in 4 Teile: Oben links sind die in S1Plan angelegten Kurse, oben rechts die (schon) in SchILD-NRW 2 vorhandenen Kurse. Unten links sind die zu obigem markiertem Kurs zugeordneten Schüler, unten rechts eine Vorschau auf die später nach SchILD-NRW 2 exportierten Schüler. Bisher wurde noch kein Export vorgenommen, was daran zu erkennen ist, dass noch keine grünen Markierungen (siehe nächste Seite) bei Kursen und Schülern vorkommen.

Mit dem Export-Symbol ![S1P-024-Export-Knopf](/bilder/tools/s1plan/s1p-024-export-knopf.jpg) können alle Kurse incl. der Schülerbelegung nach SchILD-NRW 2 exportiert werden.

:::info
Dabei werden damit auch alle in diejenigen Kurse des gewählten Jahrgangs in der SchILD-NRW 2-Datenbank gelöscht, deren Kursart im verwendeten Kursprofil von S1Plan vorhanden sind! Es erscheint vor dem Export ein entsprechendes Hinweisfenster. Mit den beiden Doppelpfeilen in der Mitte kann der Export (ohne Löschung der bisherigen SchILD-NRW 2-Kurse) erfolgen.
:::

Nach dem Export (hier: alle Kurse und Löschung der bisherigen Kurse in SchILD-NRW 2) ergibt sich folgende Fensterdarstellung:

![S1P-025-Export-Fenster-2](/bilder/tools/s1plan/s1p-025-export-fenster-2.jpg)

Hier weisen die grünen Markierungen auf den erfolgten Export hin.

In der SchILD-NRW 2-Datenbank sieht es nach dem Export folgendermaßen aus:

![S1P-026-Kurse in SchILD-NRW 2](/bilder/tools/s1plan/s1p-026-kurse-in-schild.jpg)

Bei den Schülern erkennt man auf der Karteikarte „Akt. Halbjahr“ ebenfalls die Kurszuordnungen:

![S1P-027-Kurse_bei_Schüler_in_Schild](/bilder/tools/s1plan/s1p-027-kurse-bei-schuler-in-schild.jpg)

## ARBEITSGEMEINSCHAFTEN MIT WAHLMÖGLICHKEITEN

Im Folgenden werden für einen Jahrgang 07 als Sport-AGs Fußball (1 Kurs), Handball (1 Kurs), Basketball (2 Kurse) und Volleyball (1 Kurs) mit Erst-, Zweitund Drittwunsch der Schüler behandelt. Zunächst wird im Menüpunkt „Einrichtung“ das entsprechende Kursprofil erstellt, gespeichert und anschließend gewählt:

![S1P-028-Kursprofil](/bilder/tools/s1plan/s1p-028-kursprofil.jpg)

Da die Schüler Erst-, Zweit- und Drittwunsch äußern dürfen, muss im unteren Bereich der Haken bei „Wunschspalten“ gesetzt werden. Danach werden unter dem Menüpunkt „Einrichtung“ die Kurse selbst eingerichtet. Dabei ist unbedingt darauf zu achten, dass das zur Kursart zugewiesene Fach nicht SP, sondern SPAG heißt. Dieses Fach muss gegebenenfalls vorher in SchILD-NRW 2 bei den Unterrichtsfächern ergänzt werden. Falls dies nicht gemacht wird und nur das Fach SP zugeordnet wird, gibt es bei den Leistungsübersichten und Zeugnissen Probleme der Darstellung des Faches Sport beziehungsweise der Sport-AG.

![S1P-029-AG-Fach-fuer-SP](/bilder/tools/s1plan/s1p-029-ag-fach-fuer-sp.jpg)

## SCHÜLERZUWEISUNG ZU DEN ARBEITSGEMEINSCHAFTEN

Die Zuweisung zu Arbeitsgemeinschaften erfolgt hier klassenweise über

![S1P-030-klassenweise-Zuordnung](/bilder/tools/s1plan/s1p-030-klassenweise-zuordnung.jpg)

und Klassenauswahl

![S1P-031-Klassenauswahl](/bilder/tools/s1plan/s1p-031-klassenauswahl.jpg)

Im folgenden Fenster werden

![S1P-032-Matrix-Schülerwünsche](/bilder/tools/s1plan/s1p-032-matrix-schulerwunsche.jpg)

die Wünsche eingegeben. Hier kann ausschließlich mit der Tastatur gearbeitet werden (Eingabe des ersten und gegebenenfalls zweiten Buchstabens des Kurses und Weiterschaltung mit der TAB-Taste). Die Eingabe eines Wunsches reicht hier aus. Nach Eingabe aller Wünsche wird das Fenster über das Symbol „Speichern“ geschlossen.

Nach Eingabe aller Wünsche erhalten Sie folgende Übersichtsmatrix:

![S1P-033-Matrix-der-Wünsche](/bilder/tools/s1plan/s1p-033-matrix-der-wunsche.jpg)

Es wurde bisher noch keine Kurs-Zuweisung vorgenommen. Hier stellt sich das Problem, dass der Erstwunsch im Kurs „BB“ die Maximalzahl über- und im Kurs FB unterschreitet. Daher gibt es nun zwei Möglichkeiten:

1.  Einrichtung zweier Kurse BB-1 und BB-2 und Verteilung der Schüler auf

diese zwei Kurse. In diesem Fall würden alle Erstwünsche berücksichtigt werden können.

1.  Bei der Kurszuweisung werden einige Schüler von dem Kurs BB auf ihren

Erst-, Zweit- oder Drittwunsch verschoben.

Über

![S1P-034-Erstwunsch-zuweisen](/bilder/tools/s1plan/s1p-034-erstwunsch-zuweisen.jpg)

wird zunächst allen Schülern der Erstwunsch zugewiesen. Dieser Erstwusch wird dann in die Spalte Zuw. eingetragen:

![S1P-035-Erstwunsch-zugewiesen](/bilder/tools/s1plan/s1p-035-erstwunsch-zugewiesen.jpg)

Bei der Kursübersicht ergibt sich dann:

![S1P-036-Kursübersicht-Erstwunsch-zugewiesen](/bilder/tools/s1plan/s1p-036-kursubersicht-erstwunsch-zugewiesen.jpg)

Der Ausgleich (andere Zuordnung) kann natürlich per Hand erfolgen, aber auch als Optimierung automatisch:

Über

![S1P-037-Menüpunkt-Optimieren](/bilder/tools/s1plan/s1p-037-menupunkt-optimieren.jpg)

erhalten Sie das Doppelfenster

![S1P-038-Optimierungsfenster](/bilder/tools/s1plan/s1p-038-optimierungsfenster.jpg)

Durch Klick auf "OPTIMIEREN" ergibt sich nach dem Optimierungslauf folgende Verteilung:

![S1P-039-Optimierungsergebnis](/bilder/tools/s1plan/s1p-039-optimierungsergebnis.jpg)

Hier wurde vor dem Optimierungslauf zum Beispiel dem Schüler Biedermann der zunächst eingetragene Erstwunsch „VB“ zugewiesen. Nach der Optimierung wurde ihm sein Zweitwunsch „HB“ zugewiesen. Ein zugehöriges Protokoll kann im Browser eingesehen (und gespeichert) werden.

Durch Klick auf ![S1P-040-Optimierung-speichern](/bilder/tools/s1plan/s1p-040-optimierung-speichern.jpg)

Im Fenster der Kursübersicht und der Kurswahlen werden die Optimierungsergebnisse nun dargestellt.

Wie in Kapitel 5.1.2 auf Seite 13 können alle Kurse in die SchILD-NRW 2Datenbank übertragen werden.

:::info
Analog zu den AG-Wahlen können auch zum Beispiel die Wahlen zu Projekten bei einer Projektwoche mit Erst-, Zweit- und Drittwunsch behandelt werden.
:::

[Weiter zu Übernahme von Kursen aus SchILD-NRW 2](/hilfe/zusatzprogramme/s1plan-uebernahme-von-kursen-aus-schild)

## Zuweisungen und Export kontrollieren

Führen Sie vor der Schülerzuweisung den SchILD-NRW 2-Abgleich durch. Für eine Kursart, in der jede Person genau einen Kurs belegt, kann die **Einzelzuweisung** verwendet werden; bei aktivierter **Schnellzuweisung** genügt ein Klick in die Zuordnungsmatrix. Speichern Sie die Zuweisungen vor dem Export.

Bei Arbeitsgemeinschaften oder Projekten mit Erst-, Zweit- und Drittwunsch muss das Kursprofil die **Wunschspalten** enthalten. Eine Optimierung kann Personen auf einen anderen der erfassten Wünsche verschieben. Kontrollieren und speichern Sie deshalb das Ergebnis und das zugehörige Protokoll.

:::danger Export nach SchILD-NRW 2
Der vollständige Export kann die bisherigen SchILD-NRW 2-Kurse des gewählten Jahrgangs löschen, deren Kursarten zum verwendeten S1Plan-Kursprofil gehören. Kontrollieren Sie Kursprofil, Jahrgang und Bestätigungsdialog. Die im Handbuch beschriebenen Doppelpfeile erlauben daneben eine Übertragung ohne vorherige Löschung der vorhandenen SchILD-NRW 2-Kurse.
:::

Im Exportfenster stehen links die Kurse und Zuordnungen aus S1Plan, rechts die vorhandenen beziehungsweise vorgesehenen Daten in SchILD-NRW 2. Grüne Markierungen zeigen die erfolgte Übertragung an.

Quelle der Ergänzung: [S1Plan-Bedienungsanleitung, Druckstand 11.12.2018](/dateien/pdf/s1plan_anleitung.pdf), Kapitel 4, Seiten 13–26.

Quelle: [S1PLAN:Einrichtung von Kursen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=S1PLAN%3AEinrichtung+von+Kursen&oldid=4078)

## Sprachenkurse, Arbeitsgemeinschaften und Export

Die folgenden Arbeitsschritte beziehen sich auf [die Originalquelle, Seiten 13–26](/dateien/pdf/s1plan_anleitung.pdf#page=13).

### 4 Einrichtung von Kursen

Das Einrichten von Kursen kann auf zwei Wegen erfolgen.

Falls in der angebundenen SchILD-Datenbank schon Kurse (mit oder ohne Schülerver-

teilung) vorhanden sind, können diese in S1Plan eingelesen werden. Falls noch keine

Kurse in der SchILD-Datenbank vorliegen, können in S1Plan alle Kurse eingerichtet

und hier auch eine Schülerverteilung vorgenommen werden.

Im Folgenden wird davon ausgegangen, dass in der SchILD-Datenbank noch keine

Kurse eingerichtet wurden (Fall A 5 ).

### 4.1 NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

Am Beispiel einer 6. Jahrgangsstufe sollen folgende Kurse in S1Plan neu einge-

richtet werden:

Sprachenkurse L6-1, L6-2, F6-1 und F6-2 als WPI-Kurse

Sport-AGs Fußball (1 Kurs), Handball (1 Kurs), Basketball (2 Kurse) und

Volleyball (1 Kurs) mit Erst-, Zweit- und Drittwunsch der Schüler.

Religionskurse/praktische Philosophie ER-1, ER-2 und PPL-1 als PUT-Kur-

se.

Falls nach der Erstinstallation noch kein Kursprofil erstellt wurde, kann dies unter

![4.1 NeuEinrichtung von Kursen in S1Plan (Beispiel: GY) – Abbildung aus der Originalanleitung, Seite 13](/bilder/pdf-anleitungen/s1plan/seite-13-bild-02.png)

erfolgen.

### 4.1.1 Sprachenkurse einrichten (Kursart WPI)

Als Kursprofil wird zunächst

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.1 Sprachenkurse einrichten (Kursart WPI) – Abbildung aus der Originalanleitung, Seite 14](/bilder/pdf-anleitungen/s1plan/seite-14-bild-01.png)

gewählt oder neu erzeugt.

Zunächst müssen die Kurse über

![4.1.1 Sprachenkurse einrichten (Kursart WPI) – Abbildung aus der Originalanleitung, Seite 14](/bilder/pdf-anleitungen/s1plan/seite-14-bild-02.png)

selber eingerichtet werden.

Folgende Maske ist (zumindest teilweise) zu füllen:

![4.1.1 Sprachenkurse einrichten (Kursart WPI) – Abbildung aus der Originalanleitung, Seite 14](/bilder/pdf-anleitungen/s1plan/seite-14-bild-03.png)

Die hier nicht eingetragenen Felder sind (zunächst) nicht zwingend zu füllen, insbeson-

dere dann nicht, wenn die Lehrerzuordnung (Kursleitung und ggf. Zusatzkraft) (noch)

nicht bekannt sind. Tag, Zeit und Ort sind bei WPI-Kursen verzichtbar, da diese Daten

üblicherweise aus dem Stundenplan hervorgehen.

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

Die Fortschreibungsart „Komplett“ ist hier sinnvoll, weil die Schüler den Kurs von Jahr-

gangsstufe 06 bis Jahrgangsstufe 09 besuchen.

Nach Eintrag weiterer Kurse (durch Klick auf „+“) ergibt die Kursübersicht:

![4.1.1 Sprachenkurse einrichten (Kursart WPI) – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/s1plan/seite-15-bild-01.png)

Hinweis:

Die Nummer des Kurses (linke Spalte) ist fortlaufend und hängt davon ab,

wie viele Kurse bisher eingerichtet wurden.

### 4.1.1.1 Schülerzuweisung zu den Kursen

Zunächst sollte der SchILD-Abgleich über den Menüpunkt

![4.1.1.1 Schülerzuweisung zu den Kursen – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/s1plan/seite-15-bild-03.png)

vorgenommen werden. Dadurch werden die betreffenden Schüler aus SchILD-NRW

nach S1Plan geladen.

Über den Menüpunkt

![4.1.1.1 Schülerzuweisung zu den Kursen – Abbildung aus der Originalanleitung, Seite 15](/bilder/pdf-anleitungen/s1plan/seite-15-bild-04.png)

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

erreicht man das Fenster mit der Schülerliste der ausgewählten Jahrgänge:

![4.1.1.1 Schülerzuweisung zu den Kursen – Abbildung aus der Originalanleitung, Seite 16](/bilder/pdf-anleitungen/s1plan/seite-16-bild-01.png)

Hinweise:

Hier wurde „Schnellzuweisung“ markiert. Damit reicht zur Zuweisung ein Ein-

fachklick in die Matrix.

„Einzelzuweisung“ wurde gewählt, weil in diesem Bereich WPI jeder Schüler

nur genau einen Kurs belegen kann.

Mit Klick auf „Speichern“ wird das Fenster geschlossen.

Es erscheint nun wieder der Hauptbildschirm mit der Kurs- bzw. Schülerübersicht:

![4.1.1.1 Schülerzuweisung zu den Kursen – Abbildung aus der Originalanleitung, Seite 16](/bilder/pdf-anleitungen/s1plan/seite-16-bild-03.png)

Hier gibt es (auch) die Möglichkeit, Zuweisungen einzelner Schüler zu ändern. Hierzu

klickt man auf die Spalte „Zuw.“. Im rechten Fenster. Nun kann man auf den Auswahl-

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

knopf klicken oder einen Buchstaben oder eine Zahl eingeben. Es werden dann die

Kurse angezeigt, die aufgrund der Eingabe in Frage kommen.

Es gibt jetzt noch die Möglichkeit, die Kurse zu fixieren. Dies geschieht sinnvollerweise

über den entsprechenden Gruppenprozess „Kurswahlen fixieren“.

### 4.1.2 Export der Kurswahlen nach SchILD-NRW

Über den Menüpunkt

![4.1.2 Export der Kurswahlen nach SchILD-NRW – Abbildung aus der Originalanleitung, Seite 17](/bilder/pdf-anleitungen/s1plan/seite-17-bild-01.png)

können die Kurswahlen nach SchILD exportiert werden.

Das folgende Fenster

![4.1.2 Export der Kurswahlen nach SchILD-NRW – Abbildung aus der Originalanleitung, Seite 17](/bilder/pdf-anleitungen/s1plan/seite-17-bild-02.png)

gliedert sich in 4 Teile:

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

1. Oben links sind die in S1Plan angelegten Kurse,

2. oben rechts die (schon) in SchILD vorhandenen Kurse.

3. Unten links sind die zu obigem markiertem Kurs zugeordneten Schüler,

4. unten rechts eine Vorschau auf die später nach SchILD exportierten Schü-

ler.

Bisher wurde noch kein Export vorgenommen, was daran zu erkennen ist, dass noch

keine grünen Markierungen (siehe nächste Seite) bei Kursen und Schülern vorkom-

men.

Mit dem Export-Symbol

![4.1.2 Export der Kurswahlen nach SchILD-NRW – Abbildung aus der Originalanleitung, Seite 18](/bilder/pdf-anleitungen/s1plan/seite-18-bild-01.png)

können alle Kurse incl. der Schülerbelegung nach SchILD exportiert werden.

Hinweis:

Dabei werden damit auch alle diejenigen Kurse des gewählten Jahrgangs

in der SchILD-Datenbank gelöscht, deren Kursarten im verwendeten Kur-

sprofil von S1Plan vorhanden sind!

Es erscheint vor dem Export ein entsprechendes Hinweisfenster.

Mit den beiden Doppelpfeilen in der Mitte kann der Export (ohne Löschung

der bisherigen SchILD-Kurse) erfolgen.

Nach dem Export (hier: alle Kurse und Löschung der bisherigen Kurse in SchILD-NRW)

ergibt sich folgende Fensterdarstellung:

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.2 Export der Kurswahlen nach SchILD-NRW – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/s1plan/seite-19-bild-01.png)

Hier weisen die grünen Markierungen auf den erfolgten Export hin.

In der SchILD-Datenbank sieht es nach dem Export folgendermaßen aus:

![4.1.2 Export der Kurswahlen nach SchILD-NRW – Abbildung aus der Originalanleitung, Seite 19](/bilder/pdf-anleitungen/s1plan/seite-19-bild-02.png)

Bei den Schülern erkennt man auf der Karteikarte „Akt. Halbjahr“ ebenfalls die Kurszu-

ordnungen:

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.2 Export der Kurswahlen nach SchILD-NRW – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/s1plan/seite-20-bild-01.png)

### 4.1.3 Arbeitsgemeinschaften mit Wahlmöglichkeiten

Im Folgenden werden für einen Jahrgang 07 als Sport-AGs Fußball (1 Kurs), Handball

(1 Kurs), Basketball (2 Kurse) und Volleyball (1 Kurs) mit Erst-, Zweit- und Drittwunsch

der Schüler behandelt.

Zunächst wird im Menüpunkt „Einrichtung“ das entsprechende Kursprofil erstellt, ge-

speichert und anschließend gewählt:

![4.1.3 Arbeitsgemeinschaften mit Wahlmöglichkeiten – Abbildung aus der Originalanleitung, Seite 20](/bilder/pdf-anleitungen/s1plan/seite-20-bild-02.png)

Da die Schüler Erst-, Zweit- und Drittwunsch äußern dürfen, muss im unteren Bereich

der Haken bei „Wunschspalten“ gesetzt werden.

Danach werden unter dem Menüpunkt „Einrichtung“ die Kurse selbst eingerichtet. Da-

bei ist unbedingt darauf zu achten, dass das zur Kursart zugewiesene Fach nicht SP,

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

sondern SPAG heißt. Dieses Fach muss ggf. vorher in SchILD-NRW bei den Unter-

richtsfächern ergänzt werden. Falls dies nicht gemacht wird und nur das Fach SP zuge-

ordnet wird, gibt es bei den Leistungsübersichten und Zeugnissen Probleme der Dar-

stellung des Faches Sport bzw. der Sport-AG.

![4.1.3 Arbeitsgemeinschaften mit Wahlmöglichkeiten – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/s1plan/seite-21-bild-01.png)

### 4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften

Die Zuweisung zu Arbeitsgemeinschaften erfolgt hier klassenweise über

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/s1plan/seite-21-bild-02.png)

und Klassenauswahl

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/s1plan/seite-21-bild-03.png)

Im folgenden Fenster werden

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 21](/bilder/pdf-anleitungen/s1plan/seite-21-bild-04.png)

die Wünsche eingegeben. Hier kann ausschließlich mit der Tastatur gearbeitet werden

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

(Eingabe des ersten und ggf. zweiten Buchstabens des Kurses und Weiterschaltung

mit der TAB-Taste). Nach Eingabe aller Wünsche wird das Fenster über das Symbol

„Speichern“ geschlossen.

Nach Eingabe aller Wünsche erhält man folgende Übersichtsmatrix:

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 22](/bilder/pdf-anleitungen/s1plan/seite-22-bild-01.png)

Es wurde bisher noch keine Kurs-Zuweisung vorgenommen. Hier stellt sich das Pro-

blem, dass der Erstwunsch im Kurs „BB“ die Maximalzahl über- und im Kurs FB unter-

schreitet. Daher gibt es nun zwei Möglichkeiten:

1. Einrichtung zweier Kurse BB-1 und BB-2 und Verteilung der Schüler auf die-

se zwei Kurse. In diesem Fall würden alle Erstwünsche berücksichtigt wer-

den können.

2. Bei der Kurszuweisung werden einige Schüler von dem Kurs BB auf ihren

Erst-, Zweit- oder Drittwunsch verschoben.

Über

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 22](/bilder/pdf-anleitungen/s1plan/seite-22-bild-02.png)

wird zunächst allen Schülern der Erstwunsch zugewiesen.

Dieser Erstwusch wird dann in die Spalte „Zuw.“ eingetragen:

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 23](/bilder/pdf-anleitungen/s1plan/seite-23-bild-01.png)

Bei der Kursübersicht ergibt sich dann:

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 23](/bilder/pdf-anleitungen/s1plan/seite-23-bild-02.png)

Der Ausgleich (andere Zuordnung) kann natürlich per Hand erfolgen, aber auch als Op-

timierung automatisch:

Über

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 23](/bilder/pdf-anleitungen/s1plan/seite-23-bild-03.png)

erhält man das Doppelfenster

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 24](/bilder/pdf-anleitungen/s1plan/seite-24-bild-01.png)

Durch Klick auf

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 24](/bilder/pdf-anleitungen/s1plan/seite-24-bild-02.png)

ergibt sich nach dem Optimierungslauf folgende Verteilung:

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 25](/bilder/pdf-anleitungen/s1plan/seite-25-bild-01.png)

Hier wurde vor dem Optimierungslauf z.B. dem Schüler Biedermann der zunächst ein-

getragene Erstwunsch „VB“ zugewiesen. Nach der Optimierung wurde ihm sein Zweit-

wunsch „HB“ zugewiesen.

Ein zugehöriges Protokoll kann im Browser eingesehen (und gespeichert) werden.

Durch Klick auf

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 25](/bilder/pdf-anleitungen/s1plan/seite-25-bild-02.png)

wird das Optimierungsergebnis gespeichert.

Im Fenster der Kursübersicht und der Kurswahlen werden die Optimierungsergebnisse

dargestellt:

NeuEinrichtung von Kursen in S1Plan (Beispiel: GY)

![4.1.3.1 Schülerzuweisung zu den Arbeitsgemeinschaften – Abbildung aus der Originalanleitung, Seite 26](/bilder/pdf-anleitungen/s1plan/seite-26-bild-01.png)

Wie oben bereits beschriebe 17n, können alle Kurse in die SchILD-NRW-Datenbank

übertragen werden.

Hinweis:

Analog zu den AG-Wahlen können auch z.B. die Wahlen zu Projekten bei ei-

ner Projektwoche mit Erst-, Zweit- und Drittwunsch behandelt werden.
