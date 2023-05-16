const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Categories = mongoose.model("Categories", CategoriesSchema)

module.exports = Categories