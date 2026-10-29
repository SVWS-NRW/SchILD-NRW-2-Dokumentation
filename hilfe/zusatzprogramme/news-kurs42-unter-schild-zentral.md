---
title: "Kurs42 mit SchILDzentral verwenden"
---

<a id="news-kurs42-unter-schild-zentral"></a>

# Kurs42 mit SchILDzentral verwenden

<a id="Programmstart_von_Kurs42_in_einer_SchILDzentral-Umgebung"></a>

### Programmstart von Kurs42 in einer SchILDzentral-Umgebung

In einer Schild-Zentral Umgebung darf Kurs42 nur über SchILDzentral gestartet werden sollte (Externe-Tools). Lokale Kurs42 Versionen können nicht auf die SchILDzentral-DB zugreifen und ein Abgleich der Schüler oder eine Übertragung der Blockung funktionieren nicht.

<a id="Grundeinstellungen_für_Kurs42_in_einer_SchILDzentral-Umgebung"></a>
<a id="Grundeinstellungen_f.C3.BCr_Kurs42_in_einer_SchILDzentral-Umgebung"></a>

### Grundeinstellungen für Kurs42 in einer SchILDzentral-Umgebung

Damit Kurs42 in Verbindung mit SchILDzentral korrekt funktioniert, müssen einige Programmeinstellungen überprüft werden. Durch Aktivierung des Menüpunktes „Extras\>\>Einstellungen“ öffnet sich ein Dialogfenster, in dem (auf mehrere Karteireiter verteilt) die entsprechenden Einstellungen gesetzt werden können. Nachfolgend wird nur auf die Karteireiter eingegangen, auf denen Einstellungen gemacht werden, die für die Verwendung in einer Zentralumgebung Relevanz haben.

**Karteireiter „Allgemein“**

![News Kurs42 001](/bilder/tools/kurs42/news-kurs42-001.jpg)

Prüfen Sie hier, ob das Kontrollhäkchen „Beim Start prüfen, ob im Internet ein Update zur Verfügung steht“ deaktiviert ist. Falls das Häkchen aktiviert ist, versucht das Programm beim Start im Internet zu prüfen, ob ein Update verfügbar ist, was aber in einer Zentralumgebung in der Regel nicht möglich ist.

**Karteireiter „Druck“**

![News Kurs42 002](/bilder/tools/kurs42/news-kurs42-002.jpg)

Weisen Sie hier die zu verwendenden Standardformulare zu. Diese befinden sich i.d.R. im Verzeichnis \Kurs42\Reports unterhalb des „Schulverzeichnisses“.

**Karteireiter Verzeichnisse**

![News Kurs42 003](/bilder/tools/kurs42/news-kurs42-003.jpg)

Stellen Sie hier die Verzeichnisse für die Blockungsdateien, die Notendateien und Formulare ein. In der Regel liegen diese Verzeichnisse unterhalb Ihres „Schulverzeichnisses“. Das Programmverzeichnis und das Verwaltungsverzeichnis werden in einer Zentralumgebung intern verwaltet, hier sind keine Angaben notwendig.

**Karteireiter „Im/Export“**

![News Kurs42 004](/bilder/tools/kurs42/news-kurs42-004.jpg)

Wählen Sie hier die Option für den Blockungsexport aus.

Dabei ist Folgendes zu beachten:

Blockungsdatei wurde in Zentralumgebung erstellt

Wenn die Blockungsdatei in der Zentralumgebung erstellt wurde, so wählen Sie die Option „Über interne Routinen“. Dabei werden zum Abgleich der Daten aus der Blockungsdatei und der Datenbank die internen ID-Felder verwendet. Damit ist ein schneller und eindeutiger Datenabgleich möglich.

Blockungsdatei wurde nicht in Zentralumgebung erstellt

Falls die Blockungsdatei nicht in der Zentralumgebung, sondern mit Zugriff auf eine Einzeldatenbank von SchILD-NRW erstellt wurde, sind die internen ID-Werte (z.B. für Schüler, Fächer usw.) i.d.R. in der Blockungsdatei anders als die in der Zentraldatenbank. Ein Datenabgleich über die internen Routinen ist dann nicht möglich. In einem solchen Fall haben Sie zwei Möglichkeiten:

- Sie führen einen Datenabgleich zwischen der Blockungsdatei und der Zentraldatenbank durch.. Die einzelnen Schritte sind im Detail im folgenden Kapitel beschrieben. Danach stimmen die ID-Werte in der Blockungsdatei und in der Zentraldatenbank überein und Sie können für den Blockungsexport die Option „über interne Routinen“ verwenden
- Sie benutzen die Option „Über DLL“ für den Blockungsexport. In diesem Fall werden zum Datenabgleich nicht die internen ID-Werte verwendet, sondern „Klartext-Informationen“ (wie z.B. die Kombination „Name, Vorname und Geburtsdatum“, um einen Schüler in der Zentraldatenbank zu finden). Dieser Weg ist zeitaufwändiger und kann in besonderen Fällen (wenn z.B. der Name oder das Geburtsdatum eines Schülers in der Datenbank nachträglich geändert wurde) auch versagen.

:::warning
Bei Wahl der Option „Über DLL“ wird kein automatisches Löschen einer evtl. schon in der Datenbank vorhandenen Blockung durchgeführt. Dies muss zuvor über den Menüpunkt „Blockung\>\>Blockung in der Datenbank löschen“ manuell angestoßen werden.\
:::

<a id="Datenabgleich_Kurs42_&lt;&gt;_SchILDzentral"></a>
<a id="Datenabgleich_Kurs42_.3C.3E_SchILDzentral"></a>

## Datenabgleich Kurs42 \<\> SchILDzentral

Nachdem eine Schule, die Kurs42 verwendet, in die Zentraldatenbank importiert wurde, sind einige Schritte notwendig, um ein reibungsloses Zusammenarbeiten beider Programme zu gewährleisten. Grund dafür ist die Tatsache, dass beim Import i.d.R. die internen ID-Nummern, die zur eindeutigen Synchronisation der Daten benötigt werden, neu vergeben werden und daher nicht mehr mit den Angaben in den Blockungsdateien von Kurs42 übereinstimmen. Die nachfolgenden Schritte sind daher für jede Blockungsdatei von Kurs42 zu machen.

Abgleich der Grunddaten

Nach der Anmeldung in Kurs42 und der Auswahl der Blockungsdatei aktivieren Sie den Menüpunkt „DB-Zugriff\>\>Blockungs-Grunddaten laden“.

![News Kurs42 005](/bilder/tools/kurs42/news-kurs42-005.jpg)

Dadurch werden die aktuellen Angaben zu Schuljahr, Abschnitt usw. aus der Datenbank geladen. Anschließend können Sie über „Blockung\>\>Blockung bearbeiten“ die Angaben der Blockung überprüfen.

![News Kurs42 006](/bilder/tools/kurs42/news-kurs42-006.jpg)

:::warning
Die in der Blockungsdatei enthaltenen Schüler müssen in der Zentraldatenbank das gleiche Schuljahr und das gleiche Halbjahr (bzw. Quartal) eingetragen haben wie in der Blockungsdatei. Beim Abgleich wird nämlich nicht nur die Kombination „Name, Vorname, Geburtsdatum“ verwendet, sondern zusätzlich auch der Jahrgang und das Halbjahr/Quartal. Es muss daher gewährleistet sein, dass diese Angaben zueinander passen. Bei Abweichungen müssen entweder die Angaben bei der Blockung angepasst werden oder die Schüler in SchILDzentral in das jeweilige Halbjahr/Quartal übertragen werden.\
:::

**Abgleich der Jahrgänge**

Um die Jahrgänge abzugleichen, aktivieren Sie den Menüpunkt „Bearbeiten\>\>Statistik-Jahrgänge anzeigen“, es erscheint dann das folgende Fenster:

![News Kurs42 007](/bilder/tools/kurs42/news-kurs42-007.jpg)

Wenn man auf den Schalter „Laden“ klickt, werden die internen ID’s mit den Werten in der Zentraldatenbank abgeglichen:

![News Kurs42 008](/bilder/tools/kurs42/news-kurs42-008.jpg)

**Abgleich der Fächer**

Auch die IDs der Fächer müssen abgeglichen werden, hierzu reicht es, den Menüpunkt „DB-Zugriff\>\>Fächer mit DB abgleichen“ zu aktivieren.

![News Kurs42 009](/bilder/tools/kurs42/news-kurs42-009.jpg)

**Abgleich der Schüler**

Der Abgleich der Schüler IDs erfolgt über den Menüpunkt „DB-Zugriff\>\>Schüler-Ids mit DB abgleichen“.

![News Kurs42 010](/bilder/tools/kurs42/news-kurs42-010.jpg)

Zum Abgleich werden nicht nur Name, Vorname und Geburtsdatum herangezogen, sondern auch das bei den Schülern eingetragene Halbjahr/Quartal und der Jahrgang. Wenn eine dieser Angaben von denen in SchILDzentral abweicht, kann der Schüler/die Schülerin nicht gefunden werden. Man erhält dann im Protokoll (im unteren Teil des Programmfensters) Meldungen der Art :

*Nicht in der DB gefunden: Mustermann, Martin, 22.02.1992 (Status: Aktive, DB-Id: 33037, Jg.: 13, Kl.: 13)*

In einem solchen Fall ist zu prüfen, ob möglicherweise unterschiedliche Schreibweisen in Kurs42 und SchILDzentral die Ursache sind. Über den Menüpunkt „Bearbeiten\>\>Schüler intern bearbeiten...“ können bei diesen Schülern die Angaben korrigiert werden, danach sollten keine Fehlermeldungen mehr bei einem erneuten Abgleich auftreten. Um zu prüfen, ob der Abgleich erfolgreich durchgeführt werden konnte, aktivieren Sie den Menüpunkt „DB-Zugriff\>\>Schüler mit DB-Zugriff bearbeiten“.

![News Kurs42 011](/bilder/tools/kurs42/news-kurs42-011.jpg)

![News Kurs42 012](/bilder/tools/kurs42/news-kurs42-012.jpg)

Die ID-Nummern in der linken und rechten Liste sollten dann identisch sein. Speichern Sie anschließend die Blockungsdatei ab (evtl. unter neuem Namen).

<a id="Blockung_in_Datenbank_übertragen"></a>
<a id="Blockung_in_Datenbank_.C3.BCbertragen"></a>

## Blockung in Datenbank übertragen

Der Export der Blockungsdaten (Kurse, Belegungen bei den Schülern) erfolgt über den Menüpunkt „DB-Zugriff\>\>Blockung in DB exportieren“.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1023) · [News:Kurs42 unter Schild-Zentral – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=News%3AKurs42+unter+Schild-Zentral&oldid=6063)
