---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: S1PLAN:Einrichtung von Kursen"
---

# S1PLAN:Einrichtung von Kursen

Gesicherte Wiki-Seite · Namensraum 0 · Version 4078 · Stand 2016-12-02.

[Lesbaren Artikel öffnen](/hilfe/zusatzprogramme/s1plan-einrichtung-von-kursen) · [Originaldaten herunterladen](/dateien/quellen/seite-1088.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC__


Das Einrichten von Kursen kann auf zwei Wegen erfolgen.
Falls in der angebundenen SchILD-Datenbank schon Kurse (mit oder ohne
Schülerverteilung) vorhanden sind, können diese in S1Plan eingelesen werden.
Falls noch keine Kurse in der SchILD-Datenbank vorliegen, können in
S1Plan alle Kurse eingerichtet und hier auch eine Schülerverteilung vorgenommen
werden.
Im Folgenden wird davon ausgegangen, dass in der SchILD-Datenbank noch
keine Kurse eingerichtet wurden (Fall A, siehe oben Seite 3).

===NEUEINRICHTUNG VON KURSEN IN S1PLAN (Beispiel: GY)===

Am Beispiel einer 6. Jahrgangsstufe sollen folgende Kurse in S1Plan neu eingerichtet
werden:
Sprachenkurse L6-1, L6-2, F6-1 und F6-2 als WPI-Kurse
Sport-AGs Fußball (1 Kurs), Handball (1 Kurs), Basketball (2 Kurse) und Volleyball
(1 Kurs) mit Erst-, Zweit- und Drittwunsch der Schüler.
Religionskurse/praktische Philosophie ER-1, ER-2 und PPL-1 als PUT-Kurse.
Falls nach der Erstinstallation noch kein Kursprofil erstellt wurde, kann dies
unter

[[Image:S1P-013-Kursprofil anlegen.jpg|Center]]

erfolgen.

===SPRACHENKURSE EINRICHTEN(KURSART WPI)===

Als Kursprofil wird zunächst

[[Image:S1P-014-Kursprofil JG6.jpg|Center]]

gewählt oder neu erzeugt.

Zunächst müssen die Kurse über

[[Image:S1P-015-Kurse anlegen.jpg|Center]]

selber eingerichtet werden.


Folgende Maske ist (zumindest teilweise) zu füllen:

[[Image:S1P-016-Kursdateneingabe.JPG|Center]]

Die hier nicht eingetragenen Felder sind (zunächst) nicht zwingend zu füllen,
insbesondere dann nicht, wenn die Lehrerzuordnung (Kursleitung und ggf. Zusatzkraft) (noch) nicht bekannt sind. Tag, Zeit und Ort sind bei WPI-Kursen
verzichtbar, da diese Daten üblicherweise aus dem Stundenplan hervorgehen.
Die Fortschreibungsart „Komplett“ ist hier sinnvoll, weil die Schüler den Kurs
von Jahrgangsstufe 06 bis Jahrgangsstufe 09 besuchen.
Nach Eintrag weiterer Kurse (durch Klick auf „+“) ergibt die Kursübersicht:

[[Image:S1P-017-Kursübersicht.jpg|Center]]

{{Hinweis|Die Nummer des Kurses (linke Spalte) ist fortlaufend und hängt davon ab, wie viele Kurse bisher
eingerichtet wurden.}}

===SCHÜLERZUWEISUNG ZU DEN KURSEN===

Zunächst sollte der Schildabgleich über den Menüpunkt

[[Image:S1P-016-Stammdaten.JPG|Center]]

vorgenommen werden. Dadurch werden die betreffenden Schüler aus SchILDNRW
nach S1Plan geladen.
Über den Menüpunkt

[[Image:S1P-019-Kurszuweisung-alle.JPG|Center]]

erreicht man das Fenster mit der Schülerliste der ausgewählten Jahrgänge:

[[Image:S1P-020-Kurszuweisung-alle.JPG|Center]]

{{Hinweis|Hier wurde „Schnellzuweisung“ markiert. Damit reicht zur Zuweisung ein Einfachklick
in die Matrix.
„Einzelzuweisung“ wurde gewählt, weil in diesem Bereich WPI jeder Schüler
nur genau einen Kurs belegen kann.}}

Mit Klick auf „Speichern“ wird das Fenster geschlossen.

Es erscheint nun wieder der Hauptbildschirm mit der Kurs- bzw. Schülerübersicht:

[[Image:S1P-022-Übersichtsseite.JPG|Center]]

Hier gibt es (auch) die Möglichkeit, Zuweisungen einzelner Schüler zu ändern.
Hierzu klickt man auf die Spalte „Zuw.“. Im rechten Fenster. Nun kann man auf
den Auswahlknopf klicken oder einen Buchstaben oder eine Zahl eingeben. Es
werden dann die Kurse angezeigt, die aufgrund der Eingabe in Frage kommen.
Es gibt jetzt noch die Möglichkeit, die Kurse zu fixieren. Dies geschieht sinnvollerweise
über den entsprechenden Gruppenprozess „Kurswahlen fixieren“.

===EXPORT DER KURSWAHLEN NACH SCHILD-NRW===

Über den Menüpunkt

[[Image:S1P-021-Export nach Schild.JPG |Center]]

können die Kurswahlen nach SchILD exportiert werden.

Das folgende Fenster

[[Image:S1P-023-Export-Fenster.JPG|Center]]

gliedert sich in 4 Teile:
Oben links sind die in S1Plan angelegten Kurse, oben rechts die (schon) in
SchILD vorhandenen Kurse.
Unten links sind die zu obigem markiertem Kurs zugeordneten Schüler, unten
rechts eine Vorschau auf die später nach SchILD exportierten Schüler. Bisher
wurde noch kein Export vorgenommen, was daran zu erkennen ist, dass noch keine grünen Markierungen (siehe nächste Seite) bei Kursen und Schülern
vorkommen.

Mit dem Export-Symbol [[Image:S1P-024-Export-Knopf.JPG]] können alle Kurse incl. der Schülerbelegung
nach SchILD exportiert werden.

{{Hinweis|Dabei werden damit auch alle in diejenigen Kurse des gewählten Jahrgangs in
der SchILD-Datenbank gelöscht, deren Kursart im verwendeten Kursprofil von
S1Plan vorhanden sind! Es erscheint vor dem Export ein entsprechendes Hinweisfenster.
Mit den beiden Doppelpfeilen in der Mitte kann der Export (ohne Löschung der
bisherigen SchILD-Kurse) erfolgen.}}

Nach dem Export (hier: alle Kurse und Löschung der bisherigen Kurse in
SchILD-NRW) ergibt sich folgende Fensterdarstellung:

[[Image:S1P-025-Export-Fenster-2.JPG|Center]]

Hier weisen die grünen Markierungen auf den erfolgten Export hin.

In der SchILD-Datenbank sieht es nach dem Export folgendermaßen aus:

[[Image:S1P-026-Kurse in Schild.JPG|Center]]

Bei den Schülern erkennt man auf der Karteikarte „Akt. Halbjahr“ ebenfalls
die Kurszuordnungen:

[[Image:S1P-027-Kurse bei Schüler in Schild.JPG]]


===ARBEITSGEMEINSCHAFTEN MIT WAHLMÖGLICHKEITEN===

Im Folgenden werden für einen Jahrgang 07 als Sport-AGs Fußball (1 Kurs),
Handball (1 Kurs), Basketball (2 Kurse) und Volleyball (1 Kurs) mit Erst-, Zweitund
Drittwunsch der Schüler behandelt.
Zunächst wird im Menüpunkt „Einrichtung“ das entsprechende Kursprofil erstellt,
gespeichert und anschließend gewählt:

[[Image:S1P-028-Kursprofil.JPG|Center]]

Da die Schüler Erst-, Zweit- und Drittwunsch äußern dürfen, muss im unteren
Bereich der Haken bei „Wunschspalten“ gesetzt werden.
Danach werden unter dem Menüpunkt „Einrichtung“ die Kurse selbst eingerichtet.
Dabei ist unbedingt darauf zu achten, dass das zur Kursart zugewiesene
Fach nicht SP, sondern SPAG heißt. Dieses Fach muss ggf. vorher in SchILDNRW
bei den Unterrichtsfächern ergänzt werden. Falls dies nicht gemacht
wird und nur das Fach SP zugeordnet wird, gibt es bei den Leistungsübersichten
und Zeugnissen Probleme der Darstellung des Faches Sport bzw. der
Sport-AG.

[[Image:S1P-029-AG-Fach-fuer-SP.JPG|Center]]

===SCHÜLERZUWEISUNG ZU DEN ARBEITSGEMEINSCHAFTEN===

Die Zuweisung zu Arbeitsgemeinschaften erfolgt hier klassenweise über

[[Image:S1P-030-klassenweise-Zuordnung.JPG|Center]]

und Klassenauswahl

[[Image:S1P-031-Klassenauswahl.JPG|Center]]

Im folgenden Fenster werden

[[Image:S1P-032-Matrix-Schülerwünsche.JPG|Center]]

die Wünsche eingegeben. Hier kann ausschließlich mit der Tastatur gearbeitet
werden (Eingabe des ersten und ggf. zweiten Buchstabens des Kurses und Weiterschaltung
mit der TAB-Taste). Die Eingabe eines Wunsches reicht hier aus. Nach Eingabe
aller Wünsche wird das Fenster über das Symbol „Speichern“ geschlossen.

Nach Eingabe aller Wünsche erhält man folgende Übersichtsmatrix:

[[Image:S1P-033-Matrix-der-Wünsche.JPG|Center]]

Es wurde bisher noch keine Kurs-Zuweisung vorgenommen. Hier stellt sich
das Problem, dass der Erstwunsch im Kurs „BB“ die Maximalzahl über- und im
Kurs FB unterschreitet. Daher gibt es nun zwei Möglichkeiten:

#Einrichtung zweier Kurse BB-1 und BB-2 und Verteilung der Schüler auf
diese zwei Kurse. In diesem Fall würden alle Erstwünsche berücksichtigt
werden können.
#Bei der Kurszuweisung werden einige Schüler von dem Kurs BB auf ihren
Erst-, Zweit- oder Drittwunsch verschoben.

Über

[[Image:S1P-034-Erstwunsch-zuweisen.JPG|Center]]

wird zunächst allen Schülern der Erstwunsch zugewiesen.
Dieser Erstwusch wird dann in die Spalte Zuw. eingetragen:

[[Image:S1P-035-Erstwunsch-zugewiesen.JPG]]

Bei der Kursübersicht ergibt sich dann:

[[Image:S1P-036-Kursübersicht-Erstwunsch-zugewiesen.JPG]]

Der Ausgleich (andere Zuordnung) kann natürlich per Hand erfolgen, aber
auch als Optimierung automatisch:

Über

[[Image:S1P-037-Menüpunkt-Optimieren.JPG|Center]]

erhält man das Doppelfenster

[[Image:S1P-038-Optimierungsfenster.JPG|Center]]


Durch Klick auf "OPTIMIEREN" ergibt sich nach dem Optimierungslauf folgende Verteilung:

[[Image:S1P-039-Optimierungsergebnis.JPG|Center]]

Hier wurde vor dem Optimierungslauf z.B. dem Schüler Biedermann der zunächst
eingetragene Erstwunsch „VB“ zugewiesen. Nach der Optimierung
wurde ihm sein Zweitwunsch „HB“ zugewiesen.
Ein zugehöriges Protokoll kann im Browser eingesehen (und gespeichert)
werden.

Durch Klick auf [[Image:S1P-040-Optimierung-speichern.JPG]]

Im Fenster der Kursübersicht und der Kurswahlen werden die Optimierungsergebnisse nun
dargestellt.

Wie in Kapitel 5.1.2 auf Seite 13 können alle Kurse in die SchILD-NRWDatenbank
übertragen werden.

{{Hinweis|Analog zu den AG-Wahlen können auch z.B. die Wahlen zu Projekten bei einer
Projektwoche mit Erst-, Zweit- und Drittwunsch behandelt werden.}}


----

[[S1PLAN:Übernahme von Kursen aus Schild|Weiter zu Übernahme von Kursen aus Schild]]

[[S1PLAN:Erster Programmstart|Zurück zu Erster Programmstart]]
```
