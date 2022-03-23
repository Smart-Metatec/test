const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()

server.use(cors({
    credentials: true,
    origin: "*"
}))

server.get("/api", (req, res) => {
    res.json({test: "The test passed"})
})


server.listen()