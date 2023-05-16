const mongoose = require("mongoose")

const configDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/expensive-app")
        .then(() => {
            console.log("DB is connected")
        })
        .catch(() => {
            console.log("DB is not connected")
        })
}

module.exports = configDB

