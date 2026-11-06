---
title: "Statistik-DLL registrieren"
---

# Statistik-DLL registrieren

Diese Anleitung behandelt die Fehlermeldung **Klasse nicht registriert** beim Statistikexport. Ursache kann eine auf dem Arbeitsplatz nicht registrierte Statistik-DLL sein. Eine DLL ist eine Programmbibliothek, die SchILD-NRW 2 für diesen Export verwendet.

## Registrierung per Klick

Sie haben eine Serverinstallation und beim Aufruf des Menüpunkts Schulverwaltung \> Statistik / amtliche Schuldaten \> Export (mit Modulen von IT-NRW) kommt an einem Client ab Windows 7 folgende Fehlermeldung:

***Fehler beim Aufruf der Statistik-DLL: Klasse nicht registriert***

In diesem Fall wurde bei der Installation vergessen, die Statistikkomponenten am Client zu registrieren. Rufen Sie SchILD-NRW 2 zunächst mit der rechten Maustaste als Administrator auf!

![Adminzugriff](/bilder/hilfe/probleme/adminzugriff.jpg)

*SchILD-NRW 2 als Administrator starten.*

Gehen Sie dann unter "Schulverwaltung \> Statistik / amtliche Schuldaten \> Hilfe bei Problemen". Klicken Sie dort die Schaltfläche "Dateien registrieren".Danach sollte die Fehlermeldung weg sein und der Export sollte möglich sein. Sollte der Button nicht anklickbar sein, so haben Sie keine Administratorenrechte auf dem PC!

Durch Betätigen der Schaltfläche wird ein Programm mit dem Namen "statistik_dlls_regiestrieren.exe" ausgeführt. Dieses registriert die Fehlenden Statistikkomponenten im Betriebssystem. Das Programm befindet sich im SchILD-NRW 2 Installationsverzeicnis und kann auch manuell als Administrator gestartet werden. Beim manuellen Start müssen Sie darauf achten, dass der korrekte Serverpfad zur SchILD-NRW 2-Installation angegeben wird!

## Anleitung als Video-Tutorial

Ein Video-Tutorial gibt es hier:

[Video ansehen](https://www.youtube-nocookie.com/embed/x0I1M7M5EMM)

## Manuelle Registrierung durch Administratoren

Alle hier folgend beschreibenen Maßnahmen sind nur für den Notfall gedacht in Systemumgebungen, in denen die Ausführung des o.g. Menüpunkts nicht gelingt.

Überprüfen Sie, ob die Dateien "comctl32.ocx" und "comdlg32.ocx" im Verzeichnis /Windows/System32 (Windows 32-bit) beziehungsweise /Windows/SysWOW64 (Windows 64-bit) vorhanden sind. Sollten die Dateien dort fehlen, so kopieren Sie diese aus dem SchILD-NRW 2 Unterordner "LDS" in die entsprechenden Verzeichnisse.

Anschließend wird die Registrierung am einfachsten mit einer Batch-Datei vorgenommen. Die Pfade müssen dabei auf die Umgebung angepasst werden.

Windows 32-bit:

rem Die nachfolgende Verzeichnis-Zuweisungen müssen gegebenenfalls geändert werden\
set SCHILD_DIR=C:\Programme\SchILD-Zentral\
set WIN_DIR=C:\WINDOWS\
set SYS_DIR=C:\WINDOWS\SYSTEM32\
rem\
regsvr32.exe /s %SCHILD_DIR%\LDS\ASDStatistik.dll\
regsvr32.exe /s %SCHILD_DIR%\LDS\vsprint8.ocx \
regsvr32.exe /s %SCHILD_DIR%\LDS\vspdf8.ocx\
regsvr32.exe /s %SCHILD_DIR%\LDS\EncodeClasses2.dll\
rem\
rem Systemdateien\
regsvr32.exe %SYS_DIR%\comctl32.ocx\
regsvr32.exe %SYS_DIR%\comdlg32.ocx\

Windows 64-bit:

rem Die nachfolgende Verzeichnis-Zuweisungen müssen gegebenenfalls geändert werden\
set SCHILD_DIR=C:\Programme\SchILD-Zentral\
set WIN_DIR=C:\WINDOWS\
;WICHTIG: In der nächsten Zeile nicht C:\WINDOWS\SYSTEM32 eintragen!\
set SYS_DIR=C:\WINDOWS\SysWOW64\
rem\
%WIN_DIR%\syswow64\regsvr32.exe /s %SCHILD_DIR%\LDS\ASDStatistik.dll\
%WIN_DIR%\syswow64\regsvr32.exe /s %SCHILD_DIR%\LDS\vsprint8.ocx \
%WIN_DIR%\syswow64\regsvr32.exe /s %SCHILD_DIR%\LDS\vspdf8.ocx\
%WIN_DIR%\syswow64\regsvr32.exe /s %SCHILD_DIR%\LDS\EncodeClasses2.dll\
rem\
rem Systemdateien\
%WIN_DIR%\syswow64\regsvr32.exe %SYS_DIR%\comctl32.ocx\
%WIN_DIR%\syswow64\regsvr32.exe %SYS_DIR%\comdlg32.ocx\

Quelle: [Fehler beim Export der Statistikdateien - Klasse nicht registriert – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=Fehler+beim+Export+der+Statistikdateien+-+Klasse+nicht+registriert&oldid=5469)
