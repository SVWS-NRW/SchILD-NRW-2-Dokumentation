---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: Export für BAN-Portal"
---

# Export für BAN-Portal

Gesicherte Wiki-Seite · Namensraum 0 · Version 6070 · Stand 2026-05-18.

[Lesbaren Artikel öffnen](/schild2/import-export-statistik/export-fuer-ban-portal) · [Originaldaten herunterladen](/dateien/quellen/seite-1391.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
__TOC__

Zu KAoA gehört das ''Belegungs-, Abrechnungs- und Nachweisportal'', das [https://banportal-kaoa.de ''BAN-Portal'']. Nehmen Sie hier auch die [https://banportal-kaoa.de/Home/About Information zum Portal und zum Supportkontakt] zur Kenntnis.

Hierbei sollen die Schüler identifiziert werden, die über keine konkrete Anschlussperspektive wie eine Ausbildung, Schulplatz, ein freiwilliges Jahr, Praktikum für den FHR und so weiter verfügen. Aus SchILD-NRW lassen sich die im Portal einzulesenden Daten exportieren. In der Regel sollte dies nur wenige Schüler betreffen.

==Schüler vorbereiten==
[[Datei:SchILD-NRW_Export_BAN-Portal_Markieren.png|thumb|hochkant=1.7|Markieren Sie Schüler als ''für das BAN-Portal zu exportieren''.]]
Damit Schülerdaten exportiert werden, müssen die Schüler als zu exportieren markiert werden.

Dies nehmen Sie für individuelle Schüler unter ''Schüler ➜ Akt. Halbjahr ➜ Allgemeine Angaben'' mit dem gesetzten Haken bei '''Für Meldung an BAN-Portal''' vor.

{{Hinweis|1=Beachten Sie hierbei, dass die Markierung für den jeweils gewählten '''Lernabschnitt''' gilt. Sollen weitere Lernabschnitte exportiert werden, sind diese anzuwählen und ebenfalls zu markieren.}}

<br clear=all>
[[Datei:BAN Export Abschluss.png|thumb|hochkant=1.7|Abschlusseintrag.]]
'''Neu ab 2025: Der voraussichtlichen Abschluss muss nicht eingetragen werden'''

Der voraussichtlich erreichte Abschluss wird bei der Übermittlung der Daten an das BAN-Portal automatisiert ergänzt, so dass keine aktive Eingabe seitens der Schulen erforderlich ist. 


<br clear=all>
'''Den Haken per Gruppenprozess setzen'''

Für größere Gruppen lassen sich die Markierungen bei Bedarf komfortabel über einen ''Gruppenprozess'' setzen.

Wählen Sie zuerst die Schülergruppe aus, für welche die BAN-Markierungen gesetzt werden sollen und starten Sie den Gruppenprozess ''Individualdaten ändern ➜ Lernabschitte''.
<br clear=all>

==BAN-Export==
[[Datei:SchILD-NRW_Export_ExportBAN.png|thumb|hochkant=1.7|Exportieren Sie die Datei für das BAN-Portal aus SchILD-NRW.]]
In der Regel muss beim Export keine Schülergruppe ausgewählt werden, da die zu exportierenden Schüler schon im aktuellen Lernabschnitt markiert sind. Nicht-markierte Schüler werden daher beim Export ignoriert.

Sie können für den BAN-Export ausgehend von der gesamten Schülermenge arbeiten.

Sollten Sie nur ausgewählte Schülermengen exportieren wollen, filtern Sie diese vor dem Gruppenprozess aus.

Im Anschluss gehen Sie über ''Datenaustausch ➜ Weitere Exporte'' ➜ '''Export für BAN-Portal'''.
<br clear=all>
[[Datei:SchILD-NRW_Export_ExportBAN_Datei.png|thumb|hochkant=1.7|Wählen Sie den Speicherort der Exportdatei. Der Dateiname ''BAN-Export.csv''' wird beibehalten.]]
Im folgenden Fenster ist der '''Speicherort''' für die Datei zu wählen.

Hier im Beispiel wird im SchILD-NRW-Verzeichnis der Unterdrdner ''Export'' ausgewählt.

Der Standard-Dateiname wird beibehalten.

Ebenso lässt sich hier der '''Lernabschnitt''' anwählen, für den der Export ausgeführt wird. Alle Schüler, die im betreffenden Lernabschnitt als ''zu exportieren'' markiert sind, werden nun berücksichtigt.

Klicken Sie auf <code>Exportieren</code>.

Das über den Export informierende Fenster im Anschluss bestätigen Sie mit <code>OK</code>.
<br clear=all>
Der Export ist abgeschlossen. Die erzeugte Datei kann nun im BAN-Portal eingelesen werden.

{{Hinweis|1=Da im Dateinamen der ''BAN-Export.csv'' selbst kein Lernabschnitt enthalten ist und diese daher von außen jedes Jahr gleich aussieht, achten Sie bitte darauf, tatsächlich die jeweils aktuelle und gerade exportierte Datei beim folgenden Import auf dem BAN-Portal zu verwenden.}}

==Bedeutung der Tabellenwerte==
Sie erhalten eine Datei, in der spaltenweise - in Abhängigkeit von der Schulform - die folgenden Daten enthalten sind:
  Name, Vorname, Geburtsdatum, Geschlecht, Wohnort, PLZ, Straße, Hausnummer, Jahrgang, Gliederung (nur BK), voraussichtlich erreichter Abschluss

Hierbei können im Feld '''Geschlecht''' diese Werte auftreten:
* m - ''männlich''
* w - ''weiblich''
* o - ''ohne Angabe''
* d - ''divers''

Ausschließlich bei Berufskollegs wird im Feld '''Gliederung''' der ASD-Schlüssel für die Schulgliederung ausgewiesen, aus dem jeweils die Bezeichnung des Bildungsganges abgeleitet werden kann

{| class="wikitable" style="margin:auto;text-align:left"
|-
! Schulgliederung <br> (Schlüssel) !! Bezeichnung des Bildungsganges 
|-
| A12 || Ausbildungsvorbereitung in Vollzeitform gemäß §§ 18, 22 Absatz 3 APOBK Anlage A (Anlage A 2.2) 
|-
| A17 || Ausbildungsvorbereitung in Vollzeitform (Internationale Förderklasse) gemäß §§ 18, 22 Absatz 3 APOBK Anlage A (Anlage A 2.2) 
|-
| B06 || Berufsfachschule gemäß § 2 Nummer 1 APO-BK Anlage B (Anlage B 1) 
|-
| B07 || Berufsfachschule gemäß § 2 Nummer 2 APO-BK Anlage B (Anlage B 2) 
|-
| C03 || Berufsfachschule gemäß § 2 Nummer 3 Anlage C APO-BK (Anlage C 2) 
|-
| C05 || Fachoberschule gemäß § 8 Nummer 1 APO-BK Anlage C (Anlage C 3); Klasse 11
|-
| C06 || Fachoberschule gemäß § 8 Nummer 1 APO-BK Anlage C (Anlage C 3); Klasse 12S 
|-
| D02 || Berufliches Gymnasium § 1a Absatz 1 Nummer 1 APO-BK Anlage D (Anlagen D 14-D 28)
|}


Im Feld '''voraussichtlich erreichter Abschluss''' finden sich die Buchstabenkürzel, die nach der Statistik den Abschluss angeben. Diese Spalte dient nur zu Informationszwecken für die Schulen und kann in der Exportdatei auch leer bleiben, da der Eintrag zum voraussichtlichen Abschluss automatisiert beim Import auf dem BAN-Portal ergänzt wird. 
* A - ''Ohne Abschluss''
* B - ''Erster Schulabschluss (ohne Berechtigung zum Besuch der Klasse 10, Typ B)''
* C - ''Erster Schulabschluss (mit Berechtigung zum Besuch der Klasse 10, Typ B)''
* D - ''Erweiterter Erster Schulabschluss''
* F - ''Mittlerer Schulabschluss - Fachoberschulreife ohne Berechtigung zum Besuch der gymnasialen Oberstufe''
* G - ''Mittlerer Schulabschluss – Fachoberschulreife mit Berechtigung zum Besuch der gymnasialen Oberstufe (Einführungsphase)''
* H - ''Fachhochschulreife (schulischer Teil)''
* I - ''Mittlerer Schulabschluss – Fachoberschulreife mit Berechtigung zum Besuch der Qualifikationsphase 1''
* V - ''Abschluss des zieldifferenten Bildungsgangs Lernen''
* M - ''Abschlusszeugnis im zieldifferenten Bildungsgang Geistige Entwicklung''
* O - ''Erster Schulabschluss nach Klasse 9 (mit Berechtigung zum Besuch der gymnasialen Oberstufe; § 43 Abs. 3 i.V.m. § 40 Abs. 4 S. 2 APO-SI)''
* U - ''Erweiterter Erster Schulabschluss (mit Berechtigung zum Besuch der gymnasialen Oberstufe; § 41 Abs. 2 APO-SI i.V.m. § 40 Abs. 2 APO-GOSt)''

Felder ohne Eintrag werden als ''A - Ohne Abschluss'' gewertet.

{{Hinweis|1=Die Spalte „voraussichtlich erreichter Abschluss“, die in der Exportdatei nach wie vor ausgewiesen wird, hat für den BAN-Import keine Relevanz. Die Importspezifikation des BAN-Portal-Moduls stellt sicher, dass diese Spalte beim Einlesen in das BAN-Portal ignoriert wird.}}

----

[[#top|Zum Seitenanfang]]

[[Datenaustausch|Zurück zum Datenaustausch]]
```
