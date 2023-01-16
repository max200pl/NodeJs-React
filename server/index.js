require("dotenv").config() // для того чтобы считывать файлы .env
const express = require("express")
const sequelize = require('./db')
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => { // подключения к базе данных 
    try {
        await sequelize.authenticate() // подключения к базе данных 
        await sequelize.sync() // сверяет состояние базы данных со схемой данных 
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // .listen() какой порт должен прослушивать наш сервер 
    } catch (error) {
        console.log(error);
    }
}


start()