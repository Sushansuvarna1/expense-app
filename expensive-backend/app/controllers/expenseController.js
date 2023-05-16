
const ExpenseData = require("../models/expense")

expenseController = {}

expenseController.create = (req, res) => {
  const body = req.body
  const expense = new ExpenseData(body)
  expense.userId = req.user._id
  expense.save()
    .then((expense) => {
      res.json(expense)
    })
    .catch((errors) => {
      res.json(errors.message)
    })

}

expenseController.list = (req, res) => {
  ExpenseData.find({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

expenseController.destroy = (req, res) => {
  const id = req.params.id
  ExpenseData.findOneAndDelete({ _id: id, userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}


expenseController.update = (req, res) => {
  const id = req.params.id
 
    const body = req.body
 
    ExpenseData.findOneAndUpdate({ _id: id, userId: req.user._id }, { $set: body }, { new: true, runValidators: true })
      .then((expense) => {
        res.json(expense)
      })
      .catch((err) => {
        res.json(err.mesaage)
      })
  } 

  
expenseController.invoice = (req, res) => {
  if (req.file) {
      const id = req.params.id
      const body = req.body
      body.invoice = req.file.path
      ExpenseData.findOneAndUpdate({ _id: id, userId: req.user._id }, { $set: body }, { new: true, runValidators: true })
          .then((invoice) => {
              res.json(invoice)
          })
          .catch((err) => {
              res.json(err.mesaage)
          })
  } else {
      res.json({
          errors: "only jpg and png file supporter"
      })
  }

}


expenseController.delete = (req, res) => {
  const id = req.params.id
  ExpenseData.deleteById({ _id: id, userId: req.user._id })
    .then((soft) => {
      res.json(soft)
    })
    .catch((err) => {
      res.json(err.message)
    })
}

expenseController.soft = (req, res) => {
  ExpenseData.findDeleted({ userId: req.user._id })
    .then((expense) => {
      res.json(expense)
    })
    .catch((err) => {
      res.json(err.message)
    })

}

expenseController.softrestore = (req, res) => {
  const id = req.params.id
  ExpenseData.restore({ _id: id, userId: req.user._id })
    .then((restore) => {
      res.json(restore)

    })
    .catch((err) => {
      res.json(err.mesaage)
    })
}


module.exports = expenseController