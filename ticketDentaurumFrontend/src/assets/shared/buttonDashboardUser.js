export const BUTTON_DASHBOARD_USER = [{
        id: 0,
        label: 'Apri un nuovo ticket',
        icon: 'fa fa-ticket fa-4x mb-2',
        text: 'Apri un ticket di richiesta di assistenza inserendo le 5 immagini necessarie (OPT, laterale dx, laterale sx, frontale, latero-laterale). Se non disponi di questi file sarà difficile per il nostro consulente darti una mano.',
        button_text: 'Procedi',
        action: 'setNewTicket'
    },
    {
        id: 1,
        label: 'Visualizza i tuoi ticket aperti',
        icon: 'fa fa-list-alt fa-4x mb-2',
        text: "Accedendo a quest'area potrai visualizzare tutte le richieste di assistenza che ancora non sono concluse, per verificarne l'andamento e le risposte del nostro esperto. Prima di aggiungere un nuovo messaggio, attendi la risposta.",
        button_text: 'Visualizza',
        action: 'setViewOpenTickets'
    },
    {
        id: 2,
        label: 'Visualizza i tuoi ticket conclusi',
        icon: 'fa fa-book fa-4x mb-2',
        text: "Accedendo a quest'area potrai visualizzare tutte le richieste di assistenza concluse, in questo modo potrai attingere al tuo storico che diventerà, per te, una sorta di 'manuale personalizzato' di utilizzo dei nostri prodotti.",
        button_text: 'Visualizza',
        action: 'setViewClosedTickets',
    },
    {
        id: 3,
        label: 'Visualizza i nostri relatori',
        icon: 'fa fa-users fa-4x mb-2',
        text: "Visualizza l'elenco dei nostri consulenti pronti ad aiutarti",
        button_text: 'Accedi',
        action: 'setTelephonCall',
    },
];