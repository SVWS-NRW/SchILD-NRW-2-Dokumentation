---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Transaktionsprotokoll verwenden"
---

# Transaktionsprotokoll verwenden

Gesicherte Wiki-Seite · Namensraum 0 · Version 3419 · Stand 2015-07-31.

[Lesbaren Artikel öffnen](/administration/datenbanken/transaktionsprotokoll-verwenden) · [Originaldaten herunterladen](/dateien/quellen/seite-900.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
Bei Gruppenprozessen werden i.d.R. SQL-Befehle an die Datenbank geschickt.
Wenn die aus irgendeinem Grunde nicht erfolgreich ausgeführt werden können (z.B. wegen einem defekten Index), so wird die Fehlermeldung intern abgefangen (damit der Benutzer nicht mit hunderten von Fehlern "bombardiert" wird). 

Wenn nun festgestellt wird, dass ein Gruppenprozess scheinbar nichts "tut", kann es daran liegen, dass derartige (abgefangene) Fehler erzeugt werden. Wenn man nun das Transaktionsprotokoll einschaltet,werden die Fehlermeldungen intern gespeichert und können über "Transaktionsprotokoll zeigen" sichtbar gemacht werden.

Wichtig: Wenn man "Transaktionsprotokoll zeigen" aufruft, wird anschließend das Transaktionsprotokoll autom. gelöscht (damit der Speicher nicht irgendwann überläuft), d.h. man kann sich ein Protokoll nur einmal anschauen, wenn man es dauerhaft benötigt, muss es separat aus dem Protokollfenster abgespeichert werden.

----

[[Extras|Zurück zu Extras]]
```
