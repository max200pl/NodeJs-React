//* Создаем для каждого роутера соответствующий контроллер 
const { Type } = require('../models/models')
const ApiError = require("../error/ApiError");
class TypeController { // создание типа 
    async create(req, res) {
        const { name } = req.body // тело запроса в post методе 
        const type = await Type.create({ name })
        return res.json(type)
    }

    async getAll(req, res) { // получение всех типов 
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()