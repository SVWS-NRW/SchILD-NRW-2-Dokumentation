---
title: "LuPO-Schülerdateien erzeugen"
---

# LuPO-Schülerdateien erzeugen

<a id="Das_Lupo-Schülerprogramm"></a>
<a id="Das_Lupo-Sch.C3.BClerprogramm"></a>

## Das Lupo-Schülerprogramm

![Lupo_schuelerversion](/bilder/tools/lupo/lupo-schuelerversion.png)

*Die Lupo-Schülerversion*

Verwenden Sie die Schülerversion nach den individuellen Voraussetzungen an Ihrer Schule. Ein Einsatz ist nicht zwingend notwendig, manchmal sogar nachteilig. Sie haben optional die Möglichkeit, LuPO-Schülerdateien zu erzeugen und diese den SuS Ihrer Schule automatisch zukommen zu lassen. Die Dateien enthalten alle von Ihnen durchgeführten Voreinstellungen, so dass die SuS verschiedene Wahlen ausprobieren können. Die versendeten Dateien enthalten lediglich die Daten der jeweiligen Schülerin bzw. des jeweiligen Schülers und können nur mit Hilfe einer speziellen Schülerversion von LuPO (LuPO_NRW_SV.exe) geöffnet werden. Die Schülerversion ist eine Variante der Lehrerversion und lässt keine Änderungen des Fächerkanons und sonstiger administrativer Einstellungen zu.

Geben Sie vor der Erzeugung der Schülerdateien im Menü „Datenbearbeitung \> Grundeinstellungen“ eine E-Mail-Adresse ein, sofern die SuS die Möglichkeit erhalten sollen, ihre Probewahl über eine Schaltfläche an den Beratungslehrer zurückzusenden.

Die Verwendung des Schülerprogrammes ist keineswegs zwingend erforderlich. Die Lehrerversion von LuPO wurde für den Beratungsprozess optimiert, so dass eine vollständige Eingabe aller relevanten Daten innerhalb einiger Sekunden während der Beratung vorgenommen werden kann. Die gemeinsame Erarbeitung einer Fachwahl mit der Schülerin bzw. dem Schüler birgt zahlreiche Vorteile, auf welche Sie durch den frühzeitigen Einsatz des Schülerprogramms eventuell verzichten. Sie können die Schülerversion auch verwenden, um den Schülern eine Möglichkeit zu bieten, mit Fachwahlen im Vorfeld zu spielen. Hierzu ist nicht unbedingt eine individualisierte Schülerdatei notwendig. Sie können ebenso gut eine allgemeine „Spieldatei“ für alle SuS zum Download auf Ihrer Schulhomepage anbieten. Diese könnte die Fächer der Oberstufe der eigenen Schule enthalten, würde jedoch keine Angaben zur Sprachenfolge aufweisen. Erzeugen Sie hierzu einen Schüler „Toni Mustermann“ und exportieren lediglich die Datei für diesen Schüler. Anschließend können Sie den Schüler wieder löschen.

<a id="Erzeugen_und_Versenden_der_Schülerdateien"></a>
<a id="Erzeugen_und_Versenden_der_Sch.C3.BClerdateien"></a>

## Erzeugen und Versenden der Schülerdateien

![Lupo_datenaustausch_schueler_beratungsdateien](/bilder/tools/lupo/lupo-datenaustausch-schueler-beratungsdateien.png)

*Dialog zur Festlegung von Einschränkungen in den Schülerdateien*

LuPO erzeugt die Schüler-Einzeldateien vollautomatisch als Dateien mit der Endung ".lpo" in einem von Ihnen gewählten Ordner. Rufen Sie hierzu das Menü „Export \> LuPO-Schülerdateien erzeugen \> Einzeldateien erzeugen (alle Schüler)“ auf. Vor dem eigentlichen Export der Schülerdateien können Sie die Schüler in ihren Möglichkeiten einschränken. Hierzu dient ein Dialog, in welchem Sie bereits bestehende Sprachenfolgen und Fachwahlen vor Manipulationen schützen können.

Sofern bei den SuS E-Mail-Adressen hinterlegt wurden und auf Ihrem Rechner ein E-Mail-Programm installiert ist, können Sie die erzeugten Daten automatisch an die SuS versenden lassen. Aktivieren Sie hierzu das Auswahlfeld „E-Mails automatisch erzeugen“. Dateien, die nicht versendet werden konnten, werden in einen Unterordner „Unzustellbar“ verschoben. Bei E-Mail-Versand empfiehlt es sich ebenfalls, die Komprimierung der Daten zu verwenden. Hierbei werden die Lupo-Schülerdateien im ZIP-Kompressionsverfahren in eine Container-Datei mit der Endung ".zip" komprimiert und anschließend umbenannt, so dass die Datei wieder die Endung ".lpo" trägt (Original "xy.lpo" -\> Container "xy.zip" mit komprimierten Inhalt "xy.lpo" -\> umbenennen in Container "xy.lpo" mit komprimiertem Inhalt "xy.lpo"). Somit haben die Containerdatei "xy.lpo" und ihr komprimierter Inhalt "xy.lpo" den gleichen Namen. Beim Öffnen einer solchen Container-Datei erwartet Lupo, dass die Containerdatei den gleichen Namen trägt, wie ihr Inhalt. Sie sollten folglich eine komprimierte Lupo-Datei nicht umbenennen.

LuPO greift beim Versenden der E-Mails auf das E-Mail-Programm zurück, welches als Standard-Programm in Windows angemeldet ist. Es hat sich in der Vergangenheit gezeigt, dass nicht alle E-Mail-Clients reibungslos funktionieren, wenn Anhänge versendet werden. So kann es sein, dass Sie eine Mail versenden bzw. erhalten, welche am Zielort einen befremdlichen Anhang aufweist. Dies liegt in der Regel daran, dass in dem jeweiligen E-Mail-Programm die Mails im Rich-Text-Format (RTF) angefertigt wurden. Empfehlen Sie in diesen Fällen den betreffenden Schülern, das Text- oder HTML-Format für E-Mails zu verwenden. Diese Einstellungen finden Sie in den Optionen des jeweiligen Programms. Der Fehler tritt vor allem bei älteren E-Mail-Clients auf.

Die Schülerversion des Beratungstools öffnet lediglich Beratungsdateien mit der Endung ".lpo", die auf diese Weise erzeugt wurden. Die Schülerin oder der Schüler kann nun seine Wahl vornehmen und zum Beratungslehrer zurücksenden, so dass die Daten für das Beratungsgespräch bereits zur Verfügung stehen. Dies ist jedoch nur möglich, wenn der Beratungslehrer in den Grundeinstellungen eine E-Mail-Adresse angegeben hat.

<a id="Einsammeln_der_Schülerdateien"></a>
<a id="Einsammeln_der_Sch.C3.BClerdateien"></a>

## Einsammeln der Schülerdateien

![Lupo_schuelerdateien_importieren](/bilder/tools/lupo/lupo-schuelerdateien-importieren.png)

*Lupo-Schülerdateien mit Einschränkungen importieren*

Über den Menüpunkt "Datenaustausch \> LuPO-Dateien \> Import \> Schülerdateien (\*.lpo)" können Sie Schülerdateien importieren. Sie können in einem Importprozess mehrere Dateien gleichzeitig importieren. Markieren Sie hierzu alle empfangenen Beratungsdateien der SuS, die Sie importieren wollen, und klicken Sie auf die Schaltfläche „Öffnen“. Im Folgedialog können Sie die Halbjahre auswählen, die importiert werden sollen. Sollten die Schülerinnen oder Schüler die Daten aus vorangegangenen Halbjahren verändert haben, so vermeiden Sie auf diese Weise den Import der so manipulierten Daten. In diesem Dialog können Sie ebenfalls bestehende Sprachenfolgen vor Manipulation schützen.

[zurück zum Seitenanfang](#top)

[zurück zum Artikel Lupo:Erste Schritte in Lupo](/tools/lupo/lupo-erste-schritte-in-lupo)

[weiter zum Artikel Lupo:Der Beratungsprozess](/tools/lupo/lupo-der-beratungsprozess)

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-981) · [Lupo:Schülerdateien erzeugen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Lupo%3ASch%C3%BClerdateien+erzeugen&oldid=5551)
