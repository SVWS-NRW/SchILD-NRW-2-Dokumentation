---
title: "Externes Notenmodul"
wiki_title: "Externes Notenmodul"
wiki_page_id: 250
wiki_revision: 4736
---

# Externes Notenmodul

![Notenmodulexport](/bilder/wiki/notenmodulexport-baf0d84e.jpg)

Das Externe Notenmodul ist ein Zusatzprogramm zu Schild-NRW. Es ist in der Basisinstallation enthalten, kann aber auch über die Homepage (<http://www.svws.nrw.de/index.php?id=tools>) einzeln heruntergeladen werden.

Mit diesem Tool ist es möglich, für jeden Lehrer eine Noten-Datei zu erstellen, die dieser dann außerhalb von Schild-NRW bearbeiten kann. Wenn die Lehrer die Noten eingetragen haben, werden diese Notendateien wieder eingelesen und die Noten, Fehlstunden und Bemerkungen sind in der Datenbank enthalten.

Der Export in die Notendateien ist auf Grundlage der VO-DV-I abgesichert. ([Datenschutzhinweis](/administration/benutzer-einstellungen/datenschutzhinweis))

Eine Anleitung zur Bedienung des Externen Notenprogramms für die Kollegen finden Sie unter [Tools](https://wiki.svws.nrw.de/mediawiki/index.php?title=Tools&action=edit&redlink=1).

Im Folgenden wird nun beschrieben, wie der Export/Import in Schild-NRW funktioniert.

<a id="Noten_Export"></a>

## Noten Export

![Notenexport1](/bilder/wiki/notenexport1-a494b829.jpg)

**Lehrkräfte:**

Nach dem Aufruf dieses Programmpunktes öffnet sich das Fenster für den Export. Auf der linken Seite befinden sich die Listen der Lehrer, der Jahrgänge und der Klassen. Die zu exportierenden Lehrerdateien können Sie durch das Setzen des Häkchens vor dem Lehrerkürzel bestimmen. Mit der rechten Maustaste gelangen Sie an die Optionen "Alle aktivieren / deaktivieren" oder das Bilden der Umkehrauswahl. Bei den Lehrern werden nur die Dateien erzeugt, die ausgewählt wurden.

**Jahrgänge:**

Hier kann gewählt werden, ob nur für bestimmte Jahrgänge exportiert werden soll. Ist kein Jahrgang gewählt, so werden alle Jahrgänge exportiert!

**Klassen:**

Hier kann gewählt werden, ob nur für bestimmte Klassen exportiert werden soll. Ist keine Klasse gewählt, so werden alle exportiert!

![Notenexport2](/bilder/wiki/notenexport2-75c209aa.jpg)

**Datenexport nach:**

Legen Sie hier fest, wohin die Notendateien gespeichert werden sollen. Tun Sie dies bitte auch, wenn Sie die Notendateien per E-Mail versenden wollen, da hier auch immer eine Kopie der versendeten Dateien gespeichert wird.

**Zu verwendendes Fehlstundenmodell:**

Hier wird festgelegt, wie die Fehlstunden eingetragen werden sollen.

- Gesamtfehlstunden: Der Klassenlehrer/Abteilungsleiter trägt die Summe der Fehlstunden auf dem Reiter der Bemerkungen ein.
- fachbezogene Fehlstunden: Jeder Lehrer kann bei seinem Fach in der Noteneingabe-Ansicht die Fehlstunden eintragen. Diese müssen später in Schild-NRW zusammengerechnet werden.

**Suffix für Dateinamen:**

Die Dateinamen für die Lehrerdateien sind immer nach dem Aufbau *Kürzel_Schuljahr_Abschnitt".enm (.enz) aufgebaut. Sie können hier entscheiden, ob Sie noch eine Bezeichnung anhängen wollen.* Dies kann z.B. sinnvoll sein, wenn Sie für die SI und die SII getrennte Notendateien erzeugen wollen.

**Bei Klassenlehrern komplette Klasse ausgeben:**

Hier können Sie festlegen, ob der Klassenlehrer (und evtl. auch der stellv. Klassenlehrer) auch die Fachnoten der Kollegen eingeben können soll, die er in seiner Klasse aber gar nicht unterrichtet. Wenn Sie das Modell der Noteneingabe bevorzugen, wo die Klassenlehrer für die Noten ihrer Klasse verantwortlich sind, müssen Sie diesen Haken setzen.

**Keine Fachlehrer-Fächer exportieren:**

Sollten Sie o.g. Modell bevorzugen, so möchten Sie vielleicht, dass die Fachlehrer ihre Fächer generell nicht in die Notendatei geschrieben bekommen.

*Kennwort der Benutzer in Export-Datei übernehmen:'*

Mit dieser Option kann jede Notendatei mit dem Kennwort des Lehrers geschützt werden. Dazu müssen aber alle Lehrer mit ihrem Kürzel als User in der Datenbank angelegt sein! Dies können Sie in der [Benutzerverwaltung](/administration/benutzer-einstellungen/benutzerverwaltung) einstellen.

**Eingabe von Mahnungen sperren:** Evtl. vorhandene Haken bei den Mahnungen können dann von den Kollegen nicht verändert werden.

**Verschlüsselung und Versand:** Wenn Sie eine kennwortgeschützte Zip-datei erzeugen, können alle Notendateien mit dem gleichen Kennwort verschlüsselt werden. Wenn diese Option gewählt ist, ändert sich die Datei-Endung der Notendateien von \*.enm in \*.enz. Das Externe Notenmodul kann diese enz-Dateien dann nach Eingabe des Kennwortes öffnen.

Der E-Mail-Versand setzt voraus, dass die Mail-Einstellungen unter den [Programm-Einstellungen](/administration/benutzer-einstellungen/programm-einstellungen) gemacht wurden und getestet sind. Bitte beachten Sie, dass viele Mailprovider einen Massenversand von verschlüsselten ZIP-Dateien blockieren. Testen Sie daher vor dem Notenversand Ihre Einstellungen!

Wenn man den Text in der Mail verändern will, der mit dem Versand der Notendateien gesendet wird, dann muss man eine TXT-Datei mit dem Namen Notendateitext.txt im Installationsverzeichnis ablegen. Der darin enthaltene Text wird dann im Mailbody gesendet.

Beispiel: [Datei:Notendateitext.txt](https://wiki.svws.nrw.de/mediawiki/index.php?title=Datei:Notendateitext.txt)

<a id="Noten_Import"></a>

## Noten Import

Nach der Auswahl dieses Menüpunktes öffnet sich ein Datei-Fenster. Wählen Sie hier die zu importierenden Notendateien. Es können mehrere Dateien auf einmal gewählt werden.

Über das folgende Optionsmenü können Sie drei Einstellungen setzen:

**Alle Daten übernehmen**

Es werden alle Daten übernommen, auch wenn in Schild-NRW bereits neuere Einträge vorliegen.

**Gelöschte Noteneinträge übernehmen**

Es werden auch Noten entfernt, wenn im Notenmodul keine Note gegeben wurde.

**keine Bemerkungen übernehmen**

Sollten Sie in Schild-NRW schon Bemerkungen eingegeben haben, so würden diese von denen im Notenmodul überschrieben. Mit dieser Einstellung können Sie das verhindern, jedoch werden die Bemerkungen der Notendateien dann auch ignoriert.

------------------------------------------------------------------------

---

Quelle: [Externes Notenmodul – SchILD2-Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Externes+Notenmodul&oldid=4736) · [Bearbeitungsgeschichte](https://wiki.svws.nrw.de/mediawiki/index.php?title=Externes+Notenmodul&action=history)
