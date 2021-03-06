const User = require("../models/user-model");
var jwt = require('jsonwebtoken');
const mailer = require("./mailingController");
var sha256 = require('js-sha256');



const getUser = async(req, res, next) => {
    try {
        const user = await User.find({ CodCliente: req.query.CodCliente, password: req.query.password }).exec();
        var token = jwt.sign({ CodCliente: user[0].CodCliente, password: user[0].password }, '3498h3nrqhg', { expiresIn: '1h' });
        const response = {
            userInfo: user,
            tokenInfo: token
        }
        res.json(response);
    } catch (err) {
        res.json(err);
    }
}

const getAllUser = async(req, res, next) => {
    const ticket = await User.find({}).exec();
    res.json(ticket);
}

const createUser = async(req, res, next) => {
    const createUser = new User(
        req.body
    );
    const result = await createUser.save();

    res.json(result);
}



const createUserFromAdmin = async(req,res,next) => {
   
    const createUser = new User({
        "CodCliente": req.body.CodCliente,
        "password": sha256(req.body.password),
        "RagioneSociale":req.body.RagioneSociale ,
        "userType": req.body.userType,
        "userArea": req.body.userArea,
        "username": req.body.username,
        "mail": req.body.mail
    }
    );

    const result = await createUser.save();

    res.json(result);
}



const deleteUser = (req, res, next) => {
    User.deleteOne({ CodCliente: req.params.Id }, function(err) {
        if (err) {
            return handleError(err)
        } else {
            return res.send("Deleted " + req.params.Id)
        };
    })
}


const getAdminList = async(req, res, next) => {
    const ticket = await User.find({ userType: 'admin' }).exec();
    res.json(ticket);
}

const sendMail = async(req, res, next) => {
    mailer.emailSender("grafica@dentaurum.it", "User: " + req.body.userCode, req.body.message).catch(console.error);
}




exports.getUser = getUser;
exports.getAllUser = getAllUser;

exports.sendMail = sendMail;


exports.createUser = createUser;
exports.getAdminList = getAdminList;
exports.deleteUser = deleteUser;
exports.createUserFromAdmin = createUserFromAdmin;
