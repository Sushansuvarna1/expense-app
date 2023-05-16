const Profile = require("../models/profile")
const ExpenseData = require("../models/expense")
const User = require("../models/users")
const Categories = require("../models/categories")
const Budget = require("../models/budget")

const deleteController = {}

deleteController.account = (req, res) => {
  const id = req.params.id
  User.findOneAndDelete({ _id:  req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

deleteController.expense = (req, res) => {
  const id = req.params.id
  ExpenseData.deleteMany({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

deleteController.category = (req, res) => {
  const id = req.params.id
  Categories.deleteMany({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

deleteController.profile = (req, res) => {
  const id = req.params.id
  Profile.findOneAndDelete({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

deleteController.budget = (req, res) => {
  Budget.findOneAndDelete({ userId: req.user._id })
    .then((budget) => {
      res.json(budget)
    })
    .catch((err) => {
      res.json(err.message)
    })

}


module.exports = deleteController