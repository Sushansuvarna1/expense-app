const User = require("../models/users")
const jwt = require("jsonwebtoken")

const userAuthentication = (req, res, next) => {
    const token = req.headers['authentication']
    let tokenData
    try {
        tokenData = jwt.verify(token, process.env["JWT_TOKEN"])
        User.findById(tokenData.id)
            .then((user) => {
                req.user = user
                next()
            })
            .catch((err) => {
                res.json(err.message)
            })
    }
    catch (e) {
        res.json(e.message)
    }



}

module.exports = userAuthentication

