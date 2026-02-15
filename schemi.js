// schemi.js - CRUCI-BIBBIA (Revisione id1-id5 - TNM 2017)
const SCHEMI_BIBLICI = [
    {
        id: 1,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'GIONATAN', c: 'Figlio di Saul che amò Davide come se stesso (1 Samuele 18:3)' },
            { n: 6, d: 'H', x: 0, y: 2, w: 'LEA', c: 'Moglie di Giacobbe che ebbe occhi spenti (Genesi 29:17)' },
            { n: 7, d: 'H', x: 5, y: 2, w: 'ESTER', c: 'Regina che rischiò la vita per il suo popolo (Ester 4:16)' },
            { n: 9, d: 'H', x: 2, y: 4, w: 'UR', c: 'Città dei caldei patria di Abraamo e Sara (Genesi 11:31)' },
            { n: 10, d: 'H', x: 5, y: 4, w: 'GIONA', c: 'Profeta che fuggì a Tarsis via mare (Giona 1:3)' },
            { n: 12, d: 'H', x: 0, y: 6, w: 'NABAL', c: 'Uomo stolto marito di Abigail (1 Samuele 25:3)' },
            { n: 14, d: 'H', x: 6, y: 6, w: 'ESDRA', c: 'Sacerdote e abile copista della Legge (Esdra 7:6)' },
            { n: 16, d: 'H', x: 3, y: 8, w: 'AMOS', c: 'Profeta che era un mandriano di Tecoa (Amos 1:1)' },
            { n: 17, d: 'H', x: 0, y: 10, w: 'BETEL', c: 'Significa "Casa di Dio" (Genesi 28:19)' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'GLORIA', c: '"A Geova appartengono la gloria e la forza" (1 Cronache 16:28)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'NAIN', c: 'Città dove Gesù risuscitò il figlio di una vedova (Luca 7:11)' },
            { n: 3, d: 'V', x: 5, y: 0, w: 'EFESINI', c: 'Lettera di Paolo scritta da Roma (Efesini 1:1)' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'ARAN', c: 'Luogo dove morì Terah padre di Abraamo (Genesi 11:32)' },
            { n: 5, d: 'V', x: 10, y: 0, w: 'NAUM', c: 'Profeta che predisse la caduta di Ninive (Naum 1:1)' }
        ]
    },
    {
        id: 2,
        parole: [
            { n: 1, d: 'H', x: 1, y: 0, w: 'GOSUE', c: 'Il coraggioso successore di Mosè (Giosuè 1:1)' },
            { n: 5, d: 'H', x: 6, y: 0, w: 'SINAI', c: 'Monte su cui Geova scese nel fuoco (Esodo 19:18)' },
            { n: 7, d: 'H', x: 0, y: 2, w: 'ADAMO', c: 'Creato dalla polvere del suolo (Genesi 2:7)' },
            { n: 8, d: 'H', x: 6, y: 2, w: 'MALCO', c: 'Schiavo a cui fu guarito l\'orecchio (Luca 22:51)' },
            { n: 10, d: 'H', x: 3, y: 4, w: 'LAMEC', c: 'Ebbe fede che Geova avrebbe dato conforto tramite Noè (Genesi 5:29)' },
            { n: 12, d: 'H', x: 0, y: 6, w: 'SARA', c: 'Moglie di Abraamo che chiamava il marito signore (1 Pietro 3:6)' },
            { n: 14, d: 'H', x: 5, y: 6, w: 'GIUDA', c: 'Suo nome significa "lodato" (Genesi 29:35)' },
            { n: 16, d: 'H', x: 2, y: 8, w: 'ELIA', c: 'Profeta che sfidò i profeti di Baal (1 Re 18:21)' },
            { n: 17, d: 'H', x: 0, y: 10, w: 'NAZARETH', c: 'Città dove l\'angelo Gabriele visitò Maria (Luca 1:26)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'OSANNA', c: 'Invocazione di salvezza rivolta a Gesù (Matteo 21:9)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'EDOM', c: 'Territorio montuoso dato in possesso a Esaù (Deuteronomio 2:5)' },
            { n: 4, d: 'V', x: 8, y: 2, w: 'CORO', c: 'Gruppo di cantori leviti nel tempio (1 Cronache 15:16)' }
        ]
    },
    {
        id: 3,
        parole: [
            { n: 1, d: 'H', x: 2, y: 0, w: 'ABRAAMO', c: 'Padre di tutti quelli che hanno fede (Romani 4:11)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'BILA', c: 'Serva che diede alla luce Dan e Neftali (Genesi 35:25)' },
            { n: 7, d: 'H', x: 6, y: 2, w: 'MOAB', c: 'Territorio dove morì Mosè (Deuteronomio 34:5)' },
            { n: 9, d: 'H', x: 3, y: 4, w: 'SAMUELE', c: 'Dedicato a Geova fin dallo svezzamento (1 Samuele 1:24-28)' },
            { n: 11, d: 'H', x: 0, y: 6, w: 'OTNIEL', c: 'Primo giudice a liberare Israele (Giudici 3:9)' },
            { n: 13, d: 'H', x: 7, y: 6, w: 'ANNA', c: 'Moglie di Elcana che pregò con fervore (1 Samuele 1:10)' },
            { n: 15, d: 'H', x: 2, y: 8, w: 'SALA', c: 'Locale dove fu celebrata l\'Ultima Cena (Marco 14:15)' },
            { n: 17, d: 'H', x: 0, y: 10, w: 'GERICO', c: 'Città le cui mura caddero per fede (Ebrei 11:30)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'REBECCA', c: 'Moglie fedele scelta per Isacco (Genesi 24:67)' },
            { n: 3, d: 'V', x: 5, y: 0, w: 'AMEN', c: 'Significa "così sia" o "sicuramente" (Glossario)' },
            { n: 4, d: 'V', x: 7, y: 0, w: 'OR', c: 'Monte dove morì Aronne (Numeri 20:25)' },
            { n: 10, d: 'V', x: 5, y: 4, w: 'EZECHIELE', c: 'Profeta che vide la gloria di Geova (Ezechiele 1:28)' }
        ]
    },
    {
        id: 4,
        parole: [
            { n: 1, d: 'H', x: 0, y: 1, w: 'GABRIELE', c: 'Angelo inviato a Zaccaria e Maria (Luca 1:19, 26)' },
            { n: 5, d: 'H', x: 0, y: 3, w: 'BETANIA', c: 'Villaggio di Lazzaro, Marta e Maria (Giovanni 11:1)' },
            { n: 7, d: 'H', x: 4, y: 5, w: 'HERMON', c: 'Monte la cui rugiada scende su Sion (Salmo 133:3)' },
            { n: 9, d: 'H', x: 0, y: 7, w: 'ROMA', c: 'Città dove Paolo visse in una casa in affitto (Atti 28:30)' },
            { n: 11, d: 'H', x: 5, y: 7, w: 'BEREA', c: 'Città dove esaminavano attentamente le Scritture (Atti 17:11)' },
            { n: 13, d: 'H', x: 2, y: 9, w: 'GOLIA', c: 'Il gigante abbattuto da Davide (1 Samuele 17:49)' },
            { n: 2, d: 'V', x: 1, y: 0, w: 'ALESSANDRO', c: 'Il ramaio che ostacolò Paolo (2 Timoteo 4:14)' },
            { n: 3, d: 'V', x: 3, y: 0, w: 'RUBEN', c: 'Figlio primogenito di Giacobbe e Lea (Genesi 29:32)' },
            { n: 4, d: 'V', x: 5, y: 0, w: 'EFESO', c: 'Città dove Paolo insegnò per tre anni (Atti 20:31)' },
            { n: 6, d: 'V', x: 7, y: 0, w: 'ELISA', c: 'Il profeta che guarì Naaman (2 Re 5:14)' },
            { n: 8, d: 'V', x: 9, y: 0, w: 'NOE', c: 'Uomo di fede che costruì l\'arca (Ebrei 11:7)' },
            { n: 10, d: 'V', x: 4, y: 5, w: 'AB', c: 'Quinto mese del calendario sacro ebraico (Numeri 33:38)' }
        ]
    },
    {
        id: 5,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'MALACHIA', c: 'Scrisse l\'ultimo libro delle Scritture Ebraiche (Malachia 1:1)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'EDEN', c: 'Giardino piantato da Geova in Oriente (Genesi 2:8)' },
            { n: 6, d: 'H', x: 5, y: 2, w: 'TABITA', c: 'Discepola di Ioppe nota per la sua generosità (Atti 9:36)' },
            { n: 8, d: 'H', x: 3, y: 4, w: 'SINAI', c: 'Luogo dove Geova parlò dal fuoco (Deuteronomio 4:12)' },
            { n: 10, d: 'H', x: 0, y: 6, w: 'MARTA', c: 'Sorella di Maria che serviva a tavola (Luca 10:40)' },
            { n: 12, d: 'H', x: 6, y: 6, w: 'ANNA', c: 'Profetessa che serviva nel tempio giorno e notte (Luca 2:37)' },
            { n: 14, d: 'H', x: 2, y: 8, w: 'LEVI', c: 'Padre della tribù incaricata del servizio sacro' },
            { n: 15, d: 'H', x: 0, y: 10, w: 'EBRAI', c: 'Lettera che descrive il Sommo Sacerdote celeste' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'MEDO', c: 'Origine di Dario che prese il regno di Babilonia (Daniele 5:31)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'ADAMO', c: 'L\'uomo attraverso cui il peccato entrò nel mondo (Romani 5:12)' },
            { n: 3, d: 'V', x: 5, y: 0, w: 'ILCHIA', c: 'Sommo sacerdote che trovò il libro della Legge (2 Re 22:8)' }, // Corretto
            { n: 4, d: 'V', x: 8, y: 0, w: 'ARAN', c: 'Figlio di Terah e padre di Lot (Genesi 11:27)' }
        ]
    },
    {
        id: 6,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'NAZARETH', c: 'Città della Galilea dove crebbe Gesù (Matteo 2:23)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'GIAIRO', c: 'Presidente della sinagoga la cui figlia fu risuscitata (Marco 5:22)' },
            { n: 7, d: 'H', x: 7, y: 2, w: 'ARARAT', c: 'Monti su cui si posò l\'arca dopo il diluvio (Genesi 8:4)' },
            { n: 9, d: 'H', x: 3, y: 4, w: 'LEA', c: 'Figlia di Labano e prima moglie di Giacobbe (Genesi 29:23)' },
            { n: 10, d: 'H', x: 7, y: 4, w: 'ESAU', c: 'Vendette la sua primogenitura per un pasto (Genesi 25:34)' },
            { n: 12, d: 'H', x: 1, y: 6, w: 'MOSE', c: 'Ricevette le due tavolette della Testimonianza (Esodo 31:18)' },
            { n: 14, d: 'H', x: 6, y: 6, w: 'UR', c: 'Città caldea d\'origine di Abraamo (Genesi 15:7)' },
            { n: 15, d: 'H', x: 0, y: 8, w: 'GOSUE', c: 'Figlio di Nun e successore di Mosè (Giosuè 1:1)' },
            { n: 17, d: 'H', x: 7, y: 8, w: 'ADAM', c: 'Significa "uomo di terra rossa" (Glossario)' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'NEEMIA', c: 'Coppiere del re che ricostruì le mura (Neemia 2:1)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'ZACCARIA', c: 'Padre di Giovanni Battista (Luca 1:5)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'RE', c: 'Gesù è il Re che governa con giustizia (Isaia 32:1)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'TIRSO', c: 'Vino nuovo che rallegra il cuore (Osea 4:11)' }
        ]
    },
    {
        id: 7,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'GERUSALEMME', c: 'Città chiamata la "dimora della doppia pace" (Glossario)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'SODOMA', c: 'Città distrutta per la sua grave malvagità (Genesi 19:24)' },
            { n: 7, d: 'H', x: 7, y: 2, w: 'NINIVE', c: 'Città a cui Giona fu mandato a predicare (Giona 1:2)' },
            { n: 9, d: 'H', x: 2, y: 4, w: 'LAMEC', c: 'Uomo che pronunciò una profezia su suo figlio Noè (Genesi 5:28, 29)' },
            { n: 11, d: 'H', x: 8, y: 4, w: 'BOAZ', c: 'Uomo di Betlemme che sposò Rut (Rut 4:13)' },
            { n: 13, d: 'H', x: 0, y: 6, w: 'MARTA', c: 'Sorella di Lazzaro che ricevette Gesù in casa (Luca 10:38)' },
            { n: 15, d: 'H', x: 7, y: 6, w: 'GIONA', c: 'Restò nel ventre del pesce tre giorni e tre notti (Giona 1:17)' },
            { n: 17, d: 'H', x: 3, y: 8, w: 'SARA', c: 'Moglie di Abraamo che rise tra sé (Genesi 18:12)' },
            { n: 18, d: 'V', x: 2, y: 0, w: 'GOMORRA', c: 'Città punita insieme a Sodoma (Giuda 7)' },
            { n: 2, d: 'V', x: 4, y: 0, w: 'SAMUELE', c: 'Servì Geova fin da bambino a Silo (1 Samuele 2:18)' },
            { n: 3, d: 'V', x: 6, y: 0, w: 'LUCA', c: 'Scrittore del Vangelo e degli Atti degli Apostoli' },
            { n: 4, d: 'V', x: 8, y: 0, w: 'OR', c: 'Monte dove morì Aronne (Numeri 33:38)' }
        ]
    },
    {
        id: 8,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ABRAAMO', c: 'Capostipite che lasciò Ur per fede (Ebrei 11:8)' },
            { n: 5, d: 'H', x: 8, y: 0, w: 'SET', c: 'Figlio di Adamo nato dopo la morte di Abele (Genesi 4:25)' },
            { n: 7, d: 'H', x: 1, y: 2, w: 'BILA', c: 'Serva di Rachele e madre di Dan (Genesi 30:4)' },
            { n: 8, d: 'H', x: 6, y: 2, w: 'MALCO', c: 'Schiavo a cui Pietro tagliò l\'orecchio (Giovanni 18:10)' },
            { n: 10, d: 'H', x: 0, y: 4, w: 'ISACCO', c: 'Figlio della promessa nato a Sara (Genesi 21:3)' },
            { n: 12, d: 'H', x: 7, y: 4, w: 'EZECHIELE', c: 'Profeta che vide i quattro esseri viventi (Ezechiele 1:5)' },
            { n: 14, d: 'H', x: 3, y: 6, w: 'GIONATAN', c: 'Strinse un patto con Davide (1 Samuele 18:3)' },
            { n: 16, d: 'H', x: 0, y: 8, w: 'AMOS', c: 'Profeta che era un pecoraio di Tecoa (Amos 1:1)' },
            { n: 17, d: 'H', x: 6, y: 8, w: 'ESTER', c: 'Eroina che salvò i giudei dallo sterminio (Ester 7:3)' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'ADAMO', c: 'Il primo uomo che portò la morte a tutti (1 Corinti 15:22)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'AL', c: '"In principio Dio creò..." (Genesi 1:1)' },
            { n: 3, d: 'V', x: 6, y: 0, w: 'AMEN', c: 'Parola che significa "certamente" (Rivelazione 22:20)' }
        ]
    },
    {
        id: 9,
        parole: [
            { n: 1, d: 'H', x: 1, y: 0, w: 'ILCHIA', c: 'Sacerdote che trovò il libro della Legge (2 Re 22:8)' }, // Corretto HILKIA in ILCHIA
            { n: 5, d: 'H', x: 8, y: 0, w: 'AB', c: 'Mese biblico corrispondente a luglio-agosto (Numeri 33:38)' },
            { n: 7, d: 'H', x: 0, y: 2, w: 'BARNABA', c: 'Chiamato "figlio di conforto" (Atti 4:36)' },
            { n: 8, d: 'H', x: 8, y: 2, w: 'AT', c: 'Sigla delle Scritture Ebraiche' },
            { n: 10, d: 'H', x: 3, y: 4, w: 'EZECHIA', c: 'Re che si affidò a Geova contro Sennacherib (2 Re 19:14)' },
            { n: 12, d: 'H', x: 0, y: 6, w: 'SALOMONE', c: 'Costruttore del tempio di Geova (1 Re 6:1)' },
            { n: 14, d: 'H', x: 9, y: 6, w: 'RE', c: 'Davide fu il secondo re d\'Israele' },
            { n: 16, d: 'H', x: 2, y: 8, w: 'BILA', c: 'Serva di Rachele che andò con Giacobbe (Genesi 30:4)' },
            { n: 18, d: 'H', x: 0, y: 10, w: 'BETEL', c: 'Giacobbe vi ebbe il sogno della scala (Genesi 28:19)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'LEA', c: 'La moglie che partorì Ruben a Giacobbe (Genesi 29:32)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'UR', c: 'Paese natale di Abraamo e Sara (Genesi 11:31)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'GIONA', c: 'Si lamentò per la morte di una pianta di ricino (Giona 4:9)' }
        ]
    },
    {
        id: 10,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'LAMEC', c: 'Sesto discendente di Caino (Genesi 4:18)' },
            { n: 4, d: 'H', x: 6, y: 0, w: 'GOSUE', c: 'Sostituì Mosè alla guida di Israele (Giosuè 1:2)' },
            { n: 6, d: 'H', x: 2, y: 2, w: 'ILCHIA', c: 'Padre di Eliachim che era sopra la casa (Isaia 36:3)' }, // Nuova occorrenza di ILCHIA
            { n: 8, d: 'H', x: 0, y: 4, w: 'GIONATAN', c: 'Il figlio di Saul che difese Davide (1 Samuele 20:32)' },
            { n: 10, d: 'H', x: 9, y: 4, w: 'AB', c: 'Mese del calendario sacro ebraico' },
            { n: 12, d: 'H', x: 4, y: 6, w: 'BETEL', c: 'Geova apparve qui a Giacobbe (Genesi 35:1)' },
            { n: 14, d: 'H', x: 0, y: 8, w: 'LEA', c: 'Madre di Simeon e Levi (Genesi 29:33, 34)' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'LUCANIA', c: 'Regione visitata durante i viaggi missionari (Atti 14:6)' },
            { n: 2, d: 'V', x: 4, y: 0, w: 'ESTER', c: 'Rischiò la vita parlando al re (Ester 4:16)' },
            { n: 3, d: 'V', x: 7, y: 0, w: 'UR', c: 'Luogo abbandonato da Abraamo per comando di Dio' },
            { n: 5, d: 'V', x: 10, y: 0, w: 'RE', c: 'Melchisedec lo era di Salem (Ebrei 7:1)' },
            { n: 13, d: 'V', x: 5, y: 6, w: 'AT', c: 'Scritture composte da 39 libri' }
        ]
    },

    {
        id: 6,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'NAZARETH', c: 'Città della Galilea dove crebbe Gesù (Matteo 2:23)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'IAIRO', c: 'Presidente della sinagoga la cui figlia fu risuscitata (Marco 5:22)' }, // Corretto
            { n: 7, d: 'H', x: 7, y: 2, w: 'ARARAT', c: 'Monti su cui si posò l\'arca dopo il diluvio (Genesi 8:4)' },
            { n: 9, d: 'H', x: 3, y: 4, w: 'LEA', c: 'Figlia di Labano e prima moglie di Giacobbe (Genesi 29:23)' },
            { n: 10, d: 'H', x: 7, y: 4, w: 'ESAU', c: 'Vendette la sua primogenitura per un pasto (Genesi 25:34)' },
            { n: 12, d: 'H', x: 1, y: 6, w: 'MOSE', c: 'Ricevette le due tavolette della Testimonianza (Esodo 31:18)' },
            { n: 14, d: 'H', x: 6, y: 6, w: 'UR', c: 'Città caldea d\'origine di Abraamo (Genesi 15:7)' },
            { n: 15, d: 'H', x: 0, y: 8, w: 'GOSUE', c: 'Figlio di Nun e successore di Mosè (Giosuè 1:1)' },
            { n: 17, d: 'H', x: 7, y: 8, w: 'ADAM', c: 'Significa "uomo di terra rossa" (Glossario)' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'NEEMIA', c: 'Coppiere del re che ricostruì le mura (Neemia 2:1)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'ZACCARIA', c: 'Padre di Giovanni Battista (Luca 1:5)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'RE', c: 'Gesù è il Re che governa con giustizia (Isaia 32:1)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'TIRSO', c: 'Vino nuovo che rallegra il cuore (Osea 4:11)' }
        ]
    },
    {
        id: 7,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'GERUSALEMME', c: 'Capitale del regno di Giuda (2 Samuele 5:5)' },
            { n: 5, d: 'H', x: 0, y: 2, w: 'SODOMA', c: 'Città distrutta per la sua malvagità (Genesi 19:24)' },
            { n: 7, d: 'H', x: 7, y: 2, w: 'NINIVE', c: 'Capitale assira che si pentì alla predicazione di Giona (Giona 3:5)' },
            { n: 9, d: 'H', x: 2, y: 4, w: 'LAMEC', c: 'Pronunciò una profezia riguardante Noè (Genesi 5:28, 29)' },
            { n: 11, d: 'H', x: 8, y: 4, w: 'BOAZ', c: 'Uomo di Betlemme che agì da ricompratore per Rut (Rut 4:9)' },
            { n: 13, d: 'H', x: 0, y: 6, w: 'MARTA', c: 'Accolse Gesù e si preoccupava di servirlo (Luca 10:38-40)' },
            { n: 15, d: 'H', x: 7, y: 6, w: 'GIONA', c: 'Pregò Geova dal ventre di un grande pesce (Giona 2:1)' },
            { n: 17, d: 'H', x: 3, y: 8, w: 'SARA', c: 'Madre di Isacco a cui Geova restituì la fertilità (Genesi 21:1, 2)' },
            { n: 1, d: 'V', x: 2, y: 0, w: 'GOMORRA', c: 'Città citata come esempio di giudizio divino (Giuda 7)' },
            { n: 2, d: 'V', x: 4, y: 0, w: 'SAMUELE', c: 'Udì Geova chiamarlo nel tabernacolo (1 Samuele 3:4)' },
            { n: 3, d: 'V', x: 6, y: 0, w: 'LUCA', c: 'Il caro medico che scrisse a Teofilo (Colossesi 4:14; Luca 1:3)' },
            { n: 4, d: 'V', x: 8, y: 0, w: 'OR', c: 'Monte presso la frontiera di Edom (Numeri 20:23)' }
        ]
    },
    {
        id: 8,
        parole: [
            { n: 1, d: 'H', x: 0, y: 0, w: 'ABRAAMO', c: 'Uomo la cui fede gli fu contata come giustizia (Giacomo 2:23)' },
            { n: 5, d: 'H', x: 8, y: 0, w: 'SET', c: 'Figlio di Adamo nato dopo Abele (Genesi 4:25)' },
            { n: 7, d: 'H', x: 1, y: 2, w: 'BILA', c: 'Serva di Rachele che divenne concubina di Giacobbe (Genesi 30:4)' },
            { n: 8, d: 'H', x: 6, y: 2, w: 'MALCO', c: 'Uomo a cui Pietro tagliò l\'orecchio destro (Giovanni 18:10)' },
            { n: 10, d: 'H', x: 0, y: 4, w: 'ISACCO', c: 'Figlio che Abraamo fu pronto a sacrificare (Ebrei 11:17)' },
            { n: 12, d: 'H', x: 7, y: 4, w: 'EZECHIELE', c: 'Profeta che vide il carro celeste di Geova (Ezechiele 1:1)' },
            { n: 14, d: 'H', x: 3, y: 6, w: 'GIONATAN', c: 'Figlio di Saul legato a Davide da profonda amicizia (1 Samuele 18:1)' },
            { n: 16, d: 'H', x: 0, y: 8, w: 'AMOS', c: 'Profeta che era un pecoraio di Tecoa (Amos 1:1)' },
            { n: 17, d: 'H', x: 6, y: 8, w: 'ESTER', c: 'Moglie di Assuero che salvò il suo popolo (Ester 7:3)' },
            { n: 1, d: 'V', x: 0, y: 0, w: 'ADAMO', c: 'L\'uomo attraverso il quale la morte si è estesa a tutti (Romani 5:12)' },
            { n: 2, d: 'V', x: 3, y: 0, w: 'AL', c: '"In principio Dio creò..." (Genesi 1:1)' },
            { n: 3, d: 'V', x: 6, y: 0, w: 'AMEN', c: 'Parola usata per confermare una preghiera (1 Corinti 14:16)' }
        ]
    },
    {
        id: 9,
        parole: [
            { n: 1, d: 'H', x: 1, y: 0, w: 'ILCHIA', c: 'Sommo sacerdote che trovò il libro della Legge (2 Re 22:8)' },
            { n: 5, d: 'H', x: 8, y: 0, w: 'AB', c: 'Quinto mese del calendario sacro ebraico (Numeri 33:38)' },
            { n: 7, d: 'H', x: 0, y: 2, w: 'BARNABA', c: 'Il cui nome significa "figlio di conforto" (Atti 4:36)' },
            { n: 8, d: 'H', x: 8, y: 2, w: 'AT', c: 'Sigla che indica le Scritture Ebraiche' },
            { n: 10, d: 'H', x: 3, y: 4, w: 'EZECHIA', c: 'Re che ricevette la guarigione da Geova (2 Re 20:5)' },
            { n: 12, d: 'H', x: 0, y: 6, w: 'SALOMONE', c: 'Il re più sapiente della terra (1 Re 3:12)' },
            { n: 14, d: 'H', x: 9, y: 6, w: 'RE', c: 'Davide fu il secondo re d\'Israele' },
            { n: 16, d: 'H', x: 2, y: 8, w: 'BILA', c: 'Serva che partorì figli a Giacobbe (Genesi 30:4-8)' },
            { n: 18, d: 'H', x: 0, y: 10, w: 'BETEL', c: 'Città dove Giacobbe eresse un altare (Genesi 35:7)' },
            { n: 2, d: 'V', x: 2, y: 0, w: 'LEA', c: 'Sposò Giacobbe prima di Rachele (Genesi 29:23)' },
            { n: 3, d: 'V', x: 4, y: 0, w: 'UR', c: 'Luogo di residenza di Abraamo prima di Haran (Atti 7:2)' },
            { n: 4, d: 'V', x: 6, y: 0, w: 'GIONA', c: 'Si adirò perché Geova non distrusse Ninive (Giona 4:1)' }
        ]
    },
    {
    id: 10,
    parole: [
        { n: 1, d: 'H', x: 0, y: 0, w: 'LAMEC', c: 'Sesto discendente di Caino (Genesi 4:18)' },
        { n: 4, d: 'H', x: 6, y: 0, w: 'GOSUE', c: 'Conquistò la città di Gerico (Giosuè 6:20)' },
        { n: 6, d: 'H', x: 2, y: 2, w: 'ILCHIA', c: 'Padre di Eliachim che era sopra la casa (Isaia 36:3)' },
        { n: 8, d: 'H', x: 0, y: 4, w: 'GIONATAN', c: 'Morì insieme a Saul sul monte Ghilboa (1 Samuele 31:2)' },
        { n: 10, d: 'H', x: 9, y: 4, w: 'AB', c: 'Mese del calendario biblico (luglio-agosto)' },
        { n: 12, d: 'H', x: 4, y: 6, w: 'BETEL', c: 'Luogo che Giacobbe chiamò porta del cielo (Genesi 28:17)' },
        { n: 14, d: 'H', x: 0, y: 8, w: 'LEA', c: 'Madre di Giuda e Levi (Genesi 29:34, 35)' },
        { n: 1, d: 'V', x: 0, y: 0, w: 'LICAONIA', c: 'Regione di Listra e Derbe visitata da Paolo (Atti 14:6)' }, // CORRETTO: Licaonia invece di Lucania
        { n: 2, d: 'V', x: 4, y: 0, w: 'ESTER', c: 'Cugina di Mardocheo che divenne regina (Ester 2:7)' },
        { n: 3, d: 'V', x: 7, y: 0, w: 'UR', c: 'Città caldea patria di Abraamo e Sara' },
        { n: 5, d: 'V', x: 10, y: 0, w: 'RE', c: 'Titolo di Davide, Salomone ed Ezechia' },
        { n: 13, d: 'V', x: 5, y: 6, w: 'AT', c: 'Sigla usata per le Scritture Ebraiche' }
    ]
}

];

                
