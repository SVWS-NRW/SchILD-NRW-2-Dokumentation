---
title: "PluginVersion"
---

# PluginVersion

<a id="RAP-Funktion_&quot;PluginVersion&quot;"></a>
<a id="RAP-Funktion_.22PluginVersion.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function PluginVersion: string;
```


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


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [PluginVersion – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PluginVersion&oldid=160)
