---
search: false
sidebar: false
outline: false
title: "Wiki-Quelle: DQ01-Demo.spd"
---

# DQ01-Demo.spd

Gesicherte Wiki-Seite · Namensraum 0 · Version 3513 · Stand 2015-09-07.

[Lesbaren Artikel öffnen](/reporting/erstellung/dq01-demo-spd) · [Originaldaten herunterladen](/dateien/quellen/seite-932.json) · [Zum Quellenarchiv](/quellen/)

## Originalquelltext

```text
[Queries]
__qryNeueDatenQuelle

;---------------------------------------------
;Neue Datenquelle
;

[Query__qryNeueDatenQuelle]
Name=__qryNeueDatenQuelle
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart NOT IN ('EES','EGS1','ZUV','AGGT','FOGT') and L.Hochrechnung=0
Command6=and F.ID=L.Fach_ID
Command7=and ( F.StatistikKrz IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') 
Command8=or L.Kursart IN ('WPI','WP1FS','WP1NT','WP1SW','WP1MU') )
Command9=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerLeistungenHJ1FG1]
Name=__dsSchuelerLeistungenHJ1FG1

[Pipeline__qrySchuelerLeistungenHJ1FG1]
Name=__pplnSchuelerLeistungenHJ1FG1
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerLeistungenHJ1FG1

;Fachgruppe2
[Query__qrySchuelerLeistungenHJ1FG2]
Name=__qrySchuelerLeistungenHJ1FG2
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('PUK','PUT','WPII','FS3') and L.Hochrechnung=0
Command6=and F.ID=L.Fach_ID and F.StatistikKrz NOT IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') 
Command7=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerLeistungenHJ1FG2]
Name=__dsSchuelerLeistungenHJ1FG2

[Pipeline__qrySchuelerLeistungenHJ1FG2]
Name=__pplnSchuelerLeistungenHJ1FG2
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerLeistungenHJ1FG2

;Förderunterricht
[Query__qrySchuelerFoerderung1HJ]
Name=__qrySchuelerFoerderung1HJ
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('EES','EGS1','FOGT','ZUV') and L.Hochrechnung=0
Command6=and F.ID=L.Fach_ID
Command7=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerFoerderung1HJ]
Name=__dsSchuelerFoerderung1HJ

[Pipeline__qrySchuelerFoerderung1HJ]
Name=__pplnSchuelerFoerderung1HJ
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerFoerderung1HJ

;Abschnittsdaten
[Query__qrySchuelerAbschnittsdaten1HJ]
Name=__qrySchuelerAbschnittsdaten1HJ
InitCommand=select SumFehlStd, SumFehlStdU, Wiederholung, VersetzungKrz from SchuelerLernabschnittsdaten where ID=-1
Command1=select A.SumFehlStd, A.SumFehlStdU, A.Wiederholung, A.VersetzungKrz from SchuelerLernabschnittsdaten A, EigeneSchule ES
Command2=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command3=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerAbschnittsdaten1HJ]
Name=__dsSchuelerAbschnittsdaten1HJ

[Pipeline__qrySchuelerAbschnittsdaten1HJ]
Name=__pplnSchuelerAbschnittsdaten1HJ
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerAbschnittsdaten1HJ

;2. HJ.

;Fachgruppe1
[Query__qrySchuelerLeistungenHJ2FG1]
Name=__qrySchuelerLeistungenHJ2FG1
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart NOT IN ('EES','EGS1','ZUV','AGGT','FOGT') and L.Hochrechnung=0
Command6=and F.ID=L.Fach_ID
Command7=and ( F.StatistikKrz IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0')
Command8=or L.Kursart IN ('WPI','WP1FS','WP1NT','WP1SW','WP1MU') )
Command9=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerLeistungenHJ2FG1]
Name=__dsSchuelerLeistungenHJ2FG1

[Pipeline__qrySchuelerLeistungenHJ2FG1]
Name=__pplnSchuelerLeistungenHJ2FG1
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerLeistungenHJ2FG1

;Fachgruppe 2
[Query__qrySchuelerLeistungenHJ2FG2]
Name=__qrySchuelerLeistungenHJ2FG2
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('PUK','PUT','WPII','FS3') and L.Hochrechnung=0
Command6=and F.ID=L.Fach_ID and F.StatistikKrz NOT IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') 
Command7=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerLeistungenHJ2FG2]
Name=__dsSchuelerLeistungenHJ2FG2

[Pipeline__qrySchuelerLeistungenHJ2FG2]
Name=__pplnSchuelerLeistungenHJ2FG2
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerLeistungenHJ2FG2

;Förderunterricht
[Query__qrySchuelerFoerderung2HJ]
Name=__qrySchuelerFoerderung2HJ
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('EES','EGS1','FOGT','ZUV') and L.Hochrechnung=0
Command6=and F.ID=L.Fach_ID
Command7=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerFoerderung2HJ]
Name=__dsSchuelerFoerderung2HJ

[Pipeline__qrySchuelerFoerderung2HJ]
Name=__pplnSchuelerFoerderung2HJ
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerFoerderung2HJ

;Abschnittsdaten
[Query__qrySchuelerAbschnittsdaten2HJ]
Name=__qrySchuelerAbschnittsdaten2HJ
InitCommand=select SumFehlStd, SumFehlStdU, Wiederholung, VersetzungKrz, Abschluss, MoeglNPFaecher from SchuelerLernabschnittsdaten where ID=-1
Command1=select A.SumFehlStd, A.SumFehlStdU, A.Wiederholung, A.VersetzungKrz, A.Abschluss, A.MoeglNPFaecher from SchuelerLernabschnittsdaten A, EigeneSchule ES
Command2=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command3=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerAbschnittsdaten2HJ]
Name=__dsSchuelerAbschnittsdaten2HJ

[Pipeline__qrySchuelerAbschnittsdaten2HJ]
Name=__pplnSchuelerAbschnittsdaten2HJ
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerAbschnittsdaten2HJ

;Epochenunterricht
[Query__qrySchuelerLeistungenHJ2EP]
Name=__qrySchuelerLeistungenHJ2EP
InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID 
Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl
Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES
Command3=where ES.SchulnrEigner=$SCHULNR$ and A.SchulnrEigner=$SCHULNR$ and A.Jahr=ES.Schuljahr 
Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID
Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '+'
Command6=and L.Kursart IN ('PUK','PUT','WPII','FS3') and L.Hochrechnung = 0
Command7=and F.ID=L.Fach_ID
Command8=order by F.Sortierung
MasterSource=Schueler.Datasource

[Datasource__qrySchuelerLeistungenHJ2EP]
Name=__dsSchuelerLeistungenHJ2EP

[Pipeline__qrySchuelerLeistungenHJ2EP]
Name=__pplnSchuelerLeistungenHJ2EP
OpendataSource=1
CloseDataSource=1
SkipWhenNoRecords=0
UserName=xxSchuelerLeistungenHJ2EP
```
