require('dotenv').config()
const express = require("express")
const cors = require("cors")
const configDB = require("./config/database")
const router = require("./config/routes")
const app = express()
const port = 3055
app.use("/uploads", express.static("uploads"))
app.use(express.json())
app.use(cors())
configDB()

app.use(router)



app.listen(port, () => {
    console.log("Server is connceted to port", port)
})