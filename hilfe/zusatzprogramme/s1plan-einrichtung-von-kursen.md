---
title: "S1PLAN:Einrichtung von Kursen"
wiki_title: "S1PLAN:Einrichtung von Kursen"
wiki_page_id: 1088
wiki_revision: 4078
---

# S1PLAN:Einrichtung von Kursen


Das Einrichten von Kursen kann auf zwei Wegen erfolgen. Falls in der angebundenen SchILD-Datenbank schon Kurse (mit oder ohne Schülerverteilung) vorhanden sind, können diese in S1Plan eingelesen werden. Falls noch keine Kurse in der SchILD-Datenbank vorliegen, können in S1Plan alle Kurse eingerichtet und hier auch eine Schülerverteilung vorgenommen werden. Im Folgenden wird davon ausgegangen, dass in der SchILD-Datenbank noch keine Kurse eingerichtet wurden (Fall A, siehe oben Seite 3).

<a id="NEUEINRICHTUNG_VON_KURSEN_IN_S1PLAN_(Beispiel:_GY)"></a>
<a id="NEUEINRICHTUNG_VON_KURSEN_IN_S1PLAN_.28Beispiel:_GY.29"></a>

## NEUEINRICHTUNG VON KURSEN IN S1PLAN (Beispiel: GY)

Am Beispiel einer 6. Jahrgangsstufe sollen folgende Kurse in S1Plan neu eingerichtet werden: Sprachenkurse L6-1, L6-2, F6-1 und F6-2 als WPI-Kurse Sport-AGs Fußball (1 Kurs), Handball (1 Kurs), Basketball (2 Kurse) und Volleyball (1 Kurs) mit Erst-, Zweit- und Drittwunsch der Schüler. Religionskurse/praktische Philosophie ER-1, ER-2 und PPL-1 als PUT-Kurse. Falls nach der Erstinstallation noch kein Kursprofil erstellt wurde, kann dies unter

![S1P-013-Kursprofil anlegen](/bilder/wiki/s1p-013-kursprofil-anlegen-2cf0768c.jpg)

erfolgen.

<a id="SPRACHENKURSE_EINRICHTEN(KURSART_WPI)"></a>
<a id="SPRACHENKURSE_EINRICHTEN.28KURSART_WPI.29"></a>

## SPRACHENKURSE EINRICHTEN(KURSART WPI)

Als Kursprofil wird zunächst

![S1P-014-Kursprofil JG6](/bilder/wiki/s1p-014-kursprofil-jg6-3da78632.jpg)

gewählt oder neu erzeugt.

Zunächst müssen die Kurse über

![S1P-015-Kurse anlegen](/bilder/wiki/s1p-015-kurse-anlegen-1a6e45f4.jpg)

selber eingerichtet werden.

Folgende Maske ist (zumindest teilweise) zu füllen:

![S1P-016-Kursdateneingabe](/bilder/wiki/s1p-016-kursdateneingabe-c9400ecf.jpg)

Die hier nicht eingetragenen Felder sind (zunächst) nicht zwingend zu füllen, insbesondere dann nicht, wenn die Lehrerzuordnung (Kursleitung und ggf. Zusatzkraft) (noch) nicht bekannt sind. Tag, Zeit und Ort sind bei WPI-Kursen verzichtbar, da diese Daten üblicherweise aus dem Stundenplan hervorgehen. Die Fortschreibungsart „Komplett“ ist hier sinnvoll, weil die Schüler den Kurs von Jahrgangsstufe 06 bis Jahrgangsstufe 09 besuchen. Nach Eintrag weiterer Kurse (durch Klick auf „+“) ergibt die Kursübersicht:

![S1P-017-Kursübersicht](/bilder/wiki/s1p-017-kursuebersicht-92b5a0e8.jpg)

:::info
Die Nummer des Kurses (linke Spalte) ist fortlaufend und hängt davon ab, wie viele Kurse bisher eingerichtet wurden.
:::

<a id="SCHÜLERZUWEISUNG_ZU_DEN_KURSEN"></a>
<a id="SCH.C3.9CLERZUWEISUNG_ZU_DEN_KURSEN"></a>

## SCHÜLERZUWEISUNG ZU DEN KURSEN

Zunächst sollte der Schildabgleich über den Menüpunkt

![S1P-016-Stammdaten](/bilder/wiki/s1p-016-stammdaten-0a0a1165.jpg)

vorgenommen werden. Dadurch werden die betreffenden Schüler aus SchILDNRW nach S1Plan geladen. Über den Menüpunkt

![S1P-019-Kurszuweisung-alle](/bilder/wiki/s1p-019-kurszuweisung-alle-97e9f3af.jpg)

erreicht man das Fenster mit der Schülerliste der ausgewählten Jahrgänge:

![S1P-020-Kurszuweisung-alle](/bilder/wiki/s1p-020-kurszuweisung-alle-57a40569.jpg)

:::info
Hier wurde „Schnellzuweisung“ markiert. Damit reicht zur Zuweisung ein Einfachklick in die Matrix. „Einzelzuweisung“ wurde gewählt, weil in diesem Bereich WPI jeder Schüler nur genau einen Kurs belegen kann.
:::

Mit Klick auf „Speichern“ wird das Fenster geschlossen.

Es erscheint nun wieder der Hauptbildschirm mit der Kurs- bzw. Schülerübersicht:

![S1P-022-Übersichtsseite](/bilder/wiki/s1p-022-uebersichtsseite-e0321d26.jpg)

Hier gibt es (auch) die Möglichkeit, Zuweisungen einzelner Schüler zu ändern. Hierzu klickt man auf die Spalte „Zuw.“. Im rechten Fenster. Nun kann man auf den Auswahlknopf klicken oder einen Buchstaben oder eine Zahl eingeben. Es werden dann die Kurse angezeigt, die aufgrund der Eingabe in Frage kommen. Es gibt jetzt noch die Möglichkeit, die Kurse zu fixieren. Dies geschieht sinnvollerweise über den entsprechenden Gruppenprozess „Kurswahlen fixieren“.

<a id="EXPORT_DER_KURSWAHLEN_NACH_SCHILD-NRW"></a>

## EXPORT DER KURSWAHLEN NACH SCHILD-NRW

Über den Menüpunkt

![S1P-021-Export nach Schild](/bilder/wiki/s1p-021-export-nach-schild-23587408.jpg)

können die Kurswahlen nach SchILD exportiert werden.

Das folgende Fenster

![S1P-023-Export-Fenster](/bilder/wiki/s1p-023-export-fenster-ea3131ab.jpg)

gliedert sich in 4 Teile: Oben links sind die in S1Plan angelegten Kurse, oben rechts die (schon) in SchILD vorhandenen Kurse. Unten links sind die zu obigem markiertem Kurs zugeordneten Schüler, unten rechts eine Vorschau auf die später nach SchILD exportierten Schüler. Bisher wurde noch kein Export vorgenommen, was daran zu erkennen ist, dass noch keine grünen Markierungen (siehe nächste Seite) bei Kursen und Schülern vorkommen.

Mit dem Export-Symbol ![S1P-024-Export-Knopf](/bilder/wiki/s1p-024-export-knopf-90fd442c.jpg) können alle Kurse incl. der Schülerbelegung nach SchILD exportiert werden.

:::info
Dabei werden damit auch alle in diejenigen Kurse des gewählten Jahrgangs in der SchILD-Datenbank gelöscht, deren Kursart im verwendeten Kursprofil von S1Plan vorhanden sind! Es erscheint vor dem Export ein entsprechendes Hinweisfenster. Mit den beiden Doppelpfeilen in der Mitte kann der Export (ohne Löschung der bisherigen SchILD-Kurse) erfolgen.
:::

Nach dem Export (hier: alle Kurse und Löschung der bisherigen Kurse in SchILD-NRW) ergibt sich folgende Fensterdarstellung:

![S1P-025-Export-Fenster-2](/bilder/wiki/s1p-025-export-fenster-2-82ecd091.jpg)

Hier weisen die grünen Markierungen auf den erfolgten Export hin.

In der SchILD-Datenbank sieht es nach dem Export folgendermaßen aus:

![S1P-026-Kurse in Schild](/bilder/wiki/s1p-026-kurse-in-schild-5de0ad4d.jpg)

Bei den Schülern erkennt man auf der Karteikarte „Akt. Halbjahr“ ebenfalls die Kurszuordnungen:

![S1P-027-Kurse_bei_Schüler_in_Schild](/bilder/wiki/s1p-027-kurse-bei-schueler-in-schild-99f65aa8.jpg)

<a id="ARBEITSGEMEINSCHAFTEN_MIT_WAHLMÖGLICHKEITEN"></a>
<a id="ARBEITSGEMEINSCHAFTEN_MIT_WAHLM.C3.96GLICHKEITEN"></a>

## ARBEITSGEMEINSCHAFTEN MIT WAHLMÖGLICHKEITEN

Im Folgenden werden für einen Jahrgang 07 als Sport-AGs Fußball (1 Kurs), Handball (1 Kurs), Basketball (2 Kurse) und Volleyball (1 Kurs) mit Erst-, Zweitund Drittwunsch der Schüler behandelt. Zunächst wird im Menüpunkt „Einrichtung“ das entsprechende Kursprofil erstellt, gespeichert und anschließend gewählt:

![S1P-028-Kursprofil](/bilder/wiki/s1p-028-kursprofil-ae974474.jpg)

Da die Schüler Erst-, Zweit- und Drittwunsch äußern dürfen, muss im unteren Bereich der Haken bei „Wunschspalten“ gesetzt werden. Danach werden unter dem Menüpunkt „Einrichtung“ die Kurse selbst eingerichtet. Dabei ist unbedingt darauf zu achten, dass das zur Kursart zugewiesene Fach nicht SP, sondern SPAG heißt. Dieses Fach muss ggf. vorher in SchILDNRW bei den Unterrichtsfächern ergänzt werden. Falls dies nicht gemacht wird und nur das Fach SP zugeordnet wird, gibt es bei den Leistungsübersichten und Zeugnissen Probleme der Darstellung des Faches Sport bzw. der Sport-AG.

![S1P-029-AG-Fach-fuer-SP](/bilder/wiki/s1p-029-ag-fach-fuer-sp-31360850.jpg)

<a id="SCHÜLERZUWEISUNG_ZU_DEN_ARBEITSGEMEINSCHAFTEN"></a>
<a id="SCH.C3.9CLERZUWEISUNG_ZU_DEN_ARBEITSGEMEINSCHAFTEN"></a>

## SCHÜLERZUWEISUNG ZU DEN ARBEITSGEMEINSCHAFTEN

Die Zuweisung zu Arbeitsgemeinschaften erfolgt hier klassenweise über

![S1P-030-klassenweise-Zuordnung](/bilder/wiki/s1p-030-klassenweise-zuordnung-498d6605.jpg)

und Klassenauswahl

![S1P-031-Klassenauswahl](/bilder/wiki/s1p-031-klassenauswahl-9a207152.jpg)

Im folgenden Fenster werden

![S1P-032-Matrix-Schülerwünsche](/bilder/wiki/s1p-032-matrix-schuelerwuensche-06bb2079.jpg)

die Wünsche eingegeben. Hier kann ausschließlich mit der Tastatur gearbeitet werden (Eingabe des ersten und ggf. zweiten Buchstabens des Kurses und Weiterschaltung mit der TAB-Taste). Die Eingabe eines Wunsches reicht hier aus. Nach Eingabe aller Wünsche wird das Fenster über das Symbol „Speichern“ geschlossen.

Nach Eingabe aller Wünsche erhält man folgende Übersichtsmatrix:

![S1P-033-Matrix-der-Wünsche](/bilder/wiki/s1p-033-matrix-der-wuensche-850603c3.jpg)

Es wurde bisher noch keine Kurs-Zuweisung vorgenommen. Hier stellt sich das Problem, dass der Erstwunsch im Kurs „BB“ die Maximalzahl über- und im Kurs FB unterschreitet. Daher gibt es nun zwei Möglichkeiten:

1.  Einrichtung zweier Kurse BB-1 und BB-2 und Verteilung der Schüler auf

diese zwei Kurse. In diesem Fall würden alle Erstwünsche berücksichtigt werden können.

1.  Bei der Kurszuweisung werden einige Schüler von dem Kurs BB auf ihren

Erst-, Zweit- oder Drittwunsch verschoben.

Über

![S1P-034-Erstwunsch-zuweisen](/bilder/wiki/s1p-034-erstwunsch-zuweisen-da4b37dc.jpg)

wird zunächst allen Schülern der Erstwunsch zugewiesen. Dieser Erstwusch wird dann in die Spalte Zuw. eingetragen:

![S1P-035-Erstwunsch-zugewiesen](/bilder/wiki/s1p-035-erstwunsch-zugewiesen-046d11e9.jpg)

Bei der Kursübersicht ergibt sich dann:

![S1P-036-Kursübersicht-Erstwunsch-zugewiesen](/bilder/wiki/s1p-036-kursuebersicht-erstwunsch-zugewiesen-5d5ca1c2.jpg)

Der Ausgleich (andere Zuordnung) kann natürlich per Hand erfolgen, aber auch als Optimierung automatisch:

Über

![S1P-037-Menüpunkt-Optimieren](/bilder/wiki/s1p-037-menuepunkt-optimieren-094546db.jpg)

erhält man das Doppelfenster

![S1P-038-Optimierungsfenster](/bilder/wiki/s1p-038-optimierungsfenster-2ca9010b.jpg)

Durch Klick auf "OPTIMIEREN" ergibt sich nach dem Optimierungslauf folgende Verteilung:

![S1P-039-Optimierungsergebnis](/bilder/wiki/s1p-039-optimierungsergebnis-17be7cf7.jpg)

Hier wurde vor dem Optimierungslauf z.B. dem Schüler Biedermann der zunächst eingetragene Erstwunsch „VB“ zugewiesen. Nach der Optimierung wurde ihm sein Zweitwunsch „HB“ zugewiesen. Ein zugehöriges Protokoll kann im Browser eingesehen (und gespeichert) werden.

Durch Klick auf ![S1P-040-Optimierung-speichern](/bilder/wiki/s1p-040-optimierung-speichern-5816e19b.jpg)

Im Fenster der Kursübersicht und der Kurswahlen werden die Optimierungsergebnisse nun dargestellt.

Wie in Kapitel 5.1.2 auf Seite 13 können alle Kurse in die SchILD-NRWDatenbank übertragen werden.

:::info
Analog zu den AG-Wahlen können auch z.B. die Wahlen zu Projekten bei einer Projektwoche mit Erst-, Zweit- und Drittwunsch behandelt werden.
:::

------------------------------------------------------------------------

[Weiter zu Übernahme von Kursen aus Schild](/hilfe/zusatzprogramme/s1plan-uebernahme-von-kursen-aus-schild)

---

Quelle: [S1PLAN:Einrichtung von Kursen – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=S1PLAN%3AEinrichtung+von+Kursen&oldid=4078) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=S1PLAN%3AEinrichtung+von+Kursen&action=history)
