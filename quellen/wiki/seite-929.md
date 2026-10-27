---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Eigene Datenquellen für Schild-Reports"
---

# Eigene Datenquellen für Schild-Reports

Gesicherte Wiki-Seite · Namensraum 0 · Version 3527 · Stand 2015-09-07.

[Lesbaren Artikel öffnen](/reporting/erstellung/eigene-datenquellen-fuer-schild-reports) · [Originaldaten herunterladen](/dateien/quellen/seite-929.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
== Einleitung ==

Zur Nutzung von eigenen Datenquellen in der Reportverwaltung von Schild-NRW wurde ein Verfahren eingeführt, das es dem Nutzer ermöglicht, spezielle, für einen Report benötigte Datenquellendynamisch zu erstellen und diese dann auch an andere Schild-Installationen weiterzugeben, ohne dass die Datenquellen im Report immer wieder neu angelegt werden müssen.

Außerdem besteht mit dieser Lösung eine Möglichkeit, auch für Schild-Zentral eigene Datenquellen zu nutzen. Die jeweiligen Datenquellen-Dateien müssen dann nur nach einer Sicherheitsüberprüfung von den jeweiligen IT-Administratoren in die Schild-Umgebung kopiert werden.

== Einrichtung ==

Erstellen Sie zunächst ein Verzeichnis '''Schild-Pipelines''' in Ihrem Schild-NRW-Installationsordner.

[[Datei:SPD-01.png]]

In diesen Ordner werden die Datenquellen-Dateien gespeichert.

Es handelt sich dabei um einfache Textdateien mit der Dateiendung '''*.SPD'''.

== Aufbau der Datenquellen-Dateien (*.SPD) ==

[[Datei:SPD-02.png |450px |left ]]'''[Queries]'''

Hier werden alle neu zu definierenden Abfragen mit dem Namenszusatz ''__qry***'' aufgelistet.

'''[Query__qryNamederAbfrage]'''

Da dieser Name programmintern eindeutig sein muss, gilt die Konvention, dass __qry*** im Programmcode nicht benutzt wird, so dass keine Namenskollisionen entstehen können, wenn dieses Präfix genutzt wird.

Der ''InitCommand''-Befehl initialisiert die Abfrage und setzt die Namen der zur Verfügung stehenden Felder im Reportexplorer fest.

Die Befehle ''Command1'' und folgende setzen den SQL-Abfrage-String auf die Datenbank zusammen. Die Zusammensetzung aus Command1 + Command2 usw. wurde aus Übersichtsgründen erstellt. Der Befehl kann also auch in einen einzigen Command1-Befehl gesetzt werden.

Mit dem Platzhalter $Schulnr$ kann  die Schulnummer der DB abgefragt werden. (Wichtig für Schild-Zentral.)

Mit dem Befehl ''Mastersource=Schueler.Datasource'' kann eine übergeordnete Datenquelle angegeben werden. Dies ist über den Abfrageassistenten im Report-Designer nicht so einfach möglich.Der Datenquellenname (hier Schueler) muss in der Reporting bereits existieren. Also entweder als feste Datenquelle oder in einer SPD-Datei, die vorher schon abgearbeitet wurde. Dies kann über die alphabetische Sortierung der SPD-Dateinamen geregelt werden.

[[Datei:SPD-03.png |300px | right ]]
Die Übergabe des Mastersource-Parameters erfolgt über den Befehl A.Schueler_ID=:ID, wobei über den Doppelpunkt  :NamedesFeldesinderMasterSource die Koppelung geregelt wird.


'''[Datasource__qryNamederAbfrage]'''

Hier wird die Datenquelle mit dem Befehl Name=__dsNamederAbfrage erzeugt.


'''[Pipeline__qryNamederAbfrage]'''

Über ''Name=__pplnNamederQuelle'' wird dann die eigentliche Datenpipeline erzeugt.
Die Befehle ''Opendatasource'', ''CloseDatasource'' und ''SkipWhenNoRecords'' entnehmen Sie bitte den Beispieldateien.



''Username=xxNamederDatenQuelle'' stellt den eigentlichen Namen bereit, den der User später im Reportdesigner zu sehen bekommt.

[[Datei:SPD-04.png |300px ]]


Die Zeilen geführt von einem Semikolon werden als Kommentarzeilen interpretiert.



{{Achtung|Die Datenquellendateien (SPD) und die zugehörigen Formulare können dann gemeinsam verteilt werden.

Bitte beachten Sie, dass bei der Verteilung der SPD-Dateien ein Schreibzugriff auf das Schild-NRW-Installationsverzeichnis benötigt wird.}}

{{Beispiel|In der beiliegenden ZIP-Datei sind zwei Beispiele für solche dynamisch erstellte Datenquellen enthalten: '''[[Medium:SPD_Dateien.zip]]'''}}



----

[[#top|Zum Seitenanfang]]

[[Schild-NRW-Tutorials|Zurück zur Schild-NRW-Tutorials]]
```
