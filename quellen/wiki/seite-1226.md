---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Statistik mit ASDPC"
---

# Statistik mit ASDPC

Gesicherte Wiki-Seite · Namensraum 0 · Version 5337 · Stand 2022-01-30.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/statistik-mit-asdpc) · [Originaldaten herunterladen](/dateien/quellen/seite-1226.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
==Einleitung==

===Aufbau dieser Anleitung=== 

Das Programm ASDPC32 hat für Sie im Wesentlichen zwei Funktionen:

# Die Entschlüsselung von dienstlichen Dokumenten, die über ihre Schulmail angekündigt und über gesicherten Bereich des Bildungsportals heruntergeladen werden können.
# Die Erstellung der jährlichen amtlichen Schulstatistik NRW.

Diese Anleitung gibt einen Überblick über ASDPC und führt Schritt für Schritt durch die Erstellung der ''amtlichen Schulstatistik NRW'' mit ASDPC32 unter optionaler Verwendung des Datenimports aus SchILD NRW. Dazu wird die einmalige und jährliche Vorbereitung von ASDPC erklärt, weiterhin werden Hinweise für den Ablauf und die Fehlersuche aufgeführt.

{{Hinweis|Aspekte, die nicht direkt zur Statistik gehören - zum Beispiel die Ersteinrichtung von ASDPC oder Anmerkungen zum Verschlüsselungsverfahren - werden auf Unterseiten weiter ausgeführt und sind je nach Bedarf oder Interesse aufzurufen.}}

[[File:Schaubild.png|500px]]

Die Statistik mit ASDPC wird grundlegend in folgenden Schritten durchgeführt:
# Vorbereitung von ASDPC sowie Ihrer Schulverwaltungssoftware
# Ausfüllen der ''Belege'' in ASDPC, die in diesem Jahr gefordert sind.
# Prüfen und Korrekturen durchführen [dieser Schritt wird so oft wie nötig wiederholt]
# Abschicken der Statistik an IT.NRW

[[File:Schaubild ASDPC2.png|400px]]

{{Hinweis|Bei der Arbeit mit dieser umfangreichen Anleitung kann es hilfreich sein, Links im Browser in einem neuen Tab zu öffnen. Klicken Sie hierzu mit der rechten Maustaste auf einen Link und wählen Sie "In neuem Tab öffnen". Oft ist die Funktion auch durch einen Klick der mittleren Maustaste erreichbar.}}

__TOC__

----

===Supportangebote===

[[File:WikiSupportangebote.png|500px]]

Über diese Anleitung hinaus bestehen diverse weitere Supportangebote:

* Das [https://schulverwaltungsinfos.nrw.de/svws/forum/viewforum.php?f=22 SVWS-Forum], um zu zu suchen, ob Ihre Frage oder das Problem schon beantwortet bzw. gelöst wurde. Hier können Sie auch neue Fragen stellen, die von Fachberatern beantwortet werden.

* Hier in diesem Wiki finden sich Kurzanleitungen und Tutorials, die eventuell Ihre Frage abdecken.

* Weiterhin sind Schulen in NRW ''Fachberater'' zugeordnet, die Sie über die [https://www.svws.nrw.de/service/fachberatersuche Fachberatersuche] unter Angabe Ihrer Schulnummer finden können. Versuchen Sie bitte zuerst eventuelle Fragen über die Supportangebote und/oder mit Ihrem Fachberater zu klären, bevor Sie sich direkt an IT.NRW wenden. 

* Kontakte zu IT.NRW für Fragen zu ASDPC32 und Inhalten der Statistik bzw. zu technischem Support finden Sie im jährlichen Rundschreiben zur Haupterhebung von IT.NRW: [https://schulverwaltungsprogramme.msb.nrw.de/schulen/download.htm#D92 "Anschreiben zu ASDPC"]. In diesem Anschreiben sind auch die Fachberater-Kontakte der Bezirksregierungen genannt, die für eventuelle Abgabetermine betreffende Anfragen zuständig sind.

* Abschließend ist noch auf die [https://www.svws.nrw.de/service/fortbildungen Fortbildungen] Ihrer Bezirksregierung zu verweisen, die im Vorfeld der Statisik angeboten werden.

==Erstinstallation, Wartung und der Aufbau von ASDPC==

::[[Statistik_mit_ASDPC-Technik|Erstinstallation, Wartung und der Aufbau von ASDPC]]

===Erstinstallation===

::[[Statistik_mit_ASDPC-Technik#Erstinstallation|Erstinstallation]] - In diesem Kapitel finden Sie die Anleitung zur Erstinstallation von ASDPC, vom Download bis zur Installation.

===Updaten von ASDPC===

::[[Statistik_mit_ASDPC-Technik#Updaten von ASDPC|Updaten von ASDPC]] - Dieses Kapitel führt Sie durch den Updateprozess von ASDPC, der vor jeder Statistik vorzunehmen ist.

===Schlüsselmanagement===

::[[Statistik_mit_ASDPC-Schluesselmanagement|Schlüsselmanagement]] - In diesem Kapitel wird erläutert, wie Schlüssel in ASDPC zu erstellen, einzulesen und mit IT.NRW auszutauschen sind. Weiterhin wird auf mögliche Fehlerquellen beim Schlüsselmanagement eingegangen.

====Allgemeine Informationen====

::[[Statistik_mit_ASDPC-Schluesselmanagement#Allgemeine Informationen|Allgemeine Informationen]]

====Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln====

::[[Statistik_mit_ASDPC-Schluesselmanagement#Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln|Neu Erzeugen, Einlesen und Sichern von existierenden Schlüsseln]]

====Mögliche Fehler bei Ver- und Entschlüsselung====

::[[Statistik_mit_ASDPC-Schluesselmanagement#Mögliche Fehler bei Ver- und Entschlüsselung|Mögliche Fehler bei Ver- und Entschlüsselung]]

==Der Aufbau von ASDPC erklärt==

::[[Statistik_mit_ASDPC-Aufbau|Starten von ASDPC]] - In diesem Kapitel wird der grundlegende Aufbau von ASDPC erläutert und wie die Schule in der Haupterhebung zuerst einzurichten ist.

====Abschnitte "Extras"====

::[[Statistik_mit_ASDPC-Aufbau#Abschnitte_.22Extras.22|Extras]] - In diesem Kapitel wird der Menüpunkt "Extras" von ASDPC erläutert. Dieser beinhaltet die Möglichkeit, "dienstliche Dokumente" zu ver- und entschlüsseln sowie das Schlüsselmanagement.

====Abschnitt "Optionen"====

::[[Statistik_mit_ASDPC-Aufbau#Abschnitt_.22Optionen.22|Optionen]] - In diesem Kapitel werden die globalen Optionen von ASDPC erläutert. Hier können Speicherorte für die Datenbanken gesetzt werden, es kann die automatische Datensicherung eingestellt werden. Weiterhin lassen sich die Unterrichtseinheiten in Minuten erfassen (Vorsicht!) und eine Farbeinstellung (Rotschwäche) vornehmen.

====Abschnitt "Hilfe"====

::[[Statistik_mit_ASDPC-Aufbau#Abschnitt_.22Hilfe.22|Hilfe]] - In diesem Kapitel werden die Hilfefunktionen von ASDPC erläutert: der Index, die Suchfunktion, ein Link auf die Eintragungshilfen und Schlüsseltabellen für Ihre Schulform, die Update-Funktion von ASDPC. Weiterhin sind über die Funktion das Schulverzeichnis NRW abzurufen und es kann ein Beratungspaket für IT.NRW erstellt werden. Schlussendlich werden auch Versionshinweise der aktuellen ASDPC-Version und der verwendeten Daten angezeigt.

==Vorbereitung der Statistik==

::[[Statistik_mit_ASDPC_Vorbereitung#Vorbereitung_der_Statistik|Vorbereitung der Statistik]] - In diesem Kapitel finden sich vorbereitende Arbeiten, z.B. zum Updaten von ASDPC, SchILD NRW, Export von Daten aus Schulverwaltungsprogrammen oder dem Besorgen der aktuellen Verfahrensanleitung, Schlüsseltabellen und Eintragungshilfen.

===Sammeln der notwendigen Ressourcen und Updates===

::[[Statistik_mit_ASDPC_Vorbereitung#Sammeln_der_notwendigen_Ressourcen_und_Updates|Sammeln der notwendigen Ressourcen und Updates]]

====Export aus SchILD NRW und anderen Schulverwaltungsprogrammen====

::[[Statistik_mit_ASDPC_Vorbereitung#Export_aus_SchILD_NRW_und_anderen_Schulverwaltungsprogrammen|Export aus SchILD NRW und anderen Schulverwaltungsprogrammen]]

====Sammeln der Ressourcen====

::[[Statistik_mit_ASDPC_Vorbereitung#Sammeln der Ressourcen|Sammeln der Ressourcen]]

==Die Haupterhebung==

::[[Statistik_mit_ASDPC_Haupterhebung|Die Haupterhebung]] - dieses große Kapitel beinhaltet die Erläuterung der grafischen Oberfläche, der Menübänder, sowie der Belege zur Haupterhebung. Weiterhin durchläuft es exemplarisch eine komplette Haupterhebung.

===Die Menüoptionen in der Haupterhebung===

====Datei====

::[[Statistik_mit_ASDPC_Haupterhebung#Die_Men.C3.BCoptionen_in_der_Haupterhebung|Menüoptionen Datei]]

====Belege====

::[[Statistik_mit_ASDPC_Haupterhebung#Belege|Belege]] - Unter dieser Option verbergen sich die Belege von ASDPC, in dem die Daten der Statistik erfasst werden. Hinweise zur eigentlichen Erfassung der Daten erhalten Sie im folgenden Kapitel zur DURCHFÜRHUNG DER STATISIK. An dieser Stelle ist grundlegend zu vermerken, dass die Belege der Reihenfolge von oben nach unten abgearbeitet werden.

====Extras====

::[[Statistik_mit_ASDPC_Haupterhebung#Extras|Extras]] - Der Menüeintrag "Extras" ist wie im identisch zum übergeordneten Menü [[Statistik_mit_ASDPC-Aufbau#Abschnitte_.22Extras.22|"Extras"]] in ASDPC.

====Prüfen====

::[[Statistik_mit_ASDPC_Haupterhebung#Pr.C3.BCfen|Prüfen]] - Nach der Dateneingabe in den Belegen können die Daten innerhalb der Belege geprüft werden. Mit der Option "Prüfen" ➥ "Gesamtprüfung" werden alle Belege und vor allem die Daten untereinander über die Belege hinweg geprüft.

====Hilfe====

::[[Statistik_mit_ASDPC_Haupterhebung#Hilfe|Die Hilfe]] ist identisch zum übergeordneten Menü [[Statistik_mit_ASDPC-Aufbau#Abschnitt_.22Hilfe.22|"Hilfe"]]. Die Hilfe kann von jedem Beleg aus aufgerufen werden.

===Durchführung der Haupterhebung===

::[[Statistik_mit_ASDPC_Haupterhebung#Durchf.C3.BChrung_der_Haupterhebung|Die Haupterhebung]] - In diesem Kapitel wird Schritt für Schritt durch eine Haupterhebung geführt.

====Aufbau der Belege am Beispiel der LID123====

::[[Statistik_mit_ASDPC_Haupterhebung#Aufbau_der_Belege_am_Beispiel_der_LID123|Aufbau der Belege am Beispiel der LID123]]

====Beleg: KLD323 - Klassendaten====

::[[Statistik_mit_ASDPC_Haupterhebung#Beleg:_KLD323_-_Klassendaten|Im Beleg KLD323]] werden die Daten zu den Klassen erfasst.

====Beleg: UVD223 - Unterrichtsverteilung====

::[[Statistik_mit_ASDPC_Haupterhebung#Beleg:_UVD223_-_Unterrichtsverteilung|Beleg der Unterrichtsverteilung]]

====Beleg: SCD011 - Religionszugehörigkeiten====

::[[Statistik_mit_ASDPC_Haupterhebung#Beleg:_SCD011_-_Religionszugeh.C3.B6rigkeiten|Religionszugehörigkeiten]]

====Beleg: SCD012 - Abgänger====

::[[Statistik_mit_ASDPC_Haupterhebung#Beleg:_SCD012_-_Abg.C3.A4nger|Abgänger]] - in diesem Beleg werden die Abgänger der Abschlussjahrgänge erfasst.

====Weitere Belege====

::[[Statistik_mit_ASDPC_Haupterhebung#Weitere_Belege|Weitere Belege]] - Hier finden sich diverse Belege für weitere Daten. Manche der Belege werden nur für passende Schulformen angezeigt. Beispielsweise für die '''Abiturprüfungsergebnisse''', '''Zuwanderungsgeschichte''', '''Internatsplätze''', '''Wohnorte''', '''Altersstruktur''', '''Deutschfördergruppen''' oder weitere Weitere "Weitere Belege".

==Bereitstellung der Daten==

Wenn alle Belege vollständig und so korrekt wie möglich ausgefüllt wurden, ist eine erneute Gesamtprüfung der Daten vorzunehmen und alle Fehler müssen geprüft werden.

* Muss-Fehler sind zu entfernen.
* Harte Fehler können im Einzelfall nach individueller Rücksprache mit der Schulaufsicht erhalten bleiben.
* Hinweise sollten beseitigt werden, sollte der eingegebene Umstand aber die Schulrealität gut abbilden, können und sollen sie stehen bleiben. 

{{Wichtig|Nach jeder Veränderung der Daten ist immer eine erneute Gesamtprüfung durchzuführen.}}

===an IT.NRW===

Zum Export der Daten kann nun über Datei ➥ Export ➥ Daten für IT.NRW die Exportdatei erstellt werden.

Sofern noch Muss-Fehler in der Statistik enthalten sind oder keine Gesamtprüfung durchgeführt wurde, ist ein Bereitstellen der Daten nicht möglich.
 
[[File:ASDPC Export IT.NRW.png|400px]]

Hier ist nun Ihre vierstellige ASD-Signatur einzugeben.

[[File:ASDPC ASD Signatur Export.png|400px]]

Haben Sie die Anweisungen auf dem Bildschirm befolgt, finden Sie die Daten standardmäßig im Unterordner \Ausgang Ihrer ASDPC-Installation. Also zum Beispiel "C:\ASDPC\Ausgang", wenn ASDPC auf Laufwerk C: installiert wurde.

Es handelt sich um eine verschlüsselte Datei mit dem Format

:: V4ssssss.jjX

wobei "ssssss" Ihre Schulnummer und "jj" das Schuljahr ist. 

:: V4101500.20X 

Wäre also die Datei für die (imaginäre) Schule 101500 im Jahr 2020.

Diese Datei ist nun an IT.NRW zu übersenden, die Emailadresse wird jedes Jahr mit den Unterlagen von IT.NRW mitgeteilt.

{{Hinweis|Übersenden Sie bitte nur die verschlüsselten Dateien, die mit einem "X" enden!}}

{{Wichtig|Kontrollieren Sie bitte die Emailaddresse von IT.NRW ganz genau auf Korrektheit!}}

Mit dem Absenden der Daten vor dem Stichtag ist die Statistik fertig bearbeitet.

===an den Schulträger===

Über Datei ➥ Export können auch Daten für den Schulträger in unverschlüsselter Form erzeugt und diesem übergeben werden.

{{Achtung|Achten Sie bei diesen Daten auf den Datenschutz und nutzen Sie sichere Übertragungswege.}}

==Fehlersuche - typische Fehler aus der Praxis==

::[[Statistik_mit_ASDPC_Fehlersuche|Häufig in der Praxis auftauchende Fehlerquellen]]

----

[[#top|Zum Seitenanfang]]

[[Hauptseite|Zurück zur Hauptseite]]
```
