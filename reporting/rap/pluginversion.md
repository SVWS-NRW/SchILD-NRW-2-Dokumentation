---
title: "PluginVersion"
---

# PluginVersion

## Beschreibung

Liefert die Version der Reporting.dll

```pascal
function PluginVersion: string;
```

## Beispiel

```pascal
procedure ReportBeforePrint;
 var
  vers: string;
 begin
  vers := PluginVersion;
  if vers >= ‘2’ then
  begin
  end;
 end;
```

**Zurück zu [RAP-Funktionen](/reporting/rap)**

Quelle: [PluginVersion – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PluginVersion&oldid=160)
