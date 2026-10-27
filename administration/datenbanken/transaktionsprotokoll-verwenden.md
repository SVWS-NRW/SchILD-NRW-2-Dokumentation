---
title: "Transaktionsprotokoll verwenden"
wiki_title: "Transaktionsprotokoll verwenden"
wiki_page_id: 900
wiki_revision: 3419
---

# Transaktionsprotokoll verwenden

Bei Gruppenprozessen werden i.d.R. SQL-Befehle an die Datenbank geschickt. Wenn die aus irgendeinem Grunde nicht erfolgreich ausgeführt werden können (z.B. wegen einem defekten Index), so wird die Fehlermeldung intern abgefangen (damit der Benutzer nicht mit hunderten von Fehlern "bombardiert" wird).

Wenn nun festgestellt wird, dass ein Gruppenprozess scheinbar nichts "tut", kann es daran liegen, dass derartige (abgefangene) Fehler erzeugt werden. Wenn man nun das Transaktionsprotokoll einschaltet,werden die Fehlermeldungen intern gespeichert und können über "Transaktionsprotokoll zeigen" sichtbar gemacht werden.

Wichtig: Wenn man "Transaktionsprotokoll zeigen" aufruft, wird anschließend das Transaktionsprotokoll autom. gelöscht (damit der Speicher nicht irgendwann überläuft), d.h. man kann sich ein Protokoll nur einmal anschauen, wenn man es dauerhaft benötigt, muss es separat aus dem Protokollfenster abgespeichert werden.

------------------------------------------------------------------------

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-900) · [Transaktionsprotokoll verwenden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Transaktionsprotokoll+verwenden&oldid=3419)
