---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Deutschförderung nach BASS 13-63 Nr. 3 (Stand 29.08.2024)"
---

# Deutschförderung nach BASS 13-63 Nr. 3 (Stand 29.08.2024)

Gesicherte Wiki-Seite · Namensraum 0 · Version 5986 · Stand 2024-08-30.

[Lesbaren Artikel öffnen](/schild2/schueler/deutschfoerderung-nach-bass-13-63-nr-3-stand-29-08-2024) · [Originaldaten herunterladen](/dateien/quellen/seite-1429.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Eintragungen für Schülerinnen und Schüler mit Deutschförderung nach BASS 13-63 Nr. 3 

Für die Erhebung der amtlichen Schuldaten wurde zur Kennung von Schülerinnen und Schülern mit Deutschförderung ein neuer Schlüssel DF für die Klassenart definiert. Die Eintragungen in SchILD-NRW müssen entsprechend angepasst werden, um die Daten fehlerfrei nach ASDPC zu importieren:

Alle Schülerinnen und Schüler, die an einer Deutschförderung  nach BASS 13-63 Nr. 3 teilnehmen, erhalten als Klassenart Deutschförderung (ohne Bildungsgangzuordnung, BASS 13-63 Nr. 3) mit dem Schlüssel DF unabhängig davon, ob sie in einer Deutschförderklasse oder einer Regelklasse unterrichtet werden.

== Schritt 1: Klassenart Deutschförderung für den aktuellen Abschnitt anpassen ==
Tragen Sie für alle Deutschförderschüler ( nach BASS 13-63 Nr. 3 ) die Klassenart Deutschförderung ein.


====Möglichkeit 1: Für jeden Schüler separat unter Individualdaten I====


[[Datei:DFKlassenart1.png|600px|thumb|center|Hinweis: Im Screenshot sieht man, dass die Schülerin Birgit trotz Deutschförderung in eine Regelklasse geht. Dies ist zulässig.]]


Alternativ kann der Eintrag auch im aktuellen Halbjahr/ Allgemeine Angaben angepasst werden. 


====Möglichkeit 2: Über einen Gruppenprozess====
Sind viele Schülerinnen und Schüler von der Änderung betroffen, kann man dies auch mit einem Gruppenprozesse realisieren. Unter Gruppenprozess/Individualdaten ändern/Individualdaten I kann die Klassenart für eine Gruppe von Schülerinnen und Schülern angepasst werden. Diese Änderung wird nur für den aktuellen Abschnitt durchgeführt, sofern keine weiteren Angaben erfolgen.
[[Datei:DFKlassenartGP.png|800px|thumb|center|Klassenart mit Hilfe eines Gruppenprozesses anpassen.]]


== Schritt 2: Was war mit dem Deutschförder-Schüler im letzten Schuljahr? ==

=== Fall 1: Der Deutschförderschüler war bereits im letzten Schuljahr auf derselben Schule ===
Für diesen Fall muss auch für den vorangegangenen Abschnitt die Klassenart auf "Deutschförderung" gesetzt werden. Wenn diese Anpassung im letzten Abschnitt nicht durchgeführt wurde, muss diese nachträglich wie folgt korrigiert werden


'''Möglichkeit 1: Separat für jeden Schüler unter aktuelles Halbjahr'''

Unter aktuelles Halbjahr/Allgemeine Angaben kann man für vorherige Abschnitte die Klassenart ändern:

[[Datei:DFVorherigerAbschnitt.png|800px|thumb|center|Klassenart im vorangegangenem Abschnitt anpassen.]]

Hinweis: Sollte diese Anpassung nicht erfolgt sein und die Schülerdaten wurden bereits in ASDPC importiert und bearbeitet, kann dies auch unmittelbar in ASDPC korrigiert werden (siehe [[#Daten in ASDPC nachpflegen|hier]]).


'''Möglichkeit 2: Änderung der Klassenart im vergangenen Abschnitt über einen Gruppenprozess'''

Unter Gruppenprozesse/Allgemeines/Individualdaten ändern/Lernabschnitte kann der vorherige Lernabschnitt ausgewählt werden für den die Klassenart geändert werden soll:
[[Datei:DFVorherigerAbschnittGP.png|800px|thumb|center|Klassenart im vorangegangenem Abschnitt für mehrere Schüler anpassen.]]


=== Fall 2: Der Schüler kam von einer anderen deutschen Schule ===
In diesem Fall gibt es für den Schüler keinen vorherigen Abschnitt in SchILD. Informationen zur Herkunft des Schülers müssen unter Schulbesuch korrekt eingetragen werden:
[[Datei:DFSchulbesuchG.png|800px|thumb|center|Eintrag für den Schulbesuch.]]


Hinweis: Prüfen Sie ggf., ob der Migrationshintergrund korrekt eingetragen wurde. Insbesondere darf das Zuzugsjahr nicht fehlen.
[[Datei:Migrationshintergrund.png|800px|thumb|center|Eintrag für den Migrationshintergrund.]]


=== Fall 3: Der Schüler ist aus dem Ausland in diesem Schuljahr zugezogen ===
Analog zum zweiten Fall muss auch hier der Reiter Schulbesuch korrekt gepflegt werden:

[[Datei:DFSchulbesuch.png|800px|thumb|center|Eintrag für den Schulbesuch.]]


Hinweis: Hat der aus dem Ausland zugezogene Schüler die deutsche Staatsangehörigkeit (Eintrag der Staatsangehörigkeit unter Individualdaten I), muss für die allgemeine Herkunft des Schülers der Schlüssel "XS" verwendet werden. 


== FAQ ==
=== Fehler E89 ===
'''Problem'''<br />
Nach der Plausibilitätsprüfung in SchILD erhalten ich den Fehler E89.

[[Datei:FehlerE89.png|800px|thumb|center|Fehler E89.]]

'''Lösung'''<br />
Vermutlich fehlt unter Individualdaten II das Zuzugsjahr.
[[Datei:FehlerE89Lsg.png|800px|thumb|center|Korrektur des Fehlers E89.]]

=== Daten in ASDPC nachpflegen ===
'''Problem'''<br />
Ich habe die sim.txt bereits in ASDPC importiert und viele Datensätze dort korrigiert. Allerdings habe ich vergessen, die Klassenart DF für den vorherigen Abschnitt anzupassen.

'''Lösung'''<br />
Da SchILD bei der Plausibilitätsprüfung für diesen Fall keine Fehlermeldung ausgibt, kommt das Problem sicherlich häufiger vor.
Wenn die Klassenart DF nicht für vorangegangene Abschnitte bei den Schülern mit Deutschförderung in SchILD eingetragen wurde, erscheint die unten stehende Fehlermeldung. Dies kann man in ASDPC korrigieren, indem der Schlüssel 91 (Verbleib in Deutschförderung) für Spalte Art 611 ausgewählt wird:
[[Datei:ASDPCKorrektur91.png|800px|thumb|center|Korrektur "Verbleib in Deutschförderung".]]



[[#top|Zum Seitenanfang]]

[[Schulverwaltung|zurück zu Schulverwaltung]]
```
