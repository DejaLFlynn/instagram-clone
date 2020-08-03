const admin = require('../firebase')

const checkFirebaseToken = async(req, res, next)=>{
    try {
        const token = req.headers.authtoken;
        const decodedToken = await admin.auth().verifyIdToken(token)
        const uid= decodedToken.uid;
        req.users_id= uid;
        next()
    } catch (error) {
        console.log(error, 'token error')
        res.status(401).json({message: 'no user auth'})
    }
}

module.exports = {
    checkFirebaseToken
}