//* Создаем для каждого роутера соответствующий контроллер 
const { Type } = require('../models/models')
const ApiError = require("../error/ApiError");
class TypeController {
    async create(req, res) {
        const { name } = req.body // тело запроса в post методе 
        const type = await Type.create({ name })
        return res.json(type)
    } // создание типа 

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    } // получение всех типов 
}

module.exports = new TypeController()