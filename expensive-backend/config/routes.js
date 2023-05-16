const express = require("express")
const router = express.Router()
const userController = require("../app/controllers/userController")
const categoriesController = require("../app/controllers/categoriesController")
const expenseController = require("../app/controllers/expenseController")
const profileController = require("../app/controllers/profileController")
const deleteController = require("../app/controllers/deleteController")
const upload = require("../app/middlewares/upload")
const userAuthentication = require("../app/middlewares/userAuthentication")


//user
router.post("/user/register", userController.register)
router.post("/user/login", userController.login)
router.get("/user/account", userAuthentication, userController.account)

//budget

router.get('/user/budget', userAuthentication, userController.budget)
router.put('/user/update/:id', userAuthentication, userController.update)

//categories
router.post("/user/categories", userAuthentication, categoriesController.create)
router.get("/user/list", userAuthentication, categoriesController.list)
router.delete("/user/delete/:id", userAuthentication, categoriesController.destroy)

//expense
router.post("/user/expense", userAuthentication, expenseController.create)
router.get("/user/expenselist", userAuthentication, expenseController.list)
router.delete("/user/expensedelete/:id", userAuthentication, expenseController.destroy)
router.put('/user/expenseupdate/:id', userAuthentication, expenseController.update)
router.put('/user/expenseupdateinvoice/:id', userAuthentication, upload.single("invoice"), expenseController.invoice)
router.delete("/user/softdelete/:id", userAuthentication, expenseController.delete)
router.get("/user/softexpenselist", userAuthentication, expenseController.soft)
router.get("/user/softexpenserestore/:id", userAuthentication, expenseController.softrestore)

//profile
router.get("/user/profilelist", userAuthentication, profileController.list)
router.delete("/user/profiledelete/:id", userAuthentication, profileController.delete)
router.put('/user/profileupdate/:id', userAuthentication, upload.single("avatar"), profileController.update)
router.put('/user/profilepicupdate/:id', userAuthentication, upload.single("avatar"), profileController.profile)




//deleteAccount
router.delete("/user/deleteaccount", userAuthentication, deleteController.account)
router.delete("/user/deleteprofile", userAuthentication, deleteController.profile)
router.delete("/user/deleteexpense", userAuthentication, deleteController.expense)
router.delete("/user/deletecategory", userAuthentication, deleteController.category)
router.delete('/user/deletebudget', userAuthentication, deleteController.budget)

module.exports = router