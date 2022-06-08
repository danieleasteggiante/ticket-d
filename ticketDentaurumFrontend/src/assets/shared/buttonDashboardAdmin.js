export const BUTTON_DASHBOARD_ADMIN = [{
        id: 0,
        label: 'Visualizza tuoi ticket aperti',
        icon: 'fa fa-list-alt fa-4x mb-2',
        text: "Accedendo a quest'area potrai visualizzare tutte le richieste di assistenza che ancora non sono concluse, per verificarne l'andamento e le risposte del nostro esperto. Attendere la risposta prima di aggiungere un nuovo messaggio.",
        button_text: 'Visualizza',
        action: 'openTicket'
    },
    {
        id: 1,
        label: 'Visualizza i tuoi ticket conclusi',
        icon: 'fa fa-book fa-4x mb-2',
        text: "Accedendo a quest'area potrai visualizzare tutte le richieste di assistenza concluse, in questo modo potrai attingere al tuo storico che diventerà una sorta di 'manuale personalizzato' di utilizzo dei nostri prodotti.",
        button_text: 'Visualizza',
        action: 'setViewClosedTickets',
    },
    {
        id: 2,
        label: 'Cerca Ticket',
        icon: 'fa fa-search fa-4x mb-2',
        text: "Ricerca tra i ticket conclusi per parola chiave",
        button_text: 'Compila il form',
        action: 'searchTicket',
    },
    {
        id: 3,
        label: 'Segnala utente',
        icon: 'fa fa-exclamation fa-4x mb-2',
        text: "Segnala a Dentaurum Italia una richiesta non pertinente",
        button_text: 'Compila il form',
        action: 'reportUser',
    },
];