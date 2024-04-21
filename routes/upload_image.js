const express = require('express')
const multer = require('multer');
const router = express.Router();

function getFileExtension(filename) {
    // Split the filename into an array of substrings
    const parts = filename.split('.');

    // Get the last element of the array, which represents the file extension
    const extension = parts[parts.length - 1];

    // Return the file extension 
    return extension.toLowerCase(); 
}
const storage_1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        const doctorID = req.body.doctorID
        const filename = file.originalname
        const fileExtension = getFileExtension(filename)
        cb(null, doctorID + "." + fileExtension)
    },
})


const upload = multer({ storage: storage_1 });

const uploadImageController = require("../controllers/upload_image_controller");


router.post("/uploadavatar", upload.single('avatar'), uploadImageController.uploadImage);

module.exports = router;