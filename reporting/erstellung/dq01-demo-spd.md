---
title: "Beispiel einer eigenen Report-Datenquelle"
---

<a id="dq01-demo-spd"></a>

# Beispiel einer eigenen Report-Datenquelle

Dieses Konfigurationsbeispiel ergänzt die Anleitung **Eigene Datenquellen für SchILD-Reports**. Es zeigt Abfragen und Zuordnungen für mehrere Datenquellen. Beginnen Sie mit der Grundlagenanleitung, bevor Sie die nachfolgenden technischen Angaben verwenden.

\[Queries\] \_\_qryNeueDatenQuelle

---------------------------------------------

Neue Datenquelle

\[Query\_\_qryNeueDatenQuelle\] Name=\_\_qryNeueDatenQuelle InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart NOT IN ('EES','EGS1','ZUV','AGGT','FOGT') and L.Hochrechnung=0 Command6=and F.ID=L.Fach_ID Command7=and ( F.StatistikKrz IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') Command8=or L.Kursart IN ('WPI','WP1FS','WP1NT','WP1SW','WP1MU') ) Command9=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerLeistungenHJ1FG1\] Name=\_\_dsSchuelerLeistungenHJ1FG1

\[Pipeline\_\_qrySchuelerLeistungenHJ1FG1\] Name=\_\_pplnSchuelerLeistungenHJ1FG1 OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerLeistungenHJ1FG1

Fachgruppe2

\[Query\_\_qrySchuelerLeistungenHJ1FG2\] Name=\_\_qrySchuelerLeistungenHJ1FG2 InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('PUK','PUT','WPII','FS3') and L.Hochrechnung=0 Command6=and F.ID=L.Fach_ID and F.StatistikKrz NOT IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') Command7=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerLeistungenHJ1FG2\] Name=\_\_dsSchuelerLeistungenHJ1FG2

\[Pipeline\_\_qrySchuelerLeistungenHJ1FG2\] Name=\_\_pplnSchuelerLeistungenHJ1FG2 OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerLeistungenHJ1FG2

Förderunterricht

\[Query\_\_qrySchuelerFoerderung1HJ\] Name=\_\_qrySchuelerFoerderung1HJ InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('EES','EGS1','FOGT','ZUV') and L.Hochrechnung=0 Command6=and F.ID=L.Fach_ID Command7=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerFoerderung1HJ\] Name=\_\_dsSchuelerFoerderung1HJ

\[Pipeline\_\_qrySchuelerFoerderung1HJ\] Name=\_\_pplnSchuelerFoerderung1HJ OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerFoerderung1HJ

Abschnittsdaten

\[Query\_\_qrySchuelerAbschnittsdaten1HJ\] Name=\_\_qrySchuelerAbschnittsdaten1HJ InitCommand=select SumFehlStd, SumFehlStdU, Wiederholung, VersetzungKrz from SchuelerLernabschnittsdaten where ID=-1 Command1=select A.SumFehlStd, A.SumFehlStdU, A.Wiederholung, A.VersetzungKrz from SchuelerLernabschnittsdaten A, EigeneSchule ES Command2=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command3=and A.Abschnitt=ES.AnzahlAbschnitte/2 and A.Schueler_ID=:ID MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerAbschnittsdaten1HJ\] Name=\_\_dsSchuelerAbschnittsdaten1HJ

\[Pipeline\_\_qrySchuelerAbschnittsdaten1HJ\] Name=\_\_pplnSchuelerAbschnittsdaten1HJ OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerAbschnittsdaten1HJ

2\. HJ.

Fachgruppe1

\[Query\_\_qrySchuelerLeistungenHJ2FG1\] Name=\_\_qrySchuelerLeistungenHJ2FG1 InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart NOT IN ('EES','EGS1','ZUV','AGGT','FOGT') and L.Hochrechnung=0 Command6=and F.ID=L.Fach_ID Command7=and ( F.StatistikKrz IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') Command8=or L.Kursart IN ('WPI','WP1FS','WP1NT','WP1SW','WP1MU') ) Command9=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerLeistungenHJ2FG1\] Name=\_\_dsSchuelerLeistungenHJ2FG1

\[Pipeline\_\_qrySchuelerLeistungenHJ2FG1\] Name=\_\_pplnSchuelerLeistungenHJ2FG1 OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerLeistungenHJ2FG1

Fachgruppe 2

\[Query\_\_qrySchuelerLeistungenHJ2FG2\] Name=\_\_qrySchuelerLeistungenHJ2FG2 InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('PUK','PUT','WPII','FS3') and L.Hochrechnung=0 Command6=and F.ID=L.Fach_ID and F.StatistikKrz NOT IN ('D','M','E','E5','F','F6','F7','F8','F9','F0','F1','L','L5','L6','L7','L8','L9','L0') Command7=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerLeistungenHJ2FG2\] Name=\_\_dsSchuelerLeistungenHJ2FG2

\[Pipeline\_\_qrySchuelerLeistungenHJ2FG2\] Name=\_\_pplnSchuelerLeistungenHJ2FG2 OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerLeistungenHJ2FG2

Förderunterricht

\[Query\_\_qrySchuelerFoerderung2HJ\] Name=\_\_qrySchuelerFoerderung2HJ InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '-' and L.Kursart IN ('EES','EGS1','FOGT','ZUV') and L.Hochrechnung=0 Command6=and F.ID=L.Fach_ID Command7=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerFoerderung2HJ\] Name=\_\_dsSchuelerFoerderung2HJ

\[Pipeline\_\_qrySchuelerFoerderung2HJ\] Name=\_\_pplnSchuelerFoerderung2HJ OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerFoerderung2HJ

Abschnittsdaten

\[Query\_\_qrySchuelerAbschnittsdaten2HJ\] Name=\_\_qrySchuelerAbschnittsdaten2HJ InitCommand=select SumFehlStd, SumFehlStdU, Wiederholung, VersetzungKrz, Abschluss, MoeglNPFaecher from SchuelerLernabschnittsdaten where ID=-1 Command1=select A.SumFehlStd, A.SumFehlStdU, A.Wiederholung, A.VersetzungKrz, A.Abschluss, A.MoeglNPFaecher from SchuelerLernabschnittsdaten A, EigeneSchule ES Command2=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command3=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerAbschnittsdaten2HJ\] Name=\_\_dsSchuelerAbschnittsdaten2HJ

\[Pipeline\_\_qrySchuelerAbschnittsdaten2HJ\] Name=\_\_pplnSchuelerAbschnittsdaten2HJ OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerAbschnittsdaten2HJ

Epochenunterricht

\[Query\_\_qrySchuelerLeistungenHJ2EP\] Name=\_\_qrySchuelerLeistungenHJ2EP InitCommand=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl from EigeneSchule_Faecher F, SchuelerLeistungsdaten L where L.ID=-1 and F.ID=L.Fach_ID Command1=select F.FachKrz, L.NotenKrz, L.FachLehrer, L.Kursart, L.Warnung, L.VorherAbgeschl Command2=from EigeneSchule_Faecher F, SchuelerLeistungsdaten L, SchuelerLernabschnittsdaten A, EigeneSchule ES Command3=where ES.SchulnrEigner=\$SCHULNR\$ and A.SchulnrEigner=\$SCHULNR\$ and A.Jahr=ES.Schuljahr Command4=and A.Abschnitt=ES.AnzahlAbschnitte and A.Schueler_ID=:ID Command5=and L.Abschnitt_ID=A.ID and L.AufZeugnis='+' and L.VorherAbgeschl = '+' Command6=and L.Kursart IN ('PUK','PUT','WPII','FS3') and L.Hochrechnung = 0 Command7=and F.ID=L.Fach_ID Command8=order by F.Sortierung MasterSource=Schueler.Datasource

\[Datasource\_\_qrySchuelerLeistungenHJ2EP\] Name=\_\_dsSchuelerLeistungenHJ2EP

\[Pipeline\_\_qrySchuelerLeistungenHJ2EP\] Name=\_\_pplnSchuelerLeistungenHJ2EP OpendataSource=1 CloseDataSource=1 SkipWhenNoRecords=0 UserName=xxSchuelerLeistungenHJ2EP

---

Quelle: [DQ01-Demo.spd – ursprüngliches Wiki](https://wiki.svws.nrw.de/mediawiki/index.php?title=DQ01-Demo.spd&oldid=3513)
