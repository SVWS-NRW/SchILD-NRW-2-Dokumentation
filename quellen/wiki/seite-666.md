---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Erstellen einfacher Reports"
---

# Erstellen einfacher Reports

Gesicherte Wiki-Seite · Namensraum 0 · Version 4143 · Stand 2017-05-21.

[Lesbaren Artikel öffnen](/reporting/erstellung/erstellen-einfacher-reports) · [Originaldaten herunterladen](/dateien/quellen/seite-666.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
==Einfache Änderungen an bestehenden Reports vornehmen==

Beispiel aus der BASIC-Reportsammlung  [[http://www.svws.nrw.de/index.php?id=schildformulare]] verwenden --> Schriftart und –größe anpassen, Position verändern, Größe eines Textfeldes verändern

==Einstellungen im Report-Explorer==

Bevor Sie mit der Arbeit im Report-Explorer beginnen, wählen Sie zunächst die Schülermenge, z.B. eine Klasse aus, für die Sie den Report benutzen möchten.
Vorteil dieser Vorgehensweise ist es, dass Sie bei den Versuchen nur eine kleine Schülermenge im Zugriff haben und damit schneller das Ergebnis in der Vorschau sehen können. Haben Sie alle Schülerdaten im Zugriff, kann die Vorschau abhängig von der Komplexität des gewählten Reports recht lange dauern.

Sie haben den Report-Explorer aufgerufen. Im Menü '''Datei''' finden Sie den Menüpunkt '''Neuen Report erzeugen''' (Shortcut Strg + N), mit dem Sie eine leere Arbeitsfläche erzeugen können. Das Symbol [[Datei:Report-Neu-Symbol.png]] hat denselben Effekt.


[[Datei:Report-Neu-2.png|300px|links]]
 

Die leere Arbeitsfläche für den neuen Report öffnet sich in einem neuen Fenster. Je nach Einstellung kann dieses Fenster dreigeteilt sein.
Das Menü '''Ansicht''' bietet Möglichkeiten, die Fensterstruktur den eigenen Arbeitsgewohnheiten anzupassen. Dazu wählt man die Werkzeugleisten aus, die man sehen möchte.


[[Datei:Report-Neu-Werkzeugleisten.png|200px|center]]



Über den ''Berichtsbaum'' kann man sich orientieren, wo man sich innerhalb der Struktur eines Berichtes befindet. Diese Anzeige ist besonders bei komplexeren Reports hilfreich. Der ''Feldassistent'' ermöglicht ein einfaches Zugreifen auf die zur Verfügung stehenden Felder, die man im Report verwenden kann.


Ohne Auswahl einer Werkzeugleiste sieht das Fenster so aus:


[[Datei:Report-Neu-Ohne-WL.png|200px]] 



Schalten Sie bitte die Lineale an. So erleichtern Sie sich die Positionierung der einzelnen Elemente des Berichtes.

[[Datei:Report-Neu-Lineal.png|200px]]  
           

Als Maßeinheit wähle ich Millimeter. [[Datei:Report-Neu-mm.png|200px]] 



Für jeden Bericht lassen sich die Ränder einstellen. Der angezeigte Bereich ist dann der Bereich ohne die Ränder, d.h., man kann alle Felder ganz am Rand des sichtbaren Bereichs ausrichten. Wählen Sie '''Datei - Seite einrichten''', um die Einstellungen vorzunehmen.

[[Datei:Report-Neu-SeiteEinrichten.png|200px]] 

Beim Karteireiter '''Ränder''' können Sie die gewünschten Werte eingeben. 

[[Datei:Report-Neu-Raender.png|200px]]

<br> <br>

----

[[#top|Zum Seitenanfang]]

==Erstellen einer einfachen Liste mit dem Berichtsassistenten==

Wenn Sie ausgewählte Daten schnell und ohne weitere Wünsche an die Gestaltung in Listenform ausgeben möchten, können Sie sich diese mit Hilfe des Berichtsassistenten erzeugen. Die Handhabung entspricht dem Assistenten, den Sie auch bei Access finden.


Sie haben, wie im Abschnitt "Einstellungen im Report-Explorer" beschrieben, einen neuen Report geöffnet. Wählen Sie nun unter '''Datei''' den Menüpunkt '''Neu'''. Sie bekommen eine Auswahl an Berichtsassistenten für verschiedene Zwecke.

[[Datei:Assistent-Auswahl.png|200px]] 

Durch einen Doppelklick auf '''Berichtsassistent''' wählen Sie diesen aus. Nun können Sie aus einer Datenquelle - voreingestellt ''Schueler'' - durch einen Doppelklick beliebig viele Datenfelder für Ihre Liste auswählen.

[[Datei:Assistent-Datenfelder.png|200px]]

''Hinweis: Mit dem Berichtsassistenten kann man immer nur auf eine einzelne der zahlreichen SchILD-NRW-Datenquellen zugleich zugreifen. Für ganz einfache Listen und Formulare reicht das aber in der Regel aus.''


Über die Pfeile/Doppelpfeile wählen Sie die Felder, die auf dem Formular ausgedruckt werden sollen. Felder, die Sie versehentlich ausgewählt haben, entfernen Sie mit Hilfe der Rückpfeile.

[[Datei:Assistent-Uebersicht.png|200px]]

Die Reihenfolge der Felder kann durch Klick auf die Pfeiltasten nach oben/unten auch nachträglich festgelegt werden. Mit '''Weiter''' erhalten Sie eine Übersicht über die von Ihnen gewählten Felder. Sie dient zu Ihrer Information.
''Hinweis: Eine mögliche Gruppierung in der Ausgabe des Formulares macht an dieser Stelle wenig Sinn. Gezielter gruppieren kann man mit den Funktionen des Formulardesigners.''

[[Datei:Assistent-Layout.png|200px]]

Klicken Sie auf '''Weiter''' und legen Sie nun das Layout Ihres Berichtes fest. Die Option ''Feldbreiten anpassen, so dass ....'' sollte in den meisten Fällen angeklickt bleiben. Ggf. wählen Sie hier die Option ''Querformat''. Nach der Entscheidung für Tabelle und Hochformat klicken Sie bitte auf '''Weiter'''.


[[Datei:Assistent-Berichtsstil.png|200px]]

Nun kann noch ein Layoutstil ausgewählt werden und mit '''Weiter''' wird eine Druckvorschau angeboten.
''Hinweis: Die angebotenen Layoutstile sind sicherlich für den Schulgebrauch nur bedingt brauchbar. Sie lassen sich allerdings im anschließenden Bearbeitungsmodus in jeder Form modifizieren. Hierzu wechseln Sie nach dem Fertigstellen des Berichtsassistenten zur Karteikarte Entwurf.''

Mit '''Fertigstellen''' wird der Bericht mit der ausgewählten Schülermenge gefüllt und kann über das Druckersymbol oder - nach Wechsel auf den Karteireiter ''Entwurf'' - über das Menü '''Datei''' – '''Drucken''' ausgedruckt werden. 

[[Datei:Assistent-Vorschau.png|200px]]

Über '''Datei''' – '''Speichern''' unter kann das Formular unter einem von Ihnen gewählten Dateinamen in einem von Ihnen gewählten Verzeichnis abgespeichert werden.

<br> <br>

==Erstellen einer einfachen Liste==

Zum Erstellen einer einfachen Liste "zu Fuß", d.h. ohne den Berichtsassistenten zu verwenden, sollten auch zunächst die vorbereitenden Einstellungen vorgenommen werden. <br/>Der leere Bericht ist in drei Teile gegliedert: Kopf, Detailbereich und Fuß. Kopf und Fuß werden pro Seite einmal gedruckt, während im Detailbereich der eigentliche Bericht erzeugt wird.


'''Erstellen einer einfachen Anwesenheitsliste einer Klasse'''

Bevor Sie sich an die Erstellung der Liste machen, prüfen Sie, ob Sie die richtigen Daten im Zugriff haben. Im Menü Bericht gibt es den Menüpunkt '''Datenquellen…''', standardmäßig ist hier die Datenquelle ''Schueler'' ausgewählt. Für eine Klassenliste ist das die richtige Datenquelle.

In der Liste sollen nun Name und Vorname der Schüler angezeigt werden. 

Klicken Sie dazu zunächst auf das Symbol für ein DBText-Feld [[Datei:Report-Neu-DBText-1.png]] und klicken Sie dann in den Detailbereich, es erscheint ein DBText-Feld. Dieses DBText-Feld können Sie nun an die gewünschte Position schieben. <br>
[[Datei:Report-Neu-DBText-2.png|200px]] 


Haben Sie die Werkzeugleiste ''Bearbeiten'' aktiv geschaltet?

Wenn Sie nun auf das DBText-Feld klicken, wird in der Werkzeugleiste ''Bearbeiten'' die ausgewählte Datenquelle ''Schueler'' angezeigt. Das Feld daneben ist noch leer.


[[Datei:Report-Neu-DBText-3.png|200px]]
 

Jetzt wählen Sie das passende Datenfeld aus, hier: '''NameVorname'''
 


Mit Hilfe des Kontextmenüs (rechte Maustaste) vom DBText-Feld können Sie Anpassungen vornehmen, beispielsweise die automatische Größenanpassung des Feldes ermöglichen. Damit werden lange Namen auch ganz angezeigt.

Sehen Sie sich das Ergebnis in der Vorschau an. Dazu klicken Sie auf den Karteireiter '''Vorschau'''.

 
Sie sollten eine Liste mit den Namen der Schüler erhalten, die Sie vorher ausgewählt hatten.

[[Datei:Report-Neu-Vorschau-1.png|200px]]
 
In der Entwurfsansicht können Sie die Liste mit weiteren Datenbankfeldern ergänzen.

Um der Liste eine Überschrift hinzuzufügen, setzen Sie in den Kopf-Bereich (das Kopfband) des Berichtes ein einfaches Label [[Datei:Report-Neu-Label-Symbol.png]], z.B. "Adressenliste der Schüler".

[[Datei:Report-Neu-Label.png|200px]]

Unter die Kopfzeile können Sie eine Linie [[Datei:Report-Neu-Linie.png]] einfügen, die die Überschrift optisch abtrennt. Natürlich können auch Linien im Detailbereich hinzugefügt werden, die die Liste gliedern. Wenn Sie eine Linie eingefügt haben, können Sie in der Symbolleiste einstellen, ob die Linie oben, unten, links oder rechts im aufgezogenen Feld sein soll. Diese Auswahlliste finden Sie neben der Auswahlliste für Schriftgröße und Schriftart. Zusätzlich können Sie im Kontextmenü der Linie (Klick auf die rechte Maustaste) auswählen, ob die Linie über die Breite der Stammkomponente (hier: Seitenbreite ohne Rand) gehen soll.

[[Datei:Report-Neu-Linie-Kontext.png|200px]]
 

Die Liste sähe dann so aus:

[[Datei:Report-Neu-Vorschau-2.png|200px]]

Im Fußbereich können Systemvariablen [[Datei:Report-Neu-Systemvariable.png]] ausgewertet werden, damit kann man beispielsweise den Dateinamen oder das Druckdatum einfügen. 

[[Datei:Report-Neu-Systemvariable-Auswahl.png|200px]]


Vorschau der gesamten Liste:

[[Datei:Report-Neu-Vorschau-3.png|200px]]

==Schulkopf in ein Formular einbinden==

Viele Listen und Briefe sollten denselben Schulkopf bekommen. Möglicherweise unterscheidet man zwischen einem internen Schulkopf und einem Schulkopf für die verschiedenen Schreiben. 
Die benötigten Köpfe können einmal gestaltet werden und dann in die verschiedenen Formulare eingebunden werden. Als Grundlage finden Sie in der Basis-Reportsammlung verschiedene Schulköpfe, die Sie einsetzen können.

Beispiel: Schulkopf-einfach.rtm

[[Datei:Report-Header-SchulkopfEinfach.png|200px]] 


Ein Kopf (oder auch ein Fuß) ist im Grunde ein normaler Report, der im Ordner Header_Footer gespeichert wird.

[[Datei:Report-Header-Struktur.png|200px]] 

So ein Kopf-Report besteht dabei nur aus dem  Detailbereich, Kopf und Fuß des Berichtes sind nicht aktiviert.

[[Datei:Report-Header-Einstellung.png|200px]] 


Um den Schulkopf einzubinden, rufen Sie eine schon vorhandene Liste auf. Die im obigen Kapitel erstellte Geburtstagsliste enthält im Kopfbereich  ein Label "Geburtstagsliste". Über diesem Namen der Liste soll nun noch der Schulkopf eingefügt werden.

[[Datei:Report-Header-ohneSubreport.png|200px]] 

Dazu vergrößern Sie den Kopfbereich auf etwa das Maß, das Sie für den Kopf benötigen. Schieben Sie das Label und die Linie an den unteren Rand des Kopfbereiches. (Wenn Sie in den freien Bereich mit der linken Maustaste klicken und die Maustaste gedrückt halten, dann den Mauszeiger über beide Elemente bewegen, können Sie die Elemente gemeinsam markieren. Beim anschließenden Verschieben bleibt der Abstand zwischen den Elementen bestehen.) 


''Hinweis: Sie können die einzelnen Arbeitsbereiche des Formulars in der Größe beliebig anlegen. Fahren Sie dazu mit der Maus über das geöffnete Formular im Entwurfs-Modus. Sowie Sie die graue Trennungszeile zwischen den einzelnen Formularbereichen berühren, wandelt sich der Mauszeiger in einen oben/unten-Pfeil und Sie können mit gedrückter Maustaste den entsprechenden Bereich nach unten vergrößern bzw. nach oben verkleinern oder sogar unsichtbar machen.''


Wählen Sie in der Symbolleiste das Symbol [[Datei:Report-Header-dynSubreport.png]] für einen dynamisch ladbaren Subreport aus und klicken Sie dann in den freien Kopfbereich, um das Feld für den Subreport einzufügen. Öffnen Sie nun das Kontextmenü des Subreports (Rechte Maustaste) und wählen Sie den passenden Schulkopf aus: '''Subreport-Datei wählen ...''' Es öffnet sich das Report-Verzeichnis Header_Footer, aus dem Sie die gewünschte Datei auswählen können.

[[Datei:Report-Header-mitSubreport.png|200px]] 

Wählen Sie die Vorschau und lassen Sie sich das Formular anzeigen.

[[Datei:Report-Header-Vorschau.png|200px]] 

Speichern Sie im Entwurfsmodus das Formular in einem Verzeichnis Ihrer Wahl ab.

==Erstellen eines einfachen Briefes==

--> Brief oder Bescheinigung erstellen




==Zeilenzählungen (DBCalc) einfügen==



==Gruppierung von Listenausdrucken==
Um bestimmte Inhalte (z.B.: Klassen, Geburtsjahrgänge, m/w u.a.) zusammenzuhalten, werden über ''Entwurf / Bericht / Gruppen'' [Strg+G] Gruppen definiert. Dabei können beliebig viele Gruppierungsebenen genutzt werden. Beispiele hierfür sind vor allem Klassen- oder Kurslisten bzw. Übersichten für die Bundesjugendspiele etc.

===Dialog Gruppen===
[[Datei:Gruppen_001.jpg|links]]

1. Gruppe hinzufügen / einfügen (das Ergebnis ist ähnlich)

2. Umbruch (Gruppierungsebene) bei
   - ''Datenfeld'', d.h. aus den zur Verfügung stehenden Datenfeldern der Datenquelle (hier Schueler);
   - ''Benutzerdefiniertes Feld'', d.h. aus den aktiven Feldern der Report-Datei.

3. Bei Gruppenwechsel
   - ''Neue Seite beginnen'' = ja z.B. bei Klassen, wenn jede Klasse einen eigenen Ausdruck bekommen soll;
   - ''Neue Seite beginnen'' = nein z.B. wenn innerhalb einer Klasse nach m/w getrennt wird;

   - ''Seitennummerierung zurück'' = fängt immer neu an zu zählen

   - ''Start on odd page'' = beginnt auf ungerader Seite neu, '''wichtig für Duplexdruck'''!

   - ''Gruppe zusammenhalten'' = wenn z.B. innerhalb der Daten eines Schülers ein Seitenumbruch 
     verhindert werden soll
   - ''Prevent Orphans'' (habe ich noch nie genutzt, weiß da jemand etwas drüber???)
   - ''Gruppenkopf bei ...'' = wichtig für Listen, wenn z.B. Tabellenüberschriften 
     auf den folgenden Seiten erneut gedruckt werden sollen. 
     Allerdings müssen dies dann auch in den entsprechenden Gruppenkopf im Entwurf eingetragen sein!

==Verwendung von Unterberichten (SubReports)==
z.B. zur Ausgabe aller Telefonnummern eines Schülersin

''Unterbericht'' einfügen über entsprechende Auswahl in der Symbolleiste (siehe unten)
[[Datei:Unterbericht_002.png]]

Nicht verwechseln mit ''Dynamisch ladbarer SubReport''!

  Wichtig! Unterberichte funktionieren nur, wenn eine ''abhängige Datenquelle'' genutzt wird.
  Informationen und Übersicht hierzu im ReportDesigner / Info zu Datenquellen
[[Datei:Unterbericht_004.png]]
===Wichtige Anpassungen der Standardeinstellungen===
1. ''Breite der Stammkomponente'': Wenn der Unterbericht nicht über die gesamte Report-Breite verlaufen soll  über rMt / Breite der Stammkomponenten / deaktivieren

2. ''Titel'': i.d.R. deaktivieren über Bericht / Titel / deaktivieren

3. ''Zusammenfassung'' wie Titel

Ansonsten kann ein Unterbericht wie ein normaler Report bearbeitet werden.

==Einfache Programmierung von Text- und Datenbankfeldern==
z.B. Einfügen der korrekten Anrede „Herr..“ oder „Frau..“ bzw. „Klassenlehrer“ oder Klassenlehrerin“ in Abhängigkeit vom Geschlecht der Personen


==Anpassen von Kreuztabellen==

Für statistische Abfragen eignen sich Kreuztabellen, die auch im Reportgenerator zur Verfügung stehen. In der Basic-Sammlung [[http://www.svws.nrw.de/index.php?id=schildformulare]] gibt es im Ordner '''A3_Statistik (Kreuztabellen) für die Schule''' das Formular '''Statistik_Religion mw.rtm'''. Für jede Klasse werden die verschiedenen Religionszugehörigkeiten der Schüler summiert und aufgelistet.


[[Datei:Kreuztabelle-Religion1.png|200px]]


Voraussetzung für eine lesbare Liste ist, dass der Katalog der verschiedenen Religionen gepflegt ist. Unterscheidet man zwischen z.B. zwischen katholisch und römisch-katholisch, so wird jede Kategorie getrennt aufgeführt. Wie im obigen Beispiel zu sehen ist, passt dadurch die Liste nicht mehr auf eine DIN-A4-Seite im Hochformat.

Wenn die Schüler mehr verschiedenen Religionen angehören, als auf die Seite passt, können Sie die Liste im Querformat erzeugen. Rufen Sie dazu das Formular '''Statistik_Religion mw.rtm''' zum Bearbeiten auf und wählen Sie den Menüpunkt ''Datei --> Seite einrichten''. Auf dem Karteireiter ''Papiergröße'' wählen Sie dann das Querformat aus.

[[Datei:Kreuztabelle-CrossTab2.png|200px]]

Wechseln Sie nun in die Entwurfsansicht. Im Detailbereich des Reports finden Sie das Feld ''CrossTab2:Schueler'', welches die eigentliche Kreuztabelle enthält.  Vergrößern Sie dieses Feld bis zum rechten Seitenrand, indem Sie es an der rechten Seite mit der gedrückten linken Maustaste größer ziehen. Speichern Sie die Änderungen und rufen Sie das Formular nun erneut auf, um die Tabelle zu überprüfen. Befindet sich ganz rechts eine Spalte mit der Gesamtsumme? Wenn nicht, dann sind es zu viele Spalten oder zu breite Spalten für die Seitenbreite. Vergeben Sie ggf. sinnvolle Abkürzungen im Katalog der Religionszugehörigkeiten.

[[Datei:Kreuztabelle-Uebersicht.png|200px]]



Öffnen Sie das Formular in der Entwurfsansicht. Im Kontextmenü des Feldes ''CrossTab2:Schueler'' finden Sie den Menüpunkt ''Konfigurieren...''.

[[Datei:Kreuztabelle-konfigurieren.png|200px]]

Es öffnet sich ein weiteres Fenster, in dem die Kreuztabelle eingerichtet werden kann. Einzelne Felder aus der Übersicht (links im Fenster) können den Zeilen und Spalten durch Ziehen mit der Maus an die gewünschte Stelle hinzugefügt werden. Benötigt man ein Feld nicht mehr, kann es aus der Kreuztabelle wieder zurück in die Übersicht geschoben werden.

[[Datei:Kreuztabelle-einrichten.png|200px]]
 
Für jedes Feld kann man im Kontextmenü u.a. bestimmen, ob das Feld sichtbar sein soll oder nicht. In der Symbolleiste kann man beispielsweise die Sortierung festlegen. Wenn man  das Feld ''ReligionAbk'' anklickt, erkennt man, dass hier die alphabetische Reihenfolge vorgegeben ist. Entfernt man diese Sortierung, hängt die Reihenfolge der Religionszugehörigkeiten davon ab, wie sie in den Schülerdaten vorkommen.

In der vorgegebenen Version der Kreuztabelle werden die Spaltenüberschriften nur auf der ersten Seite angedruckt. Die wiederholten Überschriften auf jeder neuen Seite erhält man, wenn man in der Entwurfsansicht mit der rechten Maustaste auf das Feld ''CrossTab2:Schueler'' klickt und dann den Menüpunkt ''Layout'' wählt. Hier kann man statt ''Standard'' die ''Wiederholende Beschriftung'' auswählen.

[[Datei:Kreuztabelle-Layout.png|200px]]










----

[[#top|Zum Seitenanfang]]

[[Reporting|Zurück zu Reporting]]
```
