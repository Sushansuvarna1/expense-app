const mongoose = require("mongoose")

const Schema = mongoose.Schema

const budgetSchema = new Schema({
    amount: {
        type: String,
        required: true,
        default: 0
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true

    }
}, { timestamps: true })

const Budget = mongoose.model("Budget", budgetSchema)

module.exports = Budget