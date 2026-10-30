---
title: "NurGewerteteAbschnitte"
---

# NurGewerteteAbschnitte

<a id="RAP-Funktion_&quot;NurGewerteteAbschnitte&quot;"></a>
<a id="RAP-Funktion_.22NurGewerteteAbschnitte.22"></a>

## Beschreibung

Steuert, ob ausschließlich gewertete Lernabschnitte angezeigt werden. Die nachfolgenden Hinweise erläutern die Voreinstellung und ihre Bedeutung für Leistungsübersichten.

```pascal
NurGewerteteAbschnitte( zeigen: boolen );
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `Anzeigewerte` | True, False |

## Beispiel

```pascal
NurGewerteteAbschnitte( false );
```

Wichtig: Der "Default" steht" auf "true" (das heißt nur gewertete Abschnitte
zeigen). Andernfalls könnte es Probleme bei Reports geben, die nur gewertete
Abschnitte zeigen dürfen (zum Beispiel Abi-Übersichten). Wenn man für ein Stammblatt
auch die nicht gewerteten Abschnitte sehen will.

**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [NurGewerteteAbschnitte – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=NurGewerteteAbschnitte&oldid=185)
