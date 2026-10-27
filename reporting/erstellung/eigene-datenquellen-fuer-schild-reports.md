---
title: "Eigene Datenquellen für Schild-Reports"
wiki_title: "Eigene Datenquellen für Schild-Reports"
wiki_page_id: 929
wiki_revision: 3527
---

# Eigene Datenquellen für Schild-Reports

<a id="Einleitung"></a>

## Einleitung

Zur Nutzung von eigenen Datenquellen in der Reportverwaltung von Schild-NRW wurde ein Verfahren eingeführt, das es dem Nutzer ermöglicht, spezielle, für einen Report benötigte Datenquellendynamisch zu erstellen und diese dann auch an andere Schild-Installationen weiterzugeben, ohne dass die Datenquellen im Report immer wieder neu angelegt werden müssen.

Außerdem besteht mit dieser Lösung eine Möglichkeit, auch für Schild-Zentral eigene Datenquellen zu nutzen. Die jeweiligen Datenquellen-Dateien müssen dann nur nach einer Sicherheitsüberprüfung von den jeweiligen IT-Administratoren in die Schild-Umgebung kopiert werden.

<a id="Einrichtung"></a>

## Einrichtung

Erstellen Sie zunächst ein Verzeichnis **Schild-Pipelines** in Ihrem Schild-NRW-Installationsordner.

![SPD-01](/bilder/wiki/spd-01-a6dc31f2.png)

In diesen Ordner werden die Datenquellen-Dateien gespeichert.

Es handelt sich dabei um einfache Textdateien mit der Dateiendung **\*.SPD**.

<a id="Aufbau_der_Datenquellen-Dateien_(*.SPD)"></a>
<a id="Aufbau_der_Datenquellen-Dateien_.28.2A.SPD.29"></a>

## Aufbau der Datenquellen-Dateien (\*.SPD)

![SPD-02](/bilder/wiki/spd-02-f562b9b8.png)

**\[Queries\]**

Hier werden alle neu zu definierenden Abfragen mit dem Namenszusatz *\_\_qry\*\*\** aufgelistet.

**\[Query\_\_qryNamederAbfrage\]**

Da dieser Name programmintern eindeutig sein muss, gilt die Konvention, dass \_\_qry\*\*\* im Programmcode nicht benutzt wird, so dass keine Namenskollisionen entstehen können, wenn dieses Präfix genutzt wird.

Der *InitCommand*-Befehl initialisiert die Abfrage und setzt die Namen der zur Verfügung stehenden Felder im Reportexplorer fest.

Die Befehle *Command1* und folgende setzen den SQL-Abfrage-String auf die Datenbank zusammen. Die Zusammensetzung aus Command1 + Command2 usw. wurde aus Übersichtsgründen erstellt. Der Befehl kann also auch in einen einzigen Command1-Befehl gesetzt werden.

Mit dem Platzhalter \$Schulnr\$ kann die Schulnummer der DB abgefragt werden. (Wichtig für Schild-Zentral.)

Mit dem Befehl *Mastersource=Schueler.Datasource* kann eine übergeordnete Datenquelle angegeben werden. Dies ist über den Abfrageassistenten im Report-Designer nicht so einfach möglich.Der Datenquellenname (hier Schueler) muss in der Reporting bereits existieren. Also entweder als feste Datenquelle oder in einer SPD-Datei, die vorher schon abgearbeitet wurde. Dies kann über die alphabetische Sortierung der SPD-Dateinamen geregelt werden.

![SPD-03](/bilder/wiki/spd-03-ddeb2f3a.png)

Die Übergabe des Mastersource-Parameters erfolgt über den Befehl A.Schueler_ID=:ID, wobei über den Doppelpunkt :NamedesFeldesinderMasterSource die Koppelung geregelt wird.

**\[Datasource\_\_qryNamederAbfrage\]**

Hier wird die Datenquelle mit dem Befehl Name=\_\_dsNamederAbfrage erzeugt.

**\[Pipeline\_\_qryNamederAbfrage\]**

Über *Name=\_\_pplnNamederQuelle* wird dann die eigentliche Datenpipeline erzeugt. Die Befehle *Opendatasource*, *CloseDatasource* und *SkipWhenNoRecords* entnehmen Sie bitte den Beispieldateien.

*Username=xxNamederDatenQuelle* stellt den eigentlichen Namen bereit, den der User später im Reportdesigner zu sehen bekommt.

![SPD-04](/bilder/wiki/spd-04-7b741041.png)

Die Zeilen geführt von einem Semikolon werden als Kommentarzeilen interpretiert.

:::danger
Die Datenquellendateien (SPD) und die zugehörigen Formulare können dann gemeinsam verteilt werden.

Bitte beachten Sie, dass bei der Verteilung der SPD-Dateien ein Schreibzugriff auf das Schild-NRW-Installationsverzeichnis benötigt wird.
:::

:::example
In der beiliegenden ZIP-Datei sind zwei Beispiele für solche dynamisch erstellte Datenquellen enthalten: **<a href="/dateien/wiki/spd-dateien-176ffe85.zip" class="internal" title="SPD Dateien.zip">Medium:SPD_Dateien.zip</a>**
:::

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-929) · [Eigene Datenquellen für Schild-Reports – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Eigene+Datenquellen+f%C3%BCr+Schild-Reports&oldid=3527)
