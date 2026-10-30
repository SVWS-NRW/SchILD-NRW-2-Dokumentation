---
title: "Transaktionsprotokoll verwenden"
---

# Transaktionsprotokoll verwenden

Das Transaktionsprotokoll hilft bei der Fehlersuche, wenn ein Gruppenprozess keine erkennbare Wirkung hat. Es zeichnet Fehlermeldungen auf, die während der Datenbankverarbeitung entstehen. Für die normale Arbeit muss es nicht ständig eingeschaltet sein.

Bei Gruppenprozessen werden in der Regel SQL-Befehle an die Datenbank geschickt. Wenn die aus irgendeinem Grunde nicht erfolgreich ausgeführt werden können (zum Beispiel wegen einem defekten Index), so wird die Fehlermeldung intern abgefangen (damit der Benutzer nicht mit hunderten von Fehlern "bombardiert" wird).

Wenn nun festgestellt wird, dass ein Gruppenprozess scheinbar nichts "tut", kann es daran liegen, dass derartige (abgefangene) Fehler erzeugt werden. Wenn man nun das Transaktionsprotokoll einschaltet,werden die Fehlermeldungen intern gespeichert und können über "Transaktionsprotokoll zeigen" sichtbar gemacht werden.

Wichtig: Wenn man "Transaktionsprotokoll zeigen" aufruft, wird anschließend das Transaktionsprotokoll autom. gelöscht (damit der Speicher nicht irgendwann überläuft), das heißt man kann sich ein Protokoll nur einmal anschauen, wenn man es dauerhaft benötigt, muss es separat aus dem Protokollfenster abgespeichert werden.

------------------------------------------------------------------------

---

Quelle: [Transaktionsprotokoll verwenden – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Transaktionsprotokoll+verwenden&oldid=3419)
