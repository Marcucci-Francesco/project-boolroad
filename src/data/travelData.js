const travelsData = [
    {
        ID: 1,
        destination: "Roma",
        startDate: "2025-03-10T00:00:00.000Z",
        endDate: "2025-03-15T00:00:00.000Z",
        tourLeader: "Marco Rossi",
        image: '/img/Roma.jpg',
        participants: [
            {
                nome: "Giulia",
                cognome: "Bianchi",
                codiceFiscale: "BNCGLL98A41H501K",
                numeroDiTelefono: "3456789012",
                contattoDiEmergenza: {
                    nome: "Luca",
                    cognome: "Bianchi",
                    numeroDiTelefono: "3298765432",
                    mail: "luca.bianchi@email.com"
                }
            },
            {
                nome: "Andrea",
                cognome: "Verdi",
                codiceFiscale: "VRDNDR85C11F205X",
                numeroDiTelefono: "3467890123",
                contattoDiEmergenza: {
                    nome: "Francesca",
                    cognome: "Verdi",
                    numeroDiTelefono: "3287654321",
                    mail: "francesca.verdi@email.com"
                }
            }
        ]
    },
    {
        ID: 2,
        destination: "Parigi",
        startDate: "2025-04-05T00:00:00.000Z",
        endDate: "2025-04-12T00:00:00.000Z",
        tourLeader: "Anna Ferrari",
        image: '/img/Parigi.jpg',
        participants: [
            {
                nome: "Lorenzo",
                cognome: "Ricci",
                codiceFiscale: "RCCLRN90D15H501W",
                numeroDiTelefono: "3478901234",
                contattoDiEmergenza: {
                    nome: "Marta",
                    cognome: "Ricci",
                    numeroDiTelefono: "3276543210",
                    mail: "marta.ricci@email.com"
                }
            },
            {
                nome: "Elena",
                cognome: "Rossi",
                codiceFiscale: "RSSLNE88D22H501M",
                numeroDiTelefono: "3456789999",
                contattoDiEmergenza: {
                    nome: "Giovanni",
                    cognome: "Rossi",
                    numeroDiTelefono: "3291234567",
                    mail: "giovanni.rossi@email.com"
                }
            }
        ]
    },
    {
        ID: 3,
        destination: "Berlino",
        startDate: "2025-06-20T00:00:00.000Z",
        endDate: "2025-06-30T00:00:00.000Z",
        tourLeader: "Davide Bianchi",
        image: '/img/Berlin.jpg',
        participants: [
            {
                nome: "Matteo",
                cognome: "Romano",
                codiceFiscale: "RMNMTT80L22H501X",
                numeroDiTelefono: "3490123456",
                contattoDiEmergenza: {
                    nome: "Silvia",
                    cognome: "Romano",
                    numeroDiTelefono: "3254321098",
                    mail: "silvia.romano@email.com"
                }
            },
            {
                nome: "Sara",
                cognome: "Neri",
                codiceFiscale: "NRSARA92C10H501P",
                numeroDiTelefono: "3509876543",
                contattoDiEmergenza: {
                    nome: "Luca",
                    cognome: "Neri",
                    numeroDiTelefono: "3212345678",
                    mail: "luca.neri@email.com"
                }
            },
            {
                nome: "Riccardo",
                cognome: "Galli",
                codiceFiscale: "GLLRCC81H15H501L",
                numeroDiTelefono: "3511234567",
                contattoDiEmergenza: {
                    nome: "Elisa",
                    cognome: "Galli",
                    numeroDiTelefono: "3245678901",
                    mail: "elisa.galli@email.com"
                }
            }
        ]
    },
    {
        ID: 4,
        destination: "New York",
        startDate: "2025-09-10T00:00:00.000Z",
        endDate: "2025-09-20T00:00:00.000Z",
        tourLeader: "Alessandro Conti",
        image: '/img/NewYork.jpg',
        participants: [
            {
                nome: "Chiara",
                cognome: "De Luca",
                codiceFiscale: "DLCCRR88G11H501W",
                numeroDiTelefono: "3529876543",
                contattoDiEmergenza: {
                    nome: "Federico",
                    cognome: "De Luca",
                    numeroDiTelefono: "3265432109",
                    mail: "federico.deluca@email.com"
                }
            },
            {
                nome: "Luca",
                cognome: "Marini",
                codiceFiscale: "MRNLCA89M22H501T",
                numeroDiTelefono: "3554321987",
                contattoDiEmergenza: {
                    nome: "Francesco",
                    cognome: "Marini",
                    numeroDiTelefono: "3219876543",
                    mail: "francesco.marini@email.com"
                }
            },
            {
                nome: "Beatrice",
                cognome: "Pellegrini",
                codiceFiscale: "PLGBTR87C30H501V",
                numeroDiTelefono: "3567890123",
                contattoDiEmergenza: {
                    nome: "Alessandro",
                    cognome: "Pellegrini",
                    numeroDiTelefono: "3198765432",
                    mail: "alessandro.pellegrini@email.com"
                }
            },
            {
                nome: "Giorgio",
                cognome: "Colombo",
                codiceFiscale: "CLMGRG91D25H501Q",
                numeroDiTelefono: "3576543210",
                contattoDiEmergenza: {
                    nome: "Simone",
                    cognome: "Colombo",
                    numeroDiTelefono: "3123456789",
                    mail: "simone.colombo@email.com"
                }
            }
        ]
    },
    {
        ID: 5,
        destination: "Tokyo",
        startDate: "2025-12-01T00:00:00.000Z",
        endDate: "2025-12-10T00:00:00.000Z",
        tourLeader: "Martina Ferrari",
        image: '/img/Tokyo.jpg',
        participants: [
            {
                nome: "Federico",
                cognome: "Gatti",
                codiceFiscale: "GTTFDC85A10H501X",
                numeroDiTelefono: "3587654321",
                contattoDiEmergenza: {
                    nome: "Giulia",
                    cognome: "Gatti",
                    numeroDiTelefono: "3112345678",
                    mail: "giulia.gatti@email.com"
                }
            },
            {
                nome: "Roberta",
                cognome: "Sartori",
                codiceFiscale: "SRTROB93M15H501L",
                numeroDiTelefono: "3598765432",
                contattoDiEmergenza: {
                    nome: "Marco",
                    cognome: "Sartori",
                    numeroDiTelefono: "3109876543",
                    mail: "marco.sartori@email.com"
                }
            },
            {
                nome: "Nicola",
                cognome: "Rossi",
                codiceFiscale: "RSSNCL92H30H501P",
                numeroDiTelefono: "3601234567",
                contattoDiEmergenza: {
                    nome: "Francesca",
                    cognome: "Rossi",
                    numeroDiTelefono: "3098765432",
                    mail: "francesca.rossi@email.com"
                }
            },
            {
                nome: "Michele",
                cognome: "Fabbri",
                codiceFiscale: "FBBMCH88D20H501M",
                numeroDiTelefono: "3612345678",
                contattoDiEmergenza: {
                    nome: "Matteo",
                    cognome: "Fabbri",
                    numeroDiTelefono: "3087654321",
                    mail: "matteo.fabbri@email.com"
                }
            }
        ]
    }
];

export default travelsData