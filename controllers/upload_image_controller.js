// // Require the cloudinary library
// const cloudinary = require('cloudinary').v2;

// // Return "https" URLs by setting secure: true
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
// });

// Log the configuration


exports.uploadImage = async (req, res, next) => {

    res.send("file uploaded successfully")

    // const file = req.file;
    // // Use the uploaded file's name as the asset's public ID and 
    // // allow overwriting the asset with new versions
    // const options = {
    //     use_filename: true,
    //     unique_filename: false,
    //     overwrite: true,
    // };

    // try {
    //     console.log("i have reached here yesssssssssss")
    //     // Upload the image
    //     const result = await cloudinary.uploader.upload(file, options);
    //     console.log(result);

    //     return res.status(200).json({ data: result })

    // } catch (error) {
    //     console.error(error);
    // }



}