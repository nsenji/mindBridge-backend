
const database = require("../database/index");
const Avatar = database.Avatar;

exports.uploadImage = async (req, res, next) => {

    const doctorID = req.body.doctorID
    const originalName = req.file.originalname
    const fileExtension = getFileExtension2(originalName)
    const filename = doctorID + "." + fileExtension

    object = {
        doctorID: doctorID,
        file_name: filename
    }

    await Avatar.create(object)
        .then(data => {
            res.status(201).json({ message: "avatar uploaded successfully", data: data });
        })
        .catch(err => {

            res.status(400).json({ message: "There was an error while uploading" + err })
        })


}

function getFileExtension2(filename) {
    // Split the filename into an array of substrings
    const parts = filename.split('.');

    // Get the last element of the array, which represents the file extension
    const extension = parts[parts.length - 1];

    // Return the file extension 
    return extension.toLowerCase(); 
}