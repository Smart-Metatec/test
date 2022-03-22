const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()

server.use(cors({
    credentials: true,
    origin: "https://test.smartmetatec.com"
}))

server.get("/:message", (req, res) => {
    res.send(`${req.params.message}`)
})


server.listen(0, (req, res) => {
    console.log("Server is running")
})