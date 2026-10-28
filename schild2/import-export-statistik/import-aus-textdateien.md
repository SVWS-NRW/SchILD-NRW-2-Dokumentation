---
title: "Import aus Textdateien"
---

# Import aus Textdateien

![ExternImport1](/bilder/schild2/import-export-statistik/externimport1.jpg)

Der Menüpunkt *Import aus Textdateien* steht Ihnen nur zur Verfügung, wenn das Programm ExternImport.exe aus der Tools-Sammlung installiert wurde. (Das Programm muss sich im Installationsverzeichnis von Schild-NRW befinden.)

Nach dem Aufruf des Menüpunktes werden Sie ggf. aufgefordert, erneut die Zieldatenbank auszuwählen und Benutzernamen und Passwort einzugeben.

Der Externe-Text-Import ermöglicht es Ihnen, einzelne Datenfelder zu importieren und nicht immer alle Felder der Schnittstelle nutzen zu müssen.

**Wichtig:** Auch bei diesem Import werden die Schüler an den Feldern "Name, Vorname und Geburtsdatum" identifiziert. Diese Datenfelder müssen also mindestens in Ihrer Textdatei vorhanden sein!

Nach dem Start des Programms steht Ihnen diese Oberfläche zur Verfügung:

![ExternImport2](/bilder/schild2/import-export-statistik/externimport2.jpg)

An dieser Stelle können Sie jederzeit den "Hilfe"-Button benutzen, hier erhalten Sie auch noch einmal Informationen zum Textimport.

Wählen Sie über das Ordner-Symbol eine Importdatei aus. Bei dieser Datei muss es sich um eine Textdatei im ANSI- oder Unicode-Format handeln. Es ist zu empfehlen, hier das Semikolon als Trennzeichen zu wählen. Dies kann aber auch verändert werden.

Danach wählen Sie ein Importschema. Sollte noch kein Importschema vorhanden sein, dann können Sie durch einen Klick auf "Datei" ein neues Schema anlegen oder vorhandene Schemata importieren bzw. exportieren. (Damit ist auch die Weitergabe von Import-Schemata möglich.) Wenn Sie ein Schema ausgewählt haben, wird der Button "Bearbeiten" aktiv. Nun können Sie beginnen, die einzelnen Felder im Schema zuzuordnen.

Jede Import-Datei muss mit einem Import-Schema verknüpft werden. Ein Import-Schema kann als eine Sammlung von Vorschriften angesehen werden, die alle zum Import notwendigen Informationen (z.B. die Reihenfolge der Felder, Art des Trennzeichens usw.) enthält. Dabei kann ein Import-Schema auch für eine beliebige Anzahl von Import-Dateien verwendet werden, vorausgesetzt, deren Aufbau ist identisch. Wenn Sie z.B. jährlich Schülerdaten vom Einwohnermeldeamt immer im gleichen Format erhalten, brauchen Sie das notwendige Import-Schema nur einmal anzulegen. Ohne zugehöriges Import-Schema können keine Daten importiert werden.

Um ein Import-Schema anzulegen, benötigen Sie zuallererst eine Import-Datei.

![ExternImport4](/bilder/schild2/import-export-statistik/externimport4.jpg)

Ordnen Sie hier die gewünschten Felder zu, indem Sie in die Spalte klicken und dann aus der Liste der "Felder zu aktueller Tabellenspalte" das Datenfeld in Schild-NRW wählen.

**Zuordnungstabellen bearbeiten**

Falls in Ihrer Import-Datei auch Angaben über die Staats- und Religionszugehörigkeit der Schüler oder über die Erzieher-Art (außerdem Länderbezeichnungen, Fachklassen am BK, Schulformen, Abschlüsse, Organisationsformen, Schulnamen und Verkehrssprachen) vorhanden sind, so werden in der Regel die dort verwendeten Bezeichnungen nicht mit den entsprechenden Bezeichnungen in der Datenbank von SchILD-NRW übereinstimmen. Um dennoch auch für diese Daten einen korrekten Import zu ermöglichen, können Zuordnungstabellen angelegt werden. Eine Zuordnungstabelle enthält zum einen die jeweilige Angabe aus der Import-Datei, zum anderen die zugehörige Bezeichnung in der Datenbank von SchILD-NRW.

Um die Zuordnungstabellen zu bearbeiten, aktivieren Sie den Schalter **Zuordnungstabellen bearbeiten** im Fenster "Import-Schema definieren".

Am Beispiel der Staatsangehörigkeiten soll das Vorgehen erläutert werden.

Angenommen, in Ihrer Import-Datei ist für die Staatsangehörigkeit der Schüler das entsprechende Kfz-Länderkennzeichen eingetragen. Da SchILD-NRW eine andere Verschlüsselung für diese Information verwendet, ist eine direkte Übernahme dieser Information beim Import nicht möglich. Wenn Sie aber in der Zuordnungstabelle Länderbezeichnungen eine entsprechende Verknüpfung herstellen, so können die Daten dennoch übernommen werden. Die rechte Spalte der Zuordnungstabellen enthält alle in SchILD-NRW "bekannten" Einträge. Wenn Sie nun in der linken Spalte der Zuordnungstabelle die jeweilige Bezeichnungen aus Ihrer Import-Datei eintragen (in diesem Fall also das Kfz-Kürzel), kann beim Import eine Transformation auf die internen Bezeichnungen von SchILD-NRW durchgeführt werden. Dies gilt sinngemäß auch für die Religionszugehörigkeit und die Erzieher-Art.

Für jedes Import-Schema wird ein eigener Satz von Zuordnungstabellen erzeugt.

------------------------------------------------------------------------


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-260) · [Import aus Textdateien – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Import+aus+Textdateien&oldid=1126)
