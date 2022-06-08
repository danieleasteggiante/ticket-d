const Ticket = require("../models/tickets-model");
const User = require("../models/user-model");

const mailer = require("./mailingController");




const messageCreated = "Egregio Cliente, il nostro consulente ha inviato la risposta alla sua domanda." +
    "Torni nel portale We care e legga la risposta in Visualizza tuoi ticket aperti." +
    "Le ricordiamo che il ticket verrà chiuso automaticamente trascorsi 15 gg dall’ultimo contatto.<br>" +
    "Restiamo a sua disposizione per ulteriori necessità.<br>" +
    "Cordiali saluti <br>" +
    "Ufficio Marketing Dentaurum Italia S.p.a."


const getTickets = async(req, res, next) => {
    const ticket = await Ticket.find({ CodCliente: req.query.CodCliente }).exec();
    res.json(ticket);
}

const getAllTickets = async(req, res, next) => {
    const ticket = await Ticket.find({}).exec();
    res.json(ticket);
}

const createTickets = async(req, res, next) => {
    const createTickets = new Ticket(
        req.body
    );
    const result = await createTickets.save();
    mailer.emailSender("grafica@dentaurum.it", "Nuovo ticket", "<b>In attesa di essere moderato</b>").catch(console.error);

    res.json(result);
}

const addMessage = async(req, res, next) => {
    const ticket = await Ticket.findById(req.params.ticketID);
    if (ticket != null) {
        ticket.messages.push(req.body);
        ticket.save();
    }

    res.json(ticket);

    if (req.body.author === 'user') {
        const user = await User.findOne({ RagioneSociale: ticket.Admin }).exec();
        mailer.emailSender(user.mail, "Nuovo messaggio", "<b>Richiesta di assistenza in entrata</b>").catch(console.error);
        console.log('mail sended')

    } else {
        const user = await User.findOne({ CodCliente: ticket.CodCliente }).exec();
        mailer.emailSender(user.mail, "Nuovo messaggio", messageCreated).catch(console.error);
        console.log("admin")
    }

}


const reopenTicket = async(req, res, next) => {
    const ticket = await Ticket.findOneAndUpdate({ _id: req.params.ticketID }, { status: 'open' }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!" + err);
        }
    })

    res.json(ticket);
}

const addAdmin = async(req, res, next) => {
    const ticket = await Ticket.findOneAndUpdate({ _id: req.params.ticketID }, { Admin: req.body.Admin }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!" + err);
        }
    })

    res.json(ticket);

    const user = await User.findOne({ RagioneSociale: ticket.Admin }).exec();
    if (user.userType === 'admin') {
        mailer.emailSender(user.mail, "Nuovo messaggio", "<b>Richiesta di assistenza in entrata</b>").catch(console.error);
        console.log('mail sended')
    }
}

const deleteTicket = async(req, res, next) => {
    Ticket.findByIdAndRemove(req.params.ticketID, function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log(docs._id);
            res.send(docs._id);
        }
    })

}

exports.getTickets = getTickets;
exports.createTickets = createTickets;
exports.addMessage = addMessage;
exports.addAdmin = addAdmin;
exports.getAllTickets = getAllTickets;
exports.reopenTicket = reopenTicket;
exports.deleteTicket = deleteTicket;