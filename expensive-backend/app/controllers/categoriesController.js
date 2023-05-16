const Categories = require("../models/categories")
const ExpenseData = require("../models/expense")

const categoriesController = {}

categoriesController.create = (req, res) => {
  const body = req.body
  const category = new Categories(body)
  category.userId = req.user._id
  category.save()
    .then((category) => {
      res.json(category)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

categoriesController.list = (req, res) => {
  Categories.find({ userId: req.user._id })
    .then((category) => {
      res.json(category)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

categoriesController.destroy = (req, res) => {
  const id = req.params.id
  Categories.findOneAndDelete({ _id: id, userId: req.user._id })
    .then((category) => {

      ExpenseData.deleteMany({ categoryId: category._id })
        .then((expense) => {
          res.json(category)
        })
        .catch((err) => {
          res.json(err)
        })
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
}



module.exports = categoriesController