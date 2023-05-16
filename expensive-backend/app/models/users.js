const mongoose = require("mongoose")
const isEmail = require("validator/lib/isEmail")
const bcryptjs = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return isEmail(value)
            },
            message: function () {
                return "Invalid email format"
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    }

}, { timestamps: true })

userSchema.pre("save", function (next) {
    const user = this
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    next()
                })

        })
})

const User = mongoose.model("User", userSchema)

module.exports = User