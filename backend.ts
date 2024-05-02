import express from "express"
const io = require("socket.io")(3000)

const app = express()

let circle
let cross


io.on("connection", socket => {
    if(!circle) circle = socket
    else if(!cross) cross = socket
})





