const DATABASE_SCHEMI = [
    {
        id: 1,
        parole: [
            {x:0, y:0, d:'H', n:'1', w:'GERUSALEMME', c:'La città santa'},
            {x:0, y:2, d:'H', n:'4', w:'NOE', c:'Costruì l arca'},
            {x:5, y:2, d:'H', n:'5', w:'GIOSIA', c:'Re che restaurò il tempio'},
            {x:0, y:4, d:'H', n:'7', w:'SARA', c:'Moglie di Abraamo'},
            {x:5, y:4, d:'H', n:'8', w:'EGITTO', c:'Paese della schiavitù'},
            {x:0, y:6, d:'H', n:'10', w:'BETEL', c:'Significa Casa di Dio'},
            {x:6, y:6, d:'H', n:'11', w:'MOSE', c:'Guidò l esodo'},
            {x:2, y:8, d:'H', n:'13', w:'ADAMO', c:'Il primo uomo'},
            {x:8, y:8, d:'H', n:'14', w:'ASA', c:'Re di Giuda zelante'},
            {x:0, y:10, d:'H', n:'15', w:'TESTIMONIANZA', c:'Lavoro ordinato da Gesù'},
            {x:0, y:0, d:'V', n:'1', w:'GIONA', c:'Fuggì a Tarsis'},
            {x:2, y:0, d:'V', n:'2', w:'ROVETO', c:'Quello ardente di Mosè'},
            {x:4, y:0, d:'V', n:'3', w:'SET', c:'Figlio di Adamo'},
            {x:6, y:0, d:'V', n:'5', w:'GIOBBE', c:'Esempio di pazienza'},
            {x:8, y:0, d:'V', n:'6', w:'MALCO', c:'Perse un orecchio nel Getsemani'},
            {x:10, y:0, d:'V', n:'16', w:'EMMAUS', c:'Sulla via verso questo villaggio'},
            {x:1, y:4, d:'V', n:'7', w:'ABILE', c:'Significa "Soffio" o "Vanità"'},
            {x:3, y:4, d:'V', n:'9', w:'ARARAT', c:'Monte dell arca'},
            {x:5, y:6, d:'V', n:'12', w:'ESAÙ', c:'Vendette la primogenitura'},
            {x:7, y:7, d:'V', n:'17', w:'SINA', c:'Il monte della Legge'}
        ]
    },
    {
        id: 2,
        parole: [
            {x:0, y:0, d:'H', n:'1', w:'BABILONIA', c:'Città della confusione'},
            {x:0, y:2, d:'H', n:'2', w:'ESTA', c:'Regina che salvò il suo popolo'},
            {x:6, y:2, d:'H', n:'3', w:'UR', c:'Città natale di Abraamo'},
            {x:2, y:4, d:'H', n:'4', w:'GIORDANO', c:'Fiume dove fu battezzato Gesù'},
            {x:0, y:6, d:'H', n:'5', w:'NAZARET', c:'Dove crebbe Gesù'},
            {x:8, y:6, d:'H', n:'6', w:'ELI', c:'Sommo sacerdote che educò Samuele'},
            {x:0, y:8, d:'H', n:'7', w:'SINAI', c:'Monte dei comandamenti'},
            {x:6, y:8, d:'H', n:'8', w:'RUTH', c:'Nuora di Naomi'},
            {x:0, y:10, d:'H', n:'9', w:'RISURREZIONE', c:'La speranza cristiana'},
            {x:0, y:0, d:'V', n:'1', w:'BENIAMINO', c:'Ultimo figlio di Giacobbe'},
            {x:2, y:0, d:'V', n:'10', w:'BETSABEA', c:'Madre di Salomone'},
            {x:4, y:0, d:'V', n:'11', w:'LAZZARO', c:'Amico di Gesù risorto'},
            {x:6, y:0, d:'V', n:'12', w:'NINFAS', c:'Cristiano di Laodicea'},
            {x:8, y:0, d:'V', n:'13', w:'IOREB', c:'Altro nome del Sinai'},
            {x:10, y:0, d:'V', n:'14', w:'ARISTARCO', c:'Compagno di Paolo'},
            {x:5, y:5, d:'V', n:'15', w:'ZACCHEO', c:'Salì su un sicomoro'}
        ]
    },
    {
        id: 3,
        parole: [
            {x:0, y:0, d:'H', n:'1', w:'MESSIA', c:'L unto di Dio'},
            {x:7, y:0, d:'H', n:'2', w:'LUCA', c:'L autore del terzo Vangelo'},
            {x:0, y:2, d:'H', n:'3', w:'SAMUELE', c:'Profeta che unse Davide'},
            {x:8, y:2, d:'H', n:'4', w:'ORO', c:'Dono dei magi'},
            {x:0, y:4, d:'H', n:'5', w:'GIONATA', c:'Grande amico di Davide'},
            {x:0, y:6, d:'H', n:'6', w:'EFESO', c:'Una delle sette congregazioni'},
            {x:6, y:6, d:'H', n:'7', w:'SINAI', c:'Monte del patto'},
            {x:0, y:8, d:'H', n:'8', w:'RENE', c:'Dio esamina cuore e...'},
            {x:5, y:8, d:'H', n:'9', w:'GIACOBBE', c:'Padre delle 12 tribù'},
            {x:0, y:10, d:'H', n:'10', w:'PENTECOSTE', c:'Giorno in cui scese lo spirito'},
            {x:0, y:0, d:'V', n:'1', w:'MANNA', c:'Pane dal cielo'},
            {x:2, y:0, d:'V', n:'11', w:'SALOMONE', c:'Il re più saggio'},
            {x:4, y:0, d:'V', n:'12', w:'ISACCO', c:'Figlio della promessa'},
            {x:6, y:0, d:'V', n:'13', w:'ANDREA', c:'Fratello di Simon Pietro'},
            {x:8, y:0, d:'V', n:'14', w:'LOT', c:'Nipote di Abraamo'},
            {x:10, y:0, d:'V', n:'15', w:'AMEN', c:'Così sia'}
        ]
    },
    {
        id: 4,
        parole: [
            {x:0, y:0, d:'H', n:'1', w:'BETSABEA', c:'Moglie di Uria e poi di Davide'},
            {x:9, y:0, d:'H', n:'2', w:'RE', c:'Carica di Ezechia'},
            {x:0, y:2, d:'H', n:'3', w:'IOREB', c:'Altro nome del monte di Dio'},
            {x:6, y:2, d:'H', n:'4', w:'ESTA', c:'Regina coraggiosa'},
            {x:2, y:4, d:'H', n:'5', w:'GOLGOTA', c:'Luogo del cranio'},
            {x:0, y:6, d:'H', n:'6', w:'TABERNACOLO', c:'Tenda dell adunanza'},
            {x:0, y:8, d:'H', n:'7', w:'ELIA', c:'Fu rapito in un turbine'},
            {x:5, y:8, d:'H', n:'8', w:'GALILEA', c:'Regione di origine di molti apostoli'},
            {x:0, y:10, d:'H', n:'9', w:'MELCHISEDEC', c:'Sacerdote dell Altissimo'},
            {x:0, y:0, d:'V', n:'1', w:'BITUME', c:'Usato per l arca di Noè'},
            {x:2, y:0, d:'V', n:'10', w:'TERRA', c:'Creata "nel principio"'},
            {x:4, y:0, d:'V', n:'11', w:'SIGILLO', c:'Posto sulla tomba di Gesù'},
            {x:6, y:0, d:'V', n:'12', w:'ANNA', c:'Madre di Samuele'},
            {x:8, y:0, d:'V', n:'13', w:'ESTER', c:'Sventò il piano di Aman'},
            {x:10, y:0, d:'V', n:'14', w:'AGAR', c:'Serva di Sara'}
        ]
    }
    ];
