const User = require("../models/users")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Budget = require("../models/budget")
const Profile = require("../models/profile")

const userController = {}

userController.register = (req, res, next) => {
  const body = req.body
  const user = new User(body)
  user.save()
    .then((user) => {

      const budget = new Budget({ userId: user._id })
      budget.save()
      const profile = new Profile({ userId: user._id })
      profile.save()

      res.json(user)
    })
    .catch((err) => {
      res.json(err.message)
    })
}

userController.login = (req, res) => {
  const body = req.body
  User.findOne({ email: body.email })
    .then((user) => {
      if (user) {
        bcryptjs.compare(body.password, user.password)
          .then((match) => {
            if (match) {
              const token = jwt.sign({ id: user._id }, process.env["JWT_TOKEN"], { expiresIn: "10d" })
              res.json({
                token: token
              })
            } else {
              res.json({
                errors: "inavlid email and password"
              })
            }
          })
      } else {
        res.json({
          errors: "inavlid email and password"
        })
      }
    })

}

userController.account = (req, res) => {
  res.json(req.user)
}

userController.budget = (req, res) => {
  Budget.findOne({ userId: req.user._id })
    .then((budget) => {
      res.json(budget)
    })
    .catch((err) => {
      res.json(err.message)
    })
}


userController.update = (req, res) => {
  const id = req.params.id
  const body = req.body
  Budget.findOneAndUpdate({ _id: id, userId: req.user._id }, { $set: body }, { new: true, runValidators: true })
    .then((budget) => {
      res.json(budget)
    })
    .catch((err) => {
      res.json(err.mesaage)
    })
}

module.exports = userController