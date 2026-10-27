---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Mailversand aus der Reporting"
---

# Mailversand aus der Reporting

Gesicherte Wiki-Seite · Namensraum 0 · Version 4731 · Stand 2021-01-26.

[Lesbaren Artikel öffnen](/reporting/verwaltung/mailversand-aus-der-reporting) · [Originaldaten herunterladen](/dateien/quellen/seite-1185.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC__

= Versenden einer Reportvorlage =

Wenn Sie eine Reportvorlage (RTM-Datei) mit jemanden austauschen wollen, dann können Sie diese Vorlage direkt aus dem Reportexplorer versenden.
Vorraussetzung ist es, dass der Mailversand in den Programm-Einstellungen eingerichtet ist.

Klicken Sie mit der rechten Maustaste auf den Report, den Sie versenden wollen und wählen Sie die unten abgebildete Option.



[[Datei:RTM-Mailversand.png|500px]]




Je nach Einstellung öffnet sich nun das Standard-Mailprogramm oder die Schild-NRW-interne Mailfunktion.




= Versenden eines PDF an einen oder mehrere Empfänger =


Diese Funktion dient dazu einen gedruckten PDF-Report in gleicher Form an einen oder mehrere Mailempfänger zu senden.

Drucken Sie den Report mit einem Doppelklick und wählen Sie folgende Option.


[[Datei:PDF-Mailversand01.png|500px]]


Es erscheint nun die Schild-Mail-Funktion oder das Standard-E-Mail-Programm
mit dem ein fester gedruckter Report an die Empfänger gesendet werden kann.


[[Datei:PDF-Mailversand02.png|500px]]

= Versand eines Serienbriefs als PDF-Anhang =


Diese Funktion bietet die Möglichkeit Serienbriefe an verschiedene Empfänger zu senden.
Je nach Datenquelle des Reports werden dann die E-Mail-Adresse verwendet.

So ist es z.B. möglich personalisierte Briefe an Erzieher zu senden.
Auch kann man damit Klassenliste an die Klassenlehrer versenden.


[[Datei:PDF-Mailversand03.png|500px]]


Folgende Datenquellen werden unterstützt:
* Schueler
* Erzieher
* Lehrer
* Schueler mit Gruppierung auf Klassen (Mails gehen dann an den Klassenlehrer)
* Schueler mit Gruppierung ZSSchulnrNRW oder LSSchulnr (Mails gehen dann an die aufnehmende oder abgebende Schule)

Grundsätzlich gilt folgendes:

* Der Report muss eine Gruppierung nach der ID einer dieser Datenquellen haben.
* Im Report muss in den Email-Settings 'enabled' aktiviert sein.
* In der Gruppierung muss 'neue Seite' und 'email new file' aktiviert sein.


[[Datei:Emailnewfile.png|500]]


[[Datei:Emailsettings.png|250px]]



----

[[Hauptseite|zurück zur Hauptseite]]
```
