require("dotenv").config() // для того чтобы считывать файлы .env
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const app = express() // 24.00 
app.use(cors())
app.use(express.json())
app.use('/api', router) // первый параметр URL по которому роутер должен обрабатываться 

// Обработка ошибок, последний Middleware 
app.use(errorHandler)

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