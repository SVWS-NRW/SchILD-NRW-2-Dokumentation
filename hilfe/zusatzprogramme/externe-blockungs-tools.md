---
title: "Externe Blockungs-Tools"
wiki_title: "Externe Blockungs-Tools"
wiki_page_id: 1155
wiki_revision: 4572
---

# Externe Blockungs-Tools

<a id="Kurs42_To_CNF"></a>

## Kurs42_To_CNF

Kurs42_To_CNF ist ein in JAVA programmiertes Tool zur Berechnung einer Kurs-Blockung. Daten können aus Kurs42 exportiert, dann mit Kurs42_To_CNF geblockt und anschließend wieder in Kurs42 importiert werden. Das Programm ist sehr mächtig und erstellt zur Zeit (Stand: April 2020) die mitunter besten Blockungen mit Nebenbedingungen. Das Programm kann nur eine Blockung berechnen, eine andere Funktionalität ist nicht vorgesehen.

Das Programm Kurs42_To_CNF berechnet eine Blockung mit Hilfe vom Benutzer definierter Regeln. Für die Berechnung wird die Blockung in ein mathematisches Gleichungssystem kodiert (genauer konjunktive Normalform, engl. \[C\]onjunctive \[N\]ormal \[F\]orm) und mit Hilfe eines SAT-Solvers gelöst (<https://github.com/msoos/cryptominisat/releases>). Das passiert im Hintergrund, der Benutzer muss nur den SAT-Solver zuvor herunter laden (cryptominisat5-win-amd64-nogauss.exe) und den Pfad im Programm hinterlegen.

                       **[Kurs42_To_CNF: Hauptseite](/hilfe/zusatzprogramme/kurs42-to-cnf-hauptseite)**\

<a id="Klausurplanung_CNF"></a>

## Klausurplanung_CNF

Klausurplanung_CNF ist ein in JAVA programmiertes Tool zur Berechnung von Klausurplanungen. Daten können aus Kurs42 exportiert, dann mit Klausurplanung_CNF geblockt und anschließend wieder in Kurs42 importiert und dort weiter verarbeitet werden, um bspw. Klausurpläne zu drucken. Das Programm ist, bei geeigneten Regeln, in der Lage, sehr ausgewogene Klausurpläne zu erstellen, die sowohl die Lehrer- als auch die Schülerperspektive berücksichtigen.

Das Programm Klausurplanung_CNF berechnet eine Blockung mit Hilfe vom Benutzer definierter Regeln. Für die Berechnung wird die Blockung in ein mathematisches Gleichungssystem kodiert (genauer konjunktive Normalform, engl. \[C\]onjunctive \[N\]ormal \[F\]orm) und mit Hilfe eines SAT-Solvers gelöst (<https://github.com/msoos/cryptominisat/releases>). Das passiert im Hintergrund, der Benutzer muss nur den SAT-Solver zuvor herunter laden (cryptominisat5-win-amd64-nogauss.exe) und den Pfad im Programm hinterlegen.

Das Programm Klausurplanung_CNF berechnet den Klausurplan einer Jahrgangsstufe und wurde inzwischen durch den Multi-Klausurplaner ersetzt.

**Das Programm wird nicht mehr weiterentwickelt. Bitte verwenden Sie stattdessen das Programm "Multi_Klausurplanung_CNF".**

                       **[Klausurplanung_CNF: Hauptseite](/hilfe/zusatzprogramme/klausurplanung-cnf-hauptseite)**\

<a id="Multi_Klausurplanung_CNF"></a>

## Multi_Klausurplanung_CNF

Multi_Klausurplanung_CNF ist ein in JAVA programmiertes Tool zur Berechnung von Klausurplanungen. Daten können aus Kurs42 exportiert, dann mit Multi_Klausurplanung_CNF geblockt und anschließend wieder in Kurs42 importiert und dort weiter verarbeitet werden, um bspw. Klausurpläne zu drucken. Das Programm ist, bei geeigneten Regeln, in der Lage, sehr ausgewogene Klausurpläne zu erstellen, die sowohl die Lehrer- als auch die Schülerperspektive berücksichtigen.

Das Programm Multi_Klausurplanung_CNF berechnet eine Blockung mit Hilfe vom Benutzer definierter Regeln. Für die Berechnung wird die Blockung in ein mathematisches Gleichungssystem kodiert (genauer konjunktive Normalform, engl. \[C\]onjunctive \[N\]ormal \[F\]orm) und mit Hilfe eines SAT-Solvers gelöst (<https://github.com/msoos/cryptominisat/releases>). Das passiert im Hintergrund, der Benutzer muss nur den SAT-Solver zuvor herunter laden (cryptominisat5-win-amd64-nogauss.exe) und den Pfad im Programm hinterlegen.

Das Programm Multi_Klausurplanung_CNF berechnet die Klausurpläne mehrerer Jahrgangsstufen parallel und in Beziehung zueinander, so dass z.B. in der gymnasialen Oberstufe alle drei Jahrgangsstufen in einer gemeinsamer Klausurplanung berechnet werden.

                       **[Multi_Klausurplanung_CNF: Hauptseite](/hilfe/zusatzprogramme/multi-klausurplanung-cnf-hauptseite)**\

<a id="Konferenzplanung_CNF"></a>

## Konferenzplanung_CNF

...

<a id="Sitzplangenerator"></a>

## Sitzplangenerator

...

---

---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-1155) · [Externe Blockungs-Tools – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Externe+Blockungs-Tools&oldid=4572)
