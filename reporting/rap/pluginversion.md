---
title: "PluginVersion"
wiki_title: "PluginVersion"
wiki_page_id: 117
wiki_revision: 160
---

# PluginVersion

<a id="RAP-Funktion_&quot;PluginVersion&quot;"></a>
<a id="RAP-Funktion_.22PluginVersion.22"></a>

## RAP-Funktion "PluginVersion"

## Beschreibung

```pascal
function PluginVersion: string;
Liefert die Version der Reporting.dll
```

## Parameter

```text
...
```

## Rückgabewert

```text
...
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


---

Quelle: [Lokal gesicherter Wiki-Quelltext](/quellen/wiki/seite-117) · [PluginVersion – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=PluginVersion&oldid=160)
