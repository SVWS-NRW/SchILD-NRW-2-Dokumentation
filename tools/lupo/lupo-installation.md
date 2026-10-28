---
title: "Lupo:Installation"
---

# Lupo:Installation

Bei Lupo handelt es sich um ein Programm, welches auf einem Windows-Betriebssystem ausgeführt werden muss. Lupo benötigt keine Installation im eigentlichen Sinne. Sie können die Programmdatei in jedem beliebigen Ordner ausführen, solange sich der Unterordner „Vorlagen“ mit der Datendatei „vorlage.lpo“ im gleichen Verzeichnis befindet. Lupo kann gleichwohl auf einem USB-Stick gespeichert und auf jedem Windows-PC ausgeführt werden, auf einem PC installiert oder auf einem Server gespeichert und ausgeführt werden. Da es sich bei der LPO-Datei um eine Datenbank handelt, ist es zudem möglich, mit mehreren Beratungslehrerinnen und -lehrern gleichzeitig auf die Datei zuzugreifen. In der Praxis haben sich zwei typische Szenarien etabliert:

Installation aller Komponenten auf einem Server  
Die Programmdatei wird zusammen mit der Datendatei auf einem Server installiert.

***Vorteil:*** Bei einem Update muss nur die Programmdatei ausgetauscht werden, Beratungslehrerinnen und -lehrer greifen immer auf die aktuellste Beratungsgdatei zurück, alle statistischen Daten sind abrufbar

***Nachteil:*** Eine Beratung kann nur an PCs im Netzwerk vorgenommen werden.

:::danger
Zitat Microsoft: „Wenn eine Datenbankdatei in einem Netzwerk freigegeben ist und mehrere Benutzer gleichzeitig direkt mit der Datei arbeiten, besteht für die Datei ein geringes Beschädigungsrisiko. Das Risiko einer Beschädigung ist etwas größer, wenn Benutzer häufig Daten in Memofeldern bearbeiten, und dieses Risiko wächst im Lauf der Zeit.“ Quelle: <a href="https://support.microsoft.com/de-de/office/verhindern-und-beheben-von-datenbankdateiproblemen-mithilfe-von-komprimieren-und-reparieren-6ee60f16-aed0-40ac-bf22-85fa9f4005b2#bm1_2" class="external free" rel="nofollow">https://support.microsoft.com/de-de/office/verhindern-und-beheben-von-datenbankdateiproblemen-mithilfe-von-komprimieren-und-reparieren-6ee60f16-aed0-40ac-bf22-85fa9f4005b2#bm1_2</a>.

Bei den Lupo-Datenbankdateien handelt es sich um Access-Datenbanken. In Lupo werden mit jedem Klick Memofelder beschrieben. Das Risiko einer Beschädigung ist also erhöht. Es empfiehlt sich daher, eher dezentral zu arbeiten. Eine beschädigte Lupo-Datei kann in der Regel sehr schnell und verlustfrei von Ihrem Fachberater repariert werden.
:::

Speichern der Komponenten auf einem USB-Stick  
Die Programmdatei und die Datendatei werden auf einem USB-Stick gespeichert

***Vorteil:*** Eine Beratung kann an jedem zur Verfügung stehenden PC durchgeführt werden.

***Nachteil:*** Verschiedene Beratungslehrer haben unterschiedliche Teilversionen der Datendatei. Diese müssen für eine Gesamtbetrachtung und die Statistik erst zusammengeführt werden, Update mehrerer USB-Sticks

![Installation](/bilder/tools/lupo/installation.png)

*Flexibel auf einem Stick oder auf einem Server für den Mehrbenutzer-Einsatz*

Wer eine Windows-typische Installation wünscht, der sollte sich von der SVWS-Internetseite die Setup-Datei herunterladen und ausführen. Der Setup-Assistent installiert die Lehrer- und Schülerversion von Lupo in einem Ordner freier Wahl (z.B. C:\Programme (x86)\Lupo), setzt einen Eintrag in das Startmenü, überprüft, ob die für den reibungslosen Betrieb notwendige Datei „Gdiplus.dll“ auf dem PC vorhanden ist, und installiert diese bei Bedarf. Zudem wird die Endung LPO registriert, so dass eine LPO-Datei durch Doppelklick geöffnet werden kann.

Wer keine Installation vornehmen möchte, kann Lupo auch als ZIP-Datei herunterladen. Die Datei kann in jedes beliebige Verzeichnis entpackt werden und enthält alle Dateien, die für einen ordnungsgemäßen Betrieb notwendig sind. Sie enthält ebenfalls die auf alten Computern benötigte Bibliothek „Gdiplus.dll“, welche ab Windows XP vom Betriebssystem gestellt wird und in diesem Fall aus dem Lupo-Installationsverzeichnis gelöscht werden darf.

:::danger

Benutzer, welche Microsoft Office 365 in der 64bit Version installiert haben, erhalten während des Öffnens einer Lupo-Datei eine Fehlermeldung. Lupo benutzt die 32bit Microsoft Zugriffskomponenten Microsoft Access Database Engine 2010 Redistributable für Datenbanken. Mit der 64bit-Version von Microsoft Office werden diese auf 64bit umgestellt. In diesem Fall hat Lupo keinen Zugriff mehr auf die Lupo-Dateien. Abhilfe schafft die manuelle Installation der 32bit Microsoft Zugriffskomponente, welche jedoch auf besondere Art installiert werden muss. Laden Sie zunächst Microsoft Access Database Engine 2010 Redistributable in der 32 bit Version hier herunter:

https://www.microsoft.com/de-de/download/details.aspx?id=13255

Speichern Sie die Datei z.B. in den Ordner c:\temp. Starten Sie nun die Kommandozeile innerhalb dieses Ordners, indem Sie die Windows-Taste drücken und anschließend `cmd` eintippen. Als Suchtreffer wird Ihnen nun der Windows Command Prompt angeboten. Über die rechte Maustaste können Sie die Kommandozeile als Administrator ausführen. Geben Sie nun in die Kommandozeile folgenden Text ein `c:\temp\AccessDatabaseEngine.exe /passive`. Nach der Installation lassen sich Lupo-Dateien wieder öffnen.

:::

[zurück zum Artikel Lupo:Einleitung](/tools/lupo/lupo-einleitung)

[weiter zum Artikel Lupo:Vorbereitungen in Schild-NRW](/tools/lupo/lupo-vorbereitungen-in-schild-nrw)

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-867) · [Lupo:Installation – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Lupo%3AInstallation&oldid=5549)
