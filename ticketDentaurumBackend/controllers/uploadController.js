const Ticket = require("../models/tickets-model");

const uploadImagesArray = async(req, res) => {
    var images = [];
    req.files.forEach(element => images.push(element.path));
    const ticket = await Ticket.findOneAndUpdate({ _id: req.params.ticketID }, { images: images }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data! " + err);
        }
    });
    res.json(ticket);
    res.status(204).end();
};

const uploadSingleImage = async(req, res, next) => {
    console.log(req.file.path);
    const ticket = await Ticket.findById(req.params.ticketID);
    if (ticket != null) {
        ticket.images.push(req.file.path);
        ticket.save();
    }
    res.json(ticket);
    res.status(204).end();

}


exports.uploadImagesArray = uploadImagesArray;
exports.uploadSingleImage = uploadSingleImage;