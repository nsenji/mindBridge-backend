const jwt = require('jsonwebtoken');


exports.get_videosdk_key = (req, res, next) => {

    try {
        const options = {
            expiresIn: '120m',
            algorithm: 'HS256'
        };
        const payload = {
            apikey: process.env.VIDEOSDK_API_KEY,
            permissions: [`allow_join`], // `ask_join` || `allow_mod`
            version: 2, //OPTIONAL
        };

        const token = jwt.sign(payload, process.env.VIDEOSDK_SECRET_KEY, options);

        res.status(200).json({ message:"success", data:token})

    } catch (error) {

        res.status(400).json({message:"There was an error :", error:error })

    }

}