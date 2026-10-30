---
title: "Blockung mit Kurs42 To CNF"
---

<a id="kurs42-to-cnf-hauptseite"></a>

# Blockung mit Kurs42 To CNF

<a id="Hinweise"></a>

## Hinweise

Kurs42_To_CNF wurde in JAVA von Benjamin Bartsch programmiert. Die Software ist "open source" und unterliegt der MIT oder der CC0 Lizenz, d.h. der Quellcode steht allen frei zur Verfügung, aber es dürfen keinerlei Ansprüche geltend gemacht werden. Wenn Sie den Autor kontaktieren möchten, finden Sie die E-Mail-Adresse innerhalb des Programms.

Das Programm arbeitet auf Basis der Daten des Programms Kurs42. Wenn Sie eine Import/Exportfunktion zu anderen Programmen wünschen, können Sie den Autor kontaktieren.

Das Programm unterstützt eine Vielzahl von Nebenbedingungen (Regeln genannt). Wenn Sie für Ihre Schule zusätzliche Regeln benötigen, können Sie ebenfalls den Autor kontaktieren.

<a id="Vorbereitungen"></a>

## Vorbereitungen

- Laden Sie sich den folgenden SAT-Solver (<https://github.com/msoos/cryptominisat/releases>) herunter und speichern Sie die Datei (für Windows: cryptominisat5-win-amd64-nogauss.exe) auf Ihrem PC und merken Sie sich den Pfad. Für Windows ist die aktuellste Version 5.6.8 (Stand: Mai 2020), Sie müssen den Reiter "Assets" aufklappen, um die Datei zu sehen. Hier ist der Direkt-Link ([https://github.com/msoos/cryptominisat/releases/download/5.6.8/cryptominisat5-win-amd64-nogauss.exe](https://github.com/msoos/cryptominisat/releases/download/5.6.8/cryptominisat5-win-amd64-nogauss.exe)).
- Installieren Sie ggf. JAVA und laden sich sich dann die aktuellste Version von Kurs42_To_CNF herunter (<https://schulverwaltungsinfos.nrw.de/svws/forum/viewtopic.php?f=71&t=20&start=2000>). Sie finden das Programm auch hier (<https://www.svws.nrw.de/download/tools>), diese Version ist aber nicht immer die aktuellste.
- Sie haben nun das Programm in Form einer JAR-Datei, welche man mit einem Doppelklick starten kann. Dort müssen Sie dort zunächst den Pfad zur Datei cryptominisat...exe angeben und können dann arbeiten, aber zuvor müssen Sie jedoch noch aus Kurs42 Ihre Daten als Textdateien exportieren. **Bitte vergewissern Sie sich, dass in den Einstellung das Exportformat UTF8 eingestellt ist.**

<a id="Daten_in_Kurs42_vorbereiten_und_exportieren"></a>

## Daten in Kurs42 vorbereiten und exportieren

- Die Laufbahnen sollten wie üblich bereits vor dem Blocken gründlich geprüft werden.
- In Kurs42 werden unter *Bearbeiten --\> Kurse einrichten* bzw. *Bearbeiten --\> Kurse einrichten (ohne Fachwahl)* die Anzahl der Kurse pro Fach festgelegt.
- **Unter *Extras* --\> *Einstellungen* wird bei Import-Export bei *Kodierung von Textexporten* auf den Eintrag *UTF8* gestellt.**
- Unter *Import/Export --\> Export in Textdatei* werden sämtliche Häkchen gesetzt und ein Zielordner gewählt.

<a id="Das_erste_schnelle_Ergebnis_mit_Kurs42_To_CNF"></a>

## Das erste schnelle Ergebnis mit Kurs42_To_CNF

Ziel ist es, zunächst ein beliebiges Blockungsergebnis zu erhalten. Anschließend grenzt man seine Bedingungen Schritt für Schritt ein, bis man ein Ergebnis hat mit dem man zufrieden ist. Die Kursgrößendifferenz sollte man nicht eingrenzen, dies kann das Programm später automatisch optimieren.

- In Kurs42_To_CNF unter *Datei --\> Kurs42-Ordner öffnen* den soeben mit dem Export befüllten Ordner auswählen.
- Die Abfrage *Sollen aus Kurs42 alle alle Kurse/Teilnehmer als Regeln fixiert werden?* kann zunächst verneint werden. Diese Abfrage wird an anderer Stelle erklärt, wenn es um das Blocken der Zusatzkurse in der Q2 oder das Neuladen eines Blockungsergebnisses geht.
- Das Fenster *Debug* (unten) sollte leer sein.
- Das Fenster *Statistik* (oben links) gibt Importinformationen an, z.B. wie viele Schüler importiert und wie viele Fächer gewählt wurden.
- Lassen Sie das Fenster *Regeln* (unten links) noch leer.
- Das Fenster *Maximalwerte* (oben links) enthält allgemeine Voreinstellungen zur Blockung.
  - Stellen Sie *Schienen* auf die gewünschte Anzahl an. Die Anzahl der Schienen muss mindestens so groß sein, wie die Anzahl der Kurse des Schülers mit den meisten Kursen.
  - Belassen Sie die *Maximale Kursgrößendifferenz* auf einem sehr hohen Wert (15-20). Dieser wird später automatisch optimiert.
  - Stellen Sie die *Maximale Kursgröße* auf den größten Wert ein, den Sie alle Kursen zumuten (32-25). Vorsicht: Falls Sie z.B. 32 eingeben und es einen Kurs mit 33 SuS rechnerisch geben müsste, dann ist die Blockung sofort unlösbar (UNSAT).
  - Stellen Sie die *Umwähler* zunächst auf 0 ein und klicken Sie auf den Button "Berechne!". Über dem Button können Sie die Anzahl der *Threads* auf 1 stehen lassen (mehr dazu unter *Technische Fragen*, siehe unten), das Ausgabeformat ist üblicherweise *Neu+BOM*. Falls Sie nun **keine** Lösung erhalten (ein Indiz dafür ist, dass die Berechnung sehr lange dauert oder es erscheint ein Tab mit dem Hinweis *UNSAT*), müssen Sie die Umwähler sukzessiv um 1 erhöhen. So lässt sich die Mindestzahl an Umwähler ermitteln.

Sie haben nun eine Lösung. Das Ergebnis wird in einem Tab, z.B. *B1_SAT* in sechs Fenstern dargestellt, die sich von selbst erklären. Dieses Ergebnis enthält allerdings noch eine viel zu große Kursgrößendifferenz. Sie könnten nun unter "Auto-Optimierung (GK-KD: Parallele Rechnungen: \_\_\_" auf den Button "K" klicken, dann probiert das Programm automatisch die Grundkurs-Kursgrößendifferenz zu optimieren. Dabei werden "\_\_\_" Prozessorkerne verwendet. Hier müssen Sie ziemlich genau wissen, wie viele Prozessorkerne ihr PC hat. Abbrechen kann man die Automatisierung jederzeit mit dem Button "Stoppe alle Auto-Berechnungen" (oben rechts).

<a id="Die_Blockung_mit_Nebenbedingungen/Wünschen_ergänzen"></a>
<a id="Die_Blockung_mit_Nebenbedingungen.2FW.C3.BCnschen_erg.C3.A4nzen"></a>

## Die Blockung mit Nebenbedingungen/Wünschen ergänzen

Im Fenster **Regeln** werden die Regeln definiert, an die sich das Programm zwingend halten soll. Sollen z.B. alle Religions- und Philosophie-Kurse unbedingt parallel liegen, und zwar in Schiene 3, wählt man in den vier Drop-Down-Menüs Folgendes aus:

1.  Fach-Art
2.  Rel,GK
3.  in Schiene
4.  3

Es erscheint im Regelfenster *Fach-Art#REL;GK#in Schiene#3*. Auch durch andere Regelkombinationen kann dieses Ergebnis erzwungen werden, hier gilt es, auszuprobieren und Erfahrungen zu sammeln.

Bei der Blockung der Q1 ist folgende Regel relativ typisch:

1.  LKs allein von Schiene
2.  1
3.  bis Schiene
4.  2

<a id="Daten_in_Kurs42_importieren"></a>

## Daten in Kurs42 importieren

Nach einer erfolgreichen Berechnung einer Blockung legt das Programm im oben angelegten Ordner für den Export aus Kurs einen Unterordner an, dessen Name dem TAB *B1_SAT* entspricht und zusätzlich das Ausgabeformat enthält, hier also *B_00001_NEU_UTF8_BOM*. In disem Ordner gibt es auch eine Textdatei, die das Ergebnis der Berechnung und die angewendeten Regeln dokumentiert, sodass man das Vorgehen rekonstruieren kann. In Kurs42 gibt es zwei Möglichkeiten, diese Blockung zu importieren:

1.  Unter *Import/Export* --\> *Import der SAT-Solver-Ergebnisse* alle Häkchen setzen und den Ordner *B_00001_NEU_UTF8_BOM* auswählen. Die Blockung ist importiert und kann z.B. unter *Blocken* --\> *Automatisch Blocken* eingesehen und bearbeitet werden.
2.  Unter *Datei* --\> *Neue Blockung aus Textdatei* wird der o.g. Ordner gewählt, alle Häkchen gesetzt und importiert.

Das zweite Vorgehen hat den Vorteil, dass man nicht versehentlich eine bestehende Blockung überschreibt und so die frisch importierte Blockung unter einem eigenen Namen speichern kann.

<a id="Jahrgänge_Blocken"></a>
<a id="Jahrg.C3.A4nge_Blocken"></a>

## Jahrgänge Blocken

Die hier vorgestellten Regeln sind nur Beispiele einer Schule mit ihren jeweiligen schulspezifischen Anforderungen und können niemals 1:1 übernommen werden. Sie sollen Anregungen schaffen, wie man für seine Schule ein gutes Ergebnis erzielen kann.

------------------------------------------------------------------------

**Blockung der neuen EF mit Stamm-/Kerngruppen**

In einem ersten Beispiel wird davon ausgegangen, dass die Schule in der EF quasi vierzügig ist und die Fächer Englisch, Mathe, Deutsch und Sport jeweils in der gleichen Zusammensetzung stattfinden sollen. Dazu werden folgende Regeln angewendet:

- Kurs#D-GK1#in Schiene#1
- Kurs#M-GK2#in Schiene#1
- Kurs#E5-GK3#in Schiene#1
- Kurs#SP-GK4#in Schiene#1

<!-- -->

- Kurs#D-GK2#in Schiene#2
- Kurs#M-GK3#in Schiene#2
- Kurs#E5-GK4#in Schiene#2
- Kurs#SP-GK1#in Schiene#2

<!-- -->

- Kurs#D-GK3#in Schiene#3
- Kurs#M-GK4#in Schiene#3
- Kurs#E5-GK1#in Schiene#3
- Kurs#SP-GK2#in Schiene#3

<!-- -->

- Kurs#D-GK4#in Schiene#4
- Kurs#M-GK1#in Schiene#4
- Kurs#E5-GK2#in Schiene#4
- Kurs#SP-GK3#in Schiene#4

In einem zweiten Beispiel werden nur die Fächer D, E und M in Kerngruppen geblockt, die Verteilung im Stundenplanprogramm erfolgt erst später. Hierbei ist die Zügigkeit egal, da alle Kurse eines Faches in der Gleichen Schiene landen.

- Fach-Art#D;GK#allein in Schiene (SuS optimal)#1
- Fach-Art#E;GK#allein in Schiene (SuS optimal)#2
- Fach-Art#M;GK#allein in Schiene (SuS optimal)#3

Der Zusatz *SuS optimal* führt dazu, dass in allen Kursen eine möglichst gleiche Anzahl SuS sitzen.

Des Weiteren sollen alle Philosophie- und Religionskurse für mögliche Kurswechsler parallel liegen:

- Fach-Art#PL;GK#in Schiene (SuS optimal)#5
- Fach-Art#REL;GK#in Schiene (SuS optimal)#5

Eine Alternative hierzu wäre dieses Vorgehen:

- Kurs#REL-GK1#in Schiene#6
- Kurs#PL-GK1#in Schiene#6
- Kurs#REL-GK2#in Schiene#6
- Kurs#PL-GK2#in Schiene#5
- Kurs#REL-GK3#in Schiene#5

Dies führt dazu, dass in z.B. Schiene 5 auch ein anderer Kurs zusätzlich liegen kann. So gibt es mehr Spielraum und eine bessere Kursgrößendifferenz oder weniger Umwähler.

Der Mathe-Vertiefungskurs soll außerhalb der regulären Blockung liegen. Die vorliegende Schule bietet in der EF zwölf Kurse und zusätzlich einen Mathe-Vertiefungskurs als 13. Fach an.

- Fach-Art#VM;VTF#allein in Schiene#13

Manchmal bietet es sich auch an, die neueinsetzenden Fremdsprachen parallel zu setzen:

- Kurs#I0-GK1#unbedingt zusammen mit#S0-GK1

------------------------------------------------------------------------

**Blockung der neuen Q1**

Es bietet sich wie üblich an, erst die LKs zu blocken, da ja z.B. nicht erhaltene LK-Wahlen Einfluss auf die GK-Wahlen haben. (Die LKs kann man auch mit Kurs42 blocken. Dort nach den Beratungen die GKs anpassen und das Ergebnis exportieren und wie unten beschrieben im CNF importieren). Sollen die LKs mit CNF geblockt werden, fängt man nach dem Import so an:

- LKs allein von Schiene#1#bis Schiene#2

Die LKs liegen exklusiv in Schiene 1 und 2. Für den GK-Bereich wählt man sehr weite Bedigungen bei den Umwählern und Kursgrößendifferenzen und/oder man kann auch weitere Schienen hinzufügen, sodass das Programm für die Berechnung der GKs kaum Zeit benötigt. Die fertige Blockung geht zurück nach Kurs42. Dann müssen Umwähler beraten werden und die neue Blockung, mit den LKs und den neuen GK-Wahlen exportiert und dann in CNF importiert werden.

Beim Import in CNF die Regel

- Fixiere#Schiene und Teilnehmer#aller#LKs

anwenden.

Dann wird der GK-Bereich geblockt, z.B. mit diesem Satz an Regeln:

- Fach-Art#PL;GK#in Schiene (SuS optimal)#3
- Fach-Art#REL;GK#in Schiene (SuS optimal)#3

--\> alle Religions- und Philosophie-Kurse werden parallel gelegt, damit Kurswechsel und eine Verschmelzung zur Q2 leicht möglich sind.

- Fach-Art#SP;GK#muss gewählt werden#-
- Fach-Art#PL;GK#muss gewählt werden#-
- Fach-Art#REL;GK#muss gewählt werden#-
- Fach-Art#D;GK#muss gewählt werden#-
- Fach-Art#M;GK#muss gewählt werden#-
- Fach-Art#E5;GK#muss gewählt werden#-
- Fach-Art#S0;GK#muss gewählt werden#-

--\> dieser Satz erzwingt, dass es keine Kurswechsler gibt, die eines der alternativlosen Fächer nicht bekommt

- Kurs#VP-GK1#in Schiene#12
- Kurs#IP-GK1#in Schiene#12
- Schiene#12#max. Kursanzahl#2

--\> die Schine 12 ist den vokal- und instrumentalpraktischen Kursen vorbehalten

- Kurs#SW-GK1#unbedingt zusammen mit#SW-GK2

--\> die Progonose zeigt, dass die beiden SoWi-Kurse vermutlich in der Q2 verschmolzen werden. Deshalb werden sie schon in der Q1 zusammengelegt.

- Kurs#PH-GK1#niemals zusammen mit#PH-GK2

--\> es gibt nur einen Physiklehrer, sodass die Physik-Kurse nicht parallel liegen dürfen.

------------------------------------------------------------------------

**Blockung der Q2 (Zusatzkurse)**

Zunächst müssen in Kurs42 ggf. Kurse verschmolzen und die Zusatzkurse eingerichtet werden. Die SuS haben AB3/AB4 festgelegt und beim Import aus LuPO wurde dies entsprechend mitübernommen. Dann besteht die grundsätzliche Schwierigkeit darin, die ZKs in die bestehende Blockung einzuarbeiten, ohne dass viele Schüler ihre Kurse wechseln müssen. Dazu gibt es mit Kurs42_to_CNF unterschiedliche Strategien. Zunächst wird die angepasste Blockungsdastei in Kurs42_to_CNF importiert.

*Strategie 1*

Beim Blockungsimport kann die Abfrage, ob alle Schüler/Kurse als Regeln fixiert weden sollen, bejaht werden.

- Fach-Art#SW;ZK#muss gewählt werden#-
- Fach-Art#GE;ZK#muss gewählt werden#-

Dies führt dazu, dass es keine Umwähler gibt, die den ZK nicht bekommen haben, da logischerweise der ZK Pflicht ist.

- Fixiere#Teilnehmer#der Kursart#AB4
- Fixiere#Teilnehmer#der Kursart#AB3

Dies führt dazu, dass die AB3/AB4-schüler definitiv in ihren bisherigen Kursen verbleiben, alle anderen können Kurse wechseln. Dies lässt sich erweitern, wenn man z.B. nicht möchte, dass die Mathe-Kurse grundsätzlich nicht angetastet wedern sollen:

- Fixiere#Teilnehmer#der Kursart#M

Nun kann man zusätzlich einschränken, wie viele Kursewechsel es geben darf und zwar mit diesen Regeln:

- SchülerIn#...#hat definitiv Fach-Art#...", praktisch um Laufbahnen zu gewährleisten.
- Fixiere#max. Kurswechsel (Summe aller SuS)#...#-, Beispiel: "Fixiere#max. Kurswechsel (Summe aller SuS)#101#-
- Fixiere#max. Kurswechsel (je SchülerIn)#...#-", Beispiel: "Fixiere#max. Kurswechsel (je SchülerIn)#2#-"
- Fixiere#max. Kurswechsel (bestimmte SchülerIn)#...#...", Beispiel: "Fixiere#max. Kurswechsel (bestimmte SchülerIn)#Mustermann;Max;01.01.2001;3#1
- Fixiere#max. Abitur-Kurswechsel (Summe aller SuS)#...#-, Beispiel: "Fixiere#max. Abitur-Kurswechsel (Summe aller SuS)#76#-
- Fixiere#max. Abitur-Kurswechsel (je SchülerIn)#...#-, Beispiel: "Fixiere#max. Abitur-Kurswechsel (je SchülerIn)#1#-
- Fixiere#max. Abitur-Kurswechsel (bestimmte SchülerIn)#...#..., Beispiel: "Fixiere#max. Abitur-Kurswechsel (bestimmte SchülerIn)#Musterfrau;Maren;01.01.2001;4#1
- Mit "Fixiere#max. 2er-Abitur-Kurswechsel (Summe aller SuS)#42#-" kann man nun die Anzahl an

SchülerInnen begrenzen die von 2 Abitur-Kurswechsel betroffen sind.

Eine Auflistung der Kurswechsler liefert das Ausgabefenster unten rechts. Format: Nachname;Vorname;01.01.2000;3;3;E-GK1#E-GK3#GKS;EK-GK1#EK-GK2#GKM;?#PL-GK1#GKM Dabei gilt: Nachname;Vorname;01.01.2000;Geschlecht;Anzahl Kurswechsel;alter Kurs#neuer Kurs#Kursart

Ist dabei (wie im Beispiel) ein ? aufgeführt, gab es dort noch keine Kurszuordnung (Zusatzkurse GE/SW) oder der Kurs existiert nicht mehr (nach Zusammenlegung "aus 2 mach 1"). Dort gibt es ja zwangsweise einen neuen Kurs. Diese Kurswechsel werden in der Auflistung (Ergebnis....txt) zwar gezählt, aber nicht im Rahmen der Regel gezählt. Dort wird die Begrenzung für die ECHTEN Kurswechsel festgelegt.

Wichtig ist dabei, dass den neuen Kursen (Zusatzkursen) noch keine Schüler zugewiesen sind, ansonsten zählt er sie ja mit.

*Strategie 2*

Beim Blockungsimport kann die Abfrage, ob alle Schüler/Kurse als Regeln fixiert weden sollen, bejaht werden. ...

*Strategie 3* In der Regel geht es beim Blocken der ZKs in bestehende Schienen nicht ohne Umwahlen. Man gehe wie folgt vor.

In Kurs42 lade man aus LuPO die Kurswahlen der Q2 in die zuvor hochgesetzt Kurs42 Blockung der Q1 und richte dann ZKs ein, ohne sie ins Blockungsraster zu setzen.

Danach wird die Blockung in Textdateien exportiert und in CNF importiert. Dann werden für alle GK und LK die Kurse in Schienen und die Schüler in den Kursen fixiert (beim Import der Dateien wird die Abfrage bejaht). Nur die ZKs bleiben frei, also man nimmt die entsprechenden Regeln wieder raus. Dann fängt man mit kleiner Umwählerzahl an zu blocken. Bei UNSAT erhöht man sie um eins, bis man eine Lösung findet.

Wenn man dabei auf eine "Handvoll" Umwähler kommt, geht das Ganze zurück nach Kurs42 und man macht die restlichen Anpassungen von Hand. Sind es zu viele, kann man alle Schüler mit GKM zur Umverteilung freigeben und fängt wieder bei 0 Umwählern an.

<a id="Strategien_und_weitere_Tipps"></a>

## Strategien und weitere Tipps

**Blockungsergebnis optimieren**

Das oben angedeutete Vorgehen, zunächst die Umwähler auf 0 zu setzen und die Kursgrößendifferenz sehr hoch, hat den Vorteil, das man relativ schnell zu einem Ergebnis kommt. Wenn dieses Vorgehen zunächst *UNSAT* liefert, setzt man die Umwähler solange um 1 rauf, bis man die Mindestzahl an Umwählern ermittelt hat. Nun muss die Kursgrößendifferenz noch verringert werden.

*Kursfixierungen in %*

...

*Schülerfixierungen in %*

...

*Auto-Optimierung*

Sobald man eine Lösung gefunden hat (z.B. mit GK-Kursdifferenz 20). Es gibt einen Button, der automatisch (je nach Einstellung) mehrere parallele Berechnungen startet und dabei versucht, die GK-Kursdifferenz auf 19 zu verbessern. Wird eine Lösung gefunden, ist das Ziel die nächstkleinere GK-Kursdifferenz. Die Berechnung stoppt, wenn 100 verschiedene Szenarien nicht zum Erfolg führten oder eine optimale GK-Kursdifferenz gefunden wurde. Es bietet sich an, durchaus 8 Rechnungen gleichzeitg laufen zu lassen, dies hängt vom CPU (der Anzahl der Kerne) ab (siehe *Technische Fragen*) PS: Wenn die Auto-Berechnung abbricht, dann nur, wenn KD1 (GK-Kursdifferenz von 1) gefunden wurde oder eine Reduzierung der Differenz (beweisbar) nicht möglich ist. Es ist manchmal sehr schwer zu erkennen, warum eine weitere Reduzierung nicht möglich ist. In dem Fall würde ich empfehlen in der Liste der Kurse - die nach Kursdifferenz sortiert sind - nach der Fach-Art zu suchen, welche die höchste Kursdifferenz hat. Zur Klärung der Strategien: K = Fixiert zu ... % Kurse in ihren Schienen ausgehend von einer vorhandenen Lösung und versucht die GK-Kursdifferenz um 1 zu reduzieren. S = Fixiert zu ... % Schüler in ihren Kursen ausgehend von einer vorhandenen Lösung und versucht die GK-Kursdifferenz um 1 zu reduzieren. KS = K uns S gemischt. Die % - Anteile werden dynamisch schrittweise reduziert, wenn eine Berechnung keine Lösung gefunden hat. Findet eine Berechnung dagegen eine Lösung, fängt alles von vorne an (ausgehend von dieser Lösung), außer es wurde eine GK-Kursdifferenz von 1 erreicht.

**Vorhandene Blockungen erneut öffnen**

Eine z.B. mit Kurs42_to_CNF gerechnete Blockung laden, um sie z.B. mit der Autooptimierung zu verbessern:

- Import in CNF
- Abfrage "Alle Schüler/Kurse fixieren" bejahen
- Weite Einstellungen wählen
- Berechnen
- Das Ergebnis ist die bisherige Blockung, die nun weiter optimiert werden kann

Falls in Kurs42 schon geblockt wurde und diese Blockung (teilweise) bei Kurs42_to_CNF unangestatet bleiben soll, gibt es z.B. folgende Regel:

- Fixiere#Schiene und Teilnehmer#aller#LKs
- In diesem Beispiel wurden die LKs schon geblockt und werden nun in Kurs42_to_CNF nicht angetastet.

**Tipps zum Umgang mit Ordner- und Dateinamen**

Im Laufe des Blockungsvorgangs können, z.B. durch den Optimierungsvorgang, sehr viele Ergebnisse und damit sehr viele Unterordner entstehen. Es bietet sich an, die nicht benötigten immer wieder zu löschen und den Ordner mit einem guten Ergebniss umzubenennen und dabei einheitlich vorzugehen, z.B.

- 5SG_4UW_3KGD_SWnichtparallel

bedeutet, dieses Egebnis enthält 5 Stammgruppen, 4 Umwähler, eine Kursgrößendifferenz von 3 und die SoWi-Kurse liegen nicht parallel. Beim Import in Kurs könnte man diese Blockung unter gleichlautendem Namen abspeichern.

**Kurzerhand unterschiedliche Kurszahlen vergleichen**

Wenn es z.B. unklar ist, ob zwei oder drei Deutsch-Grundkurse eingerichtet werden können und man als Entscheidungshilfe beide Blockungsvarianten vergleichen möchte, könnte man entweder

1.  mit Kurs42 zwei Blockungen erstellen, einmal mit drei und einmal mit vier Grundkursen, diese jeweils exportieren und mit Kurs42_to_CNF blocken oder
2.  man erstellt in Kurs42 eine Blockung mit der höhere Kursanzahl (also drei), blockt diese in CNF und zum Vergleichen wendet man die Regel *Kurs#D-GK3#max. SuS (ignoriert Kursdifferenzen)#0* an. So steht der dritte Deutschkurs nicht zur Verfügung.

**Kurse über zwei Schinen verteilen**

- Kurs#TRVB-GK1#Schienenanzahl ist#2
- Kurs#TRVB-GK1#in Schiene#4
- Kurs#TRVB-GK1#in Schiene#5

**Huckepack-Leistungskurse blocken**

Für den seltenen Ausnahmefall, dass ein LK, z.B. Phyisk, nur als sog. Huckepack-Kurs eingerichtet werden kann, kann man so vorgehen:

- In Kurs42 wird eine Physik-Zusatzkurs eingerichtet.
- Die Schüler des Physik-LKs wählen auch den ZK.
- Der ZK muss parallel zum GK liegen: Kurs#PH-GK1#unbedingt zusammen mit#PH-ZK1

------------------------------------------------------------------------

**Weitere Tipps** Je mehr Sie fixieren, desto schneller ist das Programm. Aber in bestimmten Situationen sollten Sie Fixierungen vermeiden, wenn sie damit nur erreichen wollen, dass bestimmte Kurse zusammen liegen. Sollen z.B. Kurs A und B zusammen liegen und ebenso Kurs C und D und Sie legen nun Kurs A und B in Schiene 5 und Kurs C und D in Schiene 6, dann nehmen Sie dem Programm die Kombinationsmöglichkeit A, B, C und D in die selbe Schiene zu legen.

**Beispiel 1: Sie wollen, dass alle Deutsch-Kurse in Schiene 1 sind --\> fixieren** Fach-Art#D;GK#allein in Schiene (SuS optimal)#1

**Beispiel 2: Sie wollen, dass ER-GK1 und ER-GK2 nicht zusammen sind, da es nur eine Lehrkraft gibt** --\> nicht fixieren, sondern

- Kurs#ER-GK1#niemals zusammen mit#ER-GK2

oder besser

- Fach-Art#ER;GK#maximale Anzahl pro Schiene#1

**Beispiel 3: Sie wollen alle Religionskurse in einer Schiene, aber keine anderen Kurse --\> fixieren**

- Kurs#ER-GK1#in Schiene#6
- Kurs#ER-GK2#in Schiene#6
- Kurs#KR-GK1#in Schiene#6
- Kurs#PL-GK1#in Schiene#6
- Schiene#6#max. Kursanzahl#4

oder besser die zwei ER-Zeilen ersetzen durch:

- Fach-Art#ER;GK#in Schiene (SuS optimal)#6

**Beispiel 4: Sie wollen, dass bestimmte Kurse zusammen sind** --\> auf gar keinen Fall fixieren, sie nehmen sich potentielle Kombinationsmöglichkeiten, wenn Sie die Schiene festlegen, sondern:

- Kurs#S0-GK1#unbedingt zusammen mit#L0-GK1
- Kurs#S0-GK1#unbedingt zusammen mit#F0-GK1
- Kurs#S0-GK1#unbedingt zusammen mit#S8-GK1

**Beispiel 5: Sie wollen, dass bestimmte Kurse nicht zusammen sind,** z.B. weil ein Lehrer ggf. den zweiten Kurs übernehmen soll --\> auf gar keinen Fall fixieren, sondern:

- Kurs#MU-GK1#niemals zusammen mit#IF-GK1

**Beispiel 6: Sie wollen die LKs so setzen wie besprochen mit den KOOP-Schulen und LKs sollen getrennt werden von den GKs**. --\> fixieren:

- LKs allein von Schiene#1#bis Schiene#2
- Kurs#M-LK1#in Schiene#1
- Kurs#D-LK1#in Schiene#1
- Kurs#E5-LK1#in Schiene#1
- Schiene#1#max. Kursanzahl#3

(andere LKs dadurch automatisch in Schiene 2)

<a id="Best_Practice-Beispiele"></a>

## Best Practice-Beispiele

...

<a id="Technische_Fragen"></a>

## Technische Fragen

**Was sind Threads?**

<a id="Video-Tutorials"></a>

## Video-Tutorials

**[Video-Tutorial \#1](https://youtu.be/pBNSYI91eKc):**

[Video ansehen](https://www.youtube-nocookie.com/embed/pBNSYI91eKc)

1\) Vorbereitung in Kurs42 - Export der Blockung in Textdateien

2\) Grundeinstellungen in Kurs42_To_CNF

3\) Rechnungen durchführen

4\) Re-Import der Daten in Kurs42

---

Quelle: [Kurs42 To CNF:Hauptseite – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Kurs42+To+CNF%3AHauptseite&oldid=4591)
