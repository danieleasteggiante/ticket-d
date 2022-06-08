const express = require("express");

const router = express.Router();

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, './uploads/images');
    },
    filename: function(request, file, callback) {
        console.log(file);
        let ext = file.mimetype.substring(file.mimetype.lastIndexOf('/') + 1, file.mimetype.length);
        console.log(ext);
        callback(null, request.params.ticketID + '_' + file.originalname + "." + ext)
    }
});

var upload = multer({ storage: storage });

const uploadController = require("../controllers/uploadController");

router.post('/:ticketID', upload.array('images', 5), uploadController.uploadImagesArray);
router.post('/:ticketID/single', upload.single('imageSupplementare'), uploadController.uploadSingleImage);


module.exports = router;