---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: VerzeichnisseErzeugen"
---

# VerzeichnisseErzeugen

Gesicherte Wiki-Seite · Namensraum 0 · Version 129 · Stand 2013-11-05.

[Lesbaren Artikel öffnen](/reporting/rap/verzeichnisseerzeugen) · [Originaldaten herunterladen](/dateien/quellen/seite-105.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
{|class="wikitable"
=== RAP-Funktion "{{SEITENNAME}}" ===
|'''Beschreibung''' || 
    function VerzeichnisseErzeugen(const aVerzeichnis : String): Boolean;
    VerzeichnisseErzeugen erstellt das in 'aVerzeichnis' vollständig angegebene Verzeichnis.
    Sind die übergeordneten Verzeichnisse nicht vorhanden, werden diese automatisch angelegt.
    VerzeichnisseErzeugen gibt den Wert true zurück, wenn es alle notwendigen
    Verzeichnisse erstellt hat, False, wenn das Verzeichnis nicht erstellt werden konnte.

    Warnung: Rufen Sie VerzeichnisseErzeugen nicht mit einem leeren String auf.
    Dies kann dazu führen, dass VerzeichnisseErzeugen eine Ausnahme auslöst.
|-
|'''Parameter''' || 
    aVerzeichnis   - Verzeichnis, das erzeugt werden soll
|-
|'''Rückgabewert''' ||
    True, falls das Verzeichnis existiert oder erzeugt werden konnte, false sonst
|- 
|'''Beispiel''' || 
    if VerzeichnisseErzeugen('c:\programme\schild-nrw\ausgabe') then begin
      Filename:='c:\programme\schild-nrw\ausgabe\Hinweis.txt'
      Memo1.Lines.SaveToFile(Filename);
    end;
|}



'''Zurück zu [[RAP-Funktionen]]'''
```
