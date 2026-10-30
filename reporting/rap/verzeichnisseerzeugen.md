---
title: "VerzeichnisseErzeugen"
---

# VerzeichnisseErzeugen

<a id="RAP-Funktion_&quot;VerzeichnisseErzeugen&quot;"></a>
<a id="RAP-Funktion_.22VerzeichnisseErzeugen.22"></a>

<a id="signatur"></a>

## Beschreibung

```pascal
function VerzeichnisseErzeugen(const aVerzeichnis : String): Boolean;
```


VerzeichnisseErzeugen erstellt das in 'aVerzeichnis' vollständig angegebene Verzeichnis.
Sind die übergeordneten Verzeichnisse nicht vorhanden, werden diese automatisch angelegt.
VerzeichnisseErzeugen gibt den Wert true zurück, wenn es alle notwendigen
Verzeichnisse erstellt hat, False, wenn das Verzeichnis nicht erstellt werden konnte.

Warnung: Rufen Sie VerzeichnisseErzeugen nicht mit einem leeren String auf.
Dies kann dazu führen, dass VerzeichnisseErzeugen eine Ausnahme auslöst.

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `aVerzeichnis` | Verzeichnis, das erzeugt werden soll |


## Rückgabewert

True, falls das Verzeichnis existiert oder erzeugt werden konnte, false sonst

## Beispiel

```pascal
if VerzeichnisseErzeugen('c:\programme\schild-nrw\ausgabe') then begin
  Filename:='c:\programme\schild-nrw\ausgabe\Hinweis.txt'
  Memo1.Lines.SaveToFile(Filename);
end;
```


**Zurück zu [RAP-Funktionen](/reporting/rap)**

---

Quelle: [VerzeichnisseErzeugen – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=VerzeichnisseErzeugen&oldid=129)
