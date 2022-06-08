const express = require("express");

const router = express.Router();
//const fileUpload = require("../controllers/fileUpload");




const ticketsController = require("../controllers/ticketsController");

router.get('/', ticketsController.getTickets);
router.get('/all', ticketsController.getAllTickets);
router.post('/', ticketsController.createTickets);
router.delete('/:ticketID', ticketsController.deleteTicket);


router.post('/message/:ticketID', ticketsController.addMessage);
router.post('/message/:ticketID/reopen', ticketsController.reopenTicket);

router.post('/message/:ticketID/Admin', ticketsController.addAdmin);

module.exports = router;