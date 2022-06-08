require('../connect/connection');
const mailsender = require('../controllers/mailingController');

const Ticket = require("../models/tickets-model");
const User = require("../models/user-model");

module.exports = () => {

    const messageCloseddP1 = 'Egregio Cliente, la informiamo che il ticket: <br>';

    const messageCloseddP2 = '<br>da lei aperto è stato chiuso automaticamente per decorrenza dei termini.' +
        'Le ricordiamo che potrà comunque riaprirlo in qualsiasi momento cliccando sul bottone "Riapri"' +
        'Restiamo a sua disposizione per ulteriori necessità.<br>' +
        'Cordiali saluti<br>' + 'Ufficio Marketing Dentaurum Italia S.p.a.'

    var ticketDelete = []

    const getTickets = async() => {
        var currentDate = new Date();
        const ticket = await Ticket.find({ status: 'open' }).exec()
        ticket.forEach(element => {
            let dateticket = new Date(element.messages[element.messages.length - 1].createdAt);
            dateticket.setDate(dateticket.getDate() + 15);

            console.log(dateticket);
            console.log(dateticket <= currentDate);

            if (dateticket <= currentDate) ticketDelete.push(element);
        })
        return ticketDelete;
    }

    const setClosedTicket = (value) => {
        value.forEach(async(element) => {
            const ticket = await Ticket.findOneAndUpdate({ _id: element.id }, { status: 'closed' }, { new: true }, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!" + err);
                }
                console.log("updated");
            })

            if (ticket != null) {

                const user = await User.findOne({ RagioneSociale: ticket.CodCliente }).exec();
                mailsender.emailSender(user.mail, "Chiusura Ticket", messageCloseddP1 + ticket._id + messageCloseddP2).catch(console.error);
            }
            console.log(ticket);
        })
    }


    getTickets()
        .then((value) => {
            setClosedTicket(value);
            console.log("Ticked controlled");
        })

}