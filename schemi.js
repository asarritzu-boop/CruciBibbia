const SCHEMI_BIBLICI = [
    {
        id: 1,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'GIONATAN', c: 'Figlio di Saul che strinse un patto con Davide (1 Samuele 18:3)' },
            { n: 5, d: 'H', x: 9, y: 0, w: 'RE', c: 'Titolo di Salomone (1 Re 1:39)' },
            { n: 7, d: 'H', x: 0, y: 2, w: 'LEA', c: 'La figlia di Labano che Giacobbe sposò per prima (Genesi 29:23)' },
            { n: 8, d: 'H', x: 4, y: 2, w: 'ESBON', c: 'Città dove risiedeva il re amorreo Sihon (Numeri 21:26)' },
            { n: 10, d: 'H', x: 0, y: 4, w: 'EDEN', c: 'Il giardino dove fu posto il primo uomo (Genesi 2:8)' },
            { n: 12, d: 'H', x: 5, y: 4, w: 'MALTA', c: 'L\'isola dove Paolo fece naufragio (Atti 28:1)' },
            { n: 14, d: 'H', x: 0, y: 6, w: 'SINAI', c: 'Monte dove fu dato il Decalogo (Esodo 24:16)' },
            { n: 16, d: 'H', x: 6, y: 6, w: 'LUCA', c: 'Il diletto medico (Colossesi 4:14)' },
            { n: 18, d: 'H', x: 0, y: 8, w: 'SARA', c: 'Sposa di Abraamo e madre di Isacco (Genesi 21:2)' },
            { n: 20, d: 'H', x: 5, y: 8, w: 'ORO', c: 'Metallo usato per il candelabro (Esodo 25:31)' },
            { n: 22, d: 'H', x: 3, y: 10, w: 'AMEN', c: 'Significa "così sia" (Salmo 41:13)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ISAIA', c: 'Profeta che predisse la nascita del Messia (Isaia 7:14)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'ALFA', c: 'Titolo riferito a Geova (Rivelazione 22:13)' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'ADAMO', c: 'Fu formato dalla polvere del suolo (Genesi 2:7)' },
            { n: 6, d: 'V', x: 10, y: 0, w: 'EL', c: 'Inizio di Elia' },
            { n: 9, d: 'V', x: 5, y: 2, w: 'SOFANIA', c: 'Profeta che annunciò il giorno di Geova (Sofonia 1:1)' },
            { n: 11, d: 'V', x: 2, y: 4, w: 'ESAÙ', c: 'Vendette la primogenitura per un piatto di lenticchie (Genesi 25:34)' },
            { n: 13, d: 'V', x: 8, y: 4, w: 'ARA', c: 'Altare costruito da Noè dopo il diluvio (Genesi 8:20)' },
            { n: 15, d: 'V', x: 0, y: 6, w: 'SI', c: 'Affermazione' },
            { n: 17, d: 'V', x: 6, y: 6, w: 'LA', c: 'Articolo (ma ricorda: non usare articoli nelle risposte se possibile)' },
            { n: 19, d: 'V', x: 9, y: 8, w: 'RE', c: 'Saul lo fu per Israele' }
        ]
    },
    {
        id: 2,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'NABUCODONOSOR', c: 'Re di Babilonia che distrusse Gerusalemme (2 Re 25:1)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'UR', c: 'Luogo di nascita di Abraamo (Genesi 11:28)' },
            { n: 6, d: 'H', x: 3, y: 3, w: 'TIMOTEO', c: 'Giovane collaboratore dell\'apostolo Paolo (Atti 16:1)' },
            { n: 8, d: 'H', x: 0, y: 5, w: 'MARTA', c: 'Sorella di Maria che si affaccendava per i servizi (Luca 10:40)' },
            { n: 10, d: 'H', x: 6, y: 5, w: 'ESTER', c: 'Regina che sventò il piano di Aman (Ester 7:3-6)' },
            { n: 12, d: 'H', x: 1, y: 7, w: 'EZECHIELE', c: 'Ebbe la visione del carro celeste (Ezechiele 1:4-28)' },
            { n: 14, d: 'H', x: 0, y: 9, w: 'BETANIA', c: 'Villaggio dove viveva Lazzaro (Giovanni 11:1)' },
            { n: 2, d: 'V', x: 2, y: 1, w: 'ARONNE', c: 'Fratello maggiore di Mosè (Esodo 4:14)' },
            { n: 3, d: 'V', x: 5, y: 1, w: 'DITO', c: 'Le tavole furono scritte col "dito di Dio" (Esodo 31:18)' },
            { n: 5, d: 'V', x: 8, y: 1, w: 'SALOMONE', c: 'Figlio di Davide famoso per la sapienza (1 Re 3:12)' },
            { n: 7, d: 'V', x: 4, y: 3, w: 'IMENEO', c: 'Insegnava che la risurrezione fosse già avvenuta (2 Timoteo 2:17)' },
            { n: 9, d: 'V', x: 7, y: 5, w: 'ELIA', c: 'Il profeta rapito in un turbine (2 Re 2:11)' },
            { n: 11, d: 'V', x: 0, y: 5, w: 'SI', c: 'Affermazione' },
            { n: 13, d: 'V', x: 10, y: 7, w: 'RE', c: 'Giosia lo divenne a 8 anni (2 Re 22:1)' }
        ]
    },
    {
        id: 3,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'MELCHISEDEC', c: 'Re di Salem e sacerdote del Dio Altissimo (Genesi 14:18)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'BOAZ', c: 'Sposò la moabita Rut a Betlemme (Rut 4:13)' },
            { n: 7, d: 'H', x: 6, y: 2, w: 'SAMARIA', c: 'Città capitale del regno delle dieci tribù (1 Re 16:24)' },
            { n: 9, d: 'H', x: 0, y: 4, w: 'SABA', c: 'Regina che visitò Salomone con una carovana (1 Re 10:1)' },
            { n: 11, d: 'H', x: 5, y: 4, w: 'GIOSUE', c: 'Condusse Israele nella Terra Promessa (Giosuè 1:1, 2)' },
            { n: 13, d: 'H', x: 1, y: 6, w: 'GALILEA', c: 'Regione dove Gesù compì il primo miracolo (Giovanni 2:11)' },
            { n: 15, d: 'H', x: 0, y: 8, w: 'IDDIO', c: 'Appellativo per il Creatore (Genesi 1:1)' },
            { n: 17, d: 'H', x: 6, y: 8, w: 'MARIA', c: 'Madre di Gesù (Luca 1:30, 31)' },
            { n: 19, d: 'H', x: 2, y: 10, w: 'EDOM', c: 'Nazione discendente da Esaù (Genesi 36:1)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'LAODICEA', c: 'Congregazione né calda né fredda (Rivelazione 3:14)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'HESBON', c: 'Variante di ESBON (Usa ESBON se preferisci)' },
            { n: 4, d: 'V', x: 8, y: 0, w: 'DANIELE', c: 'Ricevette visioni sul tempo della fine (Daniele 12:4)' },
            { n: 6, d: 'V', x: 0, y: 2, w: 'BETEL', c: 'Significa "Casa di Dio" (Genesi 28:19)' },
            { n: 8, d: 'V', x: 10, y: 2, w: 'ZACCHEO', c: 'Capo degli esattori di tasse di Gerico (Luca 19:2)' },
            { n: 10, d: 'V', x: 6, y: 4, w: 'SIN', c: 'Deserto tra Elim e il Sinai (Esodo 16:1)' },
            { n: 12, d: 'V', x: 5, y: 8, w: 'MA', c: 'Congiunzione' },
            { n: 14, d: 'V', x: 3, y: 6, w: 'IL', c: 'Articolo' }
        ]
    },
    {
        id: 4,
        parole: [
            { n: 1, d: 'H', x: 2, y: 0, w: 'BEREANI', c: 'Esaminavano le Scritture ogni giorno (Atti 17:11)' },
            { n: 4, d: 'H', x: 0, y: 2, w: 'NAIN', c: 'Città dove Gesù risuscitò il figlio di una vedova (Luca 7:11)' },
            { n: 6, d: 'H', x: 6, y: 2, w: 'ADAR', c: 'Dodicesimo mese del calendario ebraico (Ester 3:7)' },
            { n: 8, d: 'H', x: 0, y: 4, w: 'GIOBBE', c: 'Uomo integro che visse nel paese di Uz (Giobbe 1:1)' },
            { n: 10, d: 'H', x: 7, y: 4, w: 'NOE', c: 'Costruì un\'arca per la salvezza (Genesi 6:14)' },
            { n: 12, d: 'H', x: 1, y: 6, w: 'SAMUELE', c: 'Servì Geova fin da bambino a Silo (1 Samuele 2:18)' },
            { n: 14, d: 'H', x: 0, y: 8, w: 'PIETRO', c: 'Apostolo a cui furono date le "chiavi" (Matteo 16:19)' },
            { n: 16, d: 'H', x: 7, y: 8, w: 'GIONA', c: 'Inghiottito da un grande pesce (Giona 1:17)' },
            { n: 18, d: 'H', x: 0, y: 10, w: 'EVA', c: 'La madre di tutti i viventi (Genesi 3:20)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'RUT', c: 'Nuora di Noemi che non volle lasciarla (Rut 1:16)' },
            { n: 3, d: 'V', x: 8, y: 0, w: 'ANNA', c: 'Profetessa che serviva al tempio (Luca 2:36)' },
            { n: 5, d: 'V', x: 1, y: 2, w: 'NINIVE', c: 'Capitale assira che si pentì (Giona 3:5)' },
            { n: 7, d: 'V', x: 10, y: 2, w: 'MOSE', c: 'Il più umile di tutti gli uomini (Numeri 12:3)' },
            { n: 9, d: 'V', x: 5, y: 4, w: 'AMMON', c: 'Popolo discendente dal figlio di Lot (Genesi 19:38)' },
            { n: 11, d: 'V', x: 0, y: 8, w: 'PE', c: 'Inizio di Pentateuco' },
            { n: 13, d: 'V', x: 4, y: 8, w: 'GI', c: 'Inizio di Giosuè' }
        ]
    },
    {
        id: 5,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'MARDOCHEO', c: 'Zio di Ester che sedeva alla porta del re (Ester 2:19)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'EGITTO', c: 'La terra da cui Israele fu liberato (Esodo 12:41)' },
            { n: 6, d: 'H', x: 7, y: 3, w: 'RE', c: 'Titolo regale' },
            { n: 8, d: 'H', x: 0, y: 5, w: 'GABRIELE', c: 'Angelo inviato a Maria (Luca 1:26)' },
            { n: 10, d: 'H', x: 8, y: 5, w: 'ORO', c: 'Metallo della Nuova Gerusalemme (Rivelazione 21:18)' },
            { n: 12, d: 'H', x: 1, y: 7, w: 'PENTECOSTE', c: 'Festa ebraica (Atti 2:1)' },
            { n: 14, d: 'H', x: 0, y: 9, w: 'SODOMA', c: 'Città distrutta per la sua malvagità (Genesi 19:24)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'AGABO', c: 'Profeta che predisse una carestia (Atti 11:28)' },
            { n: 3, d: 'V', x: 5, y: 0, w: 'DAGHET', c: 'Segno grammaticale ebraico' },
            { n: 5, d: 'V', x: 9, y: 1, w: 'OSANNA', c: 'Grido di esultanza (Matteo 21:9)' },
            { n: 7, d: 'V', x: 3, y: 3, w: 'ISAIA', c: 'Profeta che scrisse il libro omonimo' },
            { n: 9, d: 'V', x: 7, y: 5, w: 'RE', c: 'Gesù è il Re dei re' },
            { n: 11, d: 'V', x: 0, y: 5, w: 'SI', c: 'Affermazione' },
            { n: 13, d: 'V', x: 10, y: 7, w: 'ARA', c: 'Altare' }
        ]
    },
    {
        id: 6,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'NAZARET', c: 'La città dove crebbe Gesù (Matteo 2:23)' },
            { n: 5, d: 'H', x: 8, y: 0, w: 'DAN', c: 'Figlio di Giacobbe e Bila (Genesi 30:6)' },
            { n: 7, d: 'H', x: 0, y: 2, w: 'ENOC', c: 'Camminò con il vero Dio e non fu più trovato (Genesi 5:24)' },
            { n: 8, d: 'H', x: 5, y: 2, w: 'URIA', c: 'Marito di Betsabea mandato in prima linea da Davide (2 Samuele 11:3)' },
            { n: 10, d: 'H', x: 0, y: 4, w: 'MIRIAM', c: 'Profetessa, sorella di Mosè (Esodo 15:20)' },
            { n: 12, d: 'H', x: 7, y: 4, w: 'EVA', c: 'Sua madre fu la prima donna (Genesi 3:20)' },
            { n: 14, d: 'H', x: 1, y: 6, w: 'MALACHIA', c: 'Libro che chiude le Scritture Ebraiche (Malachia 1:1)' },
            { n: 16, d: 'H', x: 0, y: 8, w: 'LIRON', c: 'Città fortificata di Neftali (Giosuè 19:38)' },
            { n: 18, d: 'H', x: 6, y: 8, w: 'ELI', c: 'Sommo sacerdote che pensò che Anna fosse ubriaca (1 Samuele 1:12-14)' },
            { n: 20, d: 'H', x: 2, y: 10, w: 'EBRON', c: 'Città dove Abraamo risiedette tra i grossi alberi di Mamre (Genesi 13:18)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ANANIA', c: 'Discepolo inviato da Saulo a Damasco (Atti 9:10)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'ROMANI', c: 'Abitanti della città a cui Paolo voleva annunciare la buona notizia (Romani 1:15)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'TOMMASO', c: 'Detto il Gemello (Giovanni 11:16)' },
            { n: 6, d: 'V', x: 9, y: 0, w: 'ATE', c: 'Inizio di Atene' },
            { n: 9, d: 'V', x: 7, y: 2, w: 'NAOMI', c: 'Suocera di Rut che tornò da Moab (Rut 1:22)' },
            { n: 11, d: 'V', x: 0, y: 4, w: 'MAL', c: 'Inizio di Malco' },
            { n: 13, d: 'V', x: 10, y: 4, w: 'ALI', c: 'I cherubini le distendevano verso l\'alto (Esodo 25:20)' },
            { n: 15, d: 'V', x: 2, y: 6, w: 'IO', c: 'Pronome' },
            { n: 17, d: 'V', x: 8, y: 6, w: 'IR', c: 'Inizio di Irad' },
            { n: 19, d: 'V', x: 6, y: 8, w: 'EL', c: 'Nome divino' }
        ]
    },
    {
        id: 7,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'ANTIOCHIA', c: 'Luogo dove i discepoli furono per la prima volta chiamati cristiani (Atti 11:26)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'GIACOBBE', c: 'Lottò con un angelo fino all\'alba (Genesi 32:24)' },
            { n: 6, d: 'H', x: 9, y: 3, w: 'OS', c: 'Inizio di Osea' },
            { n: 8, d: 'H', x: 0, y: 5, w: 'ELISEO', c: 'Chiese due parti dello spirito di Elia (2 Re 2:9)' },
            { n: 10, d: 'H', x: 7, y: 5, w: 'RUT', c: 'Disse: "Il tuo popolo sarà il mio popolo" (Rut 1:16)' },
            { n: 12, d: 'H', x: 1, y: 7, w: 'GIAIRO', c: 'Sua figlia di 12 anni fu risuscitata da Gesù (Marco 5:41, 42)' },
            { n: 14, d: 'H', x: 0, y: 9, w: 'DAMASCO', c: 'Saulo vi si recava per perseguitare i cristiani (Atti 9:1, 2)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'AGAR', c: 'Schiava egiziana che ebbe un figlio da Abraamo (Genesi 16:3)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'HOREB', c: 'Il monte del vero Dio (Esodo 3:1)' },
            { n: 5, d: 'V', x: 8, y: 1, w: 'ABIGAIL', c: 'Donna di buon senso che impedì a Davide di spargere sangue (1 Samuele 25:32, 33)' },
            { n: 7, d: 'V', x: 2, y: 3, w: 'CARMELO', c: 'Dove il fuoco di Geova consumò l\'olocausto di Elia (1 Re 18:38)' },
            { n: 9, d: 'V', x: 10, y: 5, w: 'TOB', c: 'Terra dove risiedette Iefte (Giudici 11:3)' },
            { n: 11, d: 'V', x: 0, y: 5, w: 'ED', c: 'Nome dell\'altare dei rubeniti e gaditi (Giosuè 22:34)' },
            { n: 13, d: 'V', x: 6, y: 7, w: 'CO', c: 'Inizio di Colossesi' }
        ]
    },
    {
        id: 8,
        parole: [
            { n: 1, d: 'H', x: 2, y: 0, w: 'NICODEMO', c: 'Farisèo che aiutò Giuseppe d\'Arimatea con la sepoltura di Gesù (Giovanni 19:39)' },
            { n: 4, d: 'H', x: 0, y: 2, w: 'SAMA', c: 'Figlio di Reuel (Genesi 36:13)' },
            { n: 6, d: 'H', x: 5, y: 2, w: 'ABRAAMO', c: 'Colui al quale Geova disse: "Guarda il cielo e conta le stelle" (Genesi 15:5)' },
            { n: 8, d: 'H', x: 0, y: 4, w: 'ELIFAZ', c: 'Temanita che parlò per primo contro Giobbe (Giobbe 2:11)' },
            { n: 10, d: 'H', x: 7, y: 4, w: 'NILO', c: 'Fiume le cui acque furono colpite da Mosè (Esodo 7:20)' },
            { n: 12, d: 'H', x: 1, y: 6, w: 'CORINTO', c: 'Dove Paolo lavorò come fabbricante di tende (Atti 18:1-3)' },
            { n: 14, d: 'H', x: 0, y: 8, w: 'OSANNA', c: 'Significa "Salva, preghiamo" (Matteo 21:9)' },
            { n: 16, d: 'H', x: 7, y: 8, w: 'DINA', c: 'Figlia di Lea che uscì per fare amicizia con le ragazze del paese (Genesi 34:1)' },
            { n: 18, d: 'H', x: 0, y: 10, w: 'EL', c: 'Dio' },
            { n: 19, d: 'H', x: 4, y: 10, w: 'MORTI', c: 'Non lodano Iah (Salmo 115:17)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'ICOD', c: 'Fine di Nicodemo' },
            { n: 3, d: 'V', x: 8, y: 0, w: 'EMMANUELE', c: 'Nome profetico di Gesù (Isaia 7:14)' },
            { n: 5, d: 'V', x: 1, y: 2, w: 'SELA', c: 'Pausa musicale nei Salmi' },
            { n: 7, d: 'V', x: 10, y: 2, w: 'OLA', c: 'Olocausto (troncamento)' },
            { n: 9, d: 'V', x: 5, y: 4, w: 'IRON', c: 'Città (troncamento di Liron)' },
            { n: 11, d: 'V', x: 0, y: 4, w: 'EO', c: 'Fine di Matteo' },
            { n: 13, d: 'V', x: 4, y: 6, w: 'NO', c: 'Negazione' },
            { n: 15, d: 'V', x: 7, y: 6, w: 'AD', c: 'Inizio di Adamo' },
            { n: 17, d: 'V', x: 2, y: 8, w: 'SI', c: 'Affermazione' }
        ]
    },
    {
        id: 9,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'FILIPPI', c: 'Dove Lidia aprì il suo cuore alla verità (Atti 16:14, 15)' },
            { n: 4, d: 'H', x: 8, y: 1, w: 'UR', c: 'Abraamo ne uscì per fede (Ebrei 11:8)' },
            { n: 6, d: 'H', x: 0, y: 3, w: 'LAZZARO', c: 'L\'amico di Gesù che era morto da quattro giorni (Giovanni 11:39)' },
            { n: 8, d: 'H', x: 8, y: 3, w: 'EVE', c: 'Inizio di Ebrei' },
            { n: 10, d: 'H', x: 1, y: 5, w: 'BETSABEA', c: 'Moglie di Uria che divenne madre di Salomone (2 Samuele 12:24)' },
            { n: 12, d: 'H', x: 0, y: 7, w: 'SAMO', c: 'Isola dove Paolo fece scalo (Atti 20:15)' },
            { n: 14, d: 'H', x: 5, y: 7, w: 'AMMON', c: 'Popolo che assoldò Balaam (Deuteronomio 23:3, 4)' },
            { n: 16, d: 'H', x: 2, y: 9, w: 'ARIMATEA', c: 'Città di Giuseppe, un membro del Concilio (Luca 23:50, 51)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'IL', c: 'Articolo' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'PIETRA', c: 'Sulla quale Gesù disse di voler edificare la sua congregazione (Matteo 16:18)' },
            { n: 5, d: 'V', x: 9, y: 1, w: 'REBECCA', c: 'Figlia di Betuel e moglie di Isacco (Genesi 24:67)' },
            { n: 7, d: 'V', x: 3, y: 3, w: 'ASA', c: 'Re che fece ciò che era giusto agli occhi di Geova (1 Re 15:11)' },
            { n: 9, d: 'V', x: 6, y: 3, w: 'EBRA', c: 'Inizio di Ebrei' },
            { n: 11, d: 'V', x: 10, y: 5, w: 'ANNA', c: 'Profetessa vedova che non mancava mai dal tempio (Luca 2:36, 37)' },
            { n: 13, d: 'V', x: 0, y: 7, w: 'SA', c: 'Inizio di Saul' },
            { n: 15, d: 'V', x: 7, y: 7, w: 'MA', c: 'Congiunzione' }
        ]
    },
    {
        id: 10,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ECCLESIASTE', c: 'Libro che conclude che il timore del vero Dio è il tutto dell\'uomo (Ecclesiaste 12:13)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'DINA', c: 'Figlia di Giacobbe vittima di un sopruso a Sichem (Genesi 34:1, 2)' },
            { n: 7, d: 'H', x: 5, y: 2, w: 'EZECHIA', c: 'Re che purificò il tempio nel primo mese del suo regno (2 Cronache 29:3)' },
            { n: 9, d: 'H', x: 0, y: 4, w: 'OLIO', c: 'Le vergini stolte non ne avevano abbastanza (Matteo 25:3)' },
            { n: 11, d: 'H', x: 5, y: 4, w: 'RACHELE', c: 'Giacobbe lavorò quattordici anni per averla (Genesi 29:20-30)' },
            { n: 13, d: 'H', x: 1, y: 6, w: 'FILIPPO', c: 'Uno dei dodici apostoli, originario di Betsaida (Giovanni 1:44)' },
            { n: 15, d: 'H', x: 0, y: 8, w: 'AD', c: 'Preposizione' },
            { n: 16, d: 'H', x: 3, y: 8, w: 'STEFANO', c: 'Uomo pieno di fede e spirito santo che fu lapidato (Atti 6:5)' },
            { n: 18, d: 'H', x: 0, y: 10, w: 'ME', c: 'Pronome' },
            { n: 19, d: 'H', x: 4, y: 10, w: 'SODOMA', c: 'Città la cui distruzione è un esempio ammonitore (2 Pietro 2:6)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'CIELO', c: 'Dove Dio risiede (1 Re 8:30)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'EDO', c: 'Inizio di Edom' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'SICHEM', c: 'Luogo dove Giosuè radunò le tribù prima di morire (Giosuè 24:1)' },
            { n: 6, d: 'V', x: 10, y: 0, w: 'EA', c: 'Fine di Lea' },
            { n: 8, d: 'V', x: 5, y: 2, w: 'ER', c: 'Primogenito di Giuda che Geova fece morire (Genesi 38:7)' },
            { n: 10, d: 'V', x: 2, y: 4, w: 'IN', c: 'Preposizione' },
            { n: 12, d: 'V', x: 8, y: 4, w: 'EL', c: 'Inizio di Elia' },
            { n: 14, d: 'V', x: 6, y: 6, w: 'TE', c: 'Pronome' },
            { n: 17, d: 'V', x: 9, y: 8, w: 'MA', c: 'Congiunzione' }
        ]
    },
    {
        id: 11,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ZOROBABELE', c: 'Ebbe l\'incarico di ricostruire il tempio (Zaccaria 4:9)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'CANA', c: 'Città della Galilea dove Gesù compì il primo miracolo (Giovanni 2:1)' },
            { n: 7, d: 'H', x: 5, y: 2, w: 'MALTA', c: 'Isola dove Paolo fu morso da una vipera senza danni (Atti 28:1-5)' },
            { n: 9, d: 'H', x: 0, y: 4, w: 'AMMON', c: 'Regione a oriente del Giordano (Geremia 49:1)' },
            { n: 11, d: 'H', x: 6, y: 4, w: 'LIDIA', c: 'Venditrice di porpora di Tiatira che ospitò Paolo (Atti 16:14, 15)' },
            { n: 13, d: 'H', x: 1, y: 6, w: 'EUTICO', c: 'Il giovane risuscitato da Paolo a Troas (Atti 20:9-12)' },
            { n: 15, d: 'H', x: 0, y: 8, w: 'SION', c: 'La fortezza conquistata da Davide (1 Cronache 11:5)' },
            { n: 17, d: 'H', x: 5, y: 8, w: 'NINIVE', c: 'Grande città assira che si pentì (Giona 3:5)' },
            { n: 19, d: 'H', x: 2, y: 10, w: 'SABATO', c: 'Giorno di riposo sotto la Legge (Esodo 20:8)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'OROB', c: 'Inizio di Zorobabele' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'ANANI', c: 'Uno dei figli di Elioenai (1 Cronache 3:24)' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'ELAM', c: 'Figlio di Sem (Genesi 10:22)' },
            { n: 6, d: 'V', x: 10, y: 0, w: 'EL', c: 'Dio' },
            { n: 8, d: 'V', x: 8, y: 2, w: 'LUCERNA', c: 'La parola di Dio lo è per il cammino (Salmo 119:105)' },
            { n: 10, d: 'V', x: 2, y: 4, w: 'MUT', c: 'Inizio di Mut-labben (Salmo 9)' },
            { n: 12, d: 'V', x: 5, y: 4, w: 'ID', c: 'Inizio di Iddio' },
            { n: 14, d: 'V', x: 0, y: 8, w: 'SI', c: 'Affermazione' },
            { n: 16, d: 'V', x: 3, y: 8, w: 'OB', c: 'Inizio di Abdia' },
            { n: 18, d: 'V', x: 6, y: 8, w: 'IN', c: 'Preposizione' }
        ]
    },
    {
        id: 12,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'EPENETO', c: 'Il "primo frutto" dell’Asia per Cristo (Romani 16:5)' },
            { n: 4, d: 'H', x: 8, y: 1, w: 'SET', c: 'Terzo figlio di Adamo e Eva (Genesi 4:25)' },
            { n: 6, d: 'H', x: 0, y: 3, w: 'SABA', c: 'La sua regina portò oro e pietre preziose a Salomone (1 Re 10:1)' },
            { n: 8, d: 'H', x: 5, y: 3, w: 'PABLO', c: 'No, PAOLO - Apostolo delle nazioni (Romani 11:13)' },
            { n: 10, d: 'H', x: 1, y: 5, w: 'TIMOTEO', c: 'Compagno di viaggi di Paolo (Atti 16:1-3)' },
            { n: 12, d: 'H', x: 0, y: 7, w: 'BETEL', c: 'Significa "casa di Dio" (Genesi 28:19)' },
            { n: 14, d: 'H', x: 6, y: 7, w: 'SIN', c: 'Deserto tra Elim e il Sinai (Esodo 16:1)' },
            { n: 16, d: 'H', x: 0, y: 9, w: 'EZECHIELE', c: 'Profeta che vide le "ossa secche" rivivere (Ezechiele 37:1-10)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ESAU', c: 'Uomo dai molti peli (Genesi 25:25)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'TIRSO', c: 'Città dove regnò Geroboamo (1 Re 14:17)' },
            { n: 5, d: 'V', x: 9, y: 1, w: 'EL', c: 'Termine ebraico per Dio' },
            { n: 7, d: 'V', x: 2, y: 3, w: 'BETSABEA', c: 'Moglie di Uria e poi di Davide (2 Samuele 11:3)' },
            { n: 9, d: 'V', x: 7, y: 3, w: 'PONTIO', c: 'Pilato (Matteo 27:2)' },
            { n: 11, d: 'V', x: 10, y: 5, w: 'ON', c: 'Città d\'Egitto (Genesi 41:45)' },
            { n: 13, d: 'V', x: 0, y: 7, w: 'BE', c: 'Inizio di Berenice' },
            { n: 15, d: 'V', x: 6, y: 7, w: 'SI', c: 'Affermazione' }
        ]
    },
    {
        id: 13,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'MELCHISEDEC', c: 'Re di Salem e sacerdote del Dio Altissimo (Genesi 14:18)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'ASAF', c: 'Levita a capo dei cantori (1 Cronache 15:17)' },
            { n: 7, d: 'H', x: 5, y: 2, w: 'BEREA', c: 'Dove i fratelli erano "di mente più aperta" (Atti 17:10, 11)' },
            { n: 9, d: 'H', x: 0, y: 4, w: 'ID', c: 'Inizio di Iddio' },
            { n: 11, d: 'H', x: 3, y: 4, w: 'SINAI', c: 'Luogo dove il popolo ricevette la Legge (Esodo 19:1, 2)' },
            { n: 13, d: 'H', x: 0, y: 6, w: 'SAMUELE', c: 'Profeta che unse sia Saul che Davide (1 Samuele 10:1; 16:13)' },
            { n: 15, d: 'H', x: 8, y: 6, w: 'MA', c: 'Congiunzione' },
            { n: 17, d: 'H', x: 0, y: 8, w: 'SALA', c: 'Figlio di Arpaxad (Luca 3:35)' },
            { n: 19, d: 'H', x: 5, y: 8, w: 'LAODICEA', c: 'Città della Frigia (Rivelazione 3:14)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ESDRA', c: 'Copista esperto della Legge (Esdra 7:6)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'HOREB', c: 'Monte chiamato "la montagna del vero Dio" (Esodo 3:1)' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'ISACCO', c: 'Frutto della promessa fatta a Sara (Genesi 21:1-3)' },
            { n: 6, d: 'V', x: 10, y: 0, w: 'CO', c: 'Inizio di Colossesi' },
            { n: 8, d: 'V', x: 8, y: 2, w: 'BALSAMO', c: 'Famoso quello di Galaad (Geremia 8:22)' },
            { n: 10, d: 'V', x: 2, y: 4, w: 'SAM', c: 'Inizio di Samuele' },
            { n: 12, d: 'V', x: 5, y: 4, w: 'IL', c: 'Articolo' },
            { n: 14, d: 'V', x: 0, y: 6, w: 'SA', c: 'Inizio di Saul' },
            { n: 16, d: 'V', x: 9, y: 8, w: 'EA', c: 'Fine di Galilea' }
        ]
    },
    {
        id: 14,
        parole: [
            { n: 1, d: 'H', x: 2, y: 1, w: 'PENTECOSTE', c: 'Giorno in cui nacque la congregazione cristiana (Atti 2:1-4)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'ASA', c: 'Tolse gli idoli dal paese (1 Re 15:12)' },
            { n: 6, d: 'H', x: 4, y: 3, w: 'CANDACE', c: 'Regina degli etiopi (Atti 8:27)' },
            { n: 8, d: 'H', x: 0, y: 5, w: 'LIRON', c: 'Città di Neftali (Giosuè 19:38)' },
            { n: 10, d: 'H', x: 6, y: 5, w: 'AMEN', c: 'Il Testimone fedele (Rivelazione 3:14)' },
            { n: 12, d: 'H', x: 1, y: 7, w: 'FILIPPO', c: 'L\'evangelizzatore che predicò in Samaria (Atti 8:5)' },
            { n: 14, d: 'H', x: 0, y: 9, w: 'SODOMA', c: 'Lot fuggì da questa città (Genesi 19:15-17)' },
            { n: 2, d: 'V', x: 3, y: 1, w: 'ESIL', c: 'Esilio (troncamento)' },
            { n: 3, d: 'V', x: 6, y: 1, w: 'ADAM', c: 'Il primo uomo (Genesi 5:1)' },
            { n: 5, d: 'V', x: 9, y: 1, w: 'TEN', c: 'Tenda' },
            { n: 7, d: 'V', x: 1, y: 3, w: 'ALI', c: 'I cherubini ne hanno due coppie (Ezechiele 10:21)' },
            { n: 9, d: 'V', x: 4, y: 3, w: 'ID', c: 'Inizio di Iddio' },
            { n: 11, d: 'V', x: 7, y: 5, w: 'ME', c: 'Pronome' },
            { n: 13, d: 'V', x: 10, y: 7, w: 'AN', c: 'Inizio di Anna' }
        ]
    },
    {
        id: 15,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'SODOMA', c: 'Città distrutta dal fuoco (Genesi 19:24)' },
            { n: 5, d: 'H', x: 8, y: 0, w: 'UR', c: 'Città natale di Abraamo (Genesi 11:28)' },
            { n: 7, d: 'H', x: 0, y: 2, w: 'ELI', c: 'Sacerdote che parlò con Anna a Silo (1 Samuele 1:17)' },
            { n: 8, d: 'H', x: 4, y: 2, w: 'NAIN', c: 'Città dove fu risuscitato il figlio di una vedova (Luca 7:11)' },
            { n: 10, d: 'H', x: 0, y: 4, w: 'SALA', c: 'Figlio di Arpaxad (Genesi 10:24)' },
            { n: 12, d: 'H', x: 5, y: 4, w: 'EZECHIA', c: 'Re che ricevette un segno sull\'orologio solare (2 Re 20:8-11)' },
            { n: 14, d: 'H', x: 1, y: 6, w: 'MALCO', c: 'Schiavo a cui fu tagliato l\'orecchio (Giovanni 18:10)' },
            { n: 16, d: 'H', x: 7, y: 6, w: 'ARA', c: 'Altare sacrificale' },
            { n: 18, d: 'H', x: 0, y: 8, w: 'AMEN', c: 'Conclude la Bibbia (Rivelazione 22:21)' },
            { n: 20, d: 'H', x: 5, y: 8, w: 'RUT', c: 'Moabita antenata di Gesù (Rut 4:21)' },
            { n: 22, d: 'H', x: 2, y: 10, w: 'SINAI', c: 'Monte dove Israele ricevette la Legge (Esodo 19:20)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'OLIO', c: 'Usato per la consacrazione (Esodo 30:25)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'ANNA', c: 'Profetessa al tempio (Luca 2:36)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'RE', c: 'Saul lo fu per Israele' },
            { n: 6, d: 'V', x: 9, y: 0, w: 'REB', c: 'Inizio di Rebecca' },
            { n: 9, d: 'V', x: 7, y: 2, w: 'IZAR', c: 'Inizio di Izariti (Numeri 3:19)' },
            { n: 11, d: 'V', x: 0, y: 4, w: 'SA', c: 'Inizio di Saul' },
            { n: 13, d: 'V', x: 10, y: 4, w: 'AT', c: 'Inizio di Atti' },
            { n: 15, d: 'V', x: 2, y: 6, w: 'RI', c: 'Inizio di Risurrezione' },
            { n: 17, d: 'V', x: 8, y: 6, w: 'RU', c: 'Inizio di Ruben' },
            { n: 19, d: 'V', x: 5, y: 8, w: 'RI', c: 'Inizio di Rivelazione' }
        ]
    },
    {
        id: 16,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'OBED-EDOM', c: 'Gatita presso la cui casa rimase l’Arca per tre mesi (2 Samuele 6:10, 11)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'ADRAMELEC', c: 'Dio di Sefarvaim a cui venivano bruciati i figli (2 Re 17:31)' },
            { n: 7, d: 'H', x: 0, y: 4, w: 'DRACMA', c: 'Moneta d’argento che una donna perse in una parabola (Luca 15:8)' },
            { n: 9, d: 'H', x: 7, y: 4, w: 'AI', c: 'Città conquistata da Giosuè (Giosuè 8:1)' },
            { n: 11, d: 'H', x: 1, y: 6, w: 'TABITA', c: 'Donna che "abbondava in buone opere" (Atti 9:36)' },
            { n: 13, d: 'H', x: 0, y: 8, w: 'ERODIANI', c: 'Sostenitori politici di Erode (Marco 3:6)' },
            { n: 15, d: 'H', x: 0, y: 10, w: 'ON', c: 'Città egiziana (Genesi 41:45)' },
            { n: 16, d: 'H', x: 3, y: 10, w: 'AKELDAMA', c: 'Il "Campo di Sangue" (Atti 1:19)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'VADI', c: 'Letto di un torrente (1 Re 17:3)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'EMORROIDI', c: 'Piaga che colpì i filistei (1 Samuele 5:6)' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'DECAPOLI', c: 'Regione di dieci città (Marco 5:20)' },
            { n: 6, d: 'V', x: 9, y: 2, w: 'CILICIA', c: 'Regione natale di Paolo (Atti 21:39)' },
            { n: 8, d: 'V', x: 0, y: 4, w: 'AD', c: 'Preposizione' },
            { n: 10, d: 'V', x: 10, y: 4, w: 'IL', c: 'Articolo' },
            { n: 12, d: 'V', x: 2, y: 6, w: 'AL', c: 'Preposizione' },
            { n: 14, d: 'V', x: 5, y: 8, w: 'AN', c: 'Inizio di Anna' }
        ]
    },
    {
        id: 17,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'EPICUREI', c: 'Filosofi che Paolo incontrò all\'Areopago (Atti 17:18)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'AREOPAGO', c: 'Colle di Marte dove Paolo fece un discorso (Atti 17:19)' },
            { n: 6, d: 'H', x: 1, y: 5, w: 'NABATEI', c: 'Popolo discendente da Nebaiot (Genesi 25:13)' },
            { n: 8, d: 'H', x: 0, y: 7, w: 'GABAONITI', c: 'Ingannarono Giosuè (Giosuè 9:3)' },
            { n: 10, d: 'H', x: 3, y: 9, w: 'ARTASERSE', c: 'Re che permise a Neemia di ricostruire le mura (Neemia 2:1)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'IPERBOLE', c: 'Figura retorica' },
            { n: 3, d: 'V', x: 5, y: 0, w: 'URBANIO', c: 'Collaboratore di Paolo (Romani 16:9)' },
            { n: 5, d: 'V', x: 8, y: 1, w: 'REBECCA', c: 'Moglie di Isacco (Genesi 24:67)' },
            { n: 7, d: 'V', x: 1, y: 3, w: 'RABBI', c: 'Significa "Maestro" (Giovanni 1:38)' },
            { n: 9, d: 'V', x: 10, y: 5, w: 'ESO', c: 'Abbreviazione di Esodo' },
            { n: 11, d: 'V', x: 0, y: 7, w: 'GE', c: 'Inizio di Gerico' }
        ]
    },
    {
        id: 18,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'BAAL-ZEBUB', c: 'Dio di Ekron (2 Re 1:2)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'ANATEMA', c: 'Qualcosa di votato alla distruzione (Giosuè 6:17)' },
            { n: 7, d: 'H', x: 0, y: 4, w: 'LEVIATAN', c: 'Creatura acquatica (Giobbe 41:1)' },
            { n: 9, d: 'H', x: 0, y: 6, w: 'ELIU', c: 'Il giovane che riprese Giobbe (Giobbe 32:2)' },
            { n: 11, d: 'H', x: 5, y: 6, w: 'BARNABA', c: 'Il "Figlio della consolazione" (Atti 4:36)' },
            { n: 13, d: 'H', x: 0, y: 8, w: 'ZACCHEO', c: 'Esattore di tasse di bassa statura (Luca 19:2)' },
            { n: 15, d: 'H', x: 2, y: 10, w: 'APOLLO', c: 'Uomo eloquente ed esperto (Atti 18:24)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ALESSANDRIA', c: 'Città di origine di Apollo (Atti 18:24)' },
            { n: 3, d: 'V', x: 6, y: 0, w: 'BARSABBA', c: 'Soprannome di Giuseppe (Atti 1:23)' },
            { n: 4, d: 'V', x: 4, y: 0, w: 'ZEVI', c: 'Inizio di Zeviti' },
            { n: 6, d: 'V', x: 9, y: 2, w: 'SI', c: 'Affermazione' },
            { n: 8, d: 'V', x: 10, y: 4, w: 'NA', c: 'Fine di Barnaba' },
            { n: 10, d: 'V', x: 5, y: 6, w: 'BA', c: 'Inizio di Babilonia' },
            { n: 12, d: 'V', x: 8, y: 6, w: 'ID', c: 'Inizio di Iddio' },
            { n: 14, d: 'V', x: 7, y: 8, w: 'EL', c: 'Dio' }
        ]
    },
    {
        id: 19,
        parole: [
            { n: 1, d: 'H', x: 1, y: 1, w: 'BEN-ADAD', c: 'Re di Siria (1 Re 15:18)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'SENNACHERIB', c: 'Re assiro che schernì Geova (2 Re 18:13)' },
            { n: 6, d: 'H', x: 0, y: 5, w: 'ESTASI', c: 'Stato in cui Pietro ebbe una visione (Atti 10:10)' },
            { n: 8, d: 'H', x: 1, y: 7, w: 'BARGIESU', c: 'Stregone a Cipro (Atti 13:6)' },
            { n: 10, d: 'H', x: 0, y: 9, w: 'AGABO', c: 'Profeta (Atti 11:28)' },
            { n: 11, d: 'H', x: 6, y: 9, w: 'EMMAUS', c: 'Villaggio a 11 km da Gerusalemme (Luca 24:13)' },
            { n: 2, d: 'V', x: 2, y: 1, w: 'ENATAN', c: 'Figlio di Ahai (1 Cronache 2:31)' },
            { n: 3, d: 'V', x: 5, y: 1, w: 'DECALOGO', c: 'Le dieci parole (Esodo 20)' },
            { n: 5, d: 'V', x: 8, y: 1, w: 'ISMAELITI', c: 'Discendenti di Ismaele (Genesi 37:25)' },
            { n: 7, d: 'V', x: 1, y: 3, w: 'ASA', c: 'Re che rimosse le prostitute sacre (1 Re 15:12)' },
            { n: 9, d: 'V', x: 10, y: 5, w: 'OS', c: 'Inizio di Osea' }
        ]
    },
    {
        id: 20,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'PONZIO PILATO', c: 'Governatore della Giudea (Luca 3:1)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'BALDASSARRE', c: 'Re che vide la scrittura sulla parete (Daniele 5:1)' },
            { n: 7, d: 'H', x: 3, y: 4, w: 'TESSALONICA', c: 'Città della Macedonia (Atti 17:1)' },
            { n: 9, d: 'H', x: 1, y: 6, w: 'CAIAFA', c: 'Sommo sacerdote (Matteo 26:3)' },
            { n: 11, d: 'H', x: 0, y: 8, w: 'MALTA', c: 'Isola dove Paolo fece naufragio (Atti 28:1)' },
            { n: 13, d: 'H', x: 2, y: 10, w: 'HOREB', c: 'Il monte di Dio' },
            { n: 2, d: 'V', x: 4, y: 0, w: 'SANTI', c: 'Termine riferito ai cristiani unti (Colossesi 1:2)' },
            { n: 3, d: 'V', x: 7, y: 0, w: 'AMALECHITI', c: 'Popolo nemico di Israele (1 Samuele 15:7)' },
            { n: 4, d: 'V', x: 9, y: 2, w: 'RACHELE', c: 'Madre di Giuseppe' },
            { n: 6, d: 'V', x: 1, y: 4, w: 'IL', c: 'Articolo' },
            { n: 8, d: 'V', x: 10, y: 4, w: 'CA', c: 'Inizio di Cana' },
            { n: 10, d: 'V', x: 2, y: 6, w: 'AL', c: 'Preposizione' },
            { n: 12, d: 'V', x: 8, y: 6, w: 'SI', c: 'Affermazione' }
        ]
    },
    {
        id: 21,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ADRAMITTIO', c: 'Località della Misia; la nave su cui Paolo salpò da Cesarea proveniva da qui (Atti 27:2)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'DRUSILLA', c: 'Moglie del governatore Felice, era figlia di Erode Agrippa I (Atti 24:24)' },
            { n: 7, d: 'H', x: 0, y: 4, w: 'AMMONITI', c: 'Popolo nemico di Israele discendente dal figlio di Lot (Genesi 19:38)' },
            { n: 9, d: 'H', x: 1, y: 6, w: 'MATUSALEMME', c: 'Figlio di Enoc, visse 969 anni (Genesi 5:21, 27)' },
            { n: 11, d: 'H', x: 0, y: 8, w: 'TARSO', c: 'Importante città della Cilicia, patria di Saulo (Atti 9:11)' },
            { n: 13, d: 'H', x: 6, y: 8, w: 'ARBA', c: 'Uomo gigantesco tra gli anachiti (Giosuè 14:15)' },
            { n: 15, d: 'H', x: 2, y: 10, w: 'AREOPAGO', c: 'Colle di Atene dove si riuniva una corte (Atti 17:19)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'DOR', c: 'Città cananea (Giosuè 11:1, 2)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'SINFONIA', c: 'Strumenti che suonavano per il ritorno del figlio prodigo (Luca 15:25)' },
            { n: 4, d: 'V', x: 8, y: 0, w: 'TIRANNO', c: 'Uomo di Efeso che aveva una scuola (Atti 19:9)' },
            { n: 6, d: 'V', x: 2, y: 2, w: 'UMILTA', c: 'Qualcosa che Dio esige dai suoi servitori (Michea 6:8)' },
            { n: 8, d: 'V', x: 10, y: 6, w: 'AS', c: 'Inizio di Asaf' },
            { n: 10, d: 'V', x: 0, y: 8, w: 'TA', c: 'Inizio di Tabita' },
            { n: 12, d: 'V', x: 7, y: 8, w: 'RE', c: 'Erode lo era' }
        ]
    },
    {
        id: 22,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'NABUCODONOSOR', c: 'Re di Babilonia che sognò una statua immensa (Daniele 2:1, 31)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'ERODIADE', c: 'Chiese la testa di Giovanni il Battista (Marco 6:24)' },
            { n: 6, d: 'H', x: 9, y: 3, w: 'ON', c: 'Rubenita che si ribellò a Mosè (Numeri 16:1)' },
            { n: 8, d: 'H', x: 0, y: 5, w: 'BERNICE', c: 'Giunse a Cesarea con il re Agrippa (Atti 25:13)' },
            { n: 10, d: 'H', x: 1, y: 7, w: 'CANDACE', c: 'Titolo delle regine d\'Etiopia (Atti 8:27)' },
            { n: 12, d: 'H', x: 0, y: 9, w: 'BETSABEA', c: 'Donna per la quale Davide peccò (2 Samuele 11:2-4)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'EDOMITI', c: 'Popolo che rifiutò il passaggio a Israele (Numeri 20:18-21)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'CHIRIAT-IEARIM', c: 'Città dove fu portata l\'Arca (1 Samuele 6:21)' },
            { n: 5, d: 'V', x: 10, y: 1, w: 'AR', c: 'Città di Moab' },
            { n: 7, d: 'V', x: 8, y: 5, w: 'CHIDRON', c: 'Valle o torrente a est di Gerusalemme (Giovanni 18:1)' },
            { n: 9, d: 'V', x: 0, y: 7, w: 'BE', c: 'Inizio di Berenice' },
            { n: 11, d: 'V', x: 6, y: 7, w: 'CE', c: 'Inizio di Cefa' }
        ]
    },
    {
        id: 23,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ARPACSAD', c: 'Figlio di Sem, antenato di Abraamo (Genesi 11:10-13)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'MANASSE', c: 'Re di Giuda che fu prigioniero a Babilonia (2 Cronache 33:10-13)' },
            { n: 7, d: 'H', x: 8, y: 2, w: 'UR', c: 'Città dei caldei' },
            { n: 9, d: 'H', x: 0, y: 4, w: 'ASA', c: 'Re che eliminò la prostituzione sacra (1 Re 15:12)' },
            { n: 11, d: 'H', x: 4, y: 4, w: 'SANTITA', c: 'Geova è l\'Adorato in questa condizione (Salmo 96:9)' },
            { n: 13, d: 'H', x: 1, y: 6, w: 'MERODAC', c: 'Dio babilonese (Geremia 50:2)' },
            { n: 15, d: 'H', x: 0, y: 8, w: 'MICAL', c: 'Moglie di Davide che lo derise (2 Samuele 6:20)' },
            { n: 17, d: 'H', x: 7, y: 8, w: 'OS', c: 'Abbreviazione di Osea' },
            { n: 19, d: 'H', x: 2, y: 10, w: 'IERIA', c: 'Ufficiale che arrestò Geremia alla Porta di Beniamino (Geremia 37:13)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'RA', c: 'Inizio di Raamses' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'ANNA', c: 'Servì al tempio con digiuni e preghiere (Luca 2:37)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'ADAM', c: 'Significa "uomo" o "terra rossa"' },
            { n: 6, d: 'V', x: 9, y: 0, w: 'AR', c: 'Città moabita' },
            { n: 8, d: 'V', x: 7, y: 2, w: 'USURA', c: 'Prestito a interesse (Esodo 22:25)' },
            { n: 10, d: 'V', x: 10, y: 4, w: 'AD', c: 'Preposizione' },
            { n: 12, d: 'V', x: 2, y: 6, w: 'EL', c: 'Dio' },
            { n: 14, d: 'V', x: 8, y: 6, w: 'CO', c: 'Inizio di Colossesi' },
            { n: 16, d: 'V', x: 0, y: 8, w: 'MA', c: 'Congiunzione' },
            { n: 18, d: 'V', x: 5, y: 8, w: 'ID', c: 'Inizio di Iddio' }
        ]
    },
    {
        id: 24,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'MELCHISEDEC', c: 'Senza genealogia né inizio di giorni (Ebrei 7:3)' },
            { n: 4, d: 'H', x: 0, y: 3, w: 'ELISABETTA', c: 'Parente di Maria e madre di Giovanni (Luca 1:36)' },
            { n: 6, d: 'H', x: 0, y: 5, w: 'LEBBROSO', c: 'Miriam lo divenne per aver mormorato (Numeri 12:10)' },
            { n: 8, d: 'H', x: 1, y: 7, w: 'CEMBALI', c: 'Strumenti a percussione usati nelle celebrazioni (1 Cronache 15:16)' },
            { n: 10, d: 'H', x: 0, y: 9, w: 'HOREB', c: 'Qui Geova fece sgorgare acqua dalla roccia (Esodo 17:6)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ALLELUIA', c: 'Lode a Iah! (Rivelazione 19:1)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'NICODEMO', c: 'Farisèo che portò un rotolo di mirra e aloe (Giovanni 19:39)' },
            { n: 5, d: 'V', x: 10, y: 1, w: 'CA', c: 'Inizio di Cana' },
            { n: 7, d: 'V', x: 7, y: 3, w: 'EL', c: 'Dio' },
            { n: 9, d: 'V', x: 2, y: 5, w: 'BAR', c: 'Significa "figlio"' },
            { n: 11, d: 'V', x: 8, y: 7, w: 'ID', c: 'Inizio di Iddio' }
        ]
    },
    {
        id: 25,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ZOROBABELE', c: 'Diresse i lavori per le fondamenta del tempio (Esdra 3:8)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'AMORREI', c: 'Abitatori dei monti che Israele sconfisse (Numeri 21:21-25)' },
            { n: 7, d: 'H', x: 0, y: 4, w: 'TIMOTEO', c: 'Conosceva gli scritti sacri dall\'infanzia (2 Timoteo 3:15)' },
            { n: 9, d: 'H', x: 1, y: 6, w: 'LAODICEA', c: 'Città ricca i cui cristiani erano "tiepidi" (Rivelazione 3:14-17)' },
            { n: 11, d: 'H', x: 0, y: 8, w: 'SARA', c: 'Ricevette la potenza di concepire a 90 anni (Ebrei 11:11)' },
            { n: 13, d: 'H', x: 5, y: 8, w: 'AGAR', c: 'Schiava egiziana che fuggì nel deserto (Genesi 16:1-6)' },
            { n: 15, d: 'H', x: 2, y: 10, w: 'SINAI', c: 'Geova vi scese nel fuoco (Esodo 19:18)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'EUTICO', c: 'Cadde dal terzo piano ma fu rianimato da Paolo (Atti 20:9, 10)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'BEREA', c: 'I suoi abitanti esaminavano ogni giorno le Scritture (Atti 17:11)' },
            { n: 4, d: 'V', x: 8, y: 0, w: 'EL', c: 'Dio' },
            { n: 6, d: 'V', x: 10, y: 2, w: 'AD', c: 'Preposizione' },
            { n: 8, d: 'V', x: 6, y: 4, w: 'ID', c: 'Inizio di Iddio' },
            { n: 10, d: 'V', x: 2, y: 6, w: 'AL', c: 'Preposizione' },
            { n: 12, d: 'V', x: 7, y: 8, w: 'AN', c: 'Inizio di Anna' }
        ]
    }
];
                
             
             
             
             
