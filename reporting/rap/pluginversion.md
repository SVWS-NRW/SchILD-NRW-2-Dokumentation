---
title: "PluginVersion"
---

# PluginVersion

<a id="RAP-Funktion_&quot;PluginVersion&quot;"></a>
<a id="RAP-Funktion_.22PluginVersion.22"></a>

## Signatur

```pascal
function PluginVersion: string;
```

## Beschreibung

Liefert die Version der Reporting.dll

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


---

[Alle RAP-Funktionen](/reporting/rap/rap-funktionen)

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-117) · [PluginVersion – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PluginVersion&oldid=160)
