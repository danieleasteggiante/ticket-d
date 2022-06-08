const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersController");
var auth = require('../middleware/check_auth');



router.get('/', usersController.getUser);
router.post('/', usersController.createUser);
router.post('/sendMail', usersController.sendMail);
router.get('/all', auth, usersController.getAllUser);
router.delete('/:Id', usersController.deleteUser);

router.get('/Admin', auth, usersController.getAdminList);
router.post('/from-admin', auth, usersController.createUserFromAdmin);

module.exports = router;
