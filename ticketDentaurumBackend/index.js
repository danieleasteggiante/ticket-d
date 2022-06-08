const express = require("express");
const bodyPareser = require("body-parser");
const usersRoute = require("./routes/usersRoute");
const ticketsRoute = require("./routes/ticketsRoute");
const uploadRoute = require("./routes/uploadRoute");
var path = require('path');
var auth = require('./middleware/check_auth');


require('./connect/connection');

const crono = require('./scheduled_tasks/close-old-ticket');
const updateDB = require('./scheduled_tasks/updateDB')

var cron = require('node-cron');
cron.schedule(' 53 14 * * * ', function() {
    updateDB()
});

cron.schedule(' 0 2 * * *', () => {
    console.log("start close")
    crono()
});

const app = express();
app.use(bodyPareser.json())
app.use('/uploads/images', express.static(path.join('uploads', 'images')));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,DELETE'),
        res.header('Access-Control-Allow-Credentials', true);
    next();
});

//------------------------Multer
/* var storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, './uploads/images');
    },
    filename: function(request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

app.post('/api/upload/:ticketID', upload.array('images', 2), function(req, res) {
    console.log(req.body); // form fields
    console.log(req.file); // form files
    res.send('images Added');
    res.status(204).end();
}); */
//------------------------End---Multer

app.use('/api/users', usersRoute);
app.use('/api/tickets', auth, ticketsRoute);
app.use('/api/upload', auth, uploadRoute);

app.use(function(err, req, res, next) {
    res.send(err);
});

app.listen(5000);
